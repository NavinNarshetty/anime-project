import { Fragment , React} from "react";
import {Paper , Grid, Typography , Tooltip , Button} from "@material-ui/core";
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
    const Image = ()=>{
    return (<img alt="animeimage" className={classes.cardResponsive} src={card.attributes.posterImage.small}></img>)
    }
    const stlyes = useStyles()
    const onCardClicked =()=>{
       props.onClick(card.id)
    }
    const body = <h1>Card Hover</h1>
    return (
       <Fragment>
           <Grid item xs={6} sm={2}>
              
           <Tooltip title={body} placement="right-start" arrow>    
                <Paper className={stlyes.paper} elevation={0} onClick={onCardClicked}>
                    <Image />
                </Paper>
            </Tooltip>
                <Typography component="h4">
                        {card.attributes.canonicalTitle}
                </Typography>
                
            </Grid>
       </Fragment>
    )
}

export default ImageCard;