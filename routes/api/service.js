const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load Category model
const Category=require('../../models/Category');
//load Place model
const Place =require('../../models/Place');
//load Service model
const Service = require('../../models/Service');


router.get('/test',(req,res) => res.json({msg:"service Works"})
);


//insert the category
//POST api/service/addcategory
//acess by admin
router.post('/addcategory',(req,res) => {
    Category.findOne({categoryname:req.body.categoryname}).then(category => {
        if(category){
            errors.categoryname ='categoryname already exists';
            return res.status(400).json(errors);
        }else{

  
    const newCategory =new Category({
        categoryname:req.body.categoryname
    });
    newCategory.save().then(post => res.json(post));
    }
   });

});



// insert the place 
//POST api/service/addplace
//acess by admin

router.post('/addplace',(req,res) => {
    Place.findOne({placename:req.body.placename}).then(place => {
        if(place){
            errors.placename ='placename already exists';
            return res.status(400).json(errors);
        }else{

  
    const newPlace =new Place({
        placename:req.body.placename
    });
    newPlace.save().then(post => res.json(post));
    }
   });
});


//display the category list of service
//GET api/service/categorylist
//acess public
router.get('/categorylist', (req, res) => {
    Category.find()
      .sort({ categoryname: 1 })
      .then(category => res.json(category))
      .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
  });


//display the placelist of service
//GET api/service/placelist
//acess public
  router.get('/placelist', (req, res) => {
    Place.find()
      .sort({ placename: 1 })
      .then(place => res.json(place))
      .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
  });

  // user create the serviceprofile
  //POST api/service/addservice
  //access private
  router.post(
    '/addservice',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const serviceFields ={};
        serviceFields.user = req.user.id;
        if(req.body.name) serviceFields.name=req.body.name;
        serviceFields.category = req.category.id;
        serviceFields.place = req.place.id;
        if(req.body.type) serviceFields.type=req.body.type;
        if(req.body.address) serviceFields.address=req.body.address;
        if(req.body.experience) serviceFields.experience=req.body.experience;
        if(req.body.avaliable) serviceFields.avaliable=req.body.avaliable;
        if(req.body.description) serviceFields.description=req.body.description;
        if(req.body.mobileno1) serviceFields.mobileno1=req.body.mobileno1;
        if(req.body.mobileno2) serviceFields.mobileno2=req.body.mobileno2;

        //social
        serviceFields.social={};
        if (req.body.facebook) serviceFields.social.facebook = req.body.facebook;
        if (req.body.linkedin) serviceFields.social.linkedin = req.body.linkedin;
        if (req.body.instagram) serviceFields.social.instagram = req.body.instagram;

     Service.findOne({user:req.user.id}).then(service =>{
         if(service){

            //Update
             Service.findOneAndUpdate(
                 {user:req.user.id},
                 {$set:serviceFields},
                 {new:true}
             ).then(service =>res.json(service));

         }else{
             //create
             Service.findOne({mobileno1:serviceFields.mobileno1 }||
                 {mobileno2:serviceFields.mobileno2})
                 .then(service =>{
                     if(service){
                         errors='the service provider already exists';
                         res.status(400).json(errors);
                        
                    }

                     //save profile
                     new Service(serviceFields).save()
                     .then(service =>res.json(service));

                 });

         }
         });
     }
 );


//get service based on the category
//get api/service/servicelist
//acess private
router.get('/service list',passport.authenticate('jwt',{session:false }),
(req,res) =>{
    const errors={};
   
    Service.find({category:req.category.id})
    .then(service =>{
        if(service){
            res.json(service);
        }
        else{
            errors.noservice='There is no service  provider for this category '
        }
    })

    .catch(err => res.status(404).json(err));
});


//search based on place and type



module.exports= router;