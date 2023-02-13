import { Types } from "mongoose";
import ArticleModel from "../../../../DB/models/Article.model.js"
import UserModel from "../../../../DB/models/User.model.js";

export const getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleModel.find().populate({ path: 'userId', select: 'name email' });
        return res.json({ message: 'success', articles })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }

}

export const getArticleById = async (req, res) => {
    try {
        const article = await ArticleModel.findById(req.params.id)
        return res.json({ message: 'success', article })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }

}

export const createArticle = async (req, res) => {
    try {
        const checkUser = await UserModel.findById(req.body.userId);
        if(!checkUser){
            return res.json({message:'In-vaild user ID'})
        }
        const article = await ArticleModel.create(req.body);
        return res.json({ message: 'success', article })
    } catch (error) {
        return res.json({ message: error.message || 'Fail', error })
    }
}

export const updateArticle = async (req, res) => {
    const { id } = req.params
    const { userId } = req.body

    try {
        let article = await ArticleModel.findById(id).select('userId');
        if (!article.userId.equals(userId)) {
            return res.json({ message: 'You are NOT the article owner' })
        }

        article = await ArticleModel.findByIdAndUpdate(id, req.body, { new: true })
        return article
            ? res.json({ message: 'success', article })
            : res.json({ message: 'Article Not Found - Wrong ID or Conditions' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }
}

export const deleteArticle = async (req, res) => {
    const { id } = req.params
    const { userId } = req.body

    try {
        let article = await ArticleModel.findById(id).select('userId');
        if (!article.userId.equals(userId)) {
            return res.json({ message: 'You are NOT the article owner' })
        }

        article = await ArticleModel.findByIdAndDelete(id, { new: true })
        return article
            ? res.json({ message: 'success', article })
            : res.json({ message: 'Article Not Found - Wrong ID or Conditions' })
    } catch (error) {
        return res.json({ message: error.message || 'Fail' })
    }
}
