import { combineDataProviders } from "react-admin";
import connectionsDataProvider from "src/app/api/connectionsDataProvider";
import groupsDataProvider from "src/app/api/groupsDataProvider";

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