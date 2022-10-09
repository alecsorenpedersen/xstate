import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMachine } from '@xstate/react';
import { trafficLightMachine } from './trafficLightMachine';

function App() {
	const [current, send] = useMachine(trafficLightMachine);
	return (
		<div className='traffic-light'>
			<input type='radio' readOnly className='light red' />
			<input type='radio' readOnly className='light yellow' />
			<input type='radio' readOnly className='light green ' />
			<button>Next</button>
		</div>
	);
}

export default App;
