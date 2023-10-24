import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	// useEffect(() => {
	// 	fetch(
	// 		'https://api.openweather.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=8f77d5942b4ea6c811dc6bc779479a73',
	// 	)
	// 		.then((res) => res.json())
	// 		.then(({ name, main, weather }) => {
	// 			setCity(name);
	// 			setTemperature(Math.round(main.temp));
	// 			setWeather(weather[0].description);
	// 		});
	// });

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 110px;
	width: 1000px;
	padding: 20px 40px;
	font-weight: bold;
	position: fixed;
	bottom: 0;
	background-color: rgb(255, 255, 255);
	box-shadow: rgb(0, 0, 0) 0px 2px 17px;
`;
