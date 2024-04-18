import { combineDataProviders } from "react-admin";
import connectionsDataProvider from "src/shared/api/connectionsDataProvider";
import groupsDataProvider from "src/shared/api/groupsDataProvider";

export const apiUrl = "http://localhost:8000";

const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
        case 'connections':
            return connectionsDataProvider;
        case 'groups':
            return groupsDataProvider;
        default:
            throw new Error(`Unknown resource: ${resource}`);
    }
});

export default dataProvider