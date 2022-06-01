const ButtonElasticity = ({ href, content }) => {
  return (
    <div className="container" onClick={() => (window.location.href = href)}>
      <button className="button-9 grow" role="button">
        Go to {content}'s register site
      </button>
    </div>
  );
};

export default ButtonElasticity;
