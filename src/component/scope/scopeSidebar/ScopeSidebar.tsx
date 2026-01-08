import { Input, Button, Progress } from "antd";
import "./ScopeSidebar.scss";
import { useState } from "react";
import { AddScope } from "../../../component";

const ScopeSidebar = () => {
  const [isAddScopeOpen, setIsAddScopeOpen] = useState(false);

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

      <Button
        type="link"
        className="add-scope"
        onClick={() => setIsAddScopeOpen(true)}
      >
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
            <Progress
              type="circle"
              percent={50}
              size={24}
              strokeWidth={24}
              strokeColor="#82A78D"
            />
            <span className="side-menu-text">{item}</span>
            <span className="flag-icon-wrap">
              <i className="erm-icon flag-icon" />
            </span>
          </div>
        ))}
      </div>

      <AddScope
        open={isAddScopeOpen}
        onClose={() => setIsAddScopeOpen(false)}
      />
    </>
  );
};

export default ScopeSidebar;
