<script>
export default {
  props: {
    todo: Object,
    index: Number
  },
  methods: {
    toggleCompleted() {
      this.$emit('toggle-completed', this.index);
    },
    removeTodo() {
      this.$emit('remove-todo', this.index);
    },
    editTodo() {
      this.$emit('edit-todo', this.index);
    }
  }
};
</script>

<template>
  <li class="textarea border-none rounded-[5px] w-[500px] h-[50px] mb-[10px] flex justify-between pl-[10px] items-center"
      :style="{ backgroundColor: todo.backgroundColor }" :class="{ 'completed': todo.completed }" @click="toggleCompleted">
    <div class="flex order-1 h-full items-center">
      <img src="/src/assets/RemoveButton.svg" alt="remove" class="w-[18px] h-[18px] mr-[8px]" @click.stop="removeTodo">
      <img src="/src/assets/Edith.svg" alt="edit" class="w-[18px] h-[18px] mr-[8px]" @click.stop="editTodo">
    </div>
    <span>{{ todo.text }}</span>
  </li>
</template>



<style scoped>
.textarea {
  background: rgb(91,129,255);
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
  opacity: 0.5;
  cursor: pointer;
}
</style>
