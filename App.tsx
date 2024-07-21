import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Icon name="rocket" />
		</View>
	);
}
