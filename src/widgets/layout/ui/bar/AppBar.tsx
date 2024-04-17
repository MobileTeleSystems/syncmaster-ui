import * as React from "react";
import { AppBar, TitlePortal } from "react-admin";
import { Box, Theme, useMediaQuery } from "@mui/material";
import { AppBarToolbar } from "./AppBarToolbar";
import Groups from "../../../groups/ui/groupSelector";

const CustomAppBar = () => {
    const isLargeEnough = useMediaQuery<Theme>((theme) =>
        theme.breakpoints.up("sm"),
    );

    return (
        <AppBar color="secondary" toolbar={<AppBarToolbar />}>
            <TitlePortal />
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
            <Groups />
        </AppBar>
    );
};

export default CustomAppBar;
