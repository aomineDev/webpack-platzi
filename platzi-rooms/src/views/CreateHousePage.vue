<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input
              class="input__search"
              id="where"
              type="text"
              placeholder="Mexico City, Mexico">
          </div>
        </form>
      </div>
    </section>

    <section class="section__create py-6">
      <div class="container">
        <h1 class="text-3xl mb-4">Publish a new room</h1>
        <form @submit.prevent="save">
          <div class="mb-4">
            <label class="input__label">Title</label>
            <input
              v-model="publicaction.title"
              type="text"
              class="input__field"
              placeholder="Bruce Wayne"
            >
          </div>
          <div class="mb-4">
            <label class="input__label">Type</label>
            <input
              v-model="publicaction.type"
              type="text"
              class="input__field"
              placeholder="Room"
            >
          </div>
          <div class="mb-4">
            <label class="input__label">Price</label>
            <input
              v-model="publicaction.price"
              type="number"
              class="input__field"
              placeholder="20.00"
              step="0.01"
            >
          </div>
          <div class="mb-4">
            <label class="input__label">Description</label>
            <textarea
              v-model="publicaction.description"
              rows="10"
              class="input__field"
              placeholder="Bruce Wayne"
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="input__label">Featured Image</label>
            <input v-model="publicaction.featuredImage" type="text" class="input__field" placeholder="https://images.unsplash.com/photo-1504615755583-2916b52192a3">
          </div>
          <div class="mb-4">
            <p v-if="isLoading">Loading...</p>
            <div v-else class="customCheckbox">
              <label class="input__label">Services</label>
              <div v-for="(service, index) in services" :key="index" class="row">
                <input
                  type="checkbox"
                  :id="service.slug"
                  :value="index"
                  v-model="publicaction.services"
                >
                <label :for="service.slug" class="input__label">{{ service.name }}</label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <button
              class="bg-yellow-dark text-yellow-darker font-semibold py-3 px-6 rounded w-full"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </section>
  </page-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  name: 'CreateHousePage',
  components: {
    PageLayout,
  },
  data() {
    return {
      isLoading: true,
      publicaction: {
        title: '',
        description: '',
        featuredImage: '',
        type: '',
        price: '',
        services: [],
      },
    };
  },
  methods: {
    async save() {
      const {
        title,
        type,
        price,
        description,
        featuredImage,
        services,
      } = this.publicaction;
      const servicesJson = {};
      services.forEach((e) => {
        servicesJson[e] = e;
      });
      const room = {
        title,
        type,
        price,
        description,
        featured_image: featuredImage,
        services: servicesJson,
      };
      await this.$store.dispatch('CREATE_ROOM', room);
      this.$router.push({ name: 'SearchPage' });
    },
  },
  computed: {
    ...mapGetters(['services']),
  },
  async created() {
    await this.$store.dispatch('FETCH_SERVICES');
    this.isLoading = false;
  },
  mounted() {
  },
};
</script>

<style scoped>
.row {
margin: 0 0 15px;
}
.customCheckbox input{
display: none;
}
.customCheckbox input + label{
position: relative;
cursor: pointer;
padding: 6px 0 0 40px;
margin-bottom: 0;
font-size: 11px;
}
.customCheckbox input + label:after, .customCheckbox input + label:before{
content: '';
position: absolute;
box-sizing: border-box;
}
.customCheckbox input + label:before{
background-color: #fff;
border: 1px solid #1cbe9d;
box-shadow: -2 2px 4px 0 rgba(0, 0, 0, .1);
border-radius: 3px;
width: 25px;
height: 25px;
top: 0;
left: 0;
}
.customCheckbox input + label:after{
border-style: solid;
border-width: 0 0 2px 2px;
border-color: transparent transparent #1cbe9d #1cbe9d;
width: 15px;
height: 8px;
top: 6px;
left: 5px;
opacity: 0;
transform: scale(2) rotate(-45deg);
transition: all .3s linear;
}
.customCheckbox input:checked + label:after {
opacity: 1;
transform: scale(1) rotate(-45deg);
}
</style>
