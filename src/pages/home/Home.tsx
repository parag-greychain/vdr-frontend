import { useState } from "react";
import { Button } from "antd";
import { PDFViewerDrawer } from "../../component";

const Home = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const handleOpenPdf = () => {
    setIsPdfOpen(true);
  };

  const handleClosePdf = () => {
    setIsPdfOpen(false);
  };

  const handleApprove = () => {
    console.log("PDF Approved");
    setIsPdfOpen(false);
  };

  const handleCancel = () => {
    console.log("PDF Cancelled");
    setIsPdfOpen(false);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the application!</p>
      <Button type="primary" onClick={handleOpenPdf} hidden>
        Open PDF Viewer
      </Button>

      <PDFViewerDrawer
        open={isPdfOpen}
        onClose={handleClosePdf}
        pdfUrl="https://morth.nic.in/sites/default/files/dd12-13_0.pdf"
        title="Development Report.pdf"
        showActions={true}
        onApprove={handleApprove}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Home;
