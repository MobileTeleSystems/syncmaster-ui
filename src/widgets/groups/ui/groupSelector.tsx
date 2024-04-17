import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import useLocalStoreCurrentGroup from "../../../hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "../../../hooks/useLocalStoreGroupList";

const Groups = () => {
    const [currentGroup, setCurrentGroup] = useLocalStoreCurrentGroup();
    const [groupList, _] = useLocalStoreGroupList();

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={
                    groupList.length > 0
                        ? groupList.map((group) => ({
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
                value={{label: currentGroup}}
                isOptionEqualToValue={(option, value) => {
                    if (value.label === '') return true; // fix mui Autocomplete component
                    return option.label === value.label; // fix mui Autocomplete component
                }}
                noOptionsText={"You don't belong to any group"}
            />
        </>
    );
};

export default Groups;
