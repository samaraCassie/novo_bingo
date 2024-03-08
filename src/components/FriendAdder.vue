<template>
  <fieldset>
    <legend>Add new friend</legend>
    <label>
      Name:
      <input v-model="friendName" type="text" />
    </label>
    <br />
    <label>
      Age:
      <input v-model="friendAge" type="number" />
    </label>
    <br />
    <button type="button" @click="addFriend">Add Friend</button>
    <p>{{ status }}</p>
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// Corrigindo o caminho do módulo db
import { db } from '../db';

const friendName = ref<string>('FriendAdder');
const friendAge = ref<number>(21);
const status = ref<string>('');

const addFriend = async () => {
  try {
    // Adicionar o novo amigo!
    const id = await db.friends.add({
      name: friendName.value,
      age: friendAge.value,
    });

    status.value = `Amigo ${friendName.value} adicionado com sucesso. ID: ${id}`;

    // Resetar o formulário:
    friendName.value = '';
    friendAge.value = null;
  } catch (error) {
    status.value = `Falha ao adicionar ${friendName.value}: ${error}`;
  }
  return {
    status,
    friendName,
    friendAge,
    addFriend,
  };
};
</script>
