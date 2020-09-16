import React from 'react';

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<form
				className="form-spree"
				onSubmit={this.submitForm}
				action="https://formspree.io/xgenjagq"
				method="POST"
			>
				<div className="input">
					<input placeholder="john smith" type="text" name="firstName" />
				</div>
				<div className="input">
					<input placeholder="email@email.com" type="email" name="email" />
				</div>
				<div className="input">
					<input placeholder="important!!! " type="text" name="message" />
				</div>
				<div className="input">
					<textarea name="additional text" type="text" rows="10" placeholder="hello there buddy" />
				</div>
				<div className="btn-send">{status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}</div>
				{status === 'ERROR' && <p>Ooops! There was an error.</p>}
			</form>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
