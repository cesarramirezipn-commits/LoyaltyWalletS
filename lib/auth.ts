import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
const secret = new TextEncoder().encode(process.env.APP_SECRET || "dev-secret");
export async function setSession(uid:string){
  const token = await new SignJWT({ uid }).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('7d').sign(secret);
  cookies().set('session', token, { httpOnly:true, path:'/' });
}
export async function getUser(){ try{ const c=cookies().get('session')?.value; if(!c) return null; const {payload}=await jwtVerify(c, secret); return payload as any; }catch{return null;} }
