(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2431:function(){},1863:function(e,n,t){Promise.resolve().then(t.bind(t,7112))},7112:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return K}});var i=t(7437),s=t(6543),l=t.n(s),c=t(2265),r=t(289),a=t(9109),h=t(9994),o=t(6523),u=t(2641),d=t(7675),g=t(2988),m=t(5204),p=t(8803),x=t(6850),y=t(6256),j=t(8440),f=t(467);let{Text,Link:b}=f.default;function k(){let[e,n]=(0,c.useState)(null);(0,c.useEffect)(()=>{let e=window.require("electron").shell;n(e)},[]);let t=n=>e&&e.openExternal(n);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(j.Z,{wrap:!0,children:[(0,i.jsxs)(Text,{children:["Phần mềm được viết & ph\xe1t triển bởi ",(0,i.jsx)("a",{onClick:()=>t("https://www.facebook.com/nghiadev"),children:(0,i.jsx)("strong",{children:"Vy Nghĩa"})})," dựa tr\xean ",(0,i.jsx)("strong",{children:"ElectronJS"})," (kết hợp từ ",(0,i.jsx)("strong",{children:"NodeJS"})," v\xe0 ",(0,i.jsx)("strong",{children:"VanillaJS"}),"). Nguồn cảm hứng v\xe0 t\xe0i liệu tham khảo đến từ dự \xe1n ",(0,i.jsx)("a",{onClick:()=>t("https://github.com/Pupix/rift-explorer"),children:(0,i.jsx)("strong",{children:"Rift Explorer"})})," của ",(0,i.jsx)("strong",{children:"Pupix"}),"."]}),(0,i.jsxs)(Text,{children:["Tất cả chức năng của phần mềm đ\xe3 được tham khảo từ ch\xednh s\xe1ch của ",(0,i.jsx)("strong",{children:"Riot Games"}),". ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," ảnh hưởng, ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," can thiệp đến dữ liệu nhạy cảm của tr\xf2 chơi. Phần mềm n\xe0y sẽ lu\xf4n lu\xf4n l\xe0 ",(0,i.jsx)("strong",{children:"m\xe3 nguồn mở"})," để chứng minh sự minh bạch."]}),(0,i.jsxs)(Text,{children:["Bạn c\xf3 thể theo d\xf5i cập nhật của ứng dụng n\xe0y tr\xean ",(0,i.jsx)("a",{onClick:()=>t("https://github.com/vnghia1308/lcu"),children:(0,i.jsx)("strong",{children:"Github"})})]})]})})}var Z=t(3589),w=t(7655),v=t(2951);let{Text:T}=f.default;function C(){let[e]=Z.Z.useForm(),[n,t]=(0,c.useState)(!1),[s,l]=(0,c.useState)(null),[r,a]=(0,c.useState)(!1),[h,o]=(0,c.useState)(null),[u,d]=(0,c.useState)(null),[g,m]=(0,c.useState)(null),[p,x]=(0,c.useState)("Waiting for use mod...");return(0,c.useEffect)(()=>{console.log("mod load");let{ipcRenderer:e}=window.require("electron");l(e);let n=window.require("child_process");d(n);let t=window.require("fs");o(t)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng d\xf9ng để cung cấp những bản mod do ",(0,i.jsx)("strong",{children:"Vy Nghĩa"})," ph\xe1t h\xe0nh."]})}),(0,i.jsxs)("p",{children:["Rất tiếc! Chức năng n\xe0y hiện kh\xf4ng khả dụng. Mọi chi tiết vui l\xf2ng li\xean hệ ",(0,i.jsx)("strong",{children:"t\xe1c giả"})," (trong phần giới hiệu)"]})]})}var S=t(3191),P=t(5057),E=t(1184);let{TextArea:N}=P.default;function I(){let[e]=Z.Z.useForm(),[n,t]=(0,c.useState)(!1),[s,l]=(0,c.useState)(null),[r,a]=(0,c.useState)("");(0,c.useEffect)(()=>{l(window.require("league-connect"))},[]);let h=async()=>{t(!0);try{let{authenticate:e,request:n}=s,t=await e(),i=r.split("\n").map(e=>e.trim()).filter(e=>""!=e),l=await n({method:"GET",url:"/lol-chat/v1/friends"},t),c=e=>new Promise(n=>setTimeout(n,e)),a=await l.json();for(let e of a)i.includes(e.gameName)||(await n({method:"DELETE",url:"/lol-chat/v1/friends/"+e.puuid},t),await c(1e3));w.ZP.success("Thao t\xe1c đ\xe3 được thực hiện")}catch(e){console.log(e),w.ZP.error("Kh\xf4ng thể kết nối tới tr\xf2 chơi. Vui l\xf2ng khởi động (lại) Li\xean Minh Huyền thoại")}t(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng n\xe0y sẽ hủy kết bạn với tất cả người trong danh s\xe1ch bạn b\xe8, ph\xf9 hợp để dọn dẹp danh s\xe1ch bạn b\xe8. Đương nhi\xean l\xe0 bạn c\xf3 thể loại trừ những người bạn kh\xf4ng muốn hủy kết bạn."]})}),(0,i.jsxs)(Z.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsxs)(Z.Z.Item,{label:"Danh s\xe1ch loại trừ",children:[(0,i.jsx)(N,{rows:4,placeholder:"VD: Bonsx",value:r,onChange:e=>a(e.target.value)}),(0,i.jsx)("small",{children:"Những người chơi trong danh s\xe1ch n\xe0y sẽ kh\xf4ng bị hủy kết bạn. Mỗi d\xf2ng thể hiện cho một người chơi. Chỉ cần t\xean đại diện, kh\xf4ng cần hashtag."})]}),(0,i.jsx)(Z.Z.Item,{children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(E.Z,{title:"Cảnh b\xe1o",description:"Bạn chắc chắn muốn thực hiện điều n\xe0y? C\xe1c t\xe1c vụ đ\xe3 thực hiện sẽ kh\xf4ng thể ho\xe0n t\xe1c!",onConfirm:h,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(S.ZP,{name:"excute",type:"primary",htmlType:"button",loading:n,children:"Thực hiện"})})})})]})]})}function q(){let[e,n]=(0,c.useState)([!1,!1,!1]),[t,s]=(0,c.useState)(null),[l,r]=(0,c.useState)(null);(0,c.useEffect)(()=>{let{ipcRenderer:e}=window.require("electron");s(e),r(window.require("league-connect"))},[]);let a=(e,t)=>{n(n=>{let i=[...n];return i[e]=t,i})},h=async()=>{a(1,!0);try{let{authenticate:e,request:n}=l,t=await e(),i=await n({method:"POST",url:"/lol-challenges/v1/update-player-preferences",body:{bannerAccent:"2"}},t);await i.text(),w.ZP.success("Y\xeau cầu được thực hiện")}catch(e){w.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}a(1,!1)},o=async()=>{a(0,!0);try{let{authenticate:e,request:n}=l,t=await e(),i=await n({method:"POST",url:"/lol-challenges/v1/update-player-preferences",body:{challengeIds:[]}},t);await i.text(),w.ZP.success("Y\xeau cầu được thực hiện")}catch(e){w.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}a(0,!1)},u=async()=>{a(2,!0);try{let{authenticate:e,request:n}=l,t=await e(),i=await n({method:"PUT",url:"/lol-regalia/v2/current-summoner/regalia",body:{preferredCrestType:"prestige",preferredBannerType:"lastSeasonHighestRank",selectedPrestigeCrest:33}},t);await i.text(),w.ZP.success("Y\xeau cầu được thực hiện")}catch(e){w.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}a(2,!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Nơi bao gồm c\xe1c chức năng bạn c\xf3 thể t\xf9y chỉnh ở phần hồ sơ của bạn."]})}),(0,i.jsx)(v.Z,{title:"Chức năng",style:{marginTop:10},children:(0,i.jsxs)(j.Z,{size:"small",children:[(0,i.jsx)(S.ZP,{type:"primary",htmlType:"button",loading:e[0],onClick:o,children:"X\xf3a kỷ vật thử th\xe1ch"}),(0,i.jsx)(E.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi kh\xf4ng c\xf3 khung xếp hạng m\xf9a cũ",onConfirm:h,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(S.ZP,{type:"primary",htmlType:"button",loading:e[1],children:"X\xf3a cờ nền hồ sơ"})}),(0,i.jsx)(E.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi cấp độ 500 trở l\xean",onConfirm:u,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(S.ZP,{type:"primary",htmlType:"button",loading:e[2],children:"X\xf3a khung cấp độ"})})]})})]})}t(3104);var L=t(3934);let{TextArea:G}=P.default;function M(){let[e]=Z.Z.useForm(),[n,t]=(0,c.useState)("none"),[s,l]=(0,c.useState)(!1),[r,a]=(0,c.useState)(!1),[h,o]=(0,c.useState)(null),[u,d]=(0,c.useState)(null),[g,m]=(0,c.useState)("");async function p(){a(!0);try{let{authenticate:e,request:n}=u,t=await e(),i=await n({method:"GET",url:"/lol-chat/v1/me"},t),s=await i.json(),l="offline"==s.availability;await n({method:"PUT",url:"/lol-chat/v1/me",body:{availability:l?"chat":"offline"}},t),w.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")}catch(e){console.log(e),w.ZP.error("Kh\xf4ng thể kết nối tới tr\xf2 chơi. Vui l\xf2ng khởi động (lại) Li\xean Minh Huyền thoại")}a(!1)}return(0,c.useEffect)(()=>{let{ipcRenderer:e}=window.require("electron");o(e),d(window.require("league-connect")),e.on("mainprocess-response",(e,n)=>{l(!1),w.ZP.success(n)}),e.on("mainprocess-response-error",(e,n)=>{l(!1),w.ZP.error(n)})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng d\xf9ng để chỉnh trạng th\xe1i t\xe0i khoản bao gồm nội dung ở phần trực tuyến v\xe0 khung xếp hạng... cho mục đ\xedch sống ảo."]})}),(0,i.jsxs)(Z.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsx)(Z.Z.Item,{label:"Xếp hạng",children:(0,i.jsx)(L.Z,{onChange:e=>t(e),defaultValue:"none",options:[{value:"none",label:"Kh\xf4ng thay đổi"},{value:"CHALLENGER",label:"Th\xe1ch Đấu"},{value:"GRANDMASTER",label:"Đại Cao Thủ"},{value:"MASTER",label:"Cao Thủ"},{value:"DIAMOND",label:"Kim Cương"},{value:"PLATINUM",label:"Bạch Kim"},{value:"GOLD",label:"V\xe0ng"},{value:"SILVER",label:"Bạc"},{value:"IRON",label:"Sắt"}]})}),(0,i.jsxs)(Z.Z.Item,{label:"Nội dung ở phần trực tuyến",children:[(0,i.jsx)(G,{rows:4,placeholder:"VD: Hello I am Vy Nghia",value:g,onChange:e=>m(e.target.value)}),(0,i.jsxs)("small",{children:["Độ d\xe0i c\xf3 thể gần như v\xf4 hạn, nội dung phải tu\xe2n thủ theo quy tắc ứng xử của ",(0,i.jsx)("strong",{children:"Riot Games"}),", những nội dung mang hướng kh\xf4ng l\xe0nh mạnh c\xf3 thể sẽ kh\xf4ng được hiển thị."]})]}),(0,i.jsx)(Z.Z.Item,{children:(0,i.jsx)(S.ZP,{type:"primary",htmlType:"button",loading:s,onClick:function(){l(!0),h.send("request-mainprocess-action",{type:"change_account_info",data:{RankTier:n,StatusText:g}})},children:"Thực hiện"})})]}),(0,i.jsx)(v.Z,{title:"Chức năng kh\xe1c",style:{marginTop:10},children:(0,i.jsx)(j.Z,{size:"small",children:(0,i.jsx)(S.ZP,{type:"primary",htmlType:"button",loading:r,onClick:p,children:"Tắt/mở chế độ Ngoại tuyến"})})})]})}var H=t(9677),V=t(9231);function _(){let[e]=Z.Z.useForm(),[n,t]=(0,c.useState)(!1),[s,l]=(0,c.useState)(""),[r,a]=(0,c.useState)([]),[h,o]=(0,c.useState)(0),[u,d]=(0,c.useState)([]),[g,m]=(0,c.useState)(null);(0,c.useEffect)(()=>{let{ipcRenderer:e}=window.require("electron");m(e),e.on("mainprocess-response-json",(e,n)=>{"false"==n.success?w.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra"):w.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")});let n=async()=>{try{let e=await fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json"),n=await e.json();n.splice(0,1),d(n.map(e=>({id:e.id,name:e.name})))}catch(e){w.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh lấy danh s\xe1ch tướng")}};n()},[]);let p=(e,n)=>{let t={kNoRarity:null,kEpic:(0,i.jsx)("img",{width:15,src:"https://vnghia1308.github.io/lcu/web/assets/skin-tiers/epic.png"}),kLegendary:(0,i.jsx)("img",{width:15,src:"https://vnghia1308.github.io/lcu/web/assets/skin-tiers/legendary.png"}),kMythic:(0,i.jsx)("img",{width:15,src:"https://vnghia1308.github.io/lcu/web/assets/skin-tiers/mythic.png"}),kUltimate:(0,i.jsx)("img",{width:15,src:"https://vnghia1308.github.io/lcu/web/assets/skin-tiers/ultimate.png"})};return(0,i.jsxs)(j.Z,{align:"center",children:[t[n],(0,i.jsx)("span",{children:e})]})},x=e=>{g&&g.send("request-mainprocess-action",{type:"change_background",skin_id:e})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Z.Z,{form:e,layout:"vertical",onFinish:()=>{let e=u.find(e=>e.name.toLowerCase().replace(/\'/g,"")==s.toLowerCase().replace(/\'/g,""));if(!e)return w.ZP.error("Tướng kh\xf4ng tồn tại"),t(!1);o(e.id),fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/vi_vn/v1/champions/".concat(e.id,".json")).then(e=>e.json()).then(e=>{Array.isArray(e.skins)&&a(e.skins)}).catch(()=>null).then(()=>t(!1))},autoComplete:"off",validateMessages:{required:"${label} kh\xf4ng được trống"},children:[(0,i.jsx)(Z.Z.Item,{name:"champion_name",label:"T\xean tướng",rules:[{required:!0},{type:"text",warningOnly:!0}],children:(0,i.jsx)(P.default,{placeholder:"VD: Miss Fortune",value:s,onChange:e=>l(e.target.value)})}),(0,i.jsx)(Z.Z.Item,{children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(S.ZP,{type:"primary",htmlType:"submit",loading:n,onClick:()=>t(!0),children:"T\xecm kiếm"})})})]}),(0,i.jsx)(H.Z,{itemLayout:"horizontal",dataSource:r,renderItem:(e,n)=>(0,i.jsxs)(H.Z.Item,{children:[(0,i.jsx)(H.Z.Item.Meta,{avatar:(0,i.jsx)(V.C,{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/".concat(h,"/").concat(e.id,".jpg")}),title:p(e.name,e.rarity),description:null==e.description?"Kh\xf4ng c\xf3 giới thiệu":e.description}),(0,i.jsx)("div",{children:(0,i.jsx)(S.ZP,{type:"primary",htmlType:"button",size:"middle",onClick:()=>x(e.id),children:"Chọn"})})]})})]})}let{Header:R,Content:F,Footer:A,Sider:D}=h.default;function K(){let[e,n]=(0,c.useState)("#141414"),[t,s]=(0,c.useState)(!1),[j,f]=(0,c.useState)((0,i.jsx)(_,{})),[b,Z]=(0,c.useState)("Đổi nền trang phục"),[w,v]=(0,c.useState)({type:"warning",message:"Vui l\xf2ng khởi động Li\xean Minh Huyền Thoại để sử dụng chức năng n\xe0y!"}),T=[{key:"1",icon:c.createElement(g.Z),label:"Đổi nền trang phục",onClick:()=>{f((0,i.jsx)(_,{})),Z("Đổi nền trang phục")}},{key:"2",icon:c.createElement(p.Z),label:"Hủy kết bạn",onClick:()=>{f((0,i.jsx)(I,{})),Z("Hủy kết bạn")}},{key:"3",icon:c.createElement(x.Z),label:"C\xf4ng cụ hồ sơ",onClick:()=>{f((0,i.jsx)(q,{})),Z("C\xf4ng cụ hồ sơ")}},{key:"4",icon:c.createElement(m.Z),label:"Trạng th\xe1i t\xe0i khoản",onClick:()=>{f((0,i.jsx)(M,{})),Z("Trạng th\xe1i t\xe0i khoản")}},{key:"5",icon:c.createElement(m.Z),label:"Vy Nghia Mods",onClick:()=>{f((0,i.jsx)(C,{})),Z("Vy Nghia Mods")}},{key:"999",icon:c.createElement(y.Z),label:"Giới thiệu",onClick:()=>{f((0,i.jsx)(k,{})),Z("Giới thiệu")}}];return(0,c.useEffect)(()=>{localStorage.setItem("summonerConnected","false");let{ipcRenderer:e}=window.require("electron");e.on("mainprocess-response-summoner",(e,n)=>{v({type:"success",message:(0,i.jsxs)("span",{children:["Đ\xe3 nhận diện được ",(0,i.jsx)("strong",{children:"Li\xean Minh Huyền Thoại"}),", người chơi hiện tại l\xe0 ",(0,i.jsx)("strong",{children:n})]})}),localStorage.setItem("summonerConnected","true")}),e.send("request-mainprocess-action",{type:"request_summoner"})},[]),l().events.on("menuDisableState",e=>{s(e)}),(0,i.jsx)(r.ZP,{theme:{algorithm:u.Z.darkAlgorithm},children:(0,i.jsx)(h.default,{style:{height:"100vh"},children:(0,i.jsxs)(F,{style:{padding:"10px 30px"},children:[(0,i.jsxs)(a.Z,{style:{margin:"16px 0"},children:[(0,i.jsx)(a.Z.Item,{children:"League Extensions"}),(0,i.jsx)(a.Z.Item,{children:b})]}),(0,i.jsxs)(h.default,{style:{padding:"24px 0",background:e},children:[(0,i.jsx)(D,{style:{background:e},width:200,children:(0,i.jsx)(o.Z,{disabled:t,mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%"},items:T})}),(0,i.jsxs)(F,{style:{padding:"0 24px",minHeight:700},children:[(0,i.jsx)(d.Z,{message:w.message,type:w.type,showIcon:!0}),(0,i.jsx)("div",{className:"features-container",children:j})]})]})]})})})}}},function(e){e.O(0,[872,105,971,472,744],function(){return e(e.s=1863)}),_N_E=e.O()}]);