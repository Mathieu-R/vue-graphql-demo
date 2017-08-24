<template>
  <div class="app">
    <div v-for="athlete in athletes">
      {{athlete.name}}<br>
      <span v-for="pb athlete.pb">{{pb.field }}- {{pb.perf}}</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import gql from 'graphql-tag';

  export default {
    apollo: {
      athletes: {
        query: gql`{
          athletes {
            firstname,
            lastname,
            sb {
              field
              perf
            }
            pb {
              field
              perf
            }
          }
        }`,
        prefetch: true // for ssr
    },
    data () {
      return {
        athletes: []
      }
    }
  }
</script>

<style lang="scss">

</style>

