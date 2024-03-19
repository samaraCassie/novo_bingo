import Dexie, { Table } from 'dexie';

export interface Friend {
  id?: number;
  name: string;
  age: number;
}

export interface Todo {
  id?: number;
  content: string;
  done: boolean;
}

export interface Jogador {
  Id?: number;
  Cartelas: number[];
}

export interface Cartela {
  Id?: number;
  Numeros: number[][];
  Marcados: boolean[][];
}

export class MySubClassedDexie extends Dexie {
  friends!: Table<Friend>;

  todos!: Table<Todo>;

  jogadores!: Table<Jogador>;

  cartelas!: Table<Cartela>;

  constructor() {
    super('TestandoDexie');
    this.version(2).stores({
      friends: '++id, name, age',
      todos: '++id, content, done',
      jogadores: '++id, nome, cartelas',
      cartelas: '++id, coluna, numeros, marcados',
    });
  }
}

export const db = new MySubClassedDexie();
