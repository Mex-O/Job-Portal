<template>
  <div class="app">
    <div class="container-fluid">
      <div class="column d-flex justify-content-center text-center">
        <div class="col-12">
          <form>
            <input
              type="search"
              placeholder="Filter By Title"
              v-model="search"
              class="animate__animated animate__bounce animate__delay-0.5"
            />
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div
        class="
          row
          d-flex
          justify-content-center
          animate__animated animate__fadeInRight animate__delay-0.5
        "
      >
        <div class="col-lg-3 md-4 sm-6" v-for="job in filterJobs" :key="job.id">
          <router-link
            :to="{
              name: 'jobDetails',
              params: { jobPosition: job.position },
            }"
          >
            <div class="card">
              <img
                :src="job.logo"
                class="card-img-top"
                :alt="job.company"
                :style="{ background: job.logoBackground }"
              />
              <div class="card-body">
                <p class="card-text">
                  <span class="posted">{{ job.postedAt }}</span>
                  <span class="fullstop">.</span>
                  <span class="contract">{{ job.contract }}</span>
                </p>
                <h4>{{ job.position }}</h4>
                <h6>{{ job.company }}</h6>
                <h5>{{ job.location }}</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jobs from "../data.json";
export default {
  data() {
    return {
      jobs: jobs,
      search: "",
    };
  },
  computed: {
    filterJobs() {
      return this.jobs.filter((job) =>
        job.position.toLowerCase().match(this.search)
      );
    },
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
input[type="search"] {
  width: 70%;
  padding: 15px;
  margin-top: -20px !important;
  z-index: 1;
  position: relative;
  top: -10px;
  border-radius: 5px 5px;
  margin-bottom: 30px;
  border: none;
}
.card {
  margin-top: 30px !important;
  margin: 20px;
  padding: 5px;
}
.card:hover {
  margin: 0 1rem;
  color: black !important;

  animation: pulse; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}
.card-img-top {
  width: 60px;
  height: 60px;
  object-fit: contain;
  text-align: center;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  top: -25px;
  left: 30px;
}
.posted,
.contract,
.fullstop {
  font-size: 15px;
  font-weight: 600;
  padding: 2px;
  color: #6e8098;
}
h4 {
  font-size: 20px;
  font-weight: bold;
  padding: 2px;
}
h6 {
  font-size: 15px;
  font-weight: bold;
  padding: 2px;
}
h5 {
  font-size: 15px;
  font-weight: 700;
  padding: 2px;
  color: #5964e0;
}
a {
  text-decoration: none;
  color: black;
}
a:hover > .card {
  color: #6e8098;
}
</style>