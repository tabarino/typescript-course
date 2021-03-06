import { Request, Response } from 'express';
import * as _ from 'lodash';
import { onSuccess } from './onSuccess';
import { onError } from './onError';
import { updateLesson } from '../commands/updateLesson';

export function apiPatchLesson(req: Request, res: Response) {
    const lessonId = req.params.id;
    updateLesson(lessonId, req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, 'Could not update Lesson', res));
}
