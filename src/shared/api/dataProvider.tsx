import { DataProvider, HttpError } from "react-admin";
import { getHeaders } from "@shared/api/utils";
import type { ConnectionTypes } from "@shared/api/types";
import { createSearchParams } from "react-router-dom";

const apiUrl = "http://localhost:8000";
const apiVersion = "v1";

const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const url = new URL(apiUrl + "/" + apiVersion + "/" + resource);

        for (const k in params.meta) {
            url.searchParams.append(k, params.meta[k]);
        }

        url.searchParams.append("page", params.pagination.page.toString());
        url.searchParams.append(
            "page_size",
            params.pagination.perPage.toString(),
        );

        return new Promise((resolve, reject) => {
            return fetch(url.toString(), {
                headers: getHeaders(),
                method: "GET",
            })
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
                    if (status < 200 || status >= 400) {
                        return reject(
                            new HttpError(
                                (json && json.message) || body,
                                status,
                                json,
                            ),
                        );
                    }
                    return resolve({
                        data: json.items,
                        total: json.meta.total,
                        pageInfo: {
                            hasNextPage: json.meta.has_next,
                            hasPreviousPage: json.meta.has_previous,
                        },
                    });
                });
        });
    },
    getOne: (resource, params) => {
        const id = params.id;
        return new Promise((resolve, reject) => {
            return fetch(`${apiUrl}/${apiVersion}/${resource}/${id}`, {
                headers: getHeaders(),
                method: "GET",
            })
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
                    if (status < 200 || status >= 400) {
                        return reject(
                            new HttpError(
                                (json && json.message) || body,
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
    delete: (resource, params) => {
        const id = params.id;
        return new Promise((resolve, reject) => {
            return fetch(`${apiUrl}/${apiVersion}/${resource}/${id}`, {
                headers: getHeaders(),
                method: "DELETE",
            })
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
                    if (status < 200 || status >= 400) {
                        return reject(
                            new HttpError(
                                (json && json.message) || body,
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
    update: (resource, params) => {
        return new Promise((resolve, reject) => {
            return fetch(`${apiUrl}/${apiVersion}/${resource}/${params.id}`, {
                headers: getHeaders(),
                method: "PATCH",
                body: JSON.stringify({
                    name: params.data.name,
                    description: params.data.description,
                    connection_data: {
                        ...params.data.connection_data,
                    },
                    auth_data: {
                        ...params.data.auth_data,
                        type: params.data.connection_data.type,
                        password: params.data.auth_data.password
                            ? params.data.auth_data.password
                            : null,
                    },
                }),
            })
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
                    if (status < 200 || status >= 400) {
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
    create: (resource, params) => {
        return new Promise((resolve, reject) => {
            return fetch(`${apiUrl}/${apiVersion}/${resource}`, {
                headers: getHeaders(),
                method: "POST",
                body: JSON.stringify({
                    group_id: params.data.group,
                    name: params.data.name,
                    description: params.data.description,
                    connection_data: {
                        ...params.data.connection_data,
                    },
                    auth_data: {
                        ...params.data.auth_data,
                        password: params.data.auth_data.password
                            ? params.data.auth_data.password
                            : null,
                        type: params.data.connection_data.type,
                    },
                }),
            })
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
                    if (status < 200 || status >= 400) {
                        return reject(
                            new HttpError(
                                (json && json.message) || body,
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
    getConnectionTypes: () => {
        return new Promise((resolve, reject) => {
            const url = new URL(
                apiUrl + "/" + apiVersion + "/connections/known_types",
            );
            return fetch(url.toString(), {
                headers: getHeaders(),
                method: "GET",
            })
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
                    if (status < 200 || status >= 400) {
                        return reject(
                            new HttpError(
                                (json && json.message) || body,
                                status,
                                json,
                            ),
                        );
                    }
                    const choices: ConnectionTypes = [];

                    for (const k in json) {
                        choices.push({ id: json[k], name: json[k] });
                    }
                    return resolve(choices);
                });
        });
    },
};

export default dataProvider;
