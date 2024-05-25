import * as userModel from '../models/userModel.js'

export const  getUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: "falha na busca pelos usuarios.." })
    }
}

export const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if(!name || !email || !password) {
            return res.status(400).json({ error: 'name, email, and password are required'})
        }
        const user = await userModel.createUser({
            name, email, password
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: 'falha ao criar usuario'})
    }
}

export const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const { id } = req.params

        if(!name || !email || !password) {
            return res.status(400).json({error: 'name, email and password are required'})
        }

        const user = await userModel.updateUser({
            name, email, password
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: 'error ao atualizar dados..'})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await userModel.deleteUser(id)
        res.status(200).json({ message: 'usuario deletado com sucesso'})
    } catch(error) {
        res.status(500).json({ message: 'falha ao deleta usuario'})
    }
}