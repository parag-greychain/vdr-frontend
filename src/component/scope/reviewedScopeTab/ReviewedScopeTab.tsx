import ScopeFilterBar from "../common/ScopeFilterBar";
import RequestCard from "../common/RequestCard";

const ReviewedScopeTab = () => {
  return (
    <div className="reviewed-tab">
      <ScopeFilterBar />

      <div className="request-list">
        {[1, 2, 3, 4].map((id) => (
          <RequestCard
            key={id}
            id={id}
            statusIcon="check-icon"
            showProgress
            progress={78}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewedScopeTab;
