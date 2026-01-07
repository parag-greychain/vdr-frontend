import { Button, Card, Col, Dropdown, Input, Progress, Row, Select } from "antd";
import { IMAGES } from "../../../shared";

const ReviewedScopeTab = () => {
  return (
    <div className="reviewed-tab">
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
            <Row>
              <Col flex="62px">
                <div className="status-icon">
                  <i className="erm-icon check-icon" />
                </div>
              </Col>

              <Col flex="auto">
                <div className="request-id">
                  R-00{id}
                  <Dropdown
                    menu={{ items: [{ key: "1", label: "More" }] }}
                    placement="bottomRight"
                  >
                    <i className="erm-icon more-icon" />
                  </Dropdown>
                </div>

                <div className="request-desc">
                  Provide documentation related to compliance and policies.
                </div>

                <div className="request-meta">
                  <div className="request-meta-left">
                    <div className="user-detail">
                      <span className="user-image-span">
                        <img
                          src={IMAGES.avatarImage}
                          alt="Avatar"
                          className="avatar-img"
                        />
                      </span>
                      <span>John Anderson</span>
                    </div>
                    <span className="date-wrap">
                      <i className="erm-icon file-icon" />
                      <span>
                        1 Docs <span className="orange-dot"></span>
                      </span>
                    </span>
                    <span className="date-wrap">
                      <i className="erm-icon calendar-icon" />
                      <span>Due: 20/01/2024</span>
                    </span>
                  </div>

                  <div className="request-meta-right">
                    <div className="custom-progress">
                      <span className="progress-text">78% Completed</span>
                      <Progress
                        percent={78}
                        showInfo={false}
                        strokeLinecap="round"
                        className="progress-bar"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewedScopeTab;
