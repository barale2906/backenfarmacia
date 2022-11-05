import { Efectivo } from "../models/Efectivo.js";
import { Bodegas } from "../models/Bodega.js"


// Obtener el saldo actual por Bodega
export async function getEfectivos(req, res) {
  try {
        const efectivos = await Efectivo.findOne({
          order:[
            ['id','DESC']
          ]
        })
        res.status(201).json(efectivos);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
}
 
// Crear Efectivo
export async function createEfectivo(req, res) {
    //const { code, name, description, unit, imagen } = req.body;
    try {        
        let newEfectivo = await Efectivo.create(req.body);
        return res.status(201).json(newEfectivo);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Selecciona Saldo por bodega
export async function getEfectivo(req, res) {
    const { id } = req.params;
    try {
      const efectivo = await Efectivo.findOne({
        order:[
          ['id','DESC']
        ],
        where: {
          "bodegaId":id,
        }
      })
      res.status(201).json(efectivo);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

//Actualizar Efectivo
export const updateEfectivo = async (req, res) => {
    try {
      const { id } = req.params;
      //const { code, description, unit, imagen } = req.body;  
      const efectivo = await Efectivo.findByPk(id);        
        efectivo.set(req.body);      
      await efectivo.save();
  
      res.status(200).json(efectivo);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Eliminar registro
  
export async function deleteEfectivo(req, res) {
    const { id } = req.params;
    try {
      await Efectivo.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

//Selecciona movimientos por bodega
export async function getEfectivoMovimiento(req, res) {
  const { id } = req.params;
  try {
    const efectivo = await Efectivo.findAll({     
      where: {
        "bodegaId":id
      }
    })
    res.status(201).json(efectivo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

//Selecciona movimientos por usuario
export async function getEfectivoUser(req, res) {
  const { id } = req.params;
  try {
    const efectivo = await Efectivo.findAll({
      include:[{model:Bodegas}],     
      where: {
        "userId":id,
        "status":1
      }
    })
    res.status(201).json(efectivo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
} 
