import { Button, Input } from "antd";
import "./Sidebar.scss";
import { SearchOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <h4 className="sidebar-heading">Scope</h4>
      <Input
        placeholder="Quick find"
        prefix={<SearchOutlined />}
        className="quick-search"
      />

      <Button type="link" className="add-scope">
        + ADD SCOPE
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
