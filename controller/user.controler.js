// Importing the user model
const user = require("../model/user");
const usermodel = require("../model/user");

const createNewUser = async (req, res) => {
  try {
    const { name, email, password, phone, grade, role } = req.body;

    const newUser = await usermodel.create({
      name,
      email,
      password,
      phone,
      grade,
      role
    });

    return res.status(201).json({
      message: "User Created Successfully",
      user: newUser
    });
  } catch (error) {
    console.error("❌ Error creating user:", error); 

    return res.status(500).json({
      message: "Invalid request",
      error: error.message || error
    });
  }
};

const getAllUsers = async (req, res) => {
    try {
        const FindAllUsers = await usermodel.find()
        return res.status(200).json({
            message: "Users fetched successfully",
            user: FindAllUsers
        })
    } catch (error) {
        console.error("❌ Error fetching users:", error)
        return res.status(500).json({
            message: "failed to fetch users",
            error: error.message || error
        })
    }
};

const getUserById = async (req, res) => {
    try {
        const OneUser = await usermodel.findById(req.params.id)
        return res.status(200).json({
            message: "User fetched successfully",
            user: OneUser
        })
    } catch (error) {
        console.error("❌ Error fetching user by ID:", error)
        return res.status(500).json({
            message: "failed to fetch user by id",
            error: error.message || error
        })
    }
};

const UpdatedUser = async (req, res) => {
    try {
        const { name, email, password, phone, grade, role} = req.body

        const UserUpdate = await usermodel.findByIdAndUpdate(req.params.id, 
        {name, email, password, phone, grade, role },
        { new: true}
        )
        return res.status(200).json({
            message: "User updated successfully",
            user: UserUpdate
        })
    }
    catch (error) {
        console.log("❌ error updating user:", error)
        return res.status(500).json({
            message: "failed to update user",
            error: error.message || error
        })
    }
};

const UserDelete = async (req, res) => {
    try {
        const DeleteUser = await usermodel.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "User deleted successfully",
            user: DeleteUser
        })
    } catch (error) {
        console.error(" ❌ error deleting user:", error)
        return res.status(500).json({
            message: "failed to delete user",
            error: error.message || error
        })
    }
}


module.exports = {createNewUser, getAllUsers, getUserById, UpdatedUser, UserDelete};