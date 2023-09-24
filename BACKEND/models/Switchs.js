import { Model, DataTypes } from "sequelize";

class Switchs extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    field: "id",
                    type: DataTypes.BIGINT.UNSIGNED,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true,
                    allowNull: false,
                    notEmpty: true,
                    required: true,
                },
                local: {
                    field: "local",
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: true,
                    notEmpty: true,
                },
                hostname: {
                    field: "hostname",
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    notEmpty: true,
                    comment: "Encrypted with 64 digits",
                },
            
                ip: {
                    field: "ip",
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    notEmpty: true,
                    comment: "Encrypted with 64 digits",
                },
            
                switchborda: {
                    field: "switchborda",
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    notEmpty: true,
                    comment: "Encrypted with 64 digits",
                },
            
            
                tableName: "switchs",
                charset: "utf8mb4",
                collate: "utf8mb4_bin",
                sequelize,
                defaultScope: {
                    attributes: {
                        exclude: [
                            "password", // To not return password
                        ],
                    },
                },
                scopes: {
                    withPassword: {
                        attributes: { include: ["password"] },
                    },
                },
            }
        );
    }
}

export default Switchs;