<template>
  <div>
    <navegador />
    <div class="pedido_total">
      <section class="contenedor_pedido">
        <div class="resumen_pedido">
          <p>Cliente : {{ nombre }}</p>
          <p>Mesa : {{ mesa }}</p>
          <div>
            <p>
              <strong>Resumen de Pedido</strong>
            </p>
            <div class="div-pedido">
              <div
                class="resumen"
                v-for="(info, index) in infohijo"
                :key="index"
              >
                <table>
                  <td class="item">{{ info.qtt }}</td>
                  <td class="item">{{ info.name }}</td>
                  <td class="item">${{ info.price }}</td>
                  <td>
                    <input @click="remover(info)" class="trash" type="button" />
                  </td>
                </table>
              </div>
            </div>
          </div>
          <p v-if="nota_adicional">
            <strong>
              Nota:
              <br />
            </strong>
            {{ nota_adicional }}
          </p>
        </div>
        <div class="menús">
          <input v-model="nombre" type="text" placeholder="Nombre del cliente" />
          <br />
          <input v-model="mesa" type="number" placeholder="Nº de mesa" />
          <p>
            <strong>Menús</strong>
          </p>
          <div>
            <button
              @click="mostrar_desayuno = !mostrar_desayuno"
              class="change-view"
            >
              Desayuno
            </button>
            <div v-if="mostrar_desayuno">
              <desayuno :selectProduct="selectProduct" :remover="remover" @close="mostrar_desayuno = false"/>
            </div>
            <br />
          </div>
          <button
            @click="mostrar_durante = !mostrar_durante"
            class="change-view"
          >
            Durante el día
          </button>
          <div v-if="mostrar_durante">
            <hamburguesas :selectProduct="selectProduct" :remover="remover" @close="mostrar_durante = false" />
          </div>
          <br />
          <button
            @click="mostrar_bebidas = !mostrar_bebidas"
            class="change-view"
          >
            Bebidas
          </button>
          <div v-if="mostrar_bebidas">
            <bebidas :selectProduct="selectProduct" :remover="remover" @close="mostrar_bebidas = false"/>
          </div>
          <br />
          <button
            @click="mostrar_adicionales = !mostrar_adicionales"
            id="adicionales"
            class="change-view"
          >
            Adicionales
          </button>
          <div v-if="mostrar_adicionales">
            <adicionales :selectProduct="selectProduct" :remover="remover" @close="mostrar_adicionales = false"/>
          </div>
          <br />
          <p>¿Desea añadir una nota?</p>
          <textarea v-model="nota_adicional" type="text" />
          <br />
        </div>
      </section>
      <div class="envio_cocina">
        <p>Total a pagar : $/.{{ total }}</p>
        <button @click="() => enviar_cocina()" class="change-view">
          Enviar a cocina
        </button>
      </div>
      <br />
      <p>{{ aviso }}</p>
      <!--<p v-else class="avisoIncorrecto margen">{{aviso}}</p>-->
    </div>
  </div>
</template>

<script>
import Navegador from "./Navegador.vue";
import Desayuno from "./Menus/Desayuno.vue";
import Adicionales from "./Menus/Adicionales.vue";
import Bebidas from "./Menus/Bebidas.vue";
import Hamburguesas from "./Menus/Hamburguesas.vue";
import { db } from "../../firebaseConfig/index.js";
import firebase from "../../firebaseConfig/index.js";

export default {
  name: "Salon",
  data() {
    return {
      nombre: "",
      mesa: "",
      nota_adicional: "",
      aviso: "",
      mostrar_desayuno: false,
      mostrar_durante: false,
      mostrar_bebidas: false,
      mostrar_adicionales: false,
      infohijo: [],
      lol: [],
      cart: [],
      total: 0
    };
  },
  components: {
    Navegador,
    Desayuno,
    Adicionales,
    Bebidas,
    Hamburguesas
  },
  methods: {
    enviar_cocina() {
      db.collection("pedidos")
        .add({
          colaborador: localStorage.getItem("usuario"),
          cliente: this.nombre,
          mesa: this.mesa,
          status: "pendiente",
          resumen_de_pedido: Array.from(this.infohijo),
          nota: this.nota_adicional,
          hora_pedido: firebase.firestore.FieldValue.serverTimestamp(),
          hora_envio_salon: "",
          pago_total: this.total
        })
        .then(() => {
          this.aviso = "Se envió el pedido a cocina";
          setTimeout(() => {
            (this.nombre = ""),
              (this.mesa = ""),
              (this.nota_adicional = ""),
              (this.aviso = ""),
              (this.infohijo = ""),
              (this.mesa = ""),
              (this.total = "");
          }, 5000);
        })
        .catch(() => {
          this.aviso = "Hubo un error, toma el pedido de nuevo :)";
        });
    },
    remover(producto) {
      const index = this.cart.indexOf(producto);
      if (index !== -1) {
        this.cart.splice(index, 1);
        this.total = this.total - producto.price;
        producto.qtt--;
      }
      this.infohijo = new Set(this.cart);
      this.lol.push(this.infohijo);
    },

    selectProduct(producto) {
      this.cart.push(producto);
      this.total += producto.price;
      const index = this.cart.indexOf(producto);
      console.log(index);
      if (index !== -1) {
        producto.qtt++;
        this.infohijo = new Set(this.cart);
        this.lol.push(this.infohijo);
      }
    }
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
.change-view {
  background-color: rgba(85, 75, 75, 0.39);
  border-radius: 0.2em;
  border-style: none;
  outline: none;
  margin:5px;
  padding: 8px;
}
.pedido_total {
  background-color: #bf9b4db4;
  opacity: 0.85;
  background-size: cover;
  box-shadow: 0 2px 10px #141414, 0 0 29px #bf974d inset;
  margin: auto;
  width: min-content;
  padding: 16px 40px 0px 0px;
}
.contenedor_pedido {
  display: flex;
  flex-direction: row;
  margin: auto;
}
.resumen {
  display: block ruby;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
}
.trash {
  border: none;
  background-image: url("~@/assets/images/trash.png");
  background-color: transparent;
  width: 25px;
  height: 25px;
  background-size: cover;
}
.item {
  padding: 0em 1em 1em 1em;
  margin: 0;
}
.resumen_pedido {
  display: block;
  width: 40%;
  height: 50%;
  margin: 10px;
  padding: 3% 8%;
}
.menús {
  padding: 25px;
  p {
    margin: 10px;
  }
}
.contenedor_pedido .envio_cocina {
  display: grid;
}
.salir {
  width: 3em;
  height: 3em;
}
.margen {
  padding: 1em;
  margin: 0em 20em 0em 20em;
  border-radius: 2em;
}
.avisoCorrecto {
  background-color: rgba(97, 202, 97, 0.692);
}
.avisoIncorrecto {
  background-color: rgba(202, 97, 97, 0.692);
}
#buton_trash {
  width: 1.4em;
}
.div-pedido{
  overflow: scroll;
  width:250px;
  height: 330px;
}
.div-pedido::-webkit-scrollbar-track{
background: rgba(0, 0, 0, 0.213);
border-radius: 4px;
}
.div-pedido::-webkit-scrollbar{
  width:8px;
  height: 5px;
}
.div-pedido::-webkit-scrollbar-thumb{
background:#f2b23a77;
border-radius: 4px;
}

</style>