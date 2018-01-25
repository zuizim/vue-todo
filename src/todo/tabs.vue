<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states" 
        :key="state" 
        :class="state===filter?'active':''"
        @click="changeFilter(state)"
      >{{state}}</span>
    </span>
    <span class="right" @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter:{
      type: String,
      required: true
    }, 
    todos:{
      type: Array,
      required: true
    }
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter((todo)=>{return !todo.completed}).length
    }
  },
  data() {
    return {
      states: 'all active completed'.split(' ')
    }
  },
  
  methods:{
    changeFilter(state){
      this.$emit('change', state)
    },
    clearAllCompleted(){
      this.$emit('clearAllCompleted')
    }
  }
}
</script>

<style lang="stylus" scoped>
.helper{
  border-top 1px solid #cccccc
  background #ffffff
  height 30px
  line-height 30px
  font-size 11px
  padding 0 20px
  flex align-self auto
  .left{
    float left
  }
  .tabs{
    padding-left 30px
    span{
      padding 1px 3px
      margin-left 4px
      border 1px solid transparent
      border-radius 3px
      cursor pointer
    }
    .active{
      border-color #f99
      background #eef
    }
  }
  .right{
    float right
    cursor pointer
  }  
}
</style>


