import express from 'express';
import config from './config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));


const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  });

app.listen (config.PORT || 6000, () => {
  console.log ("Server started at http://localhost:6000")
})