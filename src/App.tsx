import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
