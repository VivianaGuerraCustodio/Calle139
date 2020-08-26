<template>
  <div class="contenedor">
    <p>La página que estas buscando no existe 🤔</p>
    <p>➡️ Podrías regresar a la página principal⬅️</p>
      <img @click="home" src="../assets/images/comeback.gif" alt />
  </div>
</template>
<script>
export default {
  name: "ErrorPagina",
  methods:{
    home(){
      this.$router.push({
        path:"/"
      })
    }
  }
};
</script>
<style scoped>
.contenedor {
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: rgba(143, 121, 50, 0.192);
  margin: 9em 9em 2em 9em;
  padding: 1em 1em 1em 1em;
}
</style>
