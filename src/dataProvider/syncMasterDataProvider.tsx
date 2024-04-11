import { DataProvider } from "react-admin";

const syncMasterDataProvider: DataProvider = {
    getCurrentGroup: async () => "selet_group",
    getGroupList: async () => {
        const myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Bearer " + localStorage.getItem("token"),
        );

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
        // @ts-ignore
        return fetch("http://localhost:8000/v1/groups", requestOptions)
            .then((res) => res.json())
            .then((json) => json.items)
            .catch((e) => console.log(e));
    },
};

export default syncMasterDataProvider;
