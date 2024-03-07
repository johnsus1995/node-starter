import { plainToInstance } from 'class-transformer';
import { ValidationError, validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export const validationMiddleware = (dtoType: any, value: 'body' | 'query' | 'params' = 'body') => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const errors = await validate(plainToInstance(dtoType, req[value]), {
      skipMissingProperties: false,
    });
    if (errors.length > 0) {
      const message = errors.map((err: ValidationError) => Object.values(err.constraints!)).join(', ');
      res.status(400).json(message);
    } else next();
  };
};
