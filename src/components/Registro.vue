<template>
  <div class="formulario">
    <form @submit.prevent="registro">
      <p>Registro</p>
      <p>Nombre y Apellidos</p>
      <input v-model="nombre" type="text" placeholder="JuanitoMelendez" />
      <p>Zona de trabajo</p>
      <input type="button" value="salon" />
      <input type="button" value="cocina" />
      <p>Correo</p>
      <input v-model="correo" type="email" placeholder="fulanitx@gmail.com" />
      <p>Contraseña</p>
      <input v-model="contraseña" type="password" placeholder="¡recuérdala!" />
      <p>
        <input type="submit" value="Registrar" />
      </p>
      <div class="error" v-if="error">{{ error }}</div>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "registro",
  data() {
    return {
      nombre: "",
      correo: "",
      contraseña: "",
      error: "",
    };
  },
  methods: {
    registro() {
      this.error = "";
      if (this.nombre && this.correo && this.contraseña) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.correo, this.contraseña)
          .then((user) => {
            console.log(user);
            this.nombre = "";
            this.email = "";
            this.correo = "";
          })
          .catch((err) => {
            this.error = err.message;
          });
      } else {
        this.error = "Completa los campos vacíos 🙏🏼";
      }
    },
    guardarUsuario() {
      const db = firebase.firestore();
      db.collection("usuarios").doc(this.correo).set({
        nombreUsuario: this.correoUsuario,
        correoUsuario: this.nombreUsuario,
      });
    },
    usuarioAutenticado() {
      firebase.auth().currentUser;
    },
  },
};
</script>
<style scoped>
.formulario {
  background-color: khaki;
  opacity: 0.8;
  box-shadow: 0 2px 10px #ff3d01, 0 0 29px #ff6c00 inset;
  padding: 1.5em 1em 1em 1em;
  margin: 3em 7em 1em 7em;
  display: flex;
  align-content: center;
  justify-content: center;
}
.error {
  background: #fd4469cc;
  padding: 7px;
}
</style>