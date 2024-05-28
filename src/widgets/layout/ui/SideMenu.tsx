import * as React from "react";
import { Menu } from "react-admin";

// a separate menu is needed to hide the runs resource
const SideMenu = () => (
    <Menu>
        <Menu.ResourceItem name="transfers" />
        <Menu.ResourceItem name="connections" />
        <Menu.ResourceItem name="queues" />
    </Menu>
);

export default SideMenu;
