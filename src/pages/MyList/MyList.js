import { Fragment } from "react";
import { useSelector } from "react-redux";
import ImageCard from "../../components/ImageCard/ImageCard";

const MyList = ()=>{
    const animeList = useSelector((state)=>state.myList.items)

    let animecard = "";
    if (animeList && animeList.length > 0) {
        animecard = animeList.map((mangacard) => {
        return <ImageCard key={mangacard.id} response={mangacard} />;
      });
    }

    return (
        <Fragment>
            {animecard}
        </Fragment>
    )
}

export default MyList;