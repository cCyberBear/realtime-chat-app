import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import "./StatusIcon.scss";
function StatusIcon({ status }) {
  switch (status) {
    case "online":
      return (
        <CheckCircleOutlineIcon
          style={{ color: "#38C172", backgroundColor: "white" }}
          className="StatusIcon"
        />
      );
    case "away":
      return (
        <AccessTimeIcon
          style={{ color: "#fff", backgroundColor: "rgb(242 208 36)" }}
          className="StatusIcon"
        />
      );
    case "offline":
      return (
        <NotInterestedIcon
          style={{ color: "grey-dark", backgroundColor: "white" }}
          className="StatusIcon"
        />
      );
    default:
      return null;
  }
}

export default StatusIcon;
