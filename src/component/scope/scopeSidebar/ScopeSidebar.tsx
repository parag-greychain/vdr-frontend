import { useState, useCallback } from "react";
import { Input, Button, Progress, Checkbox } from "antd";
import "./ScopeSidebar.scss";
import { AddScope } from "../../../component";
import type { ScopeData } from "../addScope/AddScope";

export interface ScopeItem {
  id: string;
  name: string;
  progress: number;
}

interface ScopeSidebarProps {
  showCheckboxes?: boolean;
  selectedScopes?: string[];
  onScopeSelectionChange?: (selectedScopes: string[]) => void;
  scopes?: ScopeItem[];
  onScopesChange?: (scopes: ScopeItem[]) => void;
}

const DEFAULT_SCOPES: ScopeItem[] = [
  { id: "1", name: "Air Quality", progress: 50 },
  { id: "2", name: "Business Ethics", progress: 50 },
  { id: "3", name: "Critical Incident Risk Management", progress: 50 },
  { id: "4", name: "Customer Welfare", progress: 50 },
  { id: "5", name: "Data Security", progress: 50 },
  { id: "6", name: "Ecological Impacts", progress: 50 },
  { id: "7", name: "Employee Engagement, Diversity & inclusion", progress: 50 },
  { id: "8", name: "Employee Health & Safety", progress: 50 },
  { id: "9", name: "Energy Management", progress: 50 },
];

const ScopeSidebar = ({
  showCheckboxes = false,
  selectedScopes = [],
  onScopeSelectionChange,
  scopes: externalScopes,
  onScopesChange,
}: ScopeSidebarProps) => {
  const [isAddScopeOpen, setIsAddScopeOpen] = useState(false);
  const [internalScopes, setInternalScopes] = useState<ScopeItem[]>(DEFAULT_SCOPES);

  // Use external scopes if provided, otherwise use internal state
  const scopes = externalScopes ?? internalScopes;
  const setScopes = onScopesChange ?? setInternalScopes;

  const handleAddScope = useCallback(
    async (scopeData: ScopeData) => {
      try {
        // API Integration: Uncomment when ready to use real API
        // import { addScopeAPI } from "../../../services/scopeApi";
        // const newScope = await addScopeAPI(scopeData);

        // For now, simulate API response
        const newScope: ScopeItem = {
          id: Date.now().toString(), // Temporary ID, should come from API
          name: scopeData.name,
          progress: scopeData.progress ?? 0,
        };

        // Add new scope to the list
        setScopes([...scopes, newScope]);

        // If using checkboxes, optionally select the new scope
        if (showCheckboxes) {
          const newSelected = [...selectedScopes, newScope.name];
          onScopeSelectionChange?.(newSelected);
        }
      } catch (error) {
        console.error("Failed to add scope:", error);
        throw error; // Re-throw to let AddScope handle the error
      }
    },
    [scopes, setScopes, showCheckboxes, selectedScopes, onScopeSelectionChange]
  );

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
        {scopes.map((scope) => {
          const isSelected = selectedScopes.includes(scope.name);
          const isActive = !showCheckboxes && scope.id === "1";

          return (
            <div
              key={scope.id}
              className={`scope-item ${isActive ? "active" : ""} ${showCheckboxes ? "with-checkbox" : ""}`}
              onClick={() => {
                if (!showCheckboxes) return;
                const newSelected = isSelected
                  ? selectedScopes.filter((s) => s !== scope.name)
                  : [...selectedScopes, scope.name];
                onScopeSelectionChange?.(newSelected);
              }}>
              {showCheckboxes && (
                <Checkbox
                  checked={isSelected}
                  onChange={(e) => {
                    e.stopPropagation();
                    const newSelected = e.target.checked
                      ? [...selectedScopes, scope.name]
                      : selectedScopes.filter((s) => s !== scope.name);
                    onScopeSelectionChange?.(newSelected);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              {!showCheckboxes && (
                <Progress
                  type="circle"
                  percent={scope.progress}
                  size={24}
                  strokeWidth={24}
                  strokeColor="#82A78D"
                />
              )}
              <span className="side-menu-text">{scope.name}</span>
              {!showCheckboxes && (
                <span className="flag-icon-wrap">
                  <i className="erm-icon flag-icon" />
                </span>
              )}
            </div>
          );
        })}
      </div>

      <AddScope
        open={isAddScopeOpen}
        onClose={() => setIsAddScopeOpen(false)}
        onAdd={handleAddScope}
      />
    </>
  );
};

export default ScopeSidebar;
