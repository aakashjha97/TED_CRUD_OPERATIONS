const route=require('express').Router();
const Posts=require('../db').Posts

route.post('/idwise',(req,res)=>{
	Posts.findAll({where:{
		userid:req.body.userid
	}}).then(posts=>{
		res.render('viewpost.ejs',{posts:posts,uid:req.body.userid})
	})
})

exports=module.exports=route
