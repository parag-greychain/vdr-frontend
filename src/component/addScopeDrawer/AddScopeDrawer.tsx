import { Drawer, Input, Button } from "antd";
import "./AddScopeDrawer.scss";

const { TextArea } = Input;

interface AddScopeDrawerProps {
  open: boolean;
  onClose: () => void;
  onAdd?: (description: string) => void;
}

const AddScopeDrawer = ({ open, onClose, onAdd }: AddScopeDrawerProps) => {
  const handleAdd = () => {
    const description = (document.querySelector('.scope-description-textarea') as HTMLTextAreaElement)?.value || '';
    onAdd?.(description);
    onClose();
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement="right"
      width={400}
      closable={true}
      className="add-scope-drawer"
      footer={null}
    >
      <div className="add-scope-drawer-content">
        <div className="drawer-header">
          <div className="header-icon">
            <i className="erm-icon flag-icon" />
          </div>
          <div className="header-text">
            <h2 className="drawer-title">Add Flag</h2>
            <p className="drawer-subtitle">Add description to the flagged scope</p>
          </div>
        </div>

        <div className="drawer-body">
          <div className="form-field">
            <label className="field-label">Description</label>
            <TextArea
              className="scope-description-textarea"
              placeholder="Briefly describe what this scope covers for compliance and reporting"
              rows={8}
            />
          </div>
        </div>

        <div className="drawer-footer">
          <Button
            className="cancel-btn"
            size="large"
            shape="round"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="add-btn"
            type="primary"
            size="large"
            shape="round"
            onClick={handleAdd}
          >
            ADD
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default AddScopeDrawer;
