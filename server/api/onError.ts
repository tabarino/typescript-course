import { Response } from 'express';

export function onError(message: string, res: Response, err: any) {
    console.error('Promise Chain Error: ', message, err);
    res.status(500).send();
}
