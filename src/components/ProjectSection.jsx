import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [

    {
        id: 1,
        title: "SPEAKOUT",
        description : "An anonymous feedback system built with Next.js, MongoDB, Zod, and AuthJS, featuring AI-powered suggestions using Google Gemini and automated emails via Resend API. Focused on secure authentication, privacy, and real-world API integration.",
        image : "./Projects/speakout.png",
        tags : ["Next.js","TypeScript","MongoDB","vercel"],
        demoUrl : "https://speak-out-puce.vercel.app/",
        githubUrl : "https://github.com/Raman0101/speakOut",
    },
    {
        id: 2,
        title: "EDUGLOW",
        description : "EduGlow is a full-stack learning platform where users can register, enroll in courses, track their learning progress, and make secure payments using Razorpay. Built with Node.js, Express, and MongoDB on the backend and React + Vite on the frontend, it features JWT-based authentication, cloud storage with Cloudinary, and OTP verification. The platform supports automated emails via Nodemailer, real-time feedback, and interactive UI with Framer Motion. It follows a clean MVC architecture and is deployed on Vercel for seamless accessibility.",
        image : "./Projects/eduGlow.png",
        tags : ["React.js","Express.js","Tailwind CSS","node.js","vercel"],
        demoUrl : "https://edu-glow-roan.vercel.app/",
        githubUrl : "https://github.com/Raman0101/EduGlow",
    },

    {
        id: 3,
        title: "SKYCAST",
        description : "Developed a responsive weather application using React, Vite, and Tailwind CSS that delivers real-time weather updates and 14-day forecasts through third-party API integration. The app features an interactive map for exploring geographic weather conditions and includes moon phase tracking, providing users with a comprehensive and engaging forecast experience across all devices.",
        image : "./Projects/weather.png",
        tags : ["React.js","Tailwind CSS"," Third-party weather API","Vercel"],
        demoUrl : "https://sky-cast-tau.vercel.app/",
        githubUrl : "https://github.com/rahul1841/SkyCast",
    }


]

export const ProjectSection = () =>{

    return(

        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center]">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map( (project,key) => (
                        <div 
                        key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">

                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                            </div>

                            <div className="p-6"> 
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-sm border font-medium rounded-full bg-primary/20 text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center ">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>   
                            </div>
                        </div>
                      </div>                        
                    ))}
                </div>

                <div className="text-center mt-12">

                    <a 
                    href="https://github.com/Raman0101"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>

                </div>

            </div>
        </section>
    )
}