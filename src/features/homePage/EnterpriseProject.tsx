import ProjectComponent from "../../components/ProjectComponent";
import { projects } from "../../constants/projects";

const EnterpriseProject = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="section-container flex flex-col gap-8 items-center">
        <p className="section-title">INDUSTRY INSIGHTS</p>
        <p className="md:text-[56px] max-md:text-xl font-semibold">Update News & Blogs</p>
        <div className="flex max-md:flex-col w-full justify-between max-md:gap-8">
          {projects.map((item, index) => (
            <ProjectComponent
              key={index}
              image={item.image}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseProject;
