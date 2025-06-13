// functions ENDPOINT CONTROLLERS
const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({
        message: "Email already exists!!!",
      });
    }
    // Step 3: HashPassword
    const hashPassword = await bcrypt.hash(password, 10);

    // Step 4: Register
    await prisma.user.create({
      data: {
        email: email,
        password: hashPassword,
      },
    });
    res.send("Register Success");
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
    const { email, password } = req.body;

    // Step 1: Check Email
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user || !user.enabled) {
      return res.status(400).json({ message: "User Not Found or not Enabled" });
    }
    // Step 2: Check Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Password Invalid!!",
      });
    }
    // Step 3: Create Payload
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    // Step 4: Generate Token
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) {
          return res.status(500).json({
            message: "Server Error",
          });
        }
        res.json({
          payload,
          token,
        });
      }
    );
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
