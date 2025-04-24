import { ShowOnScroll } from "../ShowOnScroll";

export const About = () => {
    const frontendSkills = [
        "React",
        "typescripts",
        "Tailwindcss",
    ];

    const backendSkills = [
        "Nodejs",
        "Python",
        "AWS",
    ];

    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <ShowOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">About Me</h2>
                <div className="rounded p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I'm dedicated front-end developer and digital solutions specialist based in Entebbe, Uganda. With a Diploma in Information Technology Business and various software engineering and AI certifications, I blend technical expertise with creative problem-solving to deliver seamless web experiences that cater to my clients’ needs.

                        Over time, I’ve completed numerous projects, including custom WordPress designs and digital platform conversions, empowering businesses and personal brands to establish a strong online presence.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-transalte-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-transalte-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-transalte-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Dip in Infomation Technolgy Business   </strong> Uganda Institute of Information Communication Technolgy 2011 - 2013
                            </li>
                            <hr className="text-white/10" />
                            <li>
                                <strong>Software Engineer</strong> ALX/Holberton School - Frontend Specialization 2022-2024
                            </li>
                            <hr className="text-white/10" />
                            <li>
                                <strong>Nano-degree in UX Design</strong> Udacity - 2021
                            </li>
                        </ul>
                    </div> 

                    <div className="p-6 rounded-xl border-white/10 border hover:-transalte-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 tet-gray-300">
                                <h4 className="font-semibold">Frelance Website Dveloper (Jan. 2025 - Present)</h4>
                                <p>Designing and Mantaining of WordPress based ebsites</p>
                        </div>
                    </div>                     
                </div>
            </div>
            </ShowOnScroll>
        </section>
    )
}