import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { openRoutes } from 'src/auth/guards/public-routes';
import { CustomRequest, JwtPayload } from 'src/interfaces/guards/auth-interface';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly configService: ConfigService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const authHeader = request.headers['authorization'];

        if (openRoutes.includes(request.path)) {
            return true;
        }

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Token not provided');
        }

        const token = authHeader.replace(/^Bearer\s/, '');

        if (!token) {
            throw new UnauthorizedException('Token not provided');
        }

        const decoded = await this.readToken(token);
        (request as CustomRequest).user = decoded;
        return true;
    }

    private async readToken(token: string): Promise<JwtPayload> {
        const secret = this.configService.get<string>('JWT_SECRET');

        if (!secret) {
            throw new Error('JWT_SECRET not configured');
        }

        try {
            const decoded = jwt.verify(token, secret) as jwt.JwtPayload;

            if (!decoded || typeof decoded !== 'object') {
                throw new UnauthorizedException('Invalid token');
            }

            return decoded as JwtPayload;
        } catch (error) {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}