// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Validator ************
const { check, body } = require('express-validator');

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Middlewares ************
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

// ************ Multer DiskStorage ************
const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		let avatarsFolderPath = path.join(__dirname, '../../public/images/avatars');		
		let acceptedExtensions = ['.jpg', '.jpeg', '.png'];
		let fileExtension = path.extname(file.originalname);
		let extensionIsOk = acceptedExtensions.find(ext => ext === fileExtension);
		if (extensionIsOk) {
			cb(null, avatarsFolderPath);
		}
		cb(null, path.join(__dirname, '../../public/images/errors'));
	},
	filename: (req, file, cb) => {
		let userName = req.body.full_name.replace(/ /g, '-').toLowerCase();
		let finalName = userName + '-' + Date.now() + path.extname(file.originalname);
		cb(null, finalName);
	}
});

const upload = multer({ storage: diskStorage });

// ************ Validations ************
let registerValidations = [
	// El nombre no puede estar vacío
	body('full_name', 'Let us know your name').notEmpty(),
	// El email no puede estar vacío y debe ser un formato de email válido
	body('email')
		.notEmpty().withMessage('Mail cannot be empty').bail()
		.isEmail().withMessage('Please enter a valid email format'),
	// El password no puede estar vacío y debe tener más de 5 letras
	body('password')
		.notEmpty().withMessage('Enter a password').bail()
		.isLength({ min: 5 }).withMessage('Password must be more than 5 characters'),
	// Si se escribió un password, el re_password debe ser igual
	body('re_password', 'Passwords do not match')
		.exists()
		.custom((value, { req }) => req.body.password.length < 5 || value === req.body.password),
	// Se debe elegir un país
	body('country', 'Chose a country of birth').notEmpty(),
	// Se debe elegir una imagen
	body('avatar').custom((value, { req }) => {
		let acceptedExtensions = ['.jpg', '.jpeg', '.png'];
		if (typeof req.file == 'undefined') {
			throw new Error('Chose a profile picture');
		} else if (req.file.originalname) {
			let fileExtension = path.extname(req.file.originalname);
			let extensionIsOk = acceptedExtensions.find(ext => ext === fileExtension);
			if (!extensionIsOk) {
				throw new Error('Valid formats are JPG, JPEG and PNG');
			}
		}
		return true;
	}),
];

/* GET - /users/register */
router.get('/register', guestMiddleware, usersController.register);

/* POST - /users/register */
router.post('/register', upload.single('avatar'), registerValidations, usersController.store);

/* GET - /users/login */
router.get('/login', guestMiddleware, usersController.login);

/* POST - /users/login */
router.post('/login', usersController.processLogin);

/* GET - /users/profile */
router.get('/profile', authMiddleware, usersController.profile);

/* GET - /users/logout */
router.get('/logout', usersController.logout);

module.exports = router;
