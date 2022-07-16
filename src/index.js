import app from './app.js';
import './database';
import {PORT} from './config';
app.listen(PORT);
console.log("server o port", PORT);

