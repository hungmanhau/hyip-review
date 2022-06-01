import { useState } from "react";
import ProjectImage from "./ProjectImage";
import ProjectImageNav from "./ProjectImageNav";

const ProjectImages = ({ href, projectName }) => {
  const [index, setIndex] = useState(1);
  const setIndexs = (n) => {
    var a = index + n;
    if (a == 0) {
      setIndex(3);
    } else if (a == 4) {
      setIndex(1);
    } else {
      setIndex(a);
    }
  };
  return (
    <div className="container">
      <ProjectImage
        projectName={projectName}
        href={href}
        position={"display-bottomleft"}
        show={index == 1}
        index={1}
      />
      <ProjectImage
        projectName={projectName}
        href={href}
        position={"display-bottommiddle"}
        show={index == 2}
        index={2}
      />
      <ProjectImage
        projectName={projectName}
        href={href}
        position={"display-bottomright"}
        show={index == 3}
        index={3}
      />
      <ProjectImageNav setIndex={setIndexs} />
    </div>
  );
};

export default ProjectImages;
