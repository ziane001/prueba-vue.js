<!-- src/components/UserDetails.vue -->
<template>
  <div class="container mt-4">
    <div v-if="user">
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
          <router-link to="/" class="btn btn-secondary mt-3">Volver a la lista</router-link>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '../store/userStore';

export default {
  name: 'UserDetails',
  setup() {
    const route = useRoute();
    const store = useUserStore();
    
    const user = computed(() => store.users.find(u => u.id == route.params.id));

    return {
      user
    };
  }
};
</script>

<style scoped>
/* personalizacion de estilos */
</style>
