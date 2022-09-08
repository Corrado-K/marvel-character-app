import React, { useRef } from 'react';

// import util
import { fetchHeroes } from '../utils/utils';
import Button from './Button';


export default function Searchbar({ handleClicker, setHeroes, setError}) {
	let input = useRef('');
	

	const handleClick= (e) => {
		handleClicker(e, input.current.value)
		.then((data) => setHeroes(data.data.results))
		.catch((err) => setError(err));
		// let data = input.current.value;
		// data = setHeroes(data.data.results)

	};

	return (
		<form className='text-center'>
			<input className='p-2 border-2 border-black rounded-md w-72 md:w-96' type="text" placeholder="Search hero..." ref={input} />
			{/* <button className='bg-red-700 p-2 text-lg text-white ml-3 rounded-md' onClick={handleClick}>Search</button> */}
			<button className='bg-red-700 p-2 text-lg text-white ml-3 rounded-md' onClick={handleClick}>Search</button>
			{/* <Button
				text={"Search"}
				handleClick={(e) => {
					handleClick(e, input.current.value)
					.then((data) => setHeroes(data.data.results))
					.catch((err) => setError(err));
				}}
			/> */}
		</form>
	);
}
