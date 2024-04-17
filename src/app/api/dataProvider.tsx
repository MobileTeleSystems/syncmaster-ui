import { DataProvider, HttpError } from "react-admin";
import { ConnectionData } from "../types";

const apiUrl = "http://localhost:8000";

const getHeader = () => {
    const myHeaders = new Headers();
    const token: string | null = localStorage.getItem("token");
    if (token) myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
    };

    return requestOptions;
};

const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const currentGroupId = params.meta.currentGroupId;
        return new Promise((resolve, reject) => {
            // @ts-ignore
            return fetch(
                `${apiUrl}/v1/${resource}?group_id=${currentGroupId}`,
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
    getOne: (resource, params) => {
        const currentConnectionId = params.id;
        return new Promise((resolve, reject) => {
            // @ts-ignore
            return fetch(
                `${apiUrl}/v1/${resource}/${currentConnectionId}`,
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

    getGroupList: async () => {
        const myHeaders = new Headers();
        const token: string | null = localStorage.getItem("token");
        if (token) myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
        // @ts-ignore
        return fetch(`${apiUrl}/v1/groups`, requestOptions)
            .then((res) => res.json())
            .then((json) => json.items)
            .catch((e) => console.log(e));
    },
};

export default dataProvider;
