import styled from 'styled-components/native';

import {ButtonStyleProps} from './Button';

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
	background-color: ${({theme, backgroundColor}) => theme[backgroundColor]};
	padding: 8px 12px;
	border-radius: 6px;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;
