"use server"

import client from "@/db"

export async function signup(username: string, password: string) {
    // should add zod validation here
    console.log(username)
    const user = await client.user.create({
        data: {
            email: username,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}