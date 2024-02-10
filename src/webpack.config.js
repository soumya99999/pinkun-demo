const path = require('path')

module.exports={
    mode : 'development',
    entry: path.join(__dirname, 'src', 'main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    watch:true,
};