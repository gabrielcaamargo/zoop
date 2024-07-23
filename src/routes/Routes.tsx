import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppTabNavigator} from './AppTabNavigator';

export function Routes() {
	return (
		<NavigationContainer>
			<AppTabNavigator />
		</NavigationContainer>
	);
}
