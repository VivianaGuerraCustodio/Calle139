<template>
  <div>
    <nav>
      <li class="nombre">{{nombre_colaborador}}</li>
      <li @click="mostrar_notificaciones=!mostrar_notificaciones">
        <img src="../assets/images/campana.png" class="notificacion" />
      </li>
      <li @click="home">
        <img src="../assets/images/cerrar-sesion.png" class="exit" />
      </li>
    </nav>
    <div v-if="mostrar_notificaciones">
      <notificacion />
    </div>
    <hr />
  </div>
</template>
<script>
import Notificacion from "./Notificacion.vue";
export default {
  name: "Navegador",
  data() {
    return {
      nombre_colaborador: localStorage.getItem("usuario"),
      mostrar_notificaciones: false
    };
  },
  methods: {
    home() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    }
  },
  components: {
    Notificacion
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
nav {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  padding: 0 1.5em;
  box-sizing: border-box;
  margin-top:10px;
  .nombre {
    margin-left: 45px;
    color: #fff;
  }
  .notificacion {
    width: 40px;
  }
  .exit {
    width: 40px;
  }
  hr {
    background-color: #73572271;
    border-bottom: none;
    height: 4px;
    padding: 1px;
  }
}
</style>