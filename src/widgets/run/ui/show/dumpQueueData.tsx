import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import { Card } from "@mui/material";
import { useEffect } from "react";
import {
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
} from "react-admin";

const DumpQueueData = ({ data }) => {
    const [, setCanChangeCurrentGroup] = useLocalStoreChangeGroup();
    useEffect(() => {
        setCanChangeCurrentGroup(true);
    }, []);
    return (
        <RecordContextProvider value={data}>
            <div style={{ paddingTop: "1em" }}>
                <Card>
                    <SimpleShowLayout>
                        // TODO: add more fields on the backend ?
                        <TextField source="queue_id" label={"Queue id"} />
                    </SimpleShowLayout>
                </Card>
            </div>
        </RecordContextProvider>
    );
};

export default DumpQueueData;
