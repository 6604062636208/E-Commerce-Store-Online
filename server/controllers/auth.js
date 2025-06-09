// functions ENDPOINT CONTROLLERS

exports.register = async (req, res) => {
  try {
    // code
    const { email, password } = req.body;
    // Step 1: Validate email and password
    if (!email) {
      //
      return res.status(400).json({
        message: "Email is required!!!",
      });
    }
    if (!password) {
      //
      return res.status(400).json({
        message: "Password is required!!!",
      });
    }
    // Step 2: Check Email in DB Already Exists
    console.log(email, password);
    res.send("Hello Register In Controllers");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    // code
    res.send("Hello Login In Controllers");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.currentUser = async (req, res) => {
  try {
    // code
    res.send("Hello Current User In Controllers");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
