// @desc  Auth user/ set token
// @route POST /api/users/auth
// @access public
const authUser = (req, res) => {
  res.status(200).json({ message: "Auth user" })
}

// @desc  Register a new user
// @route POST /api/users/
// @access public
const registerUser = (req, res) => {
  res.status(200).json({ message: "register user" })
}

// @desc  logout user
// @route POST /api/users/logout
// @access public
const logoutUser = (req, res) => {
  res.status(200).json({ message: "logout user" })
}

// @desc  GET user profile
// @route GET /api/users/profile
// @access private
const getUserProfile = (req, res) => {
  res.status(200).json({ message: "get user profile" })
}

// @desc  PUT update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = (req, res) => {
  res.status(200).json({ message: "update user profile" })
}

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
