<template>
  <div class="favorites-container">
    <h2>Favoritos</h2>
    
    <div class="characters-container">
      <div class="card-characters" v-for="character in favorites" :key="character._id">
        <img :src="character.photo" :alt="character.name">
        <h3>{{ character.name }}</h3>
        <div class="color">{{ character.status }}</div>
        <button class="favorite-button" @click="removeFavorite(character._id)">
          <span class="heart-filled">❤️</span>
        </button>
      </div>
    </div>
    
    <div v-if="favorites.length === 0">Nenhum favorito adicionado.</div>
  </div>
</template>

<script>
export default {
  name: "FavoriteCharacters",
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  },
  methods: {
    removeFavorite(characterId) {
      const index = this.favorites.findIndex(fav => fav._id === characterId);
      if (index !== -1) {
        this.favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(this.favorites)); 
      }
    },
  },
};
</script>

<style scoped>
.favorites-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1e;
  min-height: 100vh;
  padding: 20px;
  color: #ffffff;
}

.characters-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 100%;
}

.favorites-container h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #d1140a;
  text-align: center;
}

.favorites-container > div[v-if="favorites.length === 0"] {
  font-size: 1.2rem;
  color: #b00e0e;
  text-align: center;
  margin-top: 20px;
}

.card-characters {
  position: relative;
  background: url(../../public/img/background.jpg);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  padding: 16px;
  width: 280px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #ff6961;
}

.card-characters:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(255, 105, 97, 0.3);
}

.card-characters img {
  width: 100%;
  height: 280px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 10px;
}

.card-characters h3 {
  font-size: 1.5rem;
  color: #ff0d00;
  font-family: 'Georgia', serif;
}

.card-characters .color {
  font-size: 1rem;
  color: #cccccc;
}

.favorite-button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ff6961;
  position: absolute;
  top: 10px;
  right: 10px;
}

.heart-filled {
  color: #ff6961;
}
</style>
