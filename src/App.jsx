import styled from 'styled-components';
import { Calculadora } from './components';

const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const App = () => {
	return (
		<Container>
			<Calculadora/>
		</Container>
	);
};
