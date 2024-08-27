import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';
import { getServerSession } from 'next-auth';
import { authOptions } from "../[...nextauth]/route";


export const getUserSession = async () => {
    const session = await getServerSession(authOptions);

    return session?.user;
}

export const signInEmailPassword = async (email: string, password: string) => {
    if( !email || !password ) return null;

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if( !user ) {
        const dbUser = await createUser(email, password);
        return dbUser;
    } else {
        const isValid = await bcrypt.compare(password, user.password ?? '');
        if( !isValid ) return null;
        return user;
    }
}

const createUser = async (email: string, password: string) => {
    if( !email || !password ) return null;

    const user = await prisma.user.create({
        data: {
            email,
            password: bcrypt.hashSync(password),
            name: email.split('@')[0]
        }
    });

    return user;
}