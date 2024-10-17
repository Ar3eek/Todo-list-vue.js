<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  props: {
    todos: Array
  },
  methods: {
    toggleCompleted(index) {
      this.$emit('toggle-completed', index);
    },
    removeTodo(index) {
      this.$emit('remove-todo', index);
    },
    editTodo(index) {
      this.$emit('edit-todo', index);
    }
  }
};
</script>

<template>
  <ul class="mt-[20px] ">
    <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @toggle-completed="toggleCompleted"
        @remove-todo="removeTodo"
        @edit-todo="editTodo"
    />
  </ul>
</template>


<style>

</style>