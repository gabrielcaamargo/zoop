import React from 'react';

import {ThemeProvider} from 'styled-components';

import {Routes} from '@routes';
import {lightTheme} from '@theme';

export default function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<Routes />
		</ThemeProvider>
	);
}
