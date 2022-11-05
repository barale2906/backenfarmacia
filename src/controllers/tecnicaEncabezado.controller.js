import { Proveedores } from "../models/proveedor.js";
import { Users } from "../models/user.js";
import { TecnicaEncabezado } from "../models/TecnicaEncabezado.js";


// Obtener el total de los TecnicaEncabezados
export async function getTecnicaEncabezados(req, res) {
    try {
      const tecnicaEncabezados = await TecnicaEncabezado.findAll({
        include: [{model:Proveedores}, {model:Users}],
      });
      res.status(200).json(tecnicaEncabezados);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
// Crear TecnicaEncabezado
export async function createTecnicaEncabezado(req, res) {
    //const { code, name, description, unit, imagen } = req.body;
    try {        
        let newTecnicaEncabezado = await TecnicaEncabezado.create(req.body);
        return res.status(201).json(newTecnicaEncabezado);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un TecnicaEncabezado
export async function getTecnicaEncabezado(req, res) {
    const { id } = req.params;
    try {
      /*
      const tecnicaEncabezado = await TecnicaEncabezado.findAll({
        where: {id: id},
        include: [{model:Proveedores}, {model:Users}],
      });*/
      const tecnicaEncabezado = await TecnicaEncabezado.findByPk(id,{
        include: [{model:Proveedores}, {model:Users}]
      }); 

      if(!tecnicaEncabezado)
        return res.status(404).json({message: "does not exists"});

      res.json(tecnicaEncabezado);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar TecnicaEncabezado
export const updateTecnicaEncabezado = async (req, res) => {
    try {
      const { id } = req.params;
      //const { code, description, unit, imagen } = req.body;  
      const tecnicaEncabezado = await TecnicaEncabezado.findByPk(id);        
        tecnicaEncabezado.set(req.body);      
      await tecnicaEncabezado.save();
  
      res.status(200).json(tecnicaEncabezado);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Aprobar-Desaprobar encabezado  
export async function deleteTecnicaEncabezado(req, res) {
    const { id } = req.params;
    try {

      const { id, status } = req.params;     

      // Actualiza el estado en el encabezado de la recepción técnica.  
      const tecnicaEnc = await TecnicaEncabezado.findByPk(id);
        
        tecnicaEnc.set({"status": status});

      await tecnicaEnc.save();        
      
  
      res.status(200).json(tecnicaEnc);
      
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

// Seleccionar facturas sin pagar o abonadas
export async function getFacturasPago(req, res) {
  try {
    const tecnicaEncabezados = await TecnicaEncabezado.findAll({
      include: [{model:Proveedores}, {model:Users}],
      where:{
        status:[2,4] 
      }
    });
    res.status(200).json(tecnicaEncabezados);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

