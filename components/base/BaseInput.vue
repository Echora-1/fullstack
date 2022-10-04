<template>
  <div :class="['wrap', {'input-focused': focused, 'invalid': touched && invalid, 'wrap--dark': isDarkTheme, 'input-focused--dark': focused && isDarkTheme}]">
    <label :for="id" :class="['base-label', {'base-label--show': valueNotEmpty, 'base-label--dark': isDarkTheme}]">
      {{ label }}
    </label>
    <div
      class='base-input-wrapper'
    >
      <input
        v-if="!password"
        :id="id"
        class="base-input"
        v-bind="$attrs"
        :value="value"
        @focus="focusHandler"
        @input="inputHandler"
        @blur="blurHandler"
      >
      <input
        v-else
        :id="id"
        class="base-input"
        :type="passwordType"
        v-bind="$attrs"
        :value="value"
        @focus="focusHandler"
        @input="inputHandler"
        @blur="blurHandler"
      >
      <div v-if="password" class="base-input__toggle-type" @click="switchPassword">
        <icon-show v-show="passwordType === 'text'" />
        <icon-hiden v-show="passwordType === 'password'" />
      </div>
    </div>
    <p v-show=' touched && invalid' class='invalid-text'>{{ errorList[0] }}</p>
  </div>
</template>

<script>
import IconShow from "@/components/icon/IconShow";
import IconHiden from "@/components/icon/IconHiden";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {IconHiden, IconShow},
  mixins: [getCurrentTheme],
  props: {
    value: {
      type: String,
      default: ''
    },

    id: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    errorList: {
      type: Array,
      default: () => []
    },

    password: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      focused: false,
      touched: false,
      passwordType: 'password'
    }
  },

  computed: {
    valueNotEmpty() {
      return this.value.length > 0
    },

    invalid() {
      return this.errorList.length > 0
    },
  },

  methods: {
    inputHandler(event) {
      this.$emit('input', event.target.value)
    },

    focusHandler() {
      this.focused = true
    },

    blurHandler() {
      this.touched = true
      this.focused = false
    },

    switchPassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style lang='scss' scoped>

.wrap {
  position: relative;
}

.base-input-wrapper {
  border-bottom: 1px solid #161C2F1A;
  width: 100%;
  transition: all 0.5s;
  position: relative;
  margin-bottom: 25px;
  overflow: hidden;
  background: #FFFFFF;
}

.base-input {
  width: 100%;
  margin: 0;
  border: none;
  outline: none;
  padding: 13px 34px 13px 0;
  background: transparent;
  font-size: 18px;
  line-height: 26px;
  color: #161C2FB3;
  -webkit-box-shadow: inset 0 0 0 50px #FFFFFF;
  -webkit-text-fill-color: #161C2FB3;
  position: relative;
  transition: color 0.3s;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: #FFFFFF !important;
    background-image: none !important;
    color: #161C2F !important;
  }

  &__toggle-type {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #161C2FB3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.base-input::placeholder {
  color: #161C2FB3;
}

.base-label {
  font-weight: 300;
  font-size: 16px;
  color: #161C2FB3;
  opacity: 0;
  transition: all 0.5s;

  &--show {
    opacity: 1;
  }

  &--dark {
    color: #FFFFFFB3;
  }
}

.input-focused {
  .base-input-wrapper {
    border-color: #438AF9;
  }

  .base-input {
    -webkit-text-fill-color: #161C2F !important;
  }

  .base-label {
    color: #161C2F;
  }

  &--dark {
    .base-input-wrapper {
      border-color: #438AF9 !important;
    }

    .base-input {
      -webkit-text-fill-color: #FFFFFF !important;
    }

    .base-label {
      color: #FFFFFF;
    }
  }
}

.invalid {
  .base-input-wrapper {
    border-color: #DB0D00;
  }

  .base-label {
    color:  #DB0D00;
  }
}

.invalid-text {
  color: #DB0D00;
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 13px;
  line-height: 19px;
}


.wrap--dark {
  .base-input-wrapper {
    background:  #161C2F;
    border-color: #FFFFFF1A;
  }

  .base-input {
    color: #FFFFFF;
    -webkit-box-shadow: inset 0 0 0 50px #161C2F;
    -webkit-text-fill-color: #FFFFFFB3;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      background-color:#161C2F !important;
      background-image: none !important;
      color: #FFFFFF !important;
    }

    &__toggle-type {
      color: #FFFFFFB3;
    }

    &::placeholder {
      color: #FFFFFFB3;
    }
  }
}
</style>
