import { Drawer, Input, Select, Button, DatePicker, Progress } from "antd";

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
          <Button onClick={onClose} shape="round" type="text">Cancel</Button>
          <Button type="primary" className="primary-btn" shape="round">
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
          <Input className="input-field" placeholder="e.g. Water Management, Human Rights" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <Input.TextArea className="input-field" rows={3} />
        </div>

        <div className="form-group">
          <label>Category</label>
          <Select className="input-field select-field" defaultValue="environmental">
            <Select.Option value="environmental">Environmental</Select.Option>
          </Select>
        </div>

        <div className="form-group">
          <label>Default Risk Level</label>
          <div className="risk-level-group">
            <Button className="risk-btn low"><span className="risk-icon"></span>Low</Button>
            <Button className="risk-btn medium active"><span className="risk-icon"></span>Medium</Button>
            <Button className="risk-btn high"><span className="risk-icon"></span>High</Button>
          </div>
        </div>

        <div className="form-group">
          <label>Scope Owner</label>
          <Select className="input-field select-field" placeholder="Select owner" />
          <span className="info-text">Owner will be responsible for managing requests under this scope.</span>
        </div>

        <div className="form-group">
          <label>Default Due Date</label>
          <DatePicker className="input-field date-picker select-field" />
        </div>

        <div className="form-group mb-0">
          <label>Preview</label>
          <div className="scope-preview">
            <div className="preview-title">Scope Name</div>
            <div className="preview-progress">
              <span className="progress-text">Progress</span>
              <span className="progress-count">0 Requests</span>
            </div>
            <Progress percent={50} showInfo={false} strokeColor="#019A20" trailColor="#EEF3EF" strokeWidth={10} className="preview-progress-bar" />
          </div>
        </div>


      </div>
    </Drawer>
  );
};

export default AddScope;
