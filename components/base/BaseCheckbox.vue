<template>
  <label :class="['wrapper', {'wrapper--dark': isDarkTheme}]">
    <span class="wrapper__label">
          {{label}}
    </span>
    <input v-model='model' class="checkbox" type="checkbox" :name='name' :value="value" />
    <span class="checkmark">
      <icon-check />
    </span>
  </label>
</template>

<script>
import IconCheck from "@/components/icon/IconCheck";
import getCurrentTheme from "@/mixins/getCurrentTheme";
export default {
  components: {IconCheck},
  mixins: [getCurrentTheme],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    "label": { type: String, default: "", required:true },
    "checked": { default: "" },
    "value": { default: undefined },
    "name": { type: String, default: "" },
  },
  computed: {
    model: {
      get() {
        console.log(this.checked)
        return this.checked;
      },
      set(value) {
        console.log(value);
        this.$emit('change', value);
      },
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;

  &__label {
     font-weight: 400;
     font-size: 15px;
     color: #161C2F;
     opacity: 0.7;
   }
}
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  border: 1px solid #161C2F66;
  border-radius: 4px;
  background: transparent;
  transition: all 0.5s;
}
.wrapper:hover input ~ .checkmark {
  border-color: rgba(0, 115, 210, 0.5);
}
.wrapper input:checked ~ .checkmark {
  border-color: #438AF9;
}
.wrapper:hover input ~ .checkmark > svg {
  opacity: 0.3;
}
.checkmark > svg {
  position: absolute;
  fill: #438AF9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
  opacity: 0;
}
.wrapper input:checked ~ .checkmark > svg {
  opacity: 1;
}

.wrapper--dark {
  .wrapper__label {
    color: #FFFFFF;
  }

  .checkmark {
    border: 1px solid #FFFFFF66;
  }
}
</style>
