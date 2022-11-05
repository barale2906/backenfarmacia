import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Inventario } from './Inventario.js';


export const TecnicaDetalle = sequelize.define("tecnicaDetalles", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    cum: {
        type: DataTypes.STRING,
        allowNull: false
    },
    generico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comercial: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lote: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    expiration: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    invima: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tipoproducto: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    etiquetado: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    embalajePrimario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    embalajeSecundario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    condicionesPresentacionLiquida: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cierresHermeticos: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    ,
    condicionesDM: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cantidad:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    costo:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    cumple:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 cumple, 2 No Cumple
    }
});

// cargar registro en inventarios
TecnicaDetalle.afterCreate((detalle)=>{
   

    const creado = Inventario.create({
        lote: detalle.lote,
        expiration: detalle.expiration,
        cantidad: detalle.cantidad,
        costo: detalle.costo,
        observations: detalle.observations,
        idTecnicalDetalle: detalle.id,
        bodegaId: detalle.bodegaId,
        prodId: detalle.prodId,
        encabId: detalle.encabId
    });

})
