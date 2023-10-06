import multer from 'multer';

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: './public/uploads',
//         filename: (req, file, cb) => {
//             console.log("File?Name: "+ file.filename)
//             const uniqueSuffix = `${Date.now()}-${Math.random() * 1E9}`;
//             cb(null, `${file.filename}-${uniqueSuffix}`);
//         }
//     })
// })

const upload = multer({ dest: "uploads/" })

export default upload