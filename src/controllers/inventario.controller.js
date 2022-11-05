import { Inventario } from "../models/Inventario.js";
import { Productos } from "../models/Producto.js";

// Obtener el total de los Inventarios
export async function getInventarios(req, res) {
    try {
      const inventarios = await Inventario.findAll({
        include:[{model:Productos}],
        //order:['prodId', 'ASC'],
        where: {
          status:2
        }
      });
      res.status(201).json(inventarios);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Crear Inventario
export async function createInventario(req, res) {
    //const { code, name, description, unit, imagen } = req.body;
    try {        
        let newInventario = await Inventario.create(req.body);
        return res.json(newInventario);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un Inventario
export async function getInventario(req, res) {
    const { id } = req.params;
    try {
      const inventario = await Inventario.findByPk(id);

      if(!inventario)
        return res.status(404).json({message: "does not exists"});

      res.json(inventario);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar Inventario
export const updateInventario = async (req, res) => {
    try {
      const { id } = req.params;
      //const { code, description, unit, imagen } = req.body;  
      const inventario = await Inventario.findByPk(id);        
        inventario.set(req.body);      
      await inventario.save();
  
      res.status(200).json(inventario);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Obtener inventario por producto y bodega
export async function getinventafactura(req, res) {   
  const { bod } = req.params; 
  const {producto} = req.params;
  try {
    const listaEncabezado = await Inventario.findAll({
      order:['expiration'],      
      where:{
        bodegaId:bod,
        prodId:producto,
        status:2
      }
    });
    res.status(201).json(listaEncabezado);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  
}
