let promise = $.get("http://kirekocev.no-ip.biz/api/Restaurants");
promise.then(
    data => console.log('success', data),
    error => console.log('error', error)
);

