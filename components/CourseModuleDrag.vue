<template>
  <draggable :element="'ul'" :list="tasks" class="dragArea  list-bare" :options="{group:{ name: 'g1'}}" @end="updateLesson">
    <li v-for="el in tasks" class="list-bare__item">
      <div class="card">
        <div class="card__body">
          <h3 class="card__title">{{ el.name }}</h3>
        </div>
        <div class="card__actions"></div>
      </div>
      <course-module-drag v-if="el.type == 'module'" :tasks="el.lessons" :options="{group:{ name: 'lessons', put: ['lessons'] }}"></course-module-drag>
    </li>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'course-module-drag',
    props: ['tasks'],
    components: {
      draggable
    },
    methods: {
      updateLesson(evt) {
        console.log('updated')
        console.log(evt)
      }
    }
  }
</script>

<style lang="scss" scoped>
.dragArea {
  min-height: 20px;
}

.card {
  display: flex;
  background: #444E76;
  border-radius: 5px;
  border: 1px solid #475179;
  padding: 10px;
  margin-bottom: 5px;
  box-shadow: 0 0px 5px rgba(35, 43, 67, 1);

  .sortable-ghost & {
    background: #354063;
    border-left: 3px solid #697CFF;
  }

  + .dragArea {
    padding: 10px 15px;
  }
}

.card__body {
  padding: 0;
}

.card__title {
  margin: 0;
}
</style>
