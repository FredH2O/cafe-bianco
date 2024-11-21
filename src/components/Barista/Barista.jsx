import team from "./Barista.json";

export default function Barista() {
  return (
    <section
      className="barista-section section-padding section-bg"
      id="barista-team"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
            <em className="text-white">Creative Baristas</em>
            <h2 className="text-white">Meet Our Team</h2>
          </div>
          {/* Team members here */}
          {team.map((member, index) => (
            <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
              <div className="team-block-wrap">
                <div className="team-block-info d-flex flex-column">
                  <div className="d-flex mt-auto mb-3">
                    <h4 className="text-white mb-0">{member.name}</h4>
                    <p className="badge ms-4">
                      <em>{member.role}</em>
                    </p>
                  </div>
                  <p className="text-white mb-0">{member.description}</p>
                </div>
                <div className="team-block-image-wrap">
                  <img
                    src={`${process.env.PUBLIC_URL}/${member.img}`}
                    className="team-block-image img-fluid"
                    alt={member.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
