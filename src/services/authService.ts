import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '~/database/prisma';
import type { CreateUserRequest, JwtPayload, LoginRequest } from '~/types';

export class AuthService {
  async registerUser(userData: CreateUserRequest) {
    const { username, email, password } = userData;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      throw new Error('Username or email already exists');
    }

    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password_hash: passwordHash,
      },
      select: {
        id: true,
        username: true,
        email: true,
        created_at: true,
      },
    });

    return newUser;
  }

  async loginUser(credentials: LoginRequest) {
    const { username, password } = credentials;

    // Find user
    const userData = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        email: true,
        password_hash: true,
      },
    });

    if (!userData) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, userData.password_hash);

    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }

    const payload: JwtPayload = {
      userId: userData.id,
      username: userData.username,
      iat: Math.floor(Date.now() / 1000),
    };

    const token = jwt.sign(payload, secret, {
      expiresIn: (process.env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn']) || '7d',
    });

    return {
      user: {
        id: userData.id,
        username: userData.username,
        email: userData.email,
      },
      token,
    };
  }

  async getCurrentUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        created_at: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
