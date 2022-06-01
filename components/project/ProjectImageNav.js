const ProjectImageNav = ({ setIndex }) => {
  return (
    <div className="container dark-grey padding xlarge">
      <div className="left icon-move" onClick={() => setIndex(-1)}>
        ⇽
      </div>
      <div className="right icon-move" onClick={() => setIndex(1)}>
        ⇾
      </div>
      <div className="center">
        <span className="tag demodots border transparent hover-white" />
        <span className="tag demodots border transparent hover-white" />
        <span className="tag demodots border transparent hover-white" />
      </div>
    </div>
  );
};

export default ProjectImageNav;
