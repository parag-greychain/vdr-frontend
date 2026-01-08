import { Avatar, Breadcrumb, Button, Progress } from "antd";
import "./ScopeHeader.scss";
import { IMAGES } from "../../../shared";

interface IScopeHeader {
  isScopePage: boolean;
  isCommentsOpen?: boolean;
  isChatOpen?: boolean;
  onCommentsToggle?: () => void;
  onChatToggle?: () => void;
}
const ScopeHeader = (props: IScopeHeader) => {
  const { isScopePage, isCommentsOpen, isChatOpen, onCommentsToggle, onChatToggle } = props;

  return (
    <div className="scope-header-wrapper">
      <div className="scope-header">
        <div className="breadcrumb-wrapper">
          <Breadcrumb className="page-breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Shell - Air Quality</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="scope-actions">
          <Button 
            className={`primary-btn ${isChatOpen ? "active" : ""}`}
            type="primary" 
            shape="round"
            onClick={onChatToggle}
          >
            <i className="erm-icon ai-icon" /> CHAT
          </Button>
          <Button 
            type="text" 
            aria-label="Comments"
            onClick={onCommentsToggle}
            className={isCommentsOpen ? "active" : ""}
          >
            <img src={IMAGES.commentIcon} alt="Comments" />
          </Button>
          <Button type="text" aria-label="Export">
            <img src={IMAGES.exportIcon} alt="Export" />
          </Button>
        </div>
      </div>
      <div className="scope-page-header">
        <h2 className="page-heading">Air Quality</h2>
        <p>
          The category addresses management of air quality impacts resulting
          from stationary (e.g., factories, power plants) and mobile sources...
        </p>

        <div className="meta-row" hidden={!isScopePage}>
          <div className="meta-row-left">
            <div className="collaborators-wrapper">
              <Avatar size={24} src={IMAGES.avatarImage} />
              <div className="collaborators-plus-more">
                <i className="erm-icon plus-icon" />
              </div>
            </div>
            <span className="date-wrap">
              <i className="erm-icon calendar-icon" />
              <span>
                Due :<span className="orange-text"> 20/01/2024</span>
              </span>
            </span>
            <span className="date-wrap">
              <i className="erm-icon calendar-icon" />
              <span>Last Synced : 20/01/2024</span>
            </span>
          </div>
          <div className="meta-row-right">
            <div className="custom-progress">
              <span className="progress-text">67% Completed</span>
              <Progress
                percent={67}
                showInfo={false}
                strokeLinecap="round"
                className="progress-bar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeHeader;
