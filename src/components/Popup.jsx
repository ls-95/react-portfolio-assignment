import "./Project.css";

function Popup({ tech, learned, challenges, role, image, title, repo }) {
  return (
    <div>
      <div className="project-container">
        <div className="project-information">
          <p>
            <span>Tech:</span>{" "}
            {tech.map((tech, index) => (
              <span key={index}>{tech} </span>
            ))}
          </p>
          <p>
            <span>Learned:</span> {learned}
          </p>
          <p>
            <span>Challenges:</span> {challenges}
          </p>
          {role && (
            <p>
              <span>Role:</span> {role}
            </p>
          )}
        </div>
        <div className="img-container">
          <img src={image} alt={title} />
        </div>
      </div>
      <hr />
      <div className="btn-container">
        <a href={repo} target="_blank">
          View Repo
        </a>
      </div>
    </div>
  );
}
export default Popup;
