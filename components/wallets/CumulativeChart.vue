<template>
  <div class="chart">
    <div class="chart__header">
      <p class="chart__title">Cumulative PnL</p>
      <p class="chart__value">+7.65%</p>
    </div>
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
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: 'BTC gain/loss',
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
        {
          name: 'Cumulative PnL',
          data: [
            [1656955200000, 1300],
            [1657300800000, 1000],
            [1657473600000, 1700],
            [1658510400000, 1400],
            [1658769600000, 1300],
            [1659720000000, 1100],
            [1660065600000, 1200],
            [1660497600000, 1300],
            [1660843200000, 1400],
            [1661016000000, 1500],
            [1662398400000, 1600],
            [1662830400000, 1700],
            [1663003200000, 1400],
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: 'area',
          height: 350,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: [ '#FF9900', '#0066FF',],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.15,
            stops: [15, 100],
          },
        },
        legend: {
          offsetX: -50,
          offsetY: -50,
          position: 'top',
          horizontalAlign: 'right',
          fontSize: '16px',
          fontFamily: 'Jost, sans-serif',
          markers: {
            width: 15,
            height: 4,
            radius: 8,
            offsetY: -3,
            offsetX: -5
          },
          itemMargin: {
            horizontal: 20,
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
        grid: {
          show: false,
        },
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  &__header {
    padding-left: 15px;
    padding-right: 230px;
    pointer-events: none;
  }

  &__title {
    font-size: 24px;
    line-height: 28px;
    color: #2F385E;
    margin: 0;
  }

  &__value {
    font-size: 30px;
    color: #20C997;
    margin: 0;
  }
}
</style>
