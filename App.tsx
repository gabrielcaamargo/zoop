import React from 'react';
import {View} from 'react-native';

import {Icon} from '@components';

export default function App() {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Icon variant="Entypo" name="home" />
		</View>
	);
}
