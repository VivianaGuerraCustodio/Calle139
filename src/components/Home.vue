<template>
  <div class="contenedor">
    <img class="logo" alt="Vue logo" src="../assets/images/logo.png" />
    <p>{{ mensaje }}</p>
    <input v-model="nombre_colaborador" type="text" placeholder="JuanPerez" />
    <div>
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
      nombre_colaborador:"",
    };
  },
  methods:{
    ir_salon(){
      localStorage.setItem('usuario', this.nombre_colaborador);
      this.$router.push({
        path:'/salon'
      })
    },
    ir_cocina(){
      localStorage.setItem('usuario', this.nombre_colaborador);
      this.$router.push({
        path:'/cocina'
      })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(143, 121, 50, 0.192);
  margin: 9em 5em 2em 5em;
  padding: 1em 1em 1em 1em;
}
p{
  font-size: 3em;
}
.change-view {
  background-color: rgba(85, 75, 75, 0.39);
  border-radius: 0.2em;
  border-style: none;
  outline: none;
  font-size: 2em;
  margin: 1em;
  padding: 0.5em 1em 0.5em 1em;
}
.logo {
  width: 40%;
  height: 50%;
}
</style>
