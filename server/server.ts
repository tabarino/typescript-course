import { Application } from 'express';
import { initRestApi } from './api/api';
import { apiErrorHandler } from './api/apiErrorHandler';

const express = require('express');
const bodyParser = require('body-parser');

const app: Application = express();
app.use(bodyParser.json());

initRestApi(app);
app.use(apiErrorHandler);

app.listen(8090, () => {
    console.log('Server is running on port 8090');
});
