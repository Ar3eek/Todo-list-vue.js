<script>
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList
  },
  data() {
    return {
      newTodo: '',
      todos: [],
      editingIndex: null,
      editedTodo: '',
      isEditing: false,
      colors: [
        'rgb(91,129,255)',
        'rgb(252,167,69)',
        'rgb(116,70,182)',
        'rgb(240,40,219)'
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        const newTodo = {
          text: this.newTodo,
          backgroundColor: this.colors[this.todos.length % this.colors.length],
          completed: false,
        };
        this.todos.push(newTodo);
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    addKey(event) {
      if (event.key === 'Enter') {
        this.addTodo();
      }
      if(event.key === 'Enter') {
        this.saveTodo();
      }
    },
    editTodo(index) {
      this.editingIndex = index;
      this.editedTodo = this.todos[index].text;
      this.isEditing = true;
    },
    saveTodo() {
      if (this.editedTodo.trim() !== '') {
        this.todos[this.editingIndex].text = this.editedTodo;
        this.editingIndex = null;
        this.editedTodo = '';
        this.isEditing = false;
      }
    },
    toggleCompleted(index) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
};
</script>

<template>
  <div id="container" class="bg-blue-950 rounded-[20px] relative flex flex-col h-full min-h-[600px] sm:w-[550px] items-center shadow-2xl shadow-purple-700 pb-[20px]">
    <h3 class="text-[30px] pt-[20px] mb-[20px] flex">What's the Plan for Today?</h3>
    <label>
      <input type="text" class="w-[300px] h-[50px] pl-[15px] border border-blue-600 rounded-bl-[5px] rounded-tl-[5px]" v-model="newTodo" @keyup.enter="addKey" placeholder="Add a todo">
      <button @click="addTodo" class="rounded-none h-[50px] text-[0.9rem] bg-gradient-to-r from-blue-600 via-blue-600 to-purple-500 rounded-br-[5px] rounded-tr-[5px]">Add Todo</button>
    </label>
    <TodoList
        :todos="todos"
        @toggle-completed="toggleCompleted"
        @remove-todo="removeTodo"
        @edit-todo="editTodo"
    />
    <div v-if="isEditing" class="editarea bg-blue-950 rounded-[20px] absolute flex flex-col h-full min-h-[600px] w-full items-center shadow-2xl shadow-purple-700 pb-[20px]">
      <h3 class="text-[30px] pt-[20px] mb-[20px] flex justify-center">What's the Plan for Today?</h3>
      <label>
        <input type="text" class="w-[300px] h-[50px] pl-[15px] mb-[15px] border border-blue-600 rounded-bl-[5px] rounded-tl-[5px]" v-model="newTodo" @keyup.enter="addKey" placeholder="Add a todo">
        <button @click="addTodo" class="rounded-none h-[50px] text-[0.9rem] bg-gradient-to-r from-blue-600 via-blue-600 to-purple-500 rounded-br-[5px] rounded-tr-[5px]">Add Todo</button>
      </label>
      <label>
        <input type="text" v-model="editedTodo" @keyup.enter="addKey" placeholder="Edit todo" class="w-[300px] h-[50px] pl-[15px] border border-blue-600 rounded-bl-[5px] rounded-tl-[5px]">
        <button @click="saveTodo" class="rounded-none h-[50px] w-[100px] text-[0.9rem] bg-gradient-to-r from-blue-600 via-blue-600 to-purple-500 rounded-br-[5px] rounded-tr-[5px]">Update</button>
      </label>
    </div>
  </div>
</template>



<style scoped>
#container {
  background-color: #242424;
}
.editarea {
  background-color: #242424;
}
</style>
