import Image from "next/image";
import axios from "axios";

// async function getUserDetails() {
//   const response = await axios.get("http://localhost:3000/api/user")
//   await new Promise(r => setTimeout(r, 500))
//   return response.data;
// }
// import { PrismaClient } from "@prisma/client";
import client from "@/db"

// const client = new PrismaClient();

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
	  return {
      email: user?.email,
      name: "Sumana"
    }
  }  catch(e) {
    console.log(e);
  }
}
export default async function Home() {

  const userData = await getUserDetails();
  console.log(userData)
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <p>{userData?.name}</p>
          <p>{userData?.email}</p>
        </div>
      </div>
    </div>
  );
}
