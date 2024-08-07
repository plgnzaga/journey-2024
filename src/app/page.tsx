import Credentials from "@/components/Credentials";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Stories from "@/components/Stories";
import Image from "next/image";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-between p-4" style={{background:'#282828'}}>
      <Home />
      <Stories />
      <Credentials />
    </main>
  );
}
