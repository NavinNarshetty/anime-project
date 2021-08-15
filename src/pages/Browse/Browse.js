
import { Grid } from "@material-ui/core";
import { Fragment, useEffect } from "react";
import ImageCardWithContent from "../../components/ImageCardWithContent/ImageCardWithContent";
import { enviornment } from "../../enviornment/enviornment";
import useHttp from "../../hooks/useHttp";
const Browse = ()=>{
    const {
        isLoading: trendingLoading,
        error: trendingError,
        response: trendingAnime,
        fetchReq: fetchTrendingAnime,
      } = useHttp();

    useEffect(()=>{
        fetchTrendingAnime({
            url: `${enviornment.baseURL}anime?sort=popularityRank&page[limit]=20&page[offset]=0`,
            method: "GET",
          });
    },[fetchTrendingAnime])




    return (
        <Fragment>
        <Grid container spacing={2}>
           {trendingAnime && trendingAnime.length &&  
            trendingAnime.map((value)=>{
                return <ImageCardWithContent response={value} key={value.id} />
            })
           }
        </Grid>
        </Fragment>
    )
}

export default Browse;