import { Col, Flex, Row, Table, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./ScopeDetails.scss";
import { ScopeFilterBar, ScopeHeader, ScopeSidebar } from "../../component";
import { IMAGES } from "../../shared";

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

const ScopeDetails = () => {
  const dataSource: FileData[] = [
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

  const columns: ColumnsType<FileData> = [
    {
      title: "Document",
      dataIndex: "title",
      key: "title",
      width: "15%",
      render: (_, record) => (
        <div className="file-title">
          <div className="file-icon">
            <img
              src={record.icon === "pdf" ? IMAGES.pdfIcon : IMAGES.xlsIcon}
              alt="file"
            />
          </div>
          <div>
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
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: FileData[]) => {
      console.log("Selected Row Keys:", selectedRowKeys);
      console.log("Selected Rows:", selectedRows);
    },
  };

  return (
    <div className="scope-page-container">
      <Flex className="inner-app-wrap">
        <Row className="inner-app-row" gutter={24}>
          {/* LEFT SIDEBAR */}
          <Col flex="253px" className="scope-sidebar">
            <ScopeSidebar />
          </Col>

          {/* MAIN CONTENT */}
          <Col flex="auto" className="content">
            <ScopeHeader isScopePage={false} />
            <div className="scope-details-content">
              <div className="scope-stats">
                {/* All Files */}
                <div className="stat-card">
                  <div className="stat-left">
                    <div className="stat-title">All Files</div>
                    <div className="stat-value">5</div>
                  </div>
                  <div className="stat-icon blue">
                    <i className="erm-icon file-blue-icon" />
                  </div>
                </div>

                {/* Reviewed Files */}
                <div className="stat-card">
                  <div className="stat-left">
                    <div className="stat-title">Reviewed Files</div>
                    <div className="stat-value">40%</div>
                    <div className="stat-sub">2 of 5 files</div>
                  </div>
                  <div className="stat-icon green">
                    <i className="erm-icon check-icon" />
                  </div>
                </div>

                {/* Rejected Files */}
                <div className="stat-card">
                  <div className="stat-left">
                    <div className="stat-title">Rejected Files</div>
                    <div className="stat-value">1%</div>
                    <div className="stat-sub">2 of 5 files</div>
                  </div>
                  <div className="stat-icon red">
                    <i className="erm-icon reject-icon" />
                  </div>
                </div>
              </div>

              <ScopeFilterBar />

              <Table<FileData>
                rowSelection={{
                  type: "checkbox",
                  ...rowSelection,
                }}
                className="files-table"
                columns={columns}
                dataSource={dataSource}
                tableLayout="fixed"
                pagination={false}
              />
            </div>
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default ScopeDetails;
