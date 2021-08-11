import { Fragment, useEffect, memo , useState} from "react";
import { Button, Container, Grid ,List , ListItem , ListItemText} from "@material-ui/core";
import CoverImageCard from "../../components/CoverImageCard/CoverImageCard";
import ContentWithTitle from "../../components/ContentWithTitle/ContentWithTitle";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { enviornment } from "../../enviornment/enviornment";
import { makeStyles } from "@material-ui/styles";
import AnimeSideNav from "../../components/AnimeSideNav/AnimeSideNav";
import ViedoModal from "../../components/VideoModal/ViedoModal";

import { useDispatch } from "react-redux";
import { myListActions } from "../../store/mylist";

const useStyles = makeStyles({
  image: {
    height: "300px",
  },
  imageCardHolder: {
    textAlign: "center",
    marginTop: "-100px",
  },
  buttonHolder:{
      listStyle:"none",
      padding:0,
      margin:0,
  },
  buttonitem:{
      margin:'8px 0px',
  }
});

const AnimeDetail = memo(() => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();
  const [isTrailerModal , setTrailerModal] = useState(false)
  const {
    isLoading,
    error,
    response: animeDetailReponse,
    fetchReq: fetchAnimeInfo,
  } = useHttp();

  const {
    response: stremingLinksResponse,
    fetchReq: fetchStreamLinks,
  } = useHttp();

  useEffect(() => {
    fetchAnimeInfo({
      url: `${enviornment.baseURL}anime/${id}`,
      method: "GET",
    });
    fetchStreamLinks({
        url:`${enviornment.baseURL}anime/${id}/streaming-links`,
        method: "GET",
    })
  }, [id, fetchAnimeInfo ,fetchStreamLinks]);

  console.log(stremingLinksResponse)
  const coverimagecard = () => {
    return (
      <CoverImageCard
        title={animeDetailReponse.attributes.canonicalTitle}
        src={animeDetailReponse.attributes.coverImage.original}
        height="400px"
        width="100%"
      />
    );
  };

  const img = () => {
    return (
      <img
        className={classes.image}
        alt={animeDetailReponse.attributes.canonicalTitle}
        src={animeDetailReponse.attributes.posterImage.small}
      ></img>
    );
  };

  let contentWithTitle = "";
  if (animeDetailReponse) {
    contentWithTitle = (
      <ContentWithTitle
        content={animeDetailReponse.attributes.description}
        title={animeDetailReponse.attributes.canonicalTitle}
      ></ContentWithTitle>
    );
  }
  const onModalHandlerAndBackDropClick =()=>{
    setTrailerModal((prevState)=>{
      return !prevState
    })
  }

  const onAddToWatchList=()=>{
    dispatch(myListActions.addItemToMyList(animeDetailReponse))
  }

  let viewButtons="";
   if(animeDetailReponse){
    viewButtons = (
        <ul className={classes.buttonHolder}>
            <li className={classes.buttonitem}>
              <Button color="primary" variant="contained" onClick={onModalHandlerAndBackDropClick}>View Trailer</Button>
            </li>
            <li>
            <Button color="primary" variant="contained" onClick={onAddToWatchList}>Add WatchList</Button>
            </li>
        </ul>
  )
   }

  

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Grid container>{animeDetailReponse && coverimagecard()}</Grid>

        <Grid container>
          <Grid item md={3} className={classes.imageCardHolder}>
            {animeDetailReponse && img()}
            {animeDetailReponse && viewButtons}
            
            { animeDetailReponse && isTrailerModal && <ViedoModal src={animeDetailReponse.attributes.youtubeVideoId} onConfirm={onModalHandlerAndBackDropClick}/>}
          </Grid>
          <Grid item md={9}>
            {animeDetailReponse && contentWithTitle}
          </Grid>
        </Grid>

        <Grid container >
          <Grid item md={3}>
            { (animeDetailReponse && stremingLinksResponse)  && <AnimeSideNav streamLinks={stremingLinksResponse} animeDetails={animeDetailReponse.attributes} />}
          </Grid>
          <Grid item md={9}>
            <div>Grid 2</div>
            
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
});

export default AnimeDetail;
