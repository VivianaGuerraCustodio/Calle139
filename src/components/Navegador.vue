<template>
  <div>
    <nav>
      <li class="nombre">{{nombre_colaborador}}</li>
      <li @click="mostrar_notificaciones=!mostrar_notificaciones">
        <img src="../assets/images/campana.png" class="iconos" />
      </li>
      <li @click="home">
        <img src="../assets/images/cerrar-sesion.png" class="iconos left"  />
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
      nombre_colaborador: localStorage.getItem('usuario'),
      mostrar_notificaciones: false,

    };
  },
  methods: {
    home() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
  },
  components: {
    Notificacion,
  },
};
</script>
<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 1.5em;
}
nav > li {
  padding: 1em 1em 0em 0.8em;
  margin: 0.7em;
}
.nombre {
  margin-right: 10em;
}
.iconos {
  width: 2.5em;
  margin-left: 1em;
}
.left{
  position:left;
  float: left;
}
hr {
  background-color: #73572271;
  border-bottom: none;
  height: 4px;
  padding: 1px;
}
</style>