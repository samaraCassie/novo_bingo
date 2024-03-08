const sorteio = (min : number, max: number) : number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
},

const numerosUnicos = (quantidade : number, min: number, max : number) : number[] => {
  const numerosUnicos : Set<number> = new Set();
  while (numerosUnicos.size < quantidade) {
    const numeroSorteado = sorteio(min, max);
    numerosUnicos.add(numeroSorteado);
  }
  return Array.from(numerosUnicos);
},

const inicializarDesserts = () => {
  const quantidade : number = 1;
  let min : number = 1;
  let max : number = 15;
  for (let i = 0; i < this.desserts.length; i++) {
    for (let coluna in this.desserts[i]) {
      const listaNumerosSorteados : number[] = numerosUnicos(
        quantidade,
        min,
        max
      );
      this.desserts[i][coluna] = "";
      for (let j = 0; j < listaNumerosSorteados.length; j++) {
        if (this.desserts[i][coluna] !== "") {
          this.desserts[i][coluna] += " / " + listaNumerosSorteados[j];
        } else {
          this.desserts[i][coluna] = listaNumerosSorteados[j];
        }
      }
      min += 15;
      max += 15;
    }
  }
  console.log(this.desserts);
},

const inicializarBlocosMarcados = () => {
  this.blocosMarcados = this.colunas.map((coluna) => {
    return this.colunas.reduce((acc, curr) => {
      acc[curr] = false; // Inicialize com valores booleanos padrão (false)
      console.log("coluna " + coluna);
      return acc;
    }, {});
  });
},

const marcarBloco = (index : number, key : number) => {
  console.log("teste");
  /* this.blocosMarcados[key][index] = !this.blocosMarcados[key][index];*/
  console.log(`Bloco Marcado: `);
  console.log(`this.blocosMarcados` + this.blocosMarcados);
  console.log(`key` + key);
  console.log(`Index` + index);
  console.log(
    `this.blocosMarcados[index][key]` + this.blocosMarcados[index][key]
  );
},

const desmarcarBloco = (blocosMarcados, numero) => {
  console.log("AEEEE");
  this.blocosMarcados.fill(blocosMarcados, numero, true); // Atualize o estado para redefinir a marcação
  console.log(`Bloco Dessmarcadoo: ` + blocosMarcados + numero);
},

const ToggleMarcar = (blocosMarcados : number, numero : number) => {
  console.log("TESTE");
  if ((numero)) {
    marcarBloco(blocosMarcados, numero);
  } else {
    desmarcarBloco(blocosMarcados, numero);
  }
},
const Teste = () : void => {
  console.log("Teste");
};
}