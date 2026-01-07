import { useState } from "react";
import {
  Button,
  Tabs
} from "antd";
import { ScopeSidebar, RequestCard, ScopeFilterBar, ScopeHeader, Comments } from "../../component";
import type { Comment } from "../../component/scope/comments/Comments";
import "./Scope.scss";

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
            <ScopeHeader 
              isScopePage={true} 
              isCommentsOpen={isCommentsOpen}
              onCommentsToggle={() => setIsCommentsOpen(!isCommentsOpen)}
            />

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
          <div className={`right-panel ${isCommentsOpen ? "open" : ""}`}>
            <div className="right-panel-header">
              <h3 className="right-panel-title">Comments</h3>
              <Button
                type="text"
                className="close-btn"
                onClick={() => setIsCommentsOpen(false)}
                aria-label="Close Comments"
              >
                <i className="erm-icon close-icon" />
              </Button>
            </div>
            <div className="right-panel-content">
              <Comments comments={comments} onCommentsChange={setComments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
