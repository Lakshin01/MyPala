const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys=require('../../config/keys');




//load User model
const User=require('../../models/User');


router.get('/test',(req,res) => res.json({msg:"Users Works"})
);

//api for user register
router.post('/register',(req,res) =>{
    User.findOne({email:req.body.email})
    .then(user => {
        if(user){
            return res.status(400).json({email:'Email already exits'});
        }else{
            const avatar =gravatar.url(req.body.email,{
                s:'200',
                r:'pg',
                d:'mm'
            });
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                avatar,
                password:req.body.password,
                phoneno:req.body.phoneno,
                address:req.body.address

            });

            bcrypt.genSalt(10,(err,salt) =>{
                bcrypt.hash(newUser.password,salt,(err, hash ) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then(user => res.json(user))
                    .catch( err => console.log(err))

                })
            })
        }
        

    })
});

//api for login
router.post('/login',(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if(!user){
            return res.status(400).json({email:'User not found'});
        }

        //Check Password
        bcrypt.compare(password,user.password).then(isMatch => {
            if(isMatch){

                //user Mactched 


                const payload= {
                     id:user.id,
                     name:user.name,
                     avatar:user.avatar,
                     phoneno:user.phoneno,
                     address:user.address
                    }
                //Sign token

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn:3600},
                     (err,token) => {
                         res.json({
                             success:true,
                             token:'Bearer' + token
                         });

                     });

            }else{
                return res.status(400).json({password:'Password Incorrect'});

            }
        });
    });
});




module.exports= router;
