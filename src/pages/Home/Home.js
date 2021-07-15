import { Fragment } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import cssClasses from "./Home.module.css";
import IconCard from "../../components/IconCard/IconCard";
import * as iconArray from "../../DummyDataJson/DummyData.json";
import ImageCard from "../../components/ImageCard/ImageCard";
import ImageListCard from "../../components/imageListCard/ImageListCard";
import useHttp from "../../hooks/useHttp";
import { useEffect } from "react";
import { enviornment } from "../../enviornment/enviornment";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "85px",
  },
  container: {
    backgroundColor: "#0a1625",
    borderRadius: "2rem",
    padding: "10px",
  },
  mainheading: {
    margin: "1rem 0rem",
    fontWeight: "bold",
  },
});

const Home = () => {
  const classes = useStyles();
  const {
    isLoading: trendingLoading,
    error: trendingError,
    response: trendingAnime,
    fetchReq: fetchTrendingAnime,
  } = useHttp();

  const {
      isLoading:trendingMangaLoading,
      error:trendingMangaError,
      response: trendingManga,
      fetchReq:fetchTrendingManga
  } = useHttp();

  const {
    isLoading:mostpopularLoading,
    error:mostpopularError,
    response:mostpopularAnime,
    fetchReq:fetchMostPopularAnime
  } = useHttp();

  const {
    isLoading:mostfaveLoading,
    error:mostfaveError,
    response:mostFavAnime,
    fetchReq:fetchMostFavoriteAnime
  } = useHttp()

  useEffect(() => {
    fetchTrendingAnime({
      url: `${enviornment.baseURL}trending/anime`,
      method: "GET",
    });
    fetchTrendingManga({
        url:`${enviornment.baseURL}trending/manga`,
        method:'GET'
    })
    fetchMostPopularAnime({
        url:`${enviornment.baseURL}anime?sort=popularityRank&page[limit]=5&page[offset]=0`,
        method:'GET'
    })
    fetchMostFavoriteAnime({
        url:`${enviornment.baseURL}anime?sort=-favoritesCount&page[limit]=5&page[offset]=0`,
        method:'GET'
    })
  }, [fetchTrendingAnime,fetchTrendingManga , fetchMostPopularAnime,fetchMostFavoriteAnime]);

  let imagecard = "";
  if (trendingAnime && trendingAnime.length > 0) {
    imagecard =  trendingAnime.slice(0, 5).map((card) => {
      return <ImageCard key={card.id} response={card} />;
    });
  } else {
  }

  let  mangacard ="";
  if(trendingManga && trendingManga.length > 0){
    mangacard = trendingManga.slice(0,5).map((mangacard)=>{
        return <ImageCard key={mangacard.id} response={mangacard} />
    })
  }

  let mostpopularcard ="";
  if(mostpopularAnime && mostpopularAnime.length > 0){
      mostpopularcard = mostpopularAnime.map((card)=>{
        return <ImageCard key={card.id} response={card} />
      })
  }

  let mostfavoriteanime="";
  if(mostFavAnime && mostFavAnime.length > 0){
    mostfavoriteanime = mostFavAnime.map((card)=>{
      return <ImageCard key={card.id} response={card} />
    })
}

  return (
    <Fragment>
      <Container maxWidth="lg">
        <div className={classes.container}>
          <div className={cssClasses.containerTitle}>
            <Typography
              component="h1"
              variant="h5"
              className={classes.mainheading}
            >
              The new generation anime platform
            </Typography>
            <Typography component="h2" variant="h6">
              Track,share and discover new favorite anime and manga list
            </Typography>
          </div>
          <div className={classes.root}>
            <Grid container spacing={3}>
              {iconArray["default"].map((icon) => {
                return (
                  <IconCard
                    key={icon.icon}
                    header={icon.header}
                    content={icon.content}
                    iconval={icon.icon}
                  />
                );
              })}
            </Grid>
          </div>
        </div>

        <div>
            <h4>TRENDING ANIME</h4>
            <Grid container spacing={2} justifyContent="space-evenly">
            {imagecard}
            </Grid>
        </div>
        <div>
            <h4>MOST POPULAR ANIME</h4>
            <Grid container spacing={2} justifyContent="space-evenly">
            {mostpopularcard}
            </Grid>
        </div>
        <div>
            <h4>MOST FAVORED ANIME</h4>
            <Grid container spacing={2} justifyContent="space-evenly">
                {mostfavoriteanime}
            </Grid>
        </div>
        <div>
            <h4>TRENDING MANGA</h4>
            <Grid container spacing={2} justifyContent="space-evenly">
            {mangacard}
            </Grid>
        </div>
        <div>
            <h4>Top 10 Anime</h4>
            <ImageListCard />
        </div>
      </Container>
    </Fragment>
  );
};

export default Home;
