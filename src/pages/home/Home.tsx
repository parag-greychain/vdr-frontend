import { useState } from "react";
import { Button } from "antd";
import {
  PDFViewerDrawer,
  RiskAssessment,
  AddScopeDrawer,
  SelectedSourcesDrawer,
} from "../../component";

const Home = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isRiskAssessmentOpen, setIsRiskAssessmentOpen] = useState(false);
  const [isAddScopeDrawerOpen, setIsAddScopeDrawerOpen] = useState(false);
  const [isSelectedSourcesOpen, setIsSelectedSourcesOpen] = useState(false);

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

  const handleOpenRiskAssessment = () => {
    setIsRiskAssessmentOpen(true);
  };

  const handleCloseRiskAssessment = () => {
    setIsRiskAssessmentOpen(false);
  };

  const handleAddRisk = () => {
    console.log("Risk Assessment Added");
  };

  const handleOpenAddScopeDrawer = () => {
    setIsAddScopeDrawerOpen(true);
  };

  const handleCloseAddScopeDrawer = () => {
    setIsAddScopeDrawerOpen(false);
  };

  const handleAddScope = (description: string) => {
    console.log("Scope Added:", description);
  };

  const handleOpenSelectedSources = () => {
    setIsSelectedSourcesOpen(true);
  };

  const handleCloseSelectedSources = () => {
    setIsSelectedSourcesOpen(false);
  };

  const handleSelectSources = (selectedItems: any[]) => {
    console.log("Selected Sources:", selectedItems);
  };

  const isHidden = true;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the application!</p>
      <Button type="primary" onClick={handleOpenPdf} hidden={isHidden}>
        Open PDF Viewer
      </Button>
      <Button
        type="primary"
        onClick={handleOpenRiskAssessment}
        hidden={isHidden}
      >
        Open Risk Assessment
      </Button>
      <Button
        type="primary"
        onClick={handleOpenAddScopeDrawer}
        hidden={isHidden}
      >
        Open Add Scope Drawer
      </Button>
      <Button
        type="primary"
        onClick={handleOpenSelectedSources}
        hidden={isHidden}
      >
        Open Selected Sources
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

      <RiskAssessment
        open={isRiskAssessmentOpen}
        onClose={handleCloseRiskAssessment}
        onAdd={handleAddRisk}
      />

      <AddScopeDrawer
        open={isAddScopeDrawerOpen}
        onClose={handleCloseAddScopeDrawer}
        onAdd={handleAddScope}
      />

      <SelectedSourcesDrawer
        open={isSelectedSourcesOpen}
        onClose={handleCloseSelectedSources}
        onSelect={handleSelectSources}
      />
    </div>
  );
};

export default Home;
