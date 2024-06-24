import type { ConnectionTypes, UserRoles } from "@shared/api/types";
import { getAuthHeaders, getPOSTHeaders } from "@shared/api/utils";
import { DataProvider, HttpError } from "react-admin";
import { getApiUrl } from "@shared/api/utils";

const apiVersion = "v1";

// @ts-expect-error  response type
const parseResponse = (response) =>
    response.text().then((text: string) => ({
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        body: text,
    }));

const parseJSON = (
    status: number,
    statusText: string,
    headers: object,
    body: string,
    // @ts-expect-error error type
    reject: (error) => void,
) => {
    let json;
    try {
        json = JSON.parse(body);
    } catch (e) {
        console.error(e);
    }
    if (status < 200 || status >= 400) {
        return reject(
            new HttpError((json && json.message) || body, status, json),
        );
    }
    return json;
};

// @ts-expect-error must implement other methods
const dataProvider: DataProvider = {
    getList: (resource, params) => {
        // TODO: rafactor later
        const base = window.location.toString();
        const url = new URL(
            getApiUrl() + "/" + apiVersion + "/" + resource,
            base,
        );

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
                headers: getAuthHeaders(),
                method: "GET",
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
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
            return fetch(`${getApiUrl()}/${apiVersion}/${resource}/${id}`, {
                headers: getAuthHeaders(),
                method: "GET",
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
                    return resolve({
                        data: json,
                    });
                });
        });
    },
    delete: (resource, params) => {
        const id = params.id;
        let url: string = `${getApiUrl()}/${apiVersion}/${resource}/${id}`;
        if (resource == "users") {
            url = `${getApiUrl()}/${apiVersion}/groups/${params.meta.group_id}/${resource}/${params.id}`;
        }
        return new Promise((resolve, reject) => {
            return fetch(url, {
                headers: getPOSTHeaders(),
                method: "DELETE",
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );

                    return resolve({
                        data: json,
                    });
                });
        });
    },
    update: (resource, params) => {
        // rework the body processing logic for different resources
        let bodyObject: object;
        let url: string = `${getApiUrl()}/${apiVersion}/${resource}/${params.id}`;
        // TODO: break down into individual providers DOP-16610
        switch (resource) {
            case "connections": {
                bodyObject = {
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
                };
                break;
            }
            case "queues": {
                bodyObject = { description: params.data.description };
                break;
            }
            case "transfers": {
                bodyObject = {
                    ...params.data,
                };
                break;
            }
            case "groups": {
                bodyObject = {
                    ...params.data,
                };
                break;
            }
            case "users": {
                bodyObject = {
                    role: params.data.role,
                };
                url = `${getApiUrl()}/${apiVersion}/groups/${params.data.group_id}/${resource}/${params.data.user_id}`;
                break;
            }
            default: {
                bodyObject = { ...params.data };
                break;
            }
        }

        return new Promise((resolve, reject) => {
            return fetch(url, {
                headers: getPOSTHeaders(),
                method: "PATCH",
                body: JSON.stringify(bodyObject),
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
                    if (resource == "users") {
                        return resolve({
                            data: {
                                ...json,
                                id: params.data.user_id,
                                group_id: params.data.group_id,
                            },
                        });
                    }
                    return resolve({
                        data: json,
                    });
                });
        });
    },
    create: (resource, params) => {
        // rework the body processing logic for different resources
        let bodyObject: object;
        let url = `${getApiUrl()}/${apiVersion}/${resource}`;
        // TODO: break down into individual providers DOP-16610
        switch (resource) {
            case "connections": {
                bodyObject = {
                    group_id: params.data.group_id,
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
                };
                break;
            }
            case "queues": {
                bodyObject = {
                    name: params.data.name,
                    group_id: params.data.group_id,
                    description: params.data.description,
                };
                break;
            }
            case "transfers": {
                bodyObject = {
                    ...params.data,
                };
                break;
            }
            case "users": {
                bodyObject = {
                    role: params.data.role,
                };
                url = `${getApiUrl()}/${apiVersion}/groups/${params.data.group_id}/${resource}/${params.data.user_id}`;
                break;
            }
            case "groups": {
                bodyObject = {
                    ...params.data,
                };
                break;
            }

            default: {
                bodyObject = {};
                break;
            }
        }

        return new Promise((resolve, reject) => {
            return fetch(url, {
                headers: getPOSTHeaders(),
                method: "POST",
                body: JSON.stringify(bodyObject),
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
                    if (resource == "users") {
                        return resolve({
                            data: { ...json, id: params.data.group_id },
                        });
                    }
                    return resolve({
                        data: json,
                    });
                });
        });
    },
    getConnectionTypes: () => {
        return new Promise((resolve, reject) => {
            // TODO: rafactor later
            const base = window.location.toString();
            const url = new URL(
                getApiUrl() + "/" + apiVersion + "/connections/known_types",
                base,
            );
            return fetch(url.toString(), {
                headers: getAuthHeaders(),
                method: "GET",
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
                    const choices: ConnectionTypes = [];

                    for (const k in json) {
                        choices.push({ id: json[k], name: json[k] });
                    }
                    return resolve(choices);
                });
        });
    },
    stopRun: (id: string) => {
        return new Promise((resolve, reject) => {
            // TODO: rafactor later
            const base = window.location.toString();
            const url = new URL(
                getApiUrl() + "/" + apiVersion + "/runs/" + id + "/stop",
                base,
            );
            return fetch(url.toString(), {
                headers: getAuthHeaders(),
                method: "POST",
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
                    return resolve(json);
                });
        });
    },
    runTransfer: (id: string) => {
        return new Promise((resolve, reject) => {
            // TODO: rafactor later
            const base = window.location.toString();
            const url = new URL(getApiUrl() + "/" + apiVersion + "/runs", base);
            return fetch(url.toString(), {
                headers: getPOSTHeaders(),
                method: "POST",
                body: JSON.stringify({ transfer_id: id }),
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
                    return resolve(json);
                });
        });
    },
    updateUserRole: (groupId: number, userId: number, role: UserRoles) => {
        return new Promise((resolve, reject) => {
            // TODO: rafactor later
            const base = window.location.toString();
            const url = new URL(
                getApiUrl() +
                    "/" +
                    apiVersion +
                    "/groups/" +
                    groupId +
                    "/users/" +
                    userId,
                base,
            );
            return fetch(url.toString(), {
                headers: getPOSTHeaders(),
                method: "POST",
                body: JSON.stringify({ role: role }),
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
                    return resolve(json);
                });
        });
    },
    getGroupUsers: (
        groupId: number,
        params: { pagination: { page: number; perPage: number } },
    ) => {
        return new Promise((resolve, reject) => {
            // TODO: rafactor later
            const base = window.location.toString();
            const url = new URL(
                getApiUrl() +
                    "/" +
                    apiVersion +
                    "/groups/" +
                    groupId +
                    "/users",
                base,
            );

            url.searchParams.append("page", params.pagination.page.toString());
            url.searchParams.append(
                "page_size",
                params.pagination.perPage.toString(),
            );

            return fetch(url.toString(), {
                headers: getAuthHeaders(),
                method: "GET",
            })
                .then(parseResponse)
                .then(({ status, statusText, headers, body }) => {
                    const json = parseJSON(
                        status,
                        statusText,
                        headers,
                        body,
                        reject,
                    );
                    return resolve(json);
                });
        });
    },
};
export default dataProvider;
