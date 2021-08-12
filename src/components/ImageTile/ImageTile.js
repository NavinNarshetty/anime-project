import { Fragment, useState } from "react";
import classes from "./ImageTile.module.css";
import {
  Grid,
  Paper,
  Card,
  Typography,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";


const useStyles = makeStyles({
  root: {
    transition: "all .7s ease-in",
  },
  cardHovered: {
    transform: "scale(1.3) translateX(10px)",
    cursor: "pointer",
  },
});

const ImageTile = (props) => {
  const [isContent, setContent] = useState(false);
  const  {response:cardResponse} = props;
  const style = useStyles();
  const Image = () => {
    return (
      <img
        alt="animeimage"
        className={classes.cardResponsive}
        src={cardResponse.attributes.posterImage.small}
      ></img>
    );
  };

  const onMouseOverImage = () => {
    setContent(true);
  };

  const onMouseLeveImage = () => {
    setContent(false);
  };

  const onRemovehandler= ()=>{
    props.onRemove(cardResponse.id)
  }

  const Content = () => {
    return (
      <div className={classes.cardContentHolder}>
        <Typography component="h4">
            {cardResponse.attributes.canonicalTitle}
        </Typography>
        <div className={classes.cardActionHolder}>
          <Tooltip title="Liked">
            <ThumbUpAltIcon />
          </Tooltip>
          <Tooltip title="Remove From list">
            <ThumbDownAltIcon onClick={onRemovehandler}/>
          </Tooltip>
          <Tooltip title="Watch Trailer">
            <PlayCircleFilledIcon />
          </Tooltip>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <Grid item xs={6} sm={2} >
        <Card
          elevation={0}
          className={style.root}
          classes={{
            root: isContent ? style.cardHovered : "",
          }}
          onMouseEnter={onMouseOverImage}
          onMouseLeave={onMouseLeveImage}
        >
          <Image />
          {isContent && <Content />}
        </Card>
      </Grid>
    </Fragment>
  );
};

export default ImageTile;
