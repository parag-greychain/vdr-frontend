import { Breadcrumb, Button, Form, Input, Select } from "antd";
import { ScopeSidebar } from "../../component";
import "./CreateProject.scss";
import { IMAGES } from "../../shared";

const CreateProject = () => {
  return (
    <>
      <div className="scope-page-container create-project-page">
        <div className="inner-app-wrap">
          <div className="inner-app-row">
            {/* LEFT SIDEBAR */}
            <div className="scope-sidebar">
              <ScopeSidebar />
            </div>

            {/* MAIN CONTENT */}
            <div className="content">
              <div className="scope-header-wrapper">
                <div className="scope-header">
                  <div className="breadcrumb-wrapper">
                    <Breadcrumb className="page-breadcrumb">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Create Project</Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>
                <div className="scope-page-header">
                  <h2 className="page-heading">Create Project</h2>
                </div>
              </div>

              <div className="scope-details-content">
                <div className="create-project-form">
                  <Form layout="vertical" className="add-scope-form">
                    <Form.Item
                      name="scopeName"
                      label={<span>Project Name</span>}
                      required={false}
                      rules={[
                        { required: true, message: "Please enter project name" },
                        { min: 4, message: "project name must be at least 4 characters" },
                        { max: 100, message: "project name must not exceed 100 characters" },
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
                  <div className="project-card-row">
                    <div className="project-card active">
                      <span className="radio-ui"></span>
                      <span className="project-card-icon">
                        <img src={IMAGES.firmexImg} alt="Add Flag" />
                      </span>
                      <h5>Firmex Integration</h5>
                      <p>
                        Integrate Firmex with your M&A platform to automate document ingestion,
                        permissions, and downstream analysis.
                      </p>
                    </div>
                    <div className="project-card">
                      <span className="radio-ui"></span>
                      <span className="project-card-icon">
                        <img src={IMAGES.ansarada} alt="Add Flag" />
                      </span>
                      <h5>Ansarada Integration</h5>
                      <p>
                        Integrate Ansarada to support governed, view-only document workflows aligned
                        with its encryption and security model.
                      </p>
                    </div>
                    <div className="project-card">
                      <span className="radio-ui"></span>
                      <span className="project-card-icon">
                        <img src={IMAGES.firmexImg} alt="Add Flag" />
                      </span>
                      <h5>Firmex Integration</h5>
                      <p>
                        Integrate Firmex with your M&A platform to automate document ingestion,
                        permissions, and downstream analysis.
                      </p>
                    </div>
                    <div className="project-card">
                      <span className="radio-ui"></span>
                      <span className="project-card-icon">
                        <img src={IMAGES.ansarada} alt="Add Flag" />
                      </span>
                      <h5>Ansarada Integration</h5>
                      <p>
                        Integrate Ansarada to support governed, view-only document workflows aligned
                        with its encryption and security model.
                      </p>
                    </div>
                    <div className="project-card">
                      <span className="radio-ui"></span>
                      <span className="project-card-icon">
                        <img src={IMAGES.sharepoint} alt="Add Flag" />
                      </span>
                      <h5>Firmex Integration</h5>
                      <p>
                        Integrate Firmex with your M&A platform to automate document ingestion,
                        permissions, and downstream analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="create-project-footer">
                <Button className="secondary-btn" size="large" shape="round">
                  Cancel
                </Button>
                <Button className="primary-btn" type="primary" size="large" shape="round">
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
