import { Level } from '@/helpers/Imc';
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';

type Props = {
  item: Level;
};

export const Square = ({ item }: Props) => {
  return (
    <div
      className="flex flex-col flex-1 gap-3 items-center justify-center p-4 rounded-md"
      style={{ backgroundColor: item.color }}>
      <div className="p-3 border-0 bg-slate-300/75 rounded-full">
        {item.icon === 'down' ? (
          <HandThumbDownIcon className="h-8 w-8" />
        ) : (
          <HandThumbUpIcon className="h-8 w-8" />
        )}
      </div>
      <div className="text-2xl font-bold">{item.title}</div>
      <div className="text-xs font-bold">{`IMC entre ${item.imc[0]} e ${item.imc[1]}`}</div>
      {item.yourImc && (
        <div className="mt-5 p-2 px-5 rounded-md bg-black/10 text-center text-base font-bold">
          Seu IMC é {item.yourImc} Kg/m²
        </div>
      )}
    </div>
  );
};
