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

const ImageCard = (props) =>{
    const {response:card} = props
    const stlyes = useStyles()
    const onCardClicked =()=>{
       props.onClick(card.id)
    }
    return (
       <Fragment>
           <Grid item xs={6} sm={2}>
                <Paper className={stlyes.paper} elevation={0} onClick={onCardClicked}>
                    <div>
                        <img alt="animeimage" className={classes.cardResponsive} src={card.attributes.posterImage.small}></img>
                    </div>
                </Paper>
                <Typography component="h4">
                        {card.attributes.canonicalTitle}
                    </Typography>
            </Grid>
       </Fragment>
    )
}

export default ImageCard;