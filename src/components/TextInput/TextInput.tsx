import React from 'react';
import {TextInputProps as RNTextInputProps} from 'react-native';

import {Icon, IconVariant} from '@components';

import * as S from './styles';

type IconProps =
	| {iconName: string; iconVariant: IconVariant}
	| {iconName?: never; iconVariant?: never};

type TextInputProps = RNTextInputProps & IconProps;

export function TextInput({
	iconName,
	iconVariant,
	...textInputProps
}: TextInputProps) {
	return (
		<S.Container>
			<S.Input placeholder="Input" {...textInputProps} />
			{iconName && iconVariant && (
				<Icon variant={iconVariant} name={iconName} size={16} />
			)}
		</S.Container>
	);
}
