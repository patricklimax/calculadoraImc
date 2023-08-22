export type Level = {
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: number[] | string;
  yourImc?: number | string;
};

export const levels: Level[] = [
  { title: 'Magreza', color: '#E2E8F0', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#22C55E', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#EAB308', icon: 'down', imc: [25, 29.9] },
  { title: 'Obesidade', color: '#EF4444', icon: 'down', imc: [30, 99.9] },
];

export const calculateIMC = (height : number, weight: number) => {
  const imc = (weight / Math.pow(height, 2)).toFixed(2);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: Level = { ...levels[i] };

      levelCopy.yourImc = imc;
      
      return levelCopy;
    }
  }

  return null;
};
