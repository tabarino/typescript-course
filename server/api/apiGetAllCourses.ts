import { findAllCourses } from '../queries/findAllCourses';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import { onError } from './onError';

export function apiGetAllCourses(req: Request, res: Response) {
    // throw new Error('Error Occurred');

    findAllCourses()
        .then(() => { throw new Error('Error Occurred') })
        .then(results => res.status(200).json({ results }))
        .catch(_.partial(onError, 'Find All Courses Failed', res));
}
