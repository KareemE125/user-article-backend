import UserModel from "../../../../DB/models/User.model.js"

export const signup = async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        return res.json({ message: 'success', user })
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ message: 'Email already exists' })
        }
        return res.json({ message: error.message || 'Fail' })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email, password }).select('-password')
        return user
            ? res.json({ message: 'success', user })
            : res.json({ message: 'Wrong email or password' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }
}