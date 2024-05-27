import { TextField } from "react-admin";

const OracleTransferParamsShow = ({
    source,
    label,
}: {
    source: string;
    label: string;
}) => {
    return <TextField source={source} label={label} />;
};

export default OracleTransferParamsShow;
