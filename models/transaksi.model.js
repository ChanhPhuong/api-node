module.exports = (sequelize, Sequelize) => {
    const Transaksi = sequelize.define('transaki', {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        trs_number: {
            type: Sequelize.STRING
        }
    }

    )
    return Transaksi;
}