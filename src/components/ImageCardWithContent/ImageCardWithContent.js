import { useState } from "react";
import {  Container, Grid, Paper, Typography } from "@material-ui/core";
import classes from "./ImageCardWithContent.module.css";
import MoodIcon from '@material-ui/icons/Mood';
import GradeIcon from '@material-ui/icons/Grade';

const ImageCardWithContent = (props)=>{
    const {response:card} = props

    

    const mouseEnterhandler = ()=>{
        // setHover(true)
    }

    const mouseLeavehandler = ()=>{
        // setHover(false);
    }

    return (
        <Grid item  xs={12} sm={4}>
            <Paper elevation={3} className={classes.paperContainer} onMouseEnter={mouseEnterhandler} onMouseLeave={mouseLeavehandler}>
             <Grid container>
                 <Grid item sm={5} >
                    <img alt="animeimage" className={classes.cardResponsive} src={card.attributes.posterImage.large}></img>
                 </Grid>
                 <Grid item sm={7} className={classes.cardContentContainer} >
                     <div className={[classes.carddetail].join(' ')} >
                         <div>
                            <p>Episode: {card.attributes.episodeCount ? card.attributes.episodeCount : 'ongoing'}</p>
                            <Typography component="h5">
                                {card.attributes.startDate}
                            </Typography>
                            <p>Show : {card.attributes.showType}</p>
                         </div>
                         <div>
                             <Typography component="div" style={{display:'flex'}}>
                                <span> <MoodIcon fontSize="small"></MoodIcon></span> 
                                <span className={classes.carddetailinfo}>{card.attributes.averageRating} %</span>
                             </Typography>
                             <Typography component="div" style={{display:'flex'}}>
                                <span><GradeIcon fontSize="small"/></span>
                                <span className={classes.carddetailinfo}># {card.attributes.popularityRank}</span>
                             </Typography>
                         </div>
                         <div style={{display:'none'}}>
                             transition
                         </div>
                     </div>
                     <div className={classes.cardsynopsis}>
                         {card.attributes.synopsis}
                     </div>
                     <div className={classes.cardTitle}>
                         {card.attributes.canonicalTitle}
                     </div>
                 </Grid>
             </Grid>
            </Paper>
        </Grid>
    )
}

export default ImageCardWithContent;