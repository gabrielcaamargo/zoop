type BaseTheme = {
	backgroundColor: string;
	textColor: string;
	contrastColor: keyof (typeof theme)['purple'];
} & typeof theme;

export const theme = {
	purple: {
		purple_100: '#DAC3E8',
		purple_200: '#D2B7E5',
		purple_300: '#C19EE0',
		purple_400: '#B185DB',
		purple_500: '#A06CD5',
		purple_600: '#9163CB',
		purple_700: '#815AC0',
		purple_800: '#6247AA',
	},
};

export const lightTheme: BaseTheme = {
	...theme,
	backgroundColor: '#F5F5F5',
	textColor: '#08060E',
	contrastColor: 'purple_700',
};

export const darkTheme: BaseTheme = {
	...theme,
	backgroundColor: '#08060E',
	textColor: '#F5F5F5',
	contrastColor: 'purple_300',
};
