<template>
  <div class="wrapper">
    <header class="page-head">
      <div class="page-head__title">
        <h2>Course Title</h2>
      </div>
    </header>
    <div class="page-content">
      <button @click="addModule">Add Module</button>
      <button @click="addLesson">Add Lesson</button>
      <button @click="saveCourse">Save Course</button>
      <course-module-drag :tasks="modules"></course-module-drag>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

  export default {
    components: {
      draggable
    },
    data() {
      return {
        modules: []
      }
    },
    methods: {
      addModule() {
        let newMod = { name: "New Module", lessons: [], type: "module" }
        this.modules.push(newMod)
      },
      addLesson() {
        let newLesson = { name: "New Lesson", type: "lesson" }
        this.modules.push(newLesson)
      },
      saveCourse() {
        console.log(this.modules)
      }
    }
  }
</script>

<style lang="scss" scoped>
h2 {
  border: 2px solid #313A58;
  border-radius: 5px;
  display: inline-block;
  padding: 5px 10px;
}
</style>
