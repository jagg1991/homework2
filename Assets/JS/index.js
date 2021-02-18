

function getApi() {
    //url for GitHub
    var requestApi = 'https://api.github.com/users/jagg1991/repos?type,page,per_page,sort'

    fetch(requestApi)
        .then(function (response) {
            return response.json();
        })
        //getting data from GitHub 
        .then(function (data) {
            console.log(data)
            //for loop to get data for respitories
            for (i = 0; i < data.length; i++) {
                console.log(data[i].html_url);
                var li = $('<li>')
                button = $('<button>').addClass('results btn btn-secondary').attr('url', data[i].html_url).text(data[i].name)
                // li.append(button)
                $('#resp').append(li);
                li.append(button)




            }
            //adding an onclick function for buttons created 
            $("#resp").on("click", "button", function () {
                window.location = ($(this).attr("url"));
            });

        })
}

getApi();