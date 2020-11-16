import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
  },
}));

export const AppHeader = ({ totalItemsInCart = 0 }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Device Store
        </Typography>

        <Typography variant="h6" align="right">
          Total in cart:{' '}
          <Typography component="span" variant="h6" color="secondary">
            {totalItemsInCart} item(s)
          </Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
