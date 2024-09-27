import express from 'express';
import morgan from 'morgan';
import router from './routes/auth.routes.js';
import cookieparser from 'cookie-parser';
import trouter from './routes/task.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(cookieparser());
app.use(express.json());


app.use('/api/', router);
app.use('/api/', trouter);

export default app;