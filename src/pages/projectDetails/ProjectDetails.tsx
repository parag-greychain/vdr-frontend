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
            <div>Risk Assessment Matrix</div>
          </div>
          <div>table</div>
        </div>
        <div>Recent Activity</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
