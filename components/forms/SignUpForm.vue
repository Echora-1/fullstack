<template>
  <base-form-wrap
    :content="{ title: 'Sign Up', subtitle: 'be the future. be the crypto' }"
    v-if="!successRegister"
  >
    <div :class="['sign-up-form',{'sign-up-form--dark': isDarkTheme}]">
      <p class="sign-up-form__text">Please check that you are visiting:</p>
      <security-badge class="sign-up-form__badge" />
      <form class="sign-up-form__form" @submit.prevent="submit" @input="invalidForm = false">
        <base-input
          v-model="form.name"
          type="text"
          id="name"
          name="name"
          class="sign-up-form__input"
          label="Username *"
          placeholder="Username *"
          :error-list="nameErrors"
        />
        <base-input
          v-model="form.email"
          type="email"
          id="email"
          name="email"
          class="sign-up-form__input"
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
          class="sign-up-form__input"
          label="Password *"
          placeholder="Password *"
          :error-list="passErrors"
        />
        <base-input
          v-model="form.passwordConfirmation"
          password
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          class="sign-up-form__input"
          label="Confirm password *"
          placeholder="Confirm password *"
          :error-list="confirmErrors"
        />
        <div class="sign-up-form__actions">
          <base-checkbox
            v-model="form.agreement"
            :label="'I agree to the User agreement, Privacy & Refund Policy'"
            name="agreement"
          />
        </div>
        <base-button
          class="sign-up-form__submit"
          type="submit"
          :disabled="$v.$invalid"
          :loading="loading"
        >
          Login
        </base-button>
        <p class="sign-up-form__error-text">{{invalidTextForm | capitalize }}{{invalidForm ? ` already in use` : ''}}</p>
      </form>
      <p class="sign-up-form__footer-text" >Already have an account? <nuxt-link :to="localePath('/log-in')"><span>Login</span></nuxt-link></p>
    </div>
  </base-form-wrap>
  <successful-registration-form v-else :email="form.email" />
</template>
<script>
import { validationMixin, } from 'vuelidate'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import BaseFormWrap from '@/components/base/BaseFormWrap'
import SecurityBadge from "@/components/SecurityBadge";
import BaseInput from "@/components/base/BaseInput";
import BaseCheckbox from "@/components/base/BaseCheckbox";
import BaseButton from "@/components/base/BaseButton";
import {isTrue} from "@/helpers/validators";
import loadingStatus from "@/mixins/loadingStatus";
import getCurrentTheme from "@/mixins/getCurrentTheme";
import formatCapitalize from "@/mixins/format/formatCapitalize";
import SuccessfulRegistrationForm from "@/components/forms/SuccessfulRegistrationForm";

export default {
  components: {SuccessfulRegistrationForm, BaseButton, BaseCheckbox, BaseInput, BaseFormWrap, SecurityBadge },
  mixins: [validationMixin, loadingStatus, getCurrentTheme, formatCapitalize ],

  data() {
    return {
      invalidForm: false,
      invalidText: '',
      successRegister: false,
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agreement: ''
      },
    }
  },

  validations: {
    form: {
      name: {required, minLength: minLength(3),},
      email: {required, email},
      password: {required, sameAs: sameAs('passwordConfirmation'), minLength: minLength(8)},
      passwordConfirmation: {required, minLength: minLength(8)},
      agreement: {isTrue}
    },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.required) errors.push('Required field')
      if (!this.$v.form.name.minLength) errors.push('At least 3 characters')
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.required) errors.push('Required field')
      if (!this.$v.form.email.email) errors.push('Incorrect email format')
      return errors;
    },
    passErrors() {
      const errors = [];
      if (!this.$v.form.password.required) errors.push('Required field')
      if (!this.$v.form.password.sameAs) errors.push('Passwords do not match')
      if (!this.$v.form.password.minLength) errors.push('At least 8 characters')
      return errors;
    },
    confirmErrors() {
      const errors = [];
      if (!this.$v.form.passwordConfirmation.required) errors.push('Required field')
      if (!this.$v.form.password.sameAs) errors.push('Passwords do not match')
      if (!this.$v.form.passwordConfirmation.minLength) errors.push('At least 8 characters')
      return errors;
    },
    invalidTextForm() {
      return this.invalidForm ? this.invalidText : ''
    }
  },

  methods: {
   async submit() {
      this.startLoading();
      try {
        if (!this.$v.$invalid) {
          const result = await this.$api('register', 'sanctumRegister', {
            name: this.form.name,
            email:  this.form.email,
            password:  this.form.password,
            passwordConfirmation: this.form.passwordConfirmation
          })
          if(!result.success) {
            this.invalidForm = true
            this.invalidText = Object.keys(result.errors)[0]
          } else  {
            this.successRegister = true
          }
        }
      } catch (e) {
        console.log(e)
      }
      this.stopLoading();
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-up-form {
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
    height: 18px;
    margin-top: 6px;
    margin-bottom: 0;
  }

  &__submit {
    margin-top: 16px;
    width: 100%;
  }

  &__actions {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }

  &__reset-pass {
    font-size: 15px;
    text-align: right;
    color: #FFFFFF;
    opacity: 0.4;
  }

  &__footer-text {
    font-size: 15px;
    text-align: center;
    color: #767B8B;
    margin: 5px 0 35px;

    span {
      color: #161C2F;
    }
  }

  &--dark {
    .sign-up-form__text {
      color: #FFFFFF;
    }

    .sign-up-form__reset-pass {
      color: #FFFFFF;
    }

    .sign-up-form__footer-text {
      span {
        color: #FFFFFF;
      }
    }
  }
}
</style>
