import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import useLocalStoreCurrentGroup from "../../hooks/useLocalStore";
import useLocalStoreGroupList from "../../hooks/useLocalStoreGroupList";

const Groups = () => {
    const [, setCurrentGroup] = useLocalStoreCurrentGroup();
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
                isOptionEqualToValue={(option, value) => {
                    return option.label === value.label; // fix mui
                }}
                noOptionsText={"You don't belong to any group"}
            />
        </>
    );
};

export default Groups;
