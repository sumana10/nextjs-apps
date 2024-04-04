import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import client from "@/db"
// const client = new PrismaClient();

export async function GET(req:  NextRequest){

    const user = await client.user.findFirst({

    })
    return NextResponse.json({ email: user?.email, name: "Sumana" })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    // console.log(req.headers.get("authorization"))

    // console.log(req.nextUrl.searchParams.get("name"))
    try{

      await client.user.create({
            data:{
                email: body.username,
                password: body.password
            }
        })
    } catch(e){
        NextResponse.json({message: "Error in creating user"}, {
            status : 411
        });
    }

    return NextResponse.json(
        {
            "message" : "you are signed up"
        }
    );
}