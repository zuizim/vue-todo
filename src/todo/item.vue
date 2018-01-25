<template>
  <div :class="['todo-item', todo.completed?'completed':'']">
    <label>
      <input 
        type="checkbox"
        class="toggle"
        v-model="todo.completed" @click="todo.completed=!todo.completed"
      >
      {{todo.content}}
    </label>
    <button class="destory" @click="deleteTodo(todo.id)"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo(id) {
      this.$emit('delete',id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.completed label{
  color #ccc
}
.todo-item{
  position relative 
  height 40px
  line-height 40px
  background #fff
  padding-left 20px
  font-size 24px
  border-bottom 1px solid rgba(0,0,0,0.06)
  button{
    display none
    border 0
    border-radius 50%    
  }
  &:hover{
    button{
      display inline
    }
    .destory:after{
      content 'x'
    }
  }
  
}

</style>





