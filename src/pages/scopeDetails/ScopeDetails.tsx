import { useState, useMemo, useCallback } from "react";
import { Button, Table, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IMAGES } from "../../shared";
import type { Comment } from "../../component/scope/comments/Comments";
import {
  ScopeFilterBar,
  ScopeHeader,
  ScopeSidebar,
  RiskAssessment,
  Comments,
} from "../../component";
import "./ScopeDetails.scss";
import ChatPanel from "../../component/chat/chatPanel/ChatPanel";

type RightPanelView = "comments" | "chat" | null;

interface FileData {
  key: string;
  title: string;
  path: string;
  icon: "pdf" | "xls";
  aiSummary: string;
  irl: string;
  aiScore: number;
  probability: number;
  status: "Strong" | "No Signal" | "Potential";
  userAvatar: string;
}

interface StatCard {
  title: string;
  value: string | number;
  subtitle?: string;
  iconClass: string;
  colorClass: "blue" | "green" | "red";
}

interface RiskSignal {
  color: "red" | "yellow" | "green" | "white";
  text: string;
  count: number;
}

const RISK_SIGNALS: RiskSignal[] = [
  { color: "red", text: "Strong", count: 5 },
  { color: "yellow", text: "Potential", count: 8 },
  { color: "green", text: "No Signal", count: 10 },
  { color: "white", text: "Not Reviewed", count: 6 },
];

const STAT_CARDS: StatCard[] = [
  {
    title: "All Files",
    value: 5,
    iconClass: "file-blue-icon",
    colorClass: "blue",
  },
  {
    title: "Reviewed Files",
    value: "40%",
    subtitle: "2 of 5 files",
    iconClass: "check-icon",
    colorClass: "green",
  },
  {
    title: "Rejected Files",
    value: "1%",
    subtitle: "2 of 5 files",
    iconClass: "reject-icon",
    colorClass: "red",
  },
];

const MOCK_DATA: FileData[] = [
  {
    key: "1",
    title: "Q3 2024 Financial Statement",
    path: "/Financial/Quarterly Reports",
    icon: "pdf",
    aiSummary: "Host your own AI deep research agent",
    irl: "IRL 1: Provide the impact assessment",
    aiScore: 10,
    probability: 10,
    status: "Strong",
    userAvatar: IMAGES.avatarImage,
  },
  {
    key: "2",
    title: "2006 Waste Management",
    path: "/Financial/Quarterly Reports",
    icon: "xls",
    aiSummary: "Host your own AI deep research agent",
    irl: "IRL 2: Provide the impact assessment",
    aiScore: 10,
    probability: 10,
    status: "No Signal",
    userAvatar: IMAGES.avatarImage,
  },
];

