import React from "react";
import Loading from "../components/loading"
import RecipeReviewCardOne from "../components/CardsMatch/cardmatch_one"
import RecipeReviewCardTwo from "../components/CardsMatch/cardmatch_two"

import { setUserStorage, getUserStorage, clearUserStorage } from "../utils/loginStorage"
import { accountGetGrant } from "../utils/handlerAccountAPI"

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Polymer from '@material-ui/icons/Polymer';


const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundColor: "#000000"
  },
  paper: {
    height: 240,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
    height: 300,
    backgroundColor: "#E72051"
  },
  recipeView: {
    margin: "auto",
  },
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
      spacing={2} 
      justify={"center"}
      alignContent={"center"}
      alignItems={"center"}
      >

        <Grid item xs={12} md={5}>
          <Paper className={this.classes.control}>
            <Grid container>
              <Grid item className={this.classes.recipeView} >
                <RecipeReviewCardOne  />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={2}>
          <Grid container>
            <Grid item className={this.classes.recipeView} >
              <Polymer style={{fill: "white"}}/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper className={this.classes.control}>
            <Grid container>
              <Grid item className={this.classes.recipeView} >
                <RecipeReviewCardTwo />
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
