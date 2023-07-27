import { useEffect, useRef, useState } from 'react';

export default function Contact() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ submitted, setSubmitted ] = useState(false);
	const [ disabled, setDisabled ] = useState(true);

	const firstRender = useRef(true);
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		setDisabled(!(name && email && message && /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)));
	}, [ name, email, message ]);

	const handleSubmit = e => {
		e.preventDefault();
		if (disabled) {
			return;
		}
		setDisabled(true);

		fetch('/hello', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		}).then(res => {
			setDisabled(false);
			if (res.status === 200) {
				setSubmitted(true);
				setName('');
				setEmail('');
				setMessage('');
			} else {
				console.error(`Status ${res.status}!`);
			}
		}).catch(err => {
			setDisabled(false);
			setSubmitted(false);
			console.error(err);
		});
	};

	if (submitted) {
		return (
			<p>Thanks! I'll get back to you soon!</p>
		);
	}

	return (
		<>
			<p>Feel free to drop me a message:</p>
			<p className="contact"><label>Name:</label> <input type="text" maxLength="50" onChange={e => setName(e.target.value.trim())} /></p>
			<p className="contact"><label>Email:</label> <input type="email" maxLength="50" onChange={e => setEmail(e.target.value.trim())} /></p>
			<p className="contact contact-submit"><label>Message:</label> <textarea maxLength="5000" onChange={e => setMessage(e.target.value.trim())}></textarea> <button disabled={disabled} onClick={e => handleSubmit(e)}>Submit</button></p>
		</>
	);
}
