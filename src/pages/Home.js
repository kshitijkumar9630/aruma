import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper } from '@material-ui/core';

import Sliders from '../components/Sliders';

import Logo from '../assets/logo/aruma_logo.png';
import Dimage from '../assets/images/10.jpg';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(4),
		marginTop: '1rem',
	},
	heroContainer: {
		backgroundColor: '#212121',
		color: 'white',
		height: '500px',
		paddingTop: '2rem',
		paddingBottom: '1rem',
	},
	formControl: { width: '16rem' },
}));
const Home = () => {
	const classes = useStyles();

	return (
		<>
			<Container
				className={classes.heroContainer}
				component="div"
				maxWidth="false"
				disableGutters
			>
				<Container component="div" maxWidth="sm" align="center">
					<div>
						<img src={Logo} style={{ height: '150px', margin: '2rem' }} />
					</div>
					<Typography variant="h5" component="h5" gutterBottom>
						Reality to heights.
					</Typography>
				</Container>
			</Container>
			<Container
				maxWidth="md"
				style={{ marginTop: '-4rem', marginBottom: '1rem' }}
			>
				<Sliders />
			</Container>
			<Container maxWidth="md" align="center">
				<Paper elevation={2} align="center" className={classes.paper}>
					<Typography variant="h4" component="h4" gutterBottom>
						Director's speak
					</Typography>
					<div style={{ margin: '2rem' }}>
						<img
							src={Dimage}
							style={{ height: '200px', borderRadius: '1000px' }}
						/>
					</div>
					<Typography paragraph gutterBottom>
						The woods are lovely, dark and deep, <br />
						But I have promises to keep, <br />
						And miles to go before I sleep, <br />
						And miles to go before I sleep.
					</Typography>

					<Typography paragraph gutterBottom>
						I am highly inspired by these lines of Robert Frost, I believe that
						the zeal that percolates beneath after getting entangled with these
						lines can never be turned up.
					</Typography>

					<Typography paragraph gutterBottom>
						With the vision to give an abrupt and advanced platform to all the
						people out there in India. I took the major step of this startup at
						a tender age, the life experiences, the shattered dreams of mine
						gave me a phase a vision, the dilemma that prolonged in my mind
						brought out the best thing I guess because I never wanted any dreams
						to get shattered like mine due to an uneven situation. The problems
						that juveniles are facing these days are lack of genuine platform,
						lack of guidance, lack of formal support, and lack of knowledge in
						the concerned field they want to opt for.
					</Typography>

					<Typography paragraph gutterBottom>
						So we have come up with a place where the people can be groomed up
						to surpass each and everything they have dreamt of. With a vision to
						Groom each and every Indian and their personality to make them
						"AATMANIRBHAR" in all possible aspects.
					</Typography>
				</Paper>
				<Paper elevation={2} align="center" className={classes.paper}>
					<Typography variant="h6" component="h6" gutterBottom>
						Take one step forward out of all the unwanted situations, oppose all
						the uneven factors once and take a stand for yourself, you will see
						the golden door of success opening in front of your eyes.
					</Typography>
					<Typography variant="caption" display="block" gutterBottom>
						-Anshika Tripathi
					</Typography>
				</Paper>
				<Paper elevation={2} align="center" className={classes.paper}>
					<Typography variant="h6" component="h6" gutterBottom>
						Encourage your sons and daughters to follow their dreams and you
						will be the proudest parents.
					</Typography>
					<Typography variant="caption" display="block" gutterBottom>
						-Anshika Tripathi
					</Typography>
				</Paper>
				<Paper elevation={2} align="center" className={classes.paper}>
					<Typography variant="h6" component="h6" gutterBottom>
						I believe that youngsters have that aura beneath to make out a
						change give them a chance and see the spark.
					</Typography>
					<Typography variant="caption" display="block" gutterBottom>
						-Anshika Tripathi
					</Typography>
				</Paper>
			</Container>
		</>
	);
};

export default Home;
