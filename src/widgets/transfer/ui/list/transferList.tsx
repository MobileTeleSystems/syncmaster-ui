import BaseList from "@entities/list/baseList";
import TransferListElement from "@widgets/transfer/ui/list/listElement";

const TransferList = () => {
    return (
        <BaseList
            type={"transfers"}
            title={"Transfers"}
            element={<TransferListElement />}
        />
    );
};
export default TransferList;
