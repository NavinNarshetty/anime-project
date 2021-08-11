import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useHistory } from "react-router-dom";
const MainNavigation = ()=>{
    const history = useHistory()
    
    const goToHomeRoute =()=>{
        history.push(`/`)
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo} onClick={goToHomeRoute}>Anime Project</div>
            <nav className={classes.nav}>
                <ul>
                <li>
                        <NavLink activeClassName={classes.active}  alt="browse" to="/browse" >Browser</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} alt="social" to="/social">Social</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} alt="forum" to="/forum">Forum</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} alt="signup" to="/signup">Signup</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} alt="mylist" to="/mylist">MyList</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;