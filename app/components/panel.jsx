export default function Panel({ children, className, title }) {
	return (
		<div className={`panel ${className}`}>
			<div className="panel-title">{title}</div>
			<div className="panel-content">{children}</div>
		</div>
	);
}
