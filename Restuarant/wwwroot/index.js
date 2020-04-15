$(function () {
    let cuisines = ["Unknown", "Italian", "Franch", "Mexican"];
    $.ajax("http://kirekocev.no-ip.biz/api/Restaurants", { method: "get" })
        .then(function (response) {
            $("#resData").dataTable({
                data: response,
                columns: [
                    { "data": "name" },
                    { "data": "location" },
                    {
                        "data": "cuisine",
                        "render": function (data) {
                            return cuisines[data];
                        }
                    }
                ]
            });
        });
});