<!-- eslint-disable vue/max-len -->
<!-- eslint-disable no-console -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { db } from '@/db';

const colunas : string[] = ['B', 'I', 'N', 'G', 'O'];
const numLinhas: number = 5;

// Inicializando a matriz desserts com zeros
// eslint-disable-next-line vue/max-len
// let num: number[][] = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
const desserts: number[][] = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
const status = ref<string>('');
let blocosMarcados: boolean[][];

// eslint-disable-next-line arrow-body-style
const sorteio = (min: number, max: number) : number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const gerarNumerosUnicos = (quantidade: number, min: number, max: number): number[] => {
  const numerosUnicos = new Set<number>();
  while (numerosUnicos.size < quantidade) {
    const numeroSorteado = sorteio(min, max);
    numerosUnicos.add(numeroSorteado);
  }
  return Array.from(numerosUnicos);
};

const inicializarDesserts = (): number[][] => {
  let min: number = 1;
  let max: number = 15;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numLinhas; i++) {
    // desserts = new Array(numLinhas).fill(colunas);
    blocosMarcados = new Array(numLinhas).fill(colunas);
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    const NumerosSorteados:number[] = gerarNumerosUnicos(numLinhas, min, max);
    desserts[i] = NumerosSorteados;
    console.log(desserts[i]);
    console.log(desserts);
    min += 15;
    max += 15;
  }

  return desserts;
};

const addCartela = async () => {
  try {
    await inicializarDesserts();
    console.log(desserts.values);
    const id = await db.cartelas.add({
      Numeros: desserts,
      Marcados: blocosMarcados,
    });
    status.value = `Cartela adicionada com sucesso com o id: ${id} e valores: ${desserts}`;
  } catch (error) {
    status.value = `Falha ao adicionar a cartela: ${error}`;
  }
  return {
    addCartela,
    status,
  };
};

onMounted(() => {
  inicializarDesserts();
});
</script>

<template>
  <div>
    <section>
      <div class="row mr-10 ml-10 mb-10">
        <v-col cols="12" class="align-center">
          <v-table class="v-theme--dark">
            <thead>
              <tr>
                <th
                  class="text-center"
                  v-for="coluna in colunas"
                  :key="coluna"
                >
                  <v-col>{{ coluna }}</v-col>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in desserts"
                :key="index"
              >
                <td v-for="(numero, key) in item" :key="key">
                  <div>
                    {{ numero }}
                  </div>
                </td>
              </tr>
            </tbody>
            <div>{{ status }}</div>
          </v-table>
        </v-col>
      </div>
      <section class="secBotoes">
        <button type="button" @click="addCartela">Adicionar Cartela</button>
      </section>
    </section>
  </div>
</template>

<style lang="css">
</style>
