

import { bricolageGrotesque, neueMachina } from "@/dist/fonts/local"
import myStories from "../dist/img/CheckoutMyStories.svg"
import Image from "next/image"


const Stories = () => {
    type Journey = {
        id: number,
        year: number,
        company: string,
        title: string,
        roles: Roles[]
    }
    type Roles = {
        id: number,
        description: string
    }
    const journeys: Journey[] = [
        {
            id: 1,
            year: 2018,
            company: 'Accenture',
            title: 'Data Analyst',
            roles: [{
                id: 1,
                description: 'Responsible on understanding client policy guidelines and making decisions based on them.'
            },
            {
                id: 2,
                description: "Reviewing and analyzing user reports and identify suggesting solutions."
            }
            ]
        },
        {
            id: 2,
            year: 2019,
            company: 'Accenture',
            title: 'Web Developer Intern',
            roles: [
                {
                    id:1,
                    description: "Initiated an “Online Forum” application wherein analyst can ask a query for a specific client policy and members from quality or policy team should answer."
                },
                {
                    id:2,
                    description: "Created a logo for the main Application Suite."
                }
            ]
        },
        {
            id: 3,
            year: 2020,
            company: 'Accenture',
            title: 'Web Developer New Associate',
            roles: [
                {
                    id:1,
                    description: "Revamped the look and feel of an existing landing page and dashboard of the existing Application Suite."
                },
                {
                    id:2,
                    description: "Introduced new icons for each existing applications."
                }
            ]
        },
        {
            id: 4,
            year: 2021,
            company: 'Accenture',
            title: 'Web Developer New Associate',
            roles: [
                {
                    id:1,
                    description: "Created a Wellness Meter app where users are being asked what is their current mood at the moment."
                },
                {
                    id:2,
                    description: "Participated in testing vulnerabilities of existing applications."
                }
            ]
        },
        {
            id: 5,
            year: 2022,
            company: 'Accenture',
            title: 'Web Developer Associate',
            roles: [
                {
                    id:1,
                    description: "Developed a virtual library for users to easily find a reference for enabling categorization and annotation."
                },
                {
                    id:2,
                    description: "Developed a tool for users to find potential leaders within the organization for transitioning key roles."
                },
                {
                    id:3,
                    description: "Designed a chatbot that will help people from the organization stay connected and engaged with each other."
                },
            ]
        },
        {
            id: 6,
            year: 2023,
            company: 'Accenture',
            title: 'Web Developer Associate',
            roles: [
                {
                    id:1,
                    description: `Developed a “Productivity Tool” for employees to track their activities within their shift and to track their time.`
                },
                {
                    id:2,
                    description: "Contributed to an existing application and developed a list management for users."
                },
                {
                    id:3,
                    description: "Became part of the development of a tool used by annotators, reviewers, and auditors to counter-check content"
                },
            ]
        },
        {
            id: 7,
            year: 2024,
            company: 'Accenture',
            title: 'Web Developer Analyst',
            roles: [
                {
                    id:1,
                    description: "Contributed to the team of developing a modular application for internal operations use."
                },
                {
                    id:2,
                    description: "Developed the foundational user interface and user experience design, including the visual aesthetic, for a new learning web application."
                },
                {
                    id:3,
                    description:"Contributed to vulnerability testing of existing applications."
                }
            ]
        }
    ]


    const JourneyCard = (item: Partial<Journey>) => {
        return (
            <div className="flex flex-col ">
                { item.id != undefined &&
                    <div className={`grid-cols-${journeys.length ?? 7} grid  gap-3`}>
                        {Array.from({ length: journeys.length }, (_, index) => (
                            <div key={index} className={`rounded-md ${item.id?? 1 >= index + 1 ? 'bg-white' : 'bg-zinc-100/50'}`} style={{height:'0.65rem'}}></div>
                        ))}
                    </div>
                }
                
                <span className={`${neueMachina.className} text-[50px]`}>{item.year}</span>
                <span className={`${neueMachina.className} text-[25px]`}>{item.company}</span>
                <span className={`${bricolageGrotesque.className} text-[20px] mt-4 mb-4`}>{item.title}</span>
                <div className="flex flex-col gap-[1.5rem]">
                    {item.roles != undefined && item?.roles.map((x) => 
                            <li key={x.id} className={`${bricolageGrotesque.className} text-[20px] font-thin`}>{x.description}</li>
                        )}
                </div>
            </div>
        )
    };


    return (
        <section className="grid w-screen text-white p-[150px]" style={{background:'linear-gradient(to bottom,#282828,#A100ff)'}}>
            <div className="flex" style={{margin:'0 auto'}}>
                <Image src={myStories} alt="Checkout my stories"/>
            </div>
            <div className="grid grid-cols-2 gap-x-[25rem] gap-y-[5rem] pt-[10rem]">
                <div>
                    <span className={`${bricolageGrotesque.className} text-[50px] font-heavy`}>&gt;&gt;&gt;&gt;</span>
                </div>
                {journeys.toSorted((a, b) => b.year - a.year).map((x,index) => 
                    <JourneyCard
                        key={x.id}
                        id={x.id}
                        year={x.year}
                        company={x.company}
                        title={x.title}
                        roles={x.roles}
                    />

                )}
            </div>
        </section>
    )
}
export default Stories;