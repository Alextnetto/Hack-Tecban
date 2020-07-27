import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from 'react-router-dom'

import ImageBack from "./13.jpg"

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  imgAds: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: "-10%"
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout >
      <img
        // style={{ display: 'none' }}
        src={ImageBack}
        alt="increase priority"
        className={classes.imgAds}
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        <Link to='/atms/'>Localizar Banco24Horas</Link>
        
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        <Link to='/login'>Logar-se</Link>
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
