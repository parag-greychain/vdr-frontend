import { useState } from "react";
import { Drawer, Input, Select, Button, DatePicker, Progress, Form, message } from "antd";
import type { Dayjs } from "dayjs";

import "./AddScope.scss";

interface AddScopeProps {
  open: boolean;
  onClose: () => void;
}

interface ScopeFormValues {
  scopeName: string;
  description?: string;
  category: string;
  riskLevel: string;
  scopeOwner?: string;
  defaultDueDate?: Dayjs;
}

const AddScope = ({ open, onClose }: AddScopeProps) => {
  const [form] = Form.useForm<ScopeFormValues>();
  const [riskLevel, setRiskLevel] = useState<string>("medium");
  const scopeName = Form.useWatch("scopeName", form);

  // Check if required field is valid (not empty and meets minimum length)
  const isFormValid = scopeName && scopeName.trim().length >= 4;

  // Progress percentage for preview (0% for new scope, can be updated if needed)
  const progressPercent = 50; // Preview value - can be made dynamic later
  // Calculate request count based on progress percentage (assuming total of 10 requests for preview)
  const totalRequests = 10;
  const completedRequests = Math.round((progressPercent / 100) * totalRequests);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log("Form values:", values);
      // TODO: Add API call to submit the form
      message.success("Scope added successfully!");
      form.resetFields();
      setRiskLevel("medium");
      onClose();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const handleClose = () => {
    form.resetFields();
    setRiskLevel("medium");
    onClose();
  };

  const handleRiskLevelClick = (level: string) => {
    setRiskLevel(level);
    form.setFieldValue("riskLevel", level);
  };

  return (
    <Drawer
      placement="right"
      width={480}
      open={open}
      onClose={handleClose}
      closeIcon={<i className="erm-icon close-icon" />}
      className="add-scope-drawer"
      title={
        <div className="drawer-header">
          <h3 className="drawer-title">Add New Scope</h3>
          <p className="drawer-subtitle">
            Define a new scope category to organize requests and documents.
          </p>
        </div>
      }
      footer={
        <div className="drawer-footer">
          <Button onClick={handleClose} shape="round" type="text">Cancel</Button>
          <Button 
            type="primary" 
            className="primary-btn" 
            shape="round" 
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            ADD SCOPE
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          category: "environmental",
          riskLevel: "medium",
        }}
        className="add-scope-form"
      >
        <Form.Item
          name="scopeName"
          label={
            <span>
              Scope Name <span className="required">*</span>
            </span>
          }
          required={false}
          rules={[
            { required: true, message: "Please enter scope name" },
            { min: 4, message: "Scope name must be at least 4 characters" },
            { max: 100, message: "Scope name must not exceed 100 characters" },
          ]}
        >
          <Input className="input-field" placeholder="e.g. Water Management, Human Rights, Supply Chain Ethics" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            { max: 500, message: "Description must not exceed 500 characters" },
          ]}
        >
          <Input.TextArea className="input-field" rows={3} maxLength={500} placeholder="Briefly describe what this scope covers for compliance and reporting."/>
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
        >
          <Select className="input-field select-field">
            <Select.Option value="environmental">Environmental</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="riskLevel"
          label="Default Risk Level"
        >
          <div className="risk-level-group">
            <Button
              type="default"
              className={`risk-btn low ${riskLevel === "low" ? "active" : ""}`}
              onClick={() => handleRiskLevelClick("low")}
            >
              <span className="risk-icon"></span>Low
            </Button>
            <Button
              type="default"
              className={`risk-btn medium ${riskLevel === "medium" ? "active" : ""}`}
              onClick={() => handleRiskLevelClick("medium")}
            >
              <span className="risk-icon"></span>Medium
            </Button>
            <Button
              type="default"
              className={`risk-btn high ${riskLevel === "high" ? "active" : ""}`}
              onClick={() => handleRiskLevelClick("high")}
            >
              <span className="risk-icon"></span>High
            </Button>
          </div>
        </Form.Item>

        <div className="form-group">
          <Form.Item
            name="scopeOwner"
            label="Scope Owner"
            style={{ marginBottom: 0 }}
          >
            <Select className="input-field select-field" placeholder="Select owner" />
          </Form.Item>
          <span className="info-text">Owner will be responsible for managing requests under this scope.</span>
        </div>

        <Form.Item
          name="defaultDueDate"
          label="Default Due Date"
        >
          <DatePicker className="input-field date-picker select-field" />
        </Form.Item>

        <div className="form-group mb-0">
          <label>Preview</label>
          <div className="scope-preview">
            <div className="preview-title">{scopeName || "Scope Name"}</div>
            <div className="preview-progress">
              <span className="progress-text">Progress</span>
              <span className="progress-count">{completedRequests} Request{completedRequests !== 1 ? 's' : ''}</span>
            </div>
            <Progress percent={progressPercent} showInfo={false} strokeColor="#019A20" trailColor="#EEF3EF" strokeWidth={10} className="preview-progress-bar" />
          </div>
        </div>
      </Form>
    </Drawer>
  );
};

export default AddScope;
