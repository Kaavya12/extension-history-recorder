

chrome.history.onVisited.addListener(result => {
    if (result.url.includes("www.youtube.com")){
        console.log(result.url)
        console.log(new Date())
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "info": new Date()
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://listener-for-me.glitch.me/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
            }
})



/*
fetch("https://api.kvstore.io/collections", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "kvstoreio_api_key": "f32e5becc81c4adc7f6a06c101c144e709724e7cf024abb19e04588c80129d81"
            },
            "data-raw": '{"collection" : "new_collection"}'
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        }); 

*/