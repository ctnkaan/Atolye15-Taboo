import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    cardPlaceholder: {
        backgroundColor: "transparent",
        border: "2px solid black",
        width: "25%",
        height: "170px",
        left: "37.5%",
        top: "35%",
        position: "absolute",
    },
    text : {
        position: "absolute",
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
}));


function CardPlaceholder() {
    const classes = useStyles();
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 500;


    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         // subscribe to window resize event "onComponentDidMount"
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           // unsubscribe "onComponentDestroy"
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);

    if (width > breakpoint) {
        return (
        <div>
            <div data-testid="cardPH-div" className={classes.cardPlaceholder}>
                <h2 data-testid="cardPH-h2" className={classes.text}> Card Goes Here </h2>
            </div>
        </div>
     );
   }
   return ( <div/>)
}

export default CardPlaceholder
