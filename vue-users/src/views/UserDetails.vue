<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '../store/userStore';

const route = useRoute();
const store = useUserStore();

// Obtener usuarios al cargar la página (si no se han cargado antes)
onMounted(store.fetchUsers);

// Buscar el usuario en la lista
const user = computed(() => store.users.find(u => u.id == route.params.id));
</script>

<template>
  <div class="container mt-4">
    <div v-if="user" class="row justify-content-center">
      <!-- Tarjeta de detalles del usuario -->
      <div class="col-md-8">
        <div class="card shadow-lg border-light">
          <div class="card-header bg-primary text-white">
            <h4>{{ user.name }}</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <p><strong>Email:</strong> {{ user.email }}</p>
                <p><strong>Teléfono:</strong> {{ user.phone }}</p>
                <p><strong>Ciudad:</strong> {{ user.address.city }}</p>
              </div>
              <div class="col-md-6">
                <p><strong>Dirección:</strong> {{ user.address.street }}, {{ user.address.suite }}</p>
                <p><strong>Código Postal:</strong> {{ user.address.zipcode }}</p>
                <p><strong>Empresa:</strong> {{ user.company.name }}</p>
              </div>
            </div>
            <!-- Botón para volver a la lista -->
            <router-link to="/" class="btn btn-secondary mt-3">Volver a la lista</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Mensaje de carga -->
    <div v-else class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1rem;
}

.card-header {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.card-body {
  background-color: #f8f9fa;
}
</style>
