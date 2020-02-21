const express = require('express');
const jsonServer = require('json-server');
const fileUpload = require('express-fileupload');
const path = require('path');
const jimp = require('jimp');
const fs = require('fs');
const appRoot = require('app-root-path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const getFileExt = fileName => fileName.split('.').pop();
const joinPath = fileName => path.join(appRoot.path, `/resources/${fileName}`);

server.use('/static', express.static(path.join(__dirname, 'resources')));
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(fileUpload());


server.post('/upload', async (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  const { file } = req.files;
  const ext = getFileExt(file.name);
  const image = `${file.md5}.${ext}`;
  const thumbnail = `${file.md5}-thumb.${ext}`;
  const imagePath = joinPath(image);
  const thumbnailPath = joinPath(thumbnail);
  const resp = {
    image,
    thumbnail
  };

  if (fs.existsSync(imagePath) && fs.existsSync(thumbnailPath)) {
    return res.send(resp);
  }

  try {
    const readPic = await jimp.read(file.data);

    readPic.resize(372, jimp.AUTO).write(imagePath);
    readPic.resize(132, jimp.AUTO).write(thumbnailPath);
  } catch (e) {
    return res.status(500).send(e);
  }

  return res.send(resp);
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
