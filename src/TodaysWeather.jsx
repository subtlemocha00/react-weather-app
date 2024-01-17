import { useState } from "react";
import { getCurrentWeather } from "./services/weatherService";
import { useEffect } from "react";
export default function TodaysWeather() {
	const [lat, setLat] = useState(42.9850624);
	const [lon, setLon] = useState(81.2417024);
	const [weatherData, setWeatherData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getCurrentWeather(lat, lon);
				setWeatherData(data);
				console.log(data);
			} catch (error) {
				console.error("Error fetching weather data:", error);
			}
		};
		fetchData();
	}, [lat]);
	console.log(weatherData);
	return (
		<div id="currentWeather" className="container">
			<section className="row d-flex align-items-center justify-content-center">
				<span className="col-auto">{weatherData.main.temp} &deg;C</span>
				<div className="col-auto">
					<p className="row m-0">cloudy</p>
					<span className="row m-0">London, ON</span>
				</div>
			</section>
		</div>
	);
}
