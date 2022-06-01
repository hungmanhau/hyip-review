const ButtonNormal = ({ href, content }) => {
  return (
    <div className="container" onClick={() => (window.location.href = href)}>
      <button className="button-8" role="button">
        {`${content} > review now`}
      </button>
    </div>
  );
};

export default ButtonNormal;
