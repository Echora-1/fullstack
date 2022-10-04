<template>
    <div class="dashboard__chart chart">
      <div class="chart__header">
        <current-balance class="chart__stat" :content="balance" />
        <div class="chart__btns">
          <button
            v-for="(item, index) in chartBtns"
            :key="index"
            :class="['chart__btn ', { 'chart__btn--active': timeline === item }]"
            @click="setTimeline(item)"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <div  class="chart__main">
        <client-only>
          <apexchart
            width="100%"
            height="250"
            type="area"
            :options="chartOptions"
            :series="series"
            ref="chart"
          ></apexchart>
        </client-only>
      </div>
    </div>
</template>

<script>
import timeConverter from '@/helpers/timeConverter'
import CurrentBalance from "@/components/common/CurrentBalance";

export default {
  components: {CurrentBalance},
  data() {
    return {
      balance: {
        title: 'Est. total value',
        cryptoCurrency: '0.21674639 BTC',
        currency: '$6,392.56',
      },
      series: [
        {
          name: 'USD',
          data: [
            [1656955200000, 1000],
            [1657300800000, 1200],
            [1657473600000, 1300],
            [1658510400000, 1400],
            [1658769600000, 1200],
            [1659720000000, 1000],
            [1660065600000, 1500],
            [1660497600000, 1100],
            [1660843200000, 1300],
            [1661016000000, 1600],
            [1662398400000, 1700],
            [1662830400000, 1300],
            [1663003200000, 1400],
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: 'line',
          height: 350,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ['#0066E1', '#0066E1'],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.15,
            stops: [15, 100],
          },
        },
        markers: {
          size: 0,
          colors: '#fff',
          strokeColors: ['#2F385E'],
          strokeWidth: [2],
          fillOpacity: 1,
          shape: 'circle',
          radius: 10,
          offsetX: 0,
          offsetY: 0,
          hover: {
            size: undefined,
            sizeOffset: 4,
          },
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            style: {
              colors: ['#161C2F'],
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'Jost, sans-serif',
              cssClass: 'x-label',
            },
            datetimeFormatter: {
              year: 'yyyy',
              month: 'MMM yy',
              day: 'dd MMM',
              hour: 'HH:mm',
            },
          },
          axisBorder: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          custom({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="arrow_box">' +
              '<p>' +
              '$' +
              series[seriesIndex][dataPointIndex] +
              '</p>' +
              '<span>' +
              timeConverter(w.config.series[0].data[dataPointIndex][0]) +
              '</span>' +
              '</div>'
            )
          },
        },
        grid: {
          show: false,
        },
      },
      chartBtns: ['1d', '3d', '1w', '1m', '3m'],
      timeline: '',
    }
  },

  methods: {
    setTimeline(t) {
      this.timeline = t
    }
  },

  watch: {
    timeline(val) {
      console.log(val)
      switch (val) {
        case '1d':
          this.$refs.chart.zoomX(
            new Date('12 Sep 2022').getTime(),
            new Date('12 Sep 2022').getTime()
          )
          break
        case '3d':
          this.$refs.chart.zoomX(
            new Date('9 Sep 2022').getTime(),
            new Date('12 Sep 2022').getTime()
          )
          break
        case '1w':
          this.$refs.chart.zoomX(
            new Date('5 Sep 2022').getTime(),
            new Date('12 Sep 2022').getTime()
          )
          break
        case '1m':
          this.$refs.chart.zoomX(
            new Date('12 Aug 2022').getTime(),
            new Date('12 Sep 2022').getTime()
          )
          break
        case '3m':
          this.$refs.chart.zoomX(
            new Date('12 Jul 2022').getTime(),
            new Date('12 Sep 2022').getTime()
          )
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__btns {
    padding: 3px 7px;
    width: fit-content;
    display: flex;
    background: #edeff6;
    border-radius: 6px;
  }

  &__btn {
    width: 40px;
    height: 28px;
    border-radius: 6px;
    color: #77818b;

    &:not(:last-child) {
      margin-right: 3px;
    }

    &--active {
      background: #ffffff;
      color: #2f385e;
    }
  }

  &__main {
    overflow: hidden;
    height: 265px;
  }
}
</style>
