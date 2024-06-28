const url = "https://t-pay.iqfit.app/subscribe/list-test";

const parseResponse = (res) => {
    return res.ok ? res.json() : Promise.reject({
        error: res.status
    })
}

const getData = () => {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    })
        .then(parseResponse)
}

export { getData }