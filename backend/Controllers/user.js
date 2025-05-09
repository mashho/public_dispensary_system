const UserModels = require('../Models/user');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const nodemailer = require("nodemailer")

const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to true in production
    sameSite: 'Lax'

};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});



exports.register = async (req, res) => {
    try {
        const { name, email, password, roll } = req.body;
        const isExist = await UserModels.findOne({ email });




        // Watch Video For FUll Code







    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isExist = await UserModels.findOne({ email });

        if (isExist && await bcryptjs.compare(password, isExist.password)) {




            // Watch Video For FUll Code






        } else {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.sendOtp = async (req, res) => {
    try {

        const { email } = req.body;



        // Watch Video For FUll Code









    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.verifyOtp = async (req, res) => {
    try {
        const { otp, email } = req.body;
        const user = await UserModels.findOne({
            email,
            resetPasswordToken: otp,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ error: 'Opt is invalid or has expired, Please Try Again.' });
        }
        res.status(200).json({ message: "OTP is Successfully Verified" })


    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        const user = await UserModels.findOne({ email });



        // Watch Video For FUll Code






        await user.save();
        res.status(200).json({ message: "Password Reset Successfully" })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.updateStudentById = async (req, res) => {
    try {

        const { id } = req.params;
        const updateStudent = await UserModels.findByIdAndUpdate(id, req.body, { new: true });

        if (updateStudent) {
            return res.status(200).json({ message: "Staff Update Successfully" });
        }
        return res.status(400).json({ error: "No Such Student is there" })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.getStudentByRollNo = async (req, res) => {
    try {
        const { roll } = req.params;
        const student = await UserModels.findOne({ roll });

        if (student) {
            return res.status(200).json({ message: "Student fetched Successfully", student });
        }
        return res.status(400).json({ error: "No Such Student is there" })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.registerStudentByStaff = async (req, res) => {
    try {

        const buffer = crypto.randomBytes(4); // Get random bytes
        let token = buffer.readUInt32BE(0) % 900000 + 100000; // Modulo to get a 6-digit number
        


        // Watch Video For FUll Code







    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.addStaffsByAdmin = async (req, res) => {
    try {
        const { name, email, password, designation, mobileNo } = req.body;
        const searchStaff = await UserModels.findOne({ email });
        if (searchStaff) {
            return res.status(400).json({ error: "Already have an account with this email id." });
        }
        let updatedPass = await bcryptjs.hash(password, 10);
        


        // Watch Video For FUll Code







    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.getAllStaffs = async (req, res) => {
    try {
        const staffs = await UserModels.find({ role: "staff" });
        return res.status(200).json({
            staffs
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.updateStaffById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, designation, mobileNo } = req.body;
        const staff = await UserModels.findById(id);
        


        // Watch Video For FUll Code







    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.deleteStaff = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserModels.findByIdAndDelete(id);

        if (deletedUser) {
            return res.status(200).json({ message: "Staff Getting Deleted" });
        }
        return res.status(400).json({ error: "No Such Staff is there" })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.logout = async (req, res) => {
    res.clearCookie('token', cookieOptions).json({ message: 'Logged out successfully' });
}