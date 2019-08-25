<template>
  <div>
    <header class="bg-white py-5 shadow">
      <div class="container">
        <div class="flex items-center justify-between flex-wrap">
          <div class="flex items-center flex-no-shrink mr-6">
            <router-link
              class="text-black hover:text-grey-darkest no-underline font-semibold text-lg"
              :to="{ name: 'HomePage' }"
            >
              @aomine1745 estuvo aqui :v
            </router-link>
          </div>
          <div class="flex items-center w-auto">

            <current-user>
              <template slot-scope="{ user}">
                <div class="items__controls">
                  <div class="flex" v-if="user">
                    <router-link
                      :to="{ name: 'createHousePage' }"
                      tag="button"
                      class="mr-2 flex items-center"
                    >
                      <i class="material-icons">add</i>
                    </router-link>
                    <button class="mr-4 flex items-center">
                      <i class="material-icons">notifications</i>
                    </button>
                    <router-link
                      class="flex items-center User mr-4"
                      :to="{ name: 'ProfilePage' }"
                      tag="div"
                    >
                      <img
                        class="w-8 h-8 rounded-full mr-2 User__avatar"
                        :src="user.avatar"
                        alt="Avatar"
                      >
                      <div class="text-sm">
                        <p class="text-black leading-none">{{ user.name }}</p>
                        <p class="text-grey-dark">Online</p>
                      </div>
                    </router-link>
                    <button class="flex items-center" @click.prevent="logOut">
                      <i class="material-icons">exit_to_app</i>
                    </button>
                  </div>
                  <div v-else>
                    <button
                      class="btn__outline btn__outline--teal rounded mr-2"
                      @click="getLogin"
                    >
                      Login
                    </button>
                    <button
                      class="bg-yellow-dark text-yellow-darker font-semibold py-2 px-4 rounded"
                      @click="signUp"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </template>
            </current-user>
          </div>
        </div>
      </div>
    </header>

    <!-- Modals -->
    <modal :show="modals.login" @close-modal="closeModal('login')">
        <h2 class="text-grey-darkset font-semibold text-center mb-6">
          Welcome to Platzi Rooms
        </h2>
        <form @submit.prevent="loginHandleSubmit">
          <div class="mb-4">
            <label class="input__label">Email</label>
            <div class="form__field relative">
              <input
                type="text"
                placeholder="bruce_wayne@imnotbatman.org"
                class="input__field"
                v-model="formLogin.email"
              >
            </div>
          </div>
          <div class="mb-4">
            <label  class="input__label">Password</label>
            <div class="form__field relative">
              <input
                type="password"
                placeholder="********"
                class="input__field"
                v-model="formLogin.password"
              >
            </div>
          </div>
          <div class="mb-4">
            <toggle-input v-model="formLogin.rememberMe" />
            <span>Remember Me</span>
          </div>
          <div class="mb-4">
            <button class="btn btn-primary mr-3 w-full">Login</button>
          </div>
        </form>
      </modal>

    <modal :show="modals.register" @close-modal="closeModal('register')">
        <h2 class="text-grey-darkset font-semibold text-center mb-6">
          Register to Platzi Rooms
        </h2>
        <form class="form" @submit.prevent="registerHandleSubmit">
          <div class="mb-4">
            <label class="input__label">Email</label>
            <div class="form__field relative">
              <input
                type="text"
                placeholder="bruce_wayne@imnotbatman.org"
                class="input__field"
                v-model="formRegister.email"
              >
            </div>
          </div>
          <div class="mb-4">
            <label class="input__label" for="email">Name</label>
            <div class="form__field relative">
              <input
                class="input__field"
                id="name"
                v-model="formRegister.name"
                type="text"
                placeholder="Bruce Wayne">
            </div>
          </div>
          <div class="mb-4">
            <label  class="input__label">Password</label>
            <div class="form__field relative">
              <input
                type="password"
                placeholder="********"
                class="input__field"
                v-model="formRegister.password"
              >
            </div>
          </div>
          <div class="mb-4">
            <button class="btn btn-primary mr-3 w-full">signUp</button>
          </div>
        </form>
      </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Modal from '@/components/Modal.vue';
import ToggleInput from '@/components/ToggleInput.vue';
import CurrentUser from '@/components/CurrentUser.vue';

export default {
  name: 'HeaderPartial',
  components: {
    CurrentUser,
    Modal,
    ToggleInput,
  },
  data() {
    return {
      formLogin: {
        email: '',
        password: '',
        rememberMe: false,
      },
      formRegister: {
        email: '',
        name: '',
        password: '',
      },
    };
  },
  methods: {
    getLogin() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'login',
        value: true,
      });
    },
    signUp() {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name: 'register',
        value: true,
      });
    },
    closeModal(name) {
      this.$store.dispatch('TOGGLE_MODAL_STATE', {
        name,
        value: false,
      });
    },
    registerHandleSubmit() {
      this.$store.dispatch('CREATE_USER', this.formRegister)
        .then(() => {
          this.closeModal('register');
        });
    },
    loginHandleSubmit() {
      this.$store.dispatch('SIGN_IN', this.formLogin)
        .then(() => {
          this.closeModal('login');
        });
    },
    logOut() {
      this.$store.dispatch('LOG_OUT');
    },
  },
  computed: {
    ...mapGetters(['modals']),
  },
};
</script>

<style scoped>
.User {
  cursor: pointer;
}
.User__avatar {
  object-fit: cover;
}
</style>
