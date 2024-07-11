import Weather from './components/Weather';
import Search from './components/Search';
import useForecast from './components/hooks/useForecast';

const App = () => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } = useForecast();

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 h-[100vh] w-full">
      {forecast ? (
        <Weather data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;

