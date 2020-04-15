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
                    },
                    {
                        "data": "id",
                        "render": function (data) {
                            return '<a class="btn btn-info btn-sm" href=../createResturant.html?id=' + data + '>' + 'Edit' + '</a>';
                        }
                    },
                    {
                        "data": "id",
                        "render": function (data) {
                            return '<button name="delete" class="btn btn-info btn-sm" id=' + data + '>' + 'Delete' + '</button>';
                        }
                    }
                ]
            });

            setupDelete();
        });
   
});

function setupDelete() {
    let deletes = document.getElementsByName("delete");
    for (var i = 0; i < deletes.length; i++) {
        deletes[i].addEventListener('click', function () {
            let q = confirm('Are you shure?');
            if (q) {
                $.ajax({
                    type: "DELETE",
                    url: "http://kirekocev.no-ip.biz/api/Restaurants/" + this.id
                })
                    .then(_ => window.location.reload());
            }
        });
    }
}