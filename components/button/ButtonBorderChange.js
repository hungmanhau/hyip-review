const ButtonBorderChange = ({ href, content }) => {
  return (
    <div
      onClick={() => (window.location.href = href)}
      className="animated-button margin-bottom"
    >
      <span />
      <span />
      <span />
      <span />
      Join {content}
    </div>
  );
};

export default ButtonBorderChange;
