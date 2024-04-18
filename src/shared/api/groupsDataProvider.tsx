import { DataProvider } from "react-admin";
import { apiUrl } from "src/shared/api/dataProviderCombiner";
import { getHeader } from "src/shared/api/utils";

const groupsDataProvider: DataProvider = {
    getList: async () => {
        return fetch(`${apiUrl}/v1/groups`, getHeader())
            .then((res) => res.json())
            .then((json) => ({
                data: json.items,
                total: json.meta.total,
            }))
            .catch((e) => console.log(e));
    },
};

export default groupsDataProvider;
