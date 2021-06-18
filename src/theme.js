import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#212121',
		},
		secondary: {
			main: '#212121',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
		h4: {
			fontWeight: '600',
		},
		h2: {
			fontWeight: '500',
		},
		h5: {
			fontWeight: '500',
		},
		h3: {
			fontWeight: '500',
		},
	},
});

export default theme;
