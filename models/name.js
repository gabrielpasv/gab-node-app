module.exports = function(sequelize, DataTypes){
	var name = sequelize.define('name', {
		'name': DataTypes.STRING
	});

	return name;
}