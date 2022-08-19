<template>
  <div class="app">
    <header>
      <div class="container-fluid">
        <div class="column d-flex justify-content-center">
          <div class="col-12">
            <h4>Dev Jobs</h4>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@700&display=swap');
header {
  background: url("https://devjobs11.netlify.app/img/bg-pattern-header.1360e861.svg");
  background-size: cover;
  background-position: center;
  height: 150px;
  border-radius: 0px 0px 0px 50px;
  color: white;
  z-index:0;
  font-family: 'Silkscreen', cursive;
}
@media only screen and (max-width: 640px) {
  header {
    background: url("https://devjobs11.netlify.app/img/bg-pattern-header.1360e861.svg");
    background-size: cover;
    background-position: center;
    height: 150px;
    border-radius: 0px 0px !important;
    color: white;
    z-index:0;
  }
}
header h4 {
  font-size: xx-large;
  text-transform: uppercase;
  padding: 25px;
}
</style>