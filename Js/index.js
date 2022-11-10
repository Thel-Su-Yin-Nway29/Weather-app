const api_key = "7cecbd2bf706d74ee1e1f5842c5cc732";
const base_url = "https://api.openweathermap.org/data/2.5";
const img_path = "https://openweathermap.org/img/wn";

const getDate = (date) => {
    const d = new Date(date);

    return d.toLocaleDateString("en-mm", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};
const getData = async () => {
    const res = await fetch(
        `${base_url}/weather?q=myeik&units=metric&appid=${api_key}`,
        {
            method: "GET",
        }
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res.ok) {
        const { name, main, weather, dt } = data;
        const dc = " &#8451;";
        document.getElementById(
            "today-icon"
        ).src = `${img_path}/${weather[0].icon}.png`;
        document.getElementById("today-condition").innerText = weather[0].main;
        document.getElementById("city-name").innerText = name;
        console.log(getDate(dt));
        document.getElementById("date").innerText = getDate(dt);
        document.getElementById("temp-c").innerText = Math.floor(main.temp);
        document.getElementById("hum_fl").innerHTML = `${Math.floor(main.humidity) + dc
            }/${Math.floor(main.feels_like) + dc} `;
    }
};

getData();