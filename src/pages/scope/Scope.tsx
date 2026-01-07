import {
  Button,
  Col,
  Row,
  Tabs,
  Avatar,
  Progress,
  Flex,
  Breadcrumb,
} from "antd";
import "./Scope.scss";
import {
  ScopeSidebar,
  SentScopeTab,
  ReceivedScopeTab,
  ReviewedScopeTab,
} from "../../component";
import { IMAGES } from "../../shared";

const Scope = () => {
  const { TabPane } = Tabs;

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
                <Button type="text" aria-label="Comments">
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
                <SentScopeTab />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    Received (12) <span className="orange-dot"></span>
                  </span>
                }
                key="received"
              >
                <ReceivedScopeTab />
              </TabPane>
              <TabPane tab="Reviewed (3)" key="reviewed">
                <ReviewedScopeTab />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default Scope;
