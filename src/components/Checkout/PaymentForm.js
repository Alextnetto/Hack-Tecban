import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Investir
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id="cardName" label="Texto para identificação" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} >
          <TextField required id="expDate" label="Valor" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Entregar uma cópia por email"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}