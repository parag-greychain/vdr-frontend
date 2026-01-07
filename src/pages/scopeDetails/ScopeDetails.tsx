import { Col, Flex, Row } from "antd";
import "./ScopeDetails.scss";
import { ScopeFilterBar, ScopeHeader, ScopeSidebar } from "../../component";

const ScopeDetails = () => {
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
            <ScopeHeader />
            <div className="scope-details-content">
              <ScopeFilterBar />
              <h3>Scope Details Page Content</h3>
              <p>
                This is where the details of the selected scope will be
                displayed.
              </p>
            </div>
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default ScopeDetails;
