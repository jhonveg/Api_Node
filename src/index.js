import app from './app.js';
import conect from './bd.js';


const port = 3000;

app.listen(port);
console.log(`listening on port http://localhost:${port}`);
conect();