import BaseConnectionShow from "@entities/connection/show/baseShow";

import { ConnectionData } from "@widgets/connection/types";

const HDFSConnectionShow = ({
    data,
    editable = true,
    showTitle = true,
}: {
    data: ConnectionData;
    editable?: boolean;
    showTitle?: boolean;
}) => {
    return (
        <BaseConnectionShow
            data={data}
            connectionColumns={[
                {
                    source: "connection_data.cluster",
                    label: "Cluster",
                },
            ]}
            editable={editable}
            showTitle={showTitle}
        />
    );
};

export default HDFSConnectionShow;
