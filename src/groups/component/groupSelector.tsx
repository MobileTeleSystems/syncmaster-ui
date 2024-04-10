import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useStore} from "react-admin";
import {useEffect, useState} from "react";


type GroupStateType = [
    {id: number,
    name: string,}
]

const Groups = () => {

    const [currentUserToken, setCurrentUserToken] = useState('')
    const [, setCurrentGroup] = useStore("currentGroup", '');
    const [currentGroupList, setCurrentGroupList] = useState<GroupStateType | []>([]);
    const [age, setAge] = useState('');

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
            fetch("http://localhost:8000/v1/groups", requestOptions)
                .then(res => res.json())
                .then(json => json.items)
                .then(setCurrentGroupList)
                .catch(e => console.log(e));
        }
    }, [currentUserToken]);

    const handleChange = (event: SelectChangeEvent, child) => {
        setCurrentGroup(child.props.children)
        setAge(event.target.value as string)
    };

    return (
        <>
            <FormControl style={{minWidth: 150}}>
                <InputLabel id="demo-simple-select-label">Select group</InputLabel>
                <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Groups"
                        onChange={handleChange}
                        value={age}
                >
                    {
                        currentGroupList.map(
                            (item) => <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>

        </>
    )
}

export default Groups