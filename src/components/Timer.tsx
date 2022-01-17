import React from 'react'
import useCountDown from 'react-countdown-hook';
import { makeStyles } from "@material-ui/core/styles";

//milliseconds
const initialTime = 60000; 
const interval = 1000;


//Material UI Stles
const useStyles = makeStyles((theme: any) => ({
    timer: {
        borderRadius: "50%",
        width: "10rem",
        height: "10rem",
        textAlign: "center",
        fontSize: "3.2rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "black",
        margin: "0 auto",
        marginTop: "2.5%",
        padding: "0",
    }
}));

interface Props {
    open: boolean;
    setTurn: Function;
    turn: boolean;
    handleClose: Function;
}


function Timer(props: Props) {

    const classes = useStyles();

    const [timeLeft, { start, reset }] = useCountDown(initialTime, interval);

    //Next teams turn
    const handleTurn = () => {
        props.setTurn(!props.turn)
    }

    //Start the timer when the modal opens
    React.useEffect(() => {
        if (props.open)
            start();
    }, [props.open, start]);


    //switch teams when timeleft hits 0
    React.useEffect(() => {
        if (timeLeft === 0) {
            reset();
            handleTurn();
            props.handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft, reset]);




    return (
        <div data-testid="timer-card" className={classes.timer}>
            <h1 data-testid="timer-h1">{timeLeft / 1000}</h1>
        </div>
    )
}

export default Timer
