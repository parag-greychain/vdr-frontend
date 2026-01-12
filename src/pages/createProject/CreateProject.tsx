import { Breadcrumb, Button, Form, Input, Select, Radio, message } from "antd";
import { ScopeSidebar } from "../../component";
import "./CreateProject.scss";
import { IMAGES, PATHS } from "../../shared";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface CreateProjectData {
  projectName: string;
  description?: string;
  services?: string;
  vdrIntegration: string;
  selectedScopes: string[];
}

const CreateProject = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [selectedVDR, setSelectedVDR] = useState<string>("firmex-1");
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectName = Form.useWatch("projectName", form);
  const isFormValid = projectName && projectName.trim().length >= 4;

  const handleCancel = () => {
    form.resetFields();
    setSelectedVDR("firmex-1");
    setSelectedScopes([]);
    navigate(PATHS.projects);
  };

  const handleCreateProject = async () => {
    try {
      const values = await form.validateFields();

      if (selectedScopes.length === 0) {
        message.warning("Please select at least one scope");
        return;
      }

      setIsSubmitting(true);

      // Prepare project data
      const projectData: CreateProjectData = {
        projectName: values.projectName.trim(),
        description: values.description?.trim(),
        services: values.services,
        vdrIntegration: selectedVDR,
        selectedScopes: selectedScopes,
      };

      // API Integration: Uncomment when ready to use real API
      // import { createProjectAPI } from "../../services/projectApi";
      // const response = await createProjectAPI(projectData);
      // const newProject = response.data;

      // Simulate API call for now
      console.log("Project data to be sent to API:", projectData);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

      // Temporary project ID - should come from API response
      const tempProjectId = Date.now().toString();

      message.success("Project created successfully!");

      // Navigate to project details with project ID
      navigate(PATHS.projectDetails, {
        state: { projectId: tempProjectId },
      });
    } catch (error: any) {
      console.error("Validation or submission failed:", error);
      if (error.errorFields) {
        message.error("Please fill in all required fields correctly");
      } else {
        message.error("Failed to create project. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="scope-page-container create-project-page">
        <div className="inner-app-wrap">
          <div className="inner-app-row">
            {/* LEFT SIDEBAR */}
            <div className="scope-sidebar">
              <ScopeSidebar
                showCheckboxes={true}
                selectedScopes={selectedScopes}
                onScopeSelectionChange={setSelectedScopes}
              />
              {selectedScopes.length === 0 && (
                <div className="scope-selection-hint" style={{ padding: "10px", color: "#ff4d4f", fontSize: "12px" }}>
                  Please select at least one scope
                </div>
              )}
            </div>

            {/* MAIN CONTENT */}
            <div className="content">
              <div className="scope-header-wrapper">
                <div className="scope-header">
                  <div className="breadcrumb-wrapper">
                    <Breadcrumb
                      className="page-breadcrumb"
                      items={[
                        {
                          title: (
                            <span className="breadcrumb-clickable" onClick={() => navigate(PATHS.home)}>
                              Home
                            </span>
                          ),
                        },
                        {
                          title: "Create Project",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="scope-page-header">
                  <h2 className="page-heading">Create Project</h2>
                </div>
              </div>

              <div className="scope-details-content">
                <div className="create-project-form">
                  <Form form={form} layout="vertical" className="add-scope-form">
                    <Form.Item
                      name="projectName"
                      label={<span>Project Name</span>}
                      required={false}
                      rules={[
                        { required: true, message: "Please enter project name" },
                        { min: 4, message: "Project name must be at least 4 characters" },
                        { max: 100, message: "Project name must not exceed 100 characters" },
                      ]}>
                      <Input className="input-field" placeholder="Enter project name" />
                    </Form.Item>

                    <Form.Item
                      name="description"
                      label="Description"
                      rules={[{ max: 500, message: "Description must not exceed 500 characters" }]}>
                      <Input.TextArea
                        className="textarea"
                        rows={3}
                        maxLength={500}
                        placeholder="Enter project description"
                      />
                    </Form.Item>

                    <Form.Item name="Services" label="Services">
                      <Select
                        className="dropdown-ui"
                        suffixIcon={
                          <>
                            <i className="erm-icon dropdown-arrow-icon" />
                            <i className="erm-icon dropdown-top-arrow-icon" />
                          </>
                        }>
                        <Select.Option value="Services">Services</Select.Option>
                      </Select>
                    </Form.Item>
                  </Form>
                </div>
                <div className="project-card-wrapper">
                  <div className="project-card-header">
                    <h2 className="page-heading">Connect VDR</h2>
                    <p>Select your document source</p>
                  </div>
                  <Radio.Group
                    value={selectedVDR}
                    onChange={(e) => setSelectedVDR(e.target.value)}
                    className="vdr-radio-group"
                  >
                    <div className="project-card-row">
                      <label className={`project-card-label ${selectedVDR === "firmex-1" ? "selected" : ""}`}>
                        <Radio value="firmex-1" />
                        <div className="project-card">
                          <span className="project-card-icon">
                            <img src={IMAGES.firmexImg} alt="Firmex" />
                          </span>
                          <h5>Firmex Integration</h5>
                          <p>
                            Integrate Firmex with your M&A platform to automate document ingestion,
                            permissions, and downstream analysis.
                          </p>
                        </div>
                      </label>
                      <label className={`project-card-label ${selectedVDR === "ansarada-1" ? "selected" : ""}`}>
                        <Radio value="ansarada-1" />
                        <div className="project-card">
                          <span className="project-card-icon">
                            <img src={IMAGES.ansarada} alt="Ansarada" />
                          </span>
                          <h5>Ansarada Integration</h5>
                          <p>
                            Integrate Ansarada to support governed, view-only document workflows aligned
                            with its encryption and security model.
                          </p>
                        </div>
                      </label>
                      <label className={`project-card-label ${selectedVDR === "firmex-2" ? "selected" : ""}`}>
                        <Radio value="firmex-2" />
                        <div className="project-card">
                          <span className="project-card-icon">
                            <img src={IMAGES.firmexImg} alt="Firmex" />
                          </span>
                          <h5>Firmex Integration</h5>
                          <p>
                            Integrate Firmex with your M&A platform to automate document ingestion,
                            permissions, and downstream analysis.
                          </p>
                        </div>
                      </label>
                      <label className={`project-card-label ${selectedVDR === "ansarada-2" ? "selected" : ""}`}>
                        <Radio value="ansarada-2" />
                        <div className="project-card">
                          <span className="project-card-icon">
                            <img src={IMAGES.ansarada} alt="Ansarada" />
                          </span>
                          <h5>Ansarada Integration</h5>
                          <p>
                            Integrate Ansarada to support governed, view-only document workflows aligned
                            with its encryption and security model.
                          </p>
                        </div>
                      </label>
                      <label className={`project-card-label ${selectedVDR === "sharepoint" ? "selected" : ""}`}>
                        <Radio value="sharepoint" />
                        <div className="project-card">
                          <span className="project-card-icon">
                            <img src={IMAGES.sharepoint} alt="SharePoint" />
                          </span>
                          <h5>SharePoint Integration</h5>
                          <p>
                            Integrate SharePoint with your M&A platform to automate document ingestion,
                            permissions, and downstream analysis.
                          </p>
                        </div>
                      </label>
                    </div>
                  </Radio.Group>
                </div>
              </div>
              <div className="create-project-footer">
                <Button
                  className="secondary-btn"
                  size="large"
                  shape="round"
                  onClick={handleCancel}
                  disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button
                  className="primary-btn"
                  type="primary"
                  size="large"
                  shape="round"
                  onClick={handleCreateProject}
                  disabled={!isFormValid || selectedScopes.length === 0 || isSubmitting}
                  loading={isSubmitting}>
                  CREATE PROJECT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
