import {IconVariant} from '@components';

import {AppTabParamList} from './AppTabNavigator';

type TabBarIconData = {
	iconName: string;
	iconVariant: IconVariant;
};

type TabBarIcon = {
	label: string;
	focused: TabBarIconData;
	unfocused: TabBarIconData;
};

export const mapTabBar: Record<keyof AppTabParamList, TabBarIcon> = {
	ChatsScreen: {
		label: 'Conversas',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'chatbubbles',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'chatbubbles-outline',
		},
	},
	CallingsScreen: {
		label: 'Chamadas',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'call',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'call-outline',
		},
	},
	ProfileScreen: {
		label: 'Perfil',
		focused: {
			iconVariant: 'FontAwesome',
			iconName: 'user',
		},
		unfocused: {
			iconVariant: 'FontAwesome',
			iconName: 'user-o',
		},
	},
	SettingsScreen: {
		label: 'Config.',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'settings-sharp',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'settings-outline',
		},
	},
};
