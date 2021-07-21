import { Fragment } from "react";
import { List, ListItemText, ListItem } from "@material-ui/core";
import classes from "./AnimeSideNav.module.css";



const AnimeSideNav = (props) => {
  console.log("SIDENAV", props);
  const  animeInfo = props.animeDetails;
  return (
    <Fragment>
      <List component="ul" aria-label="rating index" className={classes.ratingIndexContainer}>
        <ListItem>
          <ListItemText primary={`Highest rated #${animeInfo.ratingRank}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Popularity rated #${animeInfo.popularityRank}`} />
        </ListItem>
      </List>
      <List component="ul" aria-label="anime details" className={classes.animeDetailsContainter}>
        <ListItem>
            <ListItemText primary="Format" secondary={animeInfo.subtype} />
            </ListItem>
            <ListItem>
            <ListItemText primary="Episodes" secondary={animeInfo.episodeCount} />
            </ListItem>
            <ListItem>
            <ListItemText primary="Episodes Duration"  secondary={animeInfo.episodeLength}/>
            </ListItem>
            <ListItem>
            <ListItemText primary="Status" secondary={animeInfo.status}/>
            </ListItem>
            <ListItem>
            <ListItemText primary="Start Date" secondary={animeInfo.startDate} />
            </ListItem>
            <ListItem>
            <ListItemText primary="End Date" secondary={animeInfo.endDate}/>
            </ListItem>
            <ListItem>
            <ListItemText primary="Average Score"  secondary={`${animeInfo.averageRating}%`}/>
            </ListItem>
            <ListItem>
            <ListItemText primary="User prefrence" secondary={animeInfo.userCount}  />
            </ListItem>
            <ListItem>
            <ListItemText primary="Favorites" secondary={animeInfo.favoritesCount}/>
            </ListItem>
            <ListItem>
            <ListItemText primary="Native Title" secondary={animeInfo.titles?.ja_jp} />
            </ListItem>
        </List>
    </Fragment>
  );
};

export default AnimeSideNav;
