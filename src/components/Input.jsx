import styled from 'styled-components';

export const Input = ({ type, onChange, value }) => {
	const Container = styled.div`
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;

		label {
			font-size: 1.5rem;
			font-weight: 400;
		}
	`;

	const Wrapper = styled.div`
		display: flex;
		border-bottom: 1px solid #00e0ff;
		padding-bottom: 0.75rem;
		color: #c3c3c3;
		font-size: 1.5rem;
		font-weight: 300;
		max-width: 21.875rem;

		input {
			font-size: 1.25rem;
			flex: 1;
			color: #c3c3c3;

			&::placeholder {
				color: #c3c3c3;
				font-size: 1.25rem;
				font-weight: 300;
			}

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
			}
		}
	`;

	return (
		<Container>
			{/* label */}
			<label>{type == 'peso' ? 'Peso' : 'Altura'}</label>
			<Wrapper>
				<input
					placeholder={type == 'peso' ? '86.5' : '1,78'}
					required
					type="number"
					onChange={onChange}
					value={value}
				/>
				<span>{type == 'peso' ? 'kg' : 'm'}</span>
			</Wrapper>
			{/* input */}
		</Container>
	);
};
