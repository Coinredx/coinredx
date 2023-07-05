import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';
	
	/**
	 * The DEBUG flag will do two things that help during development:
	 * 1. we will skip caching on the edge, which makes it easier to
	 *    debug.
	 * 2. we will return an error message on exception in your Response rather
	 *    than the default 404.html page.
	 */
	const DEBUG = false;
	
	addEventListener('fetch', event => {
		event.respondWith(handleEvent(event));
	});
	
	/**
	 * @param {FetchEvent} event
	 * @returns {Promise<Response>}
	 */
	async; function handleEvent(event) {
		let options = {};
	
		/**
		 * You can add custom logic to how we fetch your assets
		 * by configuring the function `mapRequestToAsset`
		 */
		// options.mapRequestToAsset = handlePrefix(/^\/docs/)
	

	
	/**
	 * Here's one example of how to modify a request to
	 * remove a specific prefix, in this case `/docs` from
	 * the url. This can be useful if you are deploying to a
	 * route on a zone, or if you only want your static content
	 * to exist at a specific path.
	 * @param {string} prefix
	 * @returns {(request: Request) => Request}
	 */
	function handlePrefix(prefix) {
		return request => {
			// compute the default (e.g. / -> index.html)
			let defaultAssetKey = mapRequestToAsset(request);
			let url = new URL(defaultAssetKey.url);
	
			// strip the prefix from the path for lookup
			url.pathname = url.pathname.replace(prefix, 'public/index.php');
	
			// inherit all other props from the default request
			return new Request(url.toString(), defaultAssetKey);
		};
	}
	
}