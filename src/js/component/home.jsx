import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {

	// Declaración de stocks
	const [task, addTask]=useState("")

	// function newTask(event)	{
	// 	addTask(event.target.value);
	// }


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">To Do List</h1>
			<input class="form-control form-control-lg" onChange={(event)=>newTask(event.target.value)} type="text" placeholder="New Task" aria-label=".form-control-lg example"></input>
		</div>
	);
};

export default Home;
