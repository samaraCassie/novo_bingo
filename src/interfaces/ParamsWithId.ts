import { ref } from 'vue';
import { db } from '../db';

const status = ref<string>('');
export const addTodo = async (newTodo: { value: string; }) => {
  try {
    // Adicionar o novo amigo!
    const id = await db.todos.add({
      content: newTodo.value,
      done: false,
    });

    status.value = `Amigo ${newTodo.value} adicionado com sucesso. ID: ${id}`;

    // Resetar o formulário: newTodo.value = '';
  } catch (error) {
    status.value = `Falha ao adicionar ${newTodo.value}: ${error}`;
  }
  return {
    status,
    newTodo,
  };
};

export default 'addTodo';
/* import * as z from 'zod';

export type ParamsWithId = z.infer<typeof ParamsWithId>;
*/
