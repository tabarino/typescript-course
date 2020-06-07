import { Request, Response } from 'express';
import { findCourseDetails } from '../queries/findCourseDetails';
import * as _ from 'lodash';
import { onSuccess } from './onSuccess';
import { onError } from './onError';

export function apiGetCourseDetails(req: Request, res: Response) {
    const courseId = parseInt(req.params.id);
    findCourseDetails(courseId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, 'Find All Courses Failed', res));
}
