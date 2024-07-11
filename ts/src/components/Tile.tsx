import React from 'react';
import Feels from './Icons/Feels';
import Humidity from './Icons/Humidity';
import Pop from './Icons/Pop';
import Pressure from './Icons/Pressure';
import Visibility from './Icons/Visibility';
import Wind from './Icons/Wind';
import Sunrise from './Icons/Sunrise';
import Sunset from './Icons/Sunset';

type IconType =
  | 'wind'
  | 'feels'
  | 'humidity'
  | 'visibility'
  | 'pressure'
  | 'pop'
  | 'sunrise'
  | 'sunset';

type Props = {
  icon: IconType;
  title: string;
  info: string | JSX.Element;
  description?: string | JSX.Element;
};

const icons: { [key in IconType]: React.ElementType } = {
  sunrise: Sunrise,
  sunset: Sunset,
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
};

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon];

  return (
    <article className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
      <div className="flex items-center text-sm font-bold">
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      {description && <div className="text-xs font-bold">{description}</div>}
    </article>
  );
};

export default Tile;

