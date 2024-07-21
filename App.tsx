import React from 'react';
import {View} from 'react-native';

import {Typography} from '@components';

export default function App() {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Typography color="purple_100" weight="ExtraBold">
				Text
			</Typography>
		</View>
	);
}
