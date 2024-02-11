import styled from 'styled-components';

import { Button, Container } from '../styles';
import { useState } from 'react';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	@media screen and (max-width: 40.625rem) {
		flex-direction: column;
	}
`;

const FormWrapper = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4.5rem;
`;

const Input = styled.input`
	width: 100%;
	padding-bottom: 0.75rem;
	border-bottom: 1px solid #00e0ff;
	font-size: 20px;
	color: #c3c3c3;
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;

const Label = styled.label`
	cursor: pointer;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	color: #c3c3c3;
	font-size: 1.5rem;
	font-weight: 600;
`;

export const Calculadora = () => {
	const [weight, setWeight] = useState();
	const [height, setHeight] = useState();

	return (
		<Container>
			{/* title */}
			<h1>Calcule o seu imc</h1>
			<FormWrapper>
				{/* Input */}
				<Wrapper>
					<Label>
						Peso em KG
						<Input type="number" placeholder="ex: 85.5" required />
					</Label>
					<Label>
						Altura em M
						<Input type="number" placeholder=" ex: 1.78" required />
					</Label>
				</Wrapper>
				{/* action buttons */}
				<Wrapper>
					<Button color="#00E0FF" type="submit">
						Calcular
					</Button>
					<Button color="#0085FF" type="submit">
						Limpar
					</Button>
				</Wrapper>
			</FormWrapper>
		</Container>
	);
};
