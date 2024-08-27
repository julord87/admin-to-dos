
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {

    await prisma.todo.deleteMany();
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
        data: {
            email: 'test1@google.com',
            password: bcrypt.hashSync('123456'),
            roles: ['user', 'admin'],
            todos: {
                create: [
                    {description: 'Piedra del alma', complete: true},
                    {description: 'Piedra del guero'},
                    {description: 'Piedra del pipol'},
                    {description: 'Piedra del wlington Q'},
                ]
            }
        }
    })

    // await prisma.todo.createMany({
    //     data: [
    //         {description: 'Piedra del alma', complete: true},
    //         {description: 'Piedra del ogt'},
    //         {description: 'Piedra del guero'},
    //         {description: 'Piedra del pipol'},
    //         {description: 'Piedra del wlington Q'},
    //     ]
    // })

    return NextResponse.json({ message : 'hello' })
}