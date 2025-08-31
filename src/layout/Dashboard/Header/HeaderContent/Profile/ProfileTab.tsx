import PropTypes from "prop-types";
// material-ui
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// assets
import { EditOutlined } from "@ant-design/icons";
import { ProfileOutlined } from "@ant-design/icons";
import { LogoutOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { WalletOutlined } from "@ant-design/icons";

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

export default function ProfileTab() {
  return (
    <List
      component="nav"
      sx={{ p: 0, "& .MuiListItemIcon-root": { minWidth: 32 } }}
    >
      <ListItemButton>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="View Profile" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <ProfileOutlined />
        </ListItemIcon>
        <ListItemText primary="Social Profile" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WalletOutlined />
        </ListItemIcon>
        <ListItemText primary="Billing" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}

ProfileTab.propTypes = { handleLogout: PropTypes.func };
