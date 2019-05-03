import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { uniqBy, take } from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';

const styles = (theme) => ({
    card: {
        maxWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    root: {
        flexGrow: 1,
        marginTop: '3rem',
    },
    cardItem: {
        marginTop: '1rem',
    },
    chip: {
        marginTop: theme.spacing.unit,
    },
    bigAvatar: {
        marginTop: theme.spacing.unit,
        margin: 10,
        width: 60,
        height: 60,
    },
});

const Container = props => {
    const { classes, containerProps } = props;
    return (<Grid container className={classes.root} spacing={24} justify='center' {...containerProps}>
        {props.children}
    </Grid>)
}

const getUniqueElements = array => uniqBy(array, 'language');

const GistList = props => {
    const { classes, gists, isFetching } = props;
    console.log(gists);
    if (!gists) return null;
    if (isFetching) return <Container {...props}><Grid item><CircularProgress className={classes.progress} /></Grid></Container>;
    return gists && gists.length === 0 ? (<Container {...props} containerProps={{ spacing: 24 }}><h3>No gists found</h3></Container>) : (
        <Container {...props} containerProps={{ spacing: 24 }}>
            {gists.map((gist, index) => (
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {`Gist details ${index + 1}`}
                            </Typography>
                            <Typography component="p" className={classes.cardItem}>
                                Files Types
                        </Typography>
                            {getUniqueElements(Object.keys(gist.files)).map(file =>
                                <Chip label={gist.files[file].language ? gist.files[file].language : 'Unknown'} className={classes.chip} />
                            )}
                            {gist.forks && gist.forks.length > 0 && (<Typography component="p" className={classes.cardItem}>
                                Forks
                            </Typography>)}
                            {gist.forks && gist.forks.length > 0 && take(gist.forks, 3).map(fork => (
                                <Fab color="primary" aria-label={fork.owner.login} className={classes.cardItem} onClick={() => window.open(fork.html_url)}>
                                    <Avatar alt={fork.owner.login} src={fork.owner.avatar_url} className={classes.bigAvatar} />
                                </Fab>
                            ))}
                        </CardContent>
                        <CardActions>
                            <Button size="large" color="primary" onClick={() => window.open(gist.html_url)}>Visit Page</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Container>
    );
}

GistList.propTypes = {
    classes: PropTypes.object.isRequired,
    gists: PropTypes.arrayOf.isRequired,
    isFetching: PropTypes.bool.isRequired,
};

export default withStyles(styles)(GistList);