//适配  webpack别名配置
const path=require('path')
const pxtoviewport=require('postcss-px-to-viewport')
module.exports={
  webpack:{
    alias:{
      '@redux':path.resolve(__dirname,'./src/redux'),
      '@api':path.resolve(__dirname,'./src/api'),
      '@utils':path.resolve(__dirname,'./src/utils')
    }
  },
  style:{
    postcss:{
      plugins:[
        pxtoviewport({
          viewportWidth:375
        })
      ]
    }
  }
}