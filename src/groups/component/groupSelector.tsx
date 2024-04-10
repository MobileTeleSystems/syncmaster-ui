import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import useGetGroupList from "../../hooks/useGetGroupList";


const Groups = () => {
    const [selectorValue, setSelectorValue] = useState('');
    const {currentGroupList, setCurrentGroup} = useGetGroupList()

    // @ts-ignore
    const handleChange = (event: SelectChangeEvent, child) => {
        setCurrentGroup(child.props.children)
        setSelectorValue(event.target.value as string)
    };

    return (
        <>
            <FormControl style={{minWidth: 150}}>
                <InputLabel id="demo-simple-select-label">Select group</InputLabel>
                <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Groups"
                        onChange={handleChange}
                        value={selectorValue}
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