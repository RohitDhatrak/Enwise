import { Request, Response } from "express";

export function routeNotFound(req: Request, res: Response) {
    res.status(404).json({
        message: "Route not found on server, please check",
    });
}

module.exports = { routeNotFound };
