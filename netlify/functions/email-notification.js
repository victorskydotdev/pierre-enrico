const Mailgun = require('mailgun.js');
const formData = require('form-data');
const key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

exports.handler = async (event) => {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ message: 'Method Not Allowed' }),
		};
	}

	if (!event.body) {
		return {
			statusCode: 400,
			body: JSON.stringify({ message: 'No request body found' }),
		};
	}

	if (!key || !domain) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Mailgun credentials not set' }),
		};
	} else console.log('Mailgun credentials are set');

	const data = JSON.parse(event.body);

	// Initialize Mailgun
	const mailgun = new Mailgun(formData);
	const mg = mailgun.client({
		username: 'api',
		key: key,
		// url: 'https://api.eu.mailgun.net', // eu region
		url: 'https://api.mailgun.net', // us region
	});

	const message = {
		from: `Excited User <mailgun@${domain}>`,
		to: 'Pierre Enrico Immobilear <admin@pierreenricoimmobilier.com>',
		subject: 'Form Notification',
		text: `Name: ${data.firstVisitDate}\nEmail: ${data.firstVisitTime}\nMessage: ${data.message}`,
	};

	try {
		await mg.messages.create(
			'sandbox9e7a6242f1b74438aad577f11b0f6501.mailgun.org',
			message
		);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Email sent successfully!' }),
		};
	} catch (error) {
		console.error('Mailgun error:', error);

		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Failed to send email' }),
		};
	}
};
