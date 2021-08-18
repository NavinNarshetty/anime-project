import { useState } from "react";
import {  Container, Grid, IconButton, Paper, Tooltip, Typography } from "@material-ui/core";
import classes from "./ImageCardWithContent.module.css";
import MoodIcon from '@material-ui/icons/Mood';
import GradeIcon from '@material-ui/icons/Grade';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ViedoModal from "../VideoModal/ViedoModal";

const ImageCardWithContent = (props)=>{
    const {response:card} = props
    const [openModal , setModal] = useState(false)
    const [applyScroll , setScroll] = useState(false)

    const mouseEnterhandler = ()=>{
        setScroll(true)
    }

    const onModalHandlerAndBackDropClick = ()=>{
        setModal((prev)=> !prev)
    }

    const mouseLeavehandler = ()=>{
        setScroll(false)
    }

    const onViewTrailer = ()=>{
        setModal(true);
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
                             <Typography component="div">
                              <Tooltip title="Watch Trailer" placement="right">
                                {/* <IconButton aria-label="watch trailer" > */}
                                    <YouTubeIcon style={{cursor:'pointer'}} onClick={onViewTrailer}/>
                                {/* </IconButton> */}
                              </Tooltip>
                             </Typography>
                            
                             {openModal && <ViedoModal src={card.attributes.youtubeVideoId} onConfirm={onModalHandlerAndBackDropClick}/>}
                         </div>
                     </div>
                     <div className={ [classes.cardsynopsis , applyScroll ? classes.applyScrollOnHover : ''].join(' ')}>
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