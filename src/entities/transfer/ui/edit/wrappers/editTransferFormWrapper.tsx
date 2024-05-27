import Warning from "@shared/ui/warning";
import OracleTransferParamsEditForm from "@entities/transfer/ui/edit/oracleTransferParamsEditForm";
import PostgresTransferParamsEditForm from "@entities/transfer/ui/edit/postgresTransferParamsEditForm";

const EditTransferFormWrapper = ({
    transferType,
    source,
    label,
    helperText,
}: {
    transferType: string;
    source: string;
    label: string;
    helperText: string;
}) => {
    if (transferType === "postgres") {
        return (
            <PostgresTransferParamsEditForm
                source={source}
                label={label}
                helperText={helperText}
            />
        );
    }
    if (transferType === "oracle") {
        return (
            <OracleTransferParamsEditForm
                source={source}
                label={label}
                helperText={helperText}
            />
        );
    }
    return <Warning message={"Connection not selected or unknown connection type"} />;
};

export default EditTransferFormWrapper;
