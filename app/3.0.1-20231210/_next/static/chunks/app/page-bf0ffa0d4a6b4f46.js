(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2431:function(){},183:function(e,n,t){Promise.resolve().then(t.bind(t,7112))},7112:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var i=t(7437),s=t(6543),l=t.n(s),r=t(2265);t(6691);var c=t(9109),a=t(9994),h=t(6523),o=t(2641),d=t(7675),u=t(2988),g=t(5204),m=t(8803),p=t(6850),x=t(6256),y=t(8440);function j(){let[e,n]=(0,r.useState)(null),t=!1;(0,r.useEffect)(()=>{if(!t){t=!0;let e=window.require("electron").shell;n(e)}},[]);let s=n=>e&&e.openExternal(n);return(0,i.jsx)("div",{children:(0,i.jsxs)(y.Z,{wrap:!0,children:[(0,i.jsxs)("p",{children:["Phần mềm được viết & ph\xe1t triển bởi ",(0,i.jsx)("a",{onClick:()=>s("https://www.facebook.com/nghiadev"),children:(0,i.jsx)("strong",{children:"Vy Nghĩa"})})," dựa tr\xean ",(0,i.jsx)("strong",{children:"ElectronJS"})," (kết hợp từ ",(0,i.jsx)("strong",{children:"NodeJS"})," v\xe0 ",(0,i.jsx)("strong",{children:"VanillaJS"}),"). Nguồn cảm hứng v\xe0 t\xe0i liệu tham khảo đến từ dự \xe1n ",(0,i.jsx)("a",{onClick:()=>s("https://github.com/Pupix/rift-explorer"),children:(0,i.jsx)("strong",{children:"Rift Explorer"})})," của ",(0,i.jsx)("strong",{children:"Pupix"}),"."]}),(0,i.jsxs)("p",{children:["Tất cả chức năng của phần mềm đ\xe3 được tham khảo từ ch\xednh s\xe1ch của ",(0,i.jsx)("strong",{children:"Riot Games"}),". ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," ảnh hưởng, ",(0,i.jsx)("strong",{children:"KH\xd4NG"})," can thiệp đến dữ liệu nhạy cảm của tr\xf2 chơi. Phần mềm n\xe0y sẽ lu\xf4n lu\xf4n l\xe0 ",(0,i.jsx)("strong",{children:"m\xe3 nguồn mở"})," để chứng minh sự minh bạch."]}),(0,i.jsxs)("p",{children:["Bạn c\xf3 thể theo d\xf5i cập nhật của ứng dụng n\xe0y tr\xean ",(0,i.jsx)("a",{onClick:()=>s("https://github.com/vnghia1308/lcu"),children:(0,i.jsx)("strong",{children:"Github"})})]})]})})}var b=t(3191),f=t(3589),k=t(7655),Z=t(2951),v=t(9677);function w(){let[e]=f.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,c]=(0,r.useState)(null),[a,h]=(0,r.useState)(!1),[o,u]=(0,r.useState)(null),[g,m]=(0,r.useState)(null),[p,x]=(0,r.useState)(null),[j,w]=(0,r.useState)(""),S=!1;(0,r.useEffect)(()=>{if(!S){S=!0,console.log("mod load");let{ipcRenderer:e}=window.require("electron");c(e);let n=window.require("child_process");m(n);let t=window.require("fs");u(t)}},[]);let C=[{name:(0,i.jsx)("span",{children:"X\xf3a Wartermark 18+"}),desc:(0,i.jsx)("span",{children:"Gi\xfap bạn x\xf3a khung 18+ ở ph\xeda m\xe0n h\xecnh đi"}),event:()=>{console.log("hello")},disabled:!0},{name:(0,i.jsx)("span",{children:"G\xf3i dịch thuật H\xe1n Tự (13.24)"}),desc:(0,i.jsxs)("span",{children:["Bản dịch thuật gi\xfap c\xe1c phi\xean bản sử dụng ",(0,i.jsx)("strong",{children:"H\xe1n Tự"})," (",(0,i.jsx)("strong",{children:"H\xe0n"}),", ",(0,i.jsx)("strong",{children:"Nhật"}),", ",(0,i.jsx)("strong",{children:"Trung"}),") của bạn sẽ được dịch sang ",(0,i.jsx)("strong",{children:"tiếng Việt"})," (vẫn giữ lồng tiếng)"]}),event:()=>{console.log("hello")},disabled:!0}];return(0,i.jsxs)("div",{children:[(0,i.jsx)(Z.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng d\xf9ng để cung cấp những bản mod do ",(0,i.jsx)("strong",{children:"Vy Nghĩa"})," ph\xe1t h\xe0nh."]})}),(0,i.jsx)(v.Z,{itemLayout:"horizontal",dataSource:C,renderItem:(e,n)=>(0,i.jsxs)(v.Z.Item,{children:[(0,i.jsx)(v.Z.Item.Meta,{title:e.name,description:e.desc}),(0,i.jsx)("div",{children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",size:"middle",onClick:e.event,disabled:!0,children:"\xc1p dụng"})})]})}),(0,i.jsxs)(y.Z,{direction:"vertical",size:"small",style:{display:"flex"},children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"Phi\xean bản hiện tại kh\xf4ng hỗ trợ c\xe1c g\xf3i đơn lẻ, mặc định sẽ l\xe0 \xe1p dụng tất cả g\xf3i."})}),(0,i.jsx)(b.ZP,{type:"primary",danger:a,htmlType:"button",size:"middle",onClick:()=>{if(!o.existsSync("./bin/mod-tools.exe"))return k.ZP.error("Kh\xf4ng t\xecm thấy thư viện mod, vui l\xf2ng tải lại phi\xean bản mới nhất để khắc phục điều n\xe0y");let e=!a;if(h(e),l().events.emit("menuDisableState",e),e){let e=g.spawn("bin\\mod-tools",["runoverlay","./mods/src","./mods/mods.config"]);e.stdout.on("data",function(e){w(e.toString())}),e.stderr.on("data",function(e){console.log("stderr: "+e.toString())}),e.on("exit",function(n){h(!1),l().events.emit("menuDisableState",!1),null!=p&&(e.kill(),x(null))}),x(e)}else p.kill(),x(null)},children:a?"Dừng sử dụng":"Sử dụng"}),a&&(0,i.jsx)(d.Z,{message:j,type:"info",showIcon:!0})]})]})}var S=t(6069),C=t(1184);let{TextArea:T}=S.default;function P(){let[e]=f.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,l]=(0,r.useState)(null),[c,a]=(0,r.useState)(""),h=!1;return(0,r.useEffect)(()=>{if(!h){h=!0;let{ipcRenderer:e}=window.require("electron");l(e),e.on("mainprocess-response",(e,n)=>{t(!1),k.ZP.success(n)}),e.on("mainprocess-response-error",(e,n)=>{t(!1),k.ZP.error(n)})}},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(Z.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng n\xe0y sẽ hủy kết bạn với tất cả người trong danh s\xe1ch bạn b\xe8, ph\xf9 hợp để dọn dẹp danh s\xe1ch bạn b\xe8. Đương nhi\xean l\xe0 bạn c\xf3 thể loại trừ những người bạn kh\xf4ng muốn hủy kết bạn."]})}),(0,i.jsxs)(f.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsxs)(f.Z.Item,{label:"Danh s\xe1ch loại trừ",children:[(0,i.jsx)(T,{rows:4,placeholder:"VD: Bonsx",value:c,onChange:e=>a(e.target.value)}),(0,i.jsx)("small",{children:"Những người chơi trong danh s\xe1ch n\xe0y sẽ kh\xf4ng bị hủy kết bạn. Mỗi d\xf2ng thể hiện cho một người chơi."})]}),(0,i.jsx)(f.Z.Item,{children:(0,i.jsx)(y.Z,{children:(0,i.jsx)(C.Z,{title:"Cảnh b\xe1o",description:"Bạn chắc chắn muốn thực hiện điều n\xe0y? C\xe1c t\xe1c vụ đ\xe3 thực hiện sẽ kh\xf4ng thể ho\xe0n t\xe1c!",onConfirm:()=>{t(!0),s.send("request-mainprocess-action",{type:"un_all_friends",data:{ExceptList:c}})},okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(b.ZP,{name:"excute",type:"primary",htmlType:"button",loading:n,children:"Thực hiện"})})})})]})]})}function E(){let[e,n]=(0,r.useState)([!1,!1,!1]),[t,s]=(0,r.useState)(null),[l,c]=(0,r.useState)(null),a=!1;(0,r.useEffect)(()=>{if(!a){a=!0;let{ipcRenderer:e}=window.require("electron");s(e),c(window.require("league-connect"))}},[]);let h=(e,t)=>{n(n=>{let i=[...n];return i[e]=t,i})},o=async()=>{h(1,!0);try{let{authenticate:e,request:n}=l,t=await e(),i=await n({method:"POST",url:"/lol-challenges/v1/update-player-preferences",body:{bannerAccent:"2"}},t);await i.text(),k.ZP.success("Y\xeau cầu được thực hiện")}catch(e){k.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}h(1,!1)},d=async()=>{h(0,!0);try{let{authenticate:e,request:n}=l,t=await e(),i=await n({method:"POST",url:"/lol-challenges/v1/update-player-preferences",body:{challengeIds:[]}},t);await i.text(),k.ZP.success("Y\xeau cầu được thực hiện")}catch(e){k.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}h(0,!1)},u=async()=>{h(2,!0);try{let{authenticate:e,request:n}=l,t=await e(),i=await n({method:"PUT",url:"/lol-regalia/v2/current-summoner/regalia",body:{preferredCrestType:"prestige",preferredBannerType:"lastSeasonHighestRank",selectedPrestigeCrest:33}},t);await i.text(),k.ZP.success("Y\xeau cầu được thực hiện")}catch(e){k.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra")}h(2,!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(Z.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Nơi bao gồm c\xe1c chức năng bạn c\xf3 thể t\xf9y chỉnh ở phần hồ sơ của bạn."]})}),(0,i.jsx)(Z.Z,{title:"Chức năng",style:{marginTop:10},children:(0,i.jsxs)(y.Z,{size:"small",children:[(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:e[0],onClick:d,children:"X\xf3a kỷ vật thử th\xe1ch"}),(0,i.jsx)(C.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi kh\xf4ng c\xf3 khung xếp hạng m\xf9a cũ",onConfirm:o,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:e[1],children:"X\xf3a cờ nền hồ sơ"})}),(0,i.jsx)(C.Z,{title:"Lưu \xfd",description:"Chức năng n\xe0y chỉ d\xe0nh cho người chơi cấp độ 500 trở l\xean",onConfirm:u,okText:"Tiếp tục",cancelText:"Hủy",children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:e[2],children:"X\xf3a khung cấp độ"})})]})})]})}var I=t(6144);let{TextArea:N}=S.default;function q(){let[e]=f.Z.useForm(),[n,t]=(0,r.useState)("none"),[s,l]=(0,r.useState)(!1),[c,a]=(0,r.useState)(null),[h,o]=(0,r.useState)(null),[d,u]=(0,r.useState)(""),g=!1;return(0,r.useEffect)(()=>{if(!g){g=!0;let{ipcRenderer:e}=window.require("electron");a(e),e.on("mainprocess-response",(e,n)=>{l(!1),k.ZP.success(n)}),e.on("mainprocess-response-error",(e,n)=>{l(!1),k.ZP.error(n)})}},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(Z.Z,{size:"small",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Giới thiệu:"})," Chức năng d\xf9ng để chỉnh trạng th\xe1i t\xe0i khoản bao gồm nội dung ở phần trực tuyến v\xe0 khung xếp hạng... cho mục đ\xedch sống ảo."]})}),(0,i.jsxs)(f.Z,{form:e,layout:"vertical",autoComplete:"off",style:{marginTop:10},children:[(0,i.jsx)(f.Z.Item,{label:"Xếp hạng",children:(0,i.jsx)(I.Z,{onChange:e=>t(e),defaultValue:"none",options:[{value:"none",label:"Kh\xf4ng thay đổi"},{value:"CHALLENGER",label:"Th\xe1ch Đấu"},{value:"GRANDMASTER",label:"Đại Cao Thủ"},{value:"MASTER",label:"Cao Thủ"},{value:"DIAMOND",label:"Kim Cương"},{value:"PLATINUM",label:"Bạch Kim"},{value:"GOLD",label:"V\xe0ng"},{value:"SILVER",label:"Bạc"},{value:"IRON",label:"Sắt"}]})}),(0,i.jsxs)(f.Z.Item,{label:"Nội dung ở phần trực tuyến",children:[(0,i.jsx)(N,{rows:4,placeholder:"VD: Hello I am Vy Nghia",value:d,onChange:e=>u(e.target.value)}),(0,i.jsxs)("small",{children:["Độ d\xe0i c\xf3 thể gần như v\xf4 hạn, nội dung phải tu\xe2n thủ theo quy tắc ứng xử của ",(0,i.jsx)("strong",{children:"Riot Games"}),", những nội dung mang hướng kh\xf4ng l\xe0nh mạnh c\xf3 thể sẽ kh\xf4ng được hiển thị."]})]}),(0,i.jsx)(f.Z.Item,{children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",loading:s,onClick:function(){l(!0),c.send("request-mainprocess-action",{type:"change_account_info",data:{RankTier:n,StatusText:d}})},children:"Thực hiện"})})]})]})}var G=t(9231);function H(){let[e]=f.Z.useForm(),[n,t]=(0,r.useState)(!1),[s,l]=(0,r.useState)(""),[c,a]=(0,r.useState)([]),[h,o]=(0,r.useState)(0),[d,u]=(0,r.useState)([]),[g,m]=(0,r.useState)(null),p=!1;(0,r.useEffect)(()=>{if(!p){p=!0;let{ipcRenderer:e}=window.require("electron");m(e),e.on("mainprocess-response-json",(e,n)=>{"false"==n.success?k.ZP.error("Đ\xe3 c\xf3 lỗi xảy ra"):k.ZP.success("Y\xeau cầu đ\xe3 được thực hiện")});let n=async()=>{try{let e=await fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json"),n=await e.json();n.splice(0,1),u(n.map(e=>({id:e.id,name:e.name})))}catch(e){k.ZP.error("Đ\xe3 xảy ra lỗi trong qu\xe1 tr\xecnh lấy danh s\xe1ch tướng")}};n()}},[]);let x=(e,n)=>{let t={kNoRarity:null,kEpic:(0,i.jsx)("img",{width:15,src:"https://vnghia1308.github.io/lcu/web/assets/skin-tiers/epic.png"}),kLegendary:(0,i.jsx)("img",{width:15,src:"https://vnghia1308.github.io/lcu/web/assets/skin-tiers/legendary.png"}),kMythic:(0,i.jsx)("img",{width:15,src:"https://vnghia1308.github.io/lcu/web/assets/skin-tiers/mythic.png"}),kUltimate:(0,i.jsx)("img",{width:15,src:"https://vnghia1308.github.io/lcu/web/assets/skin-tiers/ultimate.png"})};return(0,i.jsxs)(y.Z,{align:"center",children:[t[n],(0,i.jsx)("span",{children:e})]})},j=e=>{g&&g.send("request-mainprocess-action",{type:"change_background",skin_id:e})};return(0,i.jsxs)("div",{children:[(0,i.jsxs)(f.Z,{form:e,layout:"vertical",onFinish:()=>{let e=d.find(e=>e.name.toLowerCase().replace(/\'/g,"")==s.toLowerCase().replace(/\'/g,""));if(!e)return k.ZP.error("Tướng kh\xf4ng tồn tại"),t(!1);o(e.id),fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/vi_vn/v1/champions/".concat(e.id,".json")).then(e=>e.json()).then(e=>{Array.isArray(e.skins)&&(console.log(e.skins),a(e.skins))}).catch(()=>null).then(()=>t(!1))},autoComplete:"off",validateMessages:{required:"${label} kh\xf4ng được trống"},children:[(0,i.jsx)(f.Z.Item,{name:"champion_name",label:"T\xean tướng",rules:[{required:!0},{type:"text",warningOnly:!0}],children:(0,i.jsx)(S.default,{placeholder:"VD: Miss Fortune",value:s,onChange:e=>l(e.target.value)})}),(0,i.jsx)(f.Z.Item,{children:(0,i.jsx)(y.Z,{children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"submit",loading:n,onClick:()=>t(!0),children:"T\xecm kiếm"})})})]}),(0,i.jsx)(v.Z,{itemLayout:"horizontal",dataSource:c,renderItem:(e,n)=>(0,i.jsxs)(v.Z.Item,{children:[(0,i.jsx)(v.Z.Item.Meta,{avatar:(0,i.jsx)(G.C,{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/".concat(h,"/").concat(e.id,".jpg")}),title:x(e.name,e.rarity),description:null==e.description?"Kh\xf4ng c\xf3 giới thiệu":e.description}),(0,i.jsx)("div",{children:(0,i.jsx)(b.ZP,{type:"primary",htmlType:"button",size:"middle",onClick:()=>j(e.id),children:"Chọn"})})]})})]})}let{Header:L,Content:_,Footer:M,Sider:V}=a.default;function D(){let{token:{colorBgContainer:e}}=o.Z.useToken(),[n,t]=(0,r.useState)(!1),[s,y]=(0,r.useState)((0,i.jsx)(H,{})),[b,f]=(0,r.useState)("Đổi nền trang phục"),[k,Z]=(0,r.useState)({type:"warning",message:"Vui l\xf2ng khởi động Li\xean Minh Huyền Thoại để sử dụng chức năng n\xe0y!"}),v=[{key:"1",icon:r.createElement(u.Z),label:"Đổi nền trang phục",onClick:()=>{y((0,i.jsx)(H,{})),f("Đổi nền trang phục")}},{key:"2",icon:r.createElement(m.Z),label:"Hủy kết bạn",onClick:()=>{y((0,i.jsx)(P,{})),f("Hủy kết bạn")}},{key:"3",icon:r.createElement(p.Z),label:"C\xf4ng cụ hồ sơ",onClick:()=>{y((0,i.jsx)(E,{})),f("C\xf4ng cụ hồ sơ")}},{key:"4",icon:r.createElement(g.Z),label:"Trạng th\xe1i t\xe0i khoản",onClick:()=>{y((0,i.jsx)(q,{})),f("Trạng th\xe1i t\xe0i khoản")}},{key:"5",icon:r.createElement(g.Z),label:"Vy Nghia Mods",onClick:()=>{y((0,i.jsx)(w,{})),f("Vy Nghia Mods")}},{key:"999",icon:r.createElement(x.Z),label:"Giới thiệu",onClick:()=>{y((0,i.jsx)(j,{})),f("Giới thiệu")}}];return(0,r.useEffect)(()=>{{localStorage.setItem("summonerConnected","false");let{ipcRenderer:e}=window.require("electron");e.on("mainprocess-response-summoner",(e,n)=>{Z({type:"success",message:(0,i.jsxs)("span",{children:["Đ\xe3 nhận diện được ",(0,i.jsx)("strong",{children:"Li\xean Minh Huyền Thoại"}),", người chơi hiện tại l\xe0 ",(0,i.jsx)("strong",{children:n})]})}),localStorage.setItem("summonerConnected","true")}),e.send("request-mainprocess-action",{type:"request_summoner"})}},[]),l().events.on("menuDisableState",e=>{t(e)}),(0,i.jsx)(a.default,{style:{height:"100vh"},children:(0,i.jsxs)(_,{style:{padding:"10px 30px"},children:[(0,i.jsxs)(c.Z,{style:{margin:"16px 0"},children:[(0,i.jsx)(c.Z.Item,{children:"League Extensions"}),(0,i.jsx)(c.Z.Item,{children:b})]}),(0,i.jsxs)(a.default,{style:{padding:"24px 0",background:e},children:[(0,i.jsx)(V,{style:{background:e},width:200,children:(0,i.jsx)(h.Z,{disabled:n,mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%"},items:v})}),(0,i.jsxs)(_,{style:{padding:"0 24px",minHeight:700},children:[(0,i.jsx)(d.Z,{message:k.message,type:k.type,showIcon:!0}),(0,i.jsx)("div",{className:"features-container",children:s})]})]})]})})}}},function(e){e.O(0,[872,30,971,472,744],function(){return e(e.s=183)}),_N_E=e.O()}]);