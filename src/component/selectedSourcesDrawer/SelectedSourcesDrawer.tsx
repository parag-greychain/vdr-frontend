import React, { useState } from "react";
import { Drawer, Input, Breadcrumb, Checkbox } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { IMAGES } from "../../shared";
import "./SelectedSourcesDrawer.scss";

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
  const documents: DocumentItem[] = [
    {
      id: "1",
      title: "Document Title",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "Dec 3, 2025\n10:30 AM",
      isFolder: true,
    },
    {
      id: "2",
      title: "Document Title",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "Dec 3, 2025\n10:30 AM",
      isFolder: true,
    },
    {
      id: "3",
      title: "Document Title",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "Dec 3, 2025\n10:30 AM",
      isFolder: true,
    },
    {
      id: "4",
      title: "Document Title",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "Dec 3, 2025\n10:30 AM",
      isFolder: true,
    },
    {
      id: "5",
      title: "Document Title",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "Dec 3, 2025\n10:30 AM",
      isFolder: true,
    },
    {
      id: "6",
      title: "Document Title",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "Dec 3, 2025\n10:30 AM",
      isFolder: true,
    },
    {
      id: "7",
      title: "Document Title",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "Dec 3, 2025\n10:30 AM",
      isFolder: true,
    },
    {
      id: "8",
      title: "Document Title",
      sharePointPath: "ERM > Communities > Marine",
      lastSynced: "Dec 3, 2025\n10:30 AM",
      isFolder: true,
    },
  ];

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

  return (
    <Drawer
      className="selected-sources-drawer"
      title={
        <div className="drawer-header">
          <div className="header-top">
            <h2>Select Sources</h2>
            <div className="header-actions">
              <FilterOutlined className="filter-icon" />
              <Input
                placeholder="Search..."
                prefix={<SearchOutlined />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-input"
              />
              <CloseOutlined className="close-icon" onClick={onClose} />
            </div>
          </div>
          <Breadcrumb
            className="breadcrumb"
            items={[
              { title: "ERM" },
              { title: "Communities" },
              { title: "Marine" },
            ]}
          />
        </div>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={720}
      closeIcon={false}
      footer={
        <div className="drawer-footer">
          <div className="selected-count">
            <CloseOutlined
              className="clear-icon"
              onClick={() => setSelectedItems([])}
            />
            <span>{selectedItems.length} selected</span>
          </div>
          <div className="footer-actions">
            <button className="cancel-btn" onClick={handleCancel}>
              CANCEL
            </button>

            <button
              className="add-btn"
              disabled={selectedItems.length === 0}
              onClick={handleSelect}
            >
              ADD
            </button>
          </div>
        </div>
      }
    >
      <div className="sources-content">
        <div className="sources-table">
          <div className="table-header">
            <div className="header-cell checkbox-cell">
              <Checkbox
                onChange={(e) => handleSelectAll(e.target.checked)}
                checked={selectedItems.length === documents.length}
                indeterminate={
                  selectedItems.length > 0 &&
                  selectedItems.length < documents.length
                }
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
                    onChange={(e) =>
                      handleCheckboxChange(doc.id, e.target.checked)
                    }
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
        </div>
      </div>
    </Drawer>
  );
};

export default SelectedSourcesDrawer;
