let form = document.getElementById("createResturant");
let name = form.elements["restaurantName"];
let cuisine = form.elements["ddlCuisine"];
let locationRes = form.elements["location"];

form.addEventListener('submit', event => {

    let dataToPost = {
        name: name.value,
        location: locationRes.value,
        cuisine: parseInt(cuisine.value)
    };

    let method = "POST",
        url = "http://kirekocev.no-ip.biz/api/Restaurants";

    let promiseCreate = $.ajax({
        headers: {
            'Content-Type': 'application/json'
        },
        type: method,
        url: url,
        data: JSON.stringify(dataToPost),
        dataType: "json"
    });

    promiseCreate.then(
        _ => sucess(),
        error => console.log(error)
    );

    event.preventDefault();
});

function sucess() {
    let q = confirm('Do you want to see all resturants?');
    if (q) {
        window.location = '../index.html';
    }
}