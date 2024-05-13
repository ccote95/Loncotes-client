const _apiUrl = "/api/checkouts"



export const getCheckouts = () => {
return fetch(_apiUrl).then((r) => r.json());
}

export const getOverDueCheckouts = () => {
    return fetch(`${_apiUrl}/overdue`).then((r)=> r.json());
}

export const returnACheckout = (id) => {
    const returnOptions= {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },

    };
    return fetch(`${_apiUrl}/${id}`, returnOptions)
}

export const submitNewCheckout = (newCheckout) => {
    const postOptions ={
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newCheckout)
    }
    return fetch(_apiUrl, postOptions).then((r)=>r.json())
}