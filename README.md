
<p align="center">
	<img src="https://avatars.githubusercontent.com/u/1424101?s=280&v=4" width=300px height=300px>
	<h1 align="center"> Atölye15 Internship Bootcamp Project: Taboo </h1>
		<p align="center">
			<b>This is the GitHub repository of my frontend project Taboo Game. Hope you like it!</b> 
		</p>  
</p>

## About :

This project aims to recreate the popular and fun part game Taboo. It is best played in a party face to face. Each team has 60 seconds to guess as many words without using the taboo words. After the 60 seconds is over if a team has passed 20 points they are declared the winners! Players have 3 actions. Pass, Guessed and Taboo.

<b>Pass:</b> Skips the question to get a new one. No points are lost. <br>
<b>Guessed:</b> Pressed when a player guesses the word correctly. That team gets 1 point. <br>
<b>Taboo:</b> Pressed when a player says a taboo word. That team gets -1 point. <br>

<h4>My way of getting unique data from JSON <h4> <br>
	
I stored the keys and values from the JSON file in separate arrays. I used a function that generates a random number between 0 and the length of the keys array. Then I store those numbers in an hashmap so i can do a constant lookup if we've already seen the number. I used a do while loop to check if the random num is in seenWordsArray.

![image](https://user-images.githubusercontent.com/59853931/149701972-d964b07b-b4a3-4f14-8971-dd751d5319f1.png)
![image](https://user-images.githubusercontent.com/59853931/149702048-afd18f64-fadb-4645-9a03-0c5f9ba6be1c.png)


## Technologies Used
- React
- Typescript 
- HTML
- CSS
- MaterialUI
- Jest
- React-Testing-Library
- Yarn
- Docker

## Q&A With Myself

### Why MaterialUI ?
I have used MaterialUI a ton and it's by far my most comfortable front-end component library. I know in Atölye it's not that commonly used but I decided to go with the best I know with. I also love how MaterialUI allows me to write CSS inside the React component.

### Why are the CSS files pretty empty ?
I mostly used MaterialUI's "makeStyles" function to write my CSS inside the React Component. It's same as writing it to an CSS file. I wanted to also include some small CSS files in styles folder so I can show that I can work both ways.

### Why did you want to use Typescript ?
Typescript is one of the most popular languages in the world of web development. It basically solves the problems of Javascript, most of them being detecting bugs. I noticed that Typescript is massively popular in Atölye so I wanted to use it.

### Why did you write a docker file ?
I thought using Docker would solve the "But it works on my machine" problem. I also love DevOps and I want to use Docker any time I can so I can learn more about it.

### Did you have fun ?
Yes I did have a ton of fun developing this. I always wanted to develop a party card game for my friends. Now I can have any kind of guessing game with just changing the JSON file.

## Running the Project using Node.js
1. clone the project using git clone
2. run yarn or yarn install
3. run yarn start
4. go to localhost:3000

## Running the Project using Docker
1. clone the project using git clone
2. run docker-compose up --build
3. go to localhost:3001

![image](https://user-images.githubusercontent.com/59853931/149702490-4978f152-89e5-4d67-a34d-8789d77ca3ff.png)


## Test Results

![image](https://user-images.githubusercontent.com/59853931/149701917-21cc190a-aec5-45b7-8c84-82596f865c33.png)
