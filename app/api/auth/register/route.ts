import prisma from "@/prisma/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

type BodyProps = {
    name: string;
    email: string;
    password: string;
}

export async function POST(req: Request) {
    try {
        const body: BodyProps = await req.json();
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(body.password, salt);
        const userResponse = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: hash
            }
        })
        if (!userResponse) return NextResponse.error()

        return NextResponse.json(userResponse)
    }
    catch (e) {
        return NextResponse.error()
    }
}
export async function GET(req: Request) {
    return NextResponse.json({ message: "Hello World" })
}