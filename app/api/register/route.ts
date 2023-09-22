import * as z from "zod";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const bodySchema = z.object({
    email: z.string(),
    name: z.string(),
    password: z.string().min(6),
  });

  const body = await request.json();

  const { email, name, password } = bodySchema.parse(body);

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
