import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

import {AppTabParamList} from './AppTabNavigator';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AppTabParamList {}
	}
}

export type AppScreenProps<RouteName extends keyof AppTabParamList> =
	NativeStackScreenProps<AppTabParamList, RouteName>;
