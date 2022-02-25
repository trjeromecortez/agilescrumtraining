export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/summary.jpeg" className="img-responsive summary-img" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Summary</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2: "loading..."}</p>
              {/* <h3>Mabuhay Philippines!</h3> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
