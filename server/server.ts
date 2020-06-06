import { findAllCourses } from './queries/findAllCourses';
import express, { Application } from 'express';

const app: Application = express();

app.route('/api/courses').get((req, res) => {
    findAllCourses()
        .then(results => {
            res.status(200).json(results);
        });
});

app.listen(8090, () => {
    console.log('Server is running on port 8090.');
});
