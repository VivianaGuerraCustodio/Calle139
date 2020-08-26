<template>
  <form @submit.prevent="inicio" class="iniciar_sesion">
    <p>Iniciar Sesión</p>
    <p>Correo/e-mail</p>
    <input v-model="correo" type="email" />
    <p>Contraseña</p>
    <input v-model="contraseña" type="password" />
    <p>
      <input type="submit" value="Ok!" />
    </p>
    <div class="error" v-if="error">{{error}}</div>
    <a>¿Olvidaste tu contraseña?</a>
  </form>
</template>
<script>
// import firebase from "firebase";
export default {
  name: "iniciarSesion",
  data() {
    return {
      correo: "",
      contraseña: "",
      error: "",
    };
  },
  // methods: {
    // inicio() {
    //   this.error = "";
    //   if (this.correo && this.contraseña) {
    //     firebase
    //       .auth()
    //       .signInWithEmailAndPassword(this.correo, this.contraseña)
    //       .then(user => {
    //         console.log(user);
    //        //  this.$router.push({
    //        //    name: "Salon",
    //        //  });
    //       })
    //       .catch((err) => {
    //         this.error = err.message;
    //       });
    //   } else {
    //     this.error =
    //       "Algo anda mal 🤔 revisa los datos ingresado,si el problema persiste contacta al administrador";
    //   }
    // },
  //},
};
</script>
<style scoped>
.iniciar_sesion {
  background-color: khaki;
  opacity: 0.8;
  box-shadow: 0 2px 10px #ff3d01, 0 0 29px #ff6c00 inset;
  padding: 1.5em 3em 3em 3em;
  margin: 3em 7em 1em 7em;
  flex-direction: column;
}
.error {
  background: #fd4469cc;
  padding: 7px;
}
</style>