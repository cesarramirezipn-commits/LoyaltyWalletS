'use client';
import { useState } from "react";
export default function Signup(){
  const [f,setF]=useState({email:'',password:''});
  const submit=async(e:any)=>{e.preventDefault(); const r=await fetch('/api/auth/signup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...f})}); if(r.ok) window.location.href='/'; else alert('Error');};
  return (<div className="max-w-md mx-auto"><h1 className="text-3xl font-semibold tracking-tight">Crear cuenta</h1><form onSubmit={submit} className="card mt-6 space-y-3"><label className="label">Correo</label><input className="input" type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/><label className="label">Contraseña</label><input className="input" type="password" value={f.password} onChange={e=>setF({...f,password:e.target.value})}/><button className="btn" type="submit">Crear</button></form></div>);
}
