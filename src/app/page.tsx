'use client';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Paragraph } from '@/components/Paragraphs';
import { Square } from '@/components/Square';
import {
  ArrowLeftCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

import { levels, calculateIMC, Level } from '@/helpers/Imc';

export default function Home() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const headleCalculateIMC = () => {
    if (!heightField || !weightField) {
      alert('Obrigatório preencher todos os campos!')
    }
      setToShow(calculateIMC(heightField, weightField));
  };

  const handleBackBtn = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <main className="container mx-auto flex gap-4 min-h-screen flex-col items-center justify-center py-10 px-6 md:px-0">
      <Header />
      <div className="md:flex py-8 gap-10 justify-center">
        <section className="md:w-3/5 flex flex-col justify-between">
          <div>
            <Paragraph
              title={'O que é?'}
              paragraph={
                'IMC - Índice de Massa Corpórea, indicador adotado pela Organização Mundial de Saúde para calcular o peso ideal para cada indivíduo.'
              }
            />
            <Paragraph
              title={'Como é o cálculo'}
              paragraph={
                'O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado.'
              }
            />
            <Paragraph
              title={'Quer descobrir seu IMC?'}
              paragraph={
                'Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos (.) como separadores.'
              }
            />
          </div>
          <div className="flex gap-10 mb-4">
            <input
              className="w-1/2 bg-transparent border-0 border-b-2 border-green-900 placeholder:text-green-900/70 outline-none px-2 py-1 placeholder:text-sm disabled:opacity-90"
              type="number"
              placeholder="Altura (ex. 1.72 m)"
              onChange={(e) => setHeightField(parseFloat(e.target.value))}
              value={heightField > 0 ? heightField : ''}
              disabled={toShow ? true : false}
            />
            <input
              className="w-1/2 bg-transparent border-0 border-b-2 border-green-900 placeholder:text-green-900/70 outline-none px-2 py-1 placeholder:text-sm disabled:opacity-90"
              type="number"
              placeholder="Peso (ex. 68.2kg)"
              onChange={(e) => setWeightField(parseFloat(e.target.value))}
              value={weightField > 0 ? weightField : ''}
              disabled={toShow ? true : false}
            />
          </div>
          <button
            className="w-full flex items-center justify-center gap-2 p-3 mt-2 mb-7 md:mb-0 bg-green-900 text-green-300 text-lg rounded hover:bg-green-950 transition-all duration-500 ease-in-out disabled:opacity-90"
            disabled={toShow ? true : false}
            onClick={headleCalculateIMC}>
            Calcular <ArrowRightIcon className="h-6 w-6" />
          </button>
        </section>
        <section className="md:w-2/5 flex">
          {!toShow && (
            <div className="grid grid-cols-2 gap-1 flex-1 items-center justify-between">
              {levels.map((item, key) => (
                <Square key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className="flex h-full relative text-3xl w-full">
              <ArrowLeftCircleIcon
                onClick={handleBackBtn}
                className="h-14 w-14 absolute top-1/2 -translate-y-1/2 bg-green-900 rounded-full text-green-200"
              />
              <div className="flex w-full h-full">
                <Square item={toShow} />
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
