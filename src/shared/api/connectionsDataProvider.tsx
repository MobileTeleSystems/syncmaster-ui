import { DataProvider, HttpError } from "react-admin";
import { apiUrl } from "src/shared/api/dataProviderCombiner";
import { getHeader } from "src/shared/api/utils";

const connectionsDataProvider: DataProvider = {
    getList: (resource, params) => {
        const groupId = params.meta.groupId;
        return new Promise((resolve, reject) => {
            return fetch(
                `${apiUrl}/v1/${resource}?group_id=${groupId}`,
                getHeader(),
            )
                .then((response) =>
                    response.text().then((text) => ({
                        status: response.status,
                        statusText: response.statusText,
                        headers: response.headers,
                        body: text,
                    })),
                )
                .then(({ status, statusText, headers, body }) => {
                    let json;
                    try {
                        json = JSON.parse(body);
                    } catch (e) {
                        console.error(e);
                    }
                    if (status < 200 || status >= 300) {
                        return reject(
                            new HttpError(
                                (json && json.message) || statusText,
                                status,
                                json,
                            ),
                        );
                    }

                    return resolve({
                        data: json.items,
                        total: json.meta.total,
                    });
                });
        });
    },
    getOne: (resource, params) => {
        const connectionId = params.id;
        return new Promise((resolve, reject) => {
            return fetch(
                `${apiUrl}/v1/${resource}/${connectionId}`,
                getHeader(),
            )
                .then((response) =>
                    response.text().then((text) => ({
                        status: response.status,
                        statusText: response.statusText,
                        headers: response.headers,
                        body: text,
                    })),
                )
                .then(({ status, statusText, headers, body }) => {
                    let json;
                    try {
                        json = JSON.parse(body);
                    } catch (e) {
                        console.error(e);
                    }
                    if (status < 200 || status >= 300) {
                        return reject(
                            new HttpError(
                                (json && json.message) || statusText,
                                status,
                                json,
                            ),
                        );
                    }

                    return resolve({
                        data: json,
                    });
                });
        });
    },
};

export default connectionsDataProvider;
