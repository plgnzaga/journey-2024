import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Home from "./home/page";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4" style={{background:'#282828'}}>
      <Navbar />
     <Home />
      <Sidebar />
      
    </main>
  );
}
