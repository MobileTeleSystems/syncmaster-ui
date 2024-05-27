import BaseList from "@entities/base/list/baseList";
import TransferListElement from "@entities/transfer/ui/list/listElement";

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
