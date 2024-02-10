import styled from 'styled-components';

export const Button = styled.button`
	max-width: 21.875rem;
	width: 100%;
	padding: 1.25rem;
	border-radius: 12px;
	background-color: ${(props) => props.color};
	font-size: 1.5rem;
	font-weight: 900;
	text-transform: uppercase;
	color: white;
	text-align: center;
  transition: linear 0.3s;

	&:hover {
		opacity: 0.6;
	}
`;
