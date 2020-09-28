<template>
  <div class="contenedor">
    <img class="logo" alt="Vue logo" src="../assets/images/logo.png" />
    <p>{{ mensaje }}</p>
    <input v-model="nombre_colaborador" type="text" placeholder="JuanPerez" />
    <div class="btn-row">
      <input @click="ir_salon" class="change-view" type="button" value="Salón" />
      <input @click="ir_cocina" class="change-view" type="button" value="Cocina" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mensaje: "Buen día , selecciona tu zona de trabajo ",
      nombre_colaborador: ""
    };
  },
  methods: {
    ir_salon() {
      localStorage.setItem("usuario", this.nombre_colaborador);
      this.$router.push({
        path: "/salon"
      });
    },
    ir_cocina() {
      localStorage.setItem("usuario", this.nombre_colaborador);
      this.$router.push({
        path: "/cocina"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/main.scss";
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#bf9b4db4;
  margin: 100px 30px;
  padding: 1em;
  box-sizing: content-box;
  p {
    font-size: 23px;
    padding: 23px;
  }
  .btn-row {
    display: flex;
    flex-direction: row;
  }
  .change-view {
    background-image: url("~@/assets/images/brochas.png");
    background-color: transparent;
    border: none;
    font-size: 17px;
    margin-top: 0.5em;
    width: 128px;
    height: 31px;
    background-size: cover;
    opacity: 0.9;
    color: darkgrey;
  }
  .logo {
    width: 240px;
  }
}
</style>