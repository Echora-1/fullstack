<template>
  <thead class="bid-list-table-header">
    <tr>
      <th class="bid-list-table-header__th">
        <div
          class="bid-list-table-header__item bid-list-table-header__item--price"
        >
          <span>{{ $t('Price') }}</span>
          <span>({{ market }})</span>
        </div>
      </th>

      <th class="bid-list-table-header__th">
        <div class="bid-list-table-header__item">
          <span>{{ $t('Amount') }}</span>
          <span>({{ currency }})</span>
        </div>
      </th>

      <th class="bid-list-table-header__th">
        <div class="bid-list-table-header__item">
          {{ $t('Total(TBCC)') }}
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'BidListTableHeader',
  props: {
    currency: {
      type: String,
      required: true,
    },
    market: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.bid-list-table-header {
  &__th {
    padding-right: 0 !important;
    box-shadow: none !important;

    &:not(:first-child) {
      padding-right: 0 !important;
    }

    &:first-child {
      padding-left: 0 !important;
    }
  }

  &__item {
    letter-spacing: -0.41px;
    color: #161c2f;
    font-weight: 500;
    font-size: 13px;
    opacity: 0.6;
    display: flex;
    justify-content: end;

    &--price {
      justify-content: start;
    }
  }
}
</style>
