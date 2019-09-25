module.exports = (sequelize, DataTypes) => {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: (val) => {
                if(val.length < 1) {
                    throw new Error("Burger name must be at least 1 character");
                }
            }
        }, 
        devoured : {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    }, {
        timestamps: false
    });

    return Burger;
}