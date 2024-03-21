<template>
  <q-page-container>
    <div class="row">
      <div class="col-12">
        <q-card>
          <div class="row">
            <div class="col-10">
              <div class="q-card-section">
                <div class="text-h3 q-pa-md">Hello</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <q-card-section>
                <div class="row">
                  <div class="col-10">
                    <q-input v-model="number" label="Nome do Jogador" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-10">
                    <q-input v-model="number" label="Quantidade de Cartelas" q />
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
                    <q-btn>Enviar</q-btn>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page-container>
</template>

<script setup lang="ts">
import { number } from 'zod';

</script>
