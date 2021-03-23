const User = require('../../models/User')
const Profile = require('../../models/Profile')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const {check, validationResult } = require('express-validator');
var validator = require('validator');

exports.login = async (req, res) => {

    const {username, password} = req.body

    try {
        var user
        user = await User.findOne({ username:username })

        if(!user) user = await User.findOne({ email:username })
            if(!user) return res.status(400).json({status:'error', msg: "User not found."})

        const compare = await bcrypt.compare(req.body.password, user.password)

        if(!compare) return res.status(201).json({status:'error', msg:'Invalid Credentials'})

        const token = jwt.sign({id: user.id}, process.env.APP_SECRET, {expiresIn:'1d'})
        
        const userData = {_id:user._id, username:user.username, email:user.email, type: user.user_type}

        const profile = await Profile.findOne().populate('User', user._id)
     
        res.status(201).json({isAuth:true, token, user:userData, profile, msg: "Logged in successfully."})
        
    } catch (error) {
        res.status(400).json({isAuth:false, msg: "Something went wrong. Please try again later."})
    }

}

exports.register = async (req, res) => {

    const {username, email, password, password_confirmation} = req.body

    const allErrors = []

    if(validator.isEmpty(username)) allErrors.push({ username: "Username should not be empty." })
    if(!validator.isLength(username,{min:5})) allErrors.push({ username: "Username should must 5 char or long." })

    if(validator.isEmpty(email) )  allErrors.push({ email: "Email should not be empty" })
    if(!validator.isEmail(email) )  allErrors.push({ email: "Email should be a valid email address." })
    
    // if(password != password_confirmation) allErrors.push({ password: "Password not matched." })
    if(!validator.equals(password, password_confirmation) ) allErrors.push({ password: "Password does not matched." })
    
    // res.status(422).json({errors:{password:"Password not matched."}})

    try {

        const checkUserByUsername = await User.findOne({username: username})
        if(checkUserByUsername) allErrors.push({ username: "Username has already been taken." })
        // return res.status(302).json({errors:{username:"Username has already been taken"}})

        const checkUserByEmail = await User.findOne({email: email})

        if(checkUserByEmail) allErrors.push({ email: "Email has already been taken." })
        
        // return res.status(302).json({errors:{email:"Email has already been taken"}})
        // const solved = []
        // const dt = allErrors.map(([key,error]) => { solved.push(`{${key}:"${error}"}`) })

        if(allErrors.length) return res.status(422).json({errors: allErrors})

        const salt = await bcrypt.genSalt(12)

        const encryptedPassword = await bcrypt.hash(password, salt)

        const user = new User()
        user.username = username
        user.email = email
        user.user_type = 'buyer'
        user.password = encryptedPassword
        await user.save()

        const profile = new Profile()
        profile.user = user
        profile.first_name = "First Name"
        profile.last_name = "Last Name"
        profile.street_address = "Street Address"
        profile.city = "City Name"
        profile.state = "State Name"
        profile.country = "Country Name"
        profile.zip = "Zip Code"
        profile.avatar = "https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.0-9/73088099_704414466743417_4782217325547880448_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=io-BE3j4OmQAX_JJzaS&_nc_ht=scontent.fjsr6-1.fna&oh=b1e0d68fc1f0688788b7426694b9f0e7&oe=607E76F1"
        await profile.save()

        user.profile = profile
        await user.save()

        const token = jwt.sign({id: user.id}, process.env.APP_SECRET, {expiresIn:'1d'})
        
        res.status(201).json({status: 'success', token, msg: "Account created successfully."})


    } catch (error) {
        res.status(400).json({status:'error', msg: "Something went wrong. Please try again later."})
    }

}

exports.authorize = async (req, res) => {
    const token = req.headers.authorization
    // console.log('Server Token:', token)

    try {
        
        const data = jwt.verify(token, process.env.APP_SECRET);

        console.log("JWT: ", data)
        
        // res.json({verify: data})
        // if (err) {
        //     return res.sendStatus(403);
        // }

        const user = await User.findOne({_id: data.id})
        const {_id, username, email, user_type} = user;

        console.log("server: ", user)

        const profile = await Profile.findOne().populate('User', user.id)

        res.json({isAuth:true, _id, username, email, type: user_type, profile})
        // res.json(token)

    } catch (error) {
        res.json({isAuth:false, msg: 'You are not authorized'})
    }


    // res.json(token)
}