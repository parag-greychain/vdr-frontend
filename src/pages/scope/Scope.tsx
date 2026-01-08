import { useState } from "react";
import {
  Button,
  Tabs
} from "antd";
import { ScopeSidebar, RequestCard, ScopeFilterBar, ScopeHeader, Comments, Chat } from "../../component";
import type { Comment } from "../../component/scope/comments/Comments";
import "./Scope.scss";

type RightPanelView = "comments" | "chat" | null;

const Scope = () => {
  const { TabPane } = Tabs;
  const [rightPanelView, setRightPanelView] = useState<RightPanelView>(null);
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
  const [chatMessages, setChatMessages] = useState<any[]>([]);

  const isRightPanelOpen = rightPanelView !== null;
  const isCommentsOpen = rightPanelView === "comments";
  const isChatOpen = rightPanelView === "chat";

  const handleCommentsToggle = () => {
    if (rightPanelView === "comments") {
      setRightPanelView(null);
    } else {
      setRightPanelView("comments");
    }
  };

  const handleChatToggle = () => {
    if (rightPanelView === "chat") {
      setRightPanelView(null);
    } else {
      setRightPanelView("chat");
    }
  };

  const handleClosePanel = () => {
    setRightPanelView(null);
  };

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };
    setChatMessages([...chatMessages, newMessage]);
    // TODO: Add AI response logic here
  };

  return (
    <div className="scope-page-container">
      <div className="inner-app-wrap">
        <div className="inner-app-row">
          {/* LEFT SIDEBAR */}
          <div className="scope-sidebar">
            <ScopeSidebar />
          </div>

          {/* MAIN CONTENT */}
          <div className={`content ${isRightPanelOpen ? "panel-open" : ""}`}>
            <ScopeHeader 
              isScopePage={true} 
              isCommentsOpen={isCommentsOpen}
              isChatOpen={isChatOpen}
              onCommentsToggle={handleCommentsToggle}
              onChatToggle={handleChatToggle}
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

          {/* RIGHT PANEL (COMMENTS OR CHAT) */}
          <div className={`right-panel ${isRightPanelOpen ? "open" : ""}`}>
            <div className="right-panel-header">
              <h3 className="right-panel-title">
                {isCommentsOpen ? "Comments" : isChatOpen ? "Chat" : ""}
              </h3>
              <Button
                type="text"
                className="close-btn"
                onClick={handleClosePanel}
                aria-label="Close Panel"
              >
                <i className="erm-icon close-icon" />
              </Button>
            </div>
            <div className="right-panel-content">
              {isCommentsOpen && (
                <Comments comments={comments} onCommentsChange={setComments} />
              )}
              {isChatOpen && (
                <Chat messages={chatMessages} onSendMessage={handleSendMessage} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
