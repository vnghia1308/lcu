(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{866:function(e,n,t){Promise.resolve().then(t.bind(t,2793))},2793:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var i=t(7437),s=t(2265);t(6691);var a=t(9109),r=t(9994),c=t(6523),l=t(7675),o=t(289),h=t(2641),u=t(2988),d=t(5204),g=t(8803),p=t(6850),m=t(6256),y=t(8440);function x(){let[e,n]=(0,s.useState)(null);(0,s.useEffect)(()=>{let e=window.require("electron").shell;n(e)},[]);let t=n=>e&&e.openExternal(n);return(0,i.jsx)("div",{children:(0,i.jsxs)(y.Z,{wrap:!0,children:[(0,i.jsxs)("p",{children:["Phần mềm được viết & ph\xe1t triển bởi ",(0,i.jsx)("a",{onClick:()=>t("https://www.facebook.com/nghiadev"),children:(0,i.jsx)("strong",{children:"Vy Nghĩa"})})," dựa tr\xean ",(0,i.jsx)("strong",{children:"ElectronJS"})," (kết hợp từ ",(0,i.jsx)("strong",{children:"NodeJS"})," v\xe0 ",(0,i.jsx)("strong",{children:"VanillaJS"}),"). Nguồn cảm hứng v\xe0 t\xe0i liệu tham khảo đến từ dự \xe1n ",(0,i.jsx)("a",{onClick:()=>t("https://github.com/Pupix/rift-explorer"),children:(0,i.jsx)("strong",{children:"Rift Explorer"})})," của ",(0,i.jsx)("strong",{children:"Pupix"}),"."]}),(0,i.jsxs)("p",{style:{marginTop:10},children:["Tất cả chức năng của phần mềm đ\xe3 được tham khảo từ ch\xednh s\xe1ch của ",(0,i.jsx)("strong",{children:"Riot Games"}),". ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," ảnh hưởng, ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," can thiệp đến dữ liệu nhạy cảm của tr\xf2 chơi. Phần mềm n\xe0y sẽ lu\xf4n lu\xf4n l\xe0 ",(0,i.jsx)("strong",{children:"m\xe3 nguồn mở"})," để chứng minh sự minh bạch."]}),(0,i.jsxs)("p",{style:{marginTop:20},children:[(0,i.jsx)("hr",{style:{marginBottom:10}}),(0,i.jsxs)("span",{children:["\xa9 2022 - 2024 Vy Nghia.",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"League Extensions"}),"'s not bannable by ",(0,i.jsx)("strong",{children:"Riot Vanguard"}),"."]})]})]})})}var j=t(2173),f=t(3191),w=t(3589),k=t(6069),Z=t(7655),b=t(1184),v=t(2951),I=t(263).Buffer,P={getLeagueAPIUrl:(e,n)=>"https://127.0.0.1:".concat(e).concat(n),getLeagueAPIPassword:e=>I.from("riot:".concat(e)).toString("base64")};let{TextArea:L}=k.default;function C(){let[e]=w.Z.useForm(),[n,t]=(0,s.useState)(!1),[a,r]=(0,s.useState)(""),c=async()=>{t(!0);let e=a.split("\n").map(e=>e.trim()).filter(e=>""!=e);try{let n=await j.Z.get(P.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/friends"),{headers:{Authorization:"Basic "+P.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),t=n.data;for(let n of t)e.includes(n.gameName)||(await j.Z.delete(P.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/friends/"+n.puuid),{headers:{Authorization:"Basic "+P.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),await sleep(1e3))}catch(e){Z.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh xử l\xfd y\xeau cầu")}t(!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(v.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng n\xe0y sẽ hủy kết bạn với tất cả người trong danh s\xe1ch bạn b\xe8, ph\xf9 hợp để dọn dẹp danh s\xe1ch bạn b\xe8. Đương nhi\xean l\xe0 bạn c\xf3 thể loại trừ những người bạn kh\xf4ng muốn hủy kết bạn."]})}),(0,i.jsxs)(w.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsxs)(w.Z.Item,{label:"Danh s\xe1ch loại trừ",children:[(0,i.jsx)(L,{rows:4,placeholder:"VD: Bonsx",value:a,onChange:e=>r(e.target.value)}),(0,i.jsx)("small",{children:"Những người chơi trong danh s\xe1ch n\xe0y sẽ kh\xf4ng bị hủy kết bạn. Mỗi d\xf2ng thể hiện cho một người chơi."})]}),(0,i.jsx)(w.Z.Item,{children:(0,i.jsx)(y.Z,{children:(0,i.jsx)(b.Z,{title:"Cảnh b\xe1o",description:"Bạn chắc chắn muốn thực hiện điều n\xe0y? C\xe1c t\xe1c vụ đ\xe3 thực hiện sẽ kh\xf4ng thể ho\xe0n t\xe1c!",onConfirm:c,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(f.ZP,{name:"excute",type:"primary",htmlType:"button",loading:n,children:"Thực hiện"})})})})]})]})}function T(){let[e,n]=(0,s.useState)([!1,!1,!1]),t=(e,t)=>{n(n=>{let i=[...n];return i[e]=t,i})},a=async()=>{t(1,!0);try{await j.Z.post(P.getLeagueAPIUrl(window.LcuInfo.port,"/lol-challenges/v1/update-player-preferences"),{bannerAccent:"2"},{headers:{Authorization:"Basic "+P.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),Z.ZP.success("Y\xeau cầu được thực hiện")}catch(e){Z.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(1,!1)},r=async()=>{t(0,!0);try{await j.Z.post(P.getLeagueAPIUrl(window.LcuInfo.port,"/lol-challenges/v1/update-player-preferences"),{challengeIds:[]},{headers:{Authorization:"Basic "+P.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),Z.ZP.success("Y\xeau cầu được thực hiện")}catch(e){Z.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(0,!1)},c=async()=>{t(2,!0);try{await j.Z.post(P.getLeagueAPIUrl(window.LcuInfo.port,"/lol-regalia/v2/current-summoner/regalia"),{preferredCrestType:"prestige",preferredBannerType:"lastSeasonHighestRank",selectedPrestigeCrest:33},{headers:{Authorization:"Basic "+P.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),Z.ZP.success("Y\xeau cầu được thực hiện")}catch(e){Z.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}t(2,!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(v.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Nơi bao gồm c\xe1c chức năng bạn c\xf3 thể t\xf9y chỉnh ở phần hồ sơ của bạn."]})}),(0,i.jsx)(v.Z,{title:"Chức năng",style:{marginTop:10},children:(0,i.jsxs)(y.Z,{size:"small",children:[(0,i.jsx)(f.ZP,{type:"primary",htmlType:"button",loading:e[0],onClick:r,children:"X\xf3a kỷ vật thử th\xe1ch"}),(0,i.jsx)(b.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi kh\xf4ng c\xf3 khung xếp hạng m\xf9a cũ",onConfirm:a,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(f.ZP,{type:"primary",htmlType:"button",loading:e[1],children:"X\xf3a cờ nền hồ sơ"})}),(0,i.jsx)(b.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi cấp độ 500 trở l\xean",onConfirm:c,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(f.ZP,{type:"primary",htmlType:"button",loading:e[2],children:"X\xf3a khung cấp độ"})})]})})]})}var A=t(6144);let{TextArea:S}=k.default;function E(){let[e]=w.Z.useForm(),[n,t]=(0,s.useState)("none"),[a,r]=(0,s.useState)(!1),[c,l]=(0,s.useState)(!1),[o,h]=(0,s.useState)("");async function u(){if(r(!0),"LcuInfo"in window)try{var e={};"none"!=n&&(e.lol={rankedLeagueTier:n,rankedLeagueDivision:"I"}),""!=o&&(e.statusMessage=o),await j.Z.put(P.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/me"),e,{headers:{Authorization:"Basic "+P.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),Z.ZP.success("Trạng th\xe1i đ\xe3 được lưu")}catch(e){Z.ZP.error("Kh\xf4ng thể kết nối tới tr\xf2 chơi. Vui l\xf2ng khởi động (lại) Li\xean Minh Huyền thoại")}r(!1)}let d=async()=>{if("LcuInfo"in window){l(!0);try{await j.Z.put(P.getLeagueAPIUrl(window.LcuInfo.port,"/lol-chat/v1/me"),{availability:"offline",lol:{gameStatus:"outOfGame"}},{headers:{Authorization:"Basic "+P.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),Z.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")}catch(e){Z.ZP.error("Kh\xf4ng thể kết nối tới tr\xf2 chơi. Vui l\xf2ng khởi động (lại) Li\xean Minh Huyền thoại")}l(!1)}};return(0,i.jsxs)("div",{children:[(0,i.jsx)(v.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng d\xf9ng để chỉnh trạng th\xe1i t\xe0i khoản bao gồm nội dung ở phần trực tuyến v\xe0 khung xếp hạng... cho mục đ\xedch sống ảo."]})}),(0,i.jsxs)(w.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsx)(w.Z.Item,{label:"Xếp hạng",children:(0,i.jsx)(A.Z,{onChange:e=>t(e),defaultValue:"none",options:[{value:"none",label:"Kh\xf4ng thay đổi"},{value:"CHALLENGER",label:"Th\xe1ch Đấu"},{value:"GRANDMASTER",label:"Đại Cao Thủ"},{value:"MASTER",label:"Cao Thủ"},{value:"DIAMOND",label:"Kim Cương"},{value:"PLATINUM",label:"Bạch Kim"},{value:"GOLD",label:"V\xe0ng"},{value:"SILVER",label:"Bạc"},{value:"IRON",label:"Sắt"}]})}),(0,i.jsxs)(w.Z.Item,{label:"Nội dung ở phần trực tuyến",children:[(0,i.jsx)(S,{rows:4,placeholder:"VD: Hello I am Vy Nghia",value:o,onChange:e=>h(e.target.value)}),(0,i.jsxs)("small",{children:["Độ d\xe0i c\xf3 thể gần như v\xf4 hạn, nội dung phải tu\xe2n thủ theo quy tắc ứng xử của ",(0,i.jsx)("strong",{children:"Riot Games"}),", những nội dung mang hướng kh\xf4ng l\xe0nh mạnh c\xf3 thể sẽ kh\xf4ng được hiển thị."]})]}),(0,i.jsx)(w.Z.Item,{children:(0,i.jsx)(f.ZP,{type:"primary",htmlType:"button",loading:a,onClick:u,children:"Thực hiện"})})]}),(0,i.jsx)(v.Z,{title:"Chức năng kh\xe1c",style:{marginTop:10},children:(0,i.jsx)(y.Z,{size:"small",children:(0,i.jsx)(f.ZP,{type:"primary",htmlType:"button",loading:c,onClick:d,children:"Tắt mở/trạng th\xe1i ngoại tuyến"})})})]})}var N=t(9677),H=t(9231);function z(){let[e]=w.Z.useForm(),[n,t]=(0,s.useState)(!1),[a,r]=(0,s.useState)(""),[c,l]=(0,s.useState)([]),[o,h]=(0,s.useState)(0),[u,d]=(0,s.useState)([]);(0,s.useEffect)(()=>{let e=async()=>{try{let e=await fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json"),n=await e.json();n.splice(0,1),d(n.map(e=>({id:e.id,name:e.name})))}catch(e){Z.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh lấy danh s\xe1ch tướng")}};e()},[]);let g=(e,n)=>{let t={kNoRarity:null,kEpic:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/4/40/Epic_Skin.png"}),kLegendary:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/f/f1/Legendary_Skin.png"}),kMythic:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/4/4d/Hextech_Skin.png"}),kUltimate:(0,i.jsx)("img",{width:11,src:"https://static.wikia.nocookie.net/leagueoflegends/images/2/25/Ultimate_Skin.png"})};return(0,i.jsxs)("span",{children:[t[n]," ",e]})},p=async e=>{if(console.log(e),"LcuInfo"in window)try{await j.Z.post(P.getLeagueAPIUrl(window.LcuInfo.port,"/lol-summoner/v1/current-summoner/summoner-profile"),{key:"backgroundSkinId",value:parseInt(e)},{headers:{Authorization:"Basic "+P.getLeagueAPIPassword(window.LcuInfo.password),"Content-Type":"application/json"}}),Z.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")}catch(e){Z.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}};return(0,i.jsxs)("div",{children:[(0,i.jsxs)(w.Z,{form:e,layout:"vertical",onFinish:()=>{t(!0);let e=u.find(e=>e.name.toLowerCase().replace(/\'/g,"")==a.toLowerCase().replace(/\'/g,""));if(!e)return Z.ZP.error("Tướng kh\xf4ng tồn tại"),t(!1);h(e.id),fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/vi_vn/v1/champions/".concat(e.id,".json")).then(e=>e.json()).then(e=>{Array.isArray(e.skins)&&l(e.skins),t(!1)}),Z.ZP.success("Danh s\xe1ch trang phục đ\xe3 được tải")},autoComplete:"off",validateMessages:{required:"${label} kh\xf4ng được trống"},children:[(0,i.jsx)(w.Z.Item,{name:"champion_name",label:"T\xean tướng",rules:[{required:!0},{type:"text",warningOnly:!0}],children:(0,i.jsx)(k.default,{placeholder:"VD: Miss Fortune",value:a,onChange:e=>r(e.target.value)})}),(0,i.jsx)(w.Z.Item,{children:(0,i.jsx)(y.Z,{children:(0,i.jsx)(f.ZP,{type:"primary",htmlType:"submit",loading:n,children:"T\xecm kiếm"})})})]}),(0,i.jsx)("div",{style:{height:"calc(100vh - 350px)",overflow:"auto"},children:(0,i.jsx)(N.Z,{itemLayout:"horizontal",dataSource:c,renderItem:(e,n)=>(0,i.jsxs)(N.Z.Item,{children:[(0,i.jsx)(N.Z.Item.Meta,{avatar:(0,i.jsx)(H.C,{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/".concat(o,"/").concat(e.id,".jpg")}),title:g(e.name,e.rarity),description:null==e.description?"Kh\xf4ng c\xf3 giới thiệu":e.description}),(0,i.jsx)("div",{children:(0,i.jsx)(f.ZP,{type:"primary",htmlType:"button",size:"middle",onClick:()=>p(e.id),children:"Chọn"})})]})})})]})}let{Header:B,Content:V,Footer:M,Sider:G}=r.default;function _(){let[e,n]=(0,s.useState)((0,i.jsx)(z,{})),[t,y]=(0,s.useState)("Đổi nền trang phục"),[j,f]=(0,s.useState)({type:"warning",message:"Vui l\xf2ng khởi động Li\xean Minh Huyền Thoại để sử dụng chức năng n\xe0y!"}),w=[{key:"1",icon:s.createElement(u.Z),label:"Đổi nền trang phục",onClick:()=>{n((0,i.jsx)(z,{})),y("Đổi nền trang phục")}},{key:"2",icon:s.createElement(g.Z),label:"Hủy kết bạn",onClick:()=>{n((0,i.jsx)(C,{})),y("Hủy kết bạn")}},{key:"3",icon:s.createElement(p.Z),label:"C\xf4ng cụ hồ sơ",onClick:()=>{n((0,i.jsx)(T,{})),y("C\xf4ng cụ hồ sơ")}},{key:"4",icon:s.createElement(d.Z),label:"Trạng th\xe1i t\xe0i khoản",onClick:()=>{n((0,i.jsx)(E,{})),y("Trạng th\xe1i t\xe0i khoản")}},{key:"5",icon:s.createElement(m.Z),label:"Giới thiệu",onClick:()=>{n((0,i.jsx)(x,{})),y("Giới thiệu")}}];return(0,s.useEffect)(()=>{localStorage.setItem("summonerConnected","false");let{ipcRenderer:e}=window.require("electron");e.on("mainprocess-response-summoner",(e,n)=>{n="Vy Nghia",f({type:"success",message:(0,i.jsxs)("span",{children:["Đ\xe3 nhận diện được ",(0,i.jsx)("strong",{children:"Li\xean Minh Huyền Thoại"}),", người chơi hiện tại l\xe0 ",(0,i.jsx)("strong",{children:n})]})}),localStorage.setItem("summonerConnected","true")}),e.on("mainprocess-response-lcu",async(e,n)=>{window.LcuInfo=n}),e.send("request-mainprocess-action",{type:"request_summoner"})},[]),(0,i.jsx)(o.ZP,{theme:{algorithm:h.Z.darkAlgorithm},children:(0,i.jsx)(r.default,{style:{height:"100vh"},children:(0,i.jsxs)(V,{style:{padding:"10px 30px"},children:[(0,i.jsxs)(a.Z,{style:{margin:"16px 0"},children:[(0,i.jsx)(a.Z.Item,{children:"League Extensions"}),(0,i.jsx)(a.Z.Item,{children:t})]}),(0,i.jsxs)(r.default,{style:{padding:"24px 0",background:"#141414"},children:[(0,i.jsx)(G,{width:200,children:(0,i.jsx)(c.Z,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%"},items:w})}),(0,i.jsxs)(V,{style:{padding:"0 24px",minHeight:700},children:[(0,i.jsx)(l.Z,{message:j.message,type:j.type,showIcon:!0}),(0,i.jsx)("div",{className:"features-container",children:e})]})]})]})})})}}},function(e){e.O(0,[872,47,971,472,744],function(){return e(e.s=866)}),_N_E=e.O()}]);