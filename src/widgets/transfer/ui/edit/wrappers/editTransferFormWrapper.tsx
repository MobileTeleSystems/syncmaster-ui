import Warning from "@shared/ui/warning";
import OracleTransferEditForm from "@widgets/transfer/ui/edit/oracleTransferEditForm";
import PostgresTransferEditForm from "@widgets/transfer/ui/edit/postgresTransferEditForm";

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
            <PostgresTransferEditForm
                source={source}
                label={label}
                helperText={helperText}
            />
        );
    }
    if (transferType === "oracle") {
        return (
            <OracleTransferEditForm
                source={source}
                label={label}
                helperText={helperText}
            />
        );
    }
    return <Warning message={"Unknown connection type"} />;
};

export default EditTransferFormWrapper;
