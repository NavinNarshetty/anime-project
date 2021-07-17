import {Grid, Paper, Typography , Badge} from "@material-ui/core";
import MoodIcon from '@material-ui/icons/Mood';
import { useEffect } from "react";
import { Fragment } from "react";
import useHttp from "../../hooks/useHttp";
import classes from './ImageList.module.css'

const ImageListCard = (props) => {
  
  const {
      isLoading,
      error,
      response:genereResponse,
      fetchReq
  } = useHttp()

  useEffect(()=>{
    fetchReq({
      url: `${props.genere}`,
      method: "GET",
    })
  },[props.genere , fetchReq])

  let animeGenere ="";
  if(genereResponse && genereResponse.length){
      animeGenere = genereResponse.slice(0,5).map((value)=>{
        return <span key={value.id}>{value.attributes.name}</span>
      })
  }

  const {response:card} = props
  return (
    <Fragment >
      <Grid container spacing={1} className={classes.imageCardContainer}>
        <Grid item xs={1} md={1} className={classes.ImageListCardNo}>
         <Typography component='div' className={classes.animeranking}>
          #{props.ranking}
         </Typography>
        </Grid>
        <Grid item xs={11} md={11} >
        <Paper >
            <Grid item container xs={12} md={12} spacing={1} justifyContent="space-around" alignItems="center">
                <Grid item  xs={5} container spacing={1}>
                    <div className={classes.animecardimage}>
                        <a href="/">
                        <img
                                alt={card.attributes.slug}
                                className={classes.imageHolder}
                                src={card.attributes.posterImage.small}
                         ></img>
                        </a>
                    </div>

                    <Typography component="div" className={classes.imageCardTitleGenereContainer}>
                        <h5 className={classes.imagecanonicalTitle}>{card.attributes.canonicalTitle}</h5>
                        <div className={classes.imageCardBadge} >
                           {animeGenere}
                        </div>
                    </Typography>
                </Grid>
                <Grid item className={classes.imageMoodCardHolder}>
                    <Typography component="div" className={classes.moodIcon_spacing}>
                        <MoodIcon />
                    </Typography>
                    <Typography component="div">
                     <p>  {card.attributes.averageRating} %</p>
                    <p>{card.attributes.userCount} users</p>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="div">
                    <p>{card.attributes.showType} shows</p>
                <p>{card.attributes.episodeCount} episodes</p>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="div">
                    <p>{card.attributes.startDate}</p>
                <p>{card.attributes.status}</p>
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
