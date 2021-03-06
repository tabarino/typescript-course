import { NextFunction, Request, Response } from 'express';

export function apiErrorHandler(err: any, req: Request, res: Response, next: NextFunction ) {
    console.error('API Error Handler Triggered: ', err);
    res.status(500).json({
        errorCode: "ERR-001",
        message: "Internal Server Error"
    });
}
