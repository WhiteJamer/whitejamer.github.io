Vue.filter('truncate', function (value, limit) {
  if (value.length > limit) {
      value = value.substring(0, (limit - 3)) + '...';
  }

  return value
})

new Vue({
	el: '#app',
	data :{
		items: null,
		show: false,
    item: ' ',
	},
  methods: {
    getItem: function(item){
      this.item = item;
    }
  },
	mounted () {
    axios
      .get('https://whitejamer.pythonanywhere.com/portfolio/admin/')
      .then(response => (this.items = response.data))
  }
});
