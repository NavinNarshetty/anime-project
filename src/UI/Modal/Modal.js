import {  Card } from "@material-ui/core";
import classes  from "./Modal.module.css";
const Modal = (props) => {
  const bgValue = props.transparent ? 'transparent' : ''
  return (
    <Card className={classes.modal} style={{
      background: bgValue,
    }}>
      {props.title && <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>}
      <div className={classes.content} >
      {props.body}
      </div>
      {props.actions && <footer className={classes.actions}>
        <button type="button">Okay</button>
      </footer>}
    </Card>
  );
};

export default Modal;
