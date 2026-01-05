import { Button, Input } from "antd";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <h4 className="sidebar-heading">Scope</h4>
      <div className="sidebar-search-wrapper">
        <Input
          placeholder="Quick find"
          prefix={<i className="erm-icon search-icon" />}
          className="quick-search"
        />
        <button
          type="button"
          className="status-trigger"
          aria-label="Filter by status"
        >
          <i className="erm-icon filter-icon"></i>
        </button>
      </div>

      <Button type="link" className="add-scope">
        <i className="erm-icon plus-icon"></i> ADD SCOPE
      </Button>

      <div className="scope-list">
        {[
          "Air Quality",
          "Business Ethics",
          "Critical Incident Risk Management",
          "Customer Welfare",
          "Data Security",
          "Ecological Impacts",
          "Employee Engagement, Diversity & inclusion",
          "Employee Health & Safety",
          "Energy Management",
        ].map((item) => (
          <div
            key={item}
            className={`scope-item ${item === "Air Quality" ? "active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
