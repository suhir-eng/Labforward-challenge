var app = new Vue({
	el: '#app',
	data: {
		Greeting: ''
	},

	created() {
		this.getData();

	},
	methods: {
		getData: function () {
			// Using the default id as for now we only have one user and one id (that is being updated by his input)
			// In the case of more users/more ids, we should choose the id based on each user, which requires further development
			// Please, refer to the readme report
			let id = "default";
			let url = "/hello/" + id;
			fetch(url, {
					method: "GET",
					credentials: "include",
				})
				.then((response) => response.json())
				.then(function (data) {
					console.log(data);
					app.status = data;
					if (data.id) {
						app.Greeting = data.message
					}
				})
				.catch(function (fail) {
					console.log("error")
				})
		},
		change: function () {
			let id = "default";
			let url = "/hello/" + id;
			let newGreeting = document.getElementById('newGreeting').value;
			if (newGreeting == "") {
				window.alert("Please fill your Greeting");
			} else {
				fetch(url, {
						method: "PATCH",
						body: JSON.stringify({
							message: newGreeting
						}),
						headers: {
							"Content-type": "application/json; charset=UTF-8"
						}
					})
					.then(function (data) {
						console.log(data);
						console.log(data.status);
						window.alert("Your message has been changed");
						document.getElementById('newGreeting').value = "";
					})
					.catch(function (fail) {
						console.log("fail to save")
					})

			}

		}
	}
})