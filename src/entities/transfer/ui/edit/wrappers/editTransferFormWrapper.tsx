import Warning from "@shared/ui/warning";
import OracleTransferParamsEditForm from "@entities/transfer/ui/edit/oracleTransferParamsEditForm";
import PostgresTransferParamsEditForm from "@entities/transfer/ui/edit/postgresTransferParamsEditForm";

const EditTransferFormWrapper = ({
    transferType,
    sourceTargetType,
}: {
    transferType: string;
    sourceTargetType: "source" | "target";
}) => {
    let source = "";
    let label = "";
    if (sourceTargetType == "source") {
        source = "source_params.table_name";
        label = "Source (schema.table)";
    }

    if (sourceTargetType == "target") {
        source = "target_params.table_name";
        label = "Target (schema.table)";
    }
    if (transferType === "postgres") {
        return <PostgresTransferParamsEditForm source={source} label={label} />;
    }
    if (transferType === "oracle") {
        return <OracleTransferParamsEditForm source={source} label={label} />;
    }
    return (
        <Warning
            message={"Connection not selected or unknown connection type"}
        />
    );
};

export default EditTransferFormWrapper;
