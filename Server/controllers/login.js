const users = require("../utils/users");

const login = (req, res) => {
	const { email, password } = req.query;
	let access = false;
	const foundUser = users.find(
		(user) => user.email === email && user.password === password,
	);
	if (foundUser) access = true;
	return res.json({ access });
};

module.exports = {
	login,
};
