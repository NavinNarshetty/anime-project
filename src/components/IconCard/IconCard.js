import { Paper, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "12px",
    backgroundColor:'#0a1625',
    boxShadow:'none'
  },
  headerColor:{
    color:'#ecf6fe'
  },
  contentColor:{
    color:'#acd5f2'
  }
  
}));

const IconCard = (props) => {
  const classes = useStyles();
  return (
    <Grid item md={6} xs={12}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap"  alignItems="center"  spacing={2}>
          <Grid item >
            <Avatar>{props.iconval}</Avatar>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" className={classes.headerColor}>
              {props.header}
            </Typography>
            <Typography className={classes.contentColor}>{props.content}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default IconCard;
