import {
  Button,
  Col,
  Input,
  Progress,
  Row,
  Select,
  Tabs,
  Avatar,
  Dropdown,
  Card,
} from "antd";
import { PlusOutlined, MoreOutlined, SearchOutlined } from "@ant-design/icons";
import "./Scope.scss";
import Sidebar from "../../component/scope/sidebar/Sidebar";

const Scope = () => {
  const { TabPane } = Tabs;

  return (
    <div className="air-quality-page">
      <Row gutter={24}>
        {/* LEFT SIDEBAR */}
        <Col flex="253px" className="scope-sidebar">
          <Sidebar />
        </Col>

        {/* MAIN CONTENT */}
        <Col flex="auto" className="content">
          {/* HEADER */}
          <div className="page-header">
            <h2>Air Quality</h2>
            <p>
              The category addresses management of air quality impacts resulting
              from stationary (e.g., factories, power plants) and mobile
              sources...
            </p>

            <div className="meta-row">
              <span>📅 Due: 20/01/2024</span>
              <span>🔄 Last Synced: 20/01/2024</span>

              <div className="progress">
                <span>67% Completed</span>
                <Progress percent={67} showInfo={false} />
              </div>
            </div>
          </div>

          {/* TABS */}
          <Tabs defaultActiveKey="sent">
            <TabPane tab="Sent (20)" key="sent" />
            <TabPane tab="Received (12)" key="received" />
            <TabPane tab="Reviewed (3)" key="reviewed" />
          </Tabs>

          {/* FILTER BAR */}
          <div className="filter-bar">
            <Input
              placeholder="Search..."
              prefix={<SearchOutlined />}
              className="search-input"
            />

            <Select defaultValue="all" className="status-select">
              <Select.Option value="all">All</Select.Option>
            </Select>

            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="create-btn"
            >
              CREATE REQUEST
            </Button>
          </div>

          {/* REQUEST LIST */}
          <div className="request-list">
            {[1, 2, 3, 4].map((id) => (
              <Card key={id} className="request-card">
                <Row align="middle">
                  <Col flex="40px">
                    <div className="status-icon" />
                  </Col>

                  <Col flex="auto">
                    <div className="request-id">R-00{id}</div>
                    <div className="request-desc">
                      Provide documentation related to compliance and policies.
                    </div>

                    <div className="request-meta">
                      <Avatar size={24} />
                      <span>John Anderson</span>
                      <span>📄 1 Docs</span>
                      <span>📅 Due: 20/01/2024</span>
                    </div>
                  </Col>

                  <Col>
                    <Dropdown menu={{ items: [{ key: "1", label: "More" }] }}>
                      <MoreOutlined className="more-icon" />
                    </Dropdown>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Scope;
