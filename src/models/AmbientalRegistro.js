import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Ambientalubi } from './AmbientalUbicacion.js'

export const Ambientalreg = sequelize.define("ambientalRegistros", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    variable: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor:{
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

