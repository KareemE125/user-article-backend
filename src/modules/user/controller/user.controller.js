import UserModel from '../../../../DB/models/User.model.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}).select('-password')
        return res.json({ message: 'success', users })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true }).select('-password')
        return user
            ? res.json({ message: 'success', user })
            : res.json({ message: 'User Not Found - Wrong ID or Conditions' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await UserModel.findByIdAndDelete(id, { new: true }).select('-password')
        return user
            ? res.json({ message: 'success', user })
            : res.json({ message: 'User Not Found - Wrong ID or Conditions' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }
}

export const searchStartandAge = async (req, res) => {
    const { letter, age } = req.query

    try {
        const user = await UserModel.find({
            name: { $regex: `^${letter}.*`, $options: 'i' },
            age: { $lt: parseInt(age) }
        }).select('-password')
        return user
            ? res.json({ message: 'success', user })
            : res.json({ message: 'User Not Found - Wrong ID or Conditions' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }
}

export const searchEnd = async (req, res) => {
    const { letter } = req.query

    try {
        const user = await UserModel.find({
            name: { $regex: `.*${letter}$`, $options: 'i' },
        }).select('-password')
        return user
            ? res.json({ message: 'success', user })
            : res.json({ message: 'User Not Found - Wrong ID or Conditions' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail', error })
    }
}

export const searchContain = async (req, res) => { 
    const { letter } = req.query

    try {
        const user = await UserModel.find({
            name: { $regex: `.*${letter}.*`, $options: 'i' },
        }).select('-password')
        return user
            ? res.json({ message: 'success', user })
            : res.json({ message: 'User Not Found - Wrong ID or Conditions' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail', error })
    }
}
export const searchIs = async (req, res) => { 
    const { letter } = req.query

    try {
        const user = await UserModel.find({
            name: { $regex: `^${letter}$`, $options: 'i' },
        }).select('-password')
        return user
            ? res.json({ message: 'success', user })
            : res.json({ message: 'User Not Found - Wrong ID or Conditions' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail', error })
    }
}
