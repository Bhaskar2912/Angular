module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    ProductName: {
      type: Sequelize.STRING
    },
    BrandName: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    quentity: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return Product;
};
