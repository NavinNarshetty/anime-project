import { Fragment } from "react";
import {Paper , Grid, Typography } from "@material-ui/core";
import  classes  from "./ImageCard.module.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    paper:{
        boxShadow:'none',
        backgroundColor:'#e0e9f5'
    },
})

const ImageCard = () =>{
    const stlyes = useStyles()
    return (
       <Fragment>
           <Grid item xs={6} sm={2}>
                <Paper className={stlyes.paper} elevation={0}>
                    <a href="https://kitsu.io/api/edge/anime/1">
                        <img alt="animeimage" className={classes.cardResponsive} src="https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256"></img>
                    </a>
                    <Typography component="h4">
                        Header
                    </Typography>
                </Paper>
            </Grid>
       </Fragment>
    )
}

export default ImageCard;