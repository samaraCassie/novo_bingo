<!-- eslint-disable no-console -->
<template>
  <q-page-container class="q-mt-lg">
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
                  <div class="q-mr-md q-ml-sm">
                    <q-btn @click="MaisCartela" label="+ Cartela" />
                  </div>
                  <div class="q-mr-lg q-ml-sm">
                    <q-btn @click="MenosCartela" label="- Cartela" />
                  </div>
                  <div class="q-mr-sm q-ml-lg col-1">
                    <q-field rounded outlined label="Quantidade" stack-label>
                      <template v-slot:control>
                        <div class="self-center full-width no-outline text-center q-pr-lg q-pl-lg" tabindex="0">{{ QntCartelas }}</div>
                      </template>
                    </q-field>
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
                    <q-btn @click="Cancelar">Cancelar</q-btn>
                  </div>
                  <div>
                    <q-btn @click="AddJogador">Adicionar Jogador</q-btn>
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
    <div class="row q-pa-lg q-ma-lg">
      <div class="col-6 q-mt-lg  q-pa-lg" v-for="(Cartela, index) in QntCartelas" :key="index">
        <CartelaAdd @itemCartela="GravarCartelas" class="q-ma-md" />
      </div>
    </div>
  </q-page-container>
</template>

<script setup lang="ts">
import { db } from '@/db';
import { ref } from 'vue';
import CartelaAdd from './CartelaAdd.vue';

const ListaCartelas = [null];
ListaCartelas.pop();

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

const GravarCartelas = (item) => {
  if (item != null) {
    ListaCartelas.push(item);
  }
};

const MaisCartela = () => {
  if (QntCartelas.value >= 4) {
    valid = false;
    status.value = 'Limitado à 4 cartelas.';
  } else {
    valid = true;
    status.value = '';
  }
  if (valid === true) {
    QntCartelas.value += 1;
  }
};

const MenosCartela = () => {
  if (QntCartelas.value <= 1) {
    valid = false;
    status.value = 'Não é possivel menos de uma cartela';
  } else {
    valid = true;
    status.value = '';
  }
  if (valid === true) {
    QntCartelas.value -= 1;
    ListaCartelas.pop();
  }
};

const AddJogador = async () => {
  if (!QntCartelas.value || QntCartelas.value === 0) {
    valid = false;
    status.value = 'Informe a quantidade de cartelas.';
  }
  if (!nomeJogador.value) {
    valid = false;
    status.value = 'Informe o nome do jogador.';
  }
  if (valid) {
    try {
      const id = await db.jogadores.add({
        Nome: nomeJogador.value,
        Cartelas: ListaCartelas,
      });
      status.value = `id: ${id}`;
    } catch (error) {
      status.value = `Falha ao adicionar a cartela: ${error}`;
    }
    console.log(nomeJogador.value);
    console.log(ListaCartelas.values);
  }
};

const Cancelar = async () => {
  try {
    nomeJogador.value = '';
    QntCartelas.value = 0;
    ListaCartelas.slice(0, ListaCartelas.length);
    status.value = '';
  } catch (error) {
    status.value = `Não foi possível cancelar: ${error}`;
  }
};

</script>
