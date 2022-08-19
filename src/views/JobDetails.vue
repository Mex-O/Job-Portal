<template>
  <div class="app">
    <div class="Head">
      <Header />
    </div>
    <div class="home animate__animated animate__pulse animate__delay-0.9">
      <div class="container-fluid">
        <div class="column d-flex justify-content-center">
          <div class="col-md-6 sm-12" id="section">
            <span class="posted">{{ postedAt }}</span>
            <span class="fullstop">.</span>
            <span class="contract">{{ contract }}</span>
            <h5 class="position">{{ position }}</h5>
            <a :href="apply"
              ><input type="button" class="btn btn-secondary" value="Apply Now"
            /></a>
            <a :href="website"
              ><input type="button" class="btn btn-secondary" value="Company Website"
            /></a>
            <h4>{{ description }}</h4>
            <h5>Requirement</h5>
            <p>{{ content }}</p>
            <li v-for="(items, i) in item" :key="i">
              {{ items }}
            </li>
            <h5>What You Will Do</h5>
            <p>{{ roleA }}</p>
            <li v-for="(items, i) in roleB" :key="i">
              {{ items }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  props: [
    "logo",
    "bg",
    "id",
    "company",
    "postedAt",
    "contract",
    "description",
    "location",
    "website",
    "apply",
    "content",
    "website",
    "item",
    "roleA",
    "roleB",
    "position",
  ],
};
</script>

<style scoped>
.posted,
.contract,
.fullstop {
  font-size: 15px;
  font-weight: 600;
  padding: 2px;
  color: #6e8098;
}
#section {
  margin-top: 20px;
  padding: 5px;
}
.btn {
  background-color: #5964e0;
  text-transform: uppercase;
  padding:10px;
  margin:2px;
  border:none;
  letter-spacing:0.2rem;
}
h4,
h5,
p,
li {
  margin-top: 20px;
}
h5{
  font-weight:900;
}
p,
li {
  font-weight: 600;
}
.position {
  margin-top: 20px;
}
.img-fluid{
  width:100%;
  height:100%;
  object-fit:contain;
}
.home{
  color:#343a40;
  margin:20px;
}

</style>