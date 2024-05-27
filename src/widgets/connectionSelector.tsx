import Error from "@shared/ui/error";
import { useState } from "react";
import { Loading, required, SelectInput, useGetList } from "react-admin";

const ConnectionSelector = ({
    id,
    name,
    resource,
    setData,
    label,
}: {
    id: number;
    name: string;
    resource: string;
    setData?: ({ id, label }: { id: number; label: string }) => {};
    label: string;
}) => {
    // TODO: since the backend sends a list page by page and not all elements at once,
    //  if there are a large number of elements it may lose records
    const { data, isLoading, error } = useGetList(resource, {
        meta: { group_id: id, page_size: 200 },
    });
    const [currentConnection, setCurrentConnection] = useState();
    if (isLoading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <SelectInput
            name={name}
            label={label}
            source={name}
            choices={data}
            validate={required()}
            value={currentConnection}
            onChange={(event) => {
                if (setData && data) {
                    const label = data.filter(
                        (connection) => connection.id === event.target.value,
                    );
                    setData({
                        id: event.target.value,
                        label: label[0].connection_data.type,
                    });
                }
                setCurrentConnection(event.target.value);
            }}
        />
    );
};

export default ConnectionSelector;
