import { useState } from "react";
import { Button, Card, Progress, Row, Col, Statistic, Space, Typography, Divider, Flex } from "antd";
import { Collaborators, RecentActivity, type Activity } from "../../component/dashboard";
import "./Home.scss";

const { Title, Text } = Typography;

interface Project {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  date: string;
  risk: "Low Risk" | "Medium Risk" | "High Risk";
  scope: {
    flagged: number;
    completed: number;
    total: number;
  };
  documents: {
    completed: number;
    inProgress?: number;
    total: number;
  };
  collaborators: string[];
}


const Home = () => {
  const [summaryData] = useState({
    redFlags: { current: 48, total: 60 },
    openScopeItems: { current: 48, total: 60 },
    reviewedDocuments: { current: 3, total: 100 },
  });

  const [projects] = useState<Project[]>([
    {
      id: "1",
      name: "Shell",
      status: "Active",
      date: "Mar 15, 2024",
      risk: "Medium Risk",
      scope: { flagged: 13, completed: 5, total: 22 },
      documents: { completed: 981, inProgress: 200, total: 1556 },
      collaborators: ["S", "J", "M"],
    },
    {
      id: "2",
      name: "ExxonMobil",
      status: "Active",
      date: "Mar 15, 2024",
      risk: "High Risk",
      scope: { flagged: 3, completed: 5, total: 22 },
      documents: { completed: 981, inProgress: 200, total: 1556 },
      collaborators: ["S", "J", "M"],
    },
    {
      id: "3",
      name: "Ford",
      status: "Active",
      date: "Mar 15, 2024",
      risk: "Low Risk",
      scope: { flagged: 3, completed: 5, total: 22 },
      documents: { completed: 981, inProgress: 200, total: 1556 },
      collaborators: ["S", "J", "M"],
    },
  ]);

  const [activities] = useState<Activity[]>([
    {
      id: "1",
      type: "upload",
      title: "128 documents uploaded | Air Quality",
      subtitle: "Shell • 2 hours ago",
      project: "Shell",
      timeAgo: "2 hours ago",
      isNew: true,
    },
    {
      id: "2",
      type: "review",
      title: "Soil Report marked as reviewed",
      subtitle: "ExxonMobil • 4 hours ago",
      project: "ExxonMobil",
      timeAgo: "4 hours ago",
    },
    {
      id: "3",
      type: "assign",
      title: "Sarah Chen assigned to Groundwater Assessment",
      subtitle: "Ford • 5 hours ago",
      project: "Ford",
      timeAgo: "5 hours ago",
    },
    {
      id: "4",
      type: "due",
      title: "Due date approaching for Regulatory Compliance docs",
      subtitle: "Shell • 1 day ago",
      project: "Shell",
      timeAgo: "1 day ago",
    },
  ]);


  return (
    <div className="home-page">
      <div className="container">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Header */}
          <Row justify="space-between" align="middle">
            <Col>
              <Title level={2} style={{ margin: 0, marginBottom: 0 }}>
                Deal Room
              </Title>
              <Text type="secondary">
                Welcome back, Sarah. Here's what's happening with your projects.
              </Text>
            </Col>
            <Col>
              <Button type="primary" className="primary-btn" shape="round">
                <i className="erm-icon plus-icon" />
                CREATE PROJECT
              </Button>
            </Col>
          </Row>

          {/* Summary Cards */}
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={8}>
              <div className="summary-card">
                <div className="summary-card-content">
                  <Statistic
                    title="Red Flags"
                    value={`${summaryData.redFlags.current}/${summaryData.redFlags.total}`}
                  />
                  <div className="summary-icon flag-icon">
                    <i className="erm-icon flag-icon" />
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={8}>
              <div className="summary-card">
                <div className="summary-card-content">
                  <Statistic
                    title="Open Scope Items"
                    value={`${summaryData.openScopeItems.current}/${summaryData.openScopeItems.total}`}
                  />
                  <div className="summary-icon scope-icon">
                    <i className="erm-icon scope-icon" />
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={8}>
              <div className="summary-card">
                <div className="summary-card-content">
                  <Statistic
                    title="Reviewed Documents"
                    value={`${summaryData.reviewedDocuments.current}/${summaryData.reviewedDocuments.total}`}
                  />
                  <div className="summary-icon check-icon">
                    <i className="erm-icon check-icon" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row gutter={[20, 20]}>
            {/* Projects Section */}
            <Col xs={24} sm={18}>

              <div>
                <Title level={4} className="section-title">
                  Projects ({projects.length})
                </Title>
                <Row gutter={[20, 20]}>
                  {projects.map((project) => {
                    const scopePercent = (project.scope.completed / project.scope.total) * 100;
                    const docsCompletedPercent = (project.documents.completed / project.documents.total) * 100;
                    const docsInProgressPercent = ((project.documents.inProgress || 0) / project.documents.total) * 100;
                    const docsTotalPercent = docsCompletedPercent + docsInProgressPercent;

                    return (
                      <Col xs={24} sm={12} lg={8} key={project.id}>
                        <Card className="project-card">
                          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                            <Row justify="space-between" align="middle">
                              <Col>
                                <Title level={5} style={{ margin: 0 }}>
                                  {project.name}
                                </Title>
                              </Col>
                              <Col>
                                <div className="status-badge">
                                  <i className={`erm-icon ${project.status === "Active" ? "active-icon" : "inactive-icon"}`} />
                                  <span className="status-title">{project.status}</span>
                                </div>
                              </Col>
                            </Row>

                            <Flex justify="space-between" align="center">
                              <Space size="small" className="date-wrapper">
                                <i className="erm-icon calendar-icon" />
                                <span>{project.date}</span>
                              </Space>
                              <Space className={`risk-tag ${project.risk.toLowerCase().replace(" ", "-")}`}>
                                <i className="erm-icon warning-icon" />
                                <span>{project.risk}</span>
                              </Space>
                            </Flex>

                            <div>
                              <Row justify="space-between" align="middle">
                                <Col>
                                  <Space size="small">
                                    <i className="erm-icon scope-icon" />
                                    <Text style={{ fontSize: 12, color: "var(--primary)" }}>Scope</Text>
                                    {project.scope.flagged > 0 && (
                                      <div className="scope-tag">
                                        <i className="erm-icon flag-icon" />
                                        <Divider type="vertical" style={{ height: "14px" }} />
                                        <span className="scope-tag-text">{project.scope.flagged}</span>
                                      </div>
                                    )}
                                  </Space>
                                </Col>
                                <Col>
                                  <Text style={{ fontSize: 12, color: "var(--primary)" }}>
                                    {project.scope.completed}/{project.scope.total}
                                  </Text>
                                </Col>
                              </Row>
                              <Progress
                                percent={scopePercent}
                                showInfo={false}
                                strokeColor="#019A20"
                                className="scope-progress"
                                trailColor="#EEF3EF"
                                strokeWidth={6}
                              />
                            </div>

                            <div>
                              <Row justify="space-between" align="middle">
                                <Col>
                                  <Space size="small">
                                    <i className="erm-icon file-blue-icon " />
                                    <Text style={{ fontSize: 12, color: "var(--primary)" }}>Documents</Text>
                                  </Space>
                                </Col>
                                <Col>
                                  <Text style={{ fontSize: 12, color: "var(--primary)" }}>
                                    {project.documents.completed}/{project.documents.total}
                                  </Text>
                                </Col>
                              </Row>

                              <Progress
                                percent={docsTotalPercent}
                                showInfo={false}
                                strokeLinecap="round"
                                className="docs-progress"
                                trailColor="#EEF3EF"
                                strokeWidth={6}
                              />
                            </div>

                            <Collaborators collaborators={project.collaborators} additionalCount={2} />
                          </Space>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>

            {/* Recent Activity Section */}
            <Col xs={24} sm={6}>
              <RecentActivity activities={activities} />
            </Col>
          </Row>
        </Space>
      </div>
    </div>
  );
};

export default Home;
