import TitleElement from "@entities/titleElement";
import useLocalStoreChangeGroup from "@hooks/useLocalStoreChangeGroup";
import useLocalStoreCurrentMenuGroup from "@hooks/useLocalStoreCurrentMenuGroup";
import { Card } from "@mui/material";
import LinkedField from "@shared/linkedField";
import Error from "@shared/ui/error";
import UserList from "@widgets/users/ui/list/userList";
import { useEffect } from "react";
import {
    EditButton,
    Loading,
    RecordContextProvider,
    SimpleShowLayout,
    TextField,
    Title,
    useGetOne,
} from "react-admin";
import { useParams } from "react-router";

const GroupShow = () => {
    const [, setCanChangeCurrentGroup] = useLocalStoreChangeGroup();
    useEffect(() => {
        setCanChangeCurrentGroup(true);
    }, []);
    const { id } = useParams();
    const [, setCurrentUserGroup] = useLocalStoreCurrentMenuGroup();
    useEffect(() => {
        setCurrentUserGroup(id);
    }, [id]);
    const { data, isLoading, error } = useGetOne("groups", { id });

    if (id === undefined) return <Error message={"Undefined id"} />;
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <RecordContextProvider value={data}>
            <div style={{ paddingTop: "1em" }}>
                <Title title={<TitleElement title={`Group ${data.name}`} />} />
                <Card>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="description" />
                        <LinkedField
                            id={data.owner_id}
                            label="Owner"
                            resource={"users"}
                            field={"username"}
                        />
                        {/* TODO: Replace with the Autocomplete component when filtering is implemented on the backend */}
                        <UserList group={id} />
                    </SimpleShowLayout>
                </Card>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        paddingTop: "0.5em",
                        paddingBottom: "0.5em",
                    }}
                >
                    <EditButton />
                </div>
            </div>
        </RecordContextProvider>
    );
};

export default GroupShow;
