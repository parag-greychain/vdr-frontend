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
  Flex,
  Breadcrumb,
} from "antd";
import {MoreOutlined } from "@ant-design/icons";
import "./Scope.scss";
import Sidebar from "../../component/scope/sidebar/Sidebar";

const Scope = () => {
  const { TabPane } = Tabs;

  return (
    <Flex className="inner-app-wrap">
      <Row className="inner-app-row" gutter={24}>
        {/* LEFT SIDEBAR */}
        <Col flex="253px" className="scope-sidebar">
          <Sidebar />
        </Col>

        {/* MAIN CONTENT */}
        <Col flex="auto" className="content">
          <div className="scope-header">
            <div className="breadcrumb-wrapper">
              <Breadcrumb className="page-breadcrumb">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Shell - Air Quality</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="scope-actions">
              <Button className="primary-btn" type="primary" shape="round">
                CHAT
              </Button>
              <Button type="text" aria-label="Comments">
                {/* <img src={IMAGES.commentIcon} alt="Comments" /> */}
              </Button>
              <Button type="text" aria-label="Export">
                {/* <img src={IMAGES.exportIcon} alt="Export" /> */}
              </Button>
            </div>
          </div>
          <div className="scope-page-header">
            <h2 className="page-heading">Air Quality</h2>
            <p>
              The category addresses management of air quality impacts resulting
              from stationary (e.g., factories, power plants) and mobile
              sources...
            </p>

            <div className="meta-row">
              <div className="meta-row-left">
                <div className="collaborators-wrapper">
                  <Avatar size={24} src="https://i.pravatar.cc/100" />
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
            <TabPane tab="Sent (20)" key="sent" />
            <TabPane tab="Received (12)" key="received" />
            <TabPane tab="Reviewed (3)" key="reviewed" />
          </Tabs>

          {/* FILTER BAR */}
          <div className="filter-bar">
            <div className="filter-left">
              <Input
                placeholder="Search..."
                prefix={<i className="erm-icon search-icon" />}
                className="quick-search"
              />

              <Select
                defaultValue="all"
                className="dropdown-ui"
                suffixIcon={
                  <>
                    <i className="erm-icon dropdown-arrow-icon" />
                    <i className="erm-icon dropdown-top-arrow-icon" />
                  </>
                }
              >
                <Select.Option value="all">All</Select.Option>
              </Select>
            </div>
            <div className="filter-right">
              <Button
                icon={<i className="erm-icon plus-icon" />}
                className="primary-btn"
                type="primary"
                shape="round"
              >
                CREATE REQUEST
              </Button>
            </div>
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
    </Flex>
  );
};

export default Scope;
