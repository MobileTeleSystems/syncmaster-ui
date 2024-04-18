import { DataProvider } from "react-admin";
import { apiUrl } from "src/app/api/dataProviderCombiner";
import { getHeader } from "src/app/api/utils";

const groupsDataProvider: DataProvider = {
    getList: (resource, params) => {
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