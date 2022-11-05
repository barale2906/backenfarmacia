import { ListaPrecioEncabezado } from "../models/ListaPreciosEncabezado.js";
import { Bodegas } from "../models/Bodega.js"

// Obtener el total de los listaPrecios
export async function getListaEncabezados(req, res) {    
    try {
      const listaEncabezado = await ListaPrecioEncabezado.findAll({
        include: [{model: Bodegas}],
        
      });
      res.json(listaEncabezado);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    
}

// Crear listaEncabezado
export async function createListaEncabezado(req, res) {
    //const { code, name, description, unit, imagen } = req.body;
    try {        
        let newListaEncabezado = await ListaPrecioEncabezado.create(req.body);
        return res.status(201).json(newListaEncabezado);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}

//Detalles de lista Encabezado
export async function getListaEncabezado(req, res) {
    const { id } = req.params;
    try {
      const listaEncabezado = await ListaPrecioEncabezado.findByPk(id,{
        include: [{model: Bodegas}],
      });

      if(!listaEncabezado)
        return res.status(404).json({message: "does not exists"});

      res.json(listaEncabezado);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

//Actualizar listaEncabezado
export const updateListaEncabezado = async (req, res) => {
    try {
      const { id } = req.params;
      //const { code, description, unit, imagen } = req.body;  
      const listaEncabezado = await ListaPrecioEncabezado.findByPk(id);        
        listaEncabezado.set(req.body);      
      await listaEncabezado.save();
  
      res.json(listaEncabezado);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// Activar Desactivar Lista

export async function deleteListaEncabezado(req, res) {
    const { id } = req.params;
    try {

      const { id, status } = req.params;     

      // Actualiza el estado en el encabezado de la recepción técnica.  
      const listaEnc = await ListaPrecioEncabezado.findByPk(id);
        
        listaEnc.set({"status": status});

      await listaEnc.save();        
      
  
      res.status(200).json(listaEnc);
      
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

// Obtener listaPrecios vigente por bodega
export async function getListaEncavigente(req, res) {   
  const { bod } = req.params; 
  try {
    const listaEncabezado = await ListaPrecioEncabezado.findOne({
      include: [{model: Bodegas}],
      where:{
        bodegaId:bod,
        status:2
      },
      
    });
    res.json(listaEncabezado);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  
}