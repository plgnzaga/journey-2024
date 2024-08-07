import { neueMachina ,bricolageGrotesque} from "@/dist/fonts/local"
import Image from "next/image"
import vector1 from "../dist/img/Vector1.png"
import profileBanner from "../dist/img/Profile.png"
import helloText from "../dist/img/Hello.png"
import contactBanner from "../dist/img/ContactBanner.png"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Home() {
    return (
        <>
        <Navbar />
        <section className="text-white" style={{background:'#282828'}}>
            <div className="pb-[150px]">
                <Image
                    src={vector1}
                    width={1135}
                    height={11363}
                    style={{ zIndex: '3', position: 'absolute', top: '-30px', left: '690px' }}
                    priority={false}
                    loading="lazy"
                    alt=""
                />
                <div className="p-4 flex pl-[60px] justify-between" style={{ width: 'calc(100dvw - 60px)' }}>
                    <span>Paul Gonzaga</span>
                    <span>{new Date().getFullYear()}</span>
                </div>
                <div className={`uppercase flex flex-col text-[200px] ${neueMachina.className} justify-between text-center`}>
                    <span>FullStack</span>
                    <span className="text-[#A100FF]">Web         &nbsp;&nbsp;&nbsp;App</span>
                    <span>Developer</span>
                </div>
            </div>

            <div className="flex">
                <Image src={profileBanner} width={900} priority={false} loading="lazy" alt="" />
                <div className="flex flex-col gap-4 mt-[22rem]">
                    <Image src={helloText} priority={false} loading="lazy" alt=""/>
                        <span className={bricolageGrotesque.className} style={{fontSize:'30px'}}>
                            I’m Paul. With more than 4 years of experience in Full-stack Web Development
                            mainly handling SaaS applications, incorporating my passion for usability and
                            user experience design principles into my development work.
                        </span>
                    <Image src={contactBanner} priority={false} loading="lazy" style={{position:'relative',left:'-50px'}} alt=""/>
                </div>
            </div>
            

        </section>
        <Sidebar />
        </>
    )
}