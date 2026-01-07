import ScopeFilterBar from "../common/ScopeFilterBar";
import RequestCard from "../common/RequestCard";

const SentScopeTab = () => {
  return (
    <div className="sent-tab">
      <ScopeFilterBar />

      <div className="request-list">
        {[1, 2, 3, 4].map((id) => (
          <RequestCard key={id} id={id} statusIcon="time-icon" />
        ))}
      </div>
    </div>
  );
};

export default SentScopeTab;
