import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import Filter from './components/filter/filter.component';

const App = () => (
	<>
		<Header />
		<main>
			<aside>
				<Filter />
			</aside>
		</main>
	</>
)

export default App;
