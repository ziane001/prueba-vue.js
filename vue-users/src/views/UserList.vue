<script setup>
import { computed, onMounted, ref } from 'vue';
import { useUserStore } from '../store/userStore';
import { useRouter } from 'vue-router';

const store = useUserStore();
const searchQuery = ref('');
const router = useRouter();

// Filtrar usuarios según el texto ingresado
const filteredUsers = computed(() => {
  return store.users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Obtener usuarios cuando el componente se monta
onMounted(store.fetchUsers);
</script>

<template>
  <div class="container mt-4">
    <h1 class="mb-4">Lista de Usuarios</h1>

    <!-- Campo de búsqueda -->
    <input
      v-model="searchQuery"
      type="text"
      class="form-control mb-3"
      placeholder="Buscar usuario por nombre..."
    />

    <!-- Mensaje de carga -->
    <div v-if="store.isLoading" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>

    <!-- Lista de usuarios filtrados -->
    <div v-else class="list-group">
      <button
        v-for="user in filteredUsers"
        :key="user.id"
        class="list-group-item list-group-item-action"
        @click="router.push(`/user/${user.id}`)"
      >
        <strong>{{ user.name }}</strong> <br />
        <small>{{ user.email }} - {{ user.address.city }}</small>
      </button>
    </div>
  </div>
</template>
