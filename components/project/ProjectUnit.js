import ButtonNormal from "../button/ButtonNormal";
import ButtonRainbowBorder from "../button/ButtonRainbowBorder";
import Image from "next/image";

const ProjectUnit = ({ projectName, href, reff }) => {
  return (
    <div className="project-unit row-padding third margin-bottom">
      <div className="card-4">
        <Image
          src={"/static/images/" + projectName + "-screenshot-1.jpg"}
          alt={projectName + " screenshot"}
          className="width-100 project-image"
          onClick={() => (window.location.href = href)}
        />
        <div className="flex-row-space padding-16">
          <ButtonNormal href={`./${projectName}`} content={projectName} />
          <ButtonRainbowBorder href={reff} content={"Register"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectUnit;
