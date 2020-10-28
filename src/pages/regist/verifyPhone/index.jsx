import React, { Component } from "react";
import { NavBar, Icon, InputItem, WingBlank, Button, Modal } from "antd-mobile";
import {reqVerifyPhone} from '@api/regist'
import "./index.css";
import { createForm } from 'rc-form';
class VerifyPhone extends Component {
  state={
    isDisabled:true
  }
  validator=(rule,value,callback)=>{
    console.log(rule,value)
    callback()
  }
 /*  componentDidMount() {
    Modal.alert(
      "注册协议及隐私政策",
      <span className="policy-text">
        在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
        <strong className="policy-strong-text">
          请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）
        </strong>
        ：<span className="policy-content">《硅谷用户注册协议》</span>
        <span className="policy-content">《硅谷隐私政策》</span>
      </span>,
      [
        {
          text: "不同意",
          onPress: () => console.log("cancel"),
        },
        {
          text: "同意",
          style: { backgroundColor: "red", color: "#fff" },
        },
      ]
    );
  } */
  next=async ()=>{

    const result =await reqVerifyPhone(phone)
  }
  render() {
  const {isDisabled}=this.state
  const { getFieldProps } = this.props.form
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon className="left" type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
        >
          硅谷注册
        </NavBar>
        <WingBlank>
          <div className="verify-phone-input">
            <InputItem clear placeholder="请输入手机号"   {...getFieldProps('phone',{ rules: [{ validator: this.validator }]})}>
              <div className="verify-phone-prefix">
                <span>+86</span>
                <Icon type="down" />
              </div>
            </InputItem>
          </div>
          <Button className="warning-btn" type="warning" diabled={isDisabled} onClick={this.next}>
            下一步
          </Button>
        </WingBlank>
      </div>
    );
  }
}
export default createForm()(VerifyPhone);