import Link from "next/link";
export default function Page(){
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Tarjetas de lealtad, sin complicarte</h1>
        <p className="mt-3 text-neutral-600">Crea tarjetas para Apple Wallet y Google Wallet. Editor, registro por QR, clientes y sellos.</p>
        <div className="mt-6 flex gap-3"><Link className="btn" href="/auth/signup">Probar ahora</Link><Link className="btn" href="/pricing">Ver precios</Link></div>
      </div>
      <div className="card">
        <div className="text-lg font-semibold">Previsualización</div>
        <div className="rounded-3xl border border-neutral-300 p-4 mt-3" style={{background:'#111',color:'#fff'}}>
          <div style={{opacity:.8}}>SakuraTex Rewards</div>
          <div className="text-2xl font-semibold mt-1">SakuraTex</div>
          <div className="mt-3 text-sm" style={{opacity:.8}}>Progreso de sellos</div>
          <div className="grid grid-cols-5 gap-2 mt-1">
            <div className="w-6 h-6 border border-white/30 rounded-lg flex items-center justify-center">✓</div>
            <div className="w-6 h-6 border border-white/30 rounded-lg flex items-center justify-center">✓</div>
            <div className="w-6 h-6 border border-white/30 rounded-lg flex items-center justify-center">✓</div>
            <div className="w-6 h-6 border border-white/30 rounded-lg"></div>
            <div className="w-6 h-6 border border-white/30 rounded-lg"></div>
          </div>
          <div className="flex gap-2 mt-4"><button className="btn">Añadir a Apple Wallet</button><button className="btn">Guardar en Google Wallet</button></div>
        </div>
      </div>
    </div>
  );
}
