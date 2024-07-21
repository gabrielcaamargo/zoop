import {DarkTheme, LightTheme} from '@theme';
import 'styled-components/native';

declare module 'styled-components/native' {
	export interface DefaultTheme extends DarkTheme {}
	export interface DefaultTheme extends LightTheme {}
}
