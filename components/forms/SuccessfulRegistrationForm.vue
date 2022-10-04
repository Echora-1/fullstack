<template>
  <base-form-wrap :content="{title: 'Activation'}">
    <div :class="['success-register-form', {'success-register-form--dark': isDarkTheme}]">
      <div class="success-register-form__form">
        <p class="success-register-form__text">Please, activate your account by checking activation link in your email. Activation link is valid for 1 hour</p>
        <base-input
          :value="email"
          type="email"
          id="email"
          name="email"
          class="success-register-form__input"
          label="Email *"
          placeholder="Email *"
          readonly
        />
      </div>
    </div>
  </base-form-wrap>
</template>
<script>
import BaseFormWrap from "@/components/base/BaseFormWrap";
import getCurrentTheme from "@/mixins/getCurrentTheme";
import BaseInput from "@/components/base/BaseInput";
export default {
  components: {BaseInput, BaseFormWrap},
  mixins: [getCurrentTheme],
  props: {
    email: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.success-register-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__text {
    font-size: 16px;
    margin: 0 0 15px;
    text-align: center;
    color: #161C2F;
    max-width: 312px;
  }

  &__form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input {
    width: 100%;
  }


  &--dark {
    .success-register-form__text {
      color: #FFFFFF;
      opacity: 0.35;
    }

    .success-register-form__reset-pass {
      color: #FFFFFF;
    }
  }
}
</style>
