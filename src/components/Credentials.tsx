import Image from "next/image";
import credentials from "../dist/img/credentials.png"
import toolsUsed from "../dist/img/ToolsUsing.png"
import whatIcanDo from "../dist/img/whatIcanDo.png"
import reactIcon from "../dist/svg/react.svg"
import js from "../dist/svg/js.svg"
import bootstrap from "../dist/svg/bootstrap.svg"
import css from "../dist/svg/css.svg"
import git from "../dist/svg/git.svg"
import html from "../dist/svg/html.svg"
import jquery from "../dist/svg/jquery.svg"
import mui from "../dist/svg/mui.svg"
import netcore from "../dist/svg/netcore.svg"
import php from "../dist/svg/php.svg"
import sass from "../dist/svg/sass.svg"
import tailwind from "../dist/svg/tailwind.svg"
import tsIcon from "../dist/svg/ts.svg"
import vue from "../dist/svg/vue.svg"
import sqlServer from "../dist/svg/sqlServer.svg"
import ai from "../dist/img/ai.png"
import ps from "../dist/img/ps.png"
import figma from "../dist/img/figma.png"
import notion from "../dist/img/notion.png"
import vector2 from "../dist/img/Vector2.png"
import be from "../dist/svg/be.svg"
import ig from "../dist/svg/ig.svg"
import linkedIn from "../dist/svg/linkedin.svg"
import github from "../dist/svg/github.svg"

import Footer from "../dist/svg/Footer.svg"

