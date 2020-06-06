// import { findAllCourses } from './queries/findAllCourses';
import express from 'express';

const app = express();

app.listen(8090, () => {
    console.log('Server is running on port 8090.');
});

// findAllCourses()
//     .then(
//         results => console.log(JSON.stringify(results))
//     );
