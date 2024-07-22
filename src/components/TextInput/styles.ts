import styled from 'styled-components/native';

export const Container = styled.View`
	border: 1px solid ${({theme}) => theme.gray_400};
	padding: 4px 8px;
	border-radius: 6px;
	flex-direction: row;
`;

export const Input = styled.TextInput`
	flex: 1;
	font-size: 16px;
	font-family: 'Inter-Regular';
`;
