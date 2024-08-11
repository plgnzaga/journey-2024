import Credentials from "@/components/Credentials";
import Home from "@/components/Home";
import Stories from "@/components/Stories";


export default function Main() {
  return (
    <main className="flex flex-col items-center justify-between p-4" style={{background:'#282828'}}>
      <Home />
      <Stories />
      <Credentials />
    </main>
  );
}
