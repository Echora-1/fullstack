import moment from 'moment';

export default {
	methods: {
		formatDate(date, type) {
			if (!date) return '—';
      const timestamp = parseInt(date);
      const userLang = 'en';
			switch (type) {
				case 'trading':
					return moment
						.utc(timestamp)
						.format('YYYY-MM-DD HH:mm:ss');
				case 'dateOnly':
					return new Date(date).toLocaleDateString();
				case 'timeOnly':
					return new Date(date).toLocaleTimeString();
				case 'timeAgo':
					return this.$moment(date)
						.locale(userLang)
						.fromNow();
				default:
					return new Date(date).toLocaleString();
			}
		},
	},
};
