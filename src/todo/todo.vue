<template>
  <section class="real-app">
    <input 
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么"
      v-model="newContent"
      @keyup.enter="addTodo"
    />
    <item v-for="todo in filteredTodos" :todo="todo" :key="todo.id" @delete="deleteTodo"></item>
    <Tabs 
      :filter="filter" 
      :todos="todos" 
      @change="changeFilter" 
      @clearAllCompleted="clearAllCompleted"
    />
  </section>
</template>

<script>
import item from "./item.vue"
import Tabs from "./tabs.vue"
let id = 1
export default {
  data(){
    return {
      newContent: '',
      filter: 'all',
      todos: [
        {
          id: 0,
          content: 'this is todo1',
          completed: false
        },
        {
          id: 1,
          content: 'this is todo2',
          completed: true
        }
      ]
    }
  },
  methods: {
    addTodo() {
      let val = this.newContent.trim()
      if(val) {
        this.todos.unshift({
          id: ++id,
          content: val,
          completed: false
        })
        this.newContent = ''
      }  
    },
    deleteTodo(id){
      let index = 0
      this.todos.forEach(function(todo){
        if(todo.id==id){
          this.todos.splice(index,1)
          return
        }else{
          index++
        }
      }.bind(this))
    },
    changeFilter(filter){
      this.filter = filter 
    },
    clearAllCompleted() {
      this.todos = this.todos.filter((todo)=>!todo.completed)
    }
  },
  components: {
    item, Tabs
  },
  computed: {
    filteredTodos() {
      switch(this.filter){
        case 'all': 
          return this.todos
          break
        case 'active':
          return this.todos.filter((todo)=>!todo.completed)
          break
        case 'completed':
          return this.todos.filter(todo=>todo.completed)
          break
      }
    }
  },
  watch:{
    todos(newVal, oldVal){
      localStorage.setItem('todos', JSON.stringify(newVal))
    }
  },
  mounted(){
    if(localStorage.getItem('todos')){
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position relative
  width 600px
  height 50px
  line-height 50px
  padding-left 20px
  border-radius 4px 4px 0 0
  border 0
  font-size 24px
}
</style>


