const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("User", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			unique: true,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			isEmail: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			isEmail: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		birthdate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		sex: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
