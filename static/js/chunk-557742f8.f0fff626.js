(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-557742f8"],{"1c4f":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择租用时间"},on:{change:t.selectChange},model:{value:t.selectRentTime,callback:function(e){t.selectRentTime=e},expression:"selectRentTime"}},t._l(t.rentTimeConfig,(function(t,i){return e("el-option",{key:i,attrs:{label:t,value:Number(i)}})})),1)},s=[],o={name:"rentTime",props:{rentTimeConfig:{type:Object,required:!0},rentTime:{required:!0}},data:function(){return{selectRentTime:""}},watch:{rentTime:function(){this.selectRentTime=this.rentTime}},created(){this.selectRentTime=this.rentTime},methods:{selectChange:function(){this.$emit("update:rentTime",this.selectRentTime)}}},n=o,r=i("2877"),l=Object(r["a"])(n,a,s,!1,null,"326c7f4b",null);e["a"]=l.exports},"1d60":function(t,e,i){},"55e6":function(t,e,i){"use strict";e["a"]={methods:{notLoginTips:async function(){return await this.$alert("primary","登录？","请先登录，再操作","确定")}}}},"5a81":function(t,e,i){"use strict";i("a77e")},6426:function(t,e,i){t.exports={"border-color":"#e5e7eb","phone-width":"768px","background-color":"#f0f8ff","order-state-primary-phone":"#d9ecff","order-state-success-phone":"#e1f3d8","order-state-warning-phone":"#faecd8","order-state-error-phone":"#fde2e2","primary-color":"#409eff","success-color":"#67C23A","warning-color":"#E6A23C","error-color":"#F56C6C","ciyaowenzi-color":"#909399","base-shadow":"0 2px 4px rgba(0,0,0,0.12),0 0 6px rgba(0,0,0,0.04)","base3-shadow":"0 1px 1px #ccc","font-wight-600":"600","nav-menu-text-color":"#1989fa","nav-menu-text-color2":"#2c3e50","aside-width":"200px","zhuyaowenzi-color":"#606266"}},"67ee":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[t.isPhone?e("van-popup",{staticClass:"van-popup",style:{left:t.left},attrs:{id:"vanPopup",position:"right","get-container":"body"},on:{opened:t.opened},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("div",{staticClass:"el-card__header header",style:{left:t.left}},[e("div",{},[t._v(t._s(t.title))]),e("button",{staticClass:"el-dialog__headerbtn",staticStyle:{top:"28px !important"},attrs:{type:"button","aria-label":"Close"},on:{click:t.phoneDialogClose}},[e("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])]),e("div",{staticStyle:{"margin-top":"80px !important"}},[t.noCard?t._t("default"):e("el-card",{staticStyle:{margin:"0 15px"},attrs:{"body-style":{padding:"10px"}}},[t._t("default")],2)],2)]):e("el-dialog",{attrs:{title:t.title,visible:t.visible,"show-close":!1,"close-on-click-modal":!1,"append-to-body":!0,"destroy-on-close":!0},on:{"update:visible":function(e){t.visible=e},close:t.close,opened:t.opened}},[e("template",{slot:"title"},[e("span",{staticClass:"el-dialog__title"},[t._v(t._s(t.title))]),e("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.dialogClose}},[e("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]),e("div",{staticClass:"border-bottom",staticStyle:{"margin-top":"20px"}})]),e("div",{staticStyle:{display:"flex"}},[t._t("default")],2)],2)],1)},s=[],o={name:"index",components:{},props:{isPhone:{type:Boolean,required:!0},visible:{type:Boolean,required:!0},title:{type:String,required:!0},noCard:{type:Boolean,default:!1}},watch:{visible:function(){setTimeout(()=>{this.visible?this.left="0 !important":this.left="100% !important"},0)}},data:function(){return{left:"100% !important"}},methods:{close:function(){this.$emit("close")},opened:function(){this.$emit("opened")},dialogClose:function(){this.$emit("update:visible",!1)},phoneDialogClose:function(){this.dialogClose(),this.close()}}},n=o,r=(i("8352"),i("5a81"),i("2877")),l=Object(r["a"])(n,a,s,!1,null,"ed5604aa",null);e["a"]=l.exports},"682e":function(t,e,i){"use strict";i("a987")},7331:function(t,e,i){},8352:function(t,e,i){"use strict";i("1d60")},"9dbb":function(t,e,i){"use strict";i("d388")},a77e:function(t,e,i){},a987:function(t,e,i){},cf24:function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("custom-popup",{attrs:{title:"扫码支付",visible:t.visible,"is-phone":t.isPhone},on:{"update:visible":function(e){t.visible=e},close:t.close}},[e("div",{staticClass:"popup-default"},[e("div",{staticClass:"popup-content-tips margin-top-0",staticStyle:{"text-align":"left"}},[e("ul",{staticClass:"ul-style margin-left-20"},[e("li",{staticClass:"margin-left-20"},[t._v("请在有效的时间内支付")]),e("li",{staticClass:"margin-left-20"},[t._v("需转账："+t._s(t.collectMoney.toString())+" 个TRX"),e("em",{staticStyle:{"margin-left":"5px","font-size":"10px"}},[t._v("(不能少否则不能到账)")])]),e("li",{staticClass:"margin-left-20"},[t._v("收款地址："),e("span",[t._v(t._s(t.isPhone?t.abbreviationAddress(t.collectAddress):t.collectAddress))])])]),e("div",{staticClass:"error-color margin-left-20",staticStyle:{"font-size":"15px"}},[t._v("请勿同时在同一浏览器多窗口拉起扫码支付")]),e("div",{staticStyle:{position:"relative","text-align":"center",padding:"20px 0 10px 0"}},[t.timeout?e("div",{staticClass:"error-color",staticStyle:{"font-size":"20px","font-weight":"500"}},[t._v("支付超时，请勿支付")]):e("el-statistic",{ref:"statistic",staticClass:"error-color",attrs:{format:"mm 分 ss 秒",value:1e3*t.endTime-5e3,title:"剩余时间：","time-indices":""},on:{finish:t.timeoutClose}}),e("vue-qrcode",{style:{filter:t.timeout?"blur(2px)":"inherit"},attrs:{value:t.collectAddress,width:230,margin:2}}),t.timeout?t._e():e("div",{staticClass:"popup2-info popup2-radius-bottom",staticStyle:{"padding-top":"0",position:"absolute",left:"50%",bottom:"16px",transform:"translate(-50%, 100%)"}},[t._v(" 监控支付中"+t._s(t.loadingText)+" ")])],1)]),e("div",{staticStyle:{"padding-top":"15px"}},[e("el-button",{staticClass:"button-style",attrs:{type:"primary",round:""},on:{click:function(e){return t.popup2Copy("address")}}},[t._v("复制收款地址")])],1),e("div",[e("el-button",{staticClass:"button-style",attrs:{type:"primary",round:""},on:{click:function(e){return t.popup2Copy("trx")}}},[t._v("复制支付数量")])],1)])])},s=[],o=i("67ee");function n(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(i[a[s]]=t[a[s]])}return i}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var r=i("736c"),l=i.n(r);const c=["low","medium","quartile","high","L","M","Q","H"],u=[0,1,2,3,4,5,6,7],d=["alphanumeric","numeric","kanji","byte"],m=["image/png","image/jpeg","image/webp"],p=40;var h={props:{version:{type:Number,validator:t=>t===Number.parseInt(String(t),10)&&t>=1&&t<=p},errorCorrectionLevel:{type:String,validator:t=>c.includes(t)},maskPattern:{type:Number,validator:t=>u.includes(t)},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:t=>["dark","light"].every(e=>["string","undefined"].includes(typeof t[e]))},type:{type:String,validator:t=>m.includes(t)},quality:{type:Number,validator:t=>t===Number.parseFloat(String(t))&&t>=0&&t<=1},value:{type:[String,Array],required:!0,validator(t){return"string"===typeof t||t.every(({data:t,mode:e})=>"string"===typeof t&&(null==e||d.includes(e)))}}},data(){return{dataUrl:""}},watch:{$props:{deep:!0,immediate:!0,handler:"toDataURL"}},methods:{toDataURL(){const t=this.$props,{quality:e}=t,i=n(t,["quality"]);return l.a.toDataURL(this.value,Object.assign(i,null==e||{renderOptions:{quality:e}})).then(t=>this.dataUrl=t).catch(t=>this.$emit("error",t))}},render(){return this.$createElement("img",{domProps:Object.assign(Object.assign({},this.$attrs),{src:this.dataUrl})})}},f=i("cf45"),y=i("82e0"),g=i("2934"),b=i("4360"),v={name:"index",mixins:[y["a"]],components:{CustomPopup:o["a"],VueQrcode:h},props:{isPhone:{type:Boolean,required:!0},collectMoney:{type:Number,required:!0},collectAddress:{type:String,required:!0},startTime:{type:Number,required:!0},endTime:{type:Number,required:!0},currentTime:{type:Number,required:!0},copyContent:{type:Function,required:!0},scanResultId:{type:String,required:!0},autoReset:{type:Boolean,default:!0}},data:function(){return{abbreviationAddress:f["a"],loadingText:".",timeout:!1}},watch:{visible:function(){this.visible&&(this.timeout=!1,this.createLoadingText(),this.checkPayResult())}},methods:{close:function(){this.autoReset&&setTimeout(()=>{Object(g["c"])(b["a"].state.app.chromeIndex,this.scanResultId)},12e4),this.$emit("close")},popup2Copy:function(t){"address"===t?this.copyContent(this.collectAddress):this.copyContent(this.collectMoney.toString())},checkPayResult:async function(){if(await Object(g["b"])(this.scanResultId))return this.visible=!1,this.$message.success("支付成功"),void this.close();this.visible&&!this.timeout&&Object(f["n"])()<this.endTime&&setTimeout(()=>{this.checkPayResult()},5e3)},createLoadingText:function(){this.loadingText=6===this.loadingText.length?".":this.loadingText+".",this.visible&&!this.timeout&&setTimeout(()=>{this.createLoadingText()},500)},timeoutClose:function(){this.timeout=!0}}},x=v,_=(i("f3c7"),i("db4e"),i("2877")),T=Object(_["a"])(x,a,s,!1,null,"d973c38a",null);e["a"]=T.exports},d388:function(t,e,i){},d809:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap"}},[e("pay"),e("transition",{attrs:{name:"fade"}},[e("table-data",{directives:[{name:"show",rawName:"v-show",value:!t.appMainLoading,expression:"!appMainLoading"}],attrs:{"is-login":t.isLogin,"is-phone":t.isPhone,"tag-size":t.tagSize,"card-style-desk-phone":{margin:"0 !important"}}})],1)],1)},s=[],o=i("2cdd"),n=function(){var t=this,e=t._self._c;return e("el-tabs",{staticClass:"pay-card phone-card margin-15",staticStyle:{flex:"1 1 400px"},attrs:{type:"border-card",id:"intelligentHosing-pay"}},[e("el-tab-pane",{staticStyle:{"box-sizing":"border-box"},attrs:{label:"简介"}},[e("h3",{staticStyle:{"font-size":"20px"}},[t._v("1. 笔数模式")]),e("ul",{staticClass:"ul-style margin-left-20 ciyaowenzi-color"},[e("li",[t._v("将委托65000能量到接收地址")]),e("li",[t._v("接收地址每USDT转账一次计一笔费用")]),e("li",[t._v("24小时内没有转账将重新计1笔费用")]),e("li",[t._v("每次USDT转账后能量将在5秒内补充")]),e("li",[t._v("笔数模式有两种扣费模式如下：")]),e("li",[t._v("第一种需要登录消费一笔扣费一笔")]),e("li",[t._v("第二种无需登录一次性付款购买所需笔数，滞留一天算一笔。地址在委托中重复下将追加笔数")])]),e("el-divider"),e("h3",{staticStyle:{"font-size":"20px"}},[t._v("2. 智能模式")]),e("ul",{staticClass:"ul-style margin-left-20 ciyaowenzi-color"},[e("li",[t._v("接收地址少于设定的值将自动委托差量或设定的数量")]),e("li",[t._v("委托的时间：1小时，1天，3天")])]),e("el-divider"),e("div",{staticClass:"error-color",staticStyle:{"margin-top":"20px"}},[e("b",[t._v("注意：")]),t._v(" 保持账户余额充足，否则将自动停止地址托管 ")])],1),e("el-tab-pane",{staticStyle:{"box-sizing":"border-box"},attrs:{label:"创建智能托管"}},[e("el-form",{ref:"form",attrs:{"label-position":"top",size:"medium",model:t.form,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"计价"}},[t.isNumsModel?e("div",[t._v("每次触发委托跟随系统每笔单价计费，当前一笔"),e("span",{staticClass:"warning-color",staticStyle:{margin:"0 5px","font-size":"20px"}},[t._v(t._s(t.price)+"TRX")])]):e("div",[t._v("每次触发委托将跟随系统下单单价计费")])]),e("el-form-item",{attrs:{label:"模式"}},[e("el-radio-group",{staticStyle:{display:"flex"},attrs:{size:"medium"},on:{change:t.typeChange},model:{value:t.form.autoType,callback:function(e){t.$set(t.form,"autoType",e)},expression:"form.autoType"}},[e("el-radio-button",{staticStyle:{flex:"1"},attrs:{label:0}},[t._v("笔数模式")]),e("el-radio-button",{staticStyle:{flex:"1"},attrs:{disabled:"",label:1}},[t._v("智能模式")])],1)],1),e("el-form-item",{attrs:{label:"接收地址"}},[e("el-input",{attrs:{clearable:"",placeholder:"请填写接收地址"},model:{value:t.form.receiveAddress,callback:function(e){t.$set(t.form,"receiveAddress",e)},expression:"form.receiveAddress"}})],1),t.isNumsModel?e("el-form-item",{attrs:{label:"扣费模式"}},[e("el-radio-group",{staticStyle:{display:"flex"},on:{change:t.paymentChange},model:{value:t.form.payment,callback:function(e){t.$set(t.form,"payment",e)},expression:"form.payment"}},[e("el-radio",{staticStyle:{flex:"1"},attrs:{label:1,border:""}},[t._v("购买笔数")]),e("el-radio",{staticStyle:{flex:"1"},attrs:{label:0,border:""}},[t._v("账号代扣")])],1)],1):t._e(),t.isNumsModel?t._e():e("el-form-item",{staticStyle:{position:"relative"},attrs:{label:"触发条件"}},[e("el-tooltip",{attrs:{content:"少于指定的数量，将触发委托"}},[e("i",{staticClass:"el-icon-question ciyaowenzi-color",staticStyle:{position:"absolute",left:"58px",top:"-19px",width:"4px","font-size":"15px"}})]),e("el-input",{attrs:{clearable:"",placeholder:"触发条件不能小于3.2万，不能大于100万",type:"number"},model:{value:t.form.autoLimitNums,callback:function(e){t.$set(t.form,"autoLimitNums",e)},expression:"form.autoLimitNums"}})],1),t.isNumsModel?t._e():e("el-form-item",{staticStyle:{position:"relative"},attrs:{label:"委托时间"}},[e("el-tooltip",{attrs:{content:"每笔资源委托时间"}},[e("i",{staticClass:"el-icon-question ciyaowenzi-color",staticStyle:{position:"absolute",left:"58px",top:"-19px",width:"4px","font-size":"15px"}})]),e("rent-time",{attrs:{"rent-time":t.form.rentTime,"rent-time-config":t.rentTimeConfig},on:{"update:rentTime":function(e){return t.$set(t.form,"rentTime",e)},"update:rent-time":function(e){return t.$set(t.form,"rentTime",e)}}})],1),t.isNumsModel?t._e():e("el-form-item",{staticStyle:{position:"relative"},attrs:{label:"每次委托数量"}},[e("el-tooltip",{attrs:{content:"每次委托数量不能小于触发条件数量，不能大于100万，不填将以差量为委托数量"}},[e("i",{staticClass:"el-icon-question ciyaowenzi-color",staticStyle:{position:"absolute",left:"88px",top:"-19px",width:"4px","font-size":"15px"}})]),e("el-input",{attrs:{clearable:"",placeholder:"每次委托数量不能小于3.2万，不能大于100万，不填将以差量为委托数量",type:"number"},model:{value:t.form.everyAutoNums,callback:function(e){t.$set(t.form,"everyAutoNums",e)},expression:"form.everyAutoNums"}})],1),e("max-delegate-nums",{attrs:{"show-name":t.endTimeShowName,"max-delegate-nums":t.form.maxDelegateNums,"show-help":!0},on:{"update:maxDelegateNums":function(e){return t.$set(t.form,"maxDelegateNums",e)},"update:max-delegate-nums":function(e){return t.$set(t.form,"maxDelegateNums",e)}}}),t.isPayment?e("el-form-item",{attrs:{label:"详细"}},[e("div",{staticStyle:{"line-height":"25px"}},[e("label",{staticClass:"left"},[t._v("预计消费：")]),e("span",{staticClass:"warning-color"},[t._v(t._s(t.toTrx(t.orderMoney))+" TRX")])]),t.isLogin?e("div",{staticStyle:{"line-height":"25px"}},[e("label",[t._v("账号余额：")]),e("span",{staticClass:"warning-color"},[t._v(t._s(t.toTrx(t.userInfo.balance))+" TRX")])]):t._e()]):t._e(),t.isPayment?t._e():e("end-time",{attrs:{"end-time":t.form.endTime,"show-help":!0},on:{"update:endTime":function(e){return t.$set(t.form,"endTime",e)},"update:end-time":function(e){return t.$set(t.form,"endTime",e)}}}),e("el-form-item",[t.isNumsModel&&t.isPayment?e("div",{staticStyle:{display:"flex"}},[t.tronLikCanPay?e("el-button",{staticClass:"button-style",staticStyle:{width:"inherit",flex:"1"},attrs:{round:"",size:"medium",type:"primary"},on:{click:function(e){return t.onSubmit("tronLink")}}},[t._v("TronLink支付")]):t._e(),e("el-button",{staticClass:"button-style",staticStyle:{width:"inherit",flex:"1"},attrs:{round:"",size:"medium",type:"warning"},on:{click:function(e){return t.onSubmit("scanCode")}}},[t._v("地址支付")]),t.isLogin?e("el-button",{staticClass:"button-style",staticStyle:{width:"inherit",flex:"1"},attrs:{round:"",size:"medium",type:"success"},on:{click:function(e){return t.onSubmit("userPay")}}},[t._v("账号支付")]):t._e()],1):e("el-button",{staticClass:"button-style",attrs:{round:"",size:"medium",type:"primary"},on:{click:function(e){return t.onSubmit("other")}}},[t._v("创建智能委托")])],1)],1),e("account-pay-tips",{ref:"accountPayTips",attrs:{"is-phone":t.isPhone}}),e("show-collect-money",{ref:"scanMoney",attrs:{"scan-result-id":t.scanPopup.scanResultId,"copy-content":t.copyContent,"end-time":t.scanPopup.endTime,"start-time":t.scanPopup.startTime,"collect-address":t.scanPopup.collectAddress,"collect-money":t.scanPopup.collectMoney,"is-phone":t.isPhone,"current-time":t.scanPopup.currentTime,"auto-reset":!1}})],1)],1)},r=[],l=function(){var t=this,e=t._self._c;return e("el-form-item",{staticStyle:{position:"relative"},attrs:{label:"智能委托停止时间"}},[t.showHelp?e("el-tooltip",{attrs:{content:"智能委托停止时间"}},[e("i",{staticClass:"el-icon-question ciyaowenzi-color",staticStyle:{position:"absolute",left:"115px",top:"-19px",width:"4px","font-size":"15px"}})]):t._e(),e("el-date-picker",{staticStyle:{width:"100% !important"},attrs:{clearable:"",type:"date",placeholder:"请选择智能委托停止时间","append-to-body":t.appendToBody},on:{change:t.change},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)},c=[],u={name:"endTime",props:{endTime:{required:!0},showHelp:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!0}},data:function(){return{val:""}},watch:{val:function(t){this.$emit("update:endTime",t)},endTime:function(t){this.val=t}},created(){this.val=this.endTime},methods:{change:function(t){this.$emit("change",t)}}},d=u,m=i("2877"),p=Object(m["a"])(d,l,c,!1,null,"08c06af6",null),h=p.exports,f=function(){var t=this,e=t._self._c;return e("el-form-item",{staticClass:"form-item",attrs:{label:t.showName}},[t.showHelp?e("el-tooltip",{attrs:{content:"到将"+t.showName+"自动停止，至少5笔起"}},[e("i",{staticClass:"el-icon-question ciyaowenzi-color",staticStyle:{position:"absolute",left:"88px",top:"-19px",width:"4px","font-size":"15px"}})]):t._e(),e("el-input",{attrs:{clearable:"",placeholder:"请填写"+t.showName+"，不能小于5",type:"number"},on:{change:t.change},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}),t._t("default")],2)},y=[],g={name:"maxDelegateNums",props:{maxDelegateNums:{required:!0},showHelp:{type:Boolean,default:!1},showName:{type:String,default:"委托笔数上限"}},data:function(){return{val:""}},watch:{val:function(t){this.$emit("update:maxDelegateNums",t)},maxDelegateNums:function(t){this.val=t}},created(){this.val=this.maxDelegateNums},methods:{change:function(t){this.$emit("change",t)}}},b=g,v=Object(m["a"])(b,f,y,!1,null,"18675665",null),x=v.exports,_=i("1c4f"),T=i("06a1"),w=i("55e6"),S=i("206e"),C=i("b775"),N=i("cf45"),D=i("dc8b"),P=i("cf24"),k={name:"pay",mixins:[o["a"],w["a"]],components:{endTime:h,maxDelegateNums:x,RentTime:_["a"],AccountPayTips:D["a"],ShowCollectMoney:P["a"]},data:function(){return{toTrx:N["q"],autoType_0:0,autoType_1:1,form:{autoType:0,resType:"ENERGY",receiveAddress:"",autoLimitNums:"",everyAutoNums:"",rentTime:1,maxDelegateNums:"",endTime:"",payment:1,chromeIndex:""},rentTimeConfig:{1:"1小时",24:"1天",72:"3天"},price:3,scanPopup:{collectAddress:"TGVeFsJhQJHVgQCRjFZi7NJQL7mqXTDdj5",collectMoney:3.5,startTime:0,endTime:0,currentTime:0,scanResultId:""},submitLoading:!1,submitLoadingConfig:{headers:{[C["d"]]:["#intelligentHosing-pay"]}}}},computed:{isNumsModel:function(){return this.form.autoType===this.autoType_0},endTimeShowName:function(){return this.isPayment?"购买委托笔数":"委托笔数上限"},isPayment:function(){return 1===this.form.payment},orderMoney:function(){return this.isPayment?Object(N["p"])(this.form.maxDelegateNums*this.price):0}},watch:{submitLoading:function(){this.submitLoading?C["a"].start(this.submitLoadingConfig):C["a"].close(this.submitLoadingConfig)}},created(){this.form.chromeIndex=this.chromeIndex,this.createIntervalTask(this.getPayConfig,this.$parent.$options.name)},methods:{getPayConfig:async function(){try{const t=await Object(T["c"])({});t&&(this.price=t.price)}catch(t){}},createAutoOrder:async function(t="",e={}){if(this.isNumsModel&&this.isPayment)this.form.endTime=1735660799;else if(!this.isLogin)return void this.notLoginTips();if(!this.formValidate())return;let i=Object.assign({},this.form);return this.isNumsModel&&(i=Object.assign(i,{autoLimitNums:65e3,everyAutoNums:65e3,rentTime:24})),i=Object.assign(i,e),"tronLinkPay"===t?await Object(T["h"])(i):"scanPay"===t?await Object(T["e"])(i):await Object(T["a"])(i)},formValidate:function(){try{if(!this.form.receiveAddress)throw"接收地址不能为空";if(!this.isNumsModel){if(!this.form.autoLimitNums)throw"触发条件不能为空";if(this.form.autoLimitNums<32e3||this.form.autoLimitNums>1e6)throw"触发条件不能小于3.2万，不能大于100万";if(this.form.everyAutoNums&&this.form.everyAutoNums<this.form.autoLimitNums)throw"每次委托的数量不能小于触发条件数量"}if(this.form.maxDelegateNums<5)throw"委托笔数上限不能小于5";if(!this.form.endTime)throw"智能委托停止时间不能为空";return!0}catch(t){return this.$message.warning(t),!1}},typeChange:function(){this.isNumsModel?this.form.payment=1:this.form.payment=0},paymentChange:function(){0===this.form.payment&&(this.form.endTime="")},onSubmit:async function(t){this.submitLoading=!0;try{if("other"===t)await this.createAutoOrder();else if("tronLink"===t)await this.checkBalanceCanPay(this.orderMoney)&&(await S["a"].getTronWeb(),await this.createTronLinkTask());else if("userPay"===t){if(!this.checkUserBalance(this.orderMoney))return void(this.submitLoading=!1);this.$refs.accountPayTips.setVisible(!0);try{await this.createAutoOrder()}catch(e){}setTimeout(()=>{this.$refs.accountPayTips.setVisible(!1)},1e3)}else await this.createPay();this.submitLoading=!1}catch(e){this.submitLoading=!1,"tronLink"===t&&S["a"].hasTronLink()&&this.needScan().then(async()=>{this.submitLoading=!0,await this.createPay(),this.submitLoading=!1})}},createTronLinkTask:async function(){let t;try{t=await S["a"].sendTrx(this.tronLinkCollectAddress,this.orderMoney);const e=await this.checkResult(t);if(e){const e=await this.createAutoOrder("tronLinkPay",{transactionId:t,fromAddress:await S["a"].getTronLinkNowAddress(),orderMoney:this.orderMoney});e.code!==C["j"]&&this.showSubmitFailureTips(t,e.msg)}}catch(e){t?this.showSubmitFailureTips(t,e):this.$message.error(e)}},createPay:async function(){try{const t=await this.createAutoOrder("scanPay",{orderMoney:this.orderMoney}),e=t.data;t.code===C["j"]&&(this.scanPopup.scanResultId=e.scanResultId,this.scanPopup.collectAddress=e.collectAddress,this.scanPopup.collectMoney=e.collectMoney,this.scanPopup.startTime=e.startTime,this.scanPopup.endTime=e.endTime,this.scanPopup.currentTime=Object(N["n"])(),this.$refs.scanMoney.open())}catch(t){this.$message.error(t)}}}},L=k,O=(i("9dbb"),Object(m["a"])(L,n,r,!1,null,"be64d25a",null)),z=O.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{flex:"2 2 800px",display:"flex"}},[e("el-card",{staticClass:"pay-card phone-card margin-15",staticStyle:{flex:"1"},style:{},attrs:{id:"intelligentHosing-table","body-style":t.card_body_style}},[e("h3",[t._v("搜索")]),e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",gap:"20px","flex-wrap":"wrap","margin-bottom":"15px"}},[e("el-radio-group",{staticStyle:{flex:"1 1 400px",display:"flex"},model:{value:t.search.state,callback:function(e){t.$set(t.search,"state",e)},expression:"search.state"}},[e("el-radio",{staticStyle:{flex:"1"},attrs:{label:1,border:""}},[t._v("委托中")]),e("el-radio",{staticStyle:{flex:"1"},attrs:{label:0,border:""}},[t._v("停止委托")])],1),e("el-input",{staticStyle:{flex:"1 1 400px"},attrs:{clearable:"",placeholder:"请填写接收地址"},model:{value:t.search.receiveAddress,callback:function(e){t.$set(t.search,"receiveAddress",e)},expression:"search.receiveAddress"}}),e("el-button",{staticStyle:{flex:"1 1 400px"},attrs:{round:"",size:"medium",type:"warning"},on:{click:t.resetSearch}},[t._v("重置")])],1),e("custom-table",{attrs:{"badge-key":t.badgeKey,"is-phone":t.isPhone,"table-data":t.tableData,"table-config":t.tableConfig,"show-page":t.showPage,"page-change":t.pageChange,"phone-item-style":t.phoneItemStyle,"phone-item-card-body":t.phoneItemCardBody,pages:t.pages,page:t.page},scopedSlots:t._u([{key:"state",fn:function({vSlot:i}){return[e("div",[e("el-tag",{staticClass:"font-wight-600",attrs:{effect:"dark",size:t.tagSize,type:1===i.state?"primary":"danger"}},[t._v(" "+t._s(1===i.state?"委托中":"停止委托")+" ")])],1)]}},{key:"autoType",fn:function({vSlot:i}){return[e("el-tag",{staticClass:"font-wight-600",attrs:{size:t.tagSize,type:"primary"}},[t._v(" "+t._s(t.autoTypeConfig[i.autoType])+" ")])]}},{key:"totalSun",fn:function({vSlot:i}){return[e("el-tag",{staticClass:"font-wight-600",attrs:{size:t.tagSize,type:"warning"}},[t._v(" "+t._s(i.totalSun)+" ")])]}},{key:"receiveAddress",fn:function({vSlot:i}){return[e("div",{staticClass:"primary-color",staticStyle:{"font-weight":"600"}},[e("i",{staticClass:"el-icon-document-copy",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.copyContent(i.receiveAddress)}}}),e("span",{staticStyle:{"margin-left":"7px"}},[t._v(t._s(t.showReceiveAddress(i.receiveAddress)))])])]}},{key:"info",fn:function({vSlot:e}){return[t._v(" "+t._s(e.info)+" ")]}},{key:"createTime",fn:function({vSlot:e}){return[t._v(" "+t._s(e.createTime)+" ")]}},{key:"more",fn:function({vSlot:i}){return[e("div",{staticStyle:{"font-size":"13px",display:"flex",gap:"15px","flex-wrap":"wrap"},style:{"margin-top":t.isPhone?"10px !important":"auto"}},[e("div",{staticStyle:{flex:"1"}},[e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("委托触发条件:")]),e("span",[t._v(t._s(i.everyAutoNums))])]),e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("每笔委托数量:")]),e("span",[t._v(t._s(i.everyAutoNums))])]),e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("累计委托资源:")]),e("span",[t._v(t._s(t.formatBigNumber(i.totalResNums)))])]),0===i.autoType?e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("滞留计费时间:")]),e("span",[t._v(t._s(i.detentionChargeTime))])]):t._e(),0===i.autoType?e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("是否购买笔数:")]),e("span",[t._v(t._s(i.oneTimePayment>0?"是的":"不是"))])]):t._e()]),e("div",{staticStyle:{flex:"1"}},[e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("剩余委托笔数:")]),e("span",[t._v(t._s(i.oneTimePayment>0?i.maxDelegateNums-i.totalDelegateNums-Number("string"===typeof i.detentionChargeTime?i.detentionChargeTime.replace("天",""):i.detentionChargeTime):i.maxDelegateNums-i.totalDelegateNums))])]),e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("累计委托笔数:")]),e("span",[t._v(t._s(i.totalDelegateNums))])]),e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("委托最大笔数:")]),e("span",[t._v(t._s(i.maxDelegateNums))])]),e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("委托终止时间:")]),e("span",[t._v(t._s(i.endTime))])]),0===i.autoType&&i.oneTimePayment>0?e("div",[e("label",{staticStyle:{"margin-right":"5px"}},[t._v("购买笔数追加:")]),e("span",[t._v(t._s(i.append))]),t._v("笔")]):t._e()])])]}},{key:"other",fn:function({vSlot:i}){return[e("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 1fr","grid-gap":"5px"},style:{"margin-top":t.isPhone?"10px":"auto","grid-row-gap":t.isPhone?"14px":"10px"}},[e("el-button",{staticClass:"el-button-custom margin-0",attrs:{round:"",plain:"",size:"mini"},on:{click:function(e){return t.copyContent(i.orderId)}}},[t._v("复制订单ID")]),e("el-button",{staticClass:"el-button-custom margin-0",attrs:{round:"",plain:"",size:"mini"},on:{click:function(e){return t.showDelegateDetail(i)}}},[t._v("委托详情")]),0===i.freeze&&0===i.oneTimePayment?e("el-button",{staticClass:"el-button-custom margin-0",attrs:{round:"",plain:"",size:"mini"},on:{click:function(e){return t.editOrder(i)}}},[t._v("编辑")]):t._e(),0===i.freeze?e("el-button",{staticClass:"el-button-custom margin-0",attrs:{round:"",plain:"",size:"mini"},on:{click:function(e){return t.taskOver(i.orderId)}}},[t._v("删除")]):t._e()],1)]}}])})],1),e("edit-dialog",{ref:"editDialog",attrs:{"is-login":t.isLogin,"order-data":t.editDialog.orderData,"is-phone":t.isPhone}}),e("delegate-detail",{ref:"delegateDetail",attrs:{"auto-type-config":t.autoTypeConfig,"auto-type":t.delegateDetail.autoType,"order-id":t.delegateDetail.orderId,"is-phone":t.isPhone,"copy-content":t.copyContent}})],1)},j=[],A=i("878f"),I=function(){var t=this,e=t._self._c;return e("custom-dialog",{attrs:{title:t.title+t.orderId,visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:t.close}},[e("div",{staticStyle:{display:"flex",flex:"1"},attrs:{id:"intelligentHosing-edit"}},[e("el-form",{ref:"resetPasswordForm",staticStyle:{margin:"0 20px",width:"100%"},attrs:{model:t.form,"label-position":"top"}},[e("el-form-item",{attrs:{label:"委托开关"}},[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭"},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}})],1),e("max-delegate-nums",{attrs:{"max-delegate-nums":t.form.maxDelegateNums},on:{"update:maxDelegateNums":function(e){return t.$set(t.form,"maxDelegateNums",e)},"update:max-delegate-nums":function(e){return t.$set(t.form,"maxDelegateNums",e)}}},[e("div",{staticStyle:{"font-size":"13px"}},[t._v("委托笔数上限不能小于"),e("span",{staticClass:"error-color",staticStyle:{"font-size":"18px",margin:"0 5px"}},[t._v(t._s(t.orderData.totalDelegateNums))])]),e("div",{staticClass:"input-right-tips simple-tips",staticStyle:{top:"-30px"}},[t._v(" 累计委托笔数"),e("span",{staticClass:"error-color",staticStyle:{"font-size":"18px",margin:"0 5px"}},[t._v(t._s(t.orderData.totalDelegateNums))]),t._v("剩余笔数"),e("span",{staticStyle:{margin:"0 5px","font-size":"15px"}},[t._v(t._s(t.showResidueNums)+" ")]),e("el-button",{staticClass:"error-color",staticStyle:{"margin-left":"5px"},attrs:{type:"text"},on:{click:t.openPormptResidueNums}},[t._v("修改")])],1)]),e("end-time",{attrs:{"append-to-body":!1,"end-time":t.form.endTime},on:{"update:endTime":function(e){return t.$set(t.form,"endTime",e)},"update:end-time":function(e){return t.$set(t.form,"endTime",e)}}}),e("el-form-item",[e("el-button",{staticClass:"button-style",attrs:{round:"",size:"medium",type:"primary",loading:t.loading},on:{click:t.submitForm}},[t._v("保存")])],1)],1)],1)])},q=[],R=i("82e0"),M=i("8e01"),B={name:"edit",mixins:[R["a"],w["a"]],components:{CustomDialog:M["a"],endTime:h,maxDelegateNums:x},props:{isPhone:{type:Boolean,required:!0},orderData:{type:Object,required:!0},isLogin:{type:Boolean,required:!0}},data:function(){return{title:"编辑-",visible:!1,form:{orderId:"",state:"",maxDelegateNums:"",endTime:""},loading:!1,residueNums:0}},computed:{orderId:function(){return this.orderData.orderId},showResidueNums:function(){return this.form.maxDelegateNums?this.form.maxDelegateNums-this.orderData.totalDelegateNums:""}},watch:{visible:function(t){t&&this.setFormData()}},created(){this.setFormData()},methods:{close:function(){this.visible=!1},formValidate:function(){try{if(this.form.maxDelegateNums<5)throw"委托笔数上限不能小于5";if(!this.form.endTime)throw"智能委托停止时间不能为空";return!0}catch(t){return this.$message.warning(t),!1}},submitForm:async function(){if(this.isLogin){if(this.formValidate())try{this.loading=!0,await Object(T["b"])(this.form)&&(this.visible=!1),this.loading=!1}catch(t){this.loading=!1}}else await this.notLoginTips()},open:function(){this.visible=!0},setFormData:function(){this.form.orderId=this.orderData.orderId,this.form.state=this.orderData.state,this.form.maxDelegateNums=this.orderData.maxDelegateNums,this.form.endTime=this.orderData.endTime},openPormptResidueNums:function(){this.residueNums=this.form.maxDelegateNums-this.orderData.totalDelegateNums;const t="委托笔数上限不能小于 "+this.orderData.totalDelegateNums;this.$prompt("info","修改剩余笔数","请输入剩余笔数","确定","取消",{inputValidator:e=>e>=this.orderData.totalDelegateNums||t,inputPlaceholder:t,inputType:"Number",inputValue:this.residueNums}).then(({value:t})=>{t&&(this.form.maxDelegateNums=Number(this.orderData.totalDelegateNums)+Number(t))}).catch(()=>{})}}},F=B,V=(i("682e"),Object(m["a"])(F,I,q,!1,null,"6140eb80",null)),H=V.exports,U=i("9215"),E=function(){var t=this,e=t._self._c;return e("custom-popup",{attrs:{id:"",title:t.title,visible:t.visible,"is-phone":t.isPhone,"no-card":!0},on:{"update:visible":function(e){t.visible=e},close:t.close,opened:t.getData}},[e("div",{staticClass:"popup-default",staticStyle:{width:"100%"}},[e("detail-table",{ref:"detailTable",attrs:{"copy-content":t.copyContent,"auto-type-config":t.autoTypeConfig,"auto-type":t.autoType,"order-id":t.orderId,"is-phone":t.isPhone,loading:t.loading},on:{"update:loading":function(e){t.loading=e}}})],1)])},J=[],Q=i("67ee"),X=i("2b35"),G={name:"delegateDetail",mixins:[R["a"]],components:{CustomPopup:Q["a"],DetailTable:X["a"]},props:{isPhone:{type:Boolean,required:!0},orderId:{type:[Number,String],required:!0},autoType:{type:Number,required:!0},autoTypeConfig:{type:Object,required:!0},copyContent:{required:!0}},computed:{title:function(){return this.orderId+""}},data:function(){return{loading:!1,loadingConfig:{headers:{[C["d"]]:["",".el-dialog__body"]}}}},watch:{loading:function(){this.loadingConfig.headers[C["d"]][0]='div[aria-label="'+this.title+'"]',this.loading?C["a"].start(this.loadingConfig):C["a"].close(this.loadingConfig)}},methods:{close:function(){this.$refs.detailTable.clearTableData()},getData:async function(){this.$refs.detailTable.getData()}}},K=G,W=Object(m["a"])(K,E,J,!1,null,"9cebd456",null),Y=W.exports,Z={name:"tableData",mixins:[o["a"],U["a"],w["a"]],components:{CustomTable:A["a"],editDialog:H,DelegateDetail:Y},props:{},data:function(){return{formatBigNumber:N["d"],badgeKey:"",showPage:!0,pageRequest:!1,page:1,pages:1,tableData:[],autoTypeConfig:{0:"笔数",1:"智能"},tableConfig:[{name:"state",label:"状态"},{name:"autoType",label:"模式"},{name:"receiveAddress",label:"监控地址",width:"170px"},{name:"totalSun",label:"总消费"},{name:"createTime",label:"创建时间",width:"100px"},{name:"more",label:"更多",width:"350px",phoneLeftBlock:!0},{name:"info",label:"详细",width:"120px"},{name:"other",label:"操作",width:"200px",phoneLeftBlock:!0}],editDialog:{orderData:{}},delegateDetail:{orderId:"",autoType:0},search:{orderId:"",state:"",receiveAddress:"",chromeIndex:""}}},created(){this.search.chromeIndex=this.chromeIndex,this.createIntervalTask(this.getData,this.$parent.$options.name)},methods:{pageChange:async function(t){this.page=t,await this.getData(t,!0)},getData:async function(t,e){if(e||!this.pageRequest)try{const t=await Object(T["f"])({page:this.page,search:this.search});t.data&&(this.tableData=t.data,this.pages=t.pages)}catch(i){}},editOrder:async function(t){this.isLogin?(this.editDialog.orderData=t,this.$refs.editDialog.open()):await this.notLoginTips()},showDelegateDetail:async function(t){this.isLogin?(this.delegateDetail.orderId=t.orderId,this.delegateDetail.autoType=t.autoType,this.$refs.delegateDetail.open()):await this.notLoginTips()},taskOver:async function(t){this.isLogin?await Object(T["g"])({orderId:t}):await this.notLoginTips()},resetSearch:function(){this.search.orderId="",this.search.state="",this.search.receiveAddress=""}}},tt=Z,et=Object(m["a"])(tt,$,j,!1,null,"59218bde",null),it=et.exports,at={name:"intelligentHosing",mixins:[o["a"]],components:{Pay:z,TableData:it},data:function(){return{}},created(){this.setAppMainLoading(!1)}},st=at,ot=Object(m["a"])(st,a,s,!1,null,"7a2d835c",null);e["default"]=ot.exports},db4e:function(t,e,i){"use strict";i("6426")},dc8b:function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("popup",{staticStyle:{height:"120px","text-align":"center"},style:{width:t.isPhone?"80vw":"350px"},attrs:{"get-container":"body","close-on-click-overlay":!1,round:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%",width:"100%"}},[e("van-loading",{attrs:{color:t.variables["primary-color"],size:40}}),e("div",{staticClass:"primary-color",staticStyle:{"margin-left":"30px","font-weight":"800","font-size":"30px"}},[t._v("账号支付中.....")])],1)])},s=[],o=(i("ac1e"),i("543e")),n=(i("8a58"),i("e41f")),r=i("7326"),l=i.n(r),c={name:"index",components:{Popup:n["a"],VanLoading:o["a"]},props:{isPhone:{type:Boolean,required:!0}},data:function(){return{variables:l.a,visible:!1}},methods:{setVisible:function(t){this.visible=t}}},u=c,d=i("2877"),m=Object(d["a"])(u,a,s,!1,null,"f7428668",null);e["a"]=m.exports},f3c7:function(t,e,i){"use strict";i("7331")}}]);