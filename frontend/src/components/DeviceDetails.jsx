import { Button, Grid, Typography } from '@material-ui/core';

export const DeviceDetails = ({
  index,
  name,
  quantity,
  price,
  description,
  addToCart,
  removeFromCart,
  itemsInCart,
}) => (
  <Grid container>
    <Grid item xs={1}>
      <Typography variant="body1" color="textPrimary">
        {index + 1}
      </Typography>
    </Grid>
    <Grid item xs={8}>
      <Typography variant="h6" color="textPrimary">
        {name}
      </Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography variant="h6" color="textPrimary">
        $ {price}
      </Typography>
    </Grid>
    <Grid item xs={1}>
      <Typography variant="body1" color="textPrimary">
        {quantity}
      </Typography>
    </Grid>
    <Grid item xs={1} />
    <Grid item xs={8}>
      <Typography variant="body1" color="textPrimary">
        {description}
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Button variant="contained" color="primary" onClick={addToCart} disabled={quantity === 0}>
        Add to cart
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={removeFromCart}
        disabled={itemsInCart === 0}
      >
        Remove from cart
      </Button>
      <Typography variant="body1" color="textSecondary">
        This items in cart: {itemsInCart}
      </Typography>
    </Grid>
  </Grid>
);
