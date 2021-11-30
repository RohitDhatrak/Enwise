import { Request, Response } from "express";

export function errorHandler(err: any, req: Request, res: Response) {
    console.error(err.stack);
    res.status(500).json({ message: "Something broke!!", errMessage: err });
}

module.exports = { errorHandler };
