import type { ConnectionTypes, UserRoles } from "@shared/api/types";
import { getAuthHeaders, getPOSTHeaders } from "@shared/api/utils";
import { DataProvider, HttpError } from "react-admin";

const apiUrl = "http://localhost:8000";
const apiVersion = "v1";

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
    reject: () => any,
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
            return fetch(`${apiUrl}/${apiVersion}/${resource}/${id}`, {
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
        let url: string = `${apiUrl}/${apiVersion}/${resource}/${id}`;
        if (resource == "users") {
            url = `${apiUrl}/${apiVersion}/groups/${params.meta.group}/${resource}/${params.id}`;
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
        let bodyObject: any;
        let url: string = `${apiUrl}/${apiVersion}/${resource}/${params.id}`;
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
                url = `${apiUrl}/${apiVersion}/groups/${params.data.currentUserGroup}/${resource}/${params.data.userId}`;
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
                                id: params.data.userId,
                                group: params.data.currentUserGroup,
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
        let bodyObject: any;
        let url = `${apiUrl}/${apiVersion}/${resource}`;
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
                url = `${apiUrl}/${apiVersion}/groups/${params.data.group_id}/${resource}/${params.data.user_id}`;
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
            const url = new URL(
                apiUrl + "/" + apiVersion + "/connections/known_types",
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
            const url = new URL(
                apiUrl + "/" + apiVersion + "/runs/" + id + "/stop",
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
            const url = new URL(apiUrl + "/" + apiVersion + "/runs");
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
            const url = new URL(
                apiUrl +
                    "/" +
                    apiVersion +
                    "/groups/" +
                    groupId +
                    "/users/" +
                    userId,
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
    getGroupUsers: (groupId: number, params) => {
        return new Promise((resolve, reject) => {
            const url = new URL(
                apiUrl + "/" + apiVersion + "/groups/" + groupId + "/users/",
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
