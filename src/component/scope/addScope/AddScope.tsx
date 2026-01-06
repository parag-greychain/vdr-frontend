import { Drawer, Input, Select, Button, DatePicker } from "antd";

import "./AddScope.scss";

interface AddScopeProps {
  open: boolean;
  onClose: () => void;
}

const AddScope = ({ open, onClose }: AddScopeProps) => {
  return (
    <Drawer
      placement="right"
      width={480}
      open={open}
      onClose={onClose}
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
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" className="primary-btn">
            ADD SCOPE
          </Button>
        </div>
      }
    >
      <div className="add-scope-form">
        <div className="form-group">
          <label>
            Scope Name <span className="required">*</span>
          </label>
          <Input placeholder="e.g. Water Management, Human Rights" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <Input.TextArea rows={3} />
        </div>

        <div className="form-group">
          <label>Category</label>
          <Select defaultValue="environmental">
            <Select.Option value="environmental">Environmental</Select.Option>
          </Select>
        </div>

        <div className="form-group">
          <label>Default Risk Level</label>
          <div className="risk-level-group">
            <Button className="risk-btn low">Low</Button>
            <Button className="risk-btn medium active">Medium</Button>
            <Button className="risk-btn high">High</Button>
          </div>
        </div>

        <div className="form-group">
          <label>Scope Owner</label>
          <Select placeholder="Select owner" />
        </div>

        <div className="form-group">
          <label>Default Due Date</label>
          <DatePicker className="full-width" />
        </div>

        <div className="scope-preview">
          <div className="preview-title">Scope Name</div>
          <div className="preview-progress">
            <span>Progress</span>
            <span>0 Requests</span>
          </div>
          <div className="preview-bar" />
        </div>
      </div>
    </Drawer>
  );
};

export default AddScope;
