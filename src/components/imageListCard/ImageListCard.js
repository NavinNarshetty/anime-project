import {Grid, Paper, Typography } from "@material-ui/core";
import { Fragment } from "react";
const ImageListCard = () => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={1} md={1}>
          #1
        </Grid>
        <Grid item xs={11} md={11}>
        <Paper>
            <Grid item container xs={12} md={12} spacing={1}>
                <Grid item  xs={5} container spacing={1}>
                    <Typography component="a">
                        <img
                            alt="animeimage"
                            src="https://media.kitsu.io/anime/poster_images/3936/tiny.jpg?1597690778"
                        ></img>
                    </Typography>
                    <Typography component="div">
                        <h5>Title</h5>
                    <span>comedy , scifi , spuer natural , romance , drama</span>
                    </Typography>
                </Grid>
                {/* <Grid item>
                   
                </Grid> */}
                <Grid item>
                    <Typography component="div">
                    <p>91%</p>
                <p>52346 users</p>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="div">
                    <p>Tv shows</p>
                <p>13 episodes</p>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="div">
                    <p>Spring 2021</p>
                <p>finished</p>
                    </Typography>
                </Grid>
            </Grid>        
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ImageListCard;
