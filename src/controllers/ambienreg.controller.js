import { Ambientalreg } from "../models/AmbientalRegistro.js";


export async function getAmbienregs(req, res) {
    try {
      const ambientalregs = await Ambientalreg.findAll({
        atributes: ["id", "variable", "valor", "createdat"],
      });
      res.json(ambientalregs);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}
  
export async function createAmbienreg(req, res) {
    const { variable, valor, ubiId, userId } = req.body;
    try {
        let newAmbireg = await Ambientalreg.create(
        {
            variable,
            valor,
            ubiId,
            userId
        } //,
        //{
          //  fields: ["variable", "valor"],
        //}
        );
        return res.status(201).json(newAmbireg);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
    res.json("received"); 
}
  
export async function getAmbienreg(req, res) {
    const { id } = req.params;
    try {
      const ambientalreg = await Ambientalreg.findOne({
        where: {
          id
        },
      });

      if(!ambientalreg)
        return res.status(404).json({message: "Ambiental register does not exists"});

      res.json(ambientalreg);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}


export const updateAmbienreg = async (req, res) => {
    try {
      const { id } = req.params;
      const ambientalreg = await Ambientalreg.findOne({
          where: {id}
      });

      ambientalreg.set(req.body);

      await ambientalreg.save();
  
      return res.json(ambientalreg);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
  
export async function deleteAmbienreg(req, res) {
    const { id } = req.params;
    try {
      await Ambientalreg.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}