import { useState } from "react";
import {
  Button,
  Tabs,
  Avatar,
  Progress,
  Breadcrumb,
} from "antd";
import "./Scope.scss";
import { ScopeSidebar, RequestCard, ScopeFilterBar, Comments } from "../../component";
import { IMAGES } from "../../shared";
import type { Comment } from "../../component/scope/comments/Comments";

const Scope = () => {
  const { TabPane } = Tabs;
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Sarah Chen",
      text: "There are no applicable regulatory criteria against which these direct GHG",
      timestamp: "26/11/25, 2:47 PM",
      avatar: "S",
      replies: [],
      isResolved: false,
    },
  ]);

  return (
    <div className="scope-page-container">
      <div className="inner-app-wrap">
        <div className="inner-app-row">
          {/* LEFT SIDEBAR */}
          <div className="scope-sidebar">
            <ScopeSidebar />
          </div>

          {/* MAIN CONTENT */}
          <div className={`content ${isCommentsOpen ? "comments-open" : ""}`}>
            <div className="scope-header">
              <div className="breadcrumb-wrapper">
                <Breadcrumb className="page-breadcrumb">
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>Shell - Air Quality</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="scope-actions">
                <Button className="primary-btn" type="primary" shape="round">
                  <i className="erm-icon ai-icon" /> CHAT
                </Button>
                <Button
                  type="text"
                  aria-label="Comments"
                  onClick={() => setIsCommentsOpen(!isCommentsOpen)}
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
                The category addresses management of air quality impacts
                resulting from stationary (e.g., factories, power plants) and
                mobile sources...
              </p>

              <div className="meta-row">
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

            {/* TABS */}
            <Tabs defaultActiveKey="sent">
              <TabPane tab="Sent (20)" key="sent">
                <div className="sent-tab">
                  <ScopeFilterBar />

                  <div className="request-list">
                    {[1, 2, 3, 4].map((id) => (
                      <RequestCard key={id} id={id} statusIcon="time-icon" />
                    ))}
                  </div>
                </div>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    Received (12) <span className="orange-dot"></span>
                  </span>
                }
                key="received"
              >
                <div className="received-tab">
                  <ScopeFilterBar />

                  <div className="request-list">
                    {[1, 2, 3, 4].map((id) => (
                      <RequestCard
                        key={id}
                        id={id}
                        statusIcon="doc-icon"
                        showProgress
                        progress={78}
                      />
                    ))}
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Reviewed (3)" key="reviewed">
                <div className="reviewed-tab">
                  <ScopeFilterBar />

                  <div className="request-list">
                    {[1, 2, 3, 4].map((id) => (
                      <RequestCard
                        key={id}
                        id={id}
                        statusIcon="check-icon"
                        showProgress
                        progress={78}
                      />
                    ))}
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>

          {/* COMMENTS PANEL */}
          <div className={`comments-panel ${isCommentsOpen ? "open" : ""}`}>
            <div className="comments-panel-header">
              <h3 className="comments-panel-title">Comments</h3>
              <Button
                type="text"
                className="comments-close-btn"
                onClick={() => setIsCommentsOpen(false)}
                aria-label="Close Comments"
              >
                <i className="erm-icon close-icon" />
              </Button>
            </div>
            <div className="comments-panel-content">
              <Comments comments={comments} onCommentsChange={setComments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
