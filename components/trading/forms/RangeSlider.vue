<template>
  <div class="slider slider-disabled">
    <div class="slider__line" ref="sliderLine">
      <div class="slider__bar" :style="`width: ${currentPercent}%`"></div>
    </div>
    <div
      class="slider__btn"
      :data-value="`${currentPercent}%`"
      :style="`left: calc(${currentPercent}% - 11px)`"
      ref="sliderBtn"
    ></div>
    <ul class="slider__step">
      <li
        v-for="step in steps"
        :key="step"
        data-value="0"
        @click="() => setPercent(step)"
        :class="[{ 'slider__step--active': currentPercent >= step }, 'is-gray']"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      steps: [0, 25, 50, 75, 100],
      lineState: null,
      lineWidth: 0,
      lineStart: 0,
      lineEnd: 0,
      onePercentInPixels: 0,
      currentPercent: 0,
      btnPressed: false,
    }
  },

  watch: {
    lineState() {
      this.initSettings()
    },
  },

  mounted() {
    this.currentPercent = this.percent
    this.setLineState()
    this.initSettings()
    this.$refs.sliderBtn.addEventListener('mousedown', this.onBtnPressed)
    this.$refs.sliderLine.addEventListener('click', this.setCurrentPercent)
    window.addEventListener('resize', this.setLineState)
    document.addEventListener('mouseup', this.offBtnPressed)
    document.addEventListener('mousemove', this.setPercentOnMousemove)
  },

  beforeUnmount() {
    this.$refs.sliderBtn.removeEventListener('mousedown', this.onBtnPressed)
    this.$refs.sliderLine.removeEventListener('click', this.setCurrentPercent)
    window.removeEventListener('resize', this.setLineState)
    document.removeEventListener('mouseup', this.offBtnPressed)
    document.removeEventListener('mousemove', this.setPercentOnMousemove)
  },

  methods: {
    initSettings() {
      this.lineWidth = this.lineState.width
      this.lineStart = this.lineState.x
      this.lineEnd = this.lineStart + this.lineWidth
      this.onePercentInPixels = this.lineWidth / 100
    },

    setCurrentPercent(e) {
      this.currentPercent = Math.round(
        (e.pageX - this.lineStart) / this.onePercentInPixels
      )
      this.emitPercentChange()
    },

    setLineState() {
      this.lineState = this.$refs.sliderLine.getBoundingClientRect()
    },

    onBtnPressed() {
      this.btnPressed = true
    },

    offBtnPressed() {
      this.btnPressed = false
    },

    emitPercentChange() {
      this.$emit('percent-change', this.currentPercent)
    },

    setPercentOnMousemove(e) {
      if (
        this.btnPressed &&
        this.lineStart <= e.pageX &&
        e.pageX <= this.lineEnd
      ) {
        this.setCurrentPercent(e)
      }
    },

    setPercent(percent) {
      this.currentPercent = percent
      this.emitPercentChange()
    }
  },
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  user-select: none;
  margin: 0 10px 39px;

  &:hover {
    .slider__btn:before,
    .slider__btn:after {
      visibility: visible;
      opacity: 1;
    }
  }

  &__line {
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    height: 4px;
    width: 100%;
    max-width: 100%;
    background-color: #161c2f66;
    border-radius: 2px;
    z-index: 8;
    top: 8px;


  }

  &__bar {
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    height: 4px;
    width: 100%;
    max-width: 100%;
    background-color: #161c2fcc;
    border-radius: 2px;
    z-index: 9;
    top: 0;
  }

  &__btn {
    height: 22px;
    width: 22px;
    position: absolute;
    top: -1px;
    z-index: 11;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid #fff;
    background-color: #a2a4ac;
    background-image: url('../../../assets/images/range-slider-bg.svg');
    background-repeat: no-repeat;
    background-position: center;

    &:before {
      visibility: hidden;
      opacity: 0;
      padding: 0 8px;
      color: #FFFFFF;
      content: attr(data-value);
      position: absolute;
      top: -33px;
      background-color:  #a2a4ac;
      height: 24px;
      font-size: 14px;
      line-height: 24px;
      border-radius: 4px;
      text-align: center;
      transition: all .2s;
      white-space: nowrap;
      left: 50%;
      transform: translateX(-50%);
    }

    &:after {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: -9px;
      left: 3px;
      content: "";
      width: 0;
      height: 0;
      overflow: hidden;
      border: 5px dashed transparent;
      border-top: 5px solid #a2a4ac;
      transition: all .2s;
    }

    &:hover {
      &:before,
      &:after {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &__step {
    position: relative;
    z-index: 9;

    & > li {
      position: absolute;
      top: 5px;
      height: 10px;
      width: 12px;
      cursor: pointer;
      vertical-align: baseline;
      background-color: #ffffff;

      &:before {
        width: 5px;
        height: 10px;
        border-radius: 5px;
        position: absolute;
        content: '';
        overflow: hidden;
        background-color: #a2a4ac;
        left: 50%;
        transform: translateX(-50%);
        /*       border: 4px solid #FFFFFF;*/
      }
    }

    li:first-child {
      left: -3px;
    }

    li:nth-child(2) {
      left: calc(25% - 6px);
    }

    li:nth-child(3) {
      left: calc(50% - 6px);
    }

    li:nth-child(4) {
      left: calc(75% - 6px);
    }

    li:last-child {
      left: auto !important;
      right: -3px;
    }
  }

  .slider__step--active {
    &:before {
      background-color: #161c2fcc;
    }
  }
}
</style>
