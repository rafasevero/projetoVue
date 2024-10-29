<template>
  <!-- Container principal para os personagens -->
  <div class="characters-container">
    <!-- Para cada personagem na lista de personagens, renderiza um cartão -->
    <div class="card-characters" v-for="character in charactersData" :key="character._id">
      <!-- Exibe a foto do personagem -->
      <img :src="character.photo" :alt="character.name">
      <!-- Exibe o nome do personagem -->
      <h3>{{ character.name }}</h3>
      <!-- Exibe o status do personagem -->
      <div class="color">{{ character.status }}</div>
      <!-- Botão para favoritar/desfavoritar o personagem -->
      <button class="favorite-button" @click="toggleFavorite(character)">
        <!-- Exibe um coração preenchido se o personagem for favorito, caso contrário exibe um coração vazio -->
        <span :class="isFavorite(character) ? 'heart-filled' : 'heart-empty'">❤️</span>
      </button>
    </div>
  </div>
</template>

<script>
// Importa o serviço que busca os personagens
import { ShowCharacters } from '@/services/HttpService';

export default {
  name: "Characters",
  data() {
    return {
      // Armazena os dados dos personagens
      charactersData: [],
      // Carrega os favoritos do localStorage ou inicializa como um array vazio
      favorites: JSON.parse(localStorage.getItem("favorites")) || []
    };
  },
  async created() {
    // Método chamado quando o componente é criado
    const response = await ShowCharacters(); // Chama o serviço para obter os personagens
    this.charactersData = response.data; // Armazena os dados obtidos na variável charactersData
  },
  methods: {
    // Método para alternar o estado de favorito de um personagem
    toggleFavorite(character) {
      // Procura se o personagem já está na lista de favoritos
      const index = this.favorites.findIndex(fav => fav._id === character._id);
      if (index === -1) {
        // Se não estiver, adiciona aos favoritos
        this.favorites.push(character);
      } else {
        // Se já estiver, remove dos favoritos
        this.favorites.splice(index, 1);
      }
      // Salva a lista atualizada de favoritos no localStorage
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    // Método para verificar se um personagem é favorito
    isFavorite(character) {
      // Retorna verdadeiro se o personagem estiver na lista de favoritos
      return this.favorites.some(fav => fav._id === character._id);
    }
  }
};
</script>


<style scoped>
.characters-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-image: url(../../public/img/banner.jpg);
  background-size:contain;
  background-position:top;
}

.card-characters {
  position: relative;
  background: url(../../public/img/background.jpg);
  margin:15px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(2, 5, 168, 0.912);
  padding: 16px;
  width: 300px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-characters:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.card-characters img {
  width: 270px;
  height: 270px;
  border-radius: 12px;
  object-fit: cover;
  object-position: top;
  margin-bottom: 10px;
}

.card-characters h3 {
  font-size: 1.5rem;
  color: #3b3b3b;
  font-family: 'Georgia', serif;
}

.card-characters h3::after {
  content: '';
  display: block;
  width: 60px;
  height: 2px;
  background-color: #4a3f35;
  margin: 8px auto 0;
}

.favorite-button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ff6961; /* Cor do coração */
  margin-top: 10px;
}

.heart-filled {
  color: #ff6961;
}

.heart-empty {
  color: #ccc;
}
</style>