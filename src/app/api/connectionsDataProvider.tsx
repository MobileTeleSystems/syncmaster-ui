import { DataProvider, HttpError } from "react-admin";
import { ConnectionData } from "src/app/types";
import { apiUrl } from "src/app/api/dataProviderCombiner";
import { getHeader } from "src/app/api/utils";

const connectionsDataProvider: DataProvider = {
    getList: async (resource, params) => {
        const groupId = params.meta.currentGroupId;
        return new Promise((resolve, reject) => {
            // @ts-ignore
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
                    const processedJSON = json.items.map(
                        (row: ConnectionData) => ({
                            ...row,
                            connection_data: {
                                ...row.connection_data,
                                additional_params: JSON.stringify(
                                    row.connection_data.additional_params,
                                ),
                            },
                        }),
                    );

                    return resolve({
                        data: processedJSON,
                        total: json.meta.total,
                    });
                });
        });
    },
    getOne: async (resource, params) => {
        const connectionId = params.id;
        return new Promise((resolve, reject) => {
            // @ts-ignore
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
                    const processedJSON = {
                        ...json,
                        connection_data: {
                            ...json.connection_data,
                            additional_params: JSON.stringify(
                                json.connection_data.additional_params,
                            ),
                        },
                    };

                    return resolve({
                        data: processedJSON,
                    });
                });
        });
    },
};

export default connectionsDataProvider;
