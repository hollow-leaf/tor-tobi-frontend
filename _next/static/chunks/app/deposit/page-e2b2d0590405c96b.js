(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2449],{67094:function(e,t,n){Promise.resolve().then(n.bind(n,82100))},82100:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var a=n(74940),s=n(15337),i=n(18868),r=n(98965),l=n(38728),o=n(49421),u=n(22034),c=n(60829),d=n(42376),p=n(52720),y=n(87758),m=n(66895),x=n(67900),f=n(47754),b=n(19490),h=n(84960),w=n(74609),v=n(86161),j=n(7976),g=n(42483),k=n(2442),T=n(89360),N=n(62234),C=n(26974),_=n(37346),S=n(51504),A=n(25574),M=n(35141),P=n(59287),W=n(18820),E=n(43505),B=n(39510);function F(e){return new Promise(function(t){return setTimeout(t,e)})}var O=[{key:E.BU.Goerli,value:E.w5.Wagmi},{key:E.BU.Sepolia,value:E.w5.Wagmi},{key:E.BU.Mumbai,value:E.w5.Wagmi},{key:E.BU.StarkNet,value:E.w5.ArgentX}],U=[{key:E.bv.ETH,value:E.bv.ETH},{key:E.bv.WETH,value:E.bv.WETH}],Z=n(27007),D=n(83550),z=n(94514),I={Goerli:"0xb798BAf1A5423728c538eFE4645Cb04C0ed0C920","Polygon Mumbai":"0xad0d07c4179ae81C3Bb6b9a809f19c998E1B2977",Sepolia:"0xA11d34827F43f0009F360dBE119aE2c246042252",StarkNet:""},H=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"depositor",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"withdrawer",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"deposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],R=n(33217);function X(e){var t,n,s=(0,g._)({},(0,k._)(e)),i=(0,r._)((0,m.useState)(!1),2),u=i[0],c=i[1],d=(0,r._)((0,m.useState)(""),2),p=d[0],y=d[1],x=(0,r._)((0,m.useState)(!1),2),f=x[0],h=x[1],v=(0,r._)((0,m.useState)(!1),2);v[0],v[1];var j=m.useRef(null),O=void 0!==(t=(0,w.LN)().chain)?I[t.name]:"",U="",X=function(){s.onClose(!1)},G=(n=(0,a._)(function(){var e,t,n;return(0,l.__generator)(this,function(a){switch(a.label){case 0:c(!0),a.label=1;case 1:switch(a.trys.push([1,12,,13]),s.selectedWalletNetwork.value){case E.w5.Wagmi:return[3,2];case E.w5.ArgentX:return[3,7]}return[3,9];case 2:if("WETH"!==s.contractParameter.token)return[3,6];return[4,(0,z.$q)({address:O,abi:H,functionName:"deposit",args:[(0,R.parseEther)(s.contractParameter.amount)]})];case 3:return e=a.sent().request,[4,(0,z.n9)(e)];case 4:return t=a.sent().hash,[4,(0,z.Mn)({hash:t})];case 5:a.sent(),U=t,y(t),a.label=6;case 6:return[3,11];case 7:return console.log("depositStarkNet",null===(n=s.chain)||void 0===n?void 0:n.name),[4,F(3e3)];case 8:return a.sent(),[3,11];case 9:return[4,F(3e3)];case 10:return a.sent(),console.log("depositDefault"),[3,11];case 11:return c(!1),""!==U&&h(!0),[3,13];case 12:return console.log("error: ",a.sent()),c(!1),[3,13];case 13:return[2]}})}),function(){return n.apply(this,arguments)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(T.a,{motionPreset:"slideInBottom",leastDestructiveRef:j,onClose:X,isOpen:s.isOpen,isCentered:!0,lockFocusAcrossFrames:!0,children:[(0,o.jsx)(N.Z,{bg:"blackAlpha.300",backdropFilter:"blur(1px)"}),(0,o.jsxs)(T._,{className:"max-w-1/2 h-1/3 rounded-lg",children:[u&&(0,o.jsx)(B.Z,{}),(0,o.jsxs)(C.x,{className:"flex items-center justify-between bg-cat-peach300 text-cat-surface rounded-t-lg",children:[(0,o.jsx)("div",{children:" Confirm Deposit "}),(0,o.jsx)("button",{onClick:X,children:(0,o.jsx)(W.Z,{})})]}),(0,o.jsxs)(_.f,{className:"flex items-center justify-between",fontWeight:"bold",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{fontSize:16},children:[" Source: ",s.contractParameter.sourceChain," "]}),(0,o.jsxs)("div",{style:{fontSize:16},children:[" Token: ",s.contractParameter.token," "]})]}),(0,o.jsx)(Z.m,{className:"pl-3 pr-3",boxSize:"16"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{fontSize:16},children:[" Target: ",s.contractParameter.targetChain," "]}),(0,o.jsxs)("div",{style:{fontSize:16},children:[" Amount: ",s.contractParameter.amount," "]})]})]}),(0,o.jsx)(S.m,{children:(0,o.jsx)(b.C,{placeholder:"KAMUI",loadingText:"KAMUI",className:"flex-grow",process:G,walletConfig:s.walletConfig,loading:u,textColor:"#f67c41"})})]})]}),f?(0,o.jsxs)(T.a,{motionPreset:"slideInBottom",leastDestructiveRef:j,onClose:function(){X(),h(!1)},isCentered:!0,isOpen:s.isOpen,lockFocusAcrossFrames:!0,children:[(0,o.jsx)(N.Z,{bg:"blackAlpha.300",backdropFilter:"blur(1px)"}),(0,o.jsxs)(T._,{bgImage:"/frontend/tobi-sharingan.png",bgRepeat:"no-repeat",bgPosition:"center",bgSize:"cover",className:"max-w-1/2 h-1/3 rounded-lg",children:[(0,o.jsx)(C.x,{className:"flex items-center justify-center text-cat-white rounded-t-lg",children:(0,o.jsx)("div",{children:" Kamui Successfully "})}),(0,o.jsxs)(_.f,{className:"flex items-center justify-between",fontWeight:"bold",children:[(0,o.jsx)(A.I,{className:"bg-cat-white hover:opacity-0",size:"md",value:p,isReadOnly:!0}),(0,o.jsx)("div",{className:"pl-2",children:(0,o.jsx)(M.u,{hasArrow:!0,label:"Copy!",bg:"red.600",children:(0,o.jsx)(P.h,{className:"bg-cat-white","aria-label":"Copy text",onClick:function(){navigator.clipboard.writeText(p)},icon:(0,o.jsx)(D.T,{})})})})]}),(0,o.jsx)(S.m,{className:"flex justify-center"})]})]}):""]})}function G(){var e=(0,r._)((0,m.useState)({key:"",value:E.w5.Wagmi}),2),t=e[0],n=e[1],g=(0,r._)((0,m.useState)({key:"",value:""}),2),k=g[0],T=g[1],N=(0,r._)((0,m.useState)({address:"",wallet:"",network:""}),2),C=N[0],_=N[1],S=(0,r._)((0,m.useState)({sourceChain:"",targetChain:"",token:"",amount:""}),2),A=S[0],M=S[1],P=(0,r._)((0,m.useState)(!1),2),W=P[0],B=P[1],F=(0,w.mA)(),Z=F.address,D=F.isConnected,z=(0,h.useAccount)(),I=z.address,H=z.isConnected,R=(0,w.LN)().chain,G=(0,w.g0)().switchNetwork;function K(){return(K=(0,a._)(function(){return(0,l.__generator)(this,function(e){return B(!0),[2]})})).apply(this,arguments)}function q(){return(q=(0,a._)(function(e){return(0,l.__generator)(this,function(t){return console.log("data: ",e),[2]})})).apply(this,arguments)}return(0,m.useEffect)(function(){if(D&&t.value==E.w5.Wagmi){switch(t.key){case E.BU.Goerli:null==G||G(5);break;case E.BU.Sepolia:null==G||G(11155111);break;case E.BU.Mumbai:null==G||G(80001)}_(function(){return{network:t.key,wallet:t.value,address:null!=Z?Z:""}})}else H&&t.value==E.w5.ArgentX?_(function(){return{network:t.key,wallet:t.value,address:null!=I?I:""}}):t.value==E.w5.Wagmi?_(function(){return{network:t.key,wallet:t.value,address:null!=Z?Z:""}}):_(function(){return{network:t.key,wallet:t.value,address:null!=I?I:""}})},[t.key,Z,I]),(0,m.useEffect)(function(){M((0,i._)((0,s._)({},A),{sourceChain:t.key,token:k.key}))},[t.key,k.key]),(0,o.jsxs)("div",{className:"max-w-70 pt-12 mb-12 mx-4 lg:mx-0",children:[(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(c.Z,{children:"Deposit"}),(0,o.jsx)(d.Z,{className:"bg-cat-mantle p-5 rounded",children:(0,o.jsxs)(p.e,{className:"space-y-2",children:[(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-2",children:[(0,o.jsx)(y.x,{className:"text-cat-text",children:"Chain"}),""!==t.key?t.value==E.w5.ArgentX?(0,o.jsx)(v.Y,{}):(0,o.jsx)(j.O,{}):(0,o.jsx)(v.T,{disabled:!0,children:"Please Select Network"})]}),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-2",children:[(0,o.jsx)(f.j,{items:O,placeholder:"From",setState:{setWalletNetwork:n}}),(0,o.jsx)(x.Z,{className:"w-10",color:"#cdd6f4"}),(0,o.jsx)(f.j,{items:O,placeholder:"To",setState:{setContractParameter:M},disabled:""==t.key})]}),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-4 pt-5",children:[(0,o.jsxs)("div",{className:"flex-col basis-1/4",children:[(0,o.jsx)(y.x,{className:"text-cat-text pb-2",children:"Token"}),(0,o.jsx)(f.j,{items:U,placeholder:"Token",className:"bg-cat-mantle text-cat-text",setState:{setToken:T},disabled:""==t.key})]}),(0,o.jsxs)("div",{className:"flex-col basis-3/4",children:[(0,o.jsx)(y.x,{className:"text-cat-text pb-2",children:"Amount"}),(0,o.jsx)(f.Z,{setState:{setContractParameter:M},disabled:""==t.key})]})]}),(0,o.jsx)(b.C,{placeholder:"Deposit",loadingText:"Deposit",loading:!1,className:"pt-10",process:function(){return K.apply(this,arguments)},walletConfig:C,textColor:"#cdd6f4",disabled:""==C.address||""==C.network||""==A.sourceChain||""==A.targetChain||""==A.token||""==A.amount})]})})]}),(0,o.jsx)(X,{isOpen:W,onClose:B,onConfirm:function(e){return q.apply(this,arguments)},contractParameter:A,walletConfig:C,selectedWalletNetwork:t,chain:R})]})}}},function(e){e.O(0,[4332,9420,7828,5133,5972,2575,5806,9193,5590,7757,7987,1744],function(){return e(e.s=67094)}),_N_E=e.O()}]);