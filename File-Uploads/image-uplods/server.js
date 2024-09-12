require("dotenv").config();
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const PORT = 5000;
const app = express();

//configure cloudinary
cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//configure multer storage cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder:'images-folder',
        format:async (req, file) => 'png',
        public_id: (req,file) => file.fieldname + '_' + Date.now(),
        transformation: [{
            width: 800,
            height: 600,
            crop:"fill",
        },]
    }
});

// configure multer
const upload = multer({
    storage,
    limits:1024*1020*5 ,// 5 mb
    fileFilter: function(req, file ,cb){
        if(file.mimetype.startsWith('image/')){
            cb(null, true)
        }else{
            cb(new Error('Not an image! please upload an image', false));
        }
    },
});

//? UPLOAD ROUTE
app.post('/upload',upload.single('file'), async (req, res) =>{

    res.json({message: "File upload"});
});

//* Start the server
app.listen(PORT, console.log(`Server is up and running ${PORT}` ));