// Main starting point of the application
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// DB Setup
mongoose.connect('mongodb://127.0.0.1:27017/marchtech');

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Allow cross-origin resource sharing
app.use(cors());
app.use(router);
app.options('*', cors());

// Application Routes
// router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
