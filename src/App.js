import React from 'react';

import Profile from './assets/perfil.jpeg';

function App() {
	return (
		<div
			className="App"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
				height: '100vh',
			}}
		>
			<h1>Hello Amanda Merien, como vai??</h1>
			<img src={Profile} alt="" style={{ borderRadius: '50%' }} />
		</div>
	);
}

export default App;
