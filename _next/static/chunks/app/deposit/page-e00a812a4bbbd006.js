(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2449],{96643:function(e,t,s){Promise.resolve().then(s.bind(s,54664))},54664:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var n=s(74940),a=s(15337),r=s(18868),l=s(98965),i=s(38728),o=s(15392),c=s(41576),u=s(44957),d=s(42376),x=s(52720),f=s(87758),m=s(83546),h=s(68482);let k=(0,h.Z)("ArrowRight",[["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]]);var p=s(56791),j=s(4824),y=s(84960),w=s(74608),v=s(44772),g=s(50588),_=s(42483),b=s(2442),N=s(50121),C=s(61669),S=s(8677);function A(e){let{leastDestructiveRef:t,...s}=e;return(0,o.jsx)(C.u_,{...s,initialFocusRef:t})}var W=(0,S.G)((e,t)=>(0,o.jsx)(N.h,{ref:t,role:"alertdialog",...e})),T=s(62234),B=s(57212),E=s(77691),M=(0,S.G)((e,t)=>{let{className:s,...n}=e,{headerId:a,setHeaderMounted:r}=(0,C.vR)();(0,m.useEffect)(()=>(r(!0),()=>r(!1)),[r]);let l=(0,B.cx)("chakra-modal__header",s),i=(0,C.I_)(),c={flex:0,...i.header};return(0,o.jsx)(E.m.header,{ref:t,className:l,id:a,...n,__css:c})});M.displayName="ModalHeader";var P=(0,S.G)((e,t)=>{let{className:s,...n}=e,{bodyId:a,setBodyMounted:r}=(0,C.vR)();(0,m.useEffect)(()=>(r(!0),()=>r(!1)),[r]);let l=(0,B.cx)("chakra-modal__body",s),i=(0,C.I_)();return(0,o.jsx)(E.m.div,{ref:t,className:l,id:a,...n,__css:i.body})});P.displayName="ModalBody";var I=(0,S.G)((e,t)=>{let{className:s,...n}=e,a=(0,B.cx)("chakra-modal__footer",s),r=(0,C.I_)(),l={display:"flex",alignItems:"center",justifyContent:"flex-end",...r.footer};return(0,o.jsx)(E.m.footer,{ref:t,...n,__css:l,className:a})});I.displayName="ModalFooter";let U=(0,h.Z)("X",[["line",{x1:"18",x2:"6",y1:"6",y2:"18",key:"15jfxm"}],["line",{x1:"6",x2:"18",y1:"6",y2:"18",key:"d1lma3"}]]);var F=s(58166),G=s(90558);function Z(e){return new Promise(function(t){return setTimeout(t,e)})}var H=[{key:F.BU.Goerli,value:F.w5.Wagmi},{key:F.BU.Sepolia,value:F.w5.Wagmi},{key:F.BU.Mumbai,value:F.w5.Wagmi},{key:F.BU.StarkNet,value:F.w5.ArgentX}],z=[{key:F.bv.ETH,value:F.bv.ETH},{key:F.bv.WETH,value:F.bv.WETH}],D=s(40057),O=function(e){let{viewBox:t="0 0 24 24",d:s,displayName:n,defaultProps:a={}}=e,r=m.Children.toArray(e.path),l=(0,S.G)((e,n)=>(0,o.jsx)(D.J,{ref:n,viewBox:t,...a,...e,children:r.length?r:(0,o.jsx)("path",{fill:"currentColor",d:s})}));return l.displayName=n,l}({d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",displayName:"ArrowForwardIcon"});function R(e){var t,s=(0,_._)({},(0,b._)(e)),a=(0,l._)((0,m.useState)(!1),2),r=a[0],c=a[1],u=m.useRef(null),d=function(){s.onClose(!1)},x=(t=(0,n._)(function(){var e,t;return(0,i.__generator)(this,function(n){switch(n.label){case 0:switch(c(!0),s.selectedWalletNetwork.value){case F.w5.Wagmi:return[3,1];case F.w5.ArgentX:return[3,3]}return[3,5];case 1:return console.log("depositEVM",null===(e=s.chain)||void 0===e?void 0:e.name),[4,Z(3e3)];case 2:case 4:return n.sent(),[3,7];case 3:return console.log("depositStarkNet",null===(t=s.chain)||void 0===t?void 0:t.name),[4,Z(3e3)];case 5:return[4,Z(3e3)];case 6:return n.sent(),console.log("depositDefault"),[3,7];case 7:return c(!1),[2]}})}),function(){return t.apply(this,arguments)});return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(A,{motionPreset:"slideInBottom",leastDestructiveRef:u,onClose:d,isOpen:s.isOpen,isCentered:!0,lockFocusAcrossFrames:!0,children:[(0,o.jsx)(T.Z,{bg:"blackAlpha.300",backdropFilter:"blur(1px)"}),(0,o.jsxs)(W,{className:"max-w-1/2 h-1/3 rounded-lg",children:[r&&(0,o.jsx)(G.Z,{}),(0,o.jsxs)(M,{className:"flex items-center justify-between bg-cat-peach300 text-cat-surface rounded-t-lg",children:[(0,o.jsx)("div",{children:" Confirm Deposit "}),(0,o.jsx)("button",{onClick:d,children:(0,o.jsx)(U,{})})]}),(0,o.jsxs)(P,{className:"flex items-center justify-between",fontWeight:"bold",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{fontSize:16},children:[" Source: ",s.contractParameter.sourceChain," "]}),(0,o.jsxs)("div",{style:{fontSize:16},children:[" Token: ",s.contractParameter.token," "]})]}),(0,o.jsx)(O,{className:"pl-3 pr-3",boxSize:"16"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{fontSize:16},children:[" Target: ",s.contractParameter.targetChain," "]}),(0,o.jsxs)("div",{style:{fontSize:16},children:[" Amount: ",s.contractParameter.amount," "]})]})]}),(0,o.jsx)(I,{children:(0,o.jsx)(j.C,{placeholder:"KAMUI",loadingText:"KAMUI",className:"flex-grow",process:x,walletConfig:s.walletConfig,loading:r,textColor:"#f67c41"})})]})]})})}function L(){var e=(0,l._)((0,m.useState)({key:"",value:F.w5.Wagmi}),2),t=e[0],s=e[1],h=(0,l._)((0,m.useState)({key:"",value:""}),2),_=h[0],b=h[1],N=(0,l._)((0,m.useState)({address:"",wallet:"",network:""}),2),C=N[0],S=N[1],A=(0,l._)((0,m.useState)({sourceChain:"",targetChain:"",token:"",amount:""}),2),W=A[0],T=A[1],B=(0,l._)((0,m.useState)(!1),2),E=B[0],M=B[1],P=(0,w.mA)(),I=P.address,U=P.isConnected,G=(0,y.useAccount)(),Z=G.address,D=G.isConnected,O=(0,w.LN)().chain,L=(0,w.g0)().switchNetwork;function X(){return(X=(0,n._)(function(){return(0,i.__generator)(this,function(e){return M(!0),[2]})})).apply(this,arguments)}function J(){return(J=(0,n._)(function(e){return(0,i.__generator)(this,function(t){return console.log("data: ",e),[2]})})).apply(this,arguments)}return(0,m.useEffect)(function(){if(U&&t.value==F.w5.Wagmi){switch(t.key){case F.BU.Goerli:null==L||L(5);break;case F.BU.Sepolia:null==L||L(11155111);break;case F.BU.Mumbai:null==L||L(80001)}S(function(){return{network:t.key,wallet:t.value,address:null!=I?I:""}})}else D&&t.value==F.w5.ArgentX?S(function(){return{network:t.key,wallet:t.value,address:null!=Z?Z:""}}):t.value==F.w5.Wagmi?S(function(){return{network:t.key,wallet:t.value,address:null!=I?I:""}}):S(function(){return{network:t.key,wallet:t.value,address:null!=Z?Z:""}})},[t.key,I,Z]),(0,m.useEffect)(function(){T((0,r._)((0,a._)({},W),{sourceChain:t.key,token:_.key}))},[t.key,_.key]),(0,o.jsxs)("div",{className:"max-w-70 pt-12 mb-12 mx-4 lg:mx-0",children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(u.Z,{children:"Deposit"}),(0,o.jsx)(d.Z,{className:"bg-cat-mantle p-5 rounded",children:(0,o.jsxs)(x.e,{className:"space-y-2",children:[(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-2",children:[(0,o.jsx)(f.x,{className:"text-cat-text",children:"Chain"}),""!==t.key?t.value==F.w5.ArgentX?(0,o.jsx)(v.Y,{}):(0,o.jsx)(g.O,{}):(0,o.jsx)(v.T,{disabled:!0,children:"Please Select Network"})]}),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-2",children:[(0,o.jsx)(p.j,{items:H,placeholder:"From",setState:{setWalletNetwork:s}}),(0,o.jsx)(k,{className:"w-10",color:"#cdd6f4"}),(0,o.jsx)(p.j,{items:H,placeholder:"To",setState:{setContractParameter:T},disabled:""==t.key})]}),(0,o.jsx)("div",{className:"flex flex-row items-center justify-between pt-5",children:(0,o.jsx)(f.x,{className:"text-cat-text",children:"Amount"})}),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-4",children:[(0,o.jsx)(p.j,{items:z,placeholder:"Token",className:"grow bg-cat-mantle text-cat-text basis-1/4",setState:{setToken:b},disabled:""==t.key}),(0,o.jsx)(p.Z,{setState:{setContractParameter:T},disabled:""==t.key})]}),(0,o.jsx)(j.C,{placeholder:"Deposit",loadingText:"Deposit",loading:!1,className:"pt-10",process:function(){return X.apply(this,arguments)},walletConfig:C,textColor:"#cdd6f4",disabled:""==C.address||""==C.network||""==W.sourceChain||""==W.targetChain||""==W.token||""==W.amount})]})})]}),(0,o.jsx)(R,{isOpen:E,onClose:M,onConfirm:function(e){return J.apply(this,arguments)},contractParameter:W,walletConfig:C,selectedWalletNetwork:t,chain:O})]})}},40057:function(e,t,s){"use strict";s.d(t,{J:function(){return c}});var n=s(8677),a=s(40278),r=s(77691),l=s(57212),i=s(15392),o={path:(0,i.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,i.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,i.jsx)("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,i.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},c=(0,n.G)((e,t)=>{let{as:s,viewBox:n,color:c="currentColor",focusable:u=!1,children:d,className:x,__css:f,...m}=e,h=(0,l.cx)("chakra-icon",x),k=(0,a.mq)("Icon",e),p={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:c,...f,...k},j={ref:t,focusable:u,className:h,__css:p},y=null!=n?n:o.viewBox;if(s&&"string"!=typeof s)return(0,i.jsx)(r.m.svg,{as:s,...j,...m});let w=null!=d?d:o.path;return(0,i.jsx)(r.m.svg,{verticalAlign:"middle",viewBox:y,...j,...m,children:w})});c.displayName="Icon"}},function(e){e.O(0,[9245,9648,8085,7441,7242,8262,5972,5806,581,8339,7720,1744],function(){return e(e.s=96643)}),_N_E=e.O()}]);