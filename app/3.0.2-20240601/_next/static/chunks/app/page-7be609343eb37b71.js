(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2150:function(e,n,t){Promise.resolve().then(t.bind(t,2359))},2359:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var i=t(7437),a=t(2126),r=t(2265),s=t(6384),o=t(8569),c=t(2770),l=t(5057),h=t(6836),d=t(9545),u=t(4722),g=t(9531),p=t(1914),m=t(5025),w=t(5630),y=t(9020),x=t(64),f=t(7310),j=t(471);function I(){let[e,n]=(0,r.useState)(null);(0,r.useEffect)(()=>{n(window.require("electron").shell)},[]);let t=n=>e&&e.openExternal(n);return(0,i.jsx)("div",{children:(0,i.jsxs)(j.Z,{wrap:!0,children:[(0,i.jsxs)("p",{children:["Phần mềm được viết & ph\xe1t triển bởi ",(0,i.jsx)("a",{onClick:()=>t("https://www.facebook.com/nghiadev"),children:(0,i.jsx)("strong",{children:"Vy Nghĩa"})})," dựa tr\xean ",(0,i.jsx)("strong",{children:"ElectronJS"})," (kết hợp từ ",(0,i.jsx)("strong",{children:"NodeJS"})," v\xe0 ",(0,i.jsx)("strong",{children:"VanillaJS"}),"). Nguồn cảm hứng v\xe0 t\xe0i liệu tham khảo đến từ dự \xe1n ",(0,i.jsx)("a",{onClick:()=>t("https://github.com/Pupix/rift-explorer"),children:(0,i.jsx)("strong",{children:"Rift Explorer"})})," của ",(0,i.jsx)("strong",{children:"Pupix"}),"."]}),(0,i.jsxs)("p",{style:{marginTop:10},children:["Tất cả chức năng của phần mềm đ\xe3 được tham khảo từ ch\xednh s\xe1ch của ",(0,i.jsx)("strong",{children:"Riot Games"}),". ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," ảnh hưởng, ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," can thiệp đến dữ liệu nhạy cảm của tr\xf2 chơi. Phần mềm n\xe0y sẽ lu\xf4n lu\xf4n l\xe0 ",(0,i.jsx)("strong",{children:"m\xe3 nguồn mở"})," để chứng minh sự minh bạch."]}),(0,i.jsxs)("p",{style:{marginTop:20},children:[(0,i.jsx)("hr",{style:{marginBottom:10}}),(0,i.jsxs)("span",{children:["\xa9 2022 - 2024 Vy Nghia.",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"League Extensions"}),"'s not bannable by ",(0,i.jsx)("strong",{children:"Riot Vanguard"}),"."]})]})]})})}var Z=t(7045),L=t(5754),k=t(2653),P=t(1518),b=t(6682),v=t(6300).Buffer,C={getLeagueAPIUrl:(e,n)=>"https://127.0.0.1:".concat(e).concat(n),getLeagueAPIPassword:e=>v.from("riot:".concat(e)).toString("base64"),GetLCUInfo(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n="LeagueClientUx.exe",{execSync:t}=window.require("child_process");if(e){try{let e;let i=t("wmic process where caption='".concat(n,"' get commandline"),{encoding:"utf-8"}).trim(),a=/--app-port=(\d+)|--remoting-auth-token=([-_a-zA-Z0-9]+)/g,r={};for(;null!==(e=a.exec(i));)e[1]&&(r.port=parseInt(e[1])),e[2]&&(r.password=e[2]);if("port"in r&&"password"in r)return window.LcuInfo=r,!0}catch(e){}return}try{let e;let i=t('powershell -Command "(Get-WmiObject Win32_Process -Filter \\"Name = \''.concat(n,'\'\\").CommandLine"'),{encoding:"utf-8"}).trim(),a=/--app-port=(\d+)|--remoting-auth-token=([-_a-zA-Z0-9]+)/g,r={};for(;null!==(e=a.exec(i));)e[1]&&(r.port=parseInt(e[1])),e[2]&&(r.password=e[2]);if("port"in r&&"password"in r)return window.LcuInfo=r,!0}catch(e){return GetLCUInfo(!0)}return!1}};let{TextArea:T}=Z.default;function A(){let[e]=L.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,c]=(0,r.useState)(""),l=async()=>{t(!0);let e=s.split("\n").map(e=>e.trim()).filter(e=>""!=e);try{for(let n of(await a.Z.get(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/friends"),{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data)e.includes(n.gameName)||(await a.Z.delete(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/friends/"+n.puuid),{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),await sleep(1e3))}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh xử l\xfd y\xeau cầu")}t(!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(k.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng n\xe0y sẽ hủy kết bạn với tất cả người trong danh s\xe1ch bạn b\xe8, ph\xf9 hợp để dọn dẹp danh s\xe1ch bạn b\xe8. Đương nhi\xean l\xe0 bạn c\xf3 thể loại trừ những người bạn kh\xf4ng muốn hủy kết bạn."]})}),(0,i.jsxs)(L.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsxs)(L.Z.Item,{label:"Danh s\xe1ch loại trừ",children:[(0,i.jsx)(T,{rows:4,placeholder:"VD: Bonsx",value:s,onChange:e=>c(e.target.value)}),(0,i.jsx)("small",{children:"Những người chơi trong danh s\xe1ch n\xe0y sẽ kh\xf4ng bị hủy kết bạn. Mỗi d\xf2ng thể hiện cho một người chơi."})]}),(0,i.jsx)(L.Z.Item,{children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(P.Z,{title:"Cảnh b\xe1o",description:"Bạn chắc chắn muốn thực hiện điều n\xe0y? C\xe1c t\xe1c vụ đ\xe3 thực hiện sẽ kh\xf4ng thể ho\xe0n t\xe1c!",onConfirm:l,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(b.ZP,{name:"excute",type:"primary",htmlType:"button",loading:n,children:"Thực hiện"})})})})]})]})}function S(){let[e,n]=(0,r.useState)([!1,!1,!1]),t=(e,t)=>{n(n=>{let i=[...n];return i[e]=t,i})},s=async()=>{t(1,!0);try{await a.Z.post(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-challenges/v1/update-player-preferences"),{bannerAccent:"2"},{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu được thực hiện")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(1,!1)},c=async()=>{t(0,!0);try{await a.Z.post(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-challenges/v1/update-player-preferences"),{challengeIds:[]},{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu được thực hiện")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(0,!1)},l=async()=>{t(2,!0);try{await a.Z.put(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-regalia/v2/current-summoner/regalia"),{preferredCrestType:"prestige",preferredBannerType:"lastSeasonHighestRank",selectedPrestigeCrest:33},{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu được thực hiện")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(2,!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(k.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Nơi bao gồm c\xe1c chức năng bạn c\xf3 thể t\xf9y chỉnh ở phần hồ sơ của bạn."]})}),(0,i.jsx)(k.Z,{title:"Chức năng",style:{marginTop:10},children:(0,i.jsxs)(j.Z,{size:"small",children:[(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:e[0],onClick:c,children:"X\xf3a kỷ vật thử th\xe1ch"}),(0,i.jsx)(P.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi kh\xf4ng c\xf3 khung xếp hạng m\xf9a cũ",onConfirm:s,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:e[1],children:"X\xf3a cờ nền hồ sơ"})}),(0,i.jsx)(P.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi cấp độ 500 trở l\xean",onConfirm:l,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:e[2],children:"X\xf3a khung cấp độ"})})]})})]})}var z=t(165);let{TextArea:N}=Z.default;function E(){let[e]=L.Z.useForm(),[n,t]=(0,r.useState)("none"),[s,c]=(0,r.useState)(!1),[l,h]=(0,r.useState)(!1),[d,u]=(0,r.useState)("");async function g(){if(c(!0),"LcuInfo"in window)try{var e={};"none"!=n&&(e.lol={rankedLeagueTier:n,rankedLeagueDivision:"I"}),""!=d&&(e.statusMessage=d),await a.Z.put(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/me"),e,{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Trạng th\xe1i đ\xe3 được lưu")}catch(e){o.ZP.error("Kh\xf4ng thể kết nối tới tr\xf2 chơi. Vui l\xf2ng khởi động (lại) Li\xean Minh Huyền thoại")}c(!1)}let p=async()=>{if("LcuInfo"in window){h(!0);try{await a.Z.put(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/me"),{availability:"offline",lol:{gameStatus:"outOfGame"}},{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")}catch(e){o.ZP.error("Kh\xf4ng thể kết nối tới tr\xf2 chơi. Vui l\xf2ng khởi động (lại) Li\xean Minh Huyền thoại")}h(!1)}};return(0,i.jsxs)("div",{children:[(0,i.jsx)(k.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng d\xf9ng để chỉnh trạng th\xe1i t\xe0i khoản bao gồm nội dung ở phần trực tuyến v\xe0 khung xếp hạng... cho mục đ\xedch sống ảo."]})}),(0,i.jsxs)(L.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsx)(L.Z.Item,{label:"Xếp hạng",children:(0,i.jsx)(z.Z,{onChange:e=>t(e),defaultValue:"none",options:[{value:"none",label:"Kh\xf4ng thay đổi"},{value:"CHALLENGER",label:"Th\xe1ch Đấu"},{value:"GRANDMASTER",label:"Đại Cao Thủ"},{value:"MASTER",label:"Cao Thủ"},{value:"DIAMOND",label:"Kim Cương"},{value:"PLATINUM",label:"Bạch Kim"},{value:"GOLD",label:"V\xe0ng"},{value:"SILVER",label:"Bạc"},{value:"IRON",label:"Sắt"}]})}),(0,i.jsxs)(L.Z.Item,{label:"Nội dung ở phần trực tuyến",children:[(0,i.jsx)(N,{rows:4,placeholder:"VD: Hello I am Vy Nghia",value:d,onChange:e=>u(e.target.value)}),(0,i.jsxs)("small",{children:["Độ d\xe0i c\xf3 thể gần như v\xf4 hạn, nội dung phải tu\xe2n thủ theo quy tắc ứng xử của ",(0,i.jsx)("strong",{children:"Riot Games"}),", những nội dung mang hướng kh\xf4ng l\xe0nh mạnh c\xf3 thể sẽ kh\xf4ng được hiển thị."]})]}),(0,i.jsx)(L.Z.Item,{children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:s,onClick:g,children:"Thực hiện"})})]}),(0,i.jsx)(k.Z,{title:"Chức năng kh\xe1c",style:{marginTop:10},children:(0,i.jsx)(j.Z,{size:"small",children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:l,onClick:p,children:"Tắt mở/trạng th\xe1i ngoại tuyến"})})})]})}var U=t(6814),B=t(6311);function G(){let[e]=L.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,c]=(0,r.useState)(""),[l,h]=(0,r.useState)([]),[d,u]=(0,r.useState)(0),[g,p]=(0,r.useState)([]);(0,r.useEffect)(()=>{(async()=>{try{let e=await fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json"),n=await e.json();n.splice(0,1),p(n.map(e=>({id:e.id,name:e.name})))}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh lấy danh s\xe1ch tướng")}})()},[]);let m=(e,n)=>{let t={kNoRarity:null,kEpic:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/4/40/Epic_Skin.png"}),kLegendary:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/f/f1/Legendary_Skin.png"}),kMythic:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/4/4d/Hextech_Skin.png"}),kUltimate:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Ultimate_Skin.png"})};return(0,i.jsxs)("span",{children:[t[n]," ",e]})},w=async e=>{if("LcuInfo"in window)try{await a.Z.post(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-summoner/v1/current-summoner/summoner-profile"),{key:"backgroundSkinId",value:parseInt(e)},{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}};return(0,i.jsxs)("div",{children:[(0,i.jsxs)(L.Z,{form:e,layout:"vertical",onFinish:()=>{t(!0);let e=g.find(e=>e.name.toLowerCase().replace(/\'/g,"")==s.toLowerCase().replace(/\'/g,""));if(!e)return o.ZP.error("Tướng kh\xf4ng tồn tại"),t(!1);u(e.id),fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/vi_vn/v1/champions/".concat(e.id,".json")).then(e=>e.json()).then(e=>{Array.isArray(e.skins)&&(console.log(e.skins),h(e.skins)),t(!1)}),o.ZP.success("Danh s\xe1ch trang phục đ\xe3 được tải")},autoComplete:"off",validateMessages:{required:"${label} kh\xf4ng được trống"},children:[(0,i.jsx)(L.Z.Item,{name:"champion_name",label:"T\xean tướng",rules:[{required:!0},{type:"text",warningOnly:!0}],children:(0,i.jsx)(Z.default,{placeholder:"VD: Miss Fortune",value:s,onChange:e=>c(e.target.value)})}),(0,i.jsx)(L.Z.Item,{children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"submit",loading:n,children:"T\xecm kiếm"})})})]}),(0,i.jsx)("div",{style:{height:"calc(100vh - 350px)",overflow:"auto"},children:(0,i.jsx)(U.Z,{itemLayout:"horizontal",dataSource:l,renderItem:(e,n)=>(0,i.jsxs)(U.Z.Item,{children:[(0,i.jsx)(U.Z.Item.Meta,{avatar:(0,i.jsx)(B.C,{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/".concat(e.tilePath.replace("/lol-game-data/assets/","").toLowerCase())}),title:m(e.name,e.rarity),description:null==e.description?"Kh\xf4ng c\xf3 giới thiệu":e.description}),(0,i.jsx)("div",{children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",size:"middle",onClick:()=>w(e.id),children:"Chọn"})})]})})})]})}var M=t(3623),q=t(7394),H=t(4110);let{TextArea:R}=Z.default,{Text:_}=M.default;function V(){let[e]=L.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,c]=(0,r.useState)([]),[l,h]=(0,r.useState)([]),[d,u]=(0,r.useState)(0),[g,p]=(0,r.useState)(null),[m,w]=(0,r.useState)(null);(0,r.useEffect)(()=>{y(),x()},[]);let y=async()=>{try{let e=[...(await a.Z.get("https://vnghia1308.github.io/lcu/giftItems.json")).data];h(e)}catch(e){}},x=async()=>{t(!0);try{let e=(await a.Z.get(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/friends"),{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data;c(e),console.log(e)}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh tải danh s\xe1ch bạn b\xe8 của bạn")}t(!1)},f=e=>{let{label:n,value:t}=e,a=l.find(e=>e.itemId==t);return a?(0,i.jsxs)(q.Z,{align:"center",children:[(0,i.jsxs)("span",{style:{marginLeft:5},children:[n," - ",a.rp.toLocaleString()]}),(0,i.jsx)("img",{style:{marginLeft:5},width:14,src:"https://static.wikia.nocookie.net/leagueoflegends/images/0/00/RP_icon.png"})]}):(0,i.jsx)(i.Fragment,{children:n})},I=async()=>{if("LcuInfo"in window)try{return(await a.Z.get(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-summoner/v1/current-summoner "),{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data}catch(e){}return null},Z=async()=>{if("LcuInfo"in window)try{return(await a.Z.get(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-rso-auth/v1/authorization/access-token"),{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data.token}catch(e){}return null},v=async()=>{t(!0);let e=await I(),n=await Z();if(null==e||null==n)return t(!1),o.ZP.error("X\xe1c thực với m\xe1y chủ LMHT thất bại");if(null==g||null==m)return t(!1),o.ZP.error("Bạn phải chọn \xedt nhất một người bạn hoặc một m\xf3n qu\xe0");try{await a.Z.post("https://vn2-red.lol.sgp.pvp.net/storefront/v3/gift?language=vi_VN",{customMessage:"",receiverSummonerId:m,giftItemId:1010,accountId:e.accountId,items:[{inventoryType:g.inventoryType,itemId:g.itemId,ipCost:null,rpCost:g.rp,quantity:1}]},{headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}}),o.ZP.success("Tặng qu\xe0 th\xe0nh c\xf4ng")}catch(e){o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra trong qu\xe1 tr\xecnh tặng qu\xe0")}t(!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(k.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng n\xe0y cho ph\xe9p tặng bất k\xec m\xf3n qu\xe0 n\xe0o trong cửa h\xe0ng cho bạn b\xe8 kể cả khi ch\xfang kh\xf4ng c\xf3 sẵn trong chức năng tặng."]})}),(0,i.jsxs)(L.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsx)(L.Z.Item,{label:"Chọn bạn b\xe8",children:(0,i.jsx)(z.Z,{showSearch:!0,fieldNames:{label:"gameName",value:"summonerId"},placeholder:"Chọn một người bạn",optionFilterProp:"gameName",options:s,labelRender:e=>{let{label:n,value:t}=e,a=s.find(e=>e.summonerId==t);return(0,i.jsxs)(q.Z,{align:"center",children:[(0,i.jsx)(B.C,{size:20,src:"https://ddragon-webp.lolmath.net/latest/img/profileicon/".concat(a.icon,".webp")}),(0,i.jsx)("span",{style:{marginLeft:5},children:n})]})},onChange:e=>{w(e)}})}),(0,i.jsx)(L.Z.Item,{label:"Vật phẩm gửi tặng",children:(0,i.jsx)(z.Z,{showSearch:!0,optionFilterProp:"itemName",placeholder:"Chọn một m\xf3n qu\xe0",options:l,labelRender:f,optionRender:f,onChange:e=>{let n=l.find(n=>n.itemId==e);u(n.rp),p(n)},fieldNames:{label:"itemName",value:"itemId"}})}),(0,i.jsx)(H.Z,{}),(0,i.jsxs)(q.Z,{align:"center",children:[(0,i.jsx)(_,{children:(0,i.jsx)("strong",{children:"Tổng thanh to\xe1n: "})}),(0,i.jsx)("img",{style:{marginLeft:5},width:15,src:"https://static.wikia.nocookie.net/leagueoflegends/images/0/00/RP_icon.png"}),(0,i.jsxs)("span",{style:{marginLeft:5},children:[d.toLocaleString()," RP"]})]}),(0,i.jsx)(L.Z.Item,{children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(P.Z,{title:"Cảnh b\xe1o",description:"Bạn chắc chắn muốn thực hiện điều n\xe0y? Qu\xe0 tặng kh\xf4ng thể thu hồi!",okText:"Tiếp tục",cancelText:"Hủy",onConfirm:v,children:(0,i.jsx)(b.ZP,{style:{marginTop:20},name:"excute",type:"primary",htmlType:"button",loading:n,children:"Thực hiện"})})})})]})]})}var F=t(9200);function D(){let[e,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{n("true"==localStorage.getItem("isAutoAcceptMatch"))},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(k.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," C\xe1c chức năng hỗ trợ trận đấu của bạn."]})}),(0,i.jsx)(k.Z,{title:"Chức năng",style:{marginTop:10},children:(0,i.jsx)(j.Z,{size:"small",children:(0,i.jsx)(F.Z,{onChange:e=>{localStorage.setItem("isAutoAcceptMatch",e.target.checked),n(e.target.checked)},checked:e,children:"Tự động chấp nhận trận đấu"})})})]})}function K(){let[e,n]=(0,r.useState)(!1),[t,s]=(0,r.useState)([]);(0,r.useEffect)(()=>{c()},[]);let c=async()=>{n(!0);try{let e=(await a.Z.get(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-rewards/v1/grants"),{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data;s(e.filter(e=>e.rewardGroup.rewards.length>0))}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh tải danh s\xe1ch phần thưởng của bạn")}n(!1)},l=async(e,n)=>{try{await a.Z.post(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-rewards/v1/grants/".concat(e,"/select")),n,{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),o.ZP.success("Giao dịch kết th\xfac trong th\xe0nh c\xf4ng. Vật phẩn sẽ được gửi v\xe0o kho đồ của bạn!"),setTimeout(()=>{c()})}catch(e){o.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh tải danh s\xe1ch phần thưởng của bạn")}};return(0,i.jsx)("div",{children:(0,i.jsx)("div",{style:{height:"calc(100vh - 250px)",overflow:"auto"},children:(0,i.jsx)(U.Z,{itemLayout:"horizontal",dataSource:t,renderItem:(e,n)=>{let t=e.rewardGroup.rewards[0];return(0,i.jsxs)(U.Z.Item,{children:[(0,i.jsx)(U.Z.Item.Meta,{title:t.localizations.title,avatar:(0,i.jsx)(B.C,{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/".concat(t.media.iconUrl.replace("/lol-game-data/assets/","").toLowerCase())}),description:null==t.description?"Kh\xf4ng c\xf3 giới thiệu":t.description}),(0,i.jsx)("div",{children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",size:"middle",disabled:"FULFILLED"==e.info.status,onClick:()=>l(e.info.id,{rewardGroupId:e.info.rewardGroupId,selections:[t.id]}),children:"FULFILLED"==e.info.status?"Đ\xe3 nhận":"Nhận"})})]})}})})})}let{Header:O,Content:J,Footer:X,Sider:Y}=s.default;function W(){let[e,n]=(0,r.useState)((0,i.jsx)(G,{})),[t,j]=(0,r.useState)("Đổi nền trang phục"),[Z,L]=(0,r.useState)({type:"warning",message:"Vui l\xf2ng khởi động Li\xean Minh Huyền Thoại để sử dụng chức năng n\xe0y!"}),k=[{key:"1",icon:r.createElement(g.Z),label:"Đổi nền trang phục",onClick:()=>{n((0,i.jsx)(G,{})),j("Đổi nền trang phục")}},{key:"2",icon:r.createElement(p.Z),label:"Hủy kết bạn",onClick:()=>{n((0,i.jsx)(A,{})),j("Hủy kết bạn")}},{key:"3",icon:r.createElement(m.Z),label:"C\xf4ng cụ hồ sơ",onClick:()=>{n((0,i.jsx)(S,{})),j("C\xf4ng cụ hồ sơ")}},{key:"4",icon:r.createElement(m.Z),label:"C\xf4ng cụ trận đấu",onClick:()=>{n((0,i.jsx)(D,{})),j("C\xf4ng cụ trận đấu")}},{key:"5",icon:r.createElement(w.Z),label:"Trạng th\xe1i t\xe0i khoản",onClick:()=>{n((0,i.jsx)(E,{})),j("Trạng th\xe1i t\xe0i khoản")}},{key:"6",icon:r.createElement(y.Z),label:"Cửa h\xe0ng qu\xe0 tặng",onClick:()=>{n((0,i.jsx)(V,{})),j("Cửa h\xe0ng qu\xe0 tặng")}},{key:"7",icon:r.createElement(x.Z),label:"Phần thưởng ẩn",onClick:()=>{n((0,i.jsx)(K,{})),j("Phần thưởng ẩn")}},{key:"8",icon:r.createElement(f.Z),label:"Giới thiệu",onClick:()=>{n((0,i.jsx)(I,{})),j("Giới thiệu")}}];return(0,r.useEffect)(()=>{localStorage.setItem("isAutoAcceptMatch",!1);let e=[{url:"/lol-gameflow/v1/gameflow-phase",event:async e=>{if("ReadyCheck"==e){let e=localStorage.getItem("isAutoAcceptMatch");if("LcuInfo"in window&&"true"==e)try{await a.Z.post(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-matchmaking/v1/ready-check/accept"),{},{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})}catch(e){}}}}],n=window.require("ws"),t=setInterval(async()=>{if("LcuInfo"in window)try{let e=(await a.Z.get(C.getLeagueAPIUrl(window.LcuInfo.port,"/lol-summoner/v1/current-summoner"),{headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}})).data;e.summonerId;let n=e.gameName;if(e.unnamed&&(n="Kh\xf4ng x\xe1c định"),void 0===n||"undefined"==n||""==n){if(!e.unnamed)throw Error("undefined SummonerName");return}L({type:"success",message:(0,i.jsxs)("span",{children:["Đ\xe3 nhận diện được ",(0,i.jsx)("strong",{children:"Li\xean Minh Huyền Thoại"}),", người chơi hiện tại l\xe0 ",(0,i.jsx)("strong",{children:n})]})}),clearInterval(t)}catch(e){}else if(C.GetLCUInfo()){let t=new n("wss://riot:".concat(window.LcuInfo.password,"@127.0.0.1:").concat(window.LcuInfo.port),{rejectUnauthorized:!1,headers:{Authorization:"Basic "+C.getLeagueAPIPassword(window.LcuInfo.password)}});t.on("error",()=>{o.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra khi kết nối tới m\xe1y chủ của LMHT")}),t.on("open",()=>{t.send(JSON.stringify([5,"OnJsonApiEvent"]))}),t.on("message",n=>{try{let[t]=JSON.parse(n).slice(2),i=e.find(e=>e.url==t.uri);i&&i.event(t.data)}catch(e){}})}},1e3)},[]),(0,i.jsx)(c.ZP,{theme:{algorithm:l.Z.darkAlgorithm},children:(0,i.jsx)(s.default,{style:{height:"100vh"},children:(0,i.jsxs)(J,{style:{padding:"10px 30px"},children:[(0,i.jsxs)(h.Z,{style:{margin:"16px 0"},children:[(0,i.jsx)(h.Z.Item,{children:"League Extensions"}),(0,i.jsx)(h.Z.Item,{children:t})]}),(0,i.jsxs)(s.default,{style:{padding:"24px 0",background:"#141414"},children:[(0,i.jsx)(Y,{width:200,children:(0,i.jsx)(d.Z,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%"},items:k})}),(0,i.jsxs)(J,{style:{padding:"0 24px",minHeight:700},children:[(0,i.jsx)(u.Z,{message:Z.message,type:Z.type,showIcon:!0}),(0,i.jsx)("div",{className:"features-container",children:e})]})]})]})})})}}},function(e){e.O(0,[225,986,971,23,744],function(){return e(e.s=2150)}),_N_E=e.O()}]);