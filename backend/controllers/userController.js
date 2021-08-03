import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    res.send({email,password})
})

export {
    authUser
}