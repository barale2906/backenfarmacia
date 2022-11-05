import { ListaPrecio } from "../models/ListaPrecios.js";
import { Productos } from "../models/Producto.js";



// Obtener el total de los listaPrecios
export async function getListaPrecios(req, res) {
    try {
      const { encabezado } = req.params;
      const listaPrecios = await ListaPrecio.findAll({
        
      });
      res.json(listaPrecios);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}
 
// Crear listaPrecio
export async function createListaPrecio(req, res) {
    
    try {        
        let newListaPrecio = await ListaPrecio.create(req.body);
        return res.status(201).json(newListaPrecio);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Lista precios por encabezado
export async function getListaPrecio(req, res) {
    const { id } = req.params;
    try {
      const listaPrecio = await ListaPrecio.findAll({
        
        where: {
          lpencabId:id
        }
      });

      if(!listaPrecio)
        return res.status(404).json({message: "does not exists"});

      res.json(listaPrecio);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

// Detalle de un registro de LP
export async function getListaPrecioDeta(req, res) {
  const { de } = req.params;
  try {
    const listaPrecio = await ListaPrecio.findByPk(de, {
      include: {model:Productos}
    });

    if(!listaPrecio)
      return res.status(404).json({message: "does not exists"});

    res.json(listaPrecio);


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Verificar producto en una lista de precios
export async function getExisteProLp(req, res) {
  const { enc, pro } = req.params;
  try {
    const listaPrecio = await ListaPrecio.findAll({
      where: {
        lpencabId:enc,
        prodId:pro
      }
    });

    if(listaPrecio.length===0){
      return res.status(404).json({message: "does not exists"});
    } else {
      return res.status(201).json({message: "exists"});
    }
      

    


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

//Actualizar listaPrecio
export const updateListaPrecio = async (req, res) => {
    try {
      const { id } = req.params;
      //const { code, description, unit, imagen } = req.body;  
      const listaPrecio = await ListaPrecio.findByPk(id);        
        listaPrecio.set(req.body);      
      await listaPrecio.save();
  
      res.status(200).json(listaPrecio);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
