//let promise = $.get("http://kirekocev.no-ip.biz/api/Restaurant");
//promise.then(
//    data => console.log('success', data),
//    error => console.log('error', error)
//);

let dataToPost = {
    name: 'Post 1',
    location: 'New App',
    cuisine: 1
};

let promise = $.ajax({
    headers: {
        'Content-Type': 'application/json'
    },
    type: "POST",
    url: "http://kirekocev.no-ip.biz/api/Restaurants",
    data: JSON.stringify(dataToPost),
    dataType: "json"
});
promise.then(
    data => console.log('success', data),
    error => console.log('error', error)
);
