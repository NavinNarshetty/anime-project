import { Typography } from "@material-ui/core";
import { Fragment } from "react";


const ContentWithTitle =(props)=>{
    return (
        <Fragment>
            <h3>{props.title}</h3>
             <Typography component="p">
                {props.content}
             </Typography>
        </Fragment>
       
    )
}

export default ContentWithTitle;