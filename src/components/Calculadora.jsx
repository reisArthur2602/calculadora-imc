import styled from 'styled-components';

import { Button, Container } from '../styles';
import { useState } from 'react';
import { data } from '../data';

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

export const Calculadora = ({ setImc, setInfo }) => {
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!weight || !height) return;

		const WeightNum = Number(weight);
		const HeightNum = Number(height);

		let result = WeightNum / (HeightNum * HeightNum);

		setImc(result.toFixed(1));

		data.forEach((item) => {
			if (result >= item.min && result <= item.max) {
				setInfo(item.info);
			}
		});

		setHeight('');
		setWeight('');
	};

	const handleClean = () => {
		setHeight('');
		setWeight('');
		setImc('');
	};

	return (
		<Container>
			{/* title */}
			<h1>Calcule o seu imc</h1>
			<FormWrapper onSubmit={handleSubmit}>
				{/* Input */}
				<Wrapper>
					<Label>
						Peso em KG
						<Input
							type="number"
							placeholder="ex: 85.5"
							onChange={(e) => setWeight(e.target.value)}
							value={weight}
						/>
					</Label>
					<Label>
						Altura em M
						<Input
							type="number"
							placeholder=" ex: 1.78"
							required
							onChange={(e) => setHeight(e.target.value)}
							value={height}
						/>
					</Label>
				</Wrapper>
				{/* action buttons */}
				<Wrapper>
					<Button color="#00E0FF" type="submit">
						Calcular
					</Button>
					<Button color="#0085FF" type="button" onClick={handleClean}>
						Limpar
					</Button>
				</Wrapper>
			</FormWrapper>
		</Container>
	);
};
