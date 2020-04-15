$(function () {

    let form = document.getElementById("createResturant"),
        name = form.elements["restaurantName"],
        cuisine = form.elements["ddlCuisine"],
        locationRes = form.elements["location"],
        url = "http://kirekocev.no-ip.biz/api/Restaurants",
        id = parseInt(document.location.search.replace('?id=', ''));

    form.addEventListener('submit', event => {

        if (parseInt(cuisine.value) === 0) {
            let cuisineError = $("#cuisineError");
            cuisineError.text("Invalid Selection");
            cuisine.style.borderColor = "red";
            cuisine.focus();
            event.preventDefault();
            return;
        }

        let dataToPost = {
            name: name.value,
            location: locationRes.value,
            cuisine: parseInt(cuisine.value)
        };

        let method = "POST";
        if (id) {
            method = "PUT";
            url += `/${id}`;
        }

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

    $.get(url +'/cusine')
        .then(function (data) {
            let select = document.getElementById("ddlCuisine");
            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.value = data[i].value;
                option.textContent = data[i].name;
                select.appendChild(option);
            }
        });

    if (id) {
        $.get(url + `/${id}`)
            .then(function (response) {
                name.value = response.name;
                locationRes.value = response.location;
                cuisine.value = response.cuisine;
            });
    }
});

function sucess() {
    let q = confirm('Do you want to see all resturants?');
    if (q) {
        window.location = '../index.html';
    }
}