// apps/app1/app/api/example/route.ts

import { PrismaClient } from '@repo/db/client';
import { NextResponse } from 'next/server';

const client = new PrismaClient();

export const GET = async () => {
    // Create a new user
    const newUser = await client.user.create({
        data: {
            email: "asd@example.com",
            name: "adsads"
        }
    });

    // Fetch all users to verify the addition
    const allUsers = await client.user.findMany();

    return NextResponse.json({
        message: "hi there",
        newUser,
        allUsers
    });
};
