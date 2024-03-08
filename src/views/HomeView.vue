<template>
  <div class="row">
    <div class="col">
      <q-card>

        <q-card-section>
          <div class="text-h1 text-center">Hello Word</div>
        </q-card-section>

        <q-card-section>
          <div class="q-gutter-sm">
            <div class="row justify-center">
              <div class="col-6">
                <q-input filled v-model="QntJogadores" label="Jogador" type="text" />
              </div>
            </div>
            <div class="row justify-center">
              <div class="col-6">
                <q-input filled v-model="QntCartelas" label="Quantidade de Tabelas" type="number" />
              </div>
            </div>
          </div>
        </q-card-section>

        <div class="row justify-center">
          <div class="col-6">
            <q-card-section>
              <div class="row q-gutter-sm">
                <div class=" right">
                  <q-btn color="Cancelar" label="Cancelar" />
                </div>
                <div class="col">
                  <q-btn type="button" color="primary" label="Enviar" />
                </div>
              </div>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
/* import { db } from '../db'; */

/* const maximoJogadores = ref<number>(5); */
const QntCartelas = ref<number>(null);
const QntJogadores = ref<string>('');
/* const status = ref<string>('');
const Colunas = ref<string[]>(['B', 'I', 'N', 'G', 'O']); */
/* const i = ref<number>(0); */

/* const addCartela = async () => {
  try {
    const id = await db.cartelas.add({

    })
  } catch (error) {
    status.value = `Falha ao adicionar a cartela ao ${QntJogadores.value}: ${error}`;
  }
},
 */
/* const addJogador = async () => {
  try {
      const id = await db.jogadores.add({
      Cartelas: QntCartelas.value,
    });

    status.value = `Jogadores adicionado com sucesso. id: ${id}`;

    // Resetar o formulário:
    QntJogadores.value = '';
    QntCartelas.value = null;
  } catch (error) {
    status.value = `Falha ao adicionar a cartela ao ${QntJogadores.value}: ${error}`;
  }
}; */
</script>
