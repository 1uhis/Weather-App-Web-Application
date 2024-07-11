import { useState, useEffect, ChangeEvent } from 'react';
import { optionType, forecastType } from '../types';

const useForecast = () => {
  const [city, setCity] = useState<optionType | null>(null);
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<optionType[]>([]);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getSearchOptions = async (term: string) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${term.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json();
      setOptions(data);
    } catch (error) {
      console.error('Error fetching search options:', error);
    }
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  const getForecast = (data: optionType) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      })
      .catch((error) => {
        console.error('Error fetching forecast:', error);
      });
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(e.target.value);

    if (value !== '') {
      getSearchOptions(value);
    }
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    forecast,
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange,
  };
};

export default useForecast;
