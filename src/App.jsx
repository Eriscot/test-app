import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import FilterWrapper from './components/filter-wrapper/filter-wrapper.component';

const App = () => (
	<>
		<Header />
		<main>
			<FilterWrapper />
		</main>
	</>
);

export default App;
