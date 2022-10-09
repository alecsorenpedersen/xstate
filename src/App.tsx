import React from 'react';
import './App.css';
import { useMachine } from '@xstate/react';
import { trafficLightMachine } from './trafficLightMachine';

function App() {
	const [current, send] = useMachine(trafficLightMachine);
	return (
		<div className='container'>
			<div className='pole' />
			<div className='traffic-light'>
				<input
					type='radio'
					readOnly
					className='light red'
					checked={current.matches('red')}
				/>
				<input
					type='radio'
					readOnly
					className='light yellow'
					checked={current.matches('yellow')}
				/>
				<input
					type='radio'
					readOnly
					className='light green'
					checked={current.matches('green')}
				/>
				<button onClick={() => send('NEXT')}>NEXT</button>
			</div>
		</div>
	);
}
export default App;
