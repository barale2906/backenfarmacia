import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'

export const Basicos = sequelize.define("basicos", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    adress:{ 
        type: Sequelize.STRING,
        allowNull: false
    },
    ciudad:{ 
        type: Sequelize.STRING,
        allowNull: false
    },
    phone:{ 
        type: Sequelize.STRING,
        allowNull: false
    },
    actividad:{ 
        type: Sequelize.STRING,
        allowNull: false
    },
    resolucion:{
        type: Sequelize.STRING,
        allowNull: true
    },
    representante:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 activo, 2 inactivo
    }
});