import React from 'react'
import useCountDown from 'react-countdown-hook';
import { makeStyles } from "@material-ui/core/styles";


const initialTime = 20000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000


//Material UI Stles
const useStyles = makeStyles((theme: any) => ({
    timer: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        margin: "0",
        padding: "0",
        marginTop: "1rem",
    }
}));


function Timer({open, setTurn, turn, handleClose}: {open: boolean, setTurn: Function, turn: boolean, handleClose: Function}) {

    const classes = useStyles();

    const [timeLeft, { start, reset }] = useCountDown(initialTime, interval);

    //Next teams turn
    const handleTurn = () => {
        setTurn(!turn)
    }

    React.useEffect(() => {
        if (open)
            start();
    }, [open, start]);

    //switch teams when timeleft hits 0
    React.useEffect(() => {
        if (timeLeft === 0) {
            reset();
            handleTurn();
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft, reset]);




    return (
        <div className={classes.timer}>
            {timeLeft / 1000}
        </div>
    )
}

export default Timer
