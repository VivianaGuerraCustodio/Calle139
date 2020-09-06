<template>
  <div id="app">
    <router-view></router-view>
    <hr />
    <footer class="footer">
      <p>
        Hecho por
        <a target="_blank" href="https://github.com/VivianaGuerraCustodio">VivianaGuerra</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-size: cover;
  background-image: url("../src/assets/images/fondo1.jpg");
  font-family: "Roboto", sans-serif;
  text-align: center;
}
.footer {
  font-size: 1.5em;
  background-color: rgba(139, 69, 19, 0.438);
  display: flex;
  justify-content: center;
}
hr {
  background-color: #73572271;
  border-bottom: none;
  height: 4px;
  margin: 1em 0 3em 3em;
}
</style>
