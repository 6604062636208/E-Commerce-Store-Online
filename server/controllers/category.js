// functions ENDPOINT CONTROLLERS

exports.Created = async (req, res) => {
  try {
    // code
    res.send("Hello Created Category");
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
    res.send("Hello List Category");
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
    console.log(id);
    res.send("Hello Remove Category");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
