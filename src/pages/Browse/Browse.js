import { Grid } from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import ImageCardWithContent from "../../components/ImageCardWithContent/ImageCardWithContent";
import { enviornment } from "../../enviornment/enviornment";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ImageCard from "../../components/ImageCard/ImageCard";
import InfiniteScroll from "react-infinite-scroll-component";
const Browse = () => {
  const [isViewColumn, setViewColum] = useState(true);
  const [offset, setOffset] = useState(20);
  const [hasMore, sethasMore] = useState(true);
  const [animeData, setAnimeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${enviornment.baseURL}anime?sort=popularityRank&page[limit]=20&page[offset]=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => {
          return resp.json();
        })
        .then((res) => {
          console.log(res);
          setAnimeData(res.data);
        });
    };
    fetchData();
  }, []);

  const fetchMoreAnimeData = async () => {
    const callAnimeApiwithNewOffset = await fetch(
      `${enviornment.baseURL}anime?sort=popularityRank&page[limit]=20&page[offset]=${offset}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await callAnimeApiwithNewOffset.json();
    return data;
  };

  const fetchData = async () => {
    const response = await fetchMoreAnimeData();
    console.log(response);
    setAnimeData([...animeData, ...response.data]);
    if (response.length === 0 || response.length < 20) {
      sethasMore(false);
    }
    setOffset((prev) => prev + 20);
  };

  const iconClickColumnHandler = () => {
    setViewColum(true);
  };

  const iconClickComfyHandler = () => {
    setViewColum(false);
  };

  return (
    <Fragment>
      <div style={{ textAlign: "right" }}>
        <ViewColumnIcon onClick={iconClickColumnHandler} />
        <ViewComfyIcon onClick={iconClickComfyHandler} />
      </div>

      {animeData && animeData.length && (
        <InfiniteScroll
          dataLength={animeData.length}
          hasMore={hasMore}
          next={fetchData}
          inverse={false}
        >
          <Grid container spacing={2}>
            {animeData.map((value) => {
              return isViewColumn ? (
                <ImageCardWithContent response={value} key={value.id} />
              ) : (
                <ImageCard response={value} key={value.id} />
              );
            })}
          </Grid>
        </InfiniteScroll>
      )}
    </Fragment>
  );
};

export default Browse;
