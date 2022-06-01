import RainbowBorderButton from "../button/ButtonRainbowBorder";
import Image from "next/image";
const ProjectImage = ({ projectName, href, position, show, index }) => {
  return projectName !== undefined ? (
    <div
      className={`display-container ${show ? "display-block" : "display-none"}`}
    >
      <Image
        src={`/static/images/${projectName}-screenshot-${index}.jpg`}
        alt={`${projectName} Screenshot ${index}`}
        className="width-100"
      />
      <div className={`mobile-hide container padding-8 ${position} `}>
        <RainbowBorderButton content={"Discovery website"} href={href} />
      </div>
    </div>
  ) : (
    <div
      className={`display-container ${show ? "display-block" : "display-none"}`}
    >
      <Image
        src={`/static/images/d-screenshot-${index}.jpg`}
        alt={`d Screenshot ${index}`}
        className="width-100"
      />
      <div className={`mobile-hide container padding-8 ${position} `}>
        <RainbowBorderButton
          content={"Discovery website"}
          href={"https://hungba.blog"}
        />
      </div>
    </div>
  );
};

export default ProjectImage;
