import { findAllCourses } from '../queries/findAllCourses';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import { onError } from './onError';
import { onSuccess } from './onSuccess';

export function apiGetAllCourses(req: Request, res: Response) {
    // throw new Error('Error Occurred');

    findAllCourses()
        // .then(() => { throw new Error('Error Occurred') })
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, 'Find All Courses Failed', res));
}
