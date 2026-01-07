import { Button, Input, Select } from "antd";

const ScopeFilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-left">
        <Input
          placeholder="Search..."
          prefix={<i className="erm-icon search-icon" />}
          className="quick-search"
        />

        <Select
          defaultValue="all"
          className="dropdown-ui"
          suffixIcon={
            <>
              <i className="erm-icon dropdown-arrow-icon" />
              <i className="erm-icon dropdown-top-arrow-icon" />
            </>
          }
        >
          <Select.Option value="all">All</Select.Option>
        </Select>
      </div>

      <div className="filter-right">
        <Button
          icon={<i className="erm-icon plus-icon" />}
          className="primary-btn"
          type="primary"
          shape="round"
        >
          CREATE REQUEST
        </Button>
      </div>
    </div>
  );
};

export default ScopeFilterBar;
