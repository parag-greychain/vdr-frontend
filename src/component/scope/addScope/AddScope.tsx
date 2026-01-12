import { useState } from "react";
import { Drawer, Input, Select, Button, DatePicker, Form, message } from "antd";
import type { Dayjs } from "dayjs";

import "./AddScope.scss";

export interface ScopeData {
  id?: string;
  name: string;
  description?: string;
  category: string;
  riskLevel: string;
  scopeOwner?: string;
  defaultDueDate?: string;
  progress?: number;
}

interface AddScopeProps {
  open: boolean;
  onClose: () => void;
  onAdd?: (scope: ScopeData) => void | Promise<void>;
}

interface ScopeFormValues {
  scopeName: string;
  description?: string;
  category: string;
  riskLevel: string;
  scopeOwner?: string;
  defaultDueDate?: Dayjs;
}

const AddScope = ({ open, onClose, onAdd }: AddScopeProps) => {
  const [form] = Form.useForm<ScopeFormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scopeName = Form.useWatch("scopeName", form);

  // Check if required field is valid (not empty and meets minimum length)
  const isFormValid = scopeName && scopeName.trim().length >= 4;

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setIsSubmitting(true);

      // Prepare scope data for API
      const scopeData: ScopeData = {
        name: values.scopeName.trim(),
        description: values.description?.trim(),
        category: values.category,
        riskLevel: values.riskLevel,
        scopeOwner: values.scopeOwner,
        defaultDueDate: values.defaultDueDate?.toISOString(),
        progress: 0, // New scope starts at 0%
      };

      // Call the onAdd callback (which can handle API call)
      if (onAdd) {
        await onAdd(scopeData);
      } else {
        // Fallback: Simulate API call if no callback provided
        // TODO: Replace with actual API call
        // await addScopeAPI(scopeData);
        console.log("Scope data to be sent to API:", scopeData);
      }

      message.success("Scope added successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("Validation or submission failed:", error);
      message.error("Failed to add scope. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Drawer
      placement="right"
      size={480}
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
          <Button onClick={handleClose} shape="round" type="text">
            Cancel
          </Button>
          <Button
            type="primary"
            className="primary-btn"
            shape="round"
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
            loading={isSubmitting}>
            ADD SCOPE
          </Button>
        </div>
      }>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          category: "environmental",
          riskLevel: "medium",
        }}
        className="add-scope-form">
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
          ]}>
          <Input
            className="input-field"
            placeholder="e.g. Water Management, Human Rights, Supply Chain Ethics"
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ max: 500, message: "Description must not exceed 500 characters" }]}>
          <Input.TextArea
            className="textarea"
            rows={3}
            maxLength={500}
            placeholder="Briefly describe what this scope covers for compliance and reporting."
          />
        </Form.Item>

        <Form.Item name="category" label="Category">
          <Select
            className="dropdown-ui"
            suffixIcon={
              <>
                <i className="erm-icon dropdown-arrow-icon" />
                <i className="erm-icon dropdown-top-arrow-icon" />
              </>
            }>
            <Select.Option value="environmental">Environmental</Select.Option>
          </Select>
        </Form.Item>

        <div className="form-group">
          <Form.Item name="scopeOwner" label="Scope Owner" style={{ marginBottom: 0 }}>
            <Select
              className="dropdown-ui"
              suffixIcon={
                <>
                  <i className="erm-icon dropdown-arrow-icon" />
                  <i className="erm-icon dropdown-top-arrow-icon" />
                </>
              }
              placeholder="Select owner"
            />
          </Form.Item>
          <span className="info-text">
            Owner will be responsible for managing requests under this scope.
          </span>
        </div>

        <Form.Item name="defaultDueDate" label="Default Due Date">
          <DatePicker className="input-field date-picker" />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddScope;
