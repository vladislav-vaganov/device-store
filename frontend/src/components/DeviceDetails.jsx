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
  <Grid container spacing={2}>
    <Grid item xs={1}>
      <Typography variant="h6" color="textPrimary">
        {index + 1}
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography variant="h6" color="textPrimary">
        {name}
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h6" color="textPrimary">
        $ {price}
      </Typography>
    </Grid>
    <Grid item xs={1}>
      <Typography variant="h6" color="textSecondary">
        {quantity}
      </Typography>
    </Grid>
    <Grid item xs={1} />
    <Grid item xs={7}>
      <Typography variant="body1" color="textPrimary">
        {description}
      </Typography>
    </Grid>
    <Grid item xs={4}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={addToCart}
            disabled={quantity === 0}
          >
            Add to cart
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={removeFromCart}
            disabled={itemsInCart === 0}
          >
            Remove from cart
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="textSecondary">
            This item in cart:{' '}
            <Typography component="span" variant="body1" color="secondary">
              {itemsInCart}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
