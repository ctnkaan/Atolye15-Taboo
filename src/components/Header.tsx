import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import WordsJSON from '../words.json'
import TeamScore from './PlayerScoreBoard';


//Material UI Stles
const useStyles = makeStyles((theme: any) => ({
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        margin: "0",
        padding: "0",
        marginTop: "1rem",
    },
    startButton: {
        textAlign: "center",
        margin: "0 auto",
        marginTop: "1rem",
        width: "20rem",
        height: "3.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        border: "none",
        borderRadius: "0.5rem",
    },
    buttonBox: {
        textAlign: "center",
        margin: "0 auto",
        marginTop: "1rem",
        width: "20rem",
        height: "5rem",
        fontSize: "1rem",
    },
    buttonDiv: {
        textAlign: "center",
        margin: "0 auto"
    },
    turnText: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        margin: "0",
        padding: "0",
        marginTop: "1rem",
        marginBottom: "5%"
    }
}));

//Modal Styles
const style = {
    position: 'absolute' as 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

//This function gets a random value between 0 and the length of the JSON file. It always get unique values.
function getRandomValue() {
    let randNum :number = 0;
    do {
        randNum = Math.floor(Math.random() * keysArr.length);
    } while (seenWords.has(randNum))

    seenWords.set(randNum, true);
    return randNum;
}

//keysArr is an array of all the keys in the JSON file.
const keysArr = Object.keys(WordsJSON);

//valueArr is an array of all the values in the JSON file.
const valuesArr = Object.values(WordsJSON);

//seenWords is an hahmap of all random numbers that have been generated. We are using a hashmap for O(1) lookup.
const seenWords = new Map();

//tabooWords is an array of all thhe words that are forbiden to be used.
let tabooWords :string[] = [];

//random number generator
let randNum :number = getRandomValue();



function Header() {
    //Word that needs to be guessed
    let currentWord = keysArr[randNum];

    //Material UI Styles
    const classes = useStyles();

    //Modal State
    const [open, setOpen] = React.useState(false);
    
    //false = team A
    //true = team B
    const [turn, setTurn] = React.useState(false);

    //Team A and B Scores
    const [teamA, setTeamA] = React.useState(0);
    const [teamB, setTeamB] = React.useState(0);

    //Modal Opens
    const handleOpen = () => {
        setOpen(true);
        currentWord = keysArr[randNum]
        valuesArr[randNum].forEach(element => tabooWords.push(element.toString()));
    };

    //Modal Closes
    const handleClose = () => {
        setOpen(false);
        tabooWords = [];
        randNum = getRandomValue();
    };

    //Click on Taboo button
    const handleTaboo = () => {
        if (!turn)
            setTeamA(teamA - 1);
        else 
            setTeamB(teamB - 1);
        handleClose();
        handleOpen();
    }

    //Click on Guessed button
    const handleGuessed = () => {
        if (!turn)
            setTeamA(teamA + 1);
        else
            setTeamB(teamB + 1);
        handleClose();
        handleOpen();
    }

    //Next teams turn
    const handleTurn = () => {
        setTurn(!turn)
    }

    return (
        <div>

            <h1 className={classes.title}>Taboo Game</h1>

            <Box className={classes.buttonBox}>
                <Button onClick={handleOpen} className={classes.startButton} variant="contained" color="success">Start Game!</Button>
            </Box>

            {
                turn ? <h3 className={classes.turnText}>-------- Team B's Turn -------- </h3> : <h3 className={classes.turnText}>-------- Team A's Turn --------</h3>
            }
            
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" id="modal-modal-title">
                        {currentWord}
                    </Typography>
                    <ul>
                        {tabooWords.map(element => {
                            return <li key={element}>{element}</li>
                        })}
                    </ul>
                    <div className={classes.buttonDiv}>
                        <Button onClick={handleClose} variant="contained" color="primary">Pass</Button>
                        <Button onClick={handleGuessed} variant="contained" color="success">Guessed</Button>
                        <Button onClick={handleTaboo} variant="contained" color="error">Taboo</Button>
                    </div>

                </Box>
            </Modal>

            <TeamScore teamName="Team A" score={teamA}/>
            <TeamScore teamName="Team B" score={teamB}/>

        </div>
    )
}

export default Header
