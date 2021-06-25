import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/core/Menu"

const useStyles = makeStyles({
    root: {
        backgroundColor: "#968080",
        width: "100%"
    }
})
const TopHeader = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <span style={{ padding: "20px" }}><h3><NavLink exact activeClassName="active_class" to="/">About</NavLink></h3></span>
                    <span style={{ padding: "20px" }}><h3><NavLink activeClassName="active_class" to="/contact">Contact</NavLink></h3></span>
                    <span style={{ padding: "20px" }}><h3><NavLink activeClassName="active_class" to="/resume">Resume</NavLink></h3></span>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopHeader

