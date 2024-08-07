import Image from "next/image";
import credentials from "../dist/img/credentials.png"
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
            alternateName: 'Material UI',
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
                            <div key={x.id} id="skill-badge">
                                <Image src={x.icon ?? ""} style={{ width: x.width }} alt={""} />
                            </div>
                        )}
                    </div>
                </section>
                <div id="marquee" className="absolute w-screen mt-[10rem]">
                {mySkills.map(x =>
                    <>
                        <span className={`${neueMachina.className} text-[5rem]`} key={x.id}>{x.alternateName ?? x.name}<small className="text-[2rem]" style={{ placeItems: 'center' }}>&bull;</small></span>
                    </>
                )}
                </div>

                
            </div>
            
        </div>
    )
}
export default Credentials;