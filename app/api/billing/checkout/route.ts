import { NextResponse } from "next/server";
export async function POST(){
  const url = (process.env.APP_URL||'http://localhost:3000')+'/pricing';
  return NextResponse.json({ url }); // placeholder hasta configurar Stripe
}
