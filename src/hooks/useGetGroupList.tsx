import {useEffect, useState} from "react";
import {useStore} from "react-admin";


type GroupStateType = [
    {id: number,
    name: string,}
]

const useGetGroupList = () => {
    const [currentUserToken, setCurrentUserToken] = useState('')
    const [, setCurrentGroup] = useStore("currentGroup", '');
    const [currentGroupList, setCurrentGroupList] = useState<GroupStateType | []>([]);

    useEffect(
        () => {
            const formdata = new FormData();
            // TODO: replace with getting username and password from authorization
            formdata.append("username", "not_empty_group_member_maintainer");
            formdata.append("password", "password");
            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            // @ts-ignore
            fetch("http://localhost:8000/v1/auth/token", requestOptions)
                .then(res => res.json())
                .then(json => json.access_token)
                .then(setCurrentUserToken)
                .catch(e => console.log(e));


        }, []
    )

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + currentUserToken);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        if (currentUserToken) {
            // @ts-ignore
            fetch("http://localhost:8000/v1/groups", requestOptions)
                .then(res => res.json())
                .then(json => json.items)
                .then(setCurrentGroupList)
                .catch(e => console.log(e));
        }
    }, [currentUserToken]);

    return ({currentGroupList, setCurrentGroup})
}

export default useGetGroupList