import Link from "next/link";
export default function Nav(){
  return (
    <nav className="border-b border-neutral-200 sticky top-0 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-semibold">Wallet Loyalty Studio</Link>
        <div className="flex gap-2">
          <Link className="btn" href="/pricing">Pricing</Link>
          <Link className="btn" href="/auth/signup">Crear cuenta</Link>
        </div>
      </div>
    </nav>
  );
}
