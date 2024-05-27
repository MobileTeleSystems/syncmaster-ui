import { GroupSelectorElement } from "@hooks/types";
import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import useLocalStoreCurrentGroup from "@hooks/useLocalStoreCurrentGroup";
import useLocalStoreGroupList from "@hooks/useLocalStoreGroupList";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

const Groups = () => {
    const [currentGroup, setCurrentGroup] = useLocalStoreCurrentGroup();
    const [groupList, _] = useLocalStoreGroupList();
    const [currentGroupLocked] = useLocalStoreChangeGroup();

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={
                    groupList.length > 0
                        ? groupList.map(
                              (group): GroupSelectorElement => ({
                                  label: group.name,
                                  id: group.id,
                              }),
                          )
                        : []
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Groups" />
                )}
                onChange={(_, value) => {
                    if (value) {
                        setCurrentGroup(value);
                    } else setCurrentGroup({ label: "" });
                }}
                isOptionEqualToValue={(option, value) => {
                    if (value.label === "") return true; // fix mui Autocomplete component
                    return option.label === value.label; // fix mui Autocomplete component
                }}
                noOptionsText={"No groups found"}
                // Needed to save the display of the selected group when refreshing the page
                value={{ label: currentGroup.label }}
                disabled={currentGroupLocked}
            />
        </>
    );
};

export default Groups;
