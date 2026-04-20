import "./Project.css";

function Project(props) {
  return (
    <div className="project-card">
      <h2>{props.title}</h2>
      <hr />
      <p>{props.summary}</p>
      <hr />
      <div className="project-container">
        <div className="project-information">
          <p>
            <span>Tech:</span> {props.tech}
          </p>
          <p>
            <span>Learned:</span> {props.learned}
          </p>
          <p>
            <span>Challenges:</span> {props.challenges}
          </p>
          {props.role && (
            <p>
              <span>Role:</span> {props.role}
            </p>
          )}
        </div>
        <div className="img-container">
          <img src={props.image} alt={props.title} />
        </div>
      </div>
      <hr />
      <div className="btn-container">
        <a href={props.repo} target="_blank">
          View Repo
        </a>
      </div>
    </div>
  );
}

export default Project;
