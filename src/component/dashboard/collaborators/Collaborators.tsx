import { Avatar, Typography } from "antd";
import "./Collaborators.scss";

const { Text } = Typography;

interface CollaboratorsProps {
  collaborators: string[];
  maxCount?: number;
  additionalCount?: number;
}

const Collaborators: React.FC<CollaboratorsProps> = ({
  collaborators,
  maxCount = 3,
  additionalCount = 2,
}) => {
  return (
    <div className="collaborators-wrapper">
      <Text type="secondary" className="collaborators-title">
        Collaborators
      </Text>
      <Avatar.Group
        maxCount={maxCount}
        maxStyle={{ backgroundColor: "#d3dfd4", color: "var(--primary)" }}
      >
        {collaborators.map((collaborator, index) => (
          <Avatar
            key={index}
            style={{ backgroundColor: "#d3dfd4", color: "var(--primary)" }}
          >
            {collaborator}
          </Avatar>
        ))}
        {additionalCount > 0 && (
          <Avatar style={{ backgroundColor: "#d3dfd4", color: "var(--primary)" }}>
            +{additionalCount}
          </Avatar>
        )}
      </Avatar.Group>
    </div>
  );
};

export default Collaborators;

