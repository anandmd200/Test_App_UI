import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// material-ui
import ButtonBase from "@mui/material/ButtonBase";

// project imports

import { APP_DEFAULT_PATH } from "../../config.js";
import LogoIcon from "./LogoIcon.js";
import LogoMain from "./LogoMain.js";

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ reverse, isIcon, sx, to }) {
  return (
    <ButtonBase
      disableRipple
      component={Link}
      to={to || APP_DEFAULT_PATH}
      sx={sx}
    >
      {isIcon ? <LogoIcon /> : <LogoMain reverse={reverse} />}
    </ButtonBase>
  );
}

LogoSection.propTypes = {
  reverse: PropTypes.bool,
  isIcon: PropTypes.bool,
  sx: PropTypes.any,
  to: PropTypes.any,
};
