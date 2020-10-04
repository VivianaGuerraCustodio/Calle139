<template>
  <div class="contenedor">
    <img class="logo" alt="Vue logo" src="../assets/images/logo.png" />
    <p>{{ mensaje }}</p>
    <input v-model="nombre_colaborador" type="text" placeholder="JuanPerez" />
    <div class="btn-row">
      <input
        @click="ir_salon"
        class="change-view"
        type="button"
        value="Salón"
      />
      <input
        @click="ir_cocina"
        class="change-view"
        type="button"
        value="Cocina"
      />
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
  background-color: $bg-containers;
  box-shadow: 0 2px 10px #141414, 0 0 29px $bg-containers inset;
  /* text-align: center; */
  /* justify-content: center; */
  flex-direction: column;
  /* width: -webkit-min-content; */
  width: -moz-min-content;
  width: 334px;
  margin: auto;
  margin-top: 95px;
  padding: 2em;
  align-items: center;

  p {
    font-size: 23px;
    padding: 23px;
  }
  
  .btn-row {
    display: flex;
    flex-direction: row;
  }
  .logo {
    width: 240px;
  }
}
</style>