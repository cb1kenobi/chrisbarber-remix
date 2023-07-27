export default function Cookies() {
	return (
		<div className="cookiebanner" style="position: fixed; left: 0px; right: 0px; height: auto; min-height: 21px; z-index: 255; background: rgb(0, 0, 0); color: rgb(221, 221, 221); line-height: 21px; padding: 16px; font-family: PragmataPro, arial, sans-serif; font-size: 14px; text-align: center; bottom: 0px; opacity: 1;">
			<div class="cookiebanner-close" style="float: right; padding-left: 5px; cursor: pointer;">✖</div>
			<span>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <a href="http://aboutcookies.org" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: rgb(170, 170, 170); font-weight: normal;">Learn more</a></span>
		</div>
	);
}
