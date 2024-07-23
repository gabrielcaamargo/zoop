import React from 'react';

import {
	BottomTabBarProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
	CallingsScreen,
	ChatsScreen,
	ProfileScreen,
	SettingsScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar/AppTabBar';

export type AppTabParamList = {
	ChatsScreen: undefined;
	CallingsScreen: undefined;
	SettingsScreen: undefined;
	ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

function renderTabBar(props: BottomTabBarProps) {
	return <AppTabBar {...props} />;
}

export function AppTabNavigator() {
	return (
		<Tab.Navigator screenOptions={{headerShown: false}} tabBar={renderTabBar}>
			<Tab.Screen name="ChatsScreen" component={ChatsScreen} />
			<Tab.Screen name="CallingsScreen" component={CallingsScreen} />
			<Tab.Screen name="ProfileScreen" component={ProfileScreen} />
			<Tab.Screen name="SettingsScreen" component={SettingsScreen} />
		</Tab.Navigator>
	);
}
