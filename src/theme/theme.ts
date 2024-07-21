export type BaseTheme = {
	backgroundColor: string;
	textColor: string;
	contrastColor: ThemeColors;
	primaryColor: ThemeColors;
} & typeof theme;

export const theme = {
	purple_100: '#DAC3E8',
	purple_200: '#D2B7E5',
	purple_300: '#C19EE0',
	purple_400: '#B185DB',
	purple_500: '#A06CD5',
	purple_600: '#9163CB',
	purple_700: '#815AC0',
	purple_800: '#6247AA',
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
