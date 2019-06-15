module.exports = function(app){  
    const multer = require('multer');
    const uploadConfig = require('../config/upload');

    const PostController = require('../controllers/PostController');
    const LikeController = require('../controllers/LikeController');

    const upload = multer(uploadConfig);

    app.get('/posts', PostController.index);
    app.post('/posts', upload.single('image'), PostController.store);

    app.post('/posts/:id/like', LikeController.store);
}