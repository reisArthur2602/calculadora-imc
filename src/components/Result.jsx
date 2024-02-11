import { Button, Container } from '../styles';
import { data } from '../data';
import styled from 'styled-components';

const PStyled = styled.p`
	font-size: 2rem;
	font-weight: 300;
	color: #00e0ff;
	text-align: center;

	strong {
		font-weight: 900;
	}
`;

export const Result = ({ imc, setImc, info }) => {
	const handleBack = () => {
		setImc('');
	};

	return (
		<Container>
			<h1>Seu IMC: {imc}</h1>
			<PStyled>
				Sua situação atual é de : <strong>{info}</strong>
			</PStyled>
			<Button type="button" color="#0085FF" onClick={handleBack}>
				Voltar
			</Button>
		</Container>
	);
};
