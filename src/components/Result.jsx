import React from 'react';
import { Button, Container } from '../styles';
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

export const Result = ({ imc, situation }) => {
	return (
		<Container>
			<h1>Seu IMC : 26.2{imc}</h1>
			<PStyled>
				Sua situação atual é de : <strong>Normal{situation}</strong>
			</PStyled>
			<Button type="submit" color="#0085FF">
				Voltar
			</Button>
		</Container>
	);
};
