const ProjectOverView = ({ data }) => {
  return (
    <div className="container margin-top">
      <div className="card-4">
        <header className="container light-grey">
          <h4>Over view</h4>
        </header>
        {data != undefined ? (
          <div
            className="container"
            dangerouslySetInnerHTML={{ __html: `${data.overView}` }}
          ></div>
        ) : (
          <div className="container">Overview</div>
        )}
      </div>
    </div>
  );
};

export default ProjectOverView;
