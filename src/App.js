import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

// page imports
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Services from './pages/Services';

// component imports
import Navbar from './components/Navbar';

//material ui imports
import { CssBaseline } from '@material-ui/core';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary">
			{'Copyright © '}
			<Link color="inherit" href="http://aruma.co.in/">
				Aruma
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	main: {
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(2),
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[800],
	},
}));
const App = () => {
	const classes = useStyles();

	return (
		<BrowserRouter>
			<div className={classes.root}>
				<CssBaseline />
				<Navbar />
				<Container
					component="main"
					className={classes.main}
					maxWidth="false"
					disableGutters
				>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/services" component={Services} />
						<Route path="/careers" component={Careers} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</Container>
				<footer className={classes.footer}>
					<Container maxWidth="sm" align='center'>
						{/* <Typography variant="body1">
							This website has been developed by Kshitij Kumar
						</Typography> */}
						<Copyright />
					</Container>
				</footer>
			</div>
		</BrowserRouter>
	);
};

export default App;
