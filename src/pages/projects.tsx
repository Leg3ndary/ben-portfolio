import ProjectPreview from "@/components/ProjectPreview";
import projectPreviews from "@/data/projectPreviews";

export default function Projects() {
    return (
        <>
            <div className="relative top-0 flex justify-center w-full h-[550px] bg-rainbow-gradient animate-breathing-gradient">
                <div className="relative flex h-[600px] lg:h-[300px] bg-white border-black w-11/12 lg:w-[1000px] drop-shadow-2xl mt-44 rounded-3xl">
                    <div className="flex flex-col justify-center w-full h-full p-12">
                        <h2 className="p-2 text-lg text-center">
                            HERE ARE SOME OF MY PROJECTS!
                        </h2>
                        <h1 className="p-2 text-4xl font-black text-center lg:text-6xl">
                            PROJECTS
                        </h1>
                        <p className="p-2 py-5 font-light">
                            I work with many languages and technologies, you can
                            see some of them below! I&apos;m always learning new
                            things, looking for new projects to work on.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-wrap content-center justify-center w-full pt-64 pb-16 lg:pb-20 lg:pt-24">
                <div className="grid gap-y-10 w-11/12 md:w-[600px] xl:w-[1300px] 3xl:w-[1850px] py-5 grid-flow-row grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3">
                    {projectPreviews.map((project, index) => (
                        <ProjectPreview
                            key={index}
                            image={project.image}
                            title={project.title}
                            sub={project.sub}
                            description={project.description}
                            icons={project.icons}
                            color={project.color}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
