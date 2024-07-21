import React from 'react';
import {Text as RNText} from 'react-native';

import {BaseThemeColors, lightTheme} from '@theme';

interface TypographyProps {
	children: string;
	variant?: TypographyVariants;
	color?: BaseThemeColors;
	weight?: TypographyWeight;
}

type TypographyWeight =
	| 'Black'
	| 'Bold'
	| 'ExtraBold'
	| 'ExtraLight'
	| 'Light'
	| 'Medium'
	| 'Regular'
	| 'SemiBold'
	| 'Thin';

export type TypographyVariants =
	| 'headingLarge'
	| 'headingMedium'
	| 'headingSmall'
	| 'paragraphLarge'
	| 'paragraphMedium'
	| 'paragraphSmall'
	| 'paragraphCaption'
	| 'paragraphCaptionSmall';

type TypographyFontSizes = Record<
	TypographyVariants,
	{fontSize: number; lineHeight: number}
>;

const fontSizes: TypographyFontSizes = {
	headingLarge: {fontSize: 32, lineHeight: 38.4},
	headingMedium: {fontSize: 22, lineHeight: 26.4},
	headingSmall: {fontSize: 18, lineHeight: 23.4},

	paragraphLarge: {fontSize: 18, lineHeight: 25.2},
	paragraphMedium: {fontSize: 16, lineHeight: 22.4},
	paragraphSmall: {fontSize: 14, lineHeight: 19.6},

	paragraphCaption: {fontSize: 12, lineHeight: 16.8},
	paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export function Typography({
	children,
	variant = 'paragraphMedium',
	color = 'gray_1000',
	weight = 'Regular',
}: TypographyProps) {
	const styles = {fontFamily: `Inter-${weight}`, color: lightTheme[color]};
	return <RNText style={[fontSizes[variant], styles]}>{children}</RNText>;
}
