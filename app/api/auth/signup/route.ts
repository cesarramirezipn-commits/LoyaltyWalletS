import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { setSession } from "@/lib/auth";

export async function POST(req:Request){
  const {email,password} = await req.json();
  if(!email || !password) return NextResponse.json({error:'Invalid'}, {status:400});
  const exists = await prisma.user.findUnique({ where: { email } });
  if(exists) return NextResponse.json({error:'exists'},{status:400});
  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hash } });
  await setSession(user.id);
  return NextResponse.json({ ok:true });
}
