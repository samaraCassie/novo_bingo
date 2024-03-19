/* eslint-disable no-console */

import { number } from 'zod';

/* eslint-disable vue/max-len */
export default {
  name: 'GerarNumeros',
  data() {
    return {
      colunas: ['B', 'I', 'N', 'G', 'O'] as string[],
      desserts: number[this.colunas.lenght][5],
      /* desserts: Array(5).fill({
        B: 0, I: 0, N: 0, G: 0, O: 0,
      }) as Record<string, number>[], */
      blocosMarcados: Array(5).fill({
        B: false, I: false, N: false, G: false, O: false,
      }) as Record<string, boolean>[],
    };
  },
  props: {
    // suas props aqui
  },
  methods: {
    sorteio(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    gerarNumerosUnicos(quantidade: number, min: number, max: number): number[] {
      const numerosUnicos = new Set<number>();
      while (numerosUnicos.size < quantidade) {
        const numeroSorteado = this.sorteio(min, max);
        numerosUnicos.add(numeroSorteado);
      }
      return Array.from(numerosUnicos);
    },
    inicializarDesserts(): void {
      const quantidade: number = 5;
      const min: number = 1;
      const max: number = 15;
      const currentDessert = this.desserts;
      /* for (let i = 0; i < this.desserts.length; i++) { */
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 5; i++) {
        /* Object.keys(currentDessert).forEach((coluna) => { */
        const NumerosSorteados:number[] = this.gerarNumerosUnicos(quantidade, min, max);

        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < NumerosSorteados.length; j++) {
          currentDessert[j] += `${NumerosSorteados[j]} |`;
          console.log(this.colunas[i] + currentDessert[j]);
          console.log(currentDessert);
        }
        /* NumerosSorteados.forEach((numero) => {
            if (currentDessert[coluna] !== '') {
              currentDessert[coluna] += ` / ${numero}`;
            } else {
              currentDessert[coluna] = numero.toString();
            }
          }); */
        console.log(this.desserts);
      }
      /* min += 15;
        max += 15; */
      return this.currentDessert;
    },

  },
  inicializarBlocosMarcados(): void {
    this.blocosMarcados = this.colunas.map((coluna: string) => this.colunas.reduce((acc, curr) => {
      acc[curr] = false; // Inicialize com valores booleanos padrão (false)
      console.log(`coluna ${coluna}`);
      return acc;
    }, {} as Record<string, boolean>));
  },
  marcarBloco(index: number, key: string): void {
    console.log('teste');
    /* this.blocosMarcados[key][index] = !this.blocosMarcados[key][index]; */
    console.log('Bloco Marcado: ');
    console.log(`this.blocosMarcados${this.blocosMarcados}`);
    console.log(`key${key}`);
    console.log(`Index${index}`);
    console.log(
      `this.blocosMarcados[index][key]${this.blocosMarcados[index][key]}`,
    );
  },
  desmarcarBloco(blocosMarcados:Record<string, boolean>, numero:number):void {
    console.log('AEEEE');
    this.blocosMarcados.fill(blocosMarcados, numero, true); // Atualize o estado para redefinir a marcação
    console.log(`Bloco Dessmarcadoo: ${blocosMarcados}${numero}`);
  },
  /* ToggleMarcar(blocosMarcados: Record<string, boolean>, numero: number): void {
      console.log('TESTE');
      if (blocosMarcados, numero) {
        this.marcarBloco(this.blocosMarcados, numero);
      } else {
        this.desmarcarBloco(this.blocosMarcados, numero);
      }
    }, */
  Teste(): void {
    console.log('Teste');
  },
};
