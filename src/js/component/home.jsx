import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("");
	return (
		<div className='Semaforo'>
		  <div className={color==="luz roja"? "luz roja brillo": "luz roja"} onClick={() =>{
			setColor("luz roja")
		  }}></div>
		  <div className={color==="luz amarilla"? "luz amarilla brillo": "luz amarilla"} onClick={() =>{
			setColor("luz amarilla")
		  }}></div>
		  <div className={color==="luz verde"? "luz verde brillo": "luz verde"} onClick={() =>{
			setColor("luz verde")
		  }}></div>
		</div>


	);
}
	

export default Home;

