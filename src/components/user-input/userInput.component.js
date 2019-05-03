import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  header: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const UserInput = (props) => {
  const {classes, user, setUser, searchGistByUser} = props;
  return (
    <div className={classes.root}>
      
          <Grid container justify="center" alignItems="flex-end" spacing={16}>
            <Grid item xs={6} sm={6} md={3}>
              <h3 className={classes.header}>Please choose a user</h3>
              <TextField
                id="standard-search"
                label="Username"
                type="search"
                className={classes.textField}
                margin="normal"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Button variant="contained" color="primary" className={classes.button} onClick={() => searchGistByUser(user)}>
                Search
              </Button>
            </Grid>
          </Grid>
    </div>
  );
};

export default withStyles(styles)(UserInput);