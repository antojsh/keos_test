/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Test = sequelize.define(
    "test",
    {
      idtest: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      texto: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      respuesta: {
        type: DataTypes.JSON,
        allowNull: true
      },
      fecha: {
        type: DataTypes.TIME,
        allowNull: true
      }
    },
    {
      tableName: "test",
      timestamps: false
    }
  );

  Test.getById = function(id) {
    return new Promise((res,rej)=>{
      this.findOne({idtest:id}).then(data => {
        res(data)
      });
    })
  };
  return Test;
};
