import { Fragment } from "react";
import { useSelector } from "react-redux";
import ImageCard from "../../components/ImageCard/ImageCard";
import { Grid } from "@material-ui/core";

const MyList = () => {
  const animeList = useSelector((state) => state.myList.items);
  console.log(animeList)
  let animecard = "";
  if (animeList && animeList.length > 0) {
    animecard = animeList.map((mangacard) => {
      return <ImageCard key={mangacard.id} response={mangacard} />;
    });
  }

  return (
    <Fragment>
      <Grid container spacing={2} >
        {animecard}
      </Grid>
    </Fragment>
  );
};

export default MyList;
