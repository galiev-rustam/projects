
function getApi() {


    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${selected_country}&uk&appid=0b05408df1763a2fd4bd08d57f3baee5`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.package-name').textContent = data.name + ', ' + data.sys['country'];
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
            //https://openweathermap.org/img/wn/02d@2x.png
            document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.time').innerHTML = '';
            document.querySelector('.w-max').innerHTML = 'Минимальная температура: ' + Math.round(data.main.temp_min - 273) + '&deg;';
            document.querySelector('.w-min').innerHTML = 'Максимальная температура: ' + Math.round(data.main.temp_max - 273) + '&deg;';
            document.querySelector('.sunset').innerHTML = 'Закат: ' + GetDate(data.sys.sunset);
            document.querySelector('.sunrise').innerHTML = 'Рассвет: ' + GetDate(data.sys.sunrise);

        })
        .catch(function () {
            // catch any errors

        });

}

let selected_country = document.querySelector('.select_countries').value;
getApi();

document.querySelector('.b_city_info').onclick = () => {
    selected_country = document.querySelector('#city_info').value;
    getApi();
}


function GetDate(unix_timestamp) {

    // unix_timestamp = 1584756909;

    let date = new Date(unix_timestamp * 1000);
    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = "0" + date.getMinutes();
    } else {
        minutes = date.getMinutes();
    }

    let hours = date.getHours();
    //console.log(hours);
    //console.log(minutes);

    return hours + ':' + minutes;
}

document.querySelector('.select_countries').onchange = () => {
    selected_country = document.querySelector('.select_countries').value;

    getApi();
}