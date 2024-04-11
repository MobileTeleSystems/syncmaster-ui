import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useQuery } from "react-query";
import { useDataProvider, useStore } from "react-admin";
import { useState } from "react";

type GroupStateType = { id: number; name: string };

const Groups = () => {
    const [, setCurrentGroup] = useStore<string>("currentGroup", "");
    const [groupList, setGroupList] = useStore<string[]>("groupList", []);

    const [currentGroupList, setCurrentGroupList] = useState<GroupStateType[]>(
        [],
    );
    const dataProvider = useDataProvider();
    const { data, isLoading, error } = useQuery(
        ["groups", localStorage.getItem("username")],
        () => dataProvider.getGroupList(),
    );

    // const { currentGroupList, setCurrentGroup } = useGetGroupList();
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={
                    currentGroupList.length > 0
                        ? currentGroupList.map((group) => ({
                              label: group.name,
                          }))
                        : []
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Groups" />
                )}
                onChange={(_, value) => {
                    if (value) {
                        setCurrentGroup(value.label);
                    } else setCurrentGroup("");
                }}
                isOptionEqualToValue={(option, value) => {
                    return option.label === value.label; // fix mui
                }}
                noOptionsText={"You don't belong to any group"}
            />
        </>
    );
};

export default Groups;
