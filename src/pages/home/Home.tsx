import { useState } from "react";
import { Button, Card, Input, Progress, Avatar, Row, Col, Statistic, Tag, Badge, List, Space, Typography, Divider, Flex } from "antd";
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
    total: number;
  };
  collaborators: string[];
}

interface Activity {
  id: string;
  type: "upload" | "review" | "assign" | "due";
  title: string;
  subtitle: string;
  project: string;
  timeAgo: string;
  isNew?: boolean;
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
      documents: { completed: 981, total: 1556 },
      collaborators: ["S", "J", "M"],
    },
    {
      id: "2",
      name: "ExxonMobil",
      status: "Active",
      date: "Mar 15, 2024",
      risk: "High Risk",
      scope: { flagged: 3, completed: 5, total: 22 },
      documents: { completed: 981, total: 1556 },
      collaborators: ["S", "J", "M"],
    },
    {
      id: "3",
      name: "Ford",
      status: "Active",
      date: "Mar 15, 2024",
      risk: "Low Risk",
      scope: { flagged: 3, completed: 5, total: 22 },
      documents: { completed: 981, total: 1556 },
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

  const getRiskIcon = (risk: string) => {
    if (risk === "High Risk") return "high-risk-icon";
    if (risk === "Medium Risk") return "medium-risk-icon";
    return "low-risk-icon";
  };

  const getRiskColor = (risk: string) => {
    if (risk === "High Risk") return "#FD582D";
    if (risk === "Medium Risk") return "#F59F0B";
    return "#019A20";
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "upload":
        return "file-icon";
      case "review":
        return "check-icon";
      case "assign":
        return "arrow-right-icon";
      case "due":
        return "time-icon";
      default:
        return "file-icon";
    }
  };

  return (
    <div className="home-page">
      <div className="container">
        <Space direction="vertical" size="large"  style={{ width: "100%" }}>
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
                  <div className="summary-icon">
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
                  <div className="summary-icon">
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
                  <div className="summary-icon">
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
                    const docsPercent = (project.documents.completed / project.documents.total) * 100;

                    return (
                      <Col xs={24} sm={12} lg={8} key={project.id}>
                        <Card>
                          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                            <Row justify="space-between" align="middle">
                              <Col>
                                <Title level={5} style={{ margin: 0 }}>
                                  {project.name}
                                </Title>
                              </Col>
                              <Col>
                                <div className="status-badge">
                                  <i className="erm-icon active-icon" />
                                  <span className="status-title">{project.status}</span>
                                </div>
                              </Col>
                            </Row>

                            <Flex justify="space-between" align="center">
                              <Space size="small">
                                <i className="erm-icon calendar-icon" />
                                <Text type="secondary" style={{ fontSize: 12 }}>
                                  {project.date}
                                </Text>
                              </Space>
                              <Space size="small">
                                <i className={`erm-icon ${getRiskIcon(project.risk)}`} />
                                <Text style={{ fontSize: 12, color: getRiskColor(project.risk) }}>
                                  {project.risk}
                                </Text>
                              </Space>
                            </Flex>

                            <div>
                              <Row justify="space-between" align="middle">
                                <Col>
                                  <Space size="small">
                                    <i className="erm-icon scope-icon" />
                                    <Text style={{ fontSize: 12 }}>Scope</Text>
                                    {project.scope.flagged > 0 && (
                                      <Tag color="red" icon={<i className="erm-icon flag-icon" />}>
                                        {project.scope.flagged}
                                      </Tag>
                                    )}
                                  </Space>
                                </Col>
                                <Col>
                                  <Text style={{ fontSize: 12 }}>
                                    {project.scope.completed}/{project.scope.total}
                                  </Text>
                                </Col>
                              </Row>
                              <Progress
                                percent={scopePercent}
                                showInfo={false}
                                strokeColor="#019A20"
                                trailColor="#EEF3EF"
                                strokeWidth={8}
                              />
                            </div>

                            <div>
                              <Row justify="space-between" align="middle">
                                <Col>
                                  <Space size="small">
                                    <i className="erm-icon file-icon" />
                                    <Text style={{ fontSize: 12 }}>Documents</Text>
                                  </Space>
                                </Col>
                                <Col>
                                  <Text style={{ fontSize: 12 }}>
                                    {project.documents.completed}/{project.documents.total}
                                  </Text>
                                </Col>
                              </Row>
                              <Progress
                                percent={docsPercent}
                                showInfo={false}
                                strokeColor="#F59F0B"
                                trailColor="#EEF3EF"
                                strokeWidth={8}
                              />
                            </div>

                            <div className="collaborators-wrapper">
                              <Text type="secondary" style={{ fontSize: 12 }} className="collaborators-title">Collaborators</Text>

                              <Avatar.Group maxCount={3} maxStyle={{ backgroundColor: "#d3dfd4", color: "var(--primary)" }}>
                                {project.collaborators.map((collab, idx) => (
                                  <Avatar key={idx} style={{ backgroundColor: "#d3dfd4", color: "var(--primary)" }}>
                                    {collab}
                                  </Avatar>
                                ))}
                                <Avatar style={{ backgroundColor: "#d3dfd4", color: "var(--primary)" }}>+2</Avatar>
                              </Avatar.Group>
                            </div>
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
              <div>
                <Title level={4} className="section-title">
                  Recent Activity
                </Title>

                <div className="activity-wrapper">
                  <div className="search-container">
                    <Input
                      placeholder="Search..."
                      prefix={<i className="erm-icon search-icon" />}
                      className="search-input"
                    />
                  </div>

                  <List
                    className="activity-list"
                    dataSource={activities}
                    renderItem={(activity) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Badge dot={activity.isNew} offset={[-2, 2]}>
                              <Avatar
                                icon={<i className={`erm-icon ${getActivityIcon(activity.type)}`} />}
                                style={{ backgroundColor: "#f5f5f5" }}
                              />
                            </Badge>
                          }
                          title={activity.title}
                          description={activity.subtitle}
                        />
                        {activity.isNew && (
                          <Tag color="orange" style={{ borderRadius: 12 }}>
                            NEW
                          </Tag>
                        )}
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Space>
      </div>
    </div>
  );
};

export default Home;
