import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageTile from "../../components/ImageTile/ImageTile";
import { Grid } from "@material-ui/core";
import { myListActions } from "../../store/mylist";

const MyList = () => {
  const animeList = useSelector((state) => state.myList.items);
  const dispatch = useDispatch()
  console.log(animeList)

  const removeHandler =(id)=>{
    dispatch(myListActions.removeitemFromMyList(id))
  }

  let animecard = "";
  if (animeList && animeList.length > 0) {
    animecard = animeList.map((mangacard) => {
      return <ImageTile key={mangacard.id} response={mangacard} onRemove={removeHandler} />;
    });
  }

  return (
    <Fragment>
      <Grid container spacing={3}>
       {animecard}
      </Grid>
    </Fragment>
  );
};

export default MyList;
