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
import "./Scope.scss";
import Sidebar from "../../component/scope/sidebar/Sidebar";
import { IMAGES } from "../../shared";

const Scope = () => {
  const { TabPane } = Tabs;

  return (
    <div className="scope-page-container">
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
            {/* TABS */}
            <Tabs defaultActiveKey="sent">
              <TabPane tab="Sent (20)" key="sent">
                <div className="sent-tab">
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
                              <i className="erm-icon time-icon" />
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
                              Provide documentation related to compliance and
                              policies.
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
                            </div>
                          </Col>
                        </Row>
                      </Card>
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
                              <i className="erm-icon doc-icon" />
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
                              Provide documentation related to compliance and
                              policies.
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
                                  <span className="progress-text">
                                    78% Completed
                                  </span>
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
              </TabPane>

              <TabPane tab="Reviewed (3)" key="reviewed">
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
                              Provide documentation related to compliance and
                              policies.
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
                                  <span className="progress-text">
                                    78% Completed
                                  </span>
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
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default Scope;
