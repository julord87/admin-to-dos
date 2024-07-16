
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            {description: 'Piedra del alma', complete: true},
            {description: 'Piedra del ogt'},
            {description: 'Piedra del guero'},
            {description: 'Piedra del pipol'},
            {description: 'Piedra del wlington Q'},
        ]
    })

    return NextResponse.json({ message : 'hello' })
}