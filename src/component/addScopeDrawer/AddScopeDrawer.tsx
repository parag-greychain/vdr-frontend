import { Drawer, Input, Button } from "antd";
import "./AddScopeDrawer.scss";
import { IMAGES } from "../../shared";

const { TextArea } = Input;

interface AddScopeDrawerProps {
  open: boolean;
  onClose: () => void;
  onAdd?: (description: string) => void;
}

const AddScopeDrawer = ({ open, onClose }: AddScopeDrawerProps) => {
  const handleAdd = () => {
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
          <div className="header-top">
            <div className="header-left">
              <div className="header-icon">
                <img src={IMAGES.addFlagIcon} alt="Add Flag" />
              </div>
              <h2 className="drawer-title">Add Flag</h2>
            </div>
            <button className="close-btn" onClick={onClose}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="drawer-subtitle">
            Add description to the flagged scope
          </p>
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
