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
        const user = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })
        if (user) return NextResponse.json({ message: "User already exists" }, { status: 400 })
        const userResponse = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: hash
            }
        })
        if (!userResponse) return NextResponse.json({ message: "Error creating user" }, {status: 400})

        return NextResponse.json(userResponse)
    }
    catch (e) {
        console.log("error from ")
        return NextResponse.error()
    }
}
export async function GET(req: Request) {
    return NextResponse.json({ message: "Hello World" })
}