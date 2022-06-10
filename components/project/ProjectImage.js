import Image from "next/image";
import RainbowBorderButton from "../button/ButtonRainbowBorder";
const ProjectImage = ({ projectName, href, position, show, index }) => {
  return projectName !== undefined ? (
    <div
      className={`display-container ${show ? "display-block" : "display-none"}`}
    >
      <Image
        priority={true}
        src={`/static/images/${projectName}-screenshot-${index}.png`}
        alt={`${projectName} Screenshot ${index}`}
        width="1100"
        height="560"
        layout="responsive"
        objectFit="cover"
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
        priority={true}
        src={`/static/images/investment.jpg`}
        alt={`Screenshot ${index}`}
        width="1100"
        height="620"
        layout="responsive"
        objectFit="contain"
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
