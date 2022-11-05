import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Inventario } from './Inventario.js';
import { TecnicaDetalle } from './TecnicaDetalle.js';


export const TecnicaEncabezado = sequelize.define("tecnicaEncabezados", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    transportadora: {
        type: Sequelize.STRING,
        allowNull: true
    },
    factura: {
        type: Sequelize.STRING,
        allowNull: false
    },
    embalaje: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    observaciones: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    valor:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    valorPagado:{
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 en proceso, 2 aprobada, 3 desaprobada, 4 abonada, 5 pagada
    }
});

// Activar la relación con tecnica Detalle
TecnicaEncabezado.hasMany(TecnicaDetalle, {
    foreignKey: 'encabId',
    sourceKey: 'id'
})

TecnicaDetalle.belongsTo(TecnicaEncabezado,{
    foreignKey: 'encabId',
    targetId: 'id'
})

// Actualizar registro después de cerrar 
TecnicaEncabezado.afterUpdate((datos)=>{
    const status = datos.status
    const encab = datos.id

    Inventario.update(
        {status: status},
        {
            where: {
                encabId: encab
            }
        }
    )
 })
 