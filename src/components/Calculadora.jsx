import styled from 'styled-components';
import { Input } from './Input';
import { Button , Container } from '../styles';



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

export const Calculadora = () => {
	return (
		<Container>
			{/* title */}
			<h1>Calcule o seu imc</h1>
			<FormWrapper>
				{/* Input */}
				<Wrapper>
					<Input type={'peso'} />
					<Input />
				</Wrapper>
				{/* action buttons */}
				<Wrapper>
					<Button color="#00E0FF" type='submit'>Calcular</Button>
					<Button color="#0085FF" type='submit'>Limpar</Button>
				</Wrapper>
			</FormWrapper>
		</Container>
	);
};
