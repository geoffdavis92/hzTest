// app

const horizon = Horizon(),
	chat = horizon('messages'),
	ItemComponent = React.createClass({
		render: function() {
			return (
				<li className="post">
					<span className="post-author">{this.props.src.author}</span>
					<span className="post-timestamp">{this.props.src.datetime.toString().split(' GMT')[0]}</span>
					<span className="post-message">{this.props.src.text}</span>
				</li>
			)
		}
	}),
	ItemList = React.createClass({
		render: function() {
			const posts = []
			return (
				<ul>
					<li>beefchain</li>
				</ul>
			)
		}
	})

let message = {
	text: 'horizon is cool',
	datetime: new Date(Date.now()),
	author: '@gdavis92'
}

chat.store(message)

chat.fetch().subscribe(
	(item) => {
		item.forEach((item) => {
			// console.log(item)
			window.Item = item
		})
	},
	(err) => console.log(err)
)

ReactDOM.render(<ItemList/>,document.querySelector(`#app`))
