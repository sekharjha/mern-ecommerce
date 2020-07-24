const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found in DB",
      });
    }
    req.Category = cate;
    next();
  });
};

exports.createCategory = (req,res)=>{
    const category = new Category(req.body);
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"Category cannot be saved in DB"
            });
        }
        res.json({category})
    })
}

exports.getCategory = (req,res)=>{
  return res.json(req.category);
};

exports.getAllCategory = (req,res)=>{
    Category.find().exec((err,categoires)=>{
      if(err){
        return res.status(400).json({
            error:"No Categories found"
        });
    } 
    res.json(categoires);
    })
};

exports.updateCategory = (req,res)=>{
  const category = req.Category;
  console.log(req.body.name);
  category.name = req.body.name;

  category.save((err,updatedCategory)=>{
    if(err){
      return res.status(400).json({
        error:"Failed to update Category"
      });
    }
    res.json(updatedCategory);
  })

}

exports.removeCategory = (req,res) => {
  const category = req.Category;

  category.remove((err,category)=>{
    if(err){
      return res.status(400).json({
        error:"Failed to delete this category"
      });
    }
    res.json({
      message:"Successfully Deleted"
    })
  })
}