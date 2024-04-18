import { DataProvider, HttpError } from "react-admin";
import { getHeader } from "src/shared/api/utils";

const apiUrl = "http://localhost:8000";
const apiVersion = "v1";

const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const url = new URL(apiUrl + "/" + apiVersion + "/" + resource);

        for (const k in params.meta) {
            url.searchParams.append(k, params.meta[k]);
        }

        url.searchParams.append("page", params.pagination.page.toString());
        url.searchParams.append("page_size", params.pagination.perPage.toString());

        return new Promise((resolve, reject) => {
            return fetch(url.toString(), getHeader())
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

export default dataProvider;
