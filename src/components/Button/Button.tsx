import React from 'react';

import {Icon, IconVariant, Typography} from '@components';
import {BaseThemeColors} from '@theme';

import * as S from './styles';

export interface ButtonStyleProps {
	backgroundColor: BaseThemeColors;
	textColor?: BaseThemeColors;
}

interface ButtonProps extends ButtonStyleProps {
	children: string;
	iconVariant?: IconVariant;
	iconName?: string;
	iconSide?: 'left' | 'right';
}

export function Button({
	children,
	backgroundColor,
	textColor,
	iconVariant = 'AntDesign',
	iconName,
	iconSide = 'right',
}: ButtonProps) {
	return (
		<S.Container
			backgroundColor={backgroundColor}
			textColor={textColor}
			activeOpacity={0.6}>
			{iconSide === 'left' && iconName && iconVariant && (
				<Icon
					name={iconName}
					variant={iconVariant}
					size={18}
					color={textColor}
				/>
			)}
			<Typography color={textColor}>{children}</Typography>
			{iconSide === 'right' && iconName && iconVariant && (
				<Icon
					name={iconName}
					variant={iconVariant}
					size={18}
					color={textColor}
				/>
			)}
		</S.Container>
	);
}
