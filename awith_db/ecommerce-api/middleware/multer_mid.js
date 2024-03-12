const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname,'../uploads')); // Specify the directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Specify filename (you can customize this)
    }
});

// Initialize multer instance
const upload = multer({ storage: storage });

module.exports = upload;
