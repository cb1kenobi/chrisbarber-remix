import { json } from 'remix';
import nodemailer from 'nodemailer';

export async function action({ request }) {
	try {
		let { name, email, message } = await request.json();

		if (!name || typeof name !== 'string' || !email || typeof email !== 'string' || !message || typeof message !== 'string') {
			return json({ success: false }, { status: 400 })
		}

		name = name.trim().substring(0, 50);
		email = email.trim().substring(0, 50);
		message = message.trim().substring(0, 5000);

		const data = {
			from: '"chrisbarber.dev Contact Form" <noreply@chrisbarber.dev>',
			to: 'chris@cb1inc.com',
			replyTo: email,
			subject: '[chrisbarber.dev] New message from your website!',
			text: `"${name}" has sent you a message!

Email address: ${email}
Time sent: ${new Date().toLocaleString()}
User agent: ${request.headers.get('user-agent')}

${message}`
		};

		const transporter = nodemailer.createTransport({
			auth: {
				user: 'xxxxxxxxxxxxxxxxxxxxx',
				pass: 'xxxxxxxxxxxxxxxxxxxxx',
			},
			host: 'xxxxxxxxxxxxxxxxx',
			port: 587,
			requireTLS: true
		});

		// console.log('Sending email:');
		// console.log(data);

		await new Promise((resolve, reject) => {
			transporter.sendMail(data, err => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});

		return json({ success: true });
	} catch (e) {
		return json({ success: false }, { status: 500 })
	}
}
