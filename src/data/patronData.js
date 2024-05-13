const _apiUrl = "/api/patron"


export const getPatrons = () => {
    return fetch(_apiUrl).then((res) => res.json());
}

export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export const editPatron = (id, updatePatron) => {
    const updateOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatePatron),
    };
    return fetch(`${_apiUrl}/${id}`, updateOptions);
}

export const deactivatePatron = (patron, id) => {
    const deactivateOptions = {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(patron),
    };
    return fetch(`${_apiUrl}/${id}/deactivate`, deactivateOptions)
}