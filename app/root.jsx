import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'remix';

import styles from './styles/app.css';

export function links() {
	return [
		{ rel: 'stylesheet', href: styles },
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono&display=swap' }
	];
}

export function meta() {
	const url = 'https://chrisbarber.dev';
	const title = 'Chris Barber'
	const description = 'Chris Barber is a software architect, JavaScript/Node.js guru, and open source contributor living in Minneapolis, MN.';
	const image = 'https://chrisbarber.dev/og-cover.png';

	return {
		title,
		description,

		'og:description': description,
		'og:image': image,
		'og:image:width': 1200,
		'og:image:height': 630,
		'og:locale': 'en_US',
		'og:site_name': title,
		'og:title': title,
		'og:type': 'website',
		'og:url': url,

		'twitter:card': 'summary_large_image', // or 'summary'
		'twitter:creator': '@cb1kenobi',
		'twitter:image': image,
		'twitter:site': '@cb1kenobi'
	};
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
				{process.env.NODE_ENV !== 'development' && ga()}
			</body>
		</html>
	);
}

function ga() {
	return (
		<>
			<script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-CW0344J1YY"></script>
			<script dangerouslySetInnerHTML={{
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag() { dataLayer.push(arguments); }
					gtag('js', new Date());
					gtag('config', 'G-CW0344J1YY');
				`
			}}/>
		</>
	);
}
