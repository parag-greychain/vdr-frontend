import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Document, Page, pdfjs } from "react-pdf";
import {
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  CloseOutlined,
  CopyOutlined,
  DownloadOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./PdfViewerDrawer.scss";

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerDrawerProps {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
  onApprove?: () => void;
  onCancel?: () => void;
  showActions?: boolean;
  summaryContent?: React.ReactNode;
  lastSync?: string;
}

const PdfViewerDrawer: React.FC<PdfViewerDrawerProps> = ({
  open,
  onClose,
  pdfUrl,
  title = "PDF Viewer",
  onApprove,
  onCancel,
  showActions = false,
  summaryContent,
  lastSync,
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3.0));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const handleApprove = () => {
    onApprove?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <Drawer
      closable={false}
      placement="right"
      onClose={onClose}
      open={open}
      width="70%"
      className="pdf-viewer-drawer"
      styles={{ header: { display: "none" }, body: { padding: 0 } }}
      footer={null}
    >
      <div className="pdf-viewer-container">
        <div className={`pdf-content-wrapper ${isFullscreen ? 'fullscreen-mode' : ''}`}>
          <div className="pdf-document-section">
            <div className="pdf-toolbar">
              <div className="pdf-zoom-controls">
                <Button
                  icon={<ZoomOutOutlined />}
                  onClick={handleZoomOut}
                  disabled={scale <= 0.5}
                  type="text"
                />
                <span className="zoom-level">{Math.round(scale * 100)}%</span>
                <Button
                  icon={<ZoomInOutlined />}
                  onClick={handleZoomIn}
                  disabled={scale >= 3.0}
                  type="text"
                />
              </div>
              <div className="pdf-nav-controls">
                <Button
                  icon={<LeftOutlined />}
                  onClick={goToPrevPage}
                  disabled={pageNumber <= 1}
                  type="text"
                />
                <span className="page-indicator">
                  Page {pageNumber} of {numPages}
                </span>
                <Button
                  icon={<RightOutlined />}
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                  type="text"
                />
              </div>
              <div className="pdf-fullscreen-control">
                <Button
                  icon={
                    isFullscreen ? (
                      <FullscreenExitOutlined />
                    ) : (
                      <FullscreenOutlined />
                    )
                  }
                  onClick={toggleFullscreen}
                  type="text"
                  title={isFullscreen ? "Fit to width" : "Fullscreen"}
                />
              </div>
            </div>
            <div className="pdf-document">
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="pdf-loading">Loading PDF...</div>}
                error={<div className="pdf-error">Failed to load PDF</div>}
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  width={isFullscreen ? undefined : 550}
                />
              </Document>
            </div>
            <div className="pdf-drawer-footer">
              {showActions && (
                <>
                  <Button size="large" onClick={handleCancel}>
                    CANCEL
                  </Button>
                  <Button type="primary" size="large" onClick={handleApprove}>
                    APPROVE
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="pdf-summary-section">
            <div className="summary-header">
              <div className="summary-top">
                <h2 className="summary-title">{title}</h2>
                <Button type="text" onClick={onClose} icon={<CloseOutlined />}>
                  Close
                </Button>
              </div>
              <div className="summary-sub">
                <span className="last-sync">
                  {lastSync ? `Last sync: ${lastSync}` : ""}
                </span>
                <div className="summary-actions">
                  <Button type="text" icon={<CopyOutlined />} />
                  <Button type="text" icon={<DownloadOutlined />} />
                  <Button type="text" icon={<ShareAltOutlined />} />
                </div>
              </div>
            </div>
            <div className="summary-content">
              <h3>Summary</h3>
              {summaryContent || (
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default PdfViewerDrawer;
