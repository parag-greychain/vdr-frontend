import ScopeFilterBar from "../common/ScopeFilterBar";
import RequestCard from "../common/RequestCard";

const ReceivedScopeTab = () => {
  return (
    <div className="received-tab">
      <ScopeFilterBar />

      <div className="request-list">
        {[1, 2, 3, 4].map((id) => (
          <RequestCard
            key={id}
            id={id}
            statusIcon="doc-icon"
            showProgress
            progress={78}
          />
        ))}
      </div>
    </div>
  );
};

export default ReceivedScopeTab;
