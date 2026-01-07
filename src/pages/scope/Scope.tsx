import { Col, Row, Tabs, Flex } from "antd";
import "./Scope.scss";
import {
  ScopeSidebar,
  RequestCard,
  ScopeFilterBar,
  ScopeHeader,
} from "../../component";

const Scope = () => {
  const { TabPane } = Tabs;

  return (
    <div className="scope-page-container">
      <Flex className="inner-app-wrap">
        <Row className="inner-app-row" gutter={24}>
          {/* LEFT SIDEBAR */}
          <Col flex="253px" className="scope-sidebar">
            <ScopeSidebar  />
          </Col>

          {/* MAIN CONTENT */}
          <Col flex="auto" className="content">
            <ScopeHeader isScopePage={true}/>
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
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default Scope;