const ScopeDetails = () => {
  const [isRiskAssessmentOpen, setIsRiskAssessmentOpen] = useState(false);
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

  const handleOpenRiskAssessment = useCallback(() => {
    setIsRiskAssessmentOpen(true);
  }, []);

  const handleCloseRiskAssessment = useCallback(() => {
    setIsRiskAssessmentOpen(false);
  }, []);

  const handleAddRisk = useCallback(() => {
    console.log("Risk Assessment Added");
  }, []);

  const handleRowSelectionChange = useCallback(
    (selectedRowKeys: React.Key[], selectedRows: FileData[]) => {
      console.log("Selected Row Keys:", selectedRowKeys);
      console.log("Selected Rows:", selectedRows);
    },
    []
  );

  const columns: ColumnsType<FileData> = useMemo(
    () => [
      {
        title: "Document",
        dataIndex: "title",
        key: "title",
        width: "15%",
        render: (_, record) => (
          <div className="file-title">
            <div className="file-icon">
              <img src={record.icon === "pdf" ? IMAGES.pdfIcon : IMAGES.xlsIcon} alt="file" />
            </div>
            <div className="file-content">
              <div className="file-name">{record.title}</div>
              <div className="file-path">{record.path}</div>
            </div>
          </div>
        ),
      },
      {
        title: "AI Summary",
        dataIndex: "aiSummary",
        key: "aiSummary",
        width: "15%",
        render: (text: string) => <div className="table-two-line">{text}</div>,
      },
      {
        title: "IRL",
        dataIndex: "irl",
        key: "irl",
        width: "15%",
        render: (text: string) => <div className="table-two-line">{text}</div>,
      },
      {
        title: (
          <div className="td-with-info-wrap">
            <div className="td-with-info">
              AI Confidence Score
              <Tooltip title="AI generated confidence score">
                <i className="erm-icon info-icon" />
              </Tooltip>
            </div>
          </div>
        ),
        dataIndex: "aiScore",
        key: "aiScore",
      },
      {
        title: (
          <div className="td-with-info">
            Probability Score
            <Tooltip title="Probability Score">
              <i className="erm-icon info-icon" />
            </Tooltip>
          </div>
        ),
        dataIndex: "probability",
        key: "probability",
      },
      {
        title: (
          <div className="td-with-info">
            Risk Signal
            <Tooltip title="Risk Signal">
              <i className="erm-icon info-icon" />
            </Tooltip>
          </div>
        ),
        dataIndex: "riskSignal",
        key: "riskSignal",
        render: () => (
          <div className="risk-signal-cell">
            <div className="signal-wrap">
              <span className="signal-icon red"></span>
              <span className="signal-text">Strong</span>
            </div>
            {/* <div className="signal-wrap">
            <span className="signal-icon yellow"></span>
            <span className="signal-text">No Signal</span>
          </div>
          <div className="signal-wrap">
            <span className="signal-icon green"></span>
            <span className="signal-text">No Signal</span>
          </div>
          <div className="signal-wrap">
            <span className="signal-icon white"></span>
            <span className="signal-text">Not Reviewed</span>
          </div> */}
          </div>
        ),
      },
      {
        title: "Observation",
        dataIndex: "observation",
        key: "observation",
        className: "text-align-center",
        render: () => (
          <div className="observation-cell">
            <img src={IMAGES.commentPlusIcon} alt="Add Observation" />
            {/* <img src={IMAGES.commentPlusGreenIcon} alt="Add Observation" /> */}
          </div>
        ),
      },
      {
        title: "Status",
        key: "Status",
        width: 160,
        className: "text-align-right",
        render: () => (
          <div className="table-actions">
            <div className="rejected-refresh">
              <div className="rejected-tag">
                REJECTED
                <Tooltip title="Certain details could not be verified during the internal review process.">
                  <i className="erm-icon info-icon" />
                </Tooltip>
              </div>
              <span className="refresh-btn" title="Refresh Status">
                <i className="erm-icon refresh-icon" />
              </span>
            </div>
            {/* <div className="user-detail-wrap">
            <img src={IMAGES.avatarImage} alt="User Avatar" />
            <span className="user-name">John Ander...</span>
            <span>
              <i className="erm-icon close-icon" />
            </span>
          </div> */}
            {/* <div className="approve-reject">
            <Button className="no-style" type="primary" shape="round">
              <i className="erm-icon approve-icon" />
              APPROVE
            </Button>
            <span className="divider-vertical"></span>
            <Button className="no-style" type="primary" shape="round">
              <i className="erm-icon reject-icon" />
              REJECT
            </Button>
          </div> */}
          </div>
        ),
      },
    ],
    []
  );

  const rowSelection = useMemo(
    () => ({
      onChange: handleRowSelectionChange,
    }),
    [handleRowSelectionChange]
  );

  return (
    <>
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

              <div className="scope-details-content">
                <div className="signal-assessment">
                  <div className="signal-assessment-left">
                    <h5>Risk Signals :</h5>
                    <div className="risk-signal-cell">
                      {RISK_SIGNALS.map((signal, index) => (
                        <div key={index} className="signal-wrap">
                          <span className={`signal-icon ${signal.color}`}></span>
                          <span className="signal-text">
                            {signal.text} ({signal.count})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="signal-assessment-right">
                    <h5>Risk Assessment :</h5>
                    <Button
                      className="secondary-btn"
                      type="primary"
                      shape="round"
                      onClick={handleOpenRiskAssessment}>
                      ADD
                    </Button>
                  </div>
                </div>
                <div className="scope-stats">
                  {STAT_CARDS.map((stat, index) => (
                    <div key={index} className="stat-card">
                      <div className="stat-left">
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value">{stat.value}</div>
                        {stat.subtitle && <div className="stat-sub">{stat.subtitle}</div>}
                      </div>
                      <div className={`stat-icon ${stat.colorClass}`}>
                        <i className={`erm-icon ${stat.iconClass}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <ScopeFilterBar />

                <Table<FileData>
                  rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                  }}
                  className="files-table"
                  columns={columns}
                  dataSource={MOCK_DATA}
                  tableLayout="fixed"
                  pagination={false}
                />
              </div>
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
                  aria-label="Close Panel">
                  <i className="erm-icon close-icon" />
                </Button>
              </div>
              <div className="right-panel-content">
                {isCommentsOpen && <Comments comments={comments} onCommentsChange={setComments} />}
                {isChatOpen && (
                  <ChatPanel
                    title="Deal Room AI"
                    subtitle="Leverage Request files to ask queries"
                    className="scope-chat-panel"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RiskAssessment
        open={isRiskAssessmentOpen}
        onClose={handleCloseRiskAssessment}
        onAdd={handleAddRisk}
      />
    </>
  );
};

export default ScopeDetails;
