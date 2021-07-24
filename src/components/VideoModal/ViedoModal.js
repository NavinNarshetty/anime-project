import { Fragment } from "react";
import { CardMedia } from "@material-ui/core";
import { React } from "react";
import ReactDOM from 'react-dom';
import BackDrop from "../../UI/BackDrop/BackDrop";
import Modal from "../../UI/Modal/Modal";




const ViedoModal = (props)=>{
    const srcLink = `https://www.youtube.com/embed/${props.src}?autoplay=1&cc_load_policy=1`
    const modalbody=<iframe width="560" height="320" src={srcLink}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe>
    return (
        <Fragment>
            {
               ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById('overlay-container-root')) 
            }
            {
                ReactDOM.createPortal(<Modal title={null} body={modalbody} transparent={true} onConfirm={props.onConfirm}/>, document.getElementById('displaymodal-container') )
            }
        </Fragment>
    )
};

export default ViedoModal;