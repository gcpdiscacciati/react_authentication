const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,
//     optionsSuccessStatus: 200
// };

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


require('./app/controllers/index')(app);

app.listen(3000);