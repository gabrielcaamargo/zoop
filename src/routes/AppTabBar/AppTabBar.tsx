import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Icon, Typography} from '@components';
import {useAppSafeArea} from '@hooks';

import {AppTabParamList} from '../AppTabNavigator';
import {mapTabBar} from '../mapTabBar';

import * as S from './styles';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
	const {bottom} = useAppSafeArea();

	return (
		<S.Container paddingBottom={bottom}>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];
				const isFocused = index === state.index;
				const tabItem = mapTabBar[route.name as keyof AppTabParamList];

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate({
							name: route.name,
							params: route.params,
							merge: true,
						});
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<S.TabButton
						onPress={onPress}
						onLongPress={onLongPress}
						accessibilityState={isFocused ? {selected: true} : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}>
						<Icon
							size={16}
							color={isFocused ? 'purple_500' : 'gray_500'}
							name={
								isFocused
									? tabItem.focused.iconName
									: tabItem.unfocused.iconName
							}
							variant={
								isFocused
									? tabItem.focused.iconVariant
									: tabItem.unfocused.iconVariant
							}
						/>
						<Typography
							variant="paragraphCaption"
							color={isFocused ? 'purple_500' : 'gray_500'}>
							{tabItem.label}
						</Typography>
					</S.TabButton>
				);
			})}
		</S.Container>
	);
}
