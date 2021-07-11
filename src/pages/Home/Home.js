import { Fragment } from "react";
import { Container, Typography , Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import cssClasses from "./Home.module.css";
import IconCard from "../../components/IconCard/IconCard";
import * as iconArray from "../../DummyDataJson/DummyData.json";
import ImageCard from "../../components/ImageCard/ImageCard";
import useHttp from "../../hooks/useHttp";
import { useEffect } from "react";
import { enviornment } from "../../enviornment/enviornment";
const useStyles = makeStyles({
    root: {
        flexGrow:1,
        marginTop:'85px'
      },
  container: {
    backgroundColor: "#0a1625",
    borderRadius: "2rem",
    padding:'10px'
  },
  mainheading: {
    margin: "1rem 0rem",
    fontWeight: "bold",
  },
});



const Home = () => {
  const classes = useStyles();
  const {
      isLoading:trendingLoading,
      error:trendingError,
      response:trendingAnime,
      fetchReq:fetchTrendingAnime
  } = useHttp();

  useEffect(()=>{
    fetchTrendingAnime({
        url:`${enviornment.baseURL}trending/anime?page[limit]=5&page[offset]=0`,
        method:'GET',
    })
  },[])
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
                {
                    iconArray['default'].map((icon)=>{
                        return (
                            <IconCard key={icon.icon} header={icon.header} content={icon.content} iconval={icon.icon} />
                        )
                    })
                }
            </Grid>
          </div>
        </div>
        
        <Grid container spacing={2} justifyContent="space-evenly">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
        </Grid>
      
      </Container>
    </Fragment>
  );
};

export default Home;
