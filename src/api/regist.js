import request from '@utils/request.js'
const url_prefix='/regist'
export default reqVerifyPhone=(phone)=>{
 request({
   url:`${url_prefix}/verify_phone/xasdd`,
   method:'post',
   data:{
     phone
   }
 })
}