import { bricolageGrotesque, neueMachina } from "@/dist/fonts/local";
const Credentials = () => {

    type Skills = {
        id: number,
        name: string,
        alternateName: string,
        icon: string | undefined,
        rating: number,
        width: string
    }

    const mySkills: Partial<Skills>[] = [
        {
            id: 1,
            name: 'MUI',
            icon: mui,
            rating: 0,
            width: '125px'
        },
        {
            id: 2,
            name: 'Vue',
            alternateName: 'Vue.JS',
            icon: vue,
            rating: 0,
            width: '125px'
        },
        {
            id: 3,
            name: 'React',
            alternateName: 'ReactJS',
            icon: reactIcon,
            rating: 0,
            width: '125px'
        },
        {
            id: 4,
            name: 'JS',
            alternateName: 'Javascript',
            icon: js,
            rating:0,
            width: '125px',
            
        },
        {
            id: 5,
            name: 'TypeScript',
            alternateName: 'TS',
            icon: tsIcon,
            rating: 0,
            width: '125px'
        },
        {
            id: 6,
            name: 'Sass',
            alternateName: 'SASS',
            icon: sass,
            rating: 0,
            width: '100px'
        },
        {
            id: 7,
            name: 'CSS',
            alternateName: 'CSS',
            icon: css,
            rating: 0,
            width: '100px'
        },
        {
            id: 8,
            name: 'HTML',
            icon: html,
            rating: 0,
            width: '100px'
        },
        {
            id: 9,
            name: 'Bootstrap',
            icon: bootstrap,
            rating: 0,
            width: '100px'
        },
        {
            id: 10,
            name: 'PHP',
            icon: php,
            rating: 0,
            width: '100px'
        },
        {
            id: 11,
            name: 'jQuery',
            icon: jquery,
            rating: 0,
            width: '75px'
        },
        {
            id: 12,
            name: 'Git',
            icon: git,
            rating: 0,
            width: '75px'
        },
        {
            id: 13,
            name: 'Tailwind CSS',
            alternateName: 'Tailwind',
            icon: tailwind,
            rating: 0,
            width: '75px'
        },
        {
            id: 14,
            name: '.NET Core',
            alternateName: 'ASP.NET Core',
            icon: netcore,
            rating: 0,
            width: '75px'
        },
        {
            id: 15,
            name: 'SQL Server',
            icon: sqlServer,
            rating: 0,
            width: '75px'
        }
    ];



    return (
        <div className="relative">
            <div className="bg-gradient-to-b from-[#381050] to-[#000] w-screen text-white p-[100px] pb-[20rem]" id="credentials">
                <div className="grid" style={{ placeItems: 'center' }}>
                    <Image src={credentials} alt="Checkout my stories" />
                </div>
                <div className="flex gap-5 pt-[10rem]">
                    <div className="basis-1/4 ">
                        <div className="flex flex-col gap-3 border border-[#A100FF] border-2 p-[30px] h-full rounded-2xl noise">
                            <span className={`${neueMachina.className} text-[30px]`}>Education</span>

                            <span className={`${neueMachina.className} text-[20px]`}>University of Manila</span>
                            <div>
                                <span className={`${bricolageGrotesque.className} text-[16px]`}>Bachelor of Science in
                                    Computer Science</span>
                            </div>
                            <div className="flex flex-col gap-[2rem] mt-[2rem]">
                                <li>
                                    <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                        Proposed and Developed a student portal.
                                    </span>
                                </li>
                                <li>
                                    <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                        Developed an “Online
                                        Application” for human
                                        resource management.
                                    </span>
                                </li>
                                <li>
                                    <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                        Recognized as Best Designer.
                                    </span>
                                </li>

                            </div>
                        </div>
                    </div>
                    <div className="basis-3/4 flex flex-col gap-5">
                        <div className="flex flex-col gap-3 border border-[#A100FF] border-2 p-[30px] rounded-2xl noise">
                            <span className={`${neueMachina.className} text-[30px]`}>Trainings</span>

                            <div className="flex flex-col">
                                <span className={`${neueMachina.className} text-[20px]`}>Informatics Makati</span>
                                <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                    Technical Education and Skills Development Authority.
                                </span>
                                <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                    April 2015 - May 2015
                                </span>
                            </div>

                            <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                Web Development
                            </span>
                        </div>
                        <div className="flex flex-col gap-3 border border-[#A100FF] border-2 p-[30px] rounded-2xl noise">
                            <span className={`${neueMachina.className} text-[30px]`}>Certificates</span>

                            <div className="flex flex-col">
                                <span className={`${neueMachina.className} text-[20px]`}>Foundations of User Experience (UX) Design</span>
                                <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                    Google / Coursera
                                </span>
                                <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                    July 2022
                                </span>
                            </div>

                            <span className={`${bricolageGrotesque.className} text-[16px]`}>
                                Credential ID: 6G6DZDXEKSKB
                            </span>
                        </div>
                    </div>
                </div>

                <section className="mt-[10rem]">
                    <div className="grid" style={{ placeItems: 'center' }}>
                        <Image src={whatIcanDo} alt="What I can do!" />
                    </div>
                    <div className="px-[10rem] grid grid-cols-5 gap-[3rem]">
                        {mySkills.map(x =>
                            <abbr key={x.id} id="skill-badge" title={x.alternateName ?? x.name}>
                                <Image src={x.icon ?? ""} style={{ width: x.width }} alt={""} />
                            </abbr>
                        )}
                    </div>
                </section>
                <div id="marquee" className="flex w-screen mt-[15rem]">
                    {mySkills.map(x =>
                        <div key={x.id}>
                            <span className={`${neueMachina.className} text-[5rem]`} >{x.alternateName ?? x.name}<small className="text-[2rem]" style={{ placeItems: 'center' }}>&bull;</small></span>
                        </div>
                    )}
                </div>
                <div className="grid " style={{placeItems:'center'}}>
                    <Image src={toolsUsed} alt="Tools I am Using" />
                    <div className="grid grid-cols-4 gap-[5rem] mt-[5rem]">
                        <abbr title="Adobe Illustrator"><Image src={ai} alt="Adobe Illustrator" /></abbr>
                        <abbr title="Photoshop"><Image src={ps} alt="Photoshop" /></abbr>
                        <abbr title="Figma"><Image src={figma} alt="Figma" /></abbr>
                        <abbr title="Notion"><Image src={notion} alt="Notion" /></abbr>
                    </div>
                    <div className="relative">
                    <Image src={vector2} alt="" />
                    </div>
                </div>

                
            </div>
            
            <div className="relative">
                <Image src={Footer} alt="" />
                <div className="grid grid-cols-4 text-white">
                    <a href="https://www.behance.net/paulgonzaga" target="_blank" className="grid grid-cols-2">
                        <Image src={be} alt="" />
                        <span className="grid place-items-center">Behance</span>
                    </a>
                    <a href="https://www.linkedin.com/in/paulgnzaga/" target="_blank" className="grid grid-cols-2">
                        <Image src={linkedIn} alt="" />
                        <span className="grid place-items-center">LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com/kaitouukidd/" target="_blank"  className="grid grid-cols-2">
                        <Image src={ig} alt="" />
                        <span className="grid place-items-center">Instagram</span>
                    </a>
                    <a href="https://github.com/plgnzaga" target="_blank"  className="grid grid-cols-2">
                        <Image src={github} alt="" />
                        <span className="grid place-items-center">Github</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Credentials;