import { Fragment , React } from "react";
import {Paper , Grid, Typography , Tooltip , Card , CardContent } from "@material-ui/core";
import  classes  from "./ImageCard.module.css";
import { makeStyles , withStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    paper:{
        boxShadow:'none',
        backgroundColor:'#e0e9f5'
    },
})

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#0a1625',
      color: '#ecf6fe',
      fontSize: 14,
      borderRadius:15,
    },
}))(Tooltip);


const ImageCard = (props) =>{
    const {response:card} = props
    const stlyes = useStyles()
    const onCardClicked =()=>{
       props.onClick(card.id)
    }
    const Image = ()=>{
        return (<img alt="animeimage" className={classes.cardResponsive} src={card.attributes.posterImage.small}></img>)
        }
    const body = (
        <Fragment>
            <div className={classes.tooltipContainer}>
                <div>
                    <h4>
                        {card.attributes.canonicalTitle}
                    </h4>
                    <p> {card.attributes.subtype} Shows: {card.attributes.episodeCount} episodes</p>
                    <p> Status : {card.attributes.status}</p>
                    <p>Favourite Count : {card.attributes.favoritesCount}</p>
                    <p>Rating : {card.attributes.averageRating} %</p>
                </div>
            </div>
        </Fragment>
    )
    return (
       <Fragment>
           
           <Grid item xs={6} sm={2}>
           <HtmlTooltip title={body} placement="right-start" arrow >
                <Paper className={stlyes.paper} elevation={0} onClick={onCardClicked}>
                    <Image />
                </Paper>
            </HtmlTooltip>
           
                <Typography component="h4">
                        {card.attributes.canonicalTitle}
                </Typography>
                
            </Grid>
       </Fragment>
    )
}

export default ImageCard;