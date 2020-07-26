import React from "react";
import Loading from "../components/loading"
import RecipeReviewCard from "../components/CardsMatch/cardmatch"

import { setUserStorage, getUserStorage, clearUserStorage } from "../utils/loginStorage"
import { accountGetGrant } from "../utils/handlerAccountAPI"

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  recipeView: {
    margin: "auto",
    backgroundColor: "red"
  }
});

class MatchPage extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes
    this.state = {
      loading: true
    };
  }

  render() {
    console.log(this.classes.root)

    return (
      <>
      <Grid container 
      className={this.classes.root} 
      spacing={8} 
      justify={"center"}
      alignContent={"center"}
      alignItems={"center"}
      >

        <Grid item xs={12} md={5}>
          <Paper className={this.classes.control}>
            <Grid container>
              <Grid item className={this.classes.recipeView} >
                <RecipeReviewCard  />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper className={this.classes.control}>
            <Grid container>
              <Grid item className={this.classes.recipeView} >
                <RecipeReviewCard />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(MatchPage)
