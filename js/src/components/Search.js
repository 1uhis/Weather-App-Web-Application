import React from 'react';

function Suggestions({ options, onSelect }) {
  return (
    <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg overflow-hidden border-t-2 border-purple-600">
      {options.map((option, index) => (
        <li key={`${option.name}-${index}`}>
          <button
            className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-gray-800 focus:outline-none focus:bg-gray-100"
            onClick={() => onSelect(option)}
          >
            {option.name}, {option.country}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Search({ term, options, onInputChange, onOptionSelect, onSubmit }) {
  return (
    <section className="w-full max-w-screen-sm mx-auto p-8 bg-gradient-to-br from-pink-300 to-red-500 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-thin mb-4">Weather <span className="font-bold">App.js</span></h1>
      <p className="text-sm mb-6">Enter and select a city you want to know the weather from the dropdown.</p>

      <div className="relative">
        <input
          type="text"
          value={term}
          className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:bg-opacity-20"
          placeholder="Enter city name..."
          onChange={onInputChange}
        />

        {options.length > 0 && <Suggestions options={options} onSelect={onOptionSelect} />}
        
        <button
          className="absolute top-0 right-0 px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-opacity-80 focus:outline-none"
          onClick={onSubmit}
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default Search;
