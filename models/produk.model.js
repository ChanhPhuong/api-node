module.exports = (sequelize, Sequelize) => {
    const Produk = sequelize.define('produk', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        full_description: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        url: {
            type: Sequelize.STRING
        }
    }

    )
    return Produk;
}