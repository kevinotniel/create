const { override, addBabelPreset } = require("customize-cra");

module.exports = override(addBabelPreset("@emotion/babel-preset-css-prop"));

// root config yang mengoverrides babel preset ke dalam create react my-app kita 
    // tanpa harus membongkar, hanya menyuusupnya dengan smooth dengan bantuan customize-cra