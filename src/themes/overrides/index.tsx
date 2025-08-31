// third-party
import { merge } from "lodash-es";

// project imports
import Badge from "./Badge.js";
import Button from "./Button.js";
import ButtonBase from "./ButtonBase.js";
import CardContent from "./CardContent.js";
import Checkbox from "./Checkbox.js";
import Chip from "./Chip.js";
import Drawer from "./Drawer.js";
import FormHelperText from "./FormHelperText.js";
import IconButton from "./IconButton.js";
import InputLabel from "./InputLabel.js";
import LinearProgress from "./LinearProgress.js";
import Link from "./Link.js";
import ListItemButton from "./ListItemButton.js";
import ListItemIcon from "./ListItemIcon.js";
import OutlinedInput from "./OutlinedInput.js";
import Tab from "./Tab.js";
import TableBody from "./TableBody.js";
import TableCell from "./TableCell.js";
import TableHead from "./TableHead.js";
import TableRow from "./TableRow.js";
import Tabs from "./Tabs.js";
import Tooltip from "./Tooltip.js";
import Typography from "./Typography.js";

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Badge(theme),
    Button(theme),
    ButtonBase(),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    Drawer(),
    FormHelperText(),
    IconButton(theme),
    InputLabel(theme),
    LinearProgress(),
    Link(),
    ListItemButton(theme),
    ListItemIcon(theme),
    OutlinedInput(theme),
    Tab(theme),
    TableBody(theme),
    TableCell(theme),
    TableHead(theme),
    TableRow(),
    Tabs(),
    Tooltip(theme),
    Typography()
  );
}
