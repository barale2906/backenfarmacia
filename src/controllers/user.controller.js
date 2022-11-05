import { Users } from "../models/User.js";



export async function getUsers(req, res) {
    try {
      const users = await Users.findAll({
        atributes: ["id", "name", "email", "imagen"],
      });
      res.json(users);

    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
export async function createUser(req, res) {
    const { name, email, password, imagen } = req.body;
    try {
        let newuser = await Users.create(req.body);
        return res.status(201).json(newuser);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }    
}
  
export async function getUser(req, res) {
    const { id } = req.params;
    try {
      const user = await Users.findOne({
        where: {
          id
        },
      });

      if(!user)
        return res.status(404).json({message: "this user does not exists"});

      res.json(user);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password, imagen } = req.body;
  
      const user = await Users.findByPk(id);
       /* 
        user.name       = name;
        user.email      = email;
        user.password   = password;
        user.imagen     = imagen;
*/
      user.set(req.body);

      
      await user.save();
  
        res.json(user);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
  
export async function deleteUser(req, res) {
    const { id, status } = req.params;
    try {const { id, status } = req.params;
      
          const user = await Users.findByPk(id);
            
            //bodega.set(req.body);
            user.set({"status": status});

          await user.save();
      
          return res.status(200).json(user);

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

//Validar usuario login
export async function getUserLogin(req, res) {
  const { email } = req.params;
  try {
    const user = await Users.findOne({
      where: {
        email
      },
    });

    if(!user)
      return res.status(200).json({message: "this user does not exists"});

    res.status(202).json(user);


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
