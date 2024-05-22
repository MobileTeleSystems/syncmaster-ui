import Warning from "@shared/ui/warning";
import OracleTransferEditForm from "@widgets/transfer/ui/edit/oracleTransferEditForm";
import PostgresTransferEditForm from "@widgets/transfer/ui/edit/postgresTransferEditForm";

const EditTransferFormWrapper = ({ transferType, source, label }: { transferType: string, source: string, label: string }) => {
        if (transferType === "postgres") {
        return <PostgresTransferEditForm source={source} label={label}/>;
    }
    if (transferType === "oracle") {
        return <OracleTransferEditForm source={source} label={label}/>;
    }
    return <Warning message={"Unknown connection type"} />;
};

export default EditTransferFormWrapper;
