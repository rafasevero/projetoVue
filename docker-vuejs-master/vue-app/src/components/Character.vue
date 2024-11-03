<template>
  <div class="characters-container">
    <div class="card-characters" v-for="character in charactersData" :key="character._id">
    
      <img :src="character.photo" :alt="character.name">
      <h3>{{ character.name }}</h3>
      <div class="color">{{ character.status }}</div>
      <button class="favorite-button" @click="toggleFavorite(character)">
        <span :class="isFavorite(character) ? 'heart-filled' : 'heart-empty'">❤️</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ShowCharacters } from '@/services/HttpService';

export default {
  name: "Characters",
  data() {
    return {
      charactersData: [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || []
    };
  },
  async created() {
    const response = await ShowCharacters(); 
    this.charactersData = response.data; 
  },
  methods: {
    toggleFavorite(character) {
      const index = this.favorites.findIndex(fav => fav._id === character._id);
      if (index === -1) {
        this.favorites.push(character);
      } else {
        this.favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    isFavorite(character) {
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
  background-color: #222;
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
  color: #ff6961; 
  margin-top: 10px;
}

.heart-filled {
  color: #ff6961;
}

.heart-empty {
  color: #ccc;
}
</style>