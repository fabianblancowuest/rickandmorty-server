const { User } = require("../db_connection");

module.exports = async (req, res) => {
	const { name, email, password, birthdate, sex } = req.body;

	try {
		if (!name || !email || !password || !birthdate || !sex)
			return res.status(400).send("Faltan datos");

		const existingUser = await User.findOne({
			where: {
				email,
			},
		});

		if (existingUser) {
			return res.status(400).send("El usuario ya existe");
		}

		const user = await User.findOrCreate({
			where: { name, email, password, birthdate, sex },
		});

		return res.status(200).json(user);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
