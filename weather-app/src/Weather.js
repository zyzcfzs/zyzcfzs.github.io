import React from 'react';
import './css/weather.css';
import * as Icon from './Icons.js';
const baseUrl = 'https://weather-proxy.freecodecamp.rocks/api/current?';
const Weather = () => {
    const [weather, setWeather] = React.useState({
        location: '',
        degree: '',
        status: '',
        description: '',
    });
    const [loading, setLoading] = React.useState(true);
    const [weatherIcon, setWeatherIcon] = React.useState('');
    const [unit, setUnit] = React.useState('C');
    function covertTemp(temp, unit) {
        let result = null;
        if (unit === 'F') {
            result = (temp * 9) / 5 + 32;
        } else if (unit === 'C') {
            result = ((temp - 32) * 5) / 9;
        }
        return parseFloat(result.toFixed(2));
    }
    React.useEffect(() => {
        function chooseIcon() {
            switch (weather.status) {
                case 'Thunderstorm':
                    setWeatherIcon(<Icon.Thunder></Icon.Thunder>);
                    break;
                case 'Clouds':
                    setWeatherIcon(<Icon.Cloudy></Icon.Cloudy>);
                    break;
                case 'Snow':
                    setWeatherIcon(<Icon.Flurries></Icon.Flurries>);
                    break;
                case 'Rain':
                    setWeatherIcon(<Icon.Rainy></Icon.Rainy>);
                    break;
                case 'Drizzle':
                    setWeatherIcon(<Icon.SunShower></Icon.SunShower>);
                    break;
                default:
                    setWeatherIcon(<Icon.Sunny></Icon.Sunny>);
            }
        }
        chooseIcon();
    }, [weather.status]);
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (success) => {
                fetch(
                    `${baseUrl}lat=${parseInt(
                        success.coords.latitude
                    )}&lon=${parseInt(success.coords.longitude)}`
                )
                    .then((res) => res.json())
                    .then((data) => {
                        setWeather({
                            location: data.name + ',' + data.sys.country,
                            degree: data.main.temp,
                            status: data.weather[0].main,
                            description: data.weather[0].description,
                        });
                        setLoading(!loading);
                    })
                    .catch((error) => console.log(error));
            },
            () => {
                alert(
                    `please enable your geolocation permission for this app to work`
                );
            }
        );
    }, []);

    function handleUnit() {
        if (unit === 'C') {
            setUnit('F');
            setWeather((weather) => {
                return { ...weather, degree: covertTemp(weather.degree, 'F') };
            });
        } else {
            setUnit('C');
            setWeather((weather) => {
                return { ...weather, degree: covertTemp(weather.degree, 'C') };
            });
        }
    }
    return (
        <div
            className='weather'
            style={{ display: loading ? 'none' : 'block' }}
        >
            <div className='location'>{weather.location} </div>
            <div className='degree'>
                {weather.degree} °
                <span
                    onClick={handleUnit}
                    style={{ color: 'blue', textDecoration: 'none' }}
                >
                    {unit}
                </span>
            </div>
            <div className='status'>
                {weather.status} | {weather.description}
            </div>
            {weatherIcon}
        </div>
    );
};

export default Weather;
