import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}


  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Missing Authorization header');
    }


    const token = authHeader.split(' ')[1]; // "Bearer token"
    if (!token) {
      throw new UnauthorizedException('Missing token');
    }

    try {
      const decoded = this.jwtService.verify(token, { secret: 'shmira' });
      (req as any).user = decoded; // שומר את המשתמש בתוך הבקשה
      
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
