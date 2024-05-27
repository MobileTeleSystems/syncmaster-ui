import { TextField } from "react-admin";

const PostgresTransferParamsShow = ({
    source,
    label,
}: {
    source: string;
    label: string;
}) => {
    return <TextField source={source} label={label} />;
};

export default PostgresTransferParamsShow;
