import { useEffect, useState } from "react";
import { useStore } from "react-admin";

type GroupStateType = { id: number; name: string };

const useGetGroupList = () => {
    const [, setCurrentGroup] = useStore<string>("currentGroup", "");
    const [currentGroupList, setCurrentGroupList] = useState<GroupStateType[]>(
        [],
    );

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
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
            fetch("http://localhost:8000/v1/groups", requestOptions)
                .then((res) => res.json())
                .then((json) => json.items)
                .then(setCurrentGroupList)
                .catch((e) => console.log(e));
        } else {
            setCurrentGroupList([])
        }
    }, []);

    return { currentGroupList, setCurrentGroup };
};

export default useGetGroupList;
