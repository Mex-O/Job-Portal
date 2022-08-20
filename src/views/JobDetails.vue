<template>
  <div class="app">
    <div class="Head">
      <Header />
    </div>
    <div class="home animate__animated animate__pulse animate__delay-0.9">
      <div class="container-fluid">
        <div class="column d-flex justify-content-center">
          <div class="col-md-6 sm-12" id="section">
            <span class="posted">{{ job.postedAt }}</span>
            <span class="fullstop">.</span>
            <span class="contract">{{ job.contract }}</span>
            <h5 class="position">{{ job.position }}</h5>
            <a :href="job.apply"
              ><input
                type="button"
                class="btn btn-secondary disabled"
                value="Apply Now"
            /></a>
            <a :href="job.website"
              ><input
                type="button"
                class="btn btn-secondary disabled"
                value="Company Website"
            /></a>
            <h4>{{ job.description }}</h4>
            <h5>Requirement</h5>
            <p>{{ job.requirements.content }}</p>
            <li v-for="(items, i) in job.requirements.items" :key="i">
              {{ items }}
            </li>
            <h5>What You Will Do</h5>
            <p>{{ job.role.content }}</p>
            <li v-for="(items, i) in job.role.items" :key="i">
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
import jobs from "../data.json";
export default {
  components: { Header },
  data() {
    return {
      jobs: jobs,
    };
  },
  computed: {
    jobPosition() {
      return this.$route.params.jobPosition;
    },
    job() {
      return this.jobs.find((item) => {
        // return item.id === parseInt(this.productId)
        return item.position == this.jobPosition;
      });
    },
  },
  watch: {
    $route() {
      this.job;
    },
  },
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
  padding: 10px;
  margin: 2px;
  border: none;
  letter-spacing: 0.2rem;
}
h4,
h5,
p,
li {
  margin-top: 20px;
}
h5 {
  font-weight: 900;
}
p,
li {
  font-weight: 600;
}
.position {
  margin-top: 20px;
}
.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.home {
  color: #343a40;
  margin: 20px;
}
</style>