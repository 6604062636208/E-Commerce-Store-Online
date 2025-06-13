// functions ENDPOINT CONTROLLERS
const prisma = require("../config/prisma");

exports.Created = async (req, res) => {
  try {
    // code
    const { name } = req.body;
    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });
    res.send(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.List = async (req, res) => {
  try {
    // code
    const category = await prisma.category.findMany();
    res.send(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.Remove = async (req, res) => {
  try {
    // code
    const { id } = req.params;
    const category = await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });
    res.send(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
