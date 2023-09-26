let server = "http://54.180.150.131/"
    

// @ts-ignore
function servercomm(dir, jsonBody, okfunction=()=>{}, cancelfunction=()=>{}, errorfunction=()=>{}){
    let resultData = '';
    fetch(server + dir, {
        method: 'POST', // 또는 다른 HTTP 메서드를 선택할 수 있습니다.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonBody)
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            cancelfunction()
        }
    }).then(data => {
        if (data){
            console.log(data.status);
            resultData = data
            okfunction();
            return data
        }
    })
    .catch(error => {
        errorfunction()
        return 'ERROR'
    });
    return resultData
}