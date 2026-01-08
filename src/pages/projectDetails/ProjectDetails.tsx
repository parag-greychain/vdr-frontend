import { Breadcrumb } from "antd";
import "./ProjectDetails.scss";
import { IMAGES } from "../../shared";

const ProjectDetails = () => {
  return (
    <div className="project-details-page-container">
      <div className="project-details-header">
        <div className="project-details-header-text-wrap">
          <span>shell</span>
          <p>
            Shell is a global energy company operating across exploration,
            production, refining, and low-carbon solutions. With a presence in
            over 70 countries, Shell supports industries with fuels, lubricants,
            and advanced energy technologies.
          </p>
        </div>
        <div className="project-details-header-breadcrumb">
          <span>Service</span>
          <Breadcrumb className="page-breadcrumb" separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Shell - Air Quality</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="project-details-wrap">
        <div className="project-table-matrix-wrap">
          <div className="flag-matrix-wrap">
            <div className="flag-count-wrap">
              <div className="flag-icon">
                <img src={IMAGES.redFlagIcon} alt="Red Flag" />
              </div>
              <div className="flag-text">Red Flags</div>
              <div className="flag-count">5</div>
            </div>
            <div className="risk-management-matrix-container">
              <div className="risk-management-header">
                Risk Assessment Matrix
                <span> 101 total risks identified</span>
              </div>
              <div className="risk-management-matrix-wrap">
                <div className="risk-management-matrix-text">Severity →</div>

                <div className="risk-management-matrix-grid">
                  {/* Row 1 - High */}
                  <div className="risk-cell green-dark">
                    <span className="risk-number">7</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell yellow">
                    <span className="risk-number">12</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell red">
                    <span className="risk-number">15</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell red-dark">
                    <span className="risk-number">8</span>
                    <span className="risk-label">Risks</span>
                  </div>

                  {/* Row 2 - Medium */}
                  <div className="risk-cell green-dark">
                    <span className="risk-number">5</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell yellow-light highlighted">
                    <span className="risk-number">3</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell red-light highlighted">
                    <span className="risk-number">0</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell orange">
                    <span className="risk-number">9</span>
                    <span className="risk-label">Risks</span>
                  </div>

                  {/* Row 3 - Low */}
                  <div className="risk-cell green-light">
                    <span className="risk-number">14</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell green-medium">
                    <span className="risk-number">8</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell green-teal">
                    <span className="risk-number">4</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell yellow-orange">
                    <span className="risk-number">5</span>
                    <span className="risk-label">Risks</span>
                  </div>

                  {/* Row 4 - Negligible */}
                  <div className="risk-cell green-pale">
                    <span className="risk-number">14</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell green-light">
                    <span className="risk-number">8</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell green-teal">
                    <span className="risk-number">4</span>
                    <span className="risk-label">Risks</span>
                  </div>
                  <div className="risk-cell green-bright">
                    <span className="risk-number">5</span>
                    <span className="risk-label">Risks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>table</div>
        </div>
        <div>Recent Activity</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
