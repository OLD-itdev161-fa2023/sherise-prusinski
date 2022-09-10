import express from 'express';
import connectDatabase from './config/db';

//Initialize express application
const app = express();

//Connect database
connectDatabase();

//API endpoints
app.get('/', (req,res) =>
    res.send('https get request sent to root api endpoint')
);

app.use(express.json);

//Connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));