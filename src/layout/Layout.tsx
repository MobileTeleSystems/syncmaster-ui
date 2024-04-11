import * as React from "react";
import { useEffect } from "react";
import { Layout, LayoutProps, useDataProvider } from "react-admin";
import AppBar from "./AppBar";
import { useQuery } from "react-query";
import useLocalStoreGroupList from "../hooks/useLocalStoreGroupList";

export default (props: LayoutProps) => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const dataProvider = useDataProvider();
    const [, setGroupList] = useLocalStoreGroupList();
    const { data, isLoading, error } = useQuery(
        ["groups", username, token],
        () => dataProvider.getGroupList(),
    );

    useEffect(() => {
        if (data) setGroupList(data);
    }, [token, username]);

    return <Layout {...props} appBar={AppBar} />;
};
