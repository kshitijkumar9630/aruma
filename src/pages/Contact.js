import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: { padding: theme.spacing(4), marginTop: '1rem' },
	heroContainer: {
		backgroundColor: '#212121',
		color: 'white',
		height: '500px',
		paddingTop: '4rem',
		paddingBottom: '1rem',
	},
}));
const About = () => {
	const classes = useStyles();

	return (
		<>
			<Container
				className={classes.heroContainer}
				component="div"
				maxWidth="false"
				disableGutters
			>
				<Container component="div" maxWidth="sm"  align="center">
					<Typography variant="h3" component="h3" gutterBottom>
						Contact
					</Typography>
					<Typography variant="h5" component="h5" gutterBottom>
						Aruma is an initiative for young talents who have been sidestepping 
						either because of a financial crisis, lack of knowledge, or fewer
						opportunities in the concerned field.
					</Typography>
				</Container>
			</Container>
			<Container maxWidth="md" align="center" style={{ marginTop: '-5rem' }}>
				<Paper elevation={2} align="center" className={classes.paper}>
					<Typography variant="h4" component="h4" gutterBottom>
						What we do
					</Typography>
					<Typography paragraph gutterBottom>
						This organization works for social causes basically bought up to
						boost the level of youngsters throughout and will try to support the
						vision of government there for's and deed.
					</Typography>
					<Typography paragraph gutterBottom>
						We will be a pre-eminent step for the ones who stand back in the
						queue due to certain undefined and unfavorable calamities. As in the
						majority of the juvenile are left with nothing but a bitter thought
						to relinquish their dreams and aspirations.
					</Typography>
					<Typography paragraph gutterBottom>
						Our organization will bring up the best faculties, experts, and
						influencers from numerous fields and backgrounds like "fashion and
						lifestyle, skill development, industrial aspects, art, and culture,
						etc" Collaboration with different companies will add value to it, we
						will also be focusing on fields that are to be brought up like
						agriculture, farming, etc. We provide classes and interaction at a
						negligible cost and this will be cost-effective, we will be
						providing free classes to the underprivileged ones so whatever will
						get for this organization will add value. It and will bring about a
						great change in society.
					</Typography>
				</Paper>
				<Paper elevation={2} align="center" className={classes.paper}>
					<Typography variant="h4" component="h4" gutterBottom>
						What we believe
					</Typography>
					<Typography paragraph>
						We believe in providing the best solution and knowledge to the ones
						who are at most talented and aspirant. This measure will be a
						stepping stone for the ones who are firmly aspirants about their
						career and dream.
					</Typography>
					<Typography paragraph gutterBottom>
						Aruma will be a boon to the ones bonafide towards their dreams and
						will help them in "developing their personality, communication
						skills, Absolute English and many more. We will add a soothing spark
						to the enlightened mindsets and will help people to understand
						today's market format, need, and attribution. Each and every
						individual collapsing with us will get a defined scope and direction
						in the fields they will opt for.
					</Typography>
				</Paper>
			</Container>
		</>
	);
};

export default About;
