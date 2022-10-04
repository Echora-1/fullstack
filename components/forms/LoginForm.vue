<template>
  <base-form-wrap :content="{ title: 'Sign In', subtitle: 'Welcome back!' }">
    <div :class="['login-form', {'login-form--dark': isDarkTheme}]">
      <p class="login-form__text">Please check that you are visiting:</p>
      <security-badge class="login-form__badge" />
      <form class="login-form__form" @submit.prevent="submit" @input="invalidForm = false">
        <base-input
          v-model="form.email"
          type="email"
          id="email"
          name="email"
          class="login-form__input"
          label="Email *"
          placeholder="Email *"
          :error-list="emailErrors"
        />
        <base-input
          v-model="form.password"
          password
          type="password"
          id="pass"
          name="pass"
          class="login-form__input"
          label="Password *"
          placeholder="Password *"
          :error-list="passErrors"
        />
        <div class="login-form__actions">
          <base-checkbox
            :value="form.remember"
            :checked="form.remember"
            :label="'Remember me'"
            name="remember"

          />
          <nuxt-link class="login-form__reset-pass" :to="localePath('/')">
            Reset my password
          </nuxt-link>
        </div>

        <base-button
          class="login-form__submit"
          type="submit"
          :disabled="$v.$invalid"
          :loading="loading"
        >
          Login
        </base-button>
        <p class="login-form__error-text">{{invalidForm ? 'Incorrect email or password' : ''}}</p>
      </form>
      <p class="login-form__footer-text" >Not with us yet? <nuxt-link :to="localePath('/sign-up')"><span>Sign Up</span></nuxt-link></p>
    </div>
  </base-form-wrap>
</template>
<script>
import {validationMixin} from "vuelidate";
import {email, minLength, required} from "vuelidate/lib/validators";
import {mapActions} from "vuex";
import BaseFormWrap from "@/components/base/BaseFormWrap";
import SecurityBadge from "@/components/SecurityBadge";
import BaseButton from "@/components/base/BaseButton";
import BaseInput from "@/components/base/BaseInput";
import BaseCheckbox from "@/components/base/BaseCheckbox";
import loadingStatus from "@/mixins/loadingStatus";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {BaseCheckbox, BaseInput, BaseButton, BaseFormWrap, SecurityBadge},
  mixins: [validationMixin, loadingStatus, getCurrentTheme],

  data() {
    return {
      loading: false,
      invalidForm: false,
      form: {
        email: '',
        password: '',
        remember: false
      },
    }
  },


  validations: {
    form: {
      email: {required, email},
      password: {required, minLength: minLength(8)},
    },
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.required) errors.push('Required field')
      if (!this.$v.form.email.email) errors.push('Incorrect email format')
      return errors;
    },
    passErrors() {
      const errors = [];
      if (!this.$v.form.password.required) errors.push('Required field')
      if (!this.$v.form.password.minLength) errors.push('At least 8 characters')
      return errors;
    },
  },

  methods: {
    ...mapActions({setAuthenticated: 'setAuthenticated', setUserId: 'user/setUserId', setLastLogin: 'user/setLastLogin'}),

   async submit() {
      this.startLoading();
        if (!this.$v.$invalid) {
          const result = await this.$axios.$post('/api/login/sanctumToken', {
            email: this.form.email,
            password: this.form.password
          })
          if(!result.success) {
            this.invalidForm = true
          }
          if(result.token){
            this.$cookies.set('token', result.token, {
              path: '/',
              maxAge: 60 * 60 * 24 * 7
            })
            this.setAuthenticated(true)
            this.$router.push(this.localePath('/dashboard'))

          }
        }
      this.stopLoading();
    },
  },
}
</script>


<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__text {
    font-size: 16px;
    margin: 0 0 15px;
    text-align: center;
    color: #161C2F;
  }

  &__badge {
    margin-bottom: 15px;
  }

  &__form {
    width: 100%;
    max-width: 400px;
  }

  &__error-text {
    color: red;
    min-height: 19px;
    margin-top: 6px;
    margin-bottom: 0;
  }

  &__submit {
    margin-top: 40px;
    width: 100%;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
  }

  &__reset-pass {
    font-size: 15px;
    text-align: right;
    color: #161C2F;
    opacity: 0.4;
  }

  &__footer-text {
    font-size: 15px;
    text-align: center;
    color: #767B8B;
    margin: 5px 0 30px;

    span {
      color: #161C2F;
    }
  }

  &--dark {
    .login-form__text {
      color: #FFFFFF;
    }

    .login-form__reset-pass {
      color: #FFFFFF;
    }

    .login-form__footer-text {
      span {
        color: #FFFFFF;
      }
    }
  }
}
</style>
