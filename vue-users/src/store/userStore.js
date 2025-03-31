import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useUserStore = defineStore('userStore', () => {
  const users = ref([]);
  const isLoading = ref(false);

  const fetchUsers = async () => {
    if (users.value.length === 0) { // Evita llamadas innecesarias
      isLoading.value = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        users.value = response.data;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      } finally {
        isLoading.value = false;
      }
    }
  };

  return { users, isLoading, fetchUsers };
});
