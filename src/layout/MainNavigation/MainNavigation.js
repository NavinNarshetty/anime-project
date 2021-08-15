import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
const MainNavigation = ()=>{
    const history = useHistory()
    const authCtxt = useContext(AuthContext);
    const isLogIn = authCtxt.isLoggedIn
    const goToHomeRoute =()=>{
        history.push(`/`)
    }

    return (
        <header className={classes.header}>
            {isLogIn && <div className={classes.logo} onClick={goToHomeRoute}>Anime Project</div>}
            <nav className={classes.nav}>
                <ul>
                    {isLogIn && <li>
                        <NavLink activeClassName={classes.active}  alt="browse" to="/browse" >Browser</NavLink>
                    </li>}
                    {isLogIn && <li>
                        <NavLink activeClassName={classes.active} alt="social" to="/social">Social</NavLink>
                    </li>}
                    {isLogIn && <li>
                        <NavLink activeClassName={classes.active} alt="forum" to="/forum">Forum</NavLink>
                    </li>}
                    {isLogIn && <li>
                        <NavLink activeClassName={classes.active} alt="mylist" to="/mylist">MyList</NavLink>
                    </li>}

                    {!isLogIn && <li>
                        <NavLink activeClassName={classes.active} alt="signup" to="/signup">Signup</NavLink>
                    </li>}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;