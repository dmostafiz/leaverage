const Post = require("../../models/Post")
const jwt = require('jsonwebtoken')


exports.save = async (req, res) => {
    const {title, slug, body, imageUrl, categories, tags, metaTitle, metaDescription, fKeywords, status} = req.body

    const saveCategories = []

    categories.map(cat => {
        saveCategories.push(cat.value)
    })

    try {

        const token = req.headers.authorization
        const data = jwt.verify(token, process.env.APP_SECRET);

        const post = new Post()  
            post.title = title
            post.slug = slug
            post.body = body
            post.imageUrl = imageUrl
            post.categories = saveCategories
            post.tags = tags
            post.metaTitle = metaTitle
            post.metaDescription = metaDescription
            post.fKeywords = fKeywords
            post.status = status
            post.author = data.id
            await post.save()

        return res.status(200).json({type: 'success', msg:'Post saved successfully.'})
        
    } catch (error) {
        res.json({type: 'error', msg:error.message})
    }

             

}

exports.get = async (req, res) => {
    try {
        const posts = await Post.find().sort({ _id: -1}).populate(
                [
                    {
                        path:'author',
                        // model:'User',
                        populate:{
                            path: 'profile',
                            model:'Profile'
                        }
                    },
                    {
                        path:'categories',
                        model:'Category'
                    }
                ]
            )

        console.log('All posts: ',posts)

        res.status(200).json(posts)
    } catch (error) {
        res.status(200).json({type:"error", msg: error.message})
    }
}

exports.getSingle = async (req, res) => {
    try {
        const post = await Post.findOne({slug: req.params.slug}).populate([
            {
                path:'author',
                model:'User',
                populate:{
                    path:'profile',
                    model:'Profile'
                }
            },

            {
                path:'categories',
                model:'Category'
            }
        ])

        console.log('Single post: ',post)

        res.status(200).json(post)
    } catch (error) {
        res.status(200).json({type:"error", msg: error.message})
    }
}

exports.getTopByLimit = async (req, res) => {

    
    
    try {
        const limit = parseInt(req.params.limit)
        // console.log(`Limit = ${req.params.limit}`)

        const postCount = await Post.count()

        
        var rand = Math.floor(Math.random() * postCount)

        if((rand + limit) > postCount) rand = rand - limit
        // console.log('random', rand)

        const posts = await Post.find().skip(rand).limit(limit).populate([
            {
                path:'author',
                model:'User',
                populate:{
                    path:'profile',
                    model:'Profile'
                }
            },

            {
                path:'categories',
                model:'Category'
            }
        ])

        // console.log('Single post: ',post)

        res.status(200).json(posts)
    } catch (error) {
        res.status(200).json({type:"error", msg: error.message})
    }
} 