import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';

const useStyles = makeStyles(() => ({
    playerCard: {
        textAlign: "center",
        marginTop: "1rem",
        width: "10rem",
        height: "7rem",
        fontSize: "1rem",
    },
    playerName: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black",
        textDecoration: "underline"
    }
}));


interface PlayerData {
    teamName: string;
    score: number;
    turn: boolean;
}

function PlayerScoreBoard(props :PlayerData) {
    const classes = useStyles();

    const isItMyTurn = () => {
        //false == Team A
        //true == Team B
        if(props.turn) {
            if(props.teamName === "Team A") {
                return false;
            }

            if(props.teamName === "Team B") {
                return true;
            }
        }
        else if(props.teamName === "Team A")
            return true;

        return false;
    }

    

    return (
        <div>
            <Card data-testid="playerSB-card" style={{backgroundColor:isItMyTurn() ? "green": "white"}} className={classes.playerCard}>
                <h1 data-testid="playerSB-h1" className={classes.playerName}>{props.teamName}</h1>
                <h2 data-testid="playerSB-h2">{props.score}</h2>
            </Card>
        </div>
    )
}

export default PlayerScoreBoard
