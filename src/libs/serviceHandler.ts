interface HttpResponse<T> extends Response {
    parsedBody?: T;
}

const headers: Headers = new Headers();
headers.append('Content-Type', 'application/json; charset=utf-8');
headers.append('Authorization', 'Bearer ' + localStorage.getItem('token') || '')

export async function http<T>(
    request: RequestInfo
): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
        request
    );
    response.parsedBody = await response.json();
    return response;
}

export async function get<T>(
    path: string,
    args: RequestInit = { method: "get", headers}
): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
};

export async function post<T>(
    path: string,
    body: any,
    args: RequestInit = { method: "post", body: JSON.stringify(body), headers}
): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
};

export async function put<T>(
    path: string,
    body: any,
    args: RequestInit = { method: "put", body: JSON.stringify(body),  headers}
): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
};