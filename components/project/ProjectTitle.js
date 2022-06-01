import ButtonBorderChange from "../button/ButtonBorderChange";

function ProjectTitle({ projectName, href }) {
  return (
    <div className="project-title">
      <div className="panel uppercase shadow">
        <h1>
          <b>{projectName}</b>
        </h1>
      </div>
      <ButtonBorderChange href={href} content={projectName} />
    </div>
  );
}

export default ProjectTitle;
