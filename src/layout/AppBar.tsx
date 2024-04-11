import * as React from "react";
import { AppBar, TitlePortal, useDataProvider, useStore } from "react-admin";
import { Box, Theme, useMediaQuery } from "@mui/material";
import { AppBarToolbar } from "./AppBarToolbar";
import Groups from "../groups/component/groupSelector";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { GroupStateType } from "../types";

const CustomAppBar = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const dataProvider = useDataProvider();
    const [_, setGroupList] = useStore<GroupStateType[]>("groupList", []);
    const isLargeEnough = useMediaQuery<Theme>((theme) =>
        theme.breakpoints.up("sm"),
    );
    const { data, isLoading, error } = useQuery(
        ["groups", username, token],
        () => dataProvider.getGroupList(),
    );

    useEffect(() => {
        if (data) setGroupList(data);
    }, [token, username]);

    return (
        <AppBar color="secondary" toolbar={<AppBarToolbar />}>
            <TitlePortal />
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
            <Groups />
        </AppBar>
    );
};

export default CustomAppBar;
