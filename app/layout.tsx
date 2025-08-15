import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata = { title: "Wallet Loyalty Studio", description: "Tarjetas de lealtad para Apple/Google Wallet" };
export default function Root({children}:{children:React.ReactNode}){
  return <html lang="es"><body><Nav/><main className="container mt-8">{children}</main><Footer/></body></html>;
}
