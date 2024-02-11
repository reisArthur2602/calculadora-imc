import styled from 'styled-components';
import { Calculadora, Result } from './components';
import { useState } from 'react';

const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const App = () => {
	const [imc, setImc] = useState('');

	return (
		<Container>
			{imc ? (
				<Result setImc={setImc} imc={imc} />
			) : (
				<Calculadora setImc={setImc} />
			)}
		</Container>
	);
};
