import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
	dispay: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Contetn = styled.div`
	padding: 120px 0;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Contetn>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Contetn>
			<Footer />
		</AppColumn>
	);
};