import RainbowBorderButton from "../button/ButtonRainbowBorder";
import Title from "../Title";
import ProjectUnit from "./ProjectUnit";

const ProjectList = () => {
  const href = "https://hungba.blog";
  return (
    <div>
      <Title content={"Project list"} />
      <ProjectUnit href={href} projectName={"Project1"} />
      <ProjectUnit href={href} projectName={"Project2"} />
      <ProjectUnit href={href} projectName={"Project3"} />
    </div>
  );
};

export default ProjectList;
