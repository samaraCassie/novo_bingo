<!-- eslint-disable no-console -->
<!-- eslint-disable no-console -->
<template>
  <q-page-container>
    <div class="row">
      <div class="col-12">
        <q-card>
          <div class="row">
            <div class="col-10">
              <div class="q-card-section">
                <div class="text-h3 q-pa-md">Bingo</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <q-card-section>
                <div class="row">
                  <div class="col-10">
                    <q-input v-model="nomeJogador" :rules="nomeJogadorRules" label="Nome do Jogador" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <q-btn @click="MaisCartela" label="+ Cartela" q />
                  </div>
                  <div class="col-10">
                    <div>{{ QntCartelas }}</div>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <q-card-section>
                <div class="row">
                  <div class="q-mr-md">
                    <q-btn>Cancelar</q-btn>
                  </div>
                  <div>
                    <q-btn @click="Enviar">Enviar</q-btn>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-card-section>
                {{ status }}
              </q-card-section>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div class="row q-pa-lg">
      <div class="col-6 q-mt-lg  q-pa-lg" v-for="(Cartela, index) in QntCartelas" :key="index">
        <CartelaAdd />
      </div>
    </div>
  </q-page-container>
</template>

<script setup lang="ts">
import { db } from '@/db';
import { ref } from 'vue';
import CartelaAdd from './CartelaAdd.vue';

const Props = defineProps({
  valorId: {
    type: String,
    required: true,
  },
});

console.log(Props);

let valid:boolean = false;
const status = ref<string>('');
const nomeJogador = ref('');
const nomeJogadorRules = [
  (value) => {
    if (!value) return 'Informe o Nome.';
    valid = true;
    return valid;
  },
  (value) => {
    if (value?.length > 20) return 'Nome deve ter menos de 20 caracteres.';
    valid = true;
    return valid;
  },
];
const QntCartelas = ref(null);
/* const QntCartelasRules = [
  (value) => {
    if (!value) return 'Informe a quantidade de cartelas.';
    valid = true;
    return valid;
  },
 (value) => {
    if (value > 5) return 'Limitado à 4 cartelas.';
    valid = true;
    return valid;
  },
]; */

const MaisCartela = () => {
  QntCartelas.value += 1;
};

const Enviar = async () => {
  if (valid) {
    try {
      // eslint-disable-next-line no-plusplus
      /* for (let i = 0; i <= QntCartelas.value; i++) {
      } */
      const id = await db.jogadores.add({
        Nome: nomeJogador.value,
        Cartelas: QntCartelas.value,
      });
      status.value = `id: ${id}`;
    } catch (error) {
      status.value = `Falha ao adicionar a cartela: ${error}`;
    }
    console.log(nomeJogador.value);
    console.log(QntCartelas.value);
  }
};

</script>
