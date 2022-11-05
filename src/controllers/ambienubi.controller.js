import { Ambientalubi } from "../models/AmbientalUbicacion.js";
import { Ambientalreg } from "../models/AmbientalRegistro.js";
import {Users} from "../models/User.js"


export async function getAmbienUbis(req, res) {
  try {
    const ambientalubis = await Ambientalubi.findAll({
      atributes: ["id", "name"],
    });
    res.json(ambientalubis);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
  
export async function createAmbienUbi(req, res) {
    const { name } = req.body;
    try {
        let newAmbiubi = await Ambientalubi.create(
        {
            name
        },
        {
            fields: ["name"],
        }
        );
        return res.status(201).json(newAmbiubi);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
    res.json("received");
}
  
export async function getAmbienUbi(req, res) {
  const { id } = req.params;
  try {
    const ambientalubi = await Ambientalubi.findOne({
      where: {
        id
      },
    });

    if(!ambientalubi)
      return res.status(404).json({message: "Ambiental Ubication does not exists"});

    res.json(ambientalubi);


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
  
export const updateAmbienUbi = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
  
      const ambientalubi = await Ambientalubi.findByPk(id);
        
        //ambientalubi.name = name;

        ambientalubi.set(req.body);

      
      await ambientalubi.save();
  
      res.status(200).json(ambientalubi);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
  
export async function deleteAmbienUbi(req, res) {
    const { id } = req.params;
    try {
      await Ambientalubi.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
  
export async function getAmbienreg(req, res) {
    const { id } = req.params;
    try {
      
      const registros = await Ambientalreg.findAll({
        include: [{model:Ambientalubi},{model:Users}],
        attributes: ["id", "variable", "valor", "createdAt"],
        where: { ubiId: id }
        
      });
     
      res.status(200).json(registros);
      
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }    
}

export async function getRegHoyTemperatura(req, res){
  const fecha = new Date().toLocaleDateString()
  const {variable} = req.params;  
  try{
    const temperaturas = await Ambientalreg.findAll({
      include: [{model:Ambientalubi}],
      attributes: ["id", "variable", "valor", "createdAt"],
      where: {
        variable: variable
      },
    });
    res.status(200).json(temperaturas)
  }catch(e){
    return res.status(500).json({ message: e.message });
  }
}

export async function getRegHoyHumedad(req, res){
  const fecha = new Date().toLocaleDateString()
  const {variable} = req.params;
  try{
    const humedad = await Ambientalreg.findAll({
      include: [{model:Ambientalubi}],
      where: {
        variable: variable        
      }
    });
    res.status(200).json(humedad)
  }catch(e){
    return res.status(500).json({ message: e.message });
  }
}

