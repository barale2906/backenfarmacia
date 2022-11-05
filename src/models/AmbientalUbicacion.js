import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Ambientalreg } from './AmbientalRegistro.js'

export const Ambientalubi = sequelize.define("ambientalUbicacion", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Ambientalubi.hasMany(Ambientalreg, {
    foreignKey: 'ubiId',
    sourceKey: 'id'
})

Ambientalreg.belongsTo(Ambientalubi,{
    foreignKey: 'ubiId',
    targetId: 'id'
})