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
}

function PlayerScoreBoard(props :PlayerData) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.playerCard}>
                <h1 className={classes.playerName}>{props.teamName}</h1>
                <h2>{props.score}</h2>
            </Card>
        </div>
    )
}

export default PlayerScoreBoard
