import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import {Icon as VectorIcon} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import {BaseThemeColors, lightTheme} from '@theme';

export type IconVariant =
	| 'AntDesign'
	| 'Entypo'
	| 'EvilIcons'
	| 'Feather'
	| 'FontAwesome'
	| 'Fontisto'
	| 'Foundation'
	| 'Ionicons'
	| 'MaterialCommunityIcons'
	| 'MaterialIcons'
	| 'Octicons'
	| 'SimpleLineIcons'
	| 'Zocial';

type IconPreset = Record<IconVariant, typeof VectorIcon>;

const iconPresets: IconPreset = {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	Fontisto,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
};

interface IconProps {
	color?: BaseThemeColors;
	variant: IconVariant;
	name: string;
	size: number;
}

export function Icon({variant, name, size, color = 'gray_1000'}: IconProps) {
	const IconElement = iconPresets[variant];

	function iconFamilyHasIcon() {
		const iconsName = Object.keys(IconElement.getRawGlyphMap());
		const mappedNames = iconsName.map(icon => ({icon}));
		const iconExists = mappedNames.some(item => item.icon === name);

		if (!iconExists) {
			console.warn(`Icon ${name} not found on ${variant}`);
		}
	}

	iconFamilyHasIcon();

	return <IconElement name={name} size={size} color={lightTheme[color]} />;
}
