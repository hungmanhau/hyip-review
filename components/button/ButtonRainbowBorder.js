const ButtonRainbowBorder = ({ href, content }) => {
  return (
    <div className="container" onClick={() => (window.location.href = href)}>
      <button
        className="button-register margin-top margin-bottom"
        role="button"
      >
        {content}
      </button>
    </div>
  );
};

export default ButtonRainbowBorder;
