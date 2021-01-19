const express = require('express');
const router = express.Router();
const { Post } = require('../models/Post')
const { auth } = require('../middleware/auth');
const multer = require('multer');
var ffmpeg = require('fluent-ffmpeg');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`)
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== '.mp4' || ext !== '.jpg') {
      return cb(res.status(400).end('only mp4, jpg are allowed'), false);
    }
    cb(null, true)
  }
});

const upload = multer({ storage: storage }).single('file');

//=================================
//             POST
//=================================

router.post('/uploadfiles', (req, res) => {

  // 포스트를 서버에 저장
  upload(req, res, err => {
    if (err) {
      return res.json({ success: false, err })
    }
    return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename, mimetype: res.req.file.mimetype })
  });

});

router.post('/thumbnail', (req, res) => {

  // 썸네일 생성 하고 포스트 러닝타임도 가져오기
  let filePath = ''
  let fileDuration = ''

  // 포스트 정보 가져오기
  ffmpeg.ffprobe(req.body.url, function(err, metadata) {
    console.dir(metadata);
    console.log(metadata.format.duration);
    fileDuration = metadata.format.duration
  });

  // 썸네일 생성
  ffmpeg(req.body.url)
    .on('filenames', function(filenames) {
      console.log('Will generate ' + filenames.join(', '))
      console.log(filenames)
      filePath = 'uploads/thumbnails/' + filenames[0]
    })
    .on('end', function() {
      console.log('Screenshots taken');
      return res.json({ success: true, url: filePath, fileDuration: fileDuration})
    })
    .on('error', function(err) {
      console.error(err);
      return res.json({ success: false, err })
    })
    .screenshots({
      count: 3,
      folder: 'uploads/thumbnails',
      size: '320x320',
      // '%b' : input basename (filename w/o extension)
      filename: 'thumbnail-%b.png'
    })
});

router.post('/uploadPost', (req, res) => {

  // 포스트 정보들을 저장한다.
  const post = new Post(req.body)

  post.save((err, post) => {
      if (err) return res.status(400).json({ success: false, err })
      return res.status(200).json({ success: true });
  });
});

router.get('/getPosts', (req, res) => {

  // 포스트를 DB에서 가져와서 클라이언트에 보낸다.
  Post.find()
    .populate('writer')
    .exec((err, posts) => {
      if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, posts })
    })
});

router.post('/getPostDetail', (req, res) => {

  // 포스트를 DB에서 가져와서 클라이언트에 보낸다.
  Post.findOne({ '_id' : req.body.postId })
    .populate('writer')
    .exec((err, postDetail) => {
      if(err) return res.status(400).send(err);
      return res.status(200).json({ success: true, postDetail })
    })
});

module.exports = router;