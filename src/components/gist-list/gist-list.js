import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { uniqBy } from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

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
        marginLeft: '10rem',
        marginRight: '10rem',
        marginTop: '3rem',
    },
    cardItem: {
        marginTop: '1rem',
    },
    chip: {
        marginTop: theme.spacing.unit,
    },
});

const getUniqueElements = array => uniqBy(array, 'language');

const GistList = props => {
    const { classes, gists, isFetching } = props;
    if (!gists) return null;
    if (isFetching) return <CircularProgress className={classes.progress} />
    return gists && gists.length === 0 ? (<h3>No gists found</h3>) : (
        <Grid container className={classes.root} spacing={24}>
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
                            <Fragment>
                                {getUniqueElements(Object.keys(gist.files)).map(file =>
                                    <Chip label={gist.files[file].language ? gist.files[file].language : 'Unknown'} className={classes.chip} />
                                )}
                            </Fragment>
                        </CardContent>
                        <CardActions>
                            <Button size="large" color="primary" onClick={() => window.open(gist.html_url)}>Visit Page</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

GistList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GistList);