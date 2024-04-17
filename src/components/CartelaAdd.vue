<!-- eslint-disable vue/max-len -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { db } from '@/db';
import { IndexableType } from 'dexie';

const emit = defineEmits(['itemCartela']);

const colunas : string[] = ['B', 'I', 'N', 'G', 'O'];
const numLinhas: number = 5;
const id = ref<IndexableType>(null);

const desserts: number[][] = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]];
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
    blocosMarcados = new Array(numLinhas).fill(colunas);
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    const NumerosSorteados:number[] = gerarNumerosUnicos(numLinhas, min, max);
    desserts[i] = NumerosSorteados;
    min += 15;
    max += 15;
  }

  return desserts;
};

const addCartela = async () => {
  try {
    await inicializarDesserts();
    id.value = await db.cartelas.add({
      Numeros: desserts,
      Marcados: blocosMarcados,
    });
    status.value = `nº ${id.value}`;
    emit('itemCartela', id.value);
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
  addCartela();
});

</script>

<template>
  <div class="row justify-center">
    <div>
      <q-card class="justify-center">
        <div class="row mr-10 ml-10 mb-10">
          <div class="col">
            <table class="q-pa-lg">
              <thead class="relative-position">
                <tr>
                  <th
                    class="text-center q-pa-md"
                    v-for="coluna in colunas"
                    :key="coluna"
                  >
                    <div>{{ coluna }}</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <td
                  v-for="(item, index) in desserts"
                  :key="index"
                >
                  <tr v-for="(numero, key) in item" :key="key">
                    <div class="q-pa-md text-center">
                      {{ numero }}
                    </div>
                  </tr>
                </td>
              </tbody>
              <tfoot class="relative-position">
                {{ status }}
              </tfoot>
            </table>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<style lang="css">
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
thead {
  font-size: 4.2vmin;
  color: rgb(141, 114, 114);
}

tbody {
  font-size: 3vmin;
}

</style>
