import styled from 'styled-components/native';

interface ContainerProps {
	paddingBottom: number;
}

export const Container = styled.View<ContainerProps>`
	padding-bottom: ${({paddingBottom}) => paddingBottom}px;
	flex-direction: row;
	align-items: center;
	padding-top: 12px;
`;

export const TabButton = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
	gap: 6px;
`;
