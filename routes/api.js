
module.exports = (router) => {
	// route to back-end sign in
	router.post('/status', (req, res) => {
		res.json({ success: true});
	});

	return router;
};