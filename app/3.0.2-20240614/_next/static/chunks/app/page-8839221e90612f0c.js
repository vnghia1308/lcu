(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2150:function(e,n,t){Promise.resolve().then(t.bind(t,2359))},2359:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return $}});var i=t(7437),a=t(2126),r=t(2265),s=t(6384),o=t(8569),c=t(2770),l=t(5057),h=t(6836),u=t(9545),d=t(4722),g=t(9531),p=t(1914),m=t(5025),y=t(5630),w=t(9020),x=t(64),f=t(7310),j=t(7733),I=t(5381);function k(){let[e,n]=(0,r.useState)(null),[t,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{n(window.require("electron").shell);let{ipcRenderer:e}=window.require("electron");a(e)},[]);let s=n=>e&&e.openExternal(n);return(0,i.jsx)("div",{children:(0,i.jsxs)(j.Z,{children:[(0,i.jsxs)(I.Z,{span:24,style:{marginBottom:15},children:["Phần mềm được viết & ph\xe1t triển bởi ",(0,i.jsx)("a",{onClick:()=>s("https://www.facebook.com/nghiadev"),children:(0,i.jsx)("strong",{children:"Vy Nghĩa"})})," dựa tr\xean ",(0,i.jsx)("strong",{children:"ElectronJS"})," (kết hợp từ ",(0,i.jsx)("strong",{children:"NodeJS"})," v\xe0 ",(0,i.jsx)("strong",{children:"VanillaJS"}),"). Nguồn cảm hứng v\xe0 t\xe0i liệu tham khảo đến từ dự \xe1n ",(0,i.jsx)("a",{onClick:()=>s("https://github.com/Pupix/rift-explorer"),children:(0,i.jsx)("strong",{children:"Rift Explorer"})})," của ",(0,i.jsx)("strong",{children:"Pupix"}),"."]}),(0,i.jsxs)(I.Z,{span:24,style:{marginBottom:50},children:["Tất cả chức năng của phần mềm đ\xe3 được tham khảo từ ch\xednh s\xe1ch của ",(0,i.jsx)("strong",{children:"Riot Games"}),". ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," ảnh hưởng, ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," can thiệp đến dữ liệu nhạy cảm của tr\xf2 chơi. Phần mềm n\xe0y sẽ lu\xf4n lu\xf4n l\xe0 ",(0,i.jsx)("strong",{children:"m\xe3 nguồn mở"})," để chứng minh sự minh bạch."]}),(0,i.jsx)(I.Z,{span:24,style:{marginBottom:50,lineHeight:1.5},children:(0,i.jsxs)("span",{children:["For ",(0,i.jsx)("strong",{children:"Developers"}),". You can debug app features by ",(0,i.jsx)("a",{onClick:e=>t&&t.send("request-mainprocess-action",{type:"open_devtools"}),style:{fontWeight:700,cursor:"pointer"},children:"Open Devtools"}),". ",(0,i.jsx)("br",{})," ",(0,i.jsxs)("i",{children:["All features are always available for reference purposes. Please do not use them for purposes that go against ",(0,i.jsx)("strong",{children:"Riot Games"}),"' policies. Author disclaims all liability for any actions you do."]})]})}),(0,i.jsx)(I.Z,{span:24,children:(0,i.jsxs)("span",{children:["\xa9 2022 - 2024 Vy Nghia",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"League Extensions"}),"'s not bannable by ",(0,i.jsx)("strong",{children:"Riot Vanguard"}),"."]})})]})})}var Z=t(7045),L=t(5754),b=t(2653),P=t(471),v=t(1518),C=t(6682),T=t(6300).Buffer,A={getLeagueAPIUrl:(e,n)=>"https://127.0.0.1:".concat(e).concat(n),getLeagueAPIPassword:e=>T.from("riot:".concat(e)).toString("base64"),GetLCUInfo:()=>new Promise(async e=>{let{exec:n}=window.require("child_process");try{n('powershell -Command "(Get-WmiObject Win32_Process -Filter \\"Name = \''.concat("LeagueClientUx.exe",'\'\\").CommandLine"'),(n,t,i)=>{let a;if(n||i)return e(!1);let r=t.trim(),s=/--app-port=(\d+)|--remoting-auth-token=([-_a-zA-Z0-9]+)/g,o={};for(;null!==(a=s.exec(r));)a[1]&&(o.port=parseInt(a[1])),a[2]&&(o.password=a[2]);if("port"in o&&"password"in o)return window.LcuInfo=o,e(!0)})}catch(n){return console.log(n),e(!1)}})};let{TextArea:S}=Z.default;function N(){let[e]=L.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,c]=(0,r.useState)(""),l=async()=>{t(!0);let e=s.split("\n").map(e=>e.trim()).filter(e=>""!=e);try{for(let n of(await a.Z.get(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/friends"),{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data)e.includes(n.gameName)||(await a.Z.delete(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/friends/"+n.puuid),{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),await sleep(1e3))}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh xử l\xfd y\xeau cầu")}t(!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(b.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng n\xe0y sẽ hủy kết bạn với tất cả người trong danh s\xe1ch bạn b\xe8, ph\xf9 hợp để dọn dẹp danh s\xe1ch bạn b\xe8. Đương nhi\xean l\xe0 bạn c\xf3 thể loại trừ những người bạn kh\xf4ng muốn hủy kết bạn."]})}),(0,i.jsxs)(L.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsxs)(L.Z.Item,{label:"Danh s\xe1ch loại trừ",children:[(0,i.jsx)(S,{rows:4,placeholder:"VD: Bonsx",value:s,onChange:e=>c(e.target.value)}),(0,i.jsx)("small",{children:"Những người chơi trong danh s\xe1ch n\xe0y sẽ kh\xf4ng bị hủy kết bạn. Mỗi d\xf2ng thể hiện cho một người chơi."})]}),(0,i.jsx)(L.Z.Item,{children:(0,i.jsx)(P.Z,{children:(0,i.jsx)(v.Z,{title:"Cảnh b\xe1o",description:"Bạn chắc chắn muốn thực hiện điều n\xe0y? C\xe1c t\xe1c vụ đ\xe3 thực hiện sẽ kh\xf4ng thể ho\xe0n t\xe1c!",onConfirm:l,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(C.ZP,{name:"excute",type:"primary",htmlType:"button",loading:n,children:"Thực hiện"})})})})]})]})}function E(){let[e,n]=(0,r.useState)([!1,!1,!1]),t=(e,t)=>{n(n=>{let i=[...n];return i[e]=t,i})},s=async()=>{t(1,!0);try{await a.Z.post(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-challenges/v1/update-player-preferences"),{bannerAccent:"2"},{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu được thực hiện")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(1,!1)},c=async()=>{t(0,!0);try{await a.Z.post(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-challenges/v1/update-player-preferences"),{challengeIds:[]},{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu được thực hiện")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(0,!1)},l=async()=>{t(2,!0);try{await a.Z.put(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-regalia/v2/current-summoner/regalia"),{preferredCrestType:"prestige",preferredBannerType:"lastSeasonHighestRank",selectedPrestigeCrest:33},{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu được thực hiện")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(2,!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(b.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Nơi bao gồm c\xe1c chức năng bạn c\xf3 thể t\xf9y chỉnh ở phần hồ sơ của bạn."]})}),(0,i.jsx)(b.Z,{title:"Chức năng",style:{marginTop:10},children:(0,i.jsxs)(P.Z,{size:"small",children:[(0,i.jsx)(C.ZP,{type:"primary",htmlType:"button",loading:e[0],onClick:c,children:"X\xf3a kỷ vật thử th\xe1ch"}),(0,i.jsx)(v.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi kh\xf4ng c\xf3 khung xếp hạng m\xf9a cũ",onConfirm:s,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(C.ZP,{type:"primary",htmlType:"button",loading:e[1],children:"X\xf3a cờ nền hồ sơ"})}),(0,i.jsx)(v.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi cấp độ 500 trở l\xean",onConfirm:l,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(C.ZP,{type:"primary",htmlType:"button",loading:e[2],children:"X\xf3a khung cấp độ"})})]})})]})}var z=t(165);let{TextArea:B}=Z.default;function U(){let[e]=L.Z.useForm(),[n,t]=(0,r.useState)("none"),[s,c]=(0,r.useState)(!1),[l,h]=(0,r.useState)(!1),[u,d]=(0,r.useState)("");async function g(){if(c(!0),"LcuInfo"in window)try{var e={};"none"!=n&&(e.lol={rankedLeagueTier:n,rankedLeagueDivision:"I"}),""!=u&&(e.statusMessage=u),await a.Z.put(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/me"),e,{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Trạng th\xe1i đ\xe3 được lưu")}catch(e){o.ZP.error("Kh\xf4ng thể kết nối tới tr\xf2 chơi. Vui l\xf2ng khởi động (lại) Li\xean Minh Huyền thoại")}c(!1)}let p=async()=>{if("LcuInfo"in window){h(!0);try{await a.Z.put(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/me"),{availability:"offline",lol:{gameStatus:"outOfGame"}},{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")}catch(e){o.ZP.error("Kh\xf4ng thể kết nối tới tr\xf2 chơi. Vui l\xf2ng khởi động (lại) Li\xean Minh Huyền thoại")}h(!1)}};return(0,i.jsxs)("div",{children:[(0,i.jsx)(b.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng d\xf9ng để chỉnh trạng th\xe1i t\xe0i khoản bao gồm nội dung ở phần trực tuyến v\xe0 khung xếp hạng... cho mục đ\xedch sống ảo."]})}),(0,i.jsxs)(L.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsx)(L.Z.Item,{label:"Xếp hạng",children:(0,i.jsx)(z.Z,{onChange:e=>t(e),defaultValue:"none",options:[{value:"none",label:"Kh\xf4ng thay đổi"},{value:"CHALLENGER",label:"Th\xe1ch Đấu"},{value:"GRANDMASTER",label:"Đại Cao Thủ"},{value:"MASTER",label:"Cao Thủ"},{value:"DIAMOND",label:"Kim Cương"},{value:"PLATINUM",label:"Bạch Kim"},{value:"GOLD",label:"V\xe0ng"},{value:"SILVER",label:"Bạc"},{value:"IRON",label:"Sắt"}]})}),(0,i.jsxs)(L.Z.Item,{label:"Nội dung ở phần trực tuyến",children:[(0,i.jsx)(B,{rows:4,placeholder:"VD: Hello I am Vy Nghia",value:u,onChange:e=>d(e.target.value)}),(0,i.jsxs)("small",{children:["Độ d\xe0i c\xf3 thể gần như v\xf4 hạn, nội dung phải tu\xe2n thủ theo quy tắc ứng xử của ",(0,i.jsx)("strong",{children:"Riot Games"}),", những nội dung mang hướng kh\xf4ng l\xe0nh mạnh c\xf3 thể sẽ kh\xf4ng được hiển thị."]})]}),(0,i.jsx)(L.Z.Item,{children:(0,i.jsx)(C.ZP,{type:"primary",htmlType:"button",loading:s,onClick:g,children:"Thực hiện"})})]}),(0,i.jsx)(b.Z,{title:"Chức năng kh\xe1c",style:{marginTop:10},children:(0,i.jsx)(P.Z,{size:"small",children:(0,i.jsx)(C.ZP,{type:"primary",htmlType:"button",loading:l,onClick:p,children:"Tắt mở/trạng th\xe1i ngoại tuyến"})})})]})}var q=t(6814),G=t(6311);function M(){let[e]=L.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,c]=(0,r.useState)(""),[l,h]=(0,r.useState)("T\xecm kiếm"),[u,d]=(0,r.useState)([]),[g,p]=(0,r.useState)(0),[m,y]=(0,r.useState)([]),w=async()=>{if(t(!0),"T\xecm kiếm"==l){let e=m.find(e=>e.name.toLowerCase().replace(/\'/g,"")==s.toLowerCase().replace(/\'/g,""));if(!e)return o.ZP.error("Tướng kh\xf4ng tồn tại"),t(!1);p(e.id),fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/vi_vn/v1/champions/".concat(e.id,".json?v=")+new Date().getTime()).then(e=>e.json()).then(e=>{if(Array.isArray(e.skins)){let n=[];e.skins.forEach(e=>{if("questSkinInfo"in e){let t=e.questSkinInfo.tiers;return t.rarity=e.rarity,n.push(...t)}n.push(e)}),d(n)}t(!1)}),o.ZP.success("Danh s\xe1ch trang phục đ\xe3 được tải")}else await f(s),t(!1)};(0,r.useEffect)(()=>{(async()=>{try{let e=await fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json"),n=await e.json();n.splice(0,1),y(n.map(e=>({id:e.id,name:e.name})))}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh lấy danh s\xe1ch tướng")}})()},[]);let x=(e,n)=>{let t={kNoRarity:null,kEpic:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/4/40/Epic_Skin.png"}),kLegendary:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/f/f1/Legendary_Skin.png"}),kMythic:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/4/4d/Hextech_Skin.png"}),kUltimate:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Ultimate_Skin.png"}),kTranscendent:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Transcendent_Skin.png"})};return(0,i.jsxs)("span",{children:[t[n]," ",e]})},f=async e=>{if("LcuInfo"in window)try{await a.Z.post(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-summoner/v1/current-summoner/summoner-profile"),{key:"backgroundSkinId",value:parseInt(e)},{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}},j=e=>{isNaN(e)?h("T\xecm kiếm"):h("Thay đổi"),c(e)};return(0,i.jsxs)("div",{children:[(0,i.jsxs)(L.Z,{form:e,layout:"vertical",onFinish:w,autoComplete:"off",validateMessages:{required:"${label} kh\xf4ng được trống"},children:[(0,i.jsx)(L.Z.Item,{name:"champion_name",label:"T\xean tướng/Skin ID",rules:[{required:!0},{type:"text",warningOnly:!0}],children:(0,i.jsx)(Z.default,{placeholder:"VD: Miss Fortune",value:s,onChange:e=>j(e.target.value)})}),(0,i.jsx)(L.Z.Item,{children:(0,i.jsx)(P.Z,{children:(0,i.jsx)(C.ZP,{type:"primary",htmlType:"submit",loading:n,children:l})})})]}),(0,i.jsx)("div",{style:{height:"calc(100vh - 350px)",overflow:"auto"},children:(0,i.jsx)(q.Z,{itemLayout:"horizontal",dataSource:u,renderItem:(e,n)=>(0,i.jsxs)(q.Z.Item,{children:[(0,i.jsx)(q.Z.Item.Meta,{avatar:(0,i.jsx)(G.C,{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/".concat(e.tilePath.replace("/lol-game-data/assets/","").toLowerCase())}),title:x(e.name,e.rarity),description:null==e.description?"Kh\xf4ng c\xf3 giới thiệu":e.description}),(0,i.jsx)("div",{children:(0,i.jsx)(C.ZP,{type:"primary",htmlType:"button",size:"middle",onClick:()=>f(e.id),children:"Chọn"})})]})})})]})}var R=t(3623),_=t(7394),H=t(4110);let{TextArea:V}=Z.default,{Text:D}=R.default;function F(){let[e]=L.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,c]=(0,r.useState)([]),[l,h]=(0,r.useState)([]),[u,d]=(0,r.useState)(0),[g,p]=(0,r.useState)(null),[m,y]=(0,r.useState)(null);(0,r.useEffect)(()=>{w(),x()},[]);let w=async()=>{try{let e=[...(await a.Z.get("https://vnghia1308.github.io/lcu/giftItems.json")).data];h(e)}catch(e){}},x=async()=>{t(!0);try{let e=(await a.Z.get(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/friends"),{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data;c(e),console.log(e)}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh tải danh s\xe1ch bạn b\xe8 của bạn")}t(!1)},f=e=>{let{label:n,value:t}=e,a=l.find(e=>e.itemId==t);return a?(0,i.jsxs)(_.Z,{align:"center",children:[(0,i.jsxs)("span",{style:{marginLeft:5},children:[n," - ",a.rp.toLocaleString()]}),(0,i.jsx)("img",{style:{marginLeft:5},width:14,src:"https://static.wikia.nocookie.net/leagueoflegends/images/0/00/RP_icon.png"})]}):(0,i.jsx)(i.Fragment,{children:n})},j=async()=>{if("LcuInfo"in window)try{return(await a.Z.get(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-summoner/v1/current-summoner "),{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data}catch(e){}return null},I=async()=>{if("LcuInfo"in window)try{return(await a.Z.get(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-rso-auth/v1/authorization/access-token"),{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data.token}catch(e){}return null},k=async()=>{t(!0);let e=await j(),n=await I();if(null==e||null==n)return t(!1),o.ZP.error("X\xe1c thực với m\xe1y chủ LMHT thất bại");if(null==g||null==m)return t(!1),o.ZP.error("Bạn phải chọn \xedt nhất một người bạn hoặc một m\xf3n qu\xe0");try{await a.Z.post("https://vn2-red.lol.sgp.pvp.net/storefront/v3/gift?language=vi_VN",{customMessage:"",receiverSummonerId:m,giftItemId:1010,accountId:e.accountId,items:[{inventoryType:g.inventoryType,itemId:g.itemId,ipCost:null,rpCost:g.rp,quantity:1}]},{headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}),o.ZP.success("Tặng qu\xe0 th\xe0nh c\xf4ng")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra trong qu\xe1 tr\xecnh tặng qu\xe0")}t(!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(b.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng n\xe0y cho ph\xe9p tặng bất k\xec m\xf3n qu\xe0 n\xe0o trong cửa h\xe0ng cho bạn b\xe8 kể cả khi ch\xfang kh\xf4ng c\xf3 sẵn trong chức năng tặng."]})}),(0,i.jsxs)(L.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsx)(L.Z.Item,{label:"Chọn bạn b\xe8",children:(0,i.jsx)(z.Z,{showSearch:!0,fieldNames:{label:"gameName",value:"summonerId"},placeholder:"Chọn một người bạn",optionFilterProp:"gameName",options:s,labelRender:e=>{let{label:n,value:t}=e,a=s.find(e=>e.summonerId==t);return(0,i.jsxs)(_.Z,{align:"center",children:[(0,i.jsx)(G.C,{size:20,src:"https://ddragon-webp.lolmath.net/latest/img/profileicon/".concat(a.icon,".webp")}),(0,i.jsx)("span",{style:{marginLeft:5},children:n})]})},onChange:e=>{y(e)}})}),(0,i.jsx)(L.Z.Item,{label:"Vật phẩm gửi tặng",children:(0,i.jsx)(z.Z,{showSearch:!0,optionFilterProp:"itemName",placeholder:"Chọn một m\xf3n qu\xe0",options:l,labelRender:f,optionRender:f,onChange:e=>{let n=l.find(n=>n.itemId==e);d(n.rp),p(n)},fieldNames:{label:"itemName",value:"itemId"}})}),(0,i.jsx)(H.Z,{}),(0,i.jsxs)(_.Z,{align:"center",children:[(0,i.jsx)(D,{children:(0,i.jsx)("strong",{children:"Tổng thanh to\xe1n: "})}),(0,i.jsx)("img",{style:{marginLeft:5},width:15,src:"https://static.wikia.nocookie.net/leagueoflegends/images/0/00/RP_icon.png"}),(0,i.jsxs)("span",{style:{marginLeft:5},children:[u.toLocaleString()," RP"]})]}),(0,i.jsx)(L.Z.Item,{children:(0,i.jsx)(P.Z,{children:(0,i.jsx)(v.Z,{title:"Cảnh b\xe1o",description:"Bạn chắc chắn muốn thực hiện điều n\xe0y? Qu\xe0 tặng kh\xf4ng thể thu hồi!",okText:"Tiếp tục",cancelText:"Hủy",onConfirm:k,children:(0,i.jsx)(C.ZP,{style:{marginTop:20},name:"excute",type:"primary",htmlType:"button",loading:n,children:"Thực hiện"})})})})]})]})}var O=t(9200);function K(){let[e,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{n("true"==localStorage.getItem("isAutoAcceptMatch"))},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(b.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," C\xe1c chức năng hỗ trợ trận đấu của bạn."]})}),(0,i.jsx)(b.Z,{title:"Chức năng",style:{marginTop:10},children:(0,i.jsx)(P.Z,{size:"small",children:(0,i.jsx)(O.Z,{onChange:e=>{localStorage.setItem("isAutoAcceptMatch",e.target.checked),n(e.target.checked)},checked:e,children:"Tự động chấp nhận trận đấu"})})})]})}function J(){let[e,n]=(0,r.useState)(!1),[t,s]=(0,r.useState)([]);(0,r.useEffect)(()=>{c()},[]);let c=async()=>{n(!0);try{let e=(await a.Z.get(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-rewards/v1/grants"),{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data;s(e.filter(e=>e.rewardGroup.rewards.length>0))}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh tải danh s\xe1ch phần thưởng của bạn")}n(!1)},l=async(e,n)=>{try{await a.Z.post(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-rewards/v1/grants/".concat(e,"/select")),n,{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Giao dịch kết th\xfac trong th\xe0nh c\xf4ng. Vật phẩn sẽ được gửi v\xe0o kho đồ của bạn!"),setTimeout(()=>{c()})}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh tải danh s\xe1ch phần thưởng của bạn")}};return(0,i.jsx)("div",{children:(0,i.jsx)("div",{style:{height:"calc(100vh - 250px)",overflow:"auto"},children:(0,i.jsx)(q.Z,{itemLayout:"horizontal",dataSource:t,renderItem:(e,n)=>{let t=e.rewardGroup.rewards[0];return(0,i.jsxs)(q.Z.Item,{children:[(0,i.jsx)(q.Z.Item.Meta,{title:t.localizations.title,avatar:(0,i.jsx)(G.C,{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/".concat(t.media.iconUrl.replace("/lol-game-data/assets/","").toLowerCase())}),description:null==t.description?"Kh\xf4ng c\xf3 giới thiệu":t.description}),(0,i.jsx)("div",{children:(0,i.jsx)(C.ZP,{type:"primary",htmlType:"button",size:"middle",disabled:"FULFILLED"==e.info.status,onClick:()=>l(e.info.id,{rewardGroupId:e.info.rewardGroupId,selections:[t.id]}),children:"FULFILLED"==e.info.status?"Đ\xe3 nhận":"Nhận"})})]})}})})})}let{Header:Y,Content:X,Footer:W,Sider:Q}=s.default;function $(){let[e]=(0,r.useState)(["3.0.2-20230614_1"]),[n,t]=(0,r.useState)(!1),[j,I]=(0,r.useState)((0,i.jsx)(M,{})),[Z,L]=(0,r.useState)("Đổi nền trang phục"),[b,P]=(0,r.useState)({type:"warning",message:"Vui l\xf2ng khởi động Li\xean Minh Huyền Thoại để sử dụng chức năng n\xe0y!"}),v=[{key:"1",icon:r.createElement(g.Z),label:"Đổi nền trang phục",onClick:()=>{I((0,i.jsx)(M,{})),L("Đổi nền trang phục")}},{key:"2",icon:r.createElement(p.Z),label:"Hủy kết bạn",onClick:()=>{I((0,i.jsx)(N,{})),L("Hủy kết bạn")}},{key:"3",icon:r.createElement(m.Z),label:"C\xf4ng cụ hồ sơ",onClick:()=>{I((0,i.jsx)(E,{})),L("C\xf4ng cụ hồ sơ")}},{key:"4",icon:r.createElement(m.Z),label:"C\xf4ng cụ trận đấu",onClick:()=>{I((0,i.jsx)(K,{})),L("C\xf4ng cụ trận đấu")}},{key:"5",icon:r.createElement(y.Z),label:"Trạng th\xe1i t\xe0i khoản",onClick:()=>{I((0,i.jsx)(U,{})),L("Trạng th\xe1i t\xe0i khoản")}},{key:"6",icon:r.createElement(w.Z),label:"Cửa h\xe0ng qu\xe0 tặng",onClick:()=>{I((0,i.jsx)(F,{})),L("Cửa h\xe0ng qu\xe0 tặng")}},{key:"7",icon:r.createElement(x.Z),label:"Phần thưởng ẩn",onClick:()=>{I((0,i.jsx)(J,{})),L("Phần thưởng ẩn")}},{key:"8",icon:r.createElement(f.Z),label:"Giới thiệu",onClick:()=>{I((0,i.jsx)(k,{})),L("Giới thiệu")}}];return(0,r.useEffect)(()=>{let n=new Proxy(new URLSearchParams(window.location.search),{get:(e,n)=>e.get(n)}).v;if(!e.includes(n))return P({type:"error",message:(0,i.jsx)("span",{children:"Phi\xean bản ứng dụng d\xe3 hết hạn"})}),t(!0);localStorage.setItem("isAutoAcceptMatch",!1);let r=[{url:"/lol-gameflow/v1/gameflow-phase",event:async e=>{if("ReadyCheck"==e){let e=localStorage.getItem("isAutoAcceptMatch");if("LcuInfo"in window&&"true"==e)try{await a.Z.post(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-matchmaking/v1/ready-check/accept"),{},{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})}catch(e){}}}}],s=window.require("ws"),c=setInterval(async()=>{if("LcuInfo"in window)try{let e=(await a.Z.get(A.getLeagueAPIUrl(window.LcuInfo.port,"/lol-summoner/v1/current-summoner"),{headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data;e.summonerId;let n=e.gameName;if(e.unnamed&&(n="Kh\xf4ng x\xe1c định"),void 0===n||"undefined"==n||""==n){if(!e.unnamed)throw Error("undefined SummonerName");return}P({type:"success",message:(0,i.jsxs)("span",{children:["Đ\xe3 nhận diện được ",(0,i.jsx)("strong",{children:"Li\xean Minh Huyền Thoại"}),", người chơi hiện tại l\xe0 ",(0,i.jsx)("strong",{children:n})]})}),clearInterval(c)}catch(e){}else A.GetLCUInfo().then(e=>{if(e){let e=new s("wss://riot:".concat(window.LcuInfo.password,"@127.0.0.1:").concat(window.LcuInfo.port),{rejectUnauthorized:!1,headers:{Authorization:"Basic "+A.getLeagueAPIPassword(window.LcuInfo.password)}});e.on("error",()=>{o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra khi kết nối tới m\xe1y chủ của LMHT")}),e.on("open",()=>{e.send(JSON.stringify([5,"OnJsonApiEvent"]))}),e.on("message",e=>{try{let[n]=JSON.parse(e).slice(2),t=r.find(e=>e.url==n.uri);t&&t.event(n.data)}catch(e){}})}})},1e3)},[]),(0,i.jsx)(c.ZP,{theme:{algorithm:l.Z.darkAlgorithm},children:(0,i.jsx)(s.default,{style:{height:"100vh"},children:(0,i.jsxs)(X,{style:{padding:"10px 30px"},children:[(0,i.jsx)(h.Z,{style:{margin:"16px 0"},items:[{title:"League Extensions"},{title:Z}]}),(0,i.jsxs)(s.default,{style:{padding:"24px 0",background:"#141414"},children:[(0,i.jsx)(Q,{width:200,children:(0,i.jsx)(u.Z,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%"},items:v})}),(0,i.jsxs)(X,{style:{padding:"0 24px",minHeight:700},children:[(0,i.jsx)(d.Z,{message:b.message,type:b.type,showIcon:!0}),n&&"Giới thiệu"!=Z?(0,i.jsxs)("div",{style:{marginTop:10},children:["Phi\xean bản đang khởi chạy kh\xf4ng ph\xf9 hợp, khi bạn nh\xecn thấy nội dung n\xe0y c\xf3 nghĩa l\xe0 c\xf3 ứng dụng n\xe0y c\xf3 một phi\xean bản kh\xe1c ",(0,i.jsx)("strong",{children:"cần phải cập nhật"}),"  (v\xec l\xfd do bảo mật, thay đổi c\xf4ng nghệ, etc.). Bạn c\xf3 thể t\xecm một phi\xean bản mới ",(0,i.jsx)("a",{onClick:e=>window.require("electron").shell.openExternal("https://github.com/vnghia1308/lcu/releases"),style:{fontWeight:700,cursor:"pointer"},children:"tại đ\xe2y"}),"!"]}):(0,i.jsx)("div",{className:"features-container",children:j})]})]})]})})})}}},function(e){e.O(0,[225,619,971,23,744],function(){return e(e.s=2150)}),_N_E=e.O()}]);