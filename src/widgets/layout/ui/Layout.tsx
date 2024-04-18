import * as React from "react";
import { useEffect } from "react";
import { Layout, LayoutProps, useDataProvider, useGetList } from "react-admin";
import AppBar from "./bar/AppBar";
import { useQuery } from "react-query";
import useLocalStoreGroupList from "../../../hooks/useLocalStoreGroupList";

export default (props: LayoutProps) => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [, setGroupList] = useLocalStoreGroupList();
    const { data, isLoading } = useGetList("groups");

    useEffect(() => {
        if (data) setGroupList(data);
    }, [token, username, isLoading]); // when isLoading change it write GroupList

    return <Layout {...props} appBar={AppBar} />;
};
