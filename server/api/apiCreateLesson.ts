import { Request, Response } from 'express';
import * as _ from 'lodash';
import { onError } from './onError';
import { onSuccess } from './onSuccess';
import { createLesson } from '../commands/createLesson';

export function apiCreateLesson(req: Request, res: Response) {
    createLesson(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, 'Could not create Lesson', res));
}
