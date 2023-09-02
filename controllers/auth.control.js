const loggerEvent = require("../services/logger")
const {userValidation,userSignin} = require("../services/validation")
const logger = loggerEvent("auth")
const User = require("../model/user.model")
const bcrybt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookie = require('cookie');

const authControler= {
    signin:async(req,res)=>{
        try {
            console.log(req.user);
            let valid = userSignin(req.body)
            if(valid){
                return res.status(400).send({
                    message:valid
                })
            }

            let userData = await User.findOne({email : req.body.email})
            if(!userData){
                return  res.status(404).send({message:"User not found"})
            }

            let validPass = await bcrybt.compare(req.body.password,userData.password)
            if(!validPass){
                return  res.status(403).send({message:"Password is incorrect"})
            }

            const accessToken = process.env.ACCESS_TOKEN
            let token = jwt.sign({_id :userData._id},accessToken,{
                expiresIn:"2d"
            })
            userData.tokens.push(token)
            userData.save()

            const cookies = cookie.serialize('access_token', `Barear ${token}`, {
                httpOnly: true, 
                maxAge: 2 * 24 * 60 * 60,
                sameSite: 'strict', 
            });
            
            // Set the cookies in the response headers
            res.setHeader('Set-Cookie', cookies);
            
            res.send({
                message:"Login successfully !!!"
            })
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message})
        }
    },
    register:async(req,res)=>{
        try {
            let valid = userValidation(req.body)
            if(valid){
                return res.status(400).send({
                    message:valid
                })
            }

            let emailCheck = await User.findOne({email:req.body.email})
            if(emailCheck){
                return res.status(403).send({
                    message:"Email is already taken !!"
                })
            }

            let user = new User(req.body)
            await user.save()
            
            res.status(201).send({
                message:"User created"
            }) 
        } catch (error) {
            logger.error(error.message)
            res.status(500).send({message:error.message})
        }
    }
}

module.exports = authControler