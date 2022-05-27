const post = require('../models/post');
const Post = require('../models/post');

module.exports = {
    create,
    deleteItem
}

async function create(req, res){
    if(req.post.id !== req.params.id) {
        res.status(400).json({ msg: "Not Authorized"})
    }else{
    try{
        Post.findOne({ _id: req.params.id })
        .then(post => {
        const item = post.items.id(req.params.item_id)
        item.purchased = req.body.purchased
        post.save()
        res.json(item)
        })
    }catch(e){res.status(400).json({ msg: "Failed to add item" })}
    
}}

async function deleteItem(req, res){
    if(req.post.id !== req.params.id) {
        res.status(400).json({ msg: "Not Authorized"})
    }else{
        Post.findOne({ _id: req.params.id })
        .then(post => {
        post.items.id(req.params.item_id).remove()
        post.save()
        res.json({ success: true })
        }).catch(e => res.status(404).json({ success: false })
    )}
}