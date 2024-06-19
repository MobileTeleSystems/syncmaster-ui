import useLocalStoreGroupList from "@hooks/useLocalStoreGroupList";
import AppBar from "@widgets/layout/ui/bar/AppBar";
import SideMenu from "@widgets/layout/ui/SideMenu";
import { useEffect } from "react";
import { Layout, LayoutProps, useGetList } from "react-admin";

// eslint-disable-next-line react/display-name
export default (props: LayoutProps) => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [, setGroupList] = useLocalStoreGroupList();
    const { data, isLoading } = useGetList("groups");

    useEffect(() => {
        if (data) setGroupList(data);
    }, [token, username, isLoading]); // when isLoading change it write GroupList

    return <Layout {...props} appBar={AppBar} menu={SideMenu} />;
};
