import { neueMachina } from "@/dist/fonts/local"

export default function Home() {
    return (
        <section className="min-h-screen text-white">
            <div className="p-4 flex pl-[60px] justify-between" style={{width:'calc(100dvw - 60px)'}}>
                <span>Paul Gonzaga</span>
                <span>{new Date().getFullYear()}</span>
            </div>
            <div className={`uppercase flex flex-col text-[120px] ${neueMachina.className} justify-between text-center`}>
                <span>FullStack</span>
                <span className="text-[#A100FF]">Web     App</span>
                <span>Developer</span>
            </div>
        </section>
    )
}