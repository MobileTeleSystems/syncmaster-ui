import * as React from "react";
import { Layout, LayoutProps, useDataProvider, useStore } from "react-admin";
import AppBar from "./AppBar";
import { GroupStateType } from "../types";
import { useQuery } from "react-query";
import { useEffect } from "react";

export default (props: LayoutProps) => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const dataProvider = useDataProvider();
    const [_, setGroupList] = useStore<GroupStateType[]>("groupList", []);
    const { data, isLoading, error } = useQuery(
        ["groups", username, token],
        () => dataProvider.getGroupList(),
    );

    useEffect(() => {
        if (data) setGroupList(data);
    }, [token, username]);

    return <Layout {...props} appBar={AppBar} />;
};
