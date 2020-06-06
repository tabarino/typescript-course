import { findAllCourses } from '../queries/findAllCourses';
import { Request, Response } from 'express';

export function apiGetAllCourses(req: Request, res: Response) {
    // throw new Error('Error Occurred');

    findAllCourses()
        .then(() => { throw new Error('Error Occurred') })
        .then(results => res.status(200).json({ results }))
        .catch(err => res.status(500).send());
}
