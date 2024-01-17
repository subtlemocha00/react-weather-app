const API_KEY = "d208066792773db91aa4a874b144cd30";

const getCurrentWeather = async (lat, lon) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	);
	if (!response.ok) {
		throw new Error("Failed to fetch current weather data");
	}
	return response.json();
};

export { getCurrentWeather };
