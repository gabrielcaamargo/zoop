import React from 'react';
import {View} from 'react-native';

import {ThemeProvider} from 'styled-components';

import {Button, Typography} from '@components';
import {lightTheme} from '@theme';

export default function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Button
					backgroundColor="purple_500"
					textColor="gray_0"
					iconName="right">
					Button
				</Button>
			</View>
		</ThemeProvider>
	);
}
