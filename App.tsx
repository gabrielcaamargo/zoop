import React from 'react';
import {View} from 'react-native';

import {ThemeProvider} from 'styled-components';

import {Button, TextInput} from '@components';
import {lightTheme} from '@theme';

export default function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<TextInput iconName="home" iconVariant="AntDesign" />
				<Button backgroundColor="purple_700" textColor="gray_0">
					Title
				</Button>
			</View>
		</ThemeProvider>
	);
}
