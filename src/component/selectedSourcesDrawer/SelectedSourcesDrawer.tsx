import React, { useState } from "react";
import { Drawer, Input, Breadcrumb, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { IMAGES } from "../../shared";
import "./SelectedSourcesDrawer.scss";
import Table, { ColumnsType } from "antd/es/table";

interface DocumentItem {
  id: string;
  title: string;
  sharePointPath: string;
  lastSynced: string;
  isFolder: boolean;
}

interface SelectedSourcesDrawerProps {
  open: boolean;
  onClose: () => void;
  onSelect?: (selectedItems: DocumentItem[]) => void;
}

const SelectedSourcesDrawer: React.FC<SelectedSourcesDrawerProps> = ({
  open,
  onClose,
  onSelect,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Mock data - replace with actual data

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(documents.map((doc) => doc.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleCancel = () => {
    setSelectedItems([]);
    onClose();
  };

  const handleSelect = () => {
    const selected = documents.filter((doc) => selectedItems.includes(doc.id));
    onSelect?.(selected);
    onClose();
  };

  interface DocumentItem {
    key: string;
    title: string;
    sharePointPath: string;
    lastSynced: string;
  }

  const documents: DocumentItem[] = [
    {
      key: "1",
      title: "ESG Reports",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "20/01/2024\n2:30 pm",
    },
    {
      key: "2",
      title: "Compliance Files",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "18/01/2024\n11:15 am",
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  const columns: ColumnsType<DocumentItem> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (_, record) => (
        <div className="file-title">
          <div className="file-icon">
            <img src={IMAGES.sourceFolderIcon} alt="Folder" />
          </div>
          <div className="file-content">
            <div className="file-name">{record.title}</div>
            <div className="file-path">Folder</div>
            <i className="erm-icon next-icon" />
          </div>
        </div>
      ),
    },
    {
      title: "Sharepoint File Path",
      dataIndex: "sharePointPath",
      key: "sharePointPath",
    },
    {
      title: "Last Synced",
      dataIndex: "lastSynced",
      key: "lastSynced",
      render: (text: string) => (
        <>
          {text.split("\n").map((line, i) => (
            <div className="table-date" key={i}>
              {line}
            </div>
          ))}
        </>
      ),
    },
  ];

  return (
    <Drawer
      className="selected-sources-drawer"
      closeIcon={<i className="erm-icon close-icon" />}
      title={
        <div className="drawer-header">
          <div className="header-top">
            <h2>Select Sources</h2>
            <div className="sidebar-search-wrapper">
              <button type="button" className="status-trigger" aria-label="Filter by status">
                <i className="erm-icon filter-icon"></i>
              </button>
              <Input
                placeholder="Search..."
                prefix={<i className="erm-icon search-icon" />}
                className="quick-search"
              />
            </div>
          </div>
          <Breadcrumb
            className="breadcrumb"
            separator={<i className="erm-icon next-icon" />}
            items={[{ title: "ERM" }, { title: "Communities" }, { title: "Marine" }]}
          />
        </div>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={550}
      footer={
        <div className="drawer-footer">
          <div className="selected-count">
            <CloseOutlined className="clear-icon" onClick={() => setSelectedItems([])} />
            <span>{selectedItems.length} selected</span>
          </div>
          <div className="footer-actions">
            <Button className="secondary-btn" shape="round" onClick={handleCancel}>
              CANCEL
            </Button>

            <Button
              className="primary-btn"
              shape="round"
              disabled={selectedItems.length === 0}
              onClick={handleSelect}>
              SELECT <i className="erm-icon arrow-right-icon" />
            </Button>
          </div>
        </div>
      }>
      <div className="sources-content">
        <Table<DocumentItem>
          className="sources-table"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={documents}
          pagination={false}
          rowKey="key"
        />
        {/* <div className="sources-table">
          <div className="table-header">
            <div className="header-cell checkbox-cell">
              <Checkbox
                onChange={(e) => handleSelectAll(e.target.checked)}
                checked={selectedItems.length === documents.length}
                indeterminate={selectedItems.length > 0 && selectedItems.length < documents.length}
              />
            </div>
            <div className="header-cell title-cell">Title</div>
            <div className="header-cell path-cell">Sharepoint File Path</div>
            <div className="header-cell synced-cell">Last Synced</div>
          </div>
          <div className="table-body">
            {documents.map((doc) => (
              <div key={doc.id} className="table-row">
                <div className="body-cell checkbox-cell">
                  <Checkbox
                    checked={selectedItems.includes(doc.id)}
                    onChange={(e) => handleCheckboxChange(doc.id, e.target.checked)}
                    className={selectedItems.includes(doc.id) ? "checked" : ""}
                  />
                </div>
                <div className="body-cell title-cell">
                  <span className="folder-icon">
                    <img src={IMAGES.sourceFolderIcon} alt="Folder" />
                  </span>
                  <div className="title-content">
                    <div className="title-text">{doc.title}</div>
                    <div className="subtitle-text">Folder</div>
                  </div>
                  <span className="arrow-icon">›</span>
                </div>
                <div className="body-cell path-cell">{doc.sharePointPath}</div>
                <div className="body-cell synced-cell">
                  {doc.lastSynced.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </Drawer>
  );
};

export default SelectedSourcesDrawer;
