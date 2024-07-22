export type BaseTheme = {
	backgroundColor: string;
	textColor: string;
	contrastColor: ThemeColors;
	primaryColor: ThemeColors;
} & typeof theme;

export const theme = {
	purple_100: '#B57EDC',
	purple_200: '#A566CC',
	purple_300: '#944DBB',
	purple_400: '#8334AA',
	purple_500: '#721B99',
	purple_600: '#621488',
	purple_700: '#510C77',
	purple_800: '#400566',
	gray_0: '#FFFFFF',
	gray_100: '#F8F9FA',
	gray_200: '#E9ECEF',
	gray_300: '#DEE2E6',
	gray_400: '#CED4DA',
	gray_500: '#ADB5BD',
	gray_600: '#6C757D',
	gray_700: '#495057',
	gray_800: '#343A40',
	gray_900: '#212529',
	gray_1000: '#000',
};

export const lightTheme: BaseTheme = {
	...theme,
	backgroundColor: '#F5F5F5',
	textColor: '#08060E',
	contrastColor: 'purple_700',
	primaryColor: 'purple_500',
};

export const darkTheme: BaseTheme = {
	...theme,
	backgroundColor: '#08060E',
	textColor: '#F5F5F5',
	contrastColor: 'purple_300',
	primaryColor: 'purple_500',
};

export type BaseThemeColors = keyof BaseTheme;
export type ThemeColors = keyof typeof theme;
export type DarkTheme = typeof darkTheme;
export type LightTheme = typeof lightTheme;
