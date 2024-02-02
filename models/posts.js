const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Post = sequelize.define('post-table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Post;