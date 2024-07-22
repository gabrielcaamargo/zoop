import React from 'react';

import {Icon, IconVariant, Typography} from '@components';
import {BaseThemeColors} from '@theme';

import * as S from './styles';

export interface ButtonStyleProps {
	backgroundColor: BaseThemeColors;
	textColor?: BaseThemeColors;
}

type IconProps =
	| {
			iconName: string;
			iconSide: 'left' | 'right';
			iconVariant: IconVariant;
	  }
	| {
			iconName?: never;
			iconSide?: never;
			iconVariant?: never;
	  };

type ButtonProps = {
	children: string;
} & ButtonStyleProps &
	IconProps;

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
