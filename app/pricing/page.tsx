'use client';
export default function Pricing(){
  const checkout = async()=>{
    const r = await fetch('/api/billing/checkout',{method:'POST'});
    const d = await r.json(); if(d.url) window.location.href=d.url; else alert('Configura STRIPE_PRICE_MONTHLY_10 en .env');
  };
  return (<div className="max-w-lg mx-auto">
    <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
    <div className="card mt-6">
      <div className="text-xl font-semibold">Starter</div>
      <div className="text-neutral-600 mt-1">$10 USD / mes</div>
      <ul className="list-disc pl-5 text-sm text-neutral-600 mt-3">
        <li>Editor de tarjetas</li><li>Registro por QR</li><li>Apple & Google Wallet</li><li>Dashboard de clientes</li>
      </ul>
      <button onClick={checkout} className="btn mt-4">Suscribirme</button>
    </div></div>);
}
