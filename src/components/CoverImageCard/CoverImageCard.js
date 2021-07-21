import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    image:{
        objectFit:"cover"
    }
})

const CoverImageCard =(props)=>{
    const classes = useStyles()
    return (
        <Grid item xs={12}>
                <img alt={props.title} className={classes.image} src={props.src} height={props.height} width={props.width}></img>
        </Grid>
    )
}

export default CoverImageCard;