import prisma from '../prisma/client.js';

export const getAllUsers = async () => {
    try {
        return await prisma.user.findMany();
    } catch (error) {
        console.error('Error fetching users from database:', error);
        throw error;
    }
};

export const createUser = async (data) => {
    try {
        return await prisma.user.create({ data });
    } catch (error) {
        console.error('Error creating user in database:', error);
        throw error;
    }
};

export const updateUser = async (id, data) => {
    try {
        return await prisma.user.update({
            where: { id },
            data
        });
    } catch (error) {
        console.error('Error updating user in database:', error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        return await prisma.user.delete({
            where: { id }
        });
    } catch (error) {
        console.error('Error deleting user from database:', error);
        throw error;
    }
};
