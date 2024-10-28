<template>
    <div class="favorites-container">
      <h2>Favoritos</h2>
      <div v-if="favorites.length === 0">Nenhum favorito adicionado.</div>
      <div v-else class="characters-container">
        <div class="card-characters" v-for="character in favorites" :key="character._id">
          <img :src="character.photo" :alt="character.name">
          <h3>{{ character.name }}</h3>
          <div class="color">{{ character.status }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Favorites",
    computed: {
      favorites() {
        return this.$root.$data.favorites; // Pega os favoritos do estado root
      }
    }
  };
  </script>
  
  <style scoped>
    favorites-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1e;
  min-height: 100vh;
  color: #ffffff;
}

.favorites-container h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ff6961;
  text-align: center;
}

/* Estilo da mensagem de "nenhum favorito" */
.favorites-container div {
  font-size: 1.2rem;
  color: #cccccc;
  text-align: center;
  margin-top: 20px;
}

/* Container dos cards */
.characters-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Card do personagem */
.card-characters {
  position: relative;
  background-color: #2e2e2f;
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

/* Estilo da imagem */
.card-characters img {
  width: 100%;
  height: 280px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 10px;
}

/* Nome e status */
.card-characters h3 {
  font-size: 1.5rem;
  color: #ff6961;
  font-family: 'Georgia', serif;
}

.card-characters .color {
  font-size: 1rem;
  color: #cccccc;
}

/* Alinha o coração de favorito */
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

.heart-empty {
  color: #ccc;
}
</style>
  