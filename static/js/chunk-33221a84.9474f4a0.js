(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33221a84"],{"039a":function(t,e,a){t.exports={"border-color":"#e5e7eb","phone-width":"768px","background-color":"#f0f8ff","order-state-primary-phone":"#d9ecff","order-state-success-phone":"#e1f3d8","order-state-warning-phone":"#faecd8","order-state-error-phone":"#fde2e2","primary-color":"#409eff","success-color":"#67C23A","warning-color":"#E6A23C","error-color":"#F56C6C","ciyaowenzi-color":"#909399","base-shadow":"0 2px 4px rgba(0,0,0,0.12),0 0 6px rgba(0,0,0,0.04)","base3-shadow":"0 1px 1px #ccc","font-wight-600":"600","nav-menu-text-color":"#1989fa","nav-menu-text-color2":"#2c3e50","aside-width":"200px","zhuyaowenzi-color":"#606266"}},"0b90":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return t.appMainLoading?t._e():e("div",{staticStyle:{display:"flex"}},[e("el-card",{staticClass:"phone-card",staticStyle:{flex:"1"},style:t.cardStyleDeskPhone,attrs:{id:"order-newest"}},[e("order-table",{attrs:{"show-order-id-button":!1,"show-renewals-button":!1,"table-data":t.tableData}})],1)],1)},s=[],n=a("2cdd"),r=a("21ee"),o=a("b775");const l=async function(){const t=await Object(o["i"])({method:"post",url:"/orderNewest/data",headers:{[o["d"]]:["#order-newest",o["b"]],[o["h"]]:1}});return t.data.data&&t.data.data.data||[]};var c={name:"newestOrder",components:{OrderTable:r["a"]},mixins:[n["a"]],data:function(){return{tableData:[]}},created(){this.getData().then(()=>{this.setAppMainLoading(!1)}).catch(()=>{this.setAppMainLoading(!1)}),this.createIntervalTask(this.getData,this.$options.name)},methods:{getData:async function(){try{this.tableData=await l()}catch(t){}}}},d=c,p=a("2877"),u=Object(p["a"])(d,i,s,!1,null,"1c4ac984",null);e["default"]=u.exports},"1d60":function(t,e,a){},"21ee":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order-table"},[e("custom-table",{attrs:{"badge-key":t.badgeKey,"is-phone":t.isPhone,"table-data":t.tableData,"table-config":t.tableConfig,"show-page":t.showPage,"page-change":t.pageChange,"phone-item-style":t.phoneItemStyle,"phone-item-card-body":t.phoneItemCardBody,pages:t.pages,page:t.page,total:t.total,"i18n-table":t.i18nConfig.tableI18n},scopedSlots:t._u([{key:"phoneIndex",fn:function({vSlot:a}){return[t.checkShowRecoveryTips(a.recoveryTime,a.canRenewals)?e("div",{staticClass:"phone-index"},[t._v(" "+t._s(t.$t("l1"))+" ")]):t._e()]}},{key:"state",fn:function({vSlot:a}){return[t.isPhone?e("div",{staticStyle:{margin:"10px 0"}},[-1===["异常","回收异常"].indexOf(a.state)?e("el-steps",{attrs:{"process-status":"wait","finish-status":"success",active:t.orderStateConfig[a.state]}},t._l(t.orderStateConfig,(function(t,a){return e("el-step",{key:t,attrs:{title:a}})})),1):e("el-steps",{attrs:{active:1,"process-status":"error"}},[e("el-step",{attrs:{title:"安排中"}}),e("el-step",{attrs:{title:a.state}})],1)],1):e("el-tag",{attrs:{type:t.orderState(a.state),effect:"dark"}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},["安排中"===a.state?e("van-loading",{attrs:{color:"white",type:"spinner",size:18}}):t._e(),e("span",{staticStyle:{"font-weight":"600","margin-left":"5px"}},[t._v(t._s(t.$t(a.state)))])],1)])]}},{key:"rentTimeLock",fn:function({vSlot:a}){return[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,disabled:!0},model:{value:a.rentTimeLock,callback:function(e){t.$set(a,"rentTimeLock",e)},expression:"vSlot.rentTimeLock"}})]}},{key:"orderType",fn:function({vSlot:a}){return[e("el-tag",{staticClass:"font-wight-600",attrs:{size:t.tagSize,type:"danger"}},[t._v(" "+t._s(t.$t(t.resTypeConfig[a.orderType]))+" ")])]}},{key:"lockTime",fn:function({vSlot:a}){return[e("el-tag",{staticClass:"font-wight-600",attrs:{size:t.tagSize,type:"primary"}},[t._v(" "+t._s(t.i18nRentTime(a.lockTime))+" ")])]}},{key:"payNums",fn:function({vSlot:a}){return[e("el-tag",{staticClass:"font-wight-600",attrs:{size:t.tagSize,type:"warning"}},[t._v(" "+t._s(t.formatBigNumber(a.payNums))+" ")])]}},{key:"receiveAddress",fn:function({vSlot:a}){return[e("div",{staticClass:"primary-color",staticStyle:{"font-weight":"600"}},[e("i",{staticClass:"el-icon-document-copy",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.copyContent(a.receiveAddress)}}}),e("span",{staticStyle:{"margin-left":"7px"}},[t._v(t._s(t.showReceiveAddress(a.receiveAddress)))])])]}},{key:"orderMoney",fn:function({vSlot:a}){return[e("span",{staticClass:"font-wight-600 primary-color"},[t._v(t._s(a.orderMoney))])]}},{key:"time",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.time))])]}},{key:"recoveryTime",fn:function({vSlot:a}){return[!t.isPhone&&t.checkShowRecoveryTips(a.recoveryTime,a.canRenewals)?e("el-alert",{attrs:{type:"error",effect:"dark",closable:!1},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticStyle:{"font-size":"13px","line-height":"16px"}},[e("div",[t._v(t._s(t.splitRecoveryTime(a.recoveryTime)[0]))]),e("div",[t._v(t._s(t.splitRecoveryTime(a.recoveryTime)[1]))]),e("div",{staticStyle:{"letter-spacing":"3px","font-size":"12px","line-height":"15px"}},[t._v(t._s(t.$t("l1")))])])]},proxy:!0}],null,!0)}):e("div",{style:{width:t.isPhone?"auto":"80px"}},[t._v(" "+t._s(a.recoveryTime)+" ")])]}},{key:"orderNotes",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.orderNotes))])]}},{key:"hash",fn:function({vSlot:a}){return[e("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 1fr","grid-gap":"5px"},style:{"margin-top":t.isPhone?"10px":"auto","grid-row-gap":t.isPhone?"14px":"10px"}},[e("el-button",{staticClass:"el-button-custom margin-0",attrs:{round:"",plain:"",size:"mini"},on:{click:function(e){return t.openOrderRecord(a)}}},[t._v(t._s(t.$t("l2")))]),a.hash.length>0?e("el-button",{staticClass:"el-button-custom margin-0",attrs:{round:"",plain:"",size:"mini"},on:{click:function(e){return t.openHashDetail(a)}}},[t._v(t._s(t.$t("l3")))]):t._e(),t.showOrderIdButton?e("el-button",{staticClass:"el-button-custom margin-0",attrs:{round:"",plain:"",size:"mini"},on:{click:function(e){return t.copyContent(a.orderId)}}},[t._v("订单ID")]):t._e(),t.showRenewalsButton&&a.canRenewals?e("el-button",{staticClass:"el-button-custom margin-0",attrs:{round:"",plain:"",size:"mini"},on:{click:function(e){return t.orderRenewals(a)}}},[t._v("订单续费")]):t._e()],1)]}}])}),e("delegate-detail",{ref:"delegateDetail",attrs:{"order-data":t.delegateDetail.orderData},on:{"update:orderData":function(e){return t.$set(t.delegateDetail,"orderData",e)},"update:order-data":function(e){return t.$set(t.delegateDetail,"orderData",e)}}}),e("pay-record",{ref:"payRecord",attrs:{"order-data":t.payRecord.orderData},on:{"update:orderData":function(e){return t.$set(t.payRecord,"orderData",e)},"update:order-data":function(e){return t.$set(t.payRecord,"orderData",e)}}}),e("renewals-order",{ref:"renewalsOrder",attrs:{"order-data":t.renewalsOrder.orderData},on:{"update:orderData":function(e){return t.$set(t.renewalsOrder,"orderData",e)},"update:order-data":function(e){return t.$set(t.renewalsOrder,"orderData",e)}}})],1)},s=[],n=(a("ac1e"),a("543e")),r=function(){var t=this,e=t._self._c;return e("custom-popup",{attrs:{id:"popup1",title:"代理详情",visible:t.visible,"is-phone":t.isPhone,"no-card":!0},on:{"update:visible":function(e){t.visible=e},close:t.close}},[e("div",{staticClass:"popup-default",staticStyle:{width:"100%"}},[e("top-content",{attrs:{"loading-color":t.loadingColor,"res-type-config":t.resTypeConfig,"order-data":t.orderData,"is-phone":t.isPhone}}),e("custom-table",{attrs:{"is-phone":t.isPhone,"table-data":t.hashData,"table-config":t.tableConfig,"table-row-class-name":t.tableRowClassName,phoneRowClassName:t.phoneRowClassName,"badge-key":"state","phone-item-style":t.phoneItemStyle},scopedSlots:t._u([{key:"state",fn:function({vSlot:a}){return[e("el-tag",{attrs:{effect:"dark",type:t.popupState(a.state)}},[t._v(t._s(a.state))])]}},{key:"sendAddress",fn:function({vSlot:a}){return[e("div",[e("i",{staticClass:"el-icon-document-copy",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.copyContent(a.sendAddress)}}}),e("span",{staticStyle:{"margin-left":"7px"}},[t._v(t._s(t.showReceiveAddress(a.sendAddress)))])])]}},{key:"info",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.info))])]}},{key:"resType",fn:function({vSlot:a}){return[e("span",[t._v(t._s(t.resTypeConfig[a.resType]))])]}},{key:"rentTime",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.rentTime))])]}},{key:"resNums",fn:function({vSlot:a}){return[e("span",[t._v(t._s(t.formatBigNumber(a.resNums,!1)))])]}},{key:"recoveryTime",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.recoveryTime))])]}},{key:"buttons",fn:function({vSlot:a}){return[e("div",{style:t.buttonsStyle},[a.hash.length>0?e("el-button",{class:t.isPhone?"width-100 el-button-custom":"white-button",staticStyle:{"margin-right":"5px"},attrs:{round:"",size:"mini"},on:{click:function(e){return t.goHash(a.hash)}}},[t._v("交易Hash")]):t._e(),e("el-button",{class:t.isPhone?"width-100 el-button-custom":"white-button",style:{"margin-left":a.hash.length>0?"5px":0},attrs:{round:"",size:"mini"},on:{click:function(e){return t.copyContent(a.orderId)}}},[t._v("复制交易ID")])],1)]}}])})],1)])},o=[],l=a("67ee"),c=a("2cdd"),d=a("cf45"),p=a("878f"),u=function(){var t=this,e=t._self._c;return e("el-card",{staticStyle:{"border-bottom":"none"},style:{margin:t.isPhone?"0 15px":"0 0 10px 0"}},[e("div",{staticClass:"xiangxi-background",staticStyle:{padding:"15px 20px"}},[e("div",{staticClass:"flex-align-center",staticStyle:{margin:"4px 0 4px 0",padding:"0"}},[e("span",{staticClass:"left",staticStyle:{width:"120px"}},[t._v("资源类型")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right phone-right primary-color",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.resTypeConfig[t.orderData["orderType"]]))])]),e("div",{staticClass:"flex-align-center",staticStyle:{margin:"4px 0 4px 0",padding:"0"}},[e("span",{staticClass:"left",staticStyle:{width:"120px"}},[t._v("订单状态")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right phone-right primary-color",staticStyle:{display:"flex","align-items":"center"}},["安排中"===t.orderData["state"]?e("van-loading",{staticStyle:{"margin-right":"5px"},attrs:{color:t.loadingColor,type:"spinner",size:18}}):t._e(),e("span",{staticStyle:{"font-weight":"600"}},[t._v(" "+t._s(t.orderData["state"])+" ")])],1)]),e("div",{staticClass:"flex-align-center",staticStyle:{margin:"4px 0 4px 0",padding:"0"}},[e("span",{staticClass:"left",staticStyle:{width:"120px"}},[t._v("资源锁定")]),e("span",{staticClass:"middle"},[t._v(":")]),e("el-switch",{staticClass:"right",attrs:{"active-value":1,"inactive-value":0,disabled:!0},model:{value:t.orderData["rentTimeLock"],callback:function(e){t.$set(t.orderData,"rentTimeLock",e)},expression:"orderData['rentTimeLock']"}})],1),e("div",{staticClass:"flex-align-center",staticStyle:{margin:"4px 0 4px 0",padding:"0"}},[e("span",{staticClass:"left",staticStyle:{width:"120px"}},[t._v("订单总量")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right phone-right primary-color",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.popupInfoData[0]))])]),e("div",{staticClass:"flex-align-center",staticStyle:{margin:"4px 0 4px 0",padding:"0"}},[e("span",{staticClass:"left",staticStyle:{width:"120px"}},[t._v("代理成功数量")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right phone-right primary-color",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.popupInfoData[1]))])]),e("div",{staticClass:"flex-align-center",staticStyle:{margin:"4px 0 4px 0",padding:"0"}},[e("span",{staticClass:"left",staticStyle:{width:"120px"}},[t._v("代理失败数量")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right phone-right error-color",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.popupInfoData[2]))])]),e("div",{staticClass:"flex-align-center",staticStyle:{margin:"4px 0 4px 0",padding:"0"}},[e("span",{staticClass:"left",staticStyle:{width:"120px"}},[t._v("接收资源地址")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right phone-right",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.receiveAddress))])]),e("div",{staticClass:"flex-align-center",staticStyle:{margin:"4px 0 4px 0",padding:"0"}},[e("span",{staticClass:"left",staticStyle:{width:"120px"}},[t._v("订单备注")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right phone-right",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.orderData["orderNotes"]))])])]),e("div",{staticClass:"error-color",staticStyle:{"text-align":"left","margin-top":"0"}},[t._v(" 温馨提示：异常的代理可以复制交易ID，联系客服 ")])])},h=[],f={name:"topContent",components:{VanLoading:n["a"]},props:{orderData:{type:Object,required:!0},resTypeConfig:{type:Object,required:!0},loadingColor:{type:String,required:!0},isPhone:{type:Boolean,required:!0}},data:function(){return{}},computed:{popupInfoData:function(){let t=[0,0,0];if(this.orderData.hash&&this.orderData.hash.length>0){let t=0,e=0;return this.orderData.hash.forEach(a=>{const i=a["resNums"];e+=i,0===a["sendResourceResult"]&&(t+=i)}),[Object(d["d"])(e,!1),Object(d["d"])(e-t,!1),Object(d["d"])(t,!1)]}return t},receiveAddress:function(){return this.orderData.receiveAddress?Object(d["a"])(this.orderData["receiveAddress"]):""}}},m=f,y=a("2877"),g=Object(y["a"])(m,u,h,!1,null,"d60bf0ea",null),v=g.exports,b=a("82e0"),_={name:"delegateDetail",mixins:[c["a"],b["a"]],components:{CustomPopup:l["a"],CustomTable:p["a"],TopContent:v},props:{orderData:{type:Object,required:!0}},data:function(){return{formatBigNumber:d["d"],tableConfig:[{name:"state",label:"状态",phoneHide:!0},{name:"sendAddress",label:"发送资源地址",width:"150px"},{name:"info",label:"信息"},{name:"resType",label:"类型"},{name:"rentTime",label:"租用时长"},{name:"resNums",label:"代理数量"},{name:"recoveryTime",label:"回收时间",width:"100px"},{name:"buttons",label:"其他",width:"220px",phoneHideLeft:!0}]}},computed:{hashData:function(){return this.orderData.hash||[]},buttonsStyle:function(){return this.isPhone?{display:"flex",width:"100%","margin-top":"15px"}:{}}},methods:{close:function(){this.setOrderData({})},goHash:function(t){window.open("https://tronscan.org/#/transaction/"+t)},phoneRowClassName:function(t){const e=t.state,a=this.popupState(e);return"success"===a?[e,"phone-order-record-firstOrder"]:"danger"===a?[e,"phone-order-record-error"]:[e,"#phone-order-record-primary"]},tableRowClassName:function({row:t}){const e=this.popupState(t["state"]);return"success"===e?"first-order-row":"danger"===e?"error-row":"other-row"},popupState:function(t){return"订单正常"===t?"success":"代理异常"===t?"danger":"warning"},updateOrderData:function(t){return this.orderData["orderId"]===t["orderId"]&&(this.setOrderData(t),!0)},setOrderData:function(t){this.$emit("update:orderData",t)}}},w=_,C=Object(y["a"])(w,r,o,!1,null,"587fbac5",null),x=C.exports,S=function(){var t=this,e=t._self._c;return e("custom-popup",{attrs:{id:"popup3",title:"订单续费",visible:t.visible,"is-phone":t.isPhone},on:{"update:visible":function(e){t.visible=e},close:t.close}},[e("div",{staticClass:"popup-default",attrs:{id:"popup3-body"}},[e("el-form",{attrs:{"label-position":"top",size:"medium","label-width":"100px",onsubmit:"return false"}},[e("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"续费天数"}},[e("el-input",{staticClass:"popup3Input",attrs:{type:"number",placeholder:"请输入续费天数"},on:{change:t.inputChange},model:{value:t.data.rentTime,callback:function(e){t.$set(t.data,"rentTime",e)},expression:"data.rentTime"}},[e("div",{staticClass:"el-icon-minus input-plus-minus",class:t.minusDisable?"input-plus-minus-disabled":"",attrs:{slot:"prepend"},on:{click:function(e){return t.inputStep("minus")}},slot:"prepend"}),e("div",{staticClass:"ciyaowenzi-color",staticStyle:{"font-weight":"500"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("天")]),e("div",{staticClass:"el-icon-plus input-plus-minus",class:t.plusDisable?"input-plus-minus-disabled":"",attrs:{slot:"append"},on:{click:function(e){return t.inputStep("plus")}},slot:"append"})])],1),e("el-form-item",[e("div",{staticClass:"xiangxi-background",staticStyle:{padding:"15px 20px"}},[e("div",{staticClass:"flex-align-center"},[e("span",{staticClass:"left"},[t._v("订单金额")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.toTrx(t.orderMoney))+" TRX")])]),e("div",{staticClass:"flex-align-center"},[e("span",{staticClass:"left"},[t._v("订单数量")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right"},[t._v(t._s(t.orderData["payNums"]))])]),e("div",{staticClass:"flex-align-center"},[e("span",{staticClass:"left"},[t._v("资源类型")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right"},[t._v(t._s(t.resTypeConfig[t.orderData["orderType"]]))])]),e("div",{staticClass:"flex-align-center"},[e("span",{staticClass:"left"},[t._v("一天单价")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right"},[t._v(t._s(t.dayPrice)+"SUN")])]),e("div",{staticClass:"flex-align-center"},[e("span",{staticClass:"left"},[t._v("追加时长")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right"},[t._v(t._s(t.data.rentTime.toString()+"天"))])]),e("div",{staticClass:"flex-align-center"},[e("span",{staticClass:"left"},[t._v("起始时间")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right"},[t._v(t._s(t.orderData["recoveryTime"]))])]),e("div",{staticClass:"flex-align-center"},[e("span",{staticClass:"left"},[t._v("结束时间")]),e("span",{staticClass:"middle"},[t._v(":")]),e("span",{staticClass:"right"},[t._v(t._s(t.recoveryTime))])])])]),e("el-form-item",[t.orderData["canRenewals"]?e("div",{staticStyle:{display:"flex","align-items":"center"}},[t.tronLikCanPay?e("el-button",{staticClass:"button-style",staticStyle:{width:"inherit",flex:"1"},attrs:{round:"",type:"primary"},on:{click:function(e){return t.submitRenewals("tronLink")}}},[t._v("TronLink支付")]):t._e(),e("el-button",{staticClass:"button-style",staticStyle:{width:"inherit",flex:"1"},attrs:{round:"",type:"warning"},on:{click:function(e){return t.submitRenewals("scanCode")}}},[t._v("地址支付")]),t.isLogin?e("el-button",{staticClass:"button-style",staticStyle:{width:"inherit",flex:"1"},attrs:{round:"",type:"success"},on:{click:function(e){return t.submitRenewals("userRenewals")}}},[t._v("账号支付")]):t._e()],1):e("el-alert",{attrs:{title:"该订单已不支持续费",type:"warning","show-icon":"",closable:!1}})],1)],1)],1),e("show-collect-money",{ref:"scanMoney",attrs:{id:"popup5","scan-result-id":t.scanPopup.scanResultId,"copy-content":t.copyContent,"end-time":t.scanPopup.endTime,"start-time":t.scanPopup.startTime,"collect-address":t.scanPopup.collectAddress,"collect-money":t.scanPopup.collectMoney,"is-phone":t.isPhone,"current-time":t.scanPopup.currentTime}})],1)},T=[],D=a("b775"),k=a("206e"),O=a("ad3a"),R=a("cf24"),P={name:"index",mixins:[c["a"],b["a"]],components:{CustomPopup:l["a"],ShowCollectMoney:R["a"]},props:{orderData:{type:Object,required:!0}},data:function(){return{toTrx:d["q"],data:{rentTime:3},loading:!1,loadingConfig:{headers:{[D["c"]]:[encodeURIComponent('div[aria-label="订单续费"]'),encodeURIComponent(".el-dialog__body")],[D["e"]]:D["c"]}},scanPopup:{collectAddress:"",collectMoney:0,startTime:0,endTime:0,currentTime:0,scanResultId:""}}},computed:{plusDisable:function(){return 30===this.data.rentTime},minusDisable:function(){return 3===this.data.rentTime},rentTimeHour:function(){return 24*this.data.rentTime},orderMoney:function(){return this.formatMoney(this.orderData.payNums*this.dayPrice*this.data.rentTime)},recoveryTime:function(){return Object(d["b"])("YYYY-mm-dd HH:MM:SS",new Date(Object(d["e"])(this.orderData.recoveryTime)+60*this.rentTimeHour*60*1e3))},dayPrice:function(){if(!Object(d["i"])(this.priceConfig)&&!Object(d["i"])(this.orderData)){if(this.priceConfig[this.orderData.orderType][this.rentTimeHour])return this.priceConfig[this.orderData.orderType][this.rentTimeHour];if(this.priceConfig[this.orderData.orderType]["other"])return this.priceConfig[this.orderData.orderType]["other"]}return 0}},watch:{loading:function(){this.loading?D["a"].start(this.loadingConfig):D["a"].close(this.loadingConfig)}},methods:{close:function(){this.setOrderData({})},inputStep:function(t){"plus"===t?this.data.rentTime<30&&this.data.rentTime++:this.data.rentTime>3&&this.data.rentTime--},inputChange:function(t){return Object(d["k"])(t)?this.data.rentTime<3?(this.$message.warning("续费时间至少3天"),void(this.data.rentTime=3)):void(this.data.rentTime>30&&(this.$message.warning("续费时间至多30天"),this.data.rentTime=3)):(this.$message.warning("无效值"),void(this.data.rentTime=3))},submitRenewals:async function(t){try{this.checkTronLinkCollectAddress()}catch(e){return void this.$message.warning(e)}try{if(this.loading=!0,"tronLink"===t)await this.checkBalanceCanPay(this.orderMoney)&&(await k["a"].getTronWeb(),await this.createTronLinkRenewals());else if("userRenewals"===t){if(!this.checkUserBalance(this.orderMoney))return;const t={orderId:this.orderData.orderId,rentTime:this.rentTimeHour,paymentAmount:this.orderMoney,chromeIndex:this.chromeIndex};await Object(O["f"])(t)}else await this.createRenewals();this.loading=!1}catch(a){this.loading=!1,"tronLink"===t&&k["a"].hasTronLink()&&this.needScan().then(async()=>{this.loading=!0,await this.createRenewals(),this.loading=!1})}},createRenewals:async function(){try{const t={orderId:this.orderData.orderId,rentTime:this.rentTimeHour,paymentAmount:this.orderMoney,chromeIndex:this.chromeIndex},e=await Object(O["d"])(t),a=e.data;e.code===D["j"]&&(this.scanPopup.scanResultId=a.scanResultId,this.scanPopup.collectAddress=a.collectAddress,this.scanPopup.collectMoney=a.collectMoney,this.scanPopup.startTime=a.startTime,this.scanPopup.endTime=a.endTime,this.scanPopup.currentTime=Object(d["n"])(),this.$refs.scanMoney.open())}catch(t){this.$message.error(t)}},createTronLinkRenewals:async function(){let t;try{const e={orderId:this.orderData.orderId,rentTime:this.rentTimeHour,paymentAmount:this.orderMoney,fromAddress:await k["a"].getTronLinkNowAddress()};if(await Object(O["a"])(e)){t=await k["a"].sendTrx(this.tronLinkCollectAddress,this.orderMoney);const a=await this.checkResult(t);if(a){e["transactionId"]=t;const a=await Object(O["e"])(e);a.code!==D["j"]&&this.showSubmitFailureTips(t,a.msg)}}}catch(e){t?this.showSubmitFailureTips(t,e):this.$message.error(e)}},updateOrderData:function(t){return this.orderData["orderId"]===t["orderId"]&&(this.setOrderData(t),!0)},setOrderData:function(t){this.$emit("update:orderData",t)}}},j=P,I=(a("ea4c"),Object(y["a"])(j,S,T,!1,null,"289a2772",null)),N=I.exports,$=function(){var t=this,e=t._self._c;return e("custom-popup",{attrs:{id:"popup6",title:t.title,visible:t.visible,"is-phone":t.isPhone,"no-card":!0},on:{"update:visible":function(e){t.visible=e},close:t.close,opened:t.getData}},[e("div",{staticClass:"popup-default",staticStyle:{width:"100%"}},[e("custom-table",{attrs:{"is-phone":t.isPhone,"table-data":t.tableData,"table-config":t.tableConfig,"table-row-class-name":t.tableRowClassName,"phone-row-class-name":t.phoneRowClassName,"badge-key":"firstOrder","phone-item-style":t.phoneItemStyle},scopedSlots:t._u([{key:"firstOrder",fn:function({vSlot:a}){return[e("el-tag",{attrs:{effect:"dark",type:t.isFistOrder(a.firstOrder)?"success":"warning"}},[t._v(t._s(t.isFistOrder(a.firstOrder)?"下单":"续费"))])]}},{key:"payNums",fn:function({vSlot:a}){return[e("span",[t._v(t._s(t.formatBigNumber(a.payNums)))])]}},{key:"rentTime",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.rentTime))])]}},{key:"orderPrice",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.orderPrice))])]}},{key:"orderMoney",fn:function({vSlot:a}){return[e("span",[t._v(t._s(t.formatBigNumber(t.toTrx(a.orderMoney)))+" trx")])]}},{key:"startTimeHeader",fn:function({vSlot:a}){return[e("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(a))]),e("el-tooltip",{attrs:{content:"回收时间仅作为参考值，具体回收时间由代理交易hash为准"}},[e("i",{staticClass:"el-icon-question",staticStyle:{cursor:"pointer"}})])]}},{key:"startTime",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.startTime))])]}},{key:"endTimeHeader",fn:function({vSlot:a}){return[e("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(a))]),e("el-tooltip",{attrs:{content:"回收时间仅作为参考值，具体回收时间由代理交易hash为准"}},[e("i",{staticClass:"el-icon-question",staticStyle:{cursor:"pointer"}})])]}},{key:"endTime",fn:function({vSlot:a}){return[e("span",[t._v(t._s(a.endTime))])]}}])})],1)])},A=[],L={name:"payRecord",components:{CustomPopup:l["a"],CustomTable:p["a"]},mixins:[c["a"],b["a"]],props:{orderData:{type:Object,required:!0}},data:function(){return{toTrx:d["q"],formatBigNumber:d["d"],loading:!1,tableConfig:[{name:"firstOrder",label:"订单类型",phoneHide:!0},{name:"payNums",label:"租用数量"},{name:"rentTime",label:"租用时长"},{name:"orderPrice",label:"订单单价"},{name:"orderMoney",label:"消费金额"},{name:"startTime",label:"起始时间",width:"100px",customHeader:!0},{name:"endTime",label:"回收时间",width:"100px",customHeader:!0}],tableData:[],loadingConfig:{headers:{[D["d"]]:["",".el-dialog__body"]}}}},computed:{title:function(){return Object(d["i"])(this.orderData)?"":this.orderData["orderId"].toString()+"--"+this.resTypeConfig[this.orderData["orderType"]]}},watch:{loading:function(){this.loadingConfig.headers[D["d"]][0]='div[aria-label="'+this.title+'"]',this.loading?D["a"].start(this.loadingConfig):D["a"].close(this.loadingConfig)}},methods:{close:function(){this.tableData=[],this.$emit("update:orderData",{})},tableRowClassName:function({row:t}){return this.isFistOrder(t["firstOrder"])?"first-order-row":"other-row"},phoneRowClassName:function(t){const e=t["firstOrder"];return this.isFistOrder(e)?["下单","phone-order-record-firstOrder"]:["续费","phone-order-record"]},isFistOrder:function(t){return 1===t},getData:async function(){this.loading=!0;try{await Object(d["m"])(500),this.tableData=await Object(O["c"])(this.orderData["orderId"]),this.loading=!1}catch(t){this.loading=!1,this.$message.error(t)}}}},q=L,M=Object(y["a"])(q,$,A,!1,null,"5237c8c0",null),z=M.exports,B=a("9215");const H={tableI18n:{en:{"订单进度":"order progress","资源锁定":"res lock","租用类型":"res type","租用时间":"rent time","完成数量":"completed quantity","接收地址":"receive address","消费TRX":"order money","创建时间":"create time","回收时间":"recovery time","订单拓展":"order expansion"},cn:{"订单进度":"订单进度","资源锁定":"资源锁定","租用类型":"资源类型","租用时间":"租用时间","完成数量":"完成数量","接收地址":"接收地址","消费TRX":"消费TRX","创建时间":"创建时间","回收时间":"回收时间","订单拓展":"订单拓展"}}};var F=a("42e4"),E={name:"index",mixins:[c["a"],B["a"],F["a"]],components:{CustomTable:p["a"],VanLoading:n["a"],DelegateDetail:x,RenewalsOrder:N,PayRecord:z},props:{tableData:{type:Array,required:!0},page:{type:Number,default:1},pages:{type:Number,default:1},limit:{type:Number,default:8},pageChange:{type:Function,default:()=>{}},showPage:{type:Boolean,default:!1},showRenewalsButton:{type:Boolean,default:!0},showOrderIdButton:{type:Boolean,default:!0},total:{type:Number,default:0}},data:function(){return{i18nConfig:H,showRecoveryTipsTime:7200,formatBigNumber:d["d"],badgeKey:"",tableConfig:[{name:"state",label:"订单进度",width:"120px",phoneFollow:"recoveryTime",phoneLeftBlock:!0},{name:"rentTimeLock",label:"资源锁定"},{name:"orderType",label:"租用类型"},{name:"lockTime",label:"租用时间"},{name:"payNums",label:"完成数量"},{name:"receiveAddress",label:"接收地址",width:"170px"},{name:"orderMoney",label:"消费TRX"},{name:"time",label:"创建时间",width:"100px"},{name:"recoveryTime",label:"回收时间",width:"130px"},{name:"hash",label:"订单拓展",phoneLeftBlock:!0}],delegateDetail:{orderData:{}},payRecord:{orderData:{}},renewalsOrder:{orderData:{}},orderStateConfig:{"安排中":1,"部分代理":2,"代理中":3,"已回收部分":4,"已回收":5}}},computed:{tableHeight:function(){const t=this.tableData.length;return this.tableData.length>=8?"auto":(102.25*t).toString()}},methods:{orderState:function(t){return t.indexOf("异常")>-1?"danger":"安排中"===t?"warning":t.indexOf("回收")>-1?"success":t.indexOf("代理")>-1?"primary":void 0},checkShowRecoveryTips:function(t,e){if(!e)return!1;const a=Object(d["n"])();return t=Object(d["f"])(t),a<t&&t-a<this.showRecoveryTipsTime},openOrderRecord:function(t){this.payRecord.orderData=t,this.$refs.payRecord.open()},openHashDetail:function(t){this.delegateDetail.orderData=t,this.$refs.delegateDetail.open()},orderRenewals:function(t){this.renewalsOrder.orderData=t,this.$refs.renewalsOrder.open()},tableDataUpdate:function(){this.tableData.forEach(t=>{Object(d["i"])(this.delegateDetail.orderData)||this.$refs.delegateDetail.updateOrderData(t),Object(d["i"])(this.renewalsOrder.orderData)||this.$refs.renewalsOrder.updateOrderData(t)})},splitRecoveryTime:function(t){return t.split(" ")}}},U=E,X=(a("6234"),a("6848"),a("6e10")),Y=a("a8a0"),J=Object(y["a"])(U,i,s,!1,null,"520c3fe6",null);"function"===typeof X["default"]&&Object(X["default"])(J),"function"===typeof Y["default"]&&Object(Y["default"])(J);e["a"]=J.exports},"5a81":function(t,e,a){"use strict";a("a77e")},6234:function(t,e,a){"use strict";a("98e9")},6426:function(t,e,a){t.exports={"border-color":"#e5e7eb","phone-width":"768px","background-color":"#f0f8ff","order-state-primary-phone":"#d9ecff","order-state-success-phone":"#e1f3d8","order-state-warning-phone":"#faecd8","order-state-error-phone":"#fde2e2","primary-color":"#409eff","success-color":"#67C23A","warning-color":"#E6A23C","error-color":"#F56C6C","ciyaowenzi-color":"#909399","base-shadow":"0 2px 4px rgba(0,0,0,0.12),0 0 6px rgba(0,0,0,0.04)","base3-shadow":"0 1px 1px #ccc","font-wight-600":"600","nav-menu-text-color":"#1989fa","nav-menu-text-color2":"#2c3e50","aside-width":"200px","zhuyaowenzi-color":"#606266"}},"67ee":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",[t.isPhone?e("van-popup",{staticClass:"van-popup",style:{left:t.left},attrs:{id:"vanPopup",position:"right","get-container":"body"},on:{opened:t.opened},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("div",{staticClass:"el-card__header header",style:{left:t.left}},[e("div",{},[t._v(t._s(t.title))]),e("button",{staticClass:"el-dialog__headerbtn",staticStyle:{top:"28px !important"},attrs:{type:"button","aria-label":"Close"},on:{click:t.phoneDialogClose}},[e("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])]),e("div",{staticStyle:{"margin-top":"80px !important"}},[t.noCard?t._t("default"):e("el-card",{staticStyle:{margin:"0 15px"},attrs:{"body-style":{padding:"10px"}}},[t._t("default")],2)],2)]):e("el-dialog",{attrs:{title:t.title,visible:t.visible,"show-close":!1,"close-on-click-modal":!1,"append-to-body":!0,"destroy-on-close":!0},on:{"update:visible":function(e){t.visible=e},close:t.close,opened:t.opened}},[e("template",{slot:"title"},[e("span",{staticClass:"el-dialog__title"},[t._v(t._s(t.title))]),e("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.dialogClose}},[e("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]),e("div",{staticClass:"border-bottom",staticStyle:{"margin-top":"20px"}})]),e("div",{staticStyle:{display:"flex"}},[t._t("default")],2)],2)],1)},s=[],n={name:"index",components:{},props:{isPhone:{type:Boolean,required:!0},visible:{type:Boolean,required:!0},title:{type:String,required:!0},noCard:{type:Boolean,default:!1}},watch:{visible:function(){setTimeout(()=>{this.visible?this.left="0 !important":this.left="100% !important"},0)}},data:function(){return{left:"100% !important"}},methods:{close:function(){this.$emit("close")},opened:function(){this.$emit("opened")},dialogClose:function(){this.$emit("update:visible",!1)},phoneDialogClose:function(){this.dialogClose(),this.close()}}},r=n,o=(a("8352"),a("5a81"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,"ed5604aa",null);e["a"]=l.exports},6848:function(t,e,a){"use strict";a("d031")},"6e10":function(t,e,a){"use strict";var i=a("f41c"),s=a.n(i);e["default"]=s.a},7331:function(t,e,a){},8352:function(t,e,a){"use strict";a("1d60")},"98e9":function(t,e,a){},a77e:function(t,e,a){},a8a0:function(t,e,a){"use strict";var i=a("bf60"),s=a.n(i);e["default"]=s.a},ad3a:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return c}));var i=a("b775");const s=async function(t,e){const a=await Object(i["i"])({method:"post",url:"/simple/history",data:{search:t,page:e},headers:{[i["d"]]:["#history-list",i["b"]],[i["h"]]:1}});if(a)return a.data.data;throw""},n=async function(t){const e=await Object(i["i"])({method:"post",url:"/simple/tronLinkRenewals",data:t,headers:{[i["f"]]:!0}});return!!e&&e.data},r=async function(t){const e=await Object(i["i"])({method:"post",url:"/simple/orderRenewals",data:t});return!!e&&e.data},o=async function(t){const e=await Object(i["i"])({method:"post",url:"/simple/userRenewals",data:t});return!!e&&e.data},l=async function(t){const e=await Object(i["i"])({method:"post",url:"/simple/orderRecord",data:{orderId:t}});return!!e&&e.data.data.data},c=async function(t){const e=await Object(i["i"])({method:"post",url:"/simple/checkRenewals",data:t});return!!e&&e.data.code===i["g"]}},bf60:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"l1":"immediately recycling","异常":"error","回收异常":"recoveryError","部分回收":"recoveryPart","已回收":"recovery","代理中":"delegating","部分代理":"delegating part","安排中":"processing","l2":"payment record","l3":"delegate detail"},"cn":{"l1":"即将回收","异常":"异常","回收异常":"回收异常","部分回收":"部分回收","已回收":"已回收","代理中":"代理中","部分代理":"部分代理","安排中":"安排中","l2":"消费记录","l3":"代理详情"}}'),delete t.options._Ctor}},cf24:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("custom-popup",{attrs:{title:"扫码支付",visible:t.visible,"is-phone":t.isPhone},on:{"update:visible":function(e){t.visible=e},close:t.close}},[e("div",{staticClass:"popup-default"},[e("div",{staticClass:"popup-content-tips margin-top-0",staticStyle:{"text-align":"left"}},[e("ul",{staticClass:"ul-style margin-left-20"},[e("li",{staticClass:"margin-left-20"},[t._v("请在有效的时间内支付")]),e("li",{staticClass:"margin-left-20"},[t._v("需转账："+t._s(t.collectMoney.toString())+" 个TRX"),e("em",{staticStyle:{"margin-left":"5px","font-size":"10px"}},[t._v("(不能少否则不能到账)")])]),e("li",{staticClass:"margin-left-20"},[t._v("收款地址："),e("span",[t._v(t._s(t.isPhone?t.abbreviationAddress(t.collectAddress):t.collectAddress))])])]),e("div",{staticClass:"error-color margin-left-20",staticStyle:{"font-size":"15px"}},[t._v("请勿同时在同一浏览器多窗口拉起扫码支付")]),e("div",{staticStyle:{position:"relative","text-align":"center",padding:"20px 0 10px 0"}},[t.timeout?e("div",{staticClass:"error-color",staticStyle:{"font-size":"20px","font-weight":"500"}},[t._v("支付超时，请勿支付")]):e("el-statistic",{ref:"statistic",staticClass:"error-color",attrs:{format:"mm 分 ss 秒",value:1e3*t.endTime-5e3,title:"剩余时间：","time-indices":""},on:{finish:t.timeoutClose}}),e("vue-qrcode",{style:{filter:t.timeout?"blur(2px)":"inherit"},attrs:{value:t.collectAddress,width:230,margin:2}}),t.timeout?t._e():e("div",{staticClass:"popup2-info popup2-radius-bottom",staticStyle:{"padding-top":"0",position:"absolute",left:"50%",bottom:"16px",transform:"translate(-50%, 100%)"}},[t._v(" 监控支付中"+t._s(t.loadingText)+" ")])],1)]),e("div",{staticStyle:{"padding-top":"15px"}},[e("el-button",{staticClass:"button-style",attrs:{type:"primary",round:""},on:{click:function(e){return t.popup2Copy("address")}}},[t._v("复制收款地址")])],1),e("div",[e("el-button",{staticClass:"button-style",attrs:{type:"primary",round:""},on:{click:function(e){return t.popup2Copy("trx")}}},[t._v("复制支付数量")])],1)])])},s=[],n=a("67ee");function r(t,e){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(a[i[s]]=t[i[s]])}return a}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=a("736c"),l=a.n(o);const c=["low","medium","quartile","high","L","M","Q","H"],d=[0,1,2,3,4,5,6,7],p=["alphanumeric","numeric","kanji","byte"],u=["image/png","image/jpeg","image/webp"],h=40;var f={props:{version:{type:Number,validator:t=>t===Number.parseInt(String(t),10)&&t>=1&&t<=h},errorCorrectionLevel:{type:String,validator:t=>c.includes(t)},maskPattern:{type:Number,validator:t=>d.includes(t)},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:t=>["dark","light"].every(e=>["string","undefined"].includes(typeof t[e]))},type:{type:String,validator:t=>u.includes(t)},quality:{type:Number,validator:t=>t===Number.parseFloat(String(t))&&t>=0&&t<=1},value:{type:[String,Array],required:!0,validator(t){return"string"===typeof t||t.every(({data:t,mode:e})=>"string"===typeof t&&(null==e||p.includes(e)))}}},data(){return{dataUrl:""}},watch:{$props:{deep:!0,immediate:!0,handler:"toDataURL"}},methods:{toDataURL(){const t=this.$props,{quality:e}=t,a=r(t,["quality"]);return l.a.toDataURL(this.value,Object.assign(a,null==e||{renderOptions:{quality:e}})).then(t=>this.dataUrl=t).catch(t=>this.$emit("error",t))}},render(){return this.$createElement("img",{domProps:Object.assign(Object.assign({},this.$attrs),{src:this.dataUrl})})}},m=a("cf45"),y=a("82e0"),g=a("2934"),v=a("4360"),b={name:"index",mixins:[y["a"]],components:{CustomPopup:n["a"],VueQrcode:f},props:{isPhone:{type:Boolean,required:!0},collectMoney:{type:Number,required:!0},collectAddress:{type:String,required:!0},startTime:{type:Number,required:!0},endTime:{type:Number,required:!0},currentTime:{type:Number,required:!0},copyContent:{type:Function,required:!0},scanResultId:{type:String,required:!0},autoReset:{type:Boolean,default:!0}},data:function(){return{abbreviationAddress:m["a"],loadingText:".",timeout:!1}},watch:{visible:function(){this.visible&&(this.timeout=!1,this.createLoadingText(),this.checkPayResult())}},methods:{close:function(){this.autoReset&&setTimeout(()=>{Object(g["c"])(v["a"].state.app.chromeIndex,this.scanResultId)},12e4),this.$emit("close")},popup2Copy:function(t){"address"===t?this.copyContent(this.collectAddress):this.copyContent(this.collectMoney.toString())},checkPayResult:async function(){if(await Object(g["b"])(this.scanResultId))return this.visible=!1,this.$message.success("支付成功"),void this.close();this.visible&&!this.timeout&&Object(m["n"])()<this.endTime&&setTimeout(()=>{this.checkPayResult()},5e3)},createLoadingText:function(){this.loadingText=6===this.loadingText.length?".":this.loadingText+".",this.visible&&!this.timeout&&setTimeout(()=>{this.createLoadingText()},500)},timeoutClose:function(){this.timeout=!0}}},_=b,w=(a("f3c7"),a("db4e"),a("2877")),C=Object(w["a"])(_,i,s,!1,null,"d973c38a",null);e["a"]=C.exports},d031:function(t,e,a){},db4e:function(t,e,a){"use strict";a("6426")},ea4c:function(t,e,a){"use strict";a("039a")},f3c7:function(t,e,a){"use strict";a("7331")},f41c:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"能量":"ENERGY","带宽":"BANDWIDTH","提交":"Submit"},"cn":{"能量":"能量","带宽":"带宽","提交":"提交"}}'),delete t.options._Ctor}}}]);