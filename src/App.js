import React, { Component } from 'react';
import Header from "./components/Header"
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";

import images from "./images.json";
import './App.css';
let score = 0;
let finalScore=0;
let message="Click one of the Gladiators to Start!";
let title=<div className="title">

<h1>Gladiators game</h1> 
<h2>Test your memory by clicking on one of  the images to stike the gladiators</h2>
<h3>Remember,you can only a the same gladiator once</h3>
</div>;






class App extends Component{
	state={
		images,
		score,
		finalScore,
		message,
		title,
		
		

	}
	//shuffle function to get random images
	shuffleArray = data => {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
	};
	// shuffling images when the page loads
	componentDidMount(){
		this.setState({ images: this.shuffleArray(this.state.images) });
		

		}


handleClick=id =>{
	
	const images= this.state.images;
	const clickedImage = images.filter(image => image.id === id);
	//when a gladiator that has already been clicked twice, the game rests itself and reorder the cards
	if(clickedImage[0].clicked){
		score++;
		
		for (let i = 0 ; i < images.length ; i++){
			images[i].clicked = false;
		}
		score=0;
		message="You already clicked on this Gladiator. You are done!";
		
this.setState({message});
this.setState({images});
this.setState({score});

//whenyou click on an unclicked gladiator, your score is increased and cards reordered
	}else if(score<15){
		clickedImage[0].clicked = true;

	  score++;
	  // set score to final score when the score > final score
	  if(score>finalScore){
		  finalScore=score;
		  this.setState({finalScore});
	  }
	   // Shuffle the array to be rendered in a random order
	   images.sort(function(a, b){return 0.5 - Math.random()});

	   // Set this.state.images equal to the new matches array
	   this.setState({ images});
	   this.setState({score});
	   
	  
	}else{
		images[0].clicked=true;
		score=15;

		
		this.setState({finalScore});
		
		
			
		  
		
		for (let i=0; i<images.length; i++) {
			images[i].clicked = false;
		  }
	
		  images.sort(function(a, b){return 0.5 - Math.random()});
	
		  this.setState({score});
		  this.setState({message});
		  this.setState({images});
		  
	}
	//need to fix when message when you win 15 out 15 pts
	/*()=>{
		if(this.state.score=15){
			alert("You striked all the gladiators. You are the new king of the arena!");
			
		}

		images.sort(function(a, b){return 0.5 - Math.random()});
	
		this.setState({score});
		this.setState({message});
		this.setState({images});
	}*/
}
render(){
	return(
		<Wrapper>
		
		<Header 
		score={this.state.score} 
		finalScore={this.state.finalScore}
		message={this.state.message}
		title={this.state.title}
		/>
		<div className={"card container"}>
			
				{this.state.images.map((images) =>
					<Cards
					handleClick={this.handleClick}
						id={images.id}
						key={images.id}
						image={images.image}
						selected={images.selected}
						
						 />)}
			
		</div>
	</Wrapper>);
}


	}
	
export default App;
