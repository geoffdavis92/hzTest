"use strict";

// app

var horizon = Horizon(),
    chat = horizon('messages'),
    ItemComponent = React.createClass({
	displayName: "ItemComponent",

	render: function render() {
		return React.createElement(
			"li",
			{ className: "post" },
			React.createElement(
				"span",
				{ className: "post-author" },
				this.props.src.author
			),
			React.createElement(
				"span",
				{ className: "post-timestamp" },
				this.props.src.datetime.toString().split(' GMT')[0]
			),
			React.createElement(
				"span",
				{ className: "post-message" },
				this.props.src.text
			)
		);
	}
}),
    ItemList = React.createClass({
	displayName: "ItemList",

	render: function render() {
		var posts = chat.fetch().subscribe(function (item) {
			item.map(function () {
				return React.createElement(ItemComponent, { src: item });
			});
		});
		return React.createElement(
			"ul",
			null,
			posts
		);
	}
});

var message = {
	text: 'horizon is cool',
	datetime: new Date(Date.now()),
	author: '@gdavis92'
};

chat.store(message);

chat.fetch().subscribe(function (item) {
	item.forEach(function (item) {
		console.log(item);
		window.Item = item;
	});
}, function (err) {
	return console.log(err);
});

ReactDOM.render(React.createElement(ItemList, null), document.querySelector('#app'));
