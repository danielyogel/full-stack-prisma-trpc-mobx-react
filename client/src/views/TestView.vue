<script setup lang="ts">
import { api } from "../api";
import { ref } from "vue";
import type { Person } from ".prisma/client";

const persons = ref([] as Person[]);
getPersons();

async function addPerson() {
  await api.mutation("create");
  await getPersons();
}

async function getPersons() {
  persons.value = await api.query("getPeople");
}

async function deleteAllPersons() {
  await api.mutation("deleteAll");
  await getPersons();
}
</script>

<template>
  <main>
    <div class="buttons">
      <el-button type="success" @click="addPerson">Add Person</el-button>
      <el-button type="danger" @click="deleteAllPersons">Delete All Persons</el-button>
    </div>
    <el-card class="card">Persons: {{ persons.length }}</el-card>
    <el-card v-for="p in persons" :key="p.id" class="box-card card">
      <div>
        <span>name: {{ p.name }}</span>
      </div>
    </el-card>
  </main>
</template>

<style scoped>
.buttons {
  margin-bottom: 2vh;
}
.card {
  margin-bottom: 2vh;
}
</style>
