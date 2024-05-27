import OracleTransferParamsShow from "@entities/transfer/ui/show/oracleTransferParamsShow";
import PostgresTransferParamsShow from "@entities/transfer/ui/show/postgresTransferParamsShow";
import Warning from "@shared/ui/warning";

const ShowTransferParamsWrapper = ({
    transferType,
    source,
    label,
}: {
    transferType: string;
    source: string;
    label: string;
}) => {
    if (transferType === "postgres") {
        return <PostgresTransferParamsShow source={source} label={label} />;
    }
    if (transferType === "oracle") {
        return <OracleTransferParamsShow source={source} label={label} />;
    }
    return (
        <Warning
            message={"Connection not selected or unknown connection type"}
        />
    );
};

export default ShowTransferParamsWrapper;
