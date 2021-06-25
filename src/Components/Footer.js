
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        backgroundColor: "#968080",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%"
    }
})
const Footer = () => {
    const classes = useStyles()
    return (
        <div>
            <BottomNavigation className={classes.root}>
                <span style={{ color: "#fff", top: "1.5rem", left: "1rem", position: "relative" }}>
                    &copy;{new Date().getFullYear()}All Rights Reserved.ResumeMasters
                </span>
            </BottomNavigation>

        </div >
    )
}

export default Footer
