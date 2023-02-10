const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../models/queries');
const { use } = require('../routes/authRoute');

const authController = {
    //Register
    register: async(req,res) => {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const name = req.body.name;
        try{
            let errorCode = 0;
            const salt = bcrypt.genSaltSync(10);
            const hashed = bcrypt.hashSync(password, salt);
            // Check if username already existed
            await pool.query("SELECT * FROM users WHERE username = $1",[username],(data,err)=> {
                if(err){
                    errorCode = 404;
                } else if(data.length) {
                    console.log(data.rows)
                    errorCode = 403;
                }
            })

            if(errorCode === 404){
                return res.status(404).json('Error');
            }else if(errorCode === 403){
                return res.status(404).json('Username is already existed');
            }else{
                // Create new users and add to database
                await pool.query("INSERT INTO users (username,password,email,name) VALUES ($1,$2,$3,$4)",[username,hashed,email,name],(data,err)=> {
                    if(err){
                        console.log(err);
                    }
                    console.log(data);
                })
                return res.status(200).json("Signup successfully");
            }
            

        }catch(err){
            return res.status(500).json(err);
        }
    }
}

module.exports = authController;