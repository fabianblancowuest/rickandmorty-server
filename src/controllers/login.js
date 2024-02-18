const { User } = require("../db_connection");

module.exports = async (req, res) => {
	const { email, password } = req.query;
	try {
		if (!email || !password) {
			return res.status(400).send("Faltan datos");
		}

		const user = await User.findOne({
			where: {
				email,
			},
		});

		if (!user) return res.status(404).send("Usuario no econtrado");

		if (password !== user.password)
			return res.status(403).send("Contraseña incorrecta");

		return res.status(200).json({ access: true });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
