import Contact from '../components/contact';
import { Link } from 'remix';

export default function Index() {
	return (
		<div className="squeeze">
			<header className="bar">
				<span className="blade">
					<h1 className="blade"><Link to="/">CHRIS BARBER</Link></h1>
					.dev
				</span>
				<span className="social-icons">
					<a href="https://github.com/cb1kenobi" rel="noreferrer" target="_blank" title="GitHub">
						<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24">
							<path fill="currentColor" d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"></path>
						</svg>
					</a>
					<a href="https://www.linkedin.com/in/cb1kenobi" rel="noreferrer" target="_blank" title="LinkedIn">
						<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24">
							<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</a>
					<a href="https://twitter.com/cb1kenobi" rel="noreferrer" target="_blank" title="Twitter">
						<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
							<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
						</svg>
					</a>
				</span>
			</header>

			<div className="content">
				<div className="gutter">
					{Array(88).fill().map((x, i) => (
						<div key={i}>{i+1}</div>
					))}
				</div>

				<h2>// about</h2>
				<p>Hi, I'm Chris!</p>
				<p>I'm a Software Engineer, Node.js &amp; JavaScript guru, and open source contributor. I love architecting and crafting command line tools, web front-ends, and scalable backend services.</p>
				<p>I've been working in software development for over {new Date().getFullYear() - 2000} years, maintain over 100 open source npm packages, worked for several startups, ran a software consulting business for 6 years, former <a href="https://dojotoolkit.org" rel="noreferrer" target="_blank">Dojo Toolkit</a> committer, and current <a href="https://titaniumsdk.com" rel="noreferrer" target="_blank">Titanium SDK</a> contributor.</p>
				<p>From Minneapolis, MN, I work at <a href="https://vercel.com" rel="noreferrer" target="_blank">Vercel</a> and sit on the <a href="https://tidev.io" rel="noreferrer" target="_blank">TiDev</a> board of directors. I enjoy spending time with my family, woodworking, camp fires, and games.</p>
				<p>Check out my awesome <a href="/resume.pdf">resume</a>.</p>
				
				<h2>// projects</h2>
				<p>Here are a few of my favorite projects:</p>
				<ul>
					<li><a href="https://github.com/tidev/titanium_mobile" rel="noreferrer" target="_blank">Titanium SDK</a> - Native iOS and Android apps using JavaScript</li>
					<li><a href="https://npmjs.org/package/bryt-lite" rel="noreferrer" target="_blank">bryt-lite</a> - Get colors by brightness</li>
					<li><a href="https://npmjs.org/package/gawk" rel="noreferrer" target="_blank">gawk</a> - Observable JavaScript object model</li>
					<li><a href="https://npmjs.org/package/hook-emitter" rel="noreferrer" target="_blank">hook-emitter</a> - Function hooks with async event emitter</li>
					<li><a href="https://npmjs.org/package/nanobuffer" rel="noreferrer" target="_blank">nanobuffer</a> - A lightweight, fixed size value buffer</li>
					<li><a href="https://npmjs.org/package/snooplogg" rel="noreferrer" target="_blank">snooplogg</a> - Laid back debug logging</li>
				</ul>
				
				<h2>// contact</h2>
				<Contact/>
			</div>

			<footer className="bar">
				<span className="chevron">
					<span className="chevron ver">Version 0010.0</span>
					© {new Date().getFullYear()}
				</span>
			</footer>
		</div>
	);
}
