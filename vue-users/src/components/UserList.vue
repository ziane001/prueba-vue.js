<!-- src/components/UserList.vue -->
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
    <div v-if="isLoading" class="text-center">
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
        @click="$router.push(`/user/${user.id}`)"
      >
        <strong>{{ user.name }}</strong> <br />
        <small>{{ user.email }} - {{ user.address.city }}</small>
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useUserStore } from '../store/userStore';

export default {
  name: 'UserList',
  setup() {
    const store = useUserStore();
    const searchQuery = ref('');

    const filteredUsers = computed(() => {
      return store.users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    onMounted(store.fetchUsers);

    return {
      searchQuery,
      filteredUsers,
      isLoading: store.isLoading
    };
  }
};
</script>

<style scoped>
/* Aquí puedes agregar más estilos si lo necesitas */
</style>
