
// ── TRANSLATIONS ──────────────────────────────────────────────
const LANGS={
  English:{home:'Home',affiliation:'Affiliation',creator:'Creator',project:'Project',gallery:'Gallery',store:'Merchandise',social:'Social',dashboard:'Dashboard',vault:'Vault',fraction:'Fraction',challenge:'Challenge',myAccount:'My Account',login:'Login',logout:'Logout',loginReg:'🔐 Login / Register',friends:'Friends',addFriend:'Add Friend',chat:'Chat',online:'Online',offline:'Offline',send:'Send',cancel:'Cancel',save:'Save',edit:'Edit',whoWeAre:'Who We Are',whoWeAreDesc:'StarLive Group is a multi-vertical technology and creative conglomerate operating at the intersection of media, technology, education, and culture.',ourMission:'Our five affiliates collaborate under one vision: to light up every corner of the digital universe.',creatorSub:'The minds behind StarLive.',affiliSub:'Our network of partner organizations.',projectSub:'Active initiatives shaping the future of StarLive.',gallerySub:'Visual stories from across the StarLive universe.',storeSub:'Official StarLive merchandise — browse our collection.',socialSub:'Join the StarLive community across all platforms.',loginRequired:'Login required',noFriends:'No friends yet.',startChat:'Start a conversation',complaints:'Complaints & Suggestions',directMsg:'Direct Message to Admin',welcome:'Welcome to StarLive Group!',search:'Search...',vaultTitle:'Vault — Secure Data Storage',vaultSub:'Admin-only access to confidential business data.'},
  Indonesian:{home:'Beranda',affiliation:'Afiliasi',creator:'Kreator',project:'Proyek',gallery:'Galeri',store:'Merchandise',social:'Sosial',dashboard:'Dasbor',vault:'Brankas',fraction:'Fraksi',challenge:'Tantangan',myAccount:'Akun Saya',login:'Masuk',logout:'Keluar',loginReg:'🔐 Masuk / Daftar',friends:'Teman',addFriend:'Tambah Teman',chat:'Obrolan',online:'Online',offline:'Offline',send:'Kirim',cancel:'Batal',save:'Simpan',edit:'Edit',whoWeAre:'Tentang Kami',whoWeAreDesc:'StarLive Group adalah konglomerat teknologi dan kreatif multi-vertikal yang beroperasi di persimpangan media, teknologi, pendidikan, dan budaya.',ourMission:'Lima afiliasi kami berkolaborasi dalam satu visi: menerangi setiap sudut alam semesta digital.',creatorSub:'Pikiran di balik StarLive.',affiliSub:'Jaringan organisasi mitra kami.',projectSub:'Inisiatif aktif membentuk masa depan StarLive.',gallerySub:'Kisah visual dari alam semesta StarLive.',storeSub:'Merchandise resmi StarLive — jelajahi koleksi kami.',socialSub:'Bergabung dengan komunitas StarLive di semua platform.',loginRequired:'Login diperlukan',noFriends:'Belum ada teman.',startChat:'Mulai percakapan',complaints:'Keluhan & Saran',directMsg:'Pesan Langsung ke Admin',welcome:'Selamat datang di StarLive Group!',search:'Cari...',vaultTitle:'Brankas — Penyimpanan Data Aman',vaultSub:'Akses khusus admin untuk data bisnis rahasia.'},
  Japanese:{home:'ホーム',affiliation:'提携',creator:'クリエイター',project:'プロジェクト',gallery:'ギャラリー',store:'Merchandise',social:'ソーシャル',dashboard:'ダッシュボード',vault:'金庫',myAccount:'マイアカウント',login:'ログイン',logout:'ログアウト',loginReg:'🔐 ログイン / 登録',friends:'友達',addFriend:'友達追加',chat:'チャット',online:'オンライン',offline:'オフライン',send:'送信',cancel:'キャンセル',save:'保存',edit:'編集',whoWeAre:'私たちについて',whoWeAreDesc:'StarLive Groupは、メディア、テクノロジー、教育、文化の交差点で活動する多角的なテクノロジー・クリエイティブコングロマリットです。',ourMission:'5つの関連会社が一つのビジョンのもとに協力しています。',creatorSub:'StarLiveを支える人々。',affiliSub:'パートナー組織のネットワーク。',projectSub:'StarLiveの未来を形作るイニシアチブ。',gallerySub:'StarLiveユニバース全体のビジュアルストーリー。',storeSub:'StarLiveオフィシャルグッズ。',socialSub:'全プラットフォームでStarLiveコミュニティに参加。',loginRequired:'ログインが必要です',noFriends:'まだ友達がいません。',startChat:'会話を始める',complaints:'苦情・提案',directMsg:'管理者への直接メッセージ',welcome:'StarLive Groupへようこそ！',search:'検索...',vaultTitle:'金庫 — 安全なデータ保管',vaultSub:'管理者専用の機密ビジネスデータへのアクセス。'},
  Chinese:{home:'主页',affiliation:'联属',creator:'创作者',project:'项目',gallery:'画廊',store:'Merchandise',social:'社交',dashboard:'仪表板',vault:'保险库',myAccount:'我的账户',login:'登录',logout:'登出',loginReg:'🔐 登录 / 注册',friends:'朋友',addFriend:'添加朋友',chat:'聊天',online:'在线',offline:'离线',send:'发送',cancel:'取消',save:'保存',edit:'编辑',whoWeAre:'关于我们',whoWeAreDesc:'StarLive Group是一家多元化科技创意集团，活跃于媒体、技术、教育和文化的交汇处。',ourMission:'我们的五个附属机构在同一愿景下合作：照亮数字宇宙的每个角落。',creatorSub:'StarLive背后的思想。',affiliSub:'我们的合作伙伴网络。',projectSub:'塑造StarLive未来的主动性。',gallerySub:'来自StarLive宇宙的视觉故事。',storeSub:'StarLive官方周边。',socialSub:'在所有平台加入StarLive社区。',loginRequired:'需要登录',noFriends:'还没有朋友。',startChat:'开始对话',complaints:'投诉与建议',directMsg:'直接发消息给管理员',welcome:'欢迎来到StarLive Group！',search:'搜索...',vaultTitle:'保险库 — 安全数据存储',vaultSub:'管理员专用的机密业务数据访问。'},
  Korean:{home:'홈',affiliation:'제휴',creator:'크리에이터',project:'프로젝트',gallery:'갤러리',store:'Merchandise',social:'소셜',dashboard:'대시보드',vault:'금고',myAccount:'내 계정',login:'로그인',logout:'로그아웃',loginReg:'🔐 로그인 / 회원가입',friends:'친구',addFriend:'친구 추가',chat:'채팅',online:'온라인',offline:'오프라인',send:'전송',cancel:'취소',save:'저장',edit:'편집',whoWeAre:'회사 소개',whoWeAreDesc:'StarLive Group은 미디어, 기술, 교육, 문화의 교차점에서 운영되는 다각적 기술·창의 기업입니다.',ourMission:'5개의 계열사가 하나의 비전으로 협력합니다.',creatorSub:'StarLive를 이끄는 사람들.',affiliSub:'파트너 조직 네트워크.',projectSub:'StarLive의 미래를 형성하는 이니셔티브.',gallerySub:'StarLive 유니버스의 시각적 이야기.',storeSub:'StarLive 공식 상품.',socialSub:'모든 플랫폼에서 StarLive 커뮤니티에 참여하세요.',loginRequired:'로그인 필요',noFriends:'아직 친구가 없습니다.',startChat:'대화 시작',complaints:'불만 및 제안',directMsg:'관리자에게 직접 메시지',welcome:'StarLive Group에 오신 것을 환영합니다!',search:'검색...',vaultTitle:'금고 — 안전한 데이터 저장소',vaultSub:'관리자 전용 기밀 비즈니스 데이터 접근.'},
  German:{home:'Startseite',affiliation:'Partner',creator:'Ersteller',project:'Projekt',gallery:'Galerie',store:'Merchandise',social:'Sozial',dashboard:'Dashboard',vault:'Tresor',myAccount:'Mein Konto',login:'Anmelden',logout:'Abmelden',loginReg:'🔐 Anmelden / Registrieren',friends:'Freunde',addFriend:'Freund hinzufügen',chat:'Chat',online:'Online',offline:'Offline',send:'Senden',cancel:'Abbrechen',save:'Speichern',edit:'Bearbeiten',whoWeAre:'Über uns',whoWeAreDesc:'StarLive Group ist ein diversifizierter Technologie- und Kreativkonzern an der Schnittstelle von Medien, Technologie, Bildung und Kultur.',ourMission:'Unsere fünf Tochtergesellschaften arbeiten zusammen, um jeden Winkel des digitalen Universums zu erhellen.',creatorSub:'Die Köpfe hinter StarLive.',affiliSub:'Unser Netzwerk von Partnerorganisationen.',projectSub:'Aktive Initiativen, die die Zukunft von StarLive gestalten.',gallerySub:'Visuelle Geschichten aus dem StarLive-Universum.',storeSub:'Offizielle StarLive-Merchandise.',socialSub:'Treten Sie der StarLive-Community auf allen Plattformen bei.',loginRequired:'Anmeldung erforderlich',noFriends:'Noch keine Freunde.',startChat:'Gespräch beginnen',complaints:'Beschwerden & Vorschläge',directMsg:'Direktnachricht an Admin',welcome:'Willkommen bei StarLive Group!',search:'Suchen...',vaultTitle:'Tresor — Sicherer Datenspeicher',vaultSub:'Nur-Admin-Zugriff auf vertrauliche Geschäftsdaten.'},
};

// ── THEMES ────────────────────────────────────────────────────
const TH={
  cyber:{name:"Cyber Serenity",bg:"linear-gradient(135deg,#1a1208,#0d1a14,#0a1520)",sb:"rgba(0,255,200,0.15)",ac:"#00ffc8",as:"rgba(0,255,200,0.12)",tx:"#f0e8d8",tm:"#a89878",cb:"rgba(20,30,25,0.76)",bl:"blur(14px)",nab:"rgba(0,255,200,0.12)",nat:"#00ffc8",bb:"rgba(0,255,200,0.15)",bc:"#00ffc8",bt:"#00ffc8",ib:"rgba(0,255,200,0.06)",sh:"0 4px 22px rgba(0,255,200,0.07)",tb:"rgba(0,255,200,0.1)",tt:"#00ffc8",sur:"rgba(0,255,200,0.04)",mm:"rgba(0,255,200,0.18)",mo:"rgba(255,255,255,0.07)"},
  inst:{name:"Future Tech",bg:"linear-gradient(135deg,#001830,#002a5a,#001020)",sb:"rgba(250,183,21,0.26)",ac:"#FAB715",as:"rgba(250,183,21,0.12)",tx:"#e8f0ff",tm:"#7a9cc8",cb:"rgba(0,20,50,0.78)",bl:"blur(12px)",nab:"rgba(250,183,21,0.12)",nat:"#FAB715",bb:"rgba(250,183,21,0.14)",bc:"#FAB715",bt:"#FAB715",ib:"rgba(0,95,172,0.12)",sh:"0 4px 22px rgba(0,95,172,0.14)",tb:"rgba(250,183,21,0.1)",tt:"#FAB715",sur:"rgba(250,183,21,0.04)",mm:"rgba(250,183,21,0.18)",mo:"rgba(255,255,255,0.06)"},
  gold:{name:"Golden Zone",bg:"linear-gradient(135deg,#1a0f00,#2a1500,#0a1020)",sb:"rgba(250,183,21,0.2)",ac:"#FAB715",as:"rgba(250,183,21,0.13)",tx:"#fef0c8",tm:"#b8900a",cb:"rgba(25,15,0,0.78)",bl:"blur(14px)",nab:"rgba(250,183,21,0.13)",nat:"#FAB715",bb:"rgba(250,183,21,0.17)",bc:"#FAB715",bt:"#FAB715",ib:"rgba(250,183,21,0.07)",sh:"0 4px 22px rgba(250,183,21,0.07)",tb:"rgba(250,183,21,0.1)",tt:"#FAB715",sur:"rgba(250,183,21,0.05)",mm:"rgba(250,183,21,0.18)",mo:"rgba(255,255,255,0.05)"},
};

// ── STATE ─────────────────────────────────────────────────────
const S={theme:'cyber',season:'Autumn',lang:'English',bgP:0,fx:false,loggedIn:false,isAdmin:false,user:null,page:'home',sopen:true,spopen:false,cpopen:false,crtSel:null,usrSel:null,tuAmt:'',atab:'login',aerr:'',aform:{email:'',password:'',username:'',cp:''},stab:'theme',customBg:null,slidx:0,slTimer:null,dtab:'analytics',chatRoom:null,chatTarget:null,chatDraft:{},chatTab:'friends',vaultQ:'',vaultTab:'home',fracPageTab:'info',_cb:{},_pimgid:null,_ecid:null,_ecf:null,_prodEditId:null,fracExamAnswers:{},fracExamStep:0,challTab:'browse',challEditId:null,challTakeId:null,dashTab2:'users',pageViews:{}};

// ── STATIC DATA ───────────────────────────────────────────────
const CDEF=[
  {id:1,name:"Danny Aulia",role:"Administrator",hobby:"1. Playing Games","2. Read Books ",bio:"Full-stack architect with 8 years building scalable systems.",education:"B.Sc Computer Science — MIT (2015)\nM.Sc Software Engineering — Stanford (2017)",fraction:"Zenith Prime Labs",achievements:"🏆 Best Developer Award 2023\n🥇 Hackathon Champion — DevFest Asia\n📜 Google Cloud Certified",images:["👨‍💻"],tags:["React","Node.js","Rust"],photo:null,cvUrl:null,email:"aiden@starlive.com",phone:"+62 812 0001"},
  {id:2,name:"Said Hasan Hanafiah",role:"Inspector",hobby:"Watercolor & tea ceremony",bio:"Visual storyteller blending Japanese aesthetics with futuristic design.",education:"B.A Design — Kyoto University (2018)\nExchange — Parsons NYC (2019)",fraction:"Nova Creative Studio",achievements:"🎨 Red Dot Design Award 2023\n✨ UX Pioneer — Figma Community",images:["👩‍🎨"],tags:["Figma","Motion","3D"],photo:null,cvUrl:null,email:"yuki@starlive.com",phone:"+62 812 0002"},
  {id:3,name:"Noah Von Nobelius",role:"Interceptor",hobby:"Chess & astrophotography",bio:"Systems thinker who loves elegant algorithms.",education:"B.Sc IT — NUS (2016)\nM.Sc Data Science — HKUST (2018)",fraction:"Zenith Prime Labs",achievements:"♟️ National Chess Champion U-25\n🔭 Astrophotography Award",images:["👨‍🔬"],tags:["Python","Go","PostgreSQL"],photo:null,cvUrl:null,email:"marcus@starlive.com",phone:"+62 812 0003"},
  {id:4,name:"Lumina Stellaris",role:"Innovator",hobby:"K-drama & digital illustration",bio:"Bridges the gap between art and strategy.",education:"B.F.A — Hongik University (2017)\nMBA — Seoul National University (2020)",fraction:"Nova Creative Studio",achievements:"🎬 Best Creative Director — MediaAsia 2023\n🌠 Cannes Lions 2022",images:["👩‍💼"],tags:["Branding","Art Direction","Video"],photo:null,cvUrl:null,email:"sora@starlive.com",phone:"+62 812 0004"},
  {id:5,name:"Arvian Raveindra Pradana",role:"Navigator",hobby:"Hiking & piano",bio:"Turns raw data into actionable insights.",education:"B.Sc Statistics — TU Munich (2017)\nPh.D ML — ETH Zurich (2021)",fraction:"Zenith Prime Labs",achievements:"🤖 Best ML Paper — NeurIPS 2022\n📊 Kaggle Winner ×3",images:["👩‍🔬"],tags:["Python","TensorFlow","D3.js"],photo:null,cvUrl:null,email:"lena@starlive.com",phone:"+62 812 0005"},
];
const PDEF=[
  {id:1,name:"SCRPS 26",desc:"Next-gen streaming infrastructure for real-time content delivery.",team:["Danny Aulia","Arvian Raveindra Pradana","Lumina Stellaris"],progress:78,budget:450000,status:"Active",tags:["Streaming","SE Asia"],image:null},
  {id:2,name:"SCVAL 25",desc:"AI-powered creative suite for digital artists.",team:["Danny Aulia","Noah Von Nobelius"],progress:55,budget:280000,status:"In Development",tags:["AI","Creative"],image:null},
  {id:3,name:"SRAPID 25",desc:"Unified analytics aggregating social media performance.",team:["Danny Aulia","Said Hasan Hanafiah"],progress:100,budget:0,status:"Completed",tags:["JavaScript","Gemini"],image:null},
  {id:4,name:"SLENS 25",desc:"E-commerce backbone powering StarLive Store.",team:["Danny Aulia","Said Hasan Hanafiah"],progress:40,budget:320000,status:"Planning",tags:["E-commerce","AR"],image:null},
];
const GALDEF=[
  {id:1,type:"image",emoji:"🌌",title:"AI Basic Course 2026",cat:"Event",mediaUrl:null},
  {id:2,type:"image",emoji:"🎨",title:"OSINT Basic Course 2026",cat:"Product",mediaUrl:null},
  {id:3,type:"video",emoji:"🎬",title:"SRAPID 26",cat:"Media",mediaUrl:null},
  {id:4,type:"image",emoji:"🏙️",title:"Cyber Office Tour",cat:"BTS",mediaUrl:null},
  {id:5,type:"image",emoji:"🌸",title:"Spring Festival 2025",cat:"Event",mediaUrl:null},
  {id:6,type:"video",emoji:"🎵",title:"Creator Showcase Reel",cat:"Media",mediaUrl:null},
];
const PRODDEF=[
  {id:1,name:"StarLight Hoodie",price:85,e:"👕",cat:"Apparel",desc:"Premium cyber-aesthetic hoodie",stock:50,image:null},
  {id:2,name:"Creator Pack",price:149,e:"📦",cat:"Bundle",desc:"Complete digital creator toolkit",stock:30,image:null},
  {id:3,name:"Glow Mug",price:28,e:"☕",cat:"Accessories",desc:"Heat-reactive constellation mug",stock:100,image:null},
  {id:4,name:"StarPad Pro",price:220,e:"🖱️",cat:"Hardware",desc:"XL desk pad with wireless charging",stock:20,image:null},
  {id:5,name:"Digitalent Handbook",price:12,e:"📕",cat:"Digital",desc:"Behind-the-scenes digital magazine",stock:999,image:null},
  {id:6,name:"Galaxy Pin Set",price:35,e:"📌",cat:"Accessories",desc:"Set of 5 enamel affiliate pins",stock:75,image:null},
];
const AFFIL=[
  {id:1,n:"Polaris Academy",ic:"⭐",d:"Elite training hub for creative professionals.",c:"#4fc3f7",url:"https://example.com/polaris"},
  {id:2,n:"Zenith Prime Labs",ic:"🧪",d:"R&D wing focused on next-gen technology.",c:"#81c784",url:"https://example.com/zenith"},
  {id:3,n:"Solstice Media Info",ic:"📡",d:"Media broadcasting and information platform.",c:"#ffb74d",url:"https://example.com/solstice"},
  {id:4,n:"Nova Creative Studio",ic:"🎨",d:"Creative visual design and multimedia.",c:"#f06292",url:"https://example.com/nova"},
  {id:5,n:"Stellaris Lounge",ic:"🛋️",d:"Business for Community Hub.",c:"#ce93d8",url:"https://example.com/stellaris"},
];
const SLIDES=[{e:"🌌",l:"Nebula Conference 2025",bg:"linear-gradient(135deg,#0d0020,#1a0040)"},{e:"🎨",l:"NeoCanvas Launch",bg:"linear-gradient(135deg,#200010,#400030)"},{e:"🏙️",l:"StarLive Cyber HQ",bg:"linear-gradient(135deg,#001a20,#003040)"},{e:"🌸",l:"Spring Creator Festival",bg:"linear-gradient(135deg,#200a00,#402000)"},{e:"🤖",l:"AI Lab Grand Opening",bg:"linear-gradient(135deg,#001020,#002040)"},{e:"✨",l:"Awards Gala Night 2024",bg:"linear-gradient(135deg,#1a1000,#302000)"}];
const NAV=[{id:"home",lk:"home",i:"🏠"},{id:"affiliation",lk:"affiliation",i:"🤝"},{id:"creator",lk:"creator",i:"👨‍💻"},{id:"project",lk:"project",i:"🚀"},{id:"gallery",lk:"gallery",i:"🖼️"},{id:"social",lk:"social",i:"🌐"},{id:"store",lk:"store",i:"🛍️",locked:true},{id:"fraction",lk:"fraction",i:"🔱",locked:true},{id:"challenge",lk:"challenge",i:"🏆",locked:true},{id:"dashboard",lk:"dashboard",i:"📊",admin:true},{id:"vault",lk:"vault",i:"🔐",admin:true}];
const DA=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MA=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const AX={};
// ── HELPERS ───────────────────────────────────────────────────
const t=()=>TH[S.theme];
function el(tag,props={},...ch){const e=document.createElement(tag);for(const[k,v]of Object.entries(props)){if(k==='style'&&typeof v==='object')Object.assign(e.style,v);else if(k==='class')e.className=v;else if(k.startsWith('on'))e[k]=v;else e.setAttribute(k,v);}ch.flat().forEach(c=>{if(c==null||c===false)return;e.appendChild(typeof c==='string'||typeof c==='number'?document.createTextNode(String(c)):c);});return e;}
function gc(sty={},...ch){const q=t();return el('div',{class:'gc',style:{background:q.cb,backdropFilter:q.bl,border:`1px solid ${q.sb}`,boxShadow:q.sh,...sty}},...ch);}
function btn(tx,fn,ol=false,sty={}){const q=t();return el('button',{class:'btn',style:{background:ol?'transparent':q.bb,borderColor:q.bc,color:q.bt,...sty},onclick:fn},tx);}
function tg(tx){const q=t();return el('span',{class:'tbadge',style:{background:q.tb,color:q.tt,borderColor:q.sb}},tx);}
function pb(v){const q=t();const r=el('div',{class:'pt'});r.appendChild(el('div',{class:'pf',style:{width:v+'%',background:q.ac}}));return r;}
function closeM(id){document.getElementById(id).style.display='none';}
function moc(e,id){if(e.target===document.getElementById(id))closeM(id);}
function rf(file){return new Promise(r=>{const rd=new FileReader();rd.onload=e=>r(e.target.result);rd.readAsDataURL(file);});}
function ago(iso){const d=(Date.now()-new Date(iso).getTime())/1000;if(d<60)return 'just now';if(d<3600)return Math.floor(d/60)+'m ago';if(d<86400)return Math.floor(d/3600)+'h ago';return Math.floor(d/86400)+'d ago';}
function fdate(iso){const d=new Date(iso);return `${d.getDate()} ${MA[d.getMonth()]} ${d.getFullYear()}`;}
function roomId(a,b){return [a,b].sort().join('__');}
function avEl(u,sz=38){const q=t();if(u&&u.avatar)return el('img',{src:u.avatar,style:{width:sz+'px',height:sz+'px',borderRadius:'50%',objectFit:'cover',border:`2px solid ${q.ac}`,flexShrink:'0'}});return el('div',{style:{width:sz+'px',height:sz+'px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:sz*.38+'px',background:q.as,border:`2px solid ${q.sb}`,flexShrink:'0',color:q.ac}},u?u.username[0].toUpperCase():'?');}


// ── THEME APPLICATION ─────────────────────────────────────────
function applyTheme(){
  const q=t();document.body.style.background=q.bg;document.body.style.color=q.tx;
  const g=document.getElementById('gbg');g.style.cssText=`position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.2;background-image:linear-gradient(${q.sb} 1px,transparent 1px),linear-gradient(90deg,${q.sb} 1px,transparent 1px);background-size:40px 40px`;
  const sb=document.getElementById('sidebar');sb.style.background=q.cb;sb.style.backdropFilter=q.bl;sb.style.borderRight=`1px solid ${q.sb}`;
  ['sbl','map','aio','aarea'].forEach(id=>{const e=document.getElementById(id);if(e)e.style.borderColor=q.sb;});
  const ln=document.getElementById('ln');if(ln)ln.style.color=q.ac;
  const st=document.getElementById('stgl');if(st)st.style.color=q.tm;
  const sf=document.getElementById('sfbtn');if(sf){sf.style.background=q.cb;sf.style.backdropFilter=q.bl;sf.style.borderColor=q.ac;sf.style.boxShadow=`0 0 16px ${q.as}`;}
  const cf=document.getElementById('cfbtn');if(cf){cf.style.background=q.cb;cf.style.backdropFilter=q.bl;cf.style.borderColor=q.sb;}
  const cw=document.getElementById('cwt');if(cw)cw.style.color=q.ac;
  updateSBAcct();renderNav();renderAuth();updateClock();
}
function updateSBAcct(){
  const q=t();const sav=document.getElementById('sav');const sun=document.getElementById('sun');const sur=document.getElementById('sur');const sod=document.getElementById('sod');
  if(sav){sav.style.borderColor=q.ac;sav.style.background=q.as;sav.innerHTML='';}
  if(S.loggedIn&&S.user){const u=S.user;if(sav){if(u.avatar){const img=el('img',{src:u.avatar,style:{width:'100%',height:'100%',objectFit:'cover'}});sav.appendChild(img);}else{sav.textContent=u.username[0].toUpperCase();sav.style.color=q.ac;}}if(sun){sun.textContent=u.username;sun.style.color=q.tx;}if(sur){sur.textContent=S.isAdmin?'👑 Admin':'👤 User';sur.style.color=q.ac;}if(sod)sod.style.display='block';}
  else{if(sav){sav.textContent='👤';sav.style.color=q.tm;}if(sun){sun.textContent='Not logged in';sun.style.color=q.tm;}if(sur){sur.textContent='Click to login';sur.style.color=q.ac;}if(sod)sod.style.display='none';}
}
function handleMyAcct(){if(!S.loggedIn){openAuthM();return;}goTo('myaccount');}

// ── NOTIF ─────────────────────────────────────────────────────
function notif(msg,type='info'){const q=t();const bar=document.getElementById('notifbar');const c={info:{bg:q.as,bc:q.ac,cl:q.ac},error:{bg:'rgba(255,60,60,.12)',bc:'#f44',cl:'#f88'},success:{bg:'rgba(80,220,80,.1)',bc:'#64dc64',cl:'#64dc64'}}[type]||{bg:q.as,bc:q.ac,cl:q.ac};const item=el('div',{class:'nitem',style:{background:c.bg,borderColor:c.bc,color:c.cl,backdropFilter:q.bl}},msg);bar.appendChild(item);setTimeout(()=>{item.style.opacity='0';item.style.transition='opacity .4s';setTimeout(()=>item.remove(),400);},3200);}

// ── NAVIGATE ──────────────────────────────────────────────────
function goTo(pid){
  S.page=pid;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('page-'+pid);
  if(pg){pg.classList.add('active');}
  rPage();renderNav();closePanels();
}
function rPage(){
  DB.recordPageView(S.page);
  const map={home:rHome,affiliation:rAffil,creator:rCreators,profile:rProfile,project:rProjects,gallery:rGallery,store:rStore,social:rSocial,dashboard:rDash,myaccount:rMyAcct,userprofile:rUserProfile,vault:rVault,fraction:rFraction,challenge:rChallenge};
  const fn=map[S.page];if(fn)fn();
}
function closePanels(){S.spopen=false;S.cpopen=false;document.getElementById('spbox').style.display='none';document.getElementById('cpbox').style.display='none';}
function onMC(){closePanels();}


function T(k){return (LANGS[S.lang]||LANGS.English)[k]||k;}
// ── SUPABASE CLIENT ───────────────────────────────────────────
const SUPABASE_URL = 'https://tcpdaozlggnmlinqenkw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_n7ppL6YuOKuqVDSW4f_GxQ_e3DRC5Ni';
const supa = window.supabase ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// ── SECURITY MODULE ────────────────────────────────────────────
const SEC = {
  // ── Rate limiting (client-side, soft guard) ──
  _attempts: {},
  rateLimit(key, maxAttempts=5, windowMs=15*60*1000) {
    const now = Date.now();
    if (!this._attempts[key]) this._attempts[key] = [];
    // Remove old attempts outside window
    this._attempts[key] = this._attempts[key].filter(t => now - t < windowMs);
    if (this._attempts[key].length >= maxAttempts) {
      const wait = Math.ceil((this._attempts[key][0] + windowMs - now) / 60000);
      return { blocked: true, msg: `Terlalu banyak percobaan. Coba lagi dalam ${wait} menit.` };
    }
    this._attempts[key].push(now);
    return { blocked: false };
  },
  clearRate(key) { delete this._attempts[key]; },

  // ── Input sanitization ──
  sanitize(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  },
  // Strip HTML tags completely
  strip(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/<[^>]*>/g, '').trim();
  },
  // Validate that a string is safe for display (no script injection)
  isSafe(str) {
    if (typeof str !== 'string') return false;
    const dangerous = /<script|javascript:|data:|vbscript:|on\w+\s*=/i;
    return !dangerous.test(str);
  },

  // ── OTP token validation ──
  isValidOTP(token) {
    return typeof token === 'string' && /^\d{6}$/.test(token.trim());
  },

  // ── Session integrity check ──
  checkSessionIntegrity() {
    if (!S.loggedIn || !S.user) return true;
    // Verify critical fields exist
    if (!S.user.id || !S.user.username) {
      console.warn('Session integrity check failed — forcing logout');
      S.loggedIn = false; S.user = null; S.isAdmin = false;
      renderNav(); renderAuth();
      return false;
    }
    return true;
  },

  // ── Prevent clickjacking (belt-and-suspenders) ──
  init() {
    // Block if embedded in iframe
    if (window.top !== window.self) {
      document.body.innerHTML = '<div style="padding:40px;text-align:center;color:#f44">⚠️ Akses tidak diizinkan dalam iframe.</div>';
      return false;
    }
    // Periodic session integrity check every 5 minutes
    setInterval(() => this.checkSessionIntegrity(), 5 * 60 * 1000);
    return true;
  }
};



// ── SUPABASE STORAGE HELPERS ───────────────────────────────────
async function uploadFile(bucket, path, file) {
  if (!supa) return null;
  const { error } = await supa.storage.from(bucket).upload(path, file, { upsert: true });
  if (error) { console.error('Upload error:', error); return null; }
  const { data } = supa.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
async function uploadAvatar(file) {
  const ext = file.name.split('.').pop();
  const path = `${S.user.id}/avatar.${ext}`;
  return uploadFile('avatars', path, file);
}
async function uploadCover(file) {
  const ext = file.name.split('.').pop();
  const path = `${S.user.id}/cover.${ext}`;
  return uploadFile('avatars', path, file);
}
async function uploadGalleryFile(file) {
  const ext = file.name.split('.').pop();
  const path = `${Date.now()}_${S.user?.id || 'anon'}.${ext}`;
  return uploadFile('gallery', path, file);
}
async function uploadVaultFile(file, code) {
  const ext = file.name.split('.').pop();
  const path = `vault/${code}_${Date.now()}.${ext}`;
  return uploadFile('vault', path, file);
}

// ── DB (Supabase) ──────────────────────────────────────────────
// ── SIMPLE DATA CACHE ─────────────────────────────────────────
// Avoids re-hitting Supabase on every page navigation for data that
// rarely changes. Cache is invalidated automatically by the relevant
// add/update/delete calls, and also expires after CACHE_TTL as a safety net.
const CACHE_TTL = 30000; // 30s
const _cache = {};
function cacheGet(key) {
  const hit = _cache[key];
  if (!hit) return undefined;
  if (Date.now() - hit.t > CACHE_TTL) { delete _cache[key]; return undefined; }
  return hit.v;
}
function cacheSet(key, v) { _cache[key] = { v, t: Date.now() }; }
function cacheClear(key) { delete _cache[key]; }

const DB = {
  // ── USERS / PROFILES ──────────────────────────────────────
  async getUsers() {
    if (!supa) return [];
    const cached = cacheGet('users');
    if (cached) return cached;
    const { data } = await supa.from('profiles').select('*');
    const out = (data||[]).map(u=>({...u, friendRequests: u.friend_reqs||[], avatar: u.avatar_url, cover: u.cover_url}));
    cacheSet('users', out);
    return out;
  },
  async byId(id) {
    if (!supa) return null;
    const { data } = await supa.from('profiles').select('*').eq('id', id).single();
    return data ? {...data, friendRequests: data.friend_reqs||[], avatar: data.avatar_url, cover: data.cover_url} : null;
  },
  async byEmail(email) {
    // For compatibility — look up via metadata stored in profile
    if (!supa) return null;
    const { data } = await supa.from('profiles').select('*').eq('email', email).maybeSingle();
    return data ? {...data, friendRequests: data.friend_reqs||[], avatar: data.avatar_url, cover: data.cover_url} : null;
  },
  async updUser(id, updates) {
    if (!supa) return;
    // Map old field names to new schema
    const mapped = {};
    if (updates.avatar !== undefined) mapped.avatar_url = updates.avatar;
    if (updates.cover !== undefined) mapped.cover_url = updates.cover;
    if (updates.online !== undefined) mapped.online = updates.online;
    if (updates.lastSeen !== undefined) mapped.last_seen = updates.lastSeen;
    if (updates.badges !== undefined) mapped.badges = updates.badges;
    if (updates.friends !== undefined) mapped.friends = updates.friends;
    if (updates.friendRequests !== undefined) mapped.friend_reqs = updates.friendRequests;
    if (updates.bio !== undefined) mapped.bio = updates.bio;
    if (updates.fraction !== undefined) mapped.fraction = updates.fraction;
    if (updates.fracExamDone !== undefined) mapped.frac_exam_done = updates.fracExamDone;
    if (updates.fracResult !== undefined) mapped.frac_result = updates.fracResult;
    // Pass remaining fields directly
    Object.keys(updates).forEach(k => {
      if (!['avatar','cover','online','lastSeen','badges','friends','friendRequests','bio','fraction','fracExamDone','fracResult'].includes(k))
        mapped[k] = updates[k];
    });
    const { error } = await supa.from('profiles').update(mapped).eq('id', id);
    if (error) console.error('updUser:', error);
    cacheClear('users');
    // Refresh S.user if updating self
    if (S.user && S.user.id === id) {
      Object.assign(S.user, updates);
      if (updates.avatar) S.user.avatar_url = updates.avatar;
      if (updates.cover) S.user.cover_url = updates.cover;
    }
  },

  // ── CREATORS ──────────────────────────────────────────────
  async getCreators() {
    if (!supa) return JSON.parse(JSON.stringify(CDEF));
    const cached = cacheGet('creators');
    if (cached) return cached;
    const { data } = await supa.from('creators').select('*').order('name');
    const out = (data && data.length) ? data.map(c=>({...c,photo:c.photo_url,cover:c.cover_url})) : JSON.parse(JSON.stringify(CDEF));
    cacheSet('creators', out);
    return out;
  },
  async updCreator(id, updates) {
    if (!supa) return;
    const mapped = {...updates};
    if (updates.photo) mapped.photo_url = updates.photo;
    if (updates.cover) mapped.cover_url = updates.cover;
    await supa.from('creators').update(mapped).eq('id', id);
    cacheClear('creators');
  },
  async addCreator(creator) {
    if (!supa) return;
    const mapped = {...creator, photo_url: creator.photo, cover_url: creator.cover};
    delete mapped.photo; delete mapped.cover;
    const { data } = await supa.from('creators').insert(mapped).select().single();
    cacheClear('creators');
    return data;
  },
  async delCreator(id) {
    if (!supa) return;
    await supa.from('creators').delete().eq('id', id);
    cacheClear('creators');
  },

  // ── PROJECTS ──────────────────────────────────────────────
  async getProjects() {
    if (!supa) return JSON.parse(JSON.stringify(PDEF));
    const cached = cacheGet('projects');
    if (cached) return cached;
    const { data } = await supa.from('projects').select('*').order('created_at', {ascending:false});
    const out = (data && data.length) ? data : JSON.parse(JSON.stringify(PDEF));
    cacheSet('projects', out);
    return out;
  },
  async updProject(id, updates) {
    if (!supa) return;
    await supa.from('projects').update(updates).eq('id', id);
    cacheClear('projects');
  },
  async addProject(proj) {
    if (!supa) return;
    const { data } = await supa.from('projects').insert(proj).select().single();
    cacheClear('projects');
    return data;
  },

  // ── GALLERY ───────────────────────────────────────────────
  async getGallery() {
    if (!supa) return JSON.parse(JSON.stringify(GALDEF));
    const cached = cacheGet('gallery');
    if (cached) return cached;
    const { data } = await supa.from('gallery').select('*').order('created_at',{ascending:false});
    const out = (data && data.length) ? data.map(g=>({...g,mediaUrl:g.url,type:g.type||'image',title:g.caption||'',cat:g.category||'Event'})) : JSON.parse(JSON.stringify(GALDEF));
    cacheSet('gallery', out);
    return out;
  },
  async addGallery(item) {
    if (!supa) return;
    const row = {url:item.mediaUrl||item.url, type:item.type||'image', caption:item.title||item.caption||'', category:item.cat||'Event', uploader_id:S.user?.id};
    const { data } = await supa.from('gallery').insert(row).select().single();
    cacheClear('gallery');
    return data;
  },
  async deleteGallery(id) {
    if (!supa) return;
    await supa.from('gallery').delete().eq('id', id);
    cacheClear('gallery');
  },
  saveGallery(){}, // no-op (compatibility)

  // ── PRODUCTS ──────────────────────────────────────────────
  async getProducts() {
    if (!supa) return JSON.parse(JSON.stringify(PRODDEF));
    const cached = cacheGet('products');
    if (cached) return cached;
    const { data } = await supa.from('products').select('*').order('name');
    const out = (data && data.length) ? data.map(p=>({...p,image:p.image_url,desc:p.desc||p.description||''})) : JSON.parse(JSON.stringify(PRODDEF));
    cacheSet('products', out);
    return out;
  },
  async updProduct(id, updates) {
    if (!supa) return;
    const mapped = {...updates};
    if (updates.image) mapped.image_url = updates.image;
    await supa.from('products').update(mapped).eq('id', id);
    cacheClear('products');
  },
  async addProduct(prod) {
    if (!supa) return;
    const row = {name:prod.name, price:prod.price, stock:prod.stock, category:prod.cat||prod.category, desc:prod.desc, image_url:prod.image||prod.imageUrl};
    const { data } = await supa.from('products').insert(row).select().single();
    cacheClear('products');
    return data;
  },
  async deleteProduct(id) {
    if (!supa) return;
    await supa.from('products').delete().eq('id', id);
    cacheClear('products');
  },
  saveProducts(){}, // no-op

  // ── CHAT MESSAGES ─────────────────────────────────────────
  async getMsgs(room, limit=100) {
    if (!supa) return [];
    const { data } = await supa.from('messages').select('*, sender:profiles(id,username,avatar_url)').eq('room', room).order('created_at',{ascending:true}).limit(limit);
    return (data||[]).map(msg=>{
      let text=msg.content, img=null;
      if (typeof msg.content === 'string' && msg.content.startsWith('__IMG__')) {
        try { const p=JSON.parse(msg.content.slice(7)); img=p.img; text=p.text||''; } catch(e) { /* fall back to raw content */ }
      }
      return {...msg, text, img, userEmail:msg.sender?.id, username:msg.sender?.username, avatar:msg.sender?.avatar_url, time:msg.created_at};
    });
  },
  async addMsg(room, msg) {
    if (!supa) return;
    const content = msg.img ? '__IMG__'+JSON.stringify({img:msg.img,text:msg.text||''}) : (msg.text||msg.content);
    await supa.from('messages').insert({room, sender_id: S.user.id, content});
  },
  async markMsgsRead(room, meId) {
    if (!supa) return;
    try { await supa.from('messages').update({read:true}).eq('room', room).neq('sender_id', meId); }
    catch (e) { console.warn('markMsgsRead:', e); }
  },

  // ── GLOBAL FRACTION CHAT ──────────────────────────────────
  async getGlobalFracChat(limit=200, room='global_fraction') {
    if (!supa) return [];
    const { data } = await supa.from('messages').select('*, sender:profiles(id,username,avatar_url,fraction)').eq('room', room).order('created_at',{ascending:true}).limit(limit);
    return (data||[]).map(msg=>({...msg, text:msg.content, userEmail:msg.sender?.id, username:msg.sender?.username, fraction:msg.sender?.fraction, time:msg.created_at}));
  },
  async addFracChatMsg(msg) {
    if (!supa) return;
    const room = msg.channel === 'fraction' ? 'fraction_' + (msg.fraction||'').replace(/ /g,'_').toLowerCase() : 'global_fraction';
    await supa.from('messages').insert({
      room, sender_id:S.user.id, content:msg.text,
      metadata: JSON.stringify({username:msg.username, fraction:msg.fraction, channel:msg.channel||'global'})
    });
  },

  // ── ADMIN MESSAGES ────────────────────────────────────────
  async getAdminMsgs() {
    if (!supa) return [];
    const { data } = await supa.from('admin_messages').select('*, from:profiles(username)').order('created_at',{ascending:false});
    return (data||[]).map(m=>({...m, fromUsername:m.from?.username, text:m.content}));
  },
  async addAdminMsg(msg) {
    if (!supa) return;
    await supa.from('admin_messages').insert({from_id:S.user.id, type:msg.type||'complaint', content:msg.text||msg.content});
  },
  async updAdminMsg(id, updates) {
    if (!supa) return;
    await supa.from('admin_messages').update(updates).eq('id', id);
  },

  // ── TOP-UP REQUESTS ───────────────────────────────────────
  async getTopUpReqs() {
    if (!supa) return [];
    const isAdmin = S.isAdmin;
    let q = supa.from('topup_requests').select('*, user:profiles(username,wallet,id)').order('created_at',{ascending:false});
    if (!isAdmin) q = q.eq('user_id', S.user?.id);
    const { data } = await q;
    return (data||[]).map(r=>({...r, userEmail:r.user?.id, userName:r.user?.username, amount:r.amount, status:r.status, note:r.note, createdAt:r.created_at, updatedAt:r.updated_at}));
  },
  async addTopUpReq(req) {
    if (!supa) return;
    await supa.from('topup_requests').insert({user_id:S.user.id, amount:req.amount, note:req.note||'', status:'pending'});
  },
  async updTopUpReq(id, updates) {
    if (!supa) return;
    await supa.from('topup_requests').update({...updates, updated_at:new Date().toISOString()}).eq('id', id);
  },
  async getPendingTopUps() {
    if (!supa) return [];
    const { data } = await supa.from('topup_requests').select('*, user:profiles(username,wallet)').eq('status','pending');
    return (data||[]).map(r=>({...r, userEmail:r.user_id, userName:r.user?.username, amount:r.amount, createdAt:r.created_at}));
  },

  // ── CHALLENGES ────────────────────────────────────────────
  async getChallenges() {
    if (!supa) return [];
    const cached = cacheGet('challenges');
    if (cached) return cached;
    const { data } = await supa.from('challenges').select('*, attempts:challenge_attempts(*), creator:profiles(username)').order('created_at',{ascending:false});
    const out = (data||[]).map(c=>({...c, questions:c.questions||[], attempts:c.attempts||[], createdByName:c.creator?.username||'', createdBy:c.created_by}));
    cacheSet('challenges', out);
    return out;
  },
  async addChallenge(c) {
    if (!supa) return;
    await supa.from('challenges').insert({title:c.title, type:c.type||'General', reward:c.reward||'', questions:c.questions, status:c.status||'pending', created_by:S.user.id, desc:c.desc||''});
    cacheClear('challenges');
  },
  async updChallenge(id, updates) {
    if (!supa) return;
    await supa.from('challenges').update(updates).eq('id', id);
    cacheClear('challenges');
  },
  async delChallenge(id) {
    if (!supa) return;
    await supa.from('challenges').delete().eq('id', id);
    cacheClear('challenges');
  },
  async addAttempt(chId, attempt) {
    if (!supa) return;
    await supa.from('challenge_attempts').insert({challenge_id:chId, user_id:S.user.id, score:attempt.score, passed:attempt.passed});
    cacheClear('challenges');
  },

  // ── FRIENDS ───────────────────────────────────────────────
  async sendFR(fromId, toId) {
    if (!supa) return false;
    const { data: target } = await supa.from('profiles').select('friend_reqs').eq('id', toId).single();
    if (!target) return false;
    const reqs = [...new Set([...(target.friend_reqs||[]), fromId])];
    await supa.from('profiles').update({friend_reqs:reqs}).eq('id', toId);
    cacheClear('users');
    return true;
  },
  async acceptFR(meId, fromId) {
    if (!supa) return;
    const [{ data: me }, { data: from }] = await Promise.all([
      supa.from('profiles').select('friends,friend_reqs').eq('id', meId).single(),
      supa.from('profiles').select('friends').eq('id', fromId).single(),
    ]);
    const myFriends = [...new Set([...(me?.friends||[]), fromId])];
    const myReqs = (me?.friend_reqs||[]).filter(x => x !== fromId);
    const theirFriends = [...new Set([...(from?.friends||[]), meId])];
    await Promise.all([
      supa.from('profiles').update({friends:myFriends, friend_reqs:myReqs}).eq('id', meId),
      supa.from('profiles').update({friends:theirFriends}).eq('id', fromId),
    ]);
    cacheClear('users');
  },
  async rejectFR(meId, fromId) {
    if (!supa) return;
    const { data: me } = await supa.from('profiles').select('friend_reqs').eq('id', meId).single();
    const reqs = (me?.friend_reqs||[]).filter(x => x !== fromId);
    await supa.from('profiles').update({friend_reqs:reqs}).eq('id', meId);
    cacheClear('users');
  },
  async removeFriend(meId, friendId) {
    if (!supa) return;
    const [{ data: me }, { data: fr }] = await Promise.all([
      supa.from('profiles').select('friends').eq('id', meId).single(),
      supa.from('profiles').select('friends').eq('id', friendId).single(),
    ]);
    await Promise.all([
      supa.from('profiles').update({friends:(me?.friends||[]).filter(x=>x!==friendId)}).eq('id', meId),
      supa.from('profiles').update({friends:(fr?.friends||[]).filter(x=>x!==meId)}).eq('id', friendId),
    ]);
    cacheClear('users');
  },

  // ── STORE ORDERS ──────────────────────────────────────────
  async getStoreOrders() {
    if (!supa) return [];
    const { data } = await supa.from('store_orders').select('*, user:profiles(username)').order('created_at',{ascending:false});
    return (data||[]).map(o=>({...o, userName:o.user?.username, createdAt:o.created_at}));
  },
  async addStoreOrder(o) { return; // removed
    if (!supa) return;
    await supa.from('store_orders').insert({user_id:S.user.id, items:o.items, total:o.total, cart:o.cart||{}});
  },

  // ── PAGE VIEWS (analytics) ────────────────────────────────
  async getPageViews() {
    if (!supa) return {days:{}, total:0, accessLog:[]};
    const { data } = await supa.from('page_views').select('*').order('created_at',{ascending:false}).limit(500);
    // Aggregate into days format
    const pv = {days:{}, total:data?.length||0, accessLog:[]};
    (data||[]).forEach(row => {
      const day = row.created_at?.slice(0,10)||'?';
      if (!pv.days[day]) pv.days[day]={total:0,pages:{},users:{}};
      pv.days[day].total++;
      pv.days[day].pages[row.page]=(pv.days[day].pages[row.page]||0)+1;
      const u=row.username||'(tamu)';
      if (!pv.days[day].users[u]) pv.days[day].users[u]={total:0,pages:{}};
      pv.days[day].users[u].total++;
      pv.days[day].users[u].pages[row.page]=(pv.days[day].users[u].pages[row.page]||0)+1;
      pv.accessLog.push({time:row.created_at, user:u, page:row.page});
    });
    return pv;
  },
  async recordPageView(page) {
    if (!supa) return;
    const uname = S.loggedIn&&S.user ? (S.user.username||S.user.email) : '(tamu)';
    // Fire-and-forget — don't await to avoid slowing navigation
    supa.from('page_views').insert({page, username:uname, user_id:S.user?.id||null}).then(()=>{}).catch(()=>{});
  },

  // ── VAULT ─────────────────────────────────────────────────
  async getVault() {
    if (!supa) return [];
    const { data } = await supa.from('vault_entries').select('*').order('created_at',{ascending:false});
    return (data||[]).map(v=>({...v, ownerCode:v.owner_code, imageData:v.image_url, imageName:v.image_name, fileData:v.file_url, fileName:v.file_name, fileType:v.file_type, createdAt:v.created_at, updatedAt:v.updated_at}));
  },
  async addVault(entry) {
    if (!supa) return;
    const row = {title:entry.title, category:entry.category, owner:entry.owner, owner_code:entry.ownerCode, content:entry.content, tags:entry.tags, image_url:entry.imageData, image_name:entry.imageName, file_url:entry.fileData, file_name:entry.fileName, file_type:entry.fileType, created_by:S.user?.id, uploaded:false};
    await supa.from('vault_entries').insert(row);
  },
  async updVault(id, updates) {
    if (!supa) return;
    const mapped = {...updates};
    if (updates.ownerCode !== undefined) mapped.owner_code = updates.ownerCode;
    if (updates.imageData !== undefined) mapped.image_url = updates.imageData;
    if (updates.imageName !== undefined) mapped.image_name = updates.imageName;
    if (updates.fileData !== undefined) mapped.file_url = updates.fileData;
    if (updates.fileName !== undefined) mapped.file_name = updates.fileName;
    if (updates.fileType !== undefined) mapped.file_type = updates.fileType;
    if (updates.uploadedAt !== undefined) mapped.uploaded_at = updates.uploadedAt;
    await supa.from('vault_entries').update(mapped).eq('id', id);
  },
  delVault(){}, // vault entries are permanent by design

  // ── VAULT LOG ─────────────────────────────────────────────
  async getVaultLogs() {
    if (!supa) return [];
    const { data } = await supa.from('vault_logs').select('*').order('created_at',{ascending:false}).limit(200);
    return (data||[]).map(l=>({...l, time:l.created_at}));
  },
  async addVaultLog(log) {
    if (!supa) return;
    supa.from('vault_logs').insert({action:log.action, title:log.title, code:log.code, by:log.by||S.user?.username}).then(()=>{}).catch(()=>{});
  },
};

// ── SUPABASE AUTH ──────────────────────────────────────────────
// ── OTP STATE (in-memory, never persisted) ──────────────────────
const OTP={pending:false,email:'',step:'password',_tempSession:null};

async function doLogin(){
  const{email,password}=S.aform;
  if(!email||!password){S.aerr='Email & password required.';rAuthM();return;}
  if(!supa){S.aerr='Supabase belum dikonfigurasi.';rAuthM();return;}
  // Rate limit: max 5 login attempts per 15 minutes
  const rl=SEC.rateLimit('login_'+email.toLowerCase(),5,15*60*1000);
  if(rl.blocked){S.aerr=rl.msg;rAuthM();return;}
  S.aerr='Memverifikasi...';rAuthM();
  // Step 1: verify email+password with Supabase Auth
  const{data,error}=await supa.auth.signInWithPassword({email,password});
  if(error){
    // Sanitize error — don't leak whether email exists
    S.aerr='Email atau password salah.';rAuthM();return;
  }
  // Step 2: request OTP via Edge Function
  OTP.pending=true;OTP.email=email;OTP.step='otp';OTP._tempSession=data;
  S.atab='otp';S.aerr='';
  S.aerr='Mengirim kode ke '+email+'...';rAuthM();
  try{
    const res=await fetch(SUPABASE_URL+'/functions/v1/send-otp',{
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':SUPABASE_KEY},
      body:JSON.stringify({email})
    });
    const body=await res.json();
    if(!res.ok){S.aerr=body.error||'Gagal kirim kode OTP.';rAuthM();return;}
    S.aerr='';
    notif('📧 Kode OTP dikirim ke '+email+' — berlaku 10 menit','success');
  }catch(e){
    S.aerr='Tidak bisa mengirim OTP. Periksa koneksi.';rAuthM();return;
  }
  rAuthM();
}

async function doVerifyOTP(){
  const token=(S.aform.otp||'').trim();
  // Rate limit OTP attempts: max 5 tries per 10 minutes
  const rlOtp=SEC.rateLimit('otp_'+OTP.email,5,10*60*1000);
  if(rlOtp.blocked){S.aerr='Terlalu banyak percobaan OTP. '+rlOtp.msg;rAuthM();return;}
  if(!token||token.length!==6||!/^\d{6}$/.test(token)){
    S.aerr='Masukkan 6 digit kode OTP.';rAuthM();return;
  }
  S.aerr='Memverifikasi kode...';rAuthM();
  try{
    const res=await fetch(SUPABASE_URL+'/functions/v1/verify-otp',{
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':SUPABASE_KEY},
      body:JSON.stringify({email:OTP.email,token})
    });
    const body=await res.json();
    if(!res.ok){S.aerr=body.error||'Kode tidak valid atau sudah kadaluarsa.';rAuthM();return;}
  }catch(e){
    S.aerr='Verifikasi gagal. Coba lagi.';rAuthM();return;
  }
  // OTP verified — complete login
  const data=OTP._tempSession;
  OTP.pending=false;OTP.email='';OTP.step='password';OTP._tempSession=null;
  const{data:profile}=await supa.from('profiles').select('*').eq('id',data.user.id).single();
  if(!profile){S.aerr='Profil tidak ditemukan.';rAuthM();return;}
  await supa.from('profiles').update({online:true,last_seen:new Date().toISOString()}).eq('id',data.user.id);
  SEC.clearRate('login_'+(OTP.email||'').toLowerCase());
  SEC.clearRate('otp_'+(OTP.email||'').toLowerCase());
  // Clear OTP form field
  S.aform.otp='';
  S.loggedIn=true;
  S.user={...profile,email:OTP.email||data.user.email,id:data.user.id,avatar:profile.avatar_url,cover:profile.cover_url};
  S.isAdmin=profile.role==='admin';
  S.atab='login';S.aform={email:'',password:'',username:'',cp:'',otp:''};
  S.aerr='';document.getElementById('m-auth').style.display='none';
  applyTheme();rPage();renderNav();renderAuth();
  notif('👋 Selamat datang, '+profile.username+'!','success');
  startChatBadgePoll();
}

async function doResendOTP(){
  if(!OTP.email){S.aerr='Sesi habis. Silakan login ulang.';S.atab='login';rAuthM();return;}
  S.aerr='Mengirim ulang kode...';rAuthM();
  try{
    const res=await fetch(SUPABASE_URL+'/functions/v1/send-otp',{
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':SUPABASE_KEY},
      body:JSON.stringify({email:OTP.email})
    });
    const body=await res.json();
    if(!res.ok){S.aerr=body.error||'Gagal kirim ulang OTP.';rAuthM();return;}
    S.aerr='';notif('📧 Kode baru dikirim ke '+OTP.email,'success');rAuthM();
  }catch(e){S.aerr='Gagal kirim ulang.';rAuthM();}
}

function cancelOTP(){
  OTP.pending=false;OTP.email='';OTP.step='password';OTP._tempSession=null;
  if(supa)supa.auth.signOut().catch(()=>{});
  S.atab='login';S.aform={email:'',password:'',username:'',cp:'',otp:''};S.aerr='';rAuthM();
}
async function doReg(){
  const{email,password,username,cp}=S.aform;
  // ── Input validation ──
  if(!username||!email||!password||!cp){S.aerr='Semua field wajib diisi.';rAuthM();return;}
  const emailRx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRx.test(email)){S.aerr='Format email tidak valid.';rAuthM();return;}
  // Username: 3-20 chars, alphanumeric + underscore only
  if(!/^[a-zA-Z0-9_]{3,20}$/.test(username)){
    S.aerr='Username 3-20 karakter, hanya huruf/angka/underscore.';rAuthM();return;
  }
  if(password!==cp){S.aerr='Password tidak cocok.';rAuthM();return;}
  // Strong password: min 8 chars, 1 uppercase, 1 number
  if(password.length<8){S.aerr='Password minimal 8 karakter.';rAuthM();return;}
  if(!/[A-Z]/.test(password)){S.aerr='Password harus mengandung minimal 1 huruf kapital.';rAuthM();return;}
  if(!/[0-9]/.test(password)){S.aerr='Password harus mengandung minimal 1 angka.';rAuthM();return;}
  if(!supa){S.aerr='Supabase belum dikonfigurasi.';rAuthM();return;}
  const rlReg=SEC.rateLimit('reg_'+email.toLowerCase(),3,60*60*1000);
  if(rlReg.blocked){S.aerr=rlReg.msg;rAuthM();return;}
  S.aerr='Membuat akun...';rAuthM();
  // ── Check username uniqueness before creating auth user ──
  const{data:existingUser}=await supa.from('profiles').select('id').eq('username',username).maybeSingle();
  if(existingUser){S.aerr='Username sudah dipakai. Pilih yang lain.';rAuthM();return;}
  const{data,error}=await supa.auth.signUp({email,password,options:{emailRedirectTo:window.location.origin}});
  if(error){
    // Sanitize: don't reveal if email is registered
    S.aerr=error.message.includes('already')?'Akun dengan email ini sudah ada.':error.message;
    rAuthM();return;
  }
  if(!data.user){S.aerr='Pendaftaran gagal. Coba lagi.';rAuthM();return;}
  const isAdmin=email==='admin@starlive.com';
  const{error:pe}=await supa.from('profiles').insert({
    id:data.user.id,username,role:isAdmin?'admin':'user',email,
    online:false,badges:[],friends:[],friend_reqs:[]
  });
  if(pe){
    // NOTE: Tidak bisa rollback auth user dari client-side (anon key tidak
    // punya privilese admin — auth.admin.* hanya bisa dipanggil dari server
    // dengan service role key). Akun auth tanpa profile akan perlu
    // dibersihkan manual dari sisi admin/server jika kasus ini terjadi.
    S.aerr='Gagal membuat profil: '+pe.message;rAuthM();return;
  }
  S.atab='login';S.aform={email,password:'',username:'',cp:'',otp:''};S.aerr='';rAuthM();
  notif('✅ Akun berhasil dibuat! Silakan login.','success');
}


// ── NAV & AUTH UI ─────────────────────────────────────────────
function renderNav(){
  const q=t();const nav=document.getElementById('nav');nav.innerHTML='';
  NAV.forEach(item=>{if(item.admin&&!S.isAdmin)return;const locked=item.locked&&!S.loggedIn;const active=S.page===item.id;nav.appendChild(el('div',{class:'nav-i',style:{background:active?q.nab:'transparent',color:active?q.nat:locked?q.tm+'88':q.tx,cursor:locked?'not-allowed':'pointer',opacity:locked?'.5':'1'},onclick:()=>{if(!locked)goTo(item.id);}},el('span',{style:{fontSize:'17px',flexShrink:'0'}},item.i),el('span',{class:'sl',style:{fontSize:'12px',fontWeight:active?'700':'400'}},T(item.lk)),locked?el('span',{class:'slk',style:{marginLeft:'auto',fontSize:'10px'}},'🔒'):null));});
}
function renderAuth(){
  const q=t();const af=document.getElementById('afull');af.innerHTML='';
  const collapsed=!S.sopen;
  if(S.loggedIn){
    const lb=btn(collapsed?T('logout').slice(0,2):T('logout'),()=>{if(!confirm('Are you sure you want to logout?'))return;
      (async()=>{
        if(S.user&&supa){try{await supa.from('profiles').update({online:false,last_seen:new Date().toISOString()}).eq('id',S.user.id);}catch(e){}}
        if(supa){try{await supa.auth.signOut();}catch(e){}}
        unsubscribeChat();
        S.loggedIn=false;S.isAdmin=false;S.user=null;S.cart={};S.chatRoom=null;S.chatTarget=null;S.fracPageTab='info';
        if(['myaccount','dashboard','vault'].includes(S.page))goTo('home');else{applyTheme();rPage();}
        renderNav();renderAuth();notif('👋 Logged out.');
      })();},true,{width:'100%',fontSize:'11px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'});
    af.appendChild(lb);
  } else {
    const loginBtn=el('button',{class:'btn',style:{width:'100%',fontSize:'11px',background:q.bb,borderColor:q.bc,color:q.bt,overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'},onclick:openAuthM});
    loginBtn.appendChild(el('span',{style:{fontSize:'14px',flexShrink:'0'}},'🔐'));
    loginBtn.appendChild(el('span',{class:'sl',style:{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},T('loginReg').replace('🔐 ','')));
    af.appendChild(loginBtn);
  }
}
function openAuthM(){document.getElementById('m-auth').style.display='flex';rAuthM();}
function rAuthM(){
  const q=t();const m=document.getElementById('m-auth');m.innerHTML='';
  const card=gc({padding:'32px',width:'360px',maxWidth:'94vw',position:'relative',borderRadius:'18px'});
  card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'18px',cursor:'pointer'},onclick:()=>{
    if(S.atab==='otp'){cancelOTP();return;}
    document.getElementById('m-auth').style.display='none';
  }},'✕'));
  card.appendChild(el('div',{style:{fontSize:'26px',textAlign:'center',marginBottom:'5px'}},'⭐'));
  card.appendChild(el('h2',{style:{color:q.ac,textAlign:'center',marginBottom:'16px',fontSize:'16px',fontWeight:'800'}},'StarLive Group'));

  // ── OTP verification step ──
  if(S.atab==='otp'){
    card.appendChild(el('div',{style:{textAlign:'center',marginBottom:'14px'}},
      el('div',{style:{fontSize:'32px',marginBottom:'6px'}},'📧'),
      el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700',marginBottom:'4px'}},'Verifikasi Email'),
      el('div',{style:{color:q.tm,fontSize:'11px',lineHeight:'1.6'}},'Kode 6 digit telah dikirim ke'),
      el('div',{style:{display:'flex',alignItems:'center',gap:'6px',justifyContent:'center',flexWrap:'wrap'}},el('span',{style:{background:'rgba(66,133,244,.15)',border:'1px solid #4285F4',color:'#4fc3f7',borderRadius:'20px',padding:'2px 9px',fontSize:'10px',fontWeight:'700'}},'📧 Gmail / Email'),el('span',{style:{color:q.ac,fontSize:'12px',fontWeight:'700'}},OTP.email)),
      el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'3px'}},'Berlaku 10 menit · Hanya 1x pakai')
    ));
    if(S.aerr)card.appendChild(el('div',{style:{background:'rgba(255,80,80,.1)',border:'1px solid #f44',borderRadius:'7px',padding:'7px 10px',color:'#f88',fontSize:'11px',marginBottom:'10px'}},S.aerr));
    const otpInp=el('input',{type:'text',inputmode:'numeric',pattern:'[0-9]*',maxlength:'6',placeholder:'_ _ _ _ _ _',class:'inf',style:{background:q.ib,borderColor:q.ac,color:q.tx,fontSize:'24px',textAlign:'center',letterSpacing:'10px',fontWeight:'700',marginBottom:'10px'}});
    otpInp.value=S.aform.otp||'';
    otpInp.oninput=e=>{
      S.aform.otp=e.target.value.replace(/\D/g,'').slice(0,6);
      otpInp.value=S.aform.otp;
      if(S.aform.otp.length===6)doVerifyOTP();
    };
    otpInp.onkeydown=e=>{if(e.key==='Enter')doVerifyOTP();};
    card.appendChild(otpInp);
    card.appendChild(btn('✅ Verifikasi Kode',doVerifyOTP,false,{width:'100%',marginBottom:'7px'}));
    const row2=el('div',{style:{display:'flex',gap:'7px'}});
    row2.appendChild(btn('🔄 Kirim Ulang',doResendOTP,true,{flex:'1',fontSize:'11px'}));
    row2.appendChild(btn('← Batal',cancelOTP,true,{flex:'1',fontSize:'11px'}));
    card.appendChild(row2);
    m.appendChild(card);
    setTimeout(()=>otpInp.focus(),50);
    return;
  }

  // ── Tab switcher (Login / Register) ──
  const tr=el('div',{style:{display:'flex',gap:'7px',marginBottom:'15px'}});
  ['login','register'].forEach(tb=>{
    const a=S.atab===tb;
    tr.appendChild(el('button',{class:'btn',style:{flex:'1',fontSize:'12px',fontWeight:a?'700':'400',background:a?q.bb:'transparent',borderColor:a?q.bc:q.sb,color:a?q.bt:q.tm},
      onclick:()=>{S.atab=tb;S.aerr='';rAuthM();}},(tb==='login'?'🔓 Login':'📝 Register')));
  });
  card.appendChild(tr);
  if(S.aerr)card.appendChild(el('div',{style:{background:'rgba(255,80,80,.1)',border:'1px solid #f44',borderRadius:'7px',padding:'7px 10px',color:'#f88',fontSize:'11px',marginBottom:'10px'}},S.aerr));

  const f=S.aform;
  const inp=(ph,key,ty='text',hint='')=>{
    const wrap=el('div',{style:{marginBottom:'8px'}});
    const i=el('input',{type:ty,placeholder:ph,class:'inf',style:{background:q.ib,borderColor:q.sb,color:q.tx,width:'100%',marginBottom:'0'}});
    i.value=f[key]||'';
    i.oninput=e=>{S.aform[key]=e.target.value;};
    i.onkeydown=ev=>{if(ev.key==='Enter'){if(S.atab==='login')doLogin();else doReg();}};
    wrap.appendChild(i);
    if(hint)wrap.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'2px'}},hint));
    return wrap;
  };

  if(S.atab==='register'){
    card.appendChild(inp('Username (3-20 karakter)','username','text','Hanya huruf, angka, underscore'));
  }
  card.appendChild(inp('Email (Gmail direkomendasikan)','email','email'));
  card.appendChild(inp('Password','password','password',S.atab==='register'?'Min 8 karakter, 1 huruf kapital, 1 angka':''));
  if(S.atab==='register')card.appendChild(inp('Konfirmasi Password','cp','password'));

  if(S.atab==='login'){
    card.appendChild(btn('🔓 Login — Kode OTP dikirim ke Gmail',doLogin,false,{width:'100%',marginTop:'4px'}));
    card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',textAlign:'center',marginTop:'9px',lineHeight:'1.6'}},
      'Setelah login, kode verifikasi akan dikirim ke email Anda.'));
  } else {
    card.appendChild(btn('✅ Daftar Sekarang',doReg,false,{width:'100%',marginTop:'4px'}));
    card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',textAlign:'center',marginTop:'9px',lineHeight:'1.6'}},
      'Belum punya akun? Daftar dulu sebelum bisa login.'));
  }
  m.appendChild(card);
  setTimeout(()=>{const i=card.querySelector('input');if(i)i.focus();},50);
}

// ── CHECK SESSION ON LOAD ──────────────────────────────────────
async function checkSession(){
  if(!supa)return;
  const{data:{session}}=await supa.auth.getSession();
  if(session){
    const{data:profile}=await supa.from('profiles').select('*').eq('id',session.user.id).single();
    if(profile){
      S.loggedIn=true;
      S.user={...profile,email:session.user.email,id:session.user.id,avatar:profile.avatar_url,cover:profile.cover_url};
      S.isAdmin=profile.role==='admin';
      // Fire-and-forget — don't block initial render on this write
      supa.from('profiles').update({online:true}).eq('id',session.user.id).then(()=>{}).catch(()=>{});
    }
  }
}

// ── REALTIME CHAT ──────────────────────────────────────────────
let chatChannel=null;
async function subscribeToRoom(room, onMessage){
  if(!supa)return;
  if(chatChannel)supa.removeChannel(chatChannel);
  chatChannel=supa.channel('room:'+room)
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'messages',filter:'room=eq.'+room},
      async(payload)=>{
        const{data:sender}=await supa.from('profiles').select('username,avatar_url,fraction').eq('id',payload.new.sender_id).single();
        onMessage({...payload.new,text:payload.new.content,username:sender?.username,avatar:sender?.avatar_url,fraction:sender?.fraction,userEmail:payload.new.sender_id,time:payload.new.created_at});
      })
    .subscribe();
}
function unsubscribeChat(){if(supa&&chatChannel){supa.removeChannel(chatChannel);chatChannel=null;}}

// ── NOTIF ─────────────────────────────────────────────────────


// ── NAVIGATE ──────────────────────────────────────────────────




// ── HOME ──────────────────────────────────────────────────────
async function rHome(){
  const q=t();const c=document.getElementById('page-home');c.innerHTML='';
  if(S.slTimer)clearInterval(S.slTimer);
  c.appendChild(el('div',{style:{textAlign:'center',padding:'32px 14px 22px'}},el('div',{style:{fontSize:'48px',marginBottom:'10px'}},'⭐'),el('h1',{style:{fontSize:'34px',fontWeight:'900',color:q.ac,letterSpacing:'.05em'}},'STARLIVE GROUP'),el('p',{style:{color:q.tm,fontSize:'13px',maxWidth:'520px',margin:'11px auto',lineHeight:'1.8'}},T('whoWeAreDesc')),el('div',{style:{display:'flex',gap:'7px',justifyContent:'center',flexWrap:'wrap',marginTop:'14px'}},tg('🌏 Pan-Asian'),tg('🤝 5 Affiliates'),tg('🚀 Since 2020'),tg('💡 Digital-First'))));
  const sw=el('div',{class:'swrap',style:{background:SLIDES[S.slidx].bg,marginBottom:'20px'}});
  const sc=el('div',{style:{position:'relative',height:'100%',overflow:'hidden'}});
  SLIDES.forEach((s,i)=>sc.appendChild(el('div',{class:'sl-item'+(i===S.slidx?' act':''),style:{background:s.bg}},el('div',{style:{textAlign:'center',pointerEvents:'none'}},el('div',{style:{fontSize:'72px',marginBottom:'9px'}},s.e),el('div',{style:{color:'rgba(255,255,255,.9)',fontSize:'15px',fontWeight:'700',textShadow:'0 2px 10px rgba(0,0,0,.5)'}},s.l)))));
  const dots=el('div',{style:{position:'absolute',bottom:'11px',left:'50%',transform:'translateX(-50%)',display:'flex',gap:'6px',zIndex:'10'}});
  SLIDES.forEach((_,i)=>{const d=el('button',{class:'sdot'+(i===S.slidx?' act':''),style:{background:i===S.slidx?q.ac:'rgba(255,255,255,.45)'},onclick:e=>{e.stopPropagation();S.slidx=i;rHome();}});dots.appendChild(d);});
  sc.appendChild(el('button',{class:'sarr L',onclick:e=>{e.stopPropagation();S.slidx=(S.slidx-1+SLIDES.length)%SLIDES.length;rHome();}},'‹'));
  sc.appendChild(el('button',{class:'sarr R',onclick:e=>{e.stopPropagation();S.slidx=(S.slidx+1)%SLIDES.length;rHome();}},'›'));
  sc.appendChild(dots);sc.appendChild(el('div',{style:{position:'absolute',top:'9px',right:'11px',color:'rgba(255,255,255,.65)',fontSize:'11px',fontWeight:'600',zIndex:'10'}},`${S.slidx+1}/${SLIDES.length}`));
  let dx=0;sw.addEventListener('mousedown',e=>{dx=e.clientX;});sw.addEventListener('mouseup',e=>{const d=e.clientX-dx;if(Math.abs(d)>38){S.slidx=(S.slidx+(d<0?1:-1)+SLIDES.length)%SLIDES.length;rHome();}});sw.addEventListener('touchstart',e=>{dx=e.touches[0].clientX;},{passive:true});sw.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-dx;if(Math.abs(d)>38){S.slidx=(S.slidx+(d<0?1:-1)+SLIDES.length)%SLIDES.length;rHome();}},{passive:true});
  sw.appendChild(sc);c.appendChild(sw);S.slTimer=setInterval(()=>{S.slidx=(S.slidx+1)%SLIDES.length;rHome();},10000);
  c.appendChild(gc({padding:'22px',marginBottom:'16px'},el('h2',{style:{color:q.ac,fontSize:'17px',fontWeight:'700',marginBottom:'9px'}},T('whoWeAre')),el('p',{style:{color:q.tx,lineHeight:'1.8',fontSize:'13px',marginBottom:'7px'}},T('whoWeAreDesc')),el('p',{style:{color:q.tx,lineHeight:'1.8',fontSize:'13px'}},T('ourMission'))));
  const sg=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(110px,1fr))',gap:'12px'}});
  [["50+","Creators"],["5","Affiliates"],["4","Projects"],["12K+","Community"]].forEach(([v,l])=>sg.appendChild(gc({padding:'16px',textAlign:'center'},el('div',{style:{fontSize:'22px',fontWeight:'900',color:q.ac}},v),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'3px'}},l))));
  c.appendChild(sg);
}

// ── AFFILIATION ───────────────────────────────────────────────
async function rAffil(){const q=t();const c=document.getElementById('page-affiliation');c.innerHTML='';c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('affiliation')));c.appendChild(el('p',{style:{color:q.tm,marginBottom:'18px',fontSize:'12px'}},T('affiliSub')));const list=el('div',{style:{display:'flex',flexDirection:'column',gap:'12px'}});AFFIL.forEach(aff=>{const exp=AX[aff.id];const card=gc({padding:'20px',cursor:'pointer',border:`1px solid ${exp?aff.c:q.sb}`,transition:'border-color .2s'});card.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'11px'}},el('div',{style:{fontSize:'26px',width:'48px',height:'48px',display:'flex',alignItems:'center',justifyContent:'center',background:`${aff.c}18`,borderRadius:'11px',flexShrink:'0'}},aff.ic),el('div',{style:{flex:'1'}},el('div',{style:{color:aff.c,fontWeight:'700',fontSize:'14px'}},aff.n),el('div',{style:{color:q.tm,fontSize:'11px',marginTop:'2px'}},aff.d)),el('div',{style:{color:q.tm,fontSize:'14px'}},exp?'▲':'▼')));if(exp){const va=el('a',{href:aff.url,target:'_blank',rel:'noopener',style:{textDecoration:'none',display:'inline-block'}});va.appendChild(btn('🌐 Visit Portal →',null,false));va.onclick=e=>e.stopPropagation();card.appendChild(el('div',{style:{marginTop:'12px',paddingTop:'12px',borderTop:`1px solid ${q.sb}`}},el('div',{style:{display:'flex',gap:'7px',flexWrap:'wrap',marginBottom:'9px'}},tg('🌐 Active'),tg('📊 Growing')),el('p',{style:{color:q.tx,fontSize:'12px',lineHeight:'1.7',marginBottom:'9px'}},`${aff.n} operates as an autonomous entity sharing resources within the StarLive ecosystem.`),va));}card.onclick=()=>{const wasOpen=AX[aff.id];Object.keys(AX).forEach(k=>AX[k]=false);AX[aff.id]=!wasOpen;rAffil();};list.appendChild(card);});c.appendChild(list);}

// ── CREATORS ─────────────────────────────────────────────────
async function rCreators(){const q=t();const c=document.getElementById('page-creator');c.innerHTML='';c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('creator')));c.appendChild(el('p',{style:{color:q.tm,marginBottom:'18px',fontSize:'12px'}},T('creatorSub')));const creators=await DB.getCreators();const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'16px'}});creators.forEach(cr=>{const wrap=el('div',{style:{position:'relative'}});const card=gc({padding:'20px',cursor:'pointer'});if(cr.photo)card.appendChild(el('img',{src:cr.photo,style:{width:'56px',height:'56px',borderRadius:'50%',objectFit:'cover',marginBottom:'9px',border:`2px solid ${q.ac}`}}));else card.appendChild(el('div',{style:{fontSize:'40px',marginBottom:'9px'}},cr.images[0]));card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',letterSpacing:'.09em'}},cr.role.toUpperCase()));card.appendChild(el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700',margin:'3px 0'}},cr.name));card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'7px'}},'📂 '+cr.fraction));card.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',lineHeight:'1.6',marginBottom:'9px'}},cr.bio.slice(0,72)+'...'));card.appendChild(el('div',{style:{display:'flex',gap:'4px',flexWrap:'wrap'}},...(Array.isArray(cr.tags)?cr.tags:[]).map(x=>tg(x))));card.onclick=()=>{S.crtSel=cr;goTo('profile');};wrap.appendChild(card);if(S.isAdmin)wrap.appendChild(el('button',{style:{position:'absolute',top:'9px',right:'9px',background:q.as,border:`1px solid ${q.ac}`,color:q.ac,borderRadius:'6px',padding:'3px 7px',fontSize:'10px',cursor:'pointer'},onclick:e=>{e.stopPropagation();openEC(cr.id);}},T('edit')));grid.appendChild(wrap);});c.appendChild(grid);}

async function openEC(id){const l=await DB.getCreators();const cr=l.find(x=>x.id===id);if(!cr)return;S._ecid=id;S._ecf={...cr};document.getElementById('m-ec').style.display='flex';rEC();}
async function rEC(){
  const q=t();const m=document.getElementById('m-ec');m.innerHTML='';const f=S._ecf;
  const card=gc({padding:'26px',width:'460px',maxWidth:'96vw',maxHeight:'88vh',overflowY:'auto',position:'relative',borderRadius:'18px'});
  card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'19px',cursor:'pointer'},onclick:()=>closeM('m-ec')},'✕'));
  card.appendChild(el('h2',{style:{color:q.ac,marginBottom:'14px',fontSize:'15px'}},'✏️ Edit Creator: '+f.name));
  const is={background:q.ib,borderColor:q.sb,color:q.tx};const lb=tx=>el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'2px'}},tx);
  const mi=(ph,key)=>{const i=el('input',{class:'inf',placeholder:ph,style:is});i.value=f[key]||'';i.oninput=e=>{S._ecf[key]=e.target.value;};return i;};
  const mt=(ph,key)=>{const ta=el('textarea',{class:'inf',placeholder:ph,rows:'3',style:{...is,resize:'vertical'}});ta.textContent=f[key]||'';ta.oninput=e=>{S._ecf[key]=e.target.value;};return ta;};
  const pr=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',marginBottom:'12px'}});
  if(f.photo)pr.appendChild(el('img',{src:f.photo,style:{width:'48px',height:'48px',borderRadius:'50%',objectFit:'cover',border:`2px solid ${q.ac}`}}));else pr.appendChild(el('div',{style:{fontSize:'36px'}},f.images[0]));
  pr.appendChild(btn('📷',()=>{document.getElementById('fi-cphoto').click();},true,{fontSize:'10px'}));
  if(f.photo)pr.appendChild(btn('✕',()=>{S._ecf.photo=null;rEC();},true,{fontSize:'10px',borderColor:'#f44',color:'#f88'}));
  card.appendChild(pr);
  [['NAME','name'],['ROLE','role'],['FRACTION','fraction'],['EMAIL','email'],['PHONE','phone']].forEach(([l,k])=>{card.appendChild(lb(l));card.appendChild(mi(l,k));});
  [['BIO','bio'],['EDUCATION','education'],['ACHIEVEMENTS','achievements'],['HOBBY','hobby']].forEach(([l,k])=>{card.appendChild(lb(l));card.appendChild(mt(l,k));});
  card.appendChild(lb('TAGS (comma separated)'));card.appendChild(mi('React, Node.js','tags'));
  card.appendChild(lb('CV (PDF/DOC)'));
  const cvr=el('div',{style:{display:'flex',gap:'7px',alignItems:'center',marginBottom:'7px'}});
  if(f.cvUrl){cvr.appendChild(el('span',{style:{color:q.ac,fontSize:'11px'}},'✅ CV ready'));cvr.appendChild(btn('✕',()=>{S._ecf.cvUrl=null;rEC();},true,{fontSize:'10px',borderColor:'#f44',color:'#f88'}));}
  else cvr.appendChild(btn('📄 Upload CV',()=>{S._cb['fi-cv']=async file=>{S._ecf.cvUrl=URL.createObjectURL(file);notif('CV uploaded!');rEC();};document.getElementById('fi-cv').click();},true,{fontSize:'10px'}));
  card.appendChild(cvr);
  const br=el('div',{style:{display:'flex',gap:'7px',marginTop:'13px'}});br.appendChild(btn('💾 '+T('save'),async ()=>{const d={...S._ecf};if(typeof d.tags==='string')d.tags=d.tags.split(',').map(s=>s.trim()).filter(Boolean).slice(0,4);await DB.updCreator(S._ecid,d);closeM('m-ec');rCreators();notif('✅ Creator updated!','success');},false));br.appendChild(btn(T('cancel'),()=>closeM('m-ec'),true));card.appendChild(br);m.appendChild(card);
}
async function onFiCphoto(e){const f=e.target.files[0];if(!f)return;openCreatorCropModal(f,S._ecid);e.target.value='';}

async function openCreatorCropModal(file,creatorId){
  const q=t();const url=URL.createObjectURL(file);
  const m=document.getElementById('m-gal');m.style.display='flex';m.innerHTML='';
  let cropX=0,cropY=0,cropW=0,cropH=0,dragging=false,resizing=false,resSide='',dragSX=0,dragSY=0;
  const card=gc({padding:'22px',width:'480px',maxWidth:'97vw',position:'relative',borderRadius:'18px',maxHeight:'90vh',overflowY:'auto'});
  card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'20px',cursor:'pointer'},onclick:()=>{URL.revokeObjectURL(url);closeM('m-gal');}},'✕'));
  card.appendChild(el('div',{style:{color:q.ac,fontSize:'14px',fontWeight:'800',marginBottom:'12px'}},'📷 Crop Creator Photo'));
  const wrap=el('div',{style:{position:'relative',overflow:'hidden',borderRadius:'9px',background:'#111',cursor:'crosshair',userSelect:'none'}});
  const imgEl=el('img',{src:url,style:{display:'block',maxWidth:'100%',maxHeight:'50vh',objectFit:'contain',pointerEvents:'none'}});
  const selBox=el('div',{style:{position:'absolute',border:`2px solid ${q.ac}`,boxSizing:'border-box',cursor:'move',display:'none'}});
  ['nw','ne','sw','se'].forEach(h=>{selBox.appendChild(el('div',{style:{position:'absolute',width:'10px',height:'10px',background:q.ac,borderRadius:'2px',cursor:h+'-resize'},'data-h':h}));});
  wrap.appendChild(imgEl);wrap.appendChild(selBox);card.appendChild(wrap);
  function clamp(v,mn,mx){return Math.max(mn,Math.min(mx,v));}
  function posH(){const W=selBox.offsetWidth,H=selBox.offsetHeight;[{h:'nw',l:-5,t:-5},{h:'ne',l:W-5,t:-5},{h:'sw',l:-5,t:H-5},{h:'se',l:W-5,t:H-5}].forEach(p=>{const hd=selBox.querySelector('[data-h="'+p.h+'"]');if(hd){hd.style.left=p.l+'px';hd.style.top=p.t+'px';}});}
  function updSel(){selBox.style.left=cropX+'px';selBox.style.top=cropY+'px';selBox.style.width=cropW+'px';selBox.style.height=cropH+'px';selBox.style.display='block';posH();}
  imgEl.onload=()=>{const s=Math.min(imgEl.offsetWidth,imgEl.offsetHeight)*0.7;cropX=(imgEl.offsetWidth-s)/2;cropY=(imgEl.offsetHeight-s)/2;cropW=s;cropH=s;updSel();};
  selBox.addEventListener('mousedown',e=>{const h=e.target.dataset.h;if(h){resizing=true;resSide=h;}else dragging=true;dragSX=e.clientX;dragSY=e.clientY;e.stopPropagation();});
  document.addEventListener('mousemove',mv);document.addEventListener('mouseup',mu);
  function mv(e){if(!dragging&&!resizing)return;const dx=e.clientX-dragSX,dy=e.clientY-dragSY;dragSX=e.clientX;dragSY=e.clientY;const iw=imgEl.offsetWidth,ih=imgEl.offsetHeight;const mn=30;if(dragging){cropX=clamp(cropX+dx,0,iw-cropW);cropY=clamp(cropY+dy,0,ih-cropH);}else{if(resSide==='se'){cropW=clamp(cropW+dx,mn,iw-cropX);cropH=cropW;}else if(resSide==='nw'){const nw=clamp(cropW-dx,mn,cropX+cropW);cropX=cropX+cropW-nw;cropY=cropY+cropH-nw;cropW=nw;cropH=nw;}else if(resSide==='ne'){cropW=clamp(cropW+dx,mn,iw-cropX);const nh=clamp(cropH-dy,mn,cropY+cropH);cropY=cropY+cropH-nh;cropH=nh;}else if(resSide==='sw'){const nw=clamp(cropW-dx,mn,cropX+cropW);cropX=cropX+cropW-nw;cropW=nw;cropH=clamp(cropH+dy,mn,ih-cropY);}}updSel();}
  function mu(){dragging=false;resizing=false;}
  const brow=el('div',{style:{display:'flex',gap:'8px',marginTop:'14px'}});
  brow.appendChild(btn('✅ Apply',async ()=>{const canvas=document.createElement('canvas');const sx=imgEl.naturalWidth/imgEl.offsetWidth,sy=imgEl.naturalHeight/imgEl.offsetHeight;canvas.width=300;canvas.height=300;const ctx=canvas.getContext('2d');ctx.beginPath();ctx.arc(150,150,150,0,Math.PI*2);ctx.clip();ctx.drawImage(imgEl,cropX*sx,cropY*sy,cropW*sx,cropH*sy,0,0,300,300);const d=canvas.toDataURL('image/jpeg',0.88);await DB.updCreator(creatorId,{photo:d});URL.revokeObjectURL(url);closeM('m-gal');if(S.page==='creator')rCreators();if(S.page==='profile')rProfile();notif('✅ Creator photo updated!','success');document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',mu);},false,{fontSize:'11px'}));
  brow.appendChild(btn('Cancel',()=>{URL.revokeObjectURL(url);closeM('m-gal');document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',mu);},true,{fontSize:'11px'}));
  card.appendChild(brow);m.appendChild(card);
}
async function onFiCv(e){const f=e.target.files[0];if(!f)return;if(S._cb['fi-cv'])S._cb['fi-cv'](f);e.target.value='';}

// ── PROFILE PAGE ──────────────────────────────────────────────
async function rProfile(){
  const q=t();const c=document.getElementById('page-profile');c.innerHTML='';
  const crs=await DB.getCreators();const cr=crs.find(x=>x.id===S.crtSel?.id)||S.crtSel;
  if(!cr){c.appendChild(el('div',{style:{textAlign:'center',padding:'60px',color:q.tm}},'No creator selected'));return;}
  c.appendChild(btn('← Back',()=>goTo('creator'),true,{marginBottom:'18px'}));
  const card=gc({padding:'28px'});
  const ph=cr.photo?el('img',{src:cr.photo,style:{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',border:`3px solid ${q.ac}`,marginBottom:'9px'}}):el('div',{style:{fontSize:'66px',marginBottom:'9px'}},cr.images[0]);
  const info=el('div',{style:{flex:'1',minWidth:'190px'}});
  info.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',letterSpacing:'.09em'}},cr.role.toUpperCase()));
  info.appendChild(el('h1',{style:{color:q.tx,fontSize:'26px',fontWeight:'900',margin:'5px 0 3px'}},cr.name));
  info.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',marginBottom:'10px'}},'📂 '+cr.fraction));
  info.appendChild(el('div',{style:{display:'flex',gap:'5px',flexWrap:'wrap',marginBottom:'12px'}},...(Array.isArray(cr.tags)?cr.tags:[]).map(x=>tg(x))));
  const sec=(ic,lb,ct)=>el('div',{style:{marginBottom:'12px',padding:'11px',background:q.sur,borderRadius:'9px',border:`1px solid ${q.sb}`}},el('div',{style:{color:q.ac,fontSize:'9px',fontWeight:'700',marginBottom:'6px'}},(ic?ic+' ':'')+lb),el('div',{style:{color:q.tx,fontSize:'12px',lineHeight:'1.8',whiteSpace:'pre-line'}},ct));
  info.appendChild(sec('📖','BIO',cr.bio));if(cr.education)info.appendChild(sec('🎓','EDUCATION',cr.education));if(cr.achievements)info.appendChild(sec('🏆','ACHIEVEMENTS',cr.achievements));info.appendChild(sec('🎯','HOBBY',cr.hobby));
  const btns=el('div',{style:{display:'flex',gap:'7px',flexWrap:'wrap'}});
  btns.appendChild(btn('💬 Contact',()=>openConM(cr)));
  if(cr.cvUrl){const a=el('a',{href:cr.cvUrl,download:cr.name.replace(/\s+/g,'_')+'_CV',style:{textDecoration:'none'}});a.appendChild(btn('📄 Download CV',null,true));btns.appendChild(a);}
  else btns.appendChild(btn('🔗 Portfolio',()=>notif('Portfolio not available.'),true));
  if(S.isAdmin)btns.appendChild(btn('✏️ '+T('edit'),()=>openEC(cr.id),true));
  info.appendChild(btns);
  card.appendChild(el('div',{style:{display:'flex',gap:'22px',flexWrap:'wrap',alignItems:'flex-start'}},el('div',{},ph),info));c.appendChild(card);
}
async function openConM(cr){const q=t();const m=document.getElementById('m-con');m.style.display='flex';m.innerHTML='';const card=gc({padding:'26px',width:'340px',maxWidth:'94vw',position:'relative',borderRadius:'18px'});card.appendChild(el('button',{style:{position:'absolute',top:'11px',right:'13px',background:'none',border:'none',color:q.tm,fontSize:'18px',cursor:'pointer'},onclick:()=>closeM('m-con')},'✕'));if(cr.photo)card.appendChild(el('img',{src:cr.photo,style:{width:'64px',height:'64px',borderRadius:'50%',objectFit:'cover',border:`2px solid ${q.ac}`,display:'block',margin:'0 auto 9px'}}));else card.appendChild(el('div',{style:{fontSize:'48px',textAlign:'center',marginBottom:'9px'}},cr.images[0]));card.appendChild(el('h3',{style:{color:q.ac,textAlign:'center',marginBottom:'2px',fontSize:'16px'}},cr.name));card.appendChild(el('div',{style:{color:q.tm,textAlign:'center',fontSize:'11px',marginBottom:'14px'}},cr.role+' · '+cr.fraction));card.appendChild(el('div',{style:{background:q.sur,borderRadius:'9px',padding:'12px',border:`1px solid ${q.sb}`,display:'flex',flexDirection:'column',gap:'9px'}},el('div',{style:{display:'flex',alignItems:'center',gap:'9px'}},el('span',{style:{fontSize:'15px'}},'📧'),el('div',{},el('div',{style:{color:q.tm,fontSize:'9px'}},'EMAIL'),el('a',{href:`mailto:${cr.email}`,style:{color:q.ac,fontSize:'12px',textDecoration:'none'}},cr.email))),el('div',{style:{display:'flex',alignItems:'center',gap:'9px'}},el('span',{style:{fontSize:'15px'}},'📞'),el('div',{},el('div',{style:{color:q.tm,fontSize:'9px'}},'PHONE'),el('div',{style:{color:q.tx,fontSize:'12px'}},cr.phone||'-')))));m.appendChild(card);}

// ── PROJECTS ──────────────────────────────────────────────────
async function rProjects(){
  const q=t();const c=document.getElementById('page-project');c.innerHTML='';
  const sc={Active:"#4fc3f7","In Development":"#ffb74d",Testing:"#81c784",Planning:"#ce93d8"};
  c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('project')));
  c.appendChild(el('p',{style:{color:q.tm,marginBottom:'18px',fontSize:'12px'}},T('projectSub')));
  const list=el('div',{style:{display:'flex',flexDirection:'column',gap:'16px'}});
  (await DB.getProjects()).forEach(p=>{const s=sc[p.status]||'#fff';let ie=null;if(p.image)ie=el('img',{src:p.image,style:{width:'100%',height:'140px',objectFit:'cover',borderRadius:'9px',marginBottom:'12px',border:`1px solid ${q.sb}`}});else if(S.isAdmin)ie=el('div',{style:{width:'100%',height:'70px',border:`2px dashed ${q.sb}`,borderRadius:'9px',marginBottom:'12px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:q.tm,fontSize:'11px'},onclick:()=>{S._pimgid=p.id;document.getElementById('fi-pimg').click();}},'📷 Upload project image');list.appendChild(gc({padding:'22px'},ie,el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'7px',marginBottom:'10px'}},el('div',{},el('h2',{style:{color:q.tx,fontSize:'17px',fontWeight:'800',marginBottom:'3px'}},p.name),el('p',{style:{color:q.tm,fontSize:'11px'}},p.desc)),el('span',{style:{background:`${s}22`,color:s,border:`1px solid ${s}44`,borderRadius:'20px',padding:'2px 10px',fontSize:'10px',fontWeight:'700'}},p.status)),el('div',{style:{display:'flex',gap:'5px',flexWrap:'wrap',marginBottom:'12px'}},...p.tags.map(x=>tg(x))),el('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginBottom:'12px'}},el('div',{},el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'2px'}},'TEAM'),...p.team.map(n=>el('div',{style:{color:q.tx,fontSize:'11px',marginBottom:'1px'}},'• '+n))),el('div',{},el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'2px'}},'BUDGET'),el('div',{style:{color:q.ac,fontSize:'16px',fontWeight:'900'}},'$'+p.budget.toLocaleString()))),el('div',{},el('div',{style:{display:'flex',justifyContent:'space-between',fontSize:'10px',color:q.tm,marginBottom:'4px'}},el('span',{},'PROGRESS'),el('span',{style:{color:q.ac,fontWeight:'700'}},p.progress+'%')),pb(p.progress))));});
  c.appendChild(list);
}
async function onFiPimg(e){const f=e.target.files[0];if(!f)return;rf(f).then(d=>{DB.updProject(S._pimgid,{image:d});rProjects();notif('✅ Image uploaded!','success');});e.target.value='';}
// ── GALLERY (Admin upload) ────────────────────────────────────
async function rGallery(){
  const q=t();const c=document.getElementById('page-gallery');c.innerHTML='';
  c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('gallery')));
  c.appendChild(el('p',{style:{color:q.tm,marginBottom:'14px',fontSize:'12px'}},T('gallerySub')));
  if(S.isAdmin){
    const row=el('div',{style:{display:'flex',gap:'8px',marginBottom:'18px',flexWrap:'wrap',alignItems:'center'}});
    row.appendChild(btn('📷 Upload Photo',()=>{S._galType='image';document.getElementById('fi-gal').click();},false,{fontSize:'12px'}));
    row.appendChild(btn('🎬 Upload Video',()=>{S._galType='video';document.getElementById('fi-gal').click();},true,{fontSize:'12px'}));
    row.appendChild(el('span',{style:{color:q.tm,fontSize:'11px'}},'Admin: add media to gallery'));
    c.appendChild(row);
  }
  const gal=await DB.getGallery();
  const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'13px'}});
  gal.forEach(item=>{
    const card=gc({overflow:'hidden',cursor:'pointer',position:'relative'});
    const prev=el('div',{style:{height:'140px',display:'flex',alignItems:'center',justifyContent:'center',background:q.sur,fontSize:'56px',overflow:'hidden'}});
    if(item.mediaUrl){
      if(item.type==='video'){const v=el('video',{style:{width:'100%',height:'100%',objectFit:'cover'}});v.src=item.mediaUrl;v.muted=true;v.loop=true;v.autoplay=true;prev.appendChild(v);prev.appendChild(el('div',{style:{position:'absolute',top:'6px',left:'6px',background:'rgba(0,0,0,.6)',color:'#fff',borderRadius:'4px',padding:'2px 6px',fontSize:'9px',fontWeight:'700'}},'▶ VIDEO'));}
      else{const img=el('img',{style:{width:'100%',height:'100%',objectFit:'cover'}});img.src=item.mediaUrl;prev.appendChild(img);}
    }else prev.appendChild(document.createTextNode(item.emoji));
    card.appendChild(prev);
    const bot=el('div',{style:{padding:'9px 12px',display:'flex',justifyContent:'space-between',alignItems:'center'}});
    bot.appendChild(el('div',{},el('div',{style:{color:q.tx,fontSize:'11px',fontWeight:'600'}},item.title),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'1px'}},(item.type==='video'?'🎬':'📷')+' '+item.cat)));
    if(S.isAdmin)bot.appendChild(el('button',{style:{background:'rgba(255,60,60,.12)',border:'1px solid #f44',color:'#f88',borderRadius:'5px',padding:'2px 6px',fontSize:'10px',cursor:'pointer'},onclick:async e=>{e.stopPropagation();if(confirm('Delete this item?')){await DB.deleteGallery(item.id);rGallery();notif('Deleted.','success');}}},'✕'));
    card.appendChild(bot);
    card.onclick=()=>{
      const m=document.getElementById('m-gal');m.style.display='flex';m.innerHTML='';
      const mc=gc({padding:'28px',textAlign:'center',maxWidth:'440px',width:'94vw',borderRadius:'18px'});
      if(item.mediaUrl){if(item.type==='video'){const v=el('video',{controls:'',style:{width:'100%',borderRadius:'9px',marginBottom:'12px',maxHeight:'260px'}});v.src=item.mediaUrl;mc.appendChild(v);}else mc.appendChild(el('img',{src:item.mediaUrl,style:{width:'100%',borderRadius:'9px',marginBottom:'12px',maxHeight:'260px',objectFit:'cover'}}));}
      else mc.appendChild(el('div',{style:{fontSize:'80px',marginBottom:'12px'}},item.emoji));
      mc.appendChild(el('div',{style:{color:q.ac,fontSize:'15px',fontWeight:'700'}},item.title));mc.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',marginTop:'4px'}},item.cat+' · '+item.type));mc.appendChild(btn('Close',()=>closeM('m-gal'),false,{marginTop:'16px'}));m.appendChild(mc);
    };
    grid.appendChild(card);
  });
  c.appendChild(grid);
}
function onFiGal(e){
  const f=e.target.files[0];if(!f)return;
  const type=S._galType||'image';
  e.target.value='';
  // Read file then show form modal
  rf(f).then(dataUrl=>{
    const q=t();const m=document.getElementById('m-gal');m.style.display='flex';m.innerHTML='';
    let gTitle='';let gCat='Event';
    const card=gc({padding:'26px',width:'420px',maxWidth:'96vw',borderRadius:'18px',position:'relative'});
    card.appendChild(el('button',{style:{position:'absolute',top:'11px',right:'13px',background:'none',border:'none',color:q.tm,fontSize:'18px',cursor:'pointer'},onclick:()=>closeM('m-gal')},'✕'));
    card.appendChild(el('div',{style:{color:q.ac,fontSize:'14px',fontWeight:'800',marginBottom:'14px'}},(type==='video'?'🎬':'📷')+' Upload Media ke Gallery'));
    // Preview
    const prevBox=el('div',{style:{height:'160px',borderRadius:'9px',overflow:'hidden',marginBottom:'14px',background:'#000',display:'flex',alignItems:'center',justifyContent:'center'}});
    if(type==='video'){const v=el('video',{style:{width:'100%',height:'100%',objectFit:'cover'}});v.src=dataUrl;v.muted=true;v.loop=true;v.autoplay=true;prevBox.appendChild(v);}
    else prevBox.appendChild(el('img',{src:dataUrl,style:{width:'100%',height:'100%',objectFit:'cover'}}));
    card.appendChild(prevBox);
    const is={background:q.ib,borderColor:q.sb,color:q.tx};
    const lb=tx=>el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'3px'}},tx);
    card.appendChild(lb('JUDUL *'));
    const ti=el('input',{class:'inf',placeholder:'Judul media...',style:is});
    ti.oninput=e2=>{gTitle=e2.target.value;};card.appendChild(ti);
    card.appendChild(lb('KATEGORI'));
    const sel=el('select',{class:'inf',style:{...is,cursor:'pointer'}});
    ['Event','Product','Media','BTS','Achievement','Other'].forEach(ct=>{
      const o=el('option',{value:ct},ct);if(ct===gCat)o.selected=true;sel.appendChild(o);
    });
    sel.onchange=e2=>{gCat=e2.target.value;};card.appendChild(sel);
    const brow=el('div',{style:{display:'flex',gap:'8px',marginTop:'14px'}});
    brow.appendChild(btn('✅ Upload ke Gallery',async ()=>{
      if(!gTitle.trim()){notif('Judul wajib diisi!','error');return;}
      await DB.addGallery({type,emoji:type==='video'?'🎬':'🖼️',title:gTitle.trim(),cat:gCat,mediaUrl:dataUrl});
      closeM('m-gal');rGallery();notif('✅ Media berhasil ditambahkan!','success');
    },false,{fontSize:'12px'}));
    brow.appendChild(btn('Batal',()=>closeM('m-gal'),true,{fontSize:'12px'}));
    card.appendChild(brow);m.appendChild(card);
    setTimeout(()=>ti.focus(),50);
  }).catch(()=>notif('Gagal membaca file.','error'));
}

// ── STORE (Admin edit: stock, price, photo) ───────────────────
async function rStore(){
  const q=t();const c=document.getElementById('page-store');c.innerHTML='';
  const prods=await DB.getProducts();
  const hdr=el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px',flexWrap:'wrap',gap:'9px'}},
    el('div',{},el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'3px'}},'🛍️ Merchandise'),el('p',{style:{color:q.tm,fontSize:'12px'}},T('storeSub'))));
  const hdrRight=el('div',{style:{display:'flex',gap:'8px',alignItems:'center'}});
  if(S.isAdmin)hdrRight.appendChild(btn('➕ New Item',()=>openProdNew(),false,{fontSize:'11px'}));
  hdr.appendChild(hdrRight);c.appendChild(hdr);
  if(!prods.length){c.appendChild(el('div',{style:{textAlign:'center',padding:'60px',color:q.tm}},'Belum ada merchandise. Cek kembali nanti!'));return;}
  const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))',gap:'16px'}});
  prods.forEach(p=>{
    const wrap=el('div',{style:{position:'relative'}});
    const imgA=el('div',{style:{height:'72px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'10px',borderRadius:'9px',overflow:'hidden',background:q.sur}});
    if(p.image)imgA.appendChild(el('img',{src:p.image,style:{width:'72px',height:'72px',objectFit:'cover',borderRadius:'9px'}}));
    else imgA.appendChild(el('div',{style:{fontSize:'52px'}},p.e));
    const availBadge=p.stock<=0?el('div',{style:{background:'rgba(244,68,68,.12)',border:'1px solid #f44',color:'#f88',borderRadius:'7px',padding:'5px 10px',fontSize:'11px',textAlign:'center',marginTop:'6px'}},'❌ Habis'):
      el('div',{style:{background:p.stock<5?'rgba(255,183,77,.1)':'rgba(100,220,100,.07)',border:`1px solid ${p.stock<5?'#ffb74d':'#64dc64'}`,color:p.stock<5?'#ffb74d':'#64dc64',borderRadius:'7px',padding:'5px 10px',fontSize:'11px',textAlign:'center',marginTop:'6px'}},p.stock<5?'⚠️ Stok terbatas':'✅ Tersedia');
    const card=gc({padding:'17px'},imgA,
      el('div',{style:{color:q.ac,fontSize:'9px',fontWeight:'700',letterSpacing:'.07em'}},p.cat),
      el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700',margin:'3px 0 5px'}},p.name),
      el('div',{style:{color:q.tm,fontSize:'10px',lineHeight:'1.5',marginBottom:'9px'}},p.desc),
      availBadge);
    wrap.appendChild(card);
    if(S.isAdmin){
      const aRow=el('div',{style:{display:'flex',gap:'4px',position:'absolute',top:'9px',right:'9px'}});
      aRow.appendChild(el('button',{style:{background:q.as,border:`1px solid ${q.ac}`,color:q.ac,borderRadius:'6px',padding:'3px 7px',fontSize:'10px',cursor:'pointer'},onclick:e=>{e.stopPropagation();openProdEdit(p.id);}},T('edit')));
      aRow.appendChild(el('button',{style:{background:'rgba(244,68,68,.12)',border:'1px solid #f44',color:'#f88',borderRadius:'6px',padding:'3px 6px',fontSize:'10px',cursor:'pointer'},onclick:async e=>{e.stopPropagation();if(confirm('Delete "'+p.name+'"?')){await DB.deleteProduct(p.id);rStore();notif('🗑️ Dihapus.','error');}}},'✕'));
      wrap.appendChild(aRow);
    }
    grid.appendChild(wrap);
  });
  c.appendChild(grid);
}

async function openProdNew(){
  const q=t();const m=document.getElementById('m-prod');m.style.display='flex';
  const form={name:'',price:0,stock:0,desc:'',cat:'Apparel',e:'📦',image:null};
  const render=()=>{
    m.innerHTML='';
    const card=gc({padding:'26px',width:'400px',maxWidth:'96vw',position:'relative',borderRadius:'18px',maxHeight:'90vh',overflowY:'auto'});
    card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'19px',cursor:'pointer'},onclick:()=>closeM('m-prod')},'✕'));
    card.appendChild(el('h2',{style:{color:q.ac,marginBottom:'14px',fontSize:'15px'}},'➕ Add New Product'));
    const is={background:q.ib,borderColor:q.sb,color:q.tx};const lb=tx=>el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'2px'}},tx);
    const imgRow=el('div',{style:{display:'flex',alignItems:'center',gap:'10px',marginBottom:'12px'}});
    imgRow.appendChild(el('div',{style:{width:'52px',height:'52px',borderRadius:'8px',border:`1px solid ${q.sb}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'28px'}},form.image?el('img',{src:form.image,style:{width:'52px',height:'52px',objectFit:'cover',borderRadius:'8px'}}):form.e));
    imgRow.appendChild(btn('📷 Photo',async ()=>{S._cb['fi-prod']=async file=>{const d=await rf(file);form.image=d;render();};document.getElementById('fi-prod').click();},true,{fontSize:'10px'}));
    if(form.image)imgRow.appendChild(btn('✕',()=>{form.image=null;render();},true,{fontSize:'10px',borderColor:'#f44',color:'#f88'}));
    card.appendChild(imgRow);
    lb('EMOJI (icon)');card.appendChild(lb('EMOJI'));const ei=el('input',{class:'inf',style:is,placeholder:'📦'});ei.value=form.e;ei.oninput=e=>{form.e=e.target.value;};card.appendChild(ei);
    card.appendChild(lb('NAME'));const ni=el('input',{class:'inf',style:is,placeholder:'Product name'});ni.oninput=e=>{form.name=e.target.value;};card.appendChild(ni);
    card.appendChild(lb('CATEGORY'));const cats=['Apparel','Bundle','Accessories','Hardware','Digital','Other'];const catSel=el('select',{class:'inf',style:{...is,cursor:'pointer'}});cats.forEach(c2=>{const o=el('option',{value:c2},c2);if(form.cat===c2)o.selected=true;catSel.appendChild(o);});catSel.onchange=e=>{form.cat=e.target.value;};card.appendChild(catSel);
    card.appendChild(lb('PRICE ($)'));const pi=el('input',{type:'number',class:'inf',style:is,placeholder:'0'});pi.value=form.price;pi.oninput=e=>{form.price=parseFloat(e.target.value)||0;};card.appendChild(pi);
    card.appendChild(lb('STOCK'));const si=el('input',{type:'number',class:'inf',style:is,placeholder:'0'});si.value=form.stock;si.oninput=e=>{form.stock=parseInt(e.target.value)||0;};card.appendChild(si);
    card.appendChild(lb('DESCRIPTION'));const di=el('textarea',{class:'inf',rows:'3',style:{...is,resize:'vertical'},placeholder:'Product description'});di.oninput=e=>{form.desc=e.target.value;};card.appendChild(di);
    const br=el('div',{style:{display:'flex',gap:'7px'}});
    br.appendChild(btn('➕ Add Product',async ()=>{if(!form.name){notif('Name required!','error');return;}const prods=await DB.getProducts();const newId=Math.max(0,...prods.map(x=>x.id))+1;prods.push({id:newId,name:form.name,price:form.price,stock:form.stock,desc:form.desc,cat:form.cat,e:form.e,image:form.image});DB.saveProducts(prods);closeM('m-prod');rStore();notif('✅ Product added!','success');},false));
    br.appendChild(btn('Cancel',()=>closeM('m-prod'),true));card.appendChild(br);m.appendChild(card);
  };render();
}
async function openProdEdit(id){
  const prods=await DB.getProducts();const p=prods.find(x=>x.id===id);if(!p)return;
  const q=t();const m=document.getElementById('m-prod');m.style.display='flex';
  const form={name:p.name,price:p.price,stock:p.stock,desc:p.desc,image:p.image};
  const render=()=>{
    m.innerHTML='';
    const card=gc({padding:'26px',width:'380px',maxWidth:'96vw',position:'relative',borderRadius:'18px'});
    card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'19px',cursor:'pointer'},onclick:()=>closeM('m-prod')},'✕'));
    card.appendChild(el('h2',{style:{color:q.ac,marginBottom:'14px',fontSize:'15px'}},'🛍️ Edit Product: '+p.name));
    const is={background:q.ib,borderColor:q.sb,color:q.tx};const lb=tx=>el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'2px'}},tx);
    const imgRow=el('div',{style:{display:'flex',alignItems:'center',gap:'10px',marginBottom:'12px'}});
    if(form.image)imgRow.appendChild(el('img',{src:form.image,style:{width:'52px',height:'52px',objectFit:'cover',borderRadius:'8px',border:`1px solid ${q.sb}`}}));
    else imgRow.appendChild(el('div',{style:{fontSize:'38px'}},p.e));
    imgRow.appendChild(btn('📷 Product Photo',async ()=>{S._cb['fi-prod']=async file=>{const d=await rf(file);form.image=d;render();};document.getElementById('fi-prod').click();},true,{fontSize:'10px'}));
    if(form.image)imgRow.appendChild(btn('✕ Remove',()=>{form.image=null;render();},true,{fontSize:'10px',borderColor:'#f44',color:'#f88'}));
    card.appendChild(imgRow);
    card.appendChild(lb('PRODUCT NAME'));const ni=el('input',{class:'inf',style:is});ni.value=form.name;ni.oninput=e=>{form.name=e.target.value;};card.appendChild(ni);
    card.appendChild(lb('PRICE ($)'));const pi=el('input',{type:'number',class:'inf',style:is});pi.value=form.price;pi.oninput=e=>{form.price=parseFloat(e.target.value)||0;};card.appendChild(pi);
    card.appendChild(lb('STOCK'));const si=el('input',{type:'number',class:'inf',style:is});si.value=form.stock;si.oninput=e=>{form.stock=parseInt(e.target.value)||0;};card.appendChild(si);
    card.appendChild(lb('DESCRIPTION'));const di=el('textarea',{class:'inf',rows:'3',style:{...is,resize:'vertical'}});di.textContent=form.desc;di.oninput=e=>{form.desc=e.target.value;};card.appendChild(di);
    card.appendChild(gc({padding:'10px',marginBottom:'12px',display:'flex',justifyContent:'space-between'},el('span',{style:{color:q.tm,fontSize:'11px'}},'$'+form.price+' · Stock: '+form.stock),el('span',{style:{color:form.stock===0?'#f88':form.stock<5?'#ffb74d':q.ac,fontSize:'11px',fontWeight:'700'}},form.stock===0?'❌ Out':form.stock<5?'⚠️ Low':'✅ Available')));
    const br=el('div',{style:{display:'flex',gap:'7px'}});br.appendChild(btn('💾 '+T('save'),async ()=>{await DB.updProduct(id,{name:form.name,price:form.price,stock:form.stock,desc:form.desc,image:form.image});closeM('m-prod');rStore();notif('✅ Product updated!','success');},false));br.appendChild(btn(T('cancel'),()=>closeM('m-prod'),true));card.appendChild(br);m.appendChild(card);
  };render();
}
async function onFiProd(e){const f=e.target.files[0];if(!f)return;if(S._cb['fi-prod'])S._cb['fi-prod'](f);e.target.value='';}

// ── SOCIAL ────────────────────────────────────────────────────
async function rSocial(){const q=t();const c=document.getElementById('page-social');c.innerHTML='';const sc=[{n:"Instagram",h:"@starlivegroup",c:"#E1306C",e:"📸",f:"48.2K"},{n:"Facebook",h:"StarLive Group",c:"#1877F2",e:"📘",f:"31.5K"},{n:"Twitter/X",h:"@StarLiveGrp",c:"#1DA1F2",e:"🐦",f:"22.8K"},{n:"YouTube",h:"StarLive Official",c:"#FF0000",e:"▶️",f:"15.3K"},{n:"TikTok",h:"@starliveofficial",c:"#69C9D0",e:"🎵",f:"67.1K"}];c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('social')));c.appendChild(el('p',{style:{color:q.tm,marginBottom:'18px',fontSize:'12px'}},T('socialSub')));const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))',gap:'16px'}});sc.forEach(s=>grid.appendChild(gc({padding:'22px',border:`1px solid ${s.c}44`},el('div',{style:{display:'flex',alignItems:'center',gap:'11px',marginBottom:'12px'}},el('div',{style:{fontSize:'28px',width:'48px',height:'48px',display:'flex',alignItems:'center',justifyContent:'center',background:`${s.c}18`,borderRadius:'11px'}},s.e),el('div',{},el('div',{style:{color:s.c,fontWeight:'800',fontSize:'14px'}},s.n),el('div',{style:{color:q.tm,fontSize:'11px'}},s.h))),el('div',{style:{color:q.tx,fontSize:'20px',fontWeight:'900',marginBottom:'3px'}},s.f),el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'13px'}},'followers'),btn('Follow →',()=>{},false,{width:'100%',borderColor:s.c,color:s.c,background:`${s.c}18`}))));c.appendChild(grid);}
// ── DASHBOARD (Admin only — full monitoring) ──────────────────
async function rDash(){
  const q=t();const c=document.getElementById('page-dashboard');c.innerHTML='';
  if(!S.isAdmin){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'🔒'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700'}},'Admin Access Only')));return;}
  c.appendChild(el('h1',{style:{color:q.ac,fontSize:'22px',fontWeight:'800',marginBottom:'14px'}},'📊 Dashboard'));
  const tabs=[['analytics','📈 Analytics'],['users','👥 Users'],['store','🛍️ Merchandise'],['challenges','🏆 Challenges'],['log','📋 Log']];
  const tr=el('div',{style:{display:'flex',gap:'6px',marginBottom:'20px',flexWrap:'wrap'}});
  tabs.forEach(([id,lb])=>tr.appendChild(btn(lb,()=>{S.dtab=id;rDash();},S.dtab!==id,{fontSize:'11px'})));
  c.appendChild(tr);

  if(S.dtab==='users'){
    const us=await DB.getUsers();
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'12px'}},'👥 Registered Users ('+us.length+')'));
    const grid=el('div',{style:{display:'flex',flexDirection:'column',gap:'10px'}});
    us.forEach(u=>{
      const card=gc({padding:'14px'});
      const row1=el('div',{style:{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}});
      row1.appendChild(avEl(u,38));
      row1.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700'}},u.username+(u.role==='admin'?' 👑':'')),el('div',{style:{color:q.tm,fontSize:'10px'}},u.email)));
      row1.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'5px'}},el('div',{class:'dot-s '+(u.online?'on':'off')}),el('span',{style:{color:u.online?'#64dc64':q.tm,fontSize:'10px'}},u.online?'Online':'Offline')));
      row1.appendChild(btn('👁',()=>openUserAdmin(u),true,{fontSize:'10px',padding:'3px 7px'}));
      card.appendChild(row1);
      const stats=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'6px'}});
      [['Friends',(u.friends||[]).length],['Badges',(u.badges||[]).length],['Joined',fdate(u.joinDate)]].forEach(([l,v])=>stats.appendChild(el('div',{style:{background:q.sur,borderRadius:'6px',padding:'5px',textAlign:'center'}},el('div',{style:{color:q.ac,fontWeight:'800',fontSize:'12px'}},v),el('div',{style:{color:q.tm,fontSize:'8px'}},l))));
      card.appendChild(stats);grid.appendChild(card);
    });c.appendChild(grid);


  } else if(S.dtab==='store'){
    const [ordersRaw,prodsList]=await Promise.all([DB.getStoreOrders(),DB.getProducts()]);
    const orders=ordersRaw.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    const topReqs=[];
    const totalRev=orders.reduce((s,o)=>s+o.total,0);
    const row=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',marginBottom:'16px'}});
    [[orders.length,'📦 Total Orders','#4fc3f7'],['$'+totalRev.toFixed(2),'💰 Revenue','#81c784'],[prodsList.filter(p=>p.stock===0).length,'❌ Out of Stock','#f44']].forEach(([v,l,c2])=>row.appendChild(gc({padding:'14px',textAlign:'center',border:`1px solid ${c2}44`},el('div',{style:{fontSize:'20px',fontWeight:'900',color:c2}},v),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'3px'}},l))));
    c.appendChild(row);
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'10px'}},'📋 Recent Orders'));
    if(!orders.length){c.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',textAlign:'center',padding:'20px'}},'No orders yet.'));}
    orders.slice(0,20).forEach(o=>{
      c.appendChild(gc({padding:'12px',marginBottom:'8px'},el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},el('div',{},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'700'}},o.userName+' — $'+o.total.toFixed(2)),el('div',{style:{color:q.tm,fontSize:'10px'}},fdate(o.createdAt)+' · '+o.items+' item(s)')),el('span',{style:{background:'rgba(100,220,100,.12)',color:'#64dc64',borderRadius:'20px',padding:'2px 9px',fontSize:'9px',fontWeight:'700'}},'✅ Paid'))));
    });

  } else if(S.dtab==='analytics'){
    const pv=await DB.getPageViews();const today=new Date().toISOString().slice(0,10);
    const days=Object.keys(pv.days||{}).sort().slice(-14);
    const todayData=pv.days?.[today]||{total:0,pages:{}};
    const thisWeek=days.slice(-7).reduce((s,d)=>s+(pv.days[d]?.total||0),0);
    const thisMonth=days.reduce((s,d)=>s+(pv.days[d]?.total||0),0);
    c.appendChild(el('div',{style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',marginBottom:'16px'}},...[['Today',todayData.total,'#4fc3f7'],['This Week',thisWeek,'#FAB715'],['This Month',thisMonth,'#81c784']].map(([l,v,clr])=>gc({padding:'14px',textAlign:'center',border:`1px solid ${clr}44`},el('div',{style:{fontSize:'24px',fontWeight:'900',color:clr}},v),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'3px'}},l)))));
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'10px'}},'📅 Daily Views (Last 14 Days)'));
    if(days.length){
      const maxV=Math.max(...days.map(d=>pv.days[d]?.total||0),1);
      const chart=el('div',{style:{display:'flex',alignItems:'flex-end',gap:'5px',height:'100px',padding:'0 0 20px',overflow:'auto'}});
      days.forEach(d=>{const v=pv.days[d]?.total||0;const bar=el('div',{style:{flex:'1',minWidth:'28px',display:'flex',flexDirection:'column',alignItems:'center',gap:'2px'}},el('div',{style:{color:q.ac,fontSize:'8px',fontWeight:'700'}},v||''),el('div',{style:{width:'100%',background:`${q.ac}33`,borderRadius:'3px 3px 0 0',height:Math.max(4,v/maxV*70)+'px',border:`1px solid ${q.ac}55`}}),el('div',{style:{color:q.tm,fontSize:'8px',transform:'rotate(-45deg)',transformOrigin:'top left',whiteSpace:'nowrap',marginTop:'4px'}},d.slice(5)));chart.appendChild(bar);});
      c.appendChild(gc({padding:'16px'},chart));
    }
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'10px'}},'🔗 Top Pages Today'));
    const pageNames={home:'🏠 Home',affiliation:'🤝 Affiliation',creator:'👨‍💻 Creator',project:'🚀 Project',gallery:'🖼️ Gallery',store:'🛒 Store',social:'🌐 Social',fraction:'🔱 Fraction',challenge:'🏆 Challenge',myaccount:'👤 My Account',dashboard:'📊 Dashboard',vault:'🔐 Vault'};
    const topPages=Object.entries(todayData.pages||{}).sort((a,b)=>b[1]-a[1]).slice(0,8);
    if(topPages.length){const pg=el('div',{style:{display:'flex',flexDirection:'column',gap:'5px'}});topPages.forEach(([pg2,cnt])=>{const pct=Math.round(cnt/todayData.total*100)||0;pg.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'6px 10px',background:q.sur,borderRadius:'7px'}},el('span',{style:{color:q.tx,fontSize:'11px',flex:'1'}},(pageNames[pg2]||pg2)),el('div',{style:{flex:'2',background:'rgba(255,255,255,.07)',borderRadius:'99px',height:'5px',overflow:'hidden'}},el('div',{style:{width:pct+'%',height:'100%',background:q.ac,borderRadius:'99px'}})),el('span',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',minWidth:'28px',textAlign:'right'}},cnt)));});c.appendChild(gc({padding:'14px'},pg));}
    else c.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',textAlign:'center',padding:'20px'}},'No page view data for today yet.'));

  } else if(S.dtab==='challenges'){
    const chs=await DB.getChallenges();
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'10px'}},'🏆 Challenge Management'));
    const pending=chs.filter(x=>x.status==='pending');
    if(pending.length){
      c.appendChild(el('div',{style:{color:'#ffb74d',fontSize:'11px',fontWeight:'700',marginBottom:'8px'}},'⏳ Pending Approval ('+pending.length+')'));
      for(const ch of pending){

        const card=gc({padding:'14px',marginBottom:'8px',border:'1px solid rgba(255,183,21,.3)'});
        card.appendChild(el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700',marginBottom:'3px'}},ch.title));
        card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'8px'}},'By: '+ch.createdByName+' · '+ch.questions.length+' questions'));
        const brow=el('div',{style:{display:'flex',gap:'6px'}});
        brow.appendChild(btn('✅ Approve',async ()=>{await DB.updChallenge(ch.id,{status:'approved'});notif('✅ Challenge approved!','success');rDash();},false,{fontSize:'10px',padding:'4px 10px'}));
        brow.appendChild(btn('✕ Reject',async ()=>{await DB.updChallenge(ch.id,{status:'rejected'});notif('Challenge rejected.','error');rDash();},true,{fontSize:'10px',padding:'4px 8px',borderColor:'#f44',color:'#f88'}));
        card.appendChild(brow);c.appendChild(card);
      
}
    }
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'8px',marginTop:'14px'}},'📋 All Challenges ('+chs.length+')'));
    for(const ch of chs){

      const SC={pending:'#ffb74d',approved:'#64dc64',rejected:'#f44'};const sc=SC[ch.status]||'#aaa';
      const attempts=(ch.attempts||[]).length;
      c.appendChild(gc({padding:'12px',marginBottom:'6px',border:`1px solid ${sc}33`},el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},el('div',{},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'700'}},ch.title),el('div',{style:{color:q.tm,fontSize:'10px'}},ch.type+' · '+ch.questions.length+' Q · '+attempts+' attempts')),el('div',{style:{display:'flex',alignItems:'center',gap:'6px'}},el('span',{style:{background:`${sc}18`,color:sc,borderRadius:'20px',padding:'2px 8px',fontSize:'9px',fontWeight:'700'}},ch.status.toUpperCase()),btn('✕',async ()=>{if(confirm('Delete this challenge?')){await DB.delChallenge(ch.id);rDash();}},true,{fontSize:'10px',padding:'2px 6px',borderColor:'#f44',color:'#f88'})))));
    
}
  } else if(S.dtab==='log'){
    const [pv2,chs3,usersForLog]=await Promise.all([DB.getPageViews(),DB.getChallenges(),DB.getUsers()]);
    const ords2=[];const rqs2=[];
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'4px'}},'📋 Activity Log & Timeline'));
    c.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'12px'}},'Menampilkan semua aktivitas termasuk siapa user yang mengakses setiap halaman.'));
    // User access summary for today
    const today2=new Date().toISOString().slice(0,10);
    const todayUsers=pv2.days?.[today2]?.users||{};
    if(Object.keys(todayUsers).length){
      const usrCard=gc({padding:'13px',marginBottom:'14px',border:`1px solid ${q.ac}33`});
      usrCard.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'9px'}},'👤 Akses User Hari Ini ('+today2+')'));
      const ugrid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:'7px'}});
      Object.entries(todayUsers).sort((a,b)=>b[1].total-a[1].total).forEach(([uname,ud])=>{
        const uc=el('div',{style:{background:q.sur,borderRadius:'7px',padding:'8px'}});
        uc.appendChild(el('div',{style:{color:q.tx,fontSize:'11px',fontWeight:'700',marginBottom:'4px'}},uname));
        uc.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',marginBottom:'4px'}},ud.total+' page view'));
        Object.entries(ud.pages||{}).sort((a,b)=>b[1]-a[1]).slice(0,3).forEach(([pg3,cnt3])=>{
          uc.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',display:'flex',justifyContent:'space-between'}},el('span',{},pg3),el('span',{style:{color:q.ac}},cnt3+'×')));
        });
        ugrid.appendChild(uc);
      });
      usrCard.appendChild(ugrid);c.appendChild(usrCard);
    }
    // Access log timeline
    const accessLog=(pv2.accessLog||[]).slice().reverse().slice(0,50);
    const evs=[];
    accessLog.forEach(al=>evs.push({time:al.time,type:'pv',msg:`${al.user} membuka halaman "${al.page}"`,icon:'👁️'}));
    ords2.forEach(o=>evs.push({time:o.createdAt,type:'order',msg:`${o.userName} beli ${o.items} item — $${o.total.toFixed(2)}`,icon:'🛒'}));
    rqs2.forEach(r=>{evs.push({time:r.createdAt,type:'topup',msg:`${r.userName} request top-up $${r.amount.toFixed(2)}`,icon:'💳'});if(r.updatedAt)evs.push({time:r.updatedAt,type:'tupd',msg:`Top-up ${r.userName} → ${r.status.toUpperCase()}`,icon:r.status==='approved'?'✅':'❌'});});
    chs3.forEach(ch=>{evs.push({time:ch.createdAt,type:'chal',msg:`${ch.createdByName} submit Challenge "${ch.title}" [${ch.status.toUpperCase()}]`,icon:'🏆'});(ch.attempts||[]).forEach(a=>evs.push({time:a.date,type:'att',msg:`${a.userName} attempt "${ch.title}" — ${a.score}% ${a.passed?'✅':'❌'}`,icon:'📝'}));});
    (usersForLog).forEach(u2=>{if(u2.joinDate)evs.push({time:u2.joinDate,type:'reg',msg:`${u2.username} mendaftar`,icon:'👤'});});
    evs.sort((a,b)=>new Date(b.time)-new Date(a.time));
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'9px'}},'⏱️ Timeline Lengkap'));
    const TC2={pv:'#4fc3f7',order:'#81c784',topup:'#ffb74d',tupd:'#ffb74d',chal:'#FAB715',att:'#ce93d8',reg:'#64dc64'};
    const tl2=el('div',{style:{position:'relative',paddingLeft:'22px'}});
    tl2.appendChild(el('div',{style:{position:'absolute',left:'7px',top:'0',bottom:'0',width:'2px',background:q.sb,borderRadius:'99px'}}));
    let ld2='';
    evs.slice(0,120).forEach(ev=>{
      const d2=ev.time?ev.time.slice(0,10):'?';const clr2=TC2[ev.type]||q.ac;
      if(d2!==ld2){ld2=d2;tl2.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',fontWeight:'700',margin:'10px 0 4px 4px',background:q.cb,padding:'2px 6px',borderRadius:'4px',display:'inline-block'}},d2));}
      const row2=el('div',{style:{display:'flex',alignItems:'flex-start',gap:'7px',marginBottom:'5px',position:'relative'}});
      row2.appendChild(el('div',{style:{position:'absolute',left:'-18px',top:'5px',width:'9px',height:'9px',borderRadius:'50%',background:clr2,border:`2px solid ${q.cb}`,flexShrink:'0'}}));
      row2.appendChild(el('div',{style:{background:q.sur,borderRadius:'6px',padding:'5px 9px',flex:'1',border:`1px solid ${clr2}22`}},
        el('div',{style:{display:'flex',alignItems:'center',gap:'5px'}},el('span',{style:{fontSize:'10px'}},ev.icon),el('span',{style:{color:q.tx,fontSize:'10px',lineHeight:'1.5'}},ev.msg)),
        el('div',{style:{color:q.tm,fontSize:'8px',marginTop:'1px'}},ev.time?new Date(ev.time).toLocaleString('id-ID'):'—')));
      tl2.appendChild(row2);
    });
    if(evs.length>120)tl2.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',textAlign:'center',padding:'8px'}},'Menampilkan 120 terbaru dari '+evs.length+' total.'));
    if(!evs.length)tl2.appendChild(el('div',{style:{color:q.tm,textAlign:'center',padding:'20px'}},'Belum ada aktivitas.'));
    c.appendChild(gc({padding:'14px'},tl2));
  }
}
async function openUserAdmin(u){
  const q=t();const m=document.getElementById('m-uadmin');m.style.display='flex';m.innerHTML='';
  const card=gc({padding:'28px',width:'420px',maxWidth:'96vw',maxHeight:'88vh',overflowY:'auto',position:'relative',borderRadius:'18px'});
  card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'19px',cursor:'pointer'},onclick:()=>closeM('m-uadmin')},'✕'));
  const cv=el('div',{style:{height:'90px',borderRadius:'9px',marginBottom:'10px',overflow:'hidden',background:'linear-gradient(135deg,#1a0030,#002040)'}});if(u.cover){cv.style.backgroundImage=`url(${u.cover})`;cv.style.backgroundSize='cover';}
  card.appendChild(cv);
  const avRow=el('div',{style:{display:'flex',alignItems:'flex-end',gap:'12px',marginBottom:'12px'}});avRow.appendChild(avEl(u,56));avRow.appendChild(el('div',{},el('div',{style:{color:q.tx,fontSize:'18px',fontWeight:'800'}},u.username),el('div',{style:{color:u.online?'#64dc64':q.tm,fontSize:'12px'}},u.online?'🟢 Online':'⚫ '+ago(u.lastSeen||new Date().toISOString())),el('div',{style:{color:q.ac,fontSize:'11px',marginTop:'3px'}},u.role==='admin'?'👑 Admin':'👤 User')));card.appendChild(avRow);
  card.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',lineHeight:'1.6',marginBottom:'12px'}},u.bio||'No bio.'));
  const info=el('div',{style:{background:q.sur,borderRadius:'9px',padding:'12px',marginBottom:'12px',border:`1px solid ${q.sb}`}});
  [['📧 Email',u.email],['🗓️ Joined',fdate(u.joinDate)],['👥 Friends',(u.friends||[]).length+' friends'],['🔔 Pending',(u.friendRequests||[]).length+' requests']].forEach(([l,v])=>info.appendChild(el('div',{style:{display:'flex',justifyContent:'space-between',padding:'5px 0',borderBottom:`1px solid ${q.sb}`}},el('span',{style:{color:q.tm,fontSize:'11px'}},l),el('span',{style:{color:q.tx,fontSize:'11px',fontWeight:'600'}},v))));
  card.appendChild(info);
  if(S.user&&u.email!==S.user.email){
    card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'8px'}},'⚡ ADMIN ACTIONS'));
    const acts=el('div',{style:{display:'flex',gap:'7px',flexWrap:'wrap'}});
    if(u.role!=='admin')acts.appendChild(btn('👑 Make Admin',async ()=>{if(confirm('Make '+u.username+' admin?')){await DB.updUser(u.id,{role:'admin'});closeM('m-uadmin');rDash();notif('✅ Role updated.','success');}},true,{fontSize:'11px'}));
    else acts.appendChild(btn('👤 Remove Admin',async ()=>{if(confirm('Remove admin from '+u.username+'?')){await DB.updUser(u.id,{role:'user'});closeM('m-uadmin');rDash();notif('✅ Role updated.','success');}},true,{fontSize:'11px'}));
    // Badge grant
    const BADGE_DEFS2=[
      {id:'web_contributor',em:'🛠️',name:'Web Contributor'},{id:'news_contributor',em:'📰',name:'News Contributor'},
      {id:'chat_active',em:'💬',name:'Chat Champion'},{id:'top_buyer',em:'🛒',name:'Top Buyer'},
      {id:'top_donor',em:'💸',name:'Top Donor'},{id:'proctor',em:'⚖️',name:'Proctor'},
      {id:'vice_admin',em:'🌟',name:'Vice Admin'},{id:'top_reader',em:'📚',name:'Avid Reader'},
    ];
    card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',margin:'12px 0 7px'}},'🏅 GRANT / REVOKE BADGES'));
    const freshU=()=>DB.byEmail(u.email);
    const bdgGrid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'5px'}});
    async function renderBdg(){
      bdgGrid.innerHTML='';const cur=await freshU();
      for(const bd of BADGE_DEFS2){

        const has=(cur.badges||[]).includes(bd.id);
        const bcard2=el('div',{style:{display:'flex',alignItems:'center',gap:'7px',padding:'5px 7px',borderRadius:'7px',border:`1px solid ${has?q.ac:q.sb}`,background:has?q.as:'transparent',cursor:'pointer',transition:'all .15s'},onclick:async ()=>{const nb=has?(cur.badges||[]).filter(x=>x!==bd.id):[...(cur.badges||[]),bd.id];await DB.updUser(u.id,{badges:nb});renderBdg();notif((has?'❌ Removed ':'✅ Granted ')+bd.name,'success');}},el('span',{style:{fontSize:'14px'}},bd.em),el('span',{style:{color:has?q.ac:q.tm,fontSize:'10px',fontWeight:has?'700':'400'}},bd.name),has?el('span',{style:{color:q.ac,fontSize:'9px',marginLeft:'auto'}},'✓'):'');
        bdgGrid.appendChild(bcard2);
      
}
    }
    renderBdg();card.appendChild(bdgGrid);
    const FRACTIONS2=['Singularity Nexus','Protocol Zero','Shadow Syntax'];
    const FRACTION_INFO2={'Singularity Nexus':{em:'🌀',color:'#00ffc8'},'Protocol Zero':{em:'⚡',color:'#FAB715'},'Shadow Syntax':{em:'🕶️',color:'#ce93d8'}};
    card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',margin:'12px 0 7px'}},'🔱 ASSIGN FRACTION'));
    const frRow2=el('div',{style:{display:'flex',flexDirection:'column',gap:'5px'}});
    for(const fr of FRACTIONS2){
const fi=FRACTION_INFO2[fr];const active=u.fraction===fr;frRow2.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'7px 10px',borderRadius:'7px',border:`1px solid ${active?fi.color:q.sb}`,background:active?`${fi.color}12`:'rgba(255,255,255,.03)',cursor:'pointer',transition:'all .15s'},onclick:async ()=>{const newFrac=active?null:fr;await DB.updUser(u.id,{fraction:newFrac});notif((newFrac?'✅ Assigned '+newFrac:'❌ Removed fraction'),'success');closeM('m-uadmin');rDash();}},el('div',{style:{fontSize:'18px'}},fi.em),el('div',{style:{color:active?fi.color:q.tx,fontSize:'11px',fontWeight:active?'700':'400',flex:'1'}},fr),active?el('span',{style:{color:fi.color,fontSize:'10px',fontWeight:'700'}},'✓'):null));
}
    card.appendChild(frRow2);
  }
  m.appendChild(card);
}

// ── VAULT 2.0 — File Explorer + Doc Editor + ID Card ──────────
// ── DB methods for new vault ──────────────────────────────────
const VDB = {
  async getFolders(category) {
    if (!supa) return [];
    const { data } = await supa.from('vault_folders').select('*')
      .eq('category', category).order('name');
    return data || [];
  },
  async addFolder(f) {
    if (!supa) return null;
    const { data } = await supa.from('vault_folders').insert({
      name: f.name, category: f.category, parent_id: f.parent_id || null,
      tags: f.tags || [], color: f.color || '#FAB715', created_by: S.user?.id
    }).select().single();
    return data;
  },
  async updateFolder(id, upd) {
    if (!supa) return;
    await supa.from('vault_folders').update({ ...upd, updated_at: new Date().toISOString() }).eq('id', id);
  },
  async deleteFolder(id) {
    if (!supa) return;
    await supa.from('vault_folders').delete().eq('id', id);
  },
  async getFiles(folderId) {
    if (!supa) return [];
    const { data } = await supa.from('vault_files').select('*')
      .eq('folder_id', folderId).order('name');
    return data || [];
  },
  async getAllFiles(category) {
    if (!supa) return [];
    // join through folders
    const folders = await this.getFolders(category);
    const folderIds = folders.map(f => f.id);
    if (!folderIds.length) return [];
    const { data } = await supa.from('vault_files').select('*')
      .in('folder_id', folderIds).order('created_at', { ascending: false });
    return data || [];
  },
  async addFile(file) {
    if (!supa) return null;
    const { data } = await supa.from('vault_files').insert({
      folder_id: file.folder_id, name: file.name, slv_code: file.slv_code,
      file_type: file.file_type, content: file.content || null,
      raw_text: file.raw_text || '', tags: file.tags || [],
      owner: file.owner || '', owner_id: file.owner_id || '',
      file_url: file.file_url || null, file_size: file.file_size || 0,
      uploaded: false, created_by: S.user?.id,
      qr_token: file.qr_token || null
    }).select().single();
    await DB.addVaultLog({ action: 'Buat', title: file.name, code: file.slv_code, by: S.user?.username });
    return data;
  },
  async updateFile(id, upd) {
    if (!supa) return;
    await supa.from('vault_files').update({ ...upd, updated_at: new Date().toISOString() }).eq('id', id);
    await DB.addVaultLog({ action: 'Edit', title: upd.name || '?', code: upd.slv_code || '?', by: S.user?.username });
  },
  async searchAll(q) {
    if (!supa || !q) return [];
    const { data } = await supa.from('vault_files').select('*, folder:vault_folders(name,category)')
      .or(`name.ilike.%${q}%,raw_text.ilike.%${q}%,owner.ilike.%${q}%,slv_code.ilike.%${q}%`);
    return data || [];
  },
  async logScan(fileId, slvCode, scanToken) {
    if (!supa) return;
    await supa.from('vault_qr_scans').insert({
      file_id: fileId, slv_code: slvCode, scanned_by: S.user?.id, scan_token: scanToken
    });
  },
  async getScanLogs(fileId) {
    if (!supa) return [];
    const { data } = await supa.from('vault_qr_scans').select('*, user:profiles(username)')
      .eq('file_id', fileId).order('created_at', { ascending: false }).limit(20);
    return data || [];
  }
};

// ── VAULT STATE ────────────────────────────────────────────────
const VS = {
  cat: 'pegawai',       // current category tab
  folderId: null,       // null = root
  folderPath: [],       // breadcrumb [{id,name}]
  view: 'grid',         // 'grid' | 'list'
  search: '',
  selFile: null,        // selected file for editor/viewer
  editorMode: null,     // 'view' | 'edit' | 'new'
  newFileType: null,
};

// ── VAULT MAIN PAGE ────────────────────────────────────────────
async function rVault() {
  const q = t();
  const c = document.getElementById('page-vault');
  c.innerHTML = '';
  if (!S.isAdmin) {
    c.appendChild(el('div', { style: { textAlign: 'center', padding: '70px' } },
      el('div', { style: { fontSize: '56px', marginBottom: '12px' } }, '🔒'),
      el('div', { style: { color: q.tx, fontSize: '16px', fontWeight: '700' } }, 'Admin Access Only')));
    return;
  }

  // ── Header ──
  const hdr = el('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' } });
  hdr.appendChild(el('div', {},
    el('h1', { style: { color: q.ac, fontSize: '22px', fontWeight: '800', marginBottom: '2px' } }, '🔐 Vault'),
    el('div', { style: { color: q.tm, fontSize: '11px' } }, 'File Explorer · Document Editor · ID Card System')
  ));
  // Search
  const srch = el('input', { type: 'text', placeholder: '🔍 Cari file, kode SLV-, nama...', class: 'inf', style: { background: q.ib, borderColor: q.sb, color: q.tx, flex: '1', minWidth: '200px', marginBottom: '0' } });
  srch.value = VS.search;
  srch.oninput = async e => { VS.search = e.target.value; await rVault(); };
  hdr.appendChild(srch);
  c.appendChild(hdr);

  // ── Category tabs ──
  const CATS = [
    { id: 'home', label: '🏠 Beranda', color: q.ac },
    { id: 'pegawai', label: '👤 Pegawai', color: '#4fc3f7' },
    { id: 'transaksi', label: '💰 Transaksi', color: '#81c784' },
    { id: 'umum', label: '📂 Umum', color: '#ffb74d' },
  ];
  const ctabs = el('div', { style: { display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' } });
  CATS.forEach(cat => {
    const active = VS.cat === cat.id;
    const tb = el('button', {
      style: { padding: '7px 14px', borderRadius: '8px', border: `1px solid ${active ? cat.color : q.sb}`, background: active ? `${cat.color}22` : 'transparent', color: active ? cat.color : q.tm, cursor: 'pointer', fontSize: '12px', fontWeight: active ? '700' : '400', transition: 'all .18s' },
      onclick: () => { VS.cat = cat.id; VS.folderId = null; VS.folderPath = []; VS.search = ''; srch.value = ''; rVault(); }
    }, cat.label);
    ctabs.appendChild(tb);
  });
  c.appendChild(ctabs);

  // ── Search results mode ──
  if (VS.search.trim().length > 1) {
    await renderVaultSearch(c, q);
    return;
  }

  // ── Home / Activity log ──
  if (VS.cat === 'home') {
    await renderVaultHome(c, q);
    return;
  }

  // ── File Explorer ──
  await renderVaultExplorer(c, q);
}

// ── VAULT HOME ────────────────────────────────────────────────
async function renderVaultHome(c, q) {
  const logs = await DB.getVaultLogs();
  // Stats
  const [fp, ft, fu] = await Promise.all([
    VDB.getAllFiles('pegawai'), VDB.getAllFiles('transaksi'), VDB.getAllFiles('umum')
  ]);
  const total = fp.length + ft.length + fu.length;

  const stats = el('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: '10px', marginBottom: '18px' } });
  [['📁 Total File', total, q.ac], ['👤 Pegawai', fp.length, '#4fc3f7'], ['💰 Transaksi', ft.length, '#81c784'], ['📂 Umum', fu.length, '#ffb74d']].forEach(([label, val, col]) => {
    stats.appendChild(gc({ padding: '14px', textAlign: 'center', border: `1px solid ${col}33` },
      el('div', { style: { color: col, fontSize: '22px', fontWeight: '900', marginBottom: '3px' } }, String(val)),
      el('div', { style: { color: q.tm, fontSize: '10px' } }, label)
    ));
  });
  c.appendChild(stats);

  c.appendChild(el('div', { style: { color: q.ac, fontSize: '11px', fontWeight: '700', marginBottom: '10px' } }, '📋 Riwayat Aktivitas Vault'));
  if (!logs.length) { c.appendChild(el('div', { style: { color: q.tm, textAlign: 'center', padding: '30px' } }, 'Belum ada aktivitas.')); return; }
  const tl = el('div', { style: { position: 'relative', paddingLeft: '22px' } });
  tl.appendChild(el('div', { style: { position: 'absolute', left: '7px', top: '0', bottom: '0', width: '2px', background: q.sb, borderRadius: '99px' } }));
  const ACTION_COLOR = { Buat: '#64dc64', Edit: '#4fc3f7', Unduh: '#ffb74d', Upload: '#81c784', Scan: '#ce93d8' };
  for (const log of [...logs].reverse().slice(0, 50)) {
    const col = ACTION_COLOR[log.action] || q.ac;
    const row = el('div', { style: { display: 'flex', gap: '8px', marginBottom: '6px', position: 'relative' } });
    row.appendChild(el('div', { style: { position: 'absolute', left: '-18px', top: '5px', width: '9px', height: '9px', borderRadius: '50%', background: col, border: `2px solid ${q.cb}` } }));
    row.appendChild(gc({ padding: '5px 10px', flex: '1', border: `1px solid ${col}22` },
      el('div', { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
        el('span', { style: { color: col, fontSize: '10px', fontWeight: '700', minWidth: '44px' } }, log.action),
        el('span', { style: { color: q.tx, fontSize: '10px' } }, (log.title || '') + (log.code ? ' · ' + log.code : ''))
      ),
      el('div', { style: { color: q.tm, fontSize: '8px', marginTop: '1px' } }, new Date(log.time || log.created_at).toLocaleString('id-ID') + ' · oleh ' + (log.by || '?'))
    ));
    tl.appendChild(row);
  }
  c.appendChild(gc({ padding: '14px' }, tl));
}

// ── VAULT SEARCH RESULTS ──────────────────────────────────────
async function renderVaultSearch(c, q) {
  const results = await VDB.searchAll(VS.search.trim());
  c.appendChild(el('div', { style: { color: q.ac, fontSize: '11px', fontWeight: '700', marginBottom: '12px' } }, `🔍 Hasil pencarian "${VS.search}" — ${results.length} file ditemukan`));
  if (!results.length) { c.appendChild(el('div', { style: { color: q.tm, textAlign: 'center', padding: '30px' } }, 'Tidak ada file yang cocok.')); return; }
  const list = el('div', { style: { display: 'flex', flexDirection: 'column', gap: '7px' } });
  results.forEach(file => {
    const row = gc({ padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', border: `1px solid ${q.sb}`, transition: 'border-color .15s' });
    row.onmouseenter = () => row.style.borderColor = q.ac; row.onmouseleave = () => row.style.borderColor = q.sb;
    row.appendChild(el('div', { style: { fontSize: '22px' } }, fileTypeIcon(file.file_type)));
    row.appendChild(el('div', { style: { flex: '1' } },
      el('div', { style: { color: q.tx, fontSize: '13px', fontWeight: '700' } }, file.name),
      el('div', { style: { color: q.tm, fontSize: '10px' } }, file.slv_code + ' · ' + (file.folder?.name || '') + ' · ' + (file.folder?.category || ''))
    ));
    row.appendChild(btn('📂 Buka', () => openVaultFile(file), true, { fontSize: '10px' }));
    row.onclick = e => { if (e.target.tagName !== 'BUTTON') openVaultFile(file); };
    list.appendChild(row);
  });
  c.appendChild(list);
}

// ── VAULT FILE EXPLORER ───────────────────────────────────────
async function renderVaultExplorer(c, q) {
  const CAT_COLOR = { pegawai: '#4fc3f7', transaksi: '#81c784', umum: '#ffb74d' };
  const col = CAT_COLOR[VS.cat] || q.ac;
  const CAT_LABEL = { pegawai: 'Data Informasi Pegawai', transaksi: 'Data Informasi Transaksi', umum: 'Data Informasi Umum' };

  // Toolbar
  const toolbar = el('div', { style: { display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' } });

  // Breadcrumb
  const bc = el('div', { style: { display: 'flex', alignItems: 'center', gap: '4px', flex: '1', flexWrap: 'wrap' } });
  const rootBtn = el('span', { style: { color: col, cursor: 'pointer', fontSize: '12px', fontWeight: '700' }, onclick: () => { VS.folderId = null; VS.folderPath = []; rVault(); } }, CAT_LABEL[VS.cat]);
  bc.appendChild(rootBtn);
  VS.folderPath.forEach((seg, i) => {
    bc.appendChild(el('span', { style: { color: q.tm, fontSize: '12px' } }, ' › '));
    const segBtn = el('span', { style: { color: i === VS.folderPath.length - 1 ? q.tx : col, cursor: 'pointer', fontSize: '12px', fontWeight: i === VS.folderPath.length - 1 ? '700' : '400' }, onclick: () => { VS.folderId = seg.id; VS.folderPath = VS.folderPath.slice(0, i + 1); rVault(); } }, seg.name);
    bc.appendChild(segBtn);
  });
  toolbar.appendChild(bc);

  // View toggle
  const viewToggle = el('div', { style: { display: 'flex', gap: '4px' } });
  ['grid', 'list'].forEach(v => {
    viewToggle.appendChild(el('button', {
      style: { padding: '5px 9px', borderRadius: '6px', border: `1px solid ${VS.view === v ? col : q.sb}`, background: VS.view === v ? `${col}22` : 'transparent', color: VS.view === v ? col : q.tm, cursor: 'pointer', fontSize: '12px' },
      onclick: () => { VS.view = v; rVault(); }
    }, v === 'grid' ? '⊞' : '☰'));
  });
  toolbar.appendChild(viewToggle);
  toolbar.appendChild(btn('📁 Folder Baru', () => openFolderModal(null), true, { fontSize: '11px' }));
  toolbar.appendChild(btn('➕ File Baru', () => openNewFileModal(), false, { fontSize: '11px' }));
  c.appendChild(toolbar);

  // Load folders and files
  const [folders, files] = await Promise.all([
    supa ? supa.from('vault_folders').select('*').eq('category', VS.cat).eq('parent_id', VS.folderId || null).order('name').then(r => r.data || []) : [],
    VS.folderId ? VDB.getFiles(VS.folderId) : []
  ]);

  if (!folders.length && !files.length) {
    c.appendChild(el('div', { style: { textAlign: 'center', padding: '50px', color: q.tm } },
      el('div', { style: { fontSize: '48px', marginBottom: '10px' } }, '📂'),
      el('div', { style: { fontSize: '13px', marginBottom: '14px' } }, VS.folderId ? 'Folder kosong.' : 'Belum ada folder di kategori ini.'),
      el('div', { style: { display: 'flex', gap: '8px', justifyContent: 'center' } },
        btn('📁 Buat Folder', () => openFolderModal(null), true, { fontSize: '11px' }),
        VS.folderId ? btn('➕ File Baru', () => openNewFileModal(), false, { fontSize: '11px' }) : el('span', {})
      )
    ));
    return;
  }

  const container = el('div', {
    style: VS.view === 'grid'
      ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: '12px' }
      : { display: 'flex', flexDirection: 'column', gap: '6px' }
  });

  // Back button if in subfolder
  if (VS.folderId && VS.folderPath.length > 0) {
    const backItem = VS.view === 'grid'
      ? gc({ padding: '16px', textAlign: 'center', cursor: 'pointer', border: `1px dashed ${q.sb}`, opacity: '0.7' },
          el('div', { style: { fontSize: '28px', marginBottom: '4px' } }, '⬆️'),
          el('div', { style: { color: q.tm, fontSize: '11px' } }, '.. Kembali'))
      : gc({ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', border: `1px solid ${q.sb}` },
          el('span', { style: { fontSize: '18px' } }, '⬆️'), el('span', { style: { color: q.tm, fontSize: '12px' } }, '.. Naik ke folder induk'));
    backItem.onclick = () => {
      const prev = VS.folderPath[VS.folderPath.length - 2];
      VS.folderPath = VS.folderPath.slice(0, -1);
      VS.folderId = prev?.id || null;
      rVault();
    };
    container.appendChild(backItem);
  }

  // Render folders
  folders.forEach(folder => {
    const item = VS.view === 'grid'
      ? gc({ padding: '16px', textAlign: 'center', cursor: 'pointer', border: `1px solid ${folder.color || col}44`, position: 'relative', transition: 'border-color .18s' },
          el('div', { style: { fontSize: '36px', marginBottom: '6px' } }, '📁'),
          el('div', { style: { color: q.tx, fontSize: '12px', fontWeight: '700', marginBottom: '3px', wordBreak: 'break-word' } }, folder.name),
          folder.tags?.length ? el('div', { style: { display: 'flex', gap: '3px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' } },
            ...folder.tags.map(tag => el('span', { style: { background: `${folder.color || col}22`, color: folder.color || col, borderRadius: '20px', padding: '1px 6px', fontSize: '8px' } }, tag))
          ) : el('span', {}))
      : gc({ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', border: `1px solid ${q.sb}`, transition: 'border-color .15s' },
          el('span', { style: { fontSize: '22px' } }, '📁'),
          el('div', { style: { flex: '1' } },
            el('div', { style: { color: q.tx, fontSize: '13px', fontWeight: '700' } }, folder.name),
            folder.tags?.length ? el('div', { style: { color: q.tm, fontSize: '10px' } }, folder.tags.join(' · ')) : el('span', {})
          ),
          el('div', { style: { display: 'flex', gap: '4px' } },
            btn('✏️', e => { e.stopPropagation(); openFolderModal(folder); }, true, { fontSize: '9px', padding: '2px 5px' }),
            btn('🗑️', e => { e.stopPropagation(); if (confirm('Hapus folder "' + folder.name + '"? Semua isinya akan terhapus.')) { VDB.deleteFolder(folder.id).then(rVault); } }, true, { fontSize: '9px', padding: '2px 5px', borderColor: '#f44', color: '#f88' })
          ));
    item.onmouseenter = () => item.style.borderColor = folder.color || col;
    item.onmouseleave = () => item.style.borderColor = VS.view === 'grid' ? `${folder.color || col}44` : q.sb;
    item.onclick = e => {
      if (e.target.tagName === 'BUTTON') return;
      VS.folderPath = [...VS.folderPath, { id: folder.id, name: folder.name }];
      VS.folderId = folder.id;
      rVault();
    };
    container.appendChild(item);
  });

  // Render files
  files.forEach(file => {
    const fIcon = fileTypeIcon(file.file_type);
    const fColor = fileTypeColor(file.file_type);
    const item = VS.view === 'grid'
      ? gc({ padding: '14px', textAlign: 'center', cursor: 'pointer', border: `1px solid ${fColor}33`, position: 'relative', transition: 'border-color .18s' },
          el('div', { style: { fontSize: '32px', marginBottom: '6px' } }, fIcon),
          el('div', { style: { color: q.tx, fontSize: '11px', fontWeight: '700', marginBottom: '2px', wordBreak: 'break-word' } }, file.name),
          el('div', { style: { color: q.tm, fontSize: '9px', fontFamily: 'monospace' } }, file.slv_code),
          file.tags?.length ? el('div', { style: { marginTop: '4px' } }, ...file.tags.slice(0, 2).map(tag => el('span', { style: { background: `${fColor}18`, color: fColor, borderRadius: '20px', padding: '1px 6px', fontSize: '8px', marginRight: '2px' } }, tag))) : el('span', {}))
      : gc({ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', border: `1px solid ${q.sb}`, transition: 'border-color .15s' },
          el('span', { style: { fontSize: '22px' } }, fIcon),
          el('div', { style: { flex: '1' } },
            el('div', { style: { color: q.tx, fontSize: '13px', fontWeight: '700' } }, file.name),
            el('div', { style: { color: q.tm, fontSize: '10px' } }, file.slv_code + ' · ' + file.file_type + ' · ' + (file.owner || '') + ' · ' + new Date(file.created_at).toLocaleDateString('id-ID'))
          ),
          el('div', { style: { display: 'flex', gap: '4px' } },
            btn('📂', e => { e.stopPropagation(); openVaultFile(file); }, true, { fontSize: '9px', padding: '2px 5px', title: 'Buka' }),
            btn('⬇️', e => { e.stopPropagation(); exportVaultFile(file, 'pdf'); }, true, { fontSize: '9px', padding: '2px 5px', title: 'Export PDF' }),
            btn('🪪', e => { e.stopPropagation(); openIDCard(file); }, true, { fontSize: '9px', padding: '2px 5px', title: 'ID Card' })
          ));
    item.onmouseenter = () => item.style.borderColor = fColor;
    item.onmouseleave = () => item.style.borderColor = VS.view === 'grid' ? `${fColor}33` : q.sb;
    item.onclick = e => { if (e.target.tagName === 'BUTTON') return; openVaultFile(file); };
    container.appendChild(item);
  });

  c.appendChild(container);
}

function fileTypeIcon(type) {
  return { doc: '📝', pdf: '📄', excel: '📊', txt: '📃', image: '🖼️', upload: '📎' }[type] || '📄';
}
function fileTypeColor(type) {
  return { doc: '#4fc3f7', pdf: '#f44', excel: '#81c784', txt: '#ffb74d', image: '#ce93d8', upload: '#FAB715' }[type] || '#aaa';
}
function genSLV() { return 'SLV-' + String(Math.floor(100000 + Math.random() * 900000)); }
function genQRToken() { return 'QRT-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase(); }

// ── FOLDER MODAL ──────────────────────────────────────────────
function openFolderModal(existing) {
  const q = t(); const m = document.getElementById('m-vault'); m.style.display = 'flex'; m.innerHTML = '';
  const isEdit = !!existing;
  const form = { name: existing?.name || '', tags: (existing?.tags || []).join(', '), color: existing?.color || '#FAB715' };
  const TAG_SUGGESTIONS = ['HR', 'Kontrak', 'Aktif', 'Arsip', 'Keuangan', 'Legal', 'Rahasia', 'Q1', 'Q2', 'Q3', 'Q4', '2024', '2025'];
  const render = () => {
    m.innerHTML = '';
    const card = gc({ padding: '24px', width: '420px', maxWidth: '96vw', borderRadius: '18px', position: 'relative' });
    card.appendChild(el('button', { style: { position: 'absolute', top: '12px', right: '14px', background: 'none', border: 'none', color: q.tm, fontSize: '18px', cursor: 'pointer' }, onclick: () => closeM('m-vault') }, '✕'));
    card.appendChild(el('h3', { style: { color: q.ac, marginBottom: '16px', fontSize: '14px', fontWeight: '800' } }, (isEdit ? '✏️ Edit' : '📁 Folder Baru')));
    const is = { background: q.ib, borderColor: q.sb, color: q.tx };
    const lb = tx => el('div', { style: { color: q.tm, fontSize: '10px', fontWeight: '700', marginBottom: '3px', marginTop: '10px' } }, tx);
    card.appendChild(lb('NAMA FOLDER'));
    const ni = el('input', { class: 'inf', placeholder: 'Nama folder...', style: is }); ni.value = form.name; ni.oninput = e => form.name = e.target.value; card.appendChild(ni);
    card.appendChild(lb('WARNA'));
    const colorRow = el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' } });
    ['#FAB715', '#4fc3f7', '#81c784', '#f06292', '#ce93d8', '#ffb74d', '#64dc64', '#f44'].forEach(col2 => {
      const cb = el('div', { style: { width: '24px', height: '24px', borderRadius: '50%', background: col2, cursor: 'pointer', border: `3px solid ${form.color === col2 ? '#fff' : 'transparent'}`, transition: '.15s' }, onclick: () => { form.color = col2; render(); } });
      colorRow.appendChild(cb);
    });
    card.appendChild(colorRow);
    card.appendChild(lb('TAG (klik untuk tambah atau ketik manual, pisah koma)'));
    const tagInput = el('input', { class: 'inf', placeholder: 'HR, Kontrak, Aktif...', style: is }); tagInput.value = form.tags; tagInput.oninput = e => form.tags = e.target.value; card.appendChild(tagInput);
    const tagSugg = el('div', { style: { display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '5px' } });
    TAG_SUGGESTIONS.forEach(tag => {
      tagSugg.appendChild(el('span', {
        style: { background: `${form.color}22`, color: form.color, borderRadius: '20px', padding: '2px 8px', fontSize: '9px', cursor: 'pointer', border: `1px solid ${form.color}44` },
        onclick: () => { const existing2 = form.tags.split(',').map(x => x.trim()).filter(Boolean); if (!existing2.includes(tag)) { form.tags = [...existing2, tag].join(', '); tagInput.value = form.tags; } }
      }, tag));
    });
    card.appendChild(tagSugg);
    const br = el('div', { style: { display: 'flex', gap: '8px', marginTop: '16px' } });
    br.appendChild(btn('💾 Simpan Folder', async () => {
      if (!form.name.trim()) { notif('Nama folder wajib diisi!', 'error'); return; }
      const tagsArr = form.tags.split(',').map(x => x.trim()).filter(Boolean);
      if (isEdit) await VDB.updateFolder(existing.id, { name: form.name.trim(), tags: tagsArr, color: form.color });
      else await VDB.addFolder({ name: form.name.trim(), category: VS.cat, parent_id: VS.folderId, tags: tagsArr, color: form.color });
      closeM('m-vault'); rVault(); notif('✅ Folder disimpan!', 'success');
    }, false, { padding: '8px 18px' }));
    br.appendChild(btn('Batal', () => closeM('m-vault'), true));
    card.appendChild(br); m.appendChild(card);
    setTimeout(() => ni.focus(), 50);
  };
  render();
}

// ── NEW FILE MODAL ────────────────────────────────────────────
function openNewFileModal() {
  if (!VS.folderId) { notif('Pilih folder terlebih dahulu!', 'error'); return; }
  const q = t(); const m = document.getElementById('m-vault'); m.style.display = 'flex'; m.innerHTML = '';
  const card = gc({ padding: '26px', width: '440px', maxWidth: '96vw', borderRadius: '18px', position: 'relative' });
  card.appendChild(el('button', { style: { position: 'absolute', top: '12px', right: '14px', background: 'none', border: 'none', color: q.tm, fontSize: '18px', cursor: 'pointer' }, onclick: () => closeM('m-vault') }, '✕'));
  card.appendChild(el('h3', { style: { color: q.ac, marginBottom: '6px', fontSize: '14px', fontWeight: '800' } }, '➕ Buat File Baru'));
  card.appendChild(el('p', { style: { color: q.tm, fontSize: '11px', marginBottom: '20px' } }, 'Pilih format dokumen yang ingin dibuat:'));
  const FILE_TYPES = [
    { type: 'doc', icon: '📝', label: 'Dokumen', desc: 'Editor teks kaya, export ke PDF/Word' },
    { type: 'excel', icon: '📊', label: 'Spreadsheet', desc: 'Tabel data, export ke Excel/PDF' },
    { type: 'txt', icon: '📃', label: 'Teks Biasa', desc: 'Catatan sederhana, export ke TXT' },
    { type: 'upload', icon: '📎', label: 'Upload File', desc: 'Upload PDF, Word, gambar, dll.' },
  ];
  const grid = el('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' } });
  FILE_TYPES.forEach(ft => {
    const col2 = fileTypeColor(ft.type);
    const card2 = el('div', {
      style: { padding: '16px', border: `1px solid ${col2}44`, borderRadius: '10px', cursor: 'pointer', textAlign: 'center', transition: 'all .18s' },
      onclick: () => { closeM('m-vault'); VS.newFileType = ft.type; openFileEditor(null, ft.type); }
    });
    card2.onmouseenter = () => { card2.style.borderColor = col2; card2.style.background = `${col2}11`; };
    card2.onmouseleave = () => { card2.style.borderColor = `${col2}44`; card2.style.background = 'transparent'; };
    card2.appendChild(el('div', { style: { fontSize: '28px', marginBottom: '6px' } }, ft.icon));
    card2.appendChild(el('div', { style: { color: q.tx, fontSize: '12px', fontWeight: '700', marginBottom: '3px' } }, ft.label));
    card2.appendChild(el('div', { style: { color: q.tm, fontSize: '9px', lineHeight: '1.5' } }, ft.desc));
    grid.appendChild(card2);
  });
  card.appendChild(grid);
  card.appendChild(btn('Batal', () => closeM('m-vault'), true, { width: '100%', marginTop: '12px', fontSize: '11px' }));
  m.appendChild(card);
}

// ── OPEN EXISTING FILE ────────────────────────────────────────
function openVaultFile(file) {
  openFileEditor(file, file.file_type);
}

// ── FILE EDITOR / VIEWER ──────────────────────────────────────
function openFileEditor(existingFile, fileType) {
  const q = t();
  // Use a dedicated full-screen overlay
  let overlay = document.getElementById('vault-editor-overlay');
  if (overlay) overlay.remove();
  overlay = el('div', { id: 'vault-editor-overlay', style: { position: 'fixed', inset: '0', background: q.cb, zIndex: '9000', display: 'flex', flexDirection: 'column', overflow: 'hidden' } });
  document.body.appendChild(overlay);

  const isNew = !existingFile;
  const SLV_RX = /^SLV-\d{6}$/;
  const form = {
    name: existingFile?.name || '',
    slv_code: existingFile?.slv_code || genSLV(),
    owner: existingFile?.owner || '',
    owner_id: existingFile?.owner_id || '',
    tags: (existingFile?.tags || []).join(', '),
    content: existingFile?.content || { blocks: [] },
    raw_text: existingFile?.raw_text || '',
    file_url: existingFile?.file_url || null,
    file_type: fileType,
    file_size: existingFile?.file_size || 0,
    _uploadFile: null,
  };
  let isDirty = false;

  const render = () => {
    overlay.innerHTML = '';
    // Top bar
    const topbar = el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderBottom: `1px solid ${q.sb}`, background: q.cb, flexShrink: '0', flexWrap: 'wrap' } });
    const backBtn = el('button', { style: { background: 'none', border: 'none', color: q.tm, fontSize: '20px', cursor: 'pointer', padding: '0 6px' }, onclick: () => { if (isDirty && !confirm('Ada perubahan yang belum disimpan. Keluar?')) return; overlay.remove(); } }, '←');
    topbar.appendChild(backBtn);
    topbar.appendChild(el('span', { style: { fontSize: '18px' } }, fileTypeIcon(fileType)));
    const nameInp = el('input', { style: { background: 'transparent', border: 'none', borderBottom: `1px solid ${q.sb}`, color: q.tx, fontSize: '15px', fontWeight: '700', outline: 'none', flex: '1', minWidth: '120px', padding: '2px 4px' }, placeholder: 'Nama file...' });
    nameInp.value = form.name; nameInp.oninput = e => { form.name = e.target.value; isDirty = true; };
    topbar.appendChild(nameInp);
    // SLV code
    const codeDisp = el('div', { style: { color: q.tm, fontSize: '10px', fontFamily: 'monospace', padding: '4px 8px', background: q.sur, borderRadius: '6px', flexShrink: '0' } }, '🔑 ' + form.slv_code + (isNew ? '' : ' 🔒'));
    topbar.appendChild(codeDisp);
    // Action buttons
    const acts = el('div', { style: { display: 'flex', gap: '6px' } });
    if (!isNew) {
      acts.appendChild(btn('📄 PDF', () => exportVaultFile(existingFile || form, 'pdf'), true, { fontSize: '10px', padding: '4px 9px' }));
      if (fileType === 'excel') acts.appendChild(btn('📊 Excel', () => exportVaultFile(existingFile || form, 'excel'), true, { fontSize: '10px', padding: '4px 9px' }));
      acts.appendChild(btn('📃 TXT', () => exportVaultFile(existingFile || form, 'txt'), true, { fontSize: '10px', padding: '4px 9px' }));
      acts.appendChild(btn('🪪 ID Card', () => openIDCard(existingFile || form), true, { fontSize: '10px', padding: '4px 9px' }));
    }
    acts.appendChild(btn('💾 Simpan', async () => {
      if (!form.name.trim()) { notif('Nama file wajib!', 'error'); return; }
      if (!SLV_RX.test(form.slv_code)) { notif('Kode SLV- tidak valid!', 'error'); return; }
      // Gather content
      if (fileType === 'doc') {
        const editorEl = overlay.querySelector('#doc-editor');
        if (editorEl) { form.raw_text = editorEl.innerText; form.content = { blocks: [{ type: 'html', data: editorEl.innerHTML }] }; }
      } else if (fileType === 'excel') {
        const tbl = overlay.querySelector('#excel-table');
        if (tbl) {
          const rows = Array.from(tbl.querySelectorAll('tr')).map(tr => Array.from(tr.querySelectorAll('td,th')).map(td => td.innerText));
          form.content = { rows }; form.raw_text = rows.map(r => r.join('\t')).join('\n');
        }
      } else if (fileType === 'txt') {
        const ta = overlay.querySelector('#txt-editor');
        if (ta) { form.raw_text = ta.value; form.content = { text: ta.value }; }
      }
      const tagsArr = form.tags.split(',').map(x => x.trim()).filter(Boolean);
      const payload = { name: form.name.trim(), slv_code: form.slv_code, owner: form.owner, owner_id: form.owner_id, tags: tagsArr, content: form.content, raw_text: form.raw_text, file_type: fileType, folder_id: VS.folderId };
      // Handle file upload for 'upload' type
      if (fileType === 'upload' && form._uploadFile) {
        notif('⏳ Mengupload file...', 'info');
        const url = await uploadVaultFile(form._uploadFile, form.slv_code);
        if (url) { payload.file_url = url; payload.file_size = form._uploadFile.size; payload.uploaded = true; payload.uploaded_at = new Date().toISOString(); }
      }
      if (isNew) {
        payload.qr_token = genQRToken();
        await VDB.addFile(payload);
        notif('✅ File berhasil dibuat!', 'success');
      } else {
        await VDB.updateFile(existingFile.id, payload);
        notif('✅ File disimpan!', 'success');
      }
      isDirty = false; overlay.remove(); rVault();
    }, false, { fontSize: '10px', padding: '5px 14px' }));
    topbar.appendChild(acts);
    overlay.appendChild(topbar);

    // Metadata row
    const meta = el('div', { style: { display: 'flex', gap: '10px', padding: '8px 16px', borderBottom: `1px solid ${q.sb}`, flexWrap: 'wrap', background: q.sur, flexShrink: '0' } });
    const is2 = { background: q.ib, borderColor: q.sb, color: q.tx, marginBottom: '0' };
    const miniInp = (ph, key, w) => { const i = el('input', { class: 'inf', placeholder: ph, style: { ...is2, width: w || '160px', fontSize: '11px', padding: '4px 8px' } }); i.value = form[key] || ''; i.oninput = e => { form[key] = e.target.value; isDirty = true; }; return i; };
    meta.appendChild(miniInp('Nama Pemilik', 'owner', '150px'));
    meta.appendChild(miniInp('ID Pegawai / Kode', 'owner_id', '130px'));
    meta.appendChild(miniInp('Tag (pisah koma)', 'tags', '180px'));
    overlay.appendChild(meta);

    // ── Editor Area ──
    const edArea = el('div', { style: { flex: '1', overflow: 'auto', padding: '20px', background: q.cb } });

    if (fileType === 'doc') {
      // Rich text editor
      const toolbar2 = el('div', { style: { display: 'flex', gap: '4px', marginBottom: '10px', flexWrap: 'wrap', padding: '6px 10px', background: q.sur, borderRadius: '8px' } });
      [['B', 'bold'], ['I', 'italic'], ['U', 'underline'], ['S', 'strikeThrough']].forEach(([label, cmd]) => {
        toolbar2.appendChild(el('button', { style: { padding: '3px 8px', borderRadius: '5px', border: `1px solid ${q.sb}`, background: q.ib, color: q.tx, cursor: 'pointer', fontSize: label === 'B' ? '13px' : '11px', fontWeight: label === 'B' ? '900' : '400' }, onclick: () => document.execCommand(cmd) }, label));
      });
      [['H1', () => document.execCommand('formatBlock', false, 'h2')], ['H2', () => document.execCommand('formatBlock', false, 'h3')], ['¶', () => document.execCommand('formatBlock', false, 'p')], ['• List', () => document.execCommand('insertUnorderedList')], ['1. List', () => document.execCommand('insertOrderedList')]].forEach(([label, fn]) => {
        toolbar2.appendChild(el('button', { style: { padding: '3px 8px', borderRadius: '5px', border: `1px solid ${q.sb}`, background: q.ib, color: q.tx, cursor: 'pointer', fontSize: '11px' }, onclick: fn }, label));
      });
      edArea.appendChild(toolbar2);
      const editor = el('div', { id: 'doc-editor', contenteditable: 'true', style: { minHeight: '400px', background: '#fff', color: '#111', padding: '32px 40px', borderRadius: '8px', fontSize: '14px', lineHeight: '1.8', outline: 'none', fontFamily: 'Georgia, serif', boxShadow: '0 2px 20px rgba(0,0,0,.3)', maxWidth: '800px', margin: '0 auto' } });
      editor.innerHTML = (form.content?.blocks?.[0]?.data) || '<p>Mulai mengetik di sini...</p>';
      editor.oninput = () => { isDirty = true; };
      edArea.appendChild(editor);

    } else if (fileType === 'excel') {
      const ROWS = 20, COLS = 8;
      const savedRows = form.content?.rows || [];
      edArea.appendChild(el('div', { style: { color: q.tm, fontSize: '10px', marginBottom: '8px' } }, 'Klik sel untuk edit. Tab/Enter untuk navigasi.'));
      const tableWrap = el('div', { style: { overflowX: 'auto' } });
      const tbl = el('table', { id: 'excel-table', style: { borderCollapse: 'collapse', fontSize: '12px', minWidth: '600px' } });
      // Header row
      const headRow = el('tr', {});
      headRow.appendChild(el('th', { style: { width: '30px', background: q.sur, border: `1px solid ${q.sb}`, color: q.tm, fontSize: '10px', padding: '3px' } }, '#'));
      'ABCDEFGH'.split('').forEach(letter => {
        headRow.appendChild(el('th', { style: { minWidth: '100px', background: q.sur, border: `1px solid ${q.sb}`, color: q.tm, fontSize: '10px', padding: '3px 6px', textAlign: 'center' } }, letter));
      });
      tbl.appendChild(headRow);
      for (let r = 0; r < ROWS; r++) {
        const tr2 = el('tr', {});
        tr2.appendChild(el('td', { style: { background: q.sur, border: `1px solid ${q.sb}`, color: q.tm, fontSize: '10px', padding: '2px 5px', textAlign: 'center' } }, String(r + 1)));
        for (let c = 0; c < COLS; c++) {
          const td = el('td', { contenteditable: 'true', style: { border: `1px solid ${q.sb}`, padding: '4px 6px', color: q.tx, minWidth: '100px', outline: 'none', background: 'transparent' } });
          td.innerText = savedRows[r]?.[c + 1] || '';
          td.oninput = () => isDirty = true;
          td.onkeydown = e => {
            if (e.key === 'Tab') { e.preventDefault(); const next = td.nextElementSibling; if (next) next.focus(); }
            if (e.key === 'Enter') { e.preventDefault(); const nextRow = tr2.nextElementSibling; if (nextRow) nextRow.children[c + 1]?.focus(); }
          };
          tr2.appendChild(td);
        }
        tbl.appendChild(tr2);
      }
      tableWrap.appendChild(tbl); edArea.appendChild(tableWrap);

    } else if (fileType === 'txt') {
      const ta = el('textarea', { id: 'txt-editor', style: { width: '100%', minHeight: '500px', background: q.ib, border: `1px solid ${q.sb}`, color: q.tx, padding: '20px', fontSize: '13px', fontFamily: 'monospace', lineHeight: '1.7', borderRadius: '8px', resize: 'vertical' }, placeholder: 'Tulis teks di sini...' });
      ta.value = form.content?.text || form.raw_text || '';
      ta.oninput = () => isDirty = true;
      edArea.appendChild(ta);

    } else if (fileType === 'upload') {
      const up = el('div', { style: { textAlign: 'center', padding: '50px', border: `2px dashed ${q.sb}`, borderRadius: '12px', cursor: 'pointer' } });
      if (form.file_url) {
        const fName = form.name || 'File';
        up.innerHTML = '';
        up.appendChild(el('div', { style: { fontSize: '48px', marginBottom: '10px' } }, '📎'));
        up.appendChild(el('div', { style: { color: q.ac, fontSize: '14px', fontWeight: '700', marginBottom: '8px' } }, fName));
        up.appendChild(el('a', { href: form.file_url, target: '_blank', style: { color: q.ac, fontSize: '11px' } }, '🔗 Buka File'));
        up.appendChild(el('div', { style: { marginTop: '14px' } },
          btn('📎 Ganti File', () => up.click(), true, { fontSize: '11px' })
        ));
      } else {
        up.appendChild(el('div', { style: { fontSize: '48px', marginBottom: '12px' } }, '📎'));
        up.appendChild(el('div', { style: { color: q.tx, fontSize: '14px', fontWeight: '700', marginBottom: '6px' } }, 'Klik atau drag file ke sini'));
        up.appendChild(el('div', { style: { color: q.tm, fontSize: '11px' } }, 'PDF, Word, Excel, Gambar — maks 20MB'));
      }
      up.onclick = () => {
        const fi = document.createElement('input'); fi.type = 'file';
        fi.accept = '.pdf,.doc,.docx,.xls,.xlsx,.txt,.png,.jpg,.jpeg,application/pdf,application/msword';
        fi.onchange = async e => {
          const f = e.target.files[0]; if (!f) return;
          if (f.size > 20 * 1024 * 1024) { notif('File maks 20MB', 'error'); return; }
          form._uploadFile = f; form.name = form.name || f.name;
          nameInp.value = form.name; isDirty = true;
          notif('📎 File dipilih: ' + f.name + ' (' + (f.size / 1024).toFixed(0) + ' KB)', 'success');
          up.innerHTML = '';
          up.appendChild(el('div', { style: { fontSize: '32px', marginBottom: '8px' } }, fileTypeIcon(f.name.match(/\.pdf$/i) ? 'pdf' : f.name.match(/\.xlsx?$/i) ? 'excel' : 'upload')));
          up.appendChild(el('div', { style: { color: q.ac, fontSize: '13px', fontWeight: '700' } }, f.name));
          up.appendChild(el('div', { style: { color: q.tm, fontSize: '10px' } }, (f.size / 1024).toFixed(1) + ' KB · Klik Simpan untuk upload'));
        };
        fi.click();
      };
      edArea.appendChild(up);
    }
    overlay.appendChild(edArea);
  };
  render();
}

// ── EXPORT FILE ───────────────────────────────────────────────
async function exportVaultFile(file, format) {
  const name = file.name || 'dokumen';
  const slv = file.slv_code || '';
  const content = file.content || {};
  const raw = file.raw_text || content.text || '';

  if (format === 'txt') {
    const txt = [
      'STARLIVE GROUP — VAULT DOCUMENT',
      '═'.repeat(50),
      'Kode   : ' + slv,
      'Nama   : ' + name,
      'Pemilik: ' + (file.owner || '-'),
      'ID     : ' + (file.owner_id || '-'),
      'Tanggal: ' + new Date(file.created_at || Date.now()).toLocaleString('id-ID'),
      '═'.repeat(50),
      '',
      raw || '(tidak ada konten)',
      '',
      '─'.repeat(50),
      'Dicetak: ' + new Date().toLocaleString('id-ID') + ' · oleh ' + (S.user?.username || 'Admin'),
    ].join('\n');
    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
    dlBlob(blob, 'VAULT_' + slv + '.txt');
    notif('📃 Diunduh sebagai TXT', 'success');

  } else if (format === 'pdf') {
    // Pure-JS PDF using text encoding (no external lib)
    const txt = [
      'STARLIVE GROUP — VAULT DOCUMENT',
      '='.repeat(48),
      'Kode   : ' + slv,
      'Nama   : ' + name,
      'Pemilik: ' + (file.owner || '-'),
      'ID     : ' + (file.owner_id || '-'),
      'Tag    : ' + (Array.isArray(file.tags) ? file.tags.join(', ') : file.tags || '-'),
      'Tanggal: ' + new Date(file.created_at || Date.now()).toLocaleString('id-ID'),
      '='.repeat(48),
      '',
      ...(raw || '(tidak ada konten)').split('\n').map(l => l.length > 75 ? l.match(/.{1,75}/g).join('\n') : l),
      '',
      '─'.repeat(48),
      'Dicetak: ' + new Date().toLocaleString('id-ID'),
      'Admin  : ' + (S.user?.username || '-'),
    ].join('\n');
    // Build minimal valid PDF
    const pdfContent = buildSimplePDF(txt, name);
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    dlBlob(blob, 'VAULT_' + slv + '.pdf');
    notif('📄 Diunduh sebagai PDF', 'success');
    await DB.addVaultLog({ action: 'Unduh', title: name, code: slv, by: S.user?.username });

  } else if (format === 'excel') {
    // Build simple CSV (Excel-compatible)
    const rows = content.rows || [['Nama', 'Nilai']];
    const csv = rows.map(row => row.map(cell => '"' + String(cell || '').replace(/"/g, '""') + '"').join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
    dlBlob(blob, 'VAULT_' + slv + '.csv');
    notif('📊 Diunduh sebagai CSV (Excel)', 'success');
  }
}

function dlBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

function buildSimplePDF(text, title) {
  // Minimal valid PDF structure
  const lines = text.split('\n');
  const pageWidth = 595, pageHeight = 842, margin = 50, lineH = 14, fontSize = 9;
  let yPos = pageHeight - margin;
  const ops = [];
  ops.push('BT');
  ops.push(`/F1 ${fontSize} Tf`);
  ops.push(`${margin} ${yPos} Td`);
  ops.push(`${lineH} TL`);
  for (const line of lines) {
    const safe = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    ops.push(`(${safe}) Tj T*`);
    yPos -= lineH;
    if (yPos < margin) { ops.push('ET'); ops.push('BT'); yPos = pageHeight - margin; ops.push(`${margin} ${yPos} Td`); }
  }
  ops.push('ET');
  const streamContent = ops.join('\n');
  const streamLen = streamContent.length;

  const pdf = [
    '%PDF-1.4',
    '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj',
    '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj',
    `3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 ${pageWidth} ${pageHeight}]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj`,
    `4 0 obj<</Length ${streamLen}>>\nstream\n${streamContent}\nendstream\nendobj`,
    '5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Courier>>endobj',
    'xref\n0 6',
    '0000000000 65535 f ',
    '%%EOF'
  ].join('\n');
  return pdf;
}

// ── ID CARD SYSTEM ─────────────────────────────────────────────
function openIDCard(file) {
  const q = t();
  let overlay = document.getElementById('vault-idcard-overlay');
  if (overlay) overlay.remove();
  overlay = el('div', { id: 'vault-idcard-overlay', style: { position: 'fixed', inset: '0', background: 'rgba(0,0,0,.85)', zIndex: '9500', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' } });
  document.body.appendChild(overlay);

  const slv = file.slv_code || file.slv_code;
  const qrToken = file.qr_token || genQRToken();
  // QR data: ONLY the token — never actual data
  const qrData = JSON.stringify({ token: qrToken, slv, ts: Date.now() });

  const card = el('div', { style: { width: '340px', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,.6)', fontFamily: 'sans-serif' } });
  // Card header
  const hdr2 = el('div', { style: { background: 'linear-gradient(135deg,#1a0e00,#2d1800)', padding: '20px 20px 14px', display: 'flex', alignItems: 'center', gap: '12px' } });
  hdr2.appendChild(el('div', { style: { fontSize: '28px' } }, '⭐'));
  hdr2.appendChild(el('div', {},
    el('div', { style: { color: '#FAB715', fontSize: '14px', fontWeight: '900', letterSpacing: '.1em' } }, 'STARLIVE GROUP'),
    el('div', { style: { color: '#a89878', fontSize: '9px', letterSpacing: '.15em' } }, 'EMPLOYEE ID CARD')
  ));
  card.appendChild(hdr2);

  // Body
  const body2 = el('div', { style: { padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' } });
  // QR Code (rendered as SVG grid)
  const qrSvg = renderQRSVG(qrData, 100);
  const qrWrap = el('div', { style: { flexShrink: '0' } });
  qrWrap.appendChild(qrSvg);
  qrWrap.appendChild(el('div', { style: { color: '#888', fontSize: '7px', textAlign: 'center', marginTop: '3px' } }, 'SCAN TO VERIFY'));
  body2.appendChild(qrWrap);

  // Info
  const info = el('div', { style: { flex: '1' } });
  info.appendChild(el('div', { style: { color: '#111', fontSize: '15px', fontWeight: '800', marginBottom: '4px', lineHeight: '1.2' } }, file.name || file.owner || 'Pegawai'));
  info.appendChild(el('div', { style: { color: '#555', fontSize: '10px', marginBottom: '10px' } }, file.owner || ''));
  [
    ['ID', file.owner_id || file.slv_code],
    ['Divisi', (Array.isArray(file.tags) ? file.tags[0] : '') || 'StarLive Group'],
    ['Kode Dok', slv],
  ].forEach(([label, val]) => {
    info.appendChild(el('div', { style: { marginBottom: '5px' } },
      el('div', { style: { color: '#999', fontSize: '8px', fontWeight: '700', letterSpacing: '.05em' } }, label),
      el('div', { style: { color: '#222', fontSize: '11px', fontWeight: '600' } }, val || '-')
    ));
  });
  body2.appendChild(info);
  card.appendChild(body2);

  // Footer
  const foot = el('div', { style: { background: '#f5f0e8', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } });
  foot.appendChild(el('div', { style: { color: '#888', fontSize: '8px', letterSpacing: '.08em' } }, 'TOKEN: ' + qrToken.slice(0, 16) + '...'));
  foot.appendChild(el('div', { style: { color: '#FAB715', fontSize: '8px', fontWeight: '700' } }, new Date().getFullYear().toString()));
  card.appendChild(foot);

  overlay.appendChild(card);

  // Security note
  overlay.appendChild(el('div', { style: { color: '#aaa', fontSize: '11px', textAlign: 'center', maxWidth: '340px', lineHeight: '1.6' } },
    '🔒 QR hanya berisi token referensi — bukan data asli.\nData hanya dapat diakses server dengan autentikasi valid.'));

  // Buttons
  const btnRow = el('div', { style: { display: 'flex', gap: '10px' } });
  btnRow.appendChild(btn('📥 Unduh ID Card', () => downloadIDCard(card, file), false, { fontSize: '12px' }));
  btnRow.appendChild(btn('✕ Tutup', () => overlay.remove(), true, { fontSize: '12px' }));
  overlay.appendChild(btnRow);
}

function renderQRSVG(data, size) {
  // Simple visual QR placeholder (proper QR needs a library)
  // We encode data as a visual pattern for display purposes
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size); svg.setAttribute('height', size);
  svg.setAttribute('viewBox', '0 0 21 21');
  // Background
  const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  bg.setAttribute('width', '21'); bg.setAttribute('height', '21'); bg.setAttribute('fill', 'white');
  svg.appendChild(bg);
  // Generate deterministic pattern from data hash
  let hash = 0;
  for (let i = 0; i < data.length; i++) { hash = ((hash << 5) - hash) + data.charCodeAt(i); hash |= 0; }
  // Finder patterns (3 corners)
  [[0, 0], [14, 0], [0, 14]].forEach(([ox, oy]) => {
    const outer = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    outer.setAttribute('x', ox); outer.setAttribute('y', oy); outer.setAttribute('width', 7); outer.setAttribute('height', 7); outer.setAttribute('fill', '#111');
    svg.appendChild(outer);
    const inner = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    inner.setAttribute('x', ox + 1); inner.setAttribute('y', oy + 1); inner.setAttribute('width', 5); inner.setAttribute('height', 5); inner.setAttribute('fill', 'white');
    svg.appendChild(inner);
    const center = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    center.setAttribute('x', ox + 2); center.setAttribute('y', oy + 2); center.setAttribute('width', 3); center.setAttribute('height', 3); center.setAttribute('fill', '#111');
    svg.appendChild(center);
  });
  // Data modules
  for (let r = 0; r < 21; r++) {
    for (let c = 0; c < 21; c++) {
      if ((r < 8 && c < 8) || (r < 8 && c > 12) || (r > 12 && c < 8)) continue;
      const bit = (hash >> ((r * 21 + c) % 32)) & 1;
      const salt = (r * 7 + c * 13 + Math.abs(hash) * 3) % 4;
      if (bit || salt === 0) {
        const m = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        m.setAttribute('x', c); m.setAttribute('y', r); m.setAttribute('width', 1); m.setAttribute('height', 1); m.setAttribute('fill', '#111');
        svg.appendChild(m);
      }
    }
  }
  return svg;
}

async function downloadIDCard(cardEl, file) {
  // Clone card to a printable version and trigger browser print
  const win = window.open('', '_blank', 'width=400,height=600');
  win.document.write(`
    <html><head><title>ID Card — ${file.name || ''}</title>
    <style>body{margin:0;padding:20px;background:#f0e8d8;display:flex;justify-content:center;align-items:center;min-height:100vh;}</style>
    </head><body>${cardEl.outerHTML}<script>setTimeout(()=>{window.print();window.close();},300);</script></body></html>
  `);
  win.document.close();
  await VDB.logScan(file.id, file.slv_code, genQRToken());
  await DB.addVaultLog({ action: 'Scan', title: file.name, code: file.slv_code, by: S.user?.username });
  notif('🪪 ID Card dicetak/diunduh', 'success');
}


// Fix: ol was used instead of el in dashboard analytics
async function ol(tag,props={},...ch){return el(tag,props,...ch);}
// ── MY ACCOUNT ────────────────────────────────────────────────
async function rMyAcct(){
  const q=t();const c=document.getElementById('page-myaccount');c.innerHTML='';
  if(!S.loggedIn){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'🔒'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700',marginBottom:'8px'}},T('loginRequired')),btn('🔐 '+T('login'),openAuthM)));return;}
  const u=await DB.byId(S.user.id);if(!u)return;
  const friends=(await Promise.all((u.friends||[]).map(e=>DB.byId(e)))).filter(Boolean);
  const requests=(await Promise.all((u.friendRequests||[]).map(e=>DB.byId(e)))).filter(Boolean);
  const allUsers=(await DB.getUsers()).filter(x=>x.email!==u.email);
  // Cover
  const cv=el('div',{class:'cover',style:{marginBottom:'0'}});
  if(u.cover){cv.style.backgroundImage=`url(${u.cover})`;cv.style.backgroundSize='cover';cv.style.backgroundPosition='center';}
  else{cv.style.background='linear-gradient(135deg,#1a0030,#002040)';cv.appendChild(el('div',{style:{position:'absolute',inset:'0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'72px',opacity:'.12'}},'⭐'));}
  cv.appendChild(el('button',{style:{position:'absolute',bottom:'9px',right:'9px',background:'rgba(0,0,0,.6)',border:`1px solid ${q.sb}`,color:'#fff',borderRadius:'7px',padding:'4px 10px',fontSize:'10px',cursor:'pointer'},onclick:()=>document.getElementById('fi-cp').click()},'📷 Edit Cover'));
  // Avatar
  const aWrap=el('div',{style:{position:'relative',display:'inline-block',marginTop:'-38px',marginLeft:'20px',zIndex:'5'}});
  if(u.avatar)aWrap.appendChild(el('img',{src:u.avatar,style:{width:'76px',height:'76px',borderRadius:'50%',objectFit:'cover',border:`3px solid ${q.ac}`,display:'block'}}));
  else aWrap.appendChild(el('div',{style:{width:'76px',height:'76px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'34px',background:q.as,border:`3px solid ${q.ac}`,color:q.ac}},u.username[0].toUpperCase()));
  aWrap.appendChild(el('div',{style:{position:'absolute',bottom:'2px',right:'2px',width:'14px',height:'14px',borderRadius:'50%',background:'#64dc64',border:`2px solid ${q.cb}`}}));
  aWrap.appendChild(el('button',{style:{position:'absolute',bottom:'0',left:'54px',background:q.cb,border:`1px solid ${q.ac}`,color:q.ac,borderRadius:'50%',width:'22px',height:'22px',fontSize:'11px',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'},onclick:()=>document.getElementById('fi-av').click()},'📷'));
  const hCard=gc({borderRadius:'14px',overflow:'hidden',marginBottom:'16px'});
  hCard.appendChild(cv);
  const infoRow=el('div',{style:{padding:'0 20px 18px'}});infoRow.appendChild(aWrap);
  const nd=el('div',{style:{display:'flex',alignItems:'center',gap:'7px',marginTop:'10px'}});
  nd.appendChild(el('div',{style:{color:q.tx,fontSize:'20px',fontWeight:'800'}},u.username));
  nd.appendChild(el('button',{style:{background:'none',border:'none',color:q.ac,cursor:'pointer',fontSize:'13px'},onclick:async ()=>{const nn=prompt('New name:',u.username);if(!nn||nn.trim()===u.username)return;await DB.updUser(u.id,{username:nn.trim()});S.user={...S.user,username:nn.trim()};applyTheme();rMyAcct();notif('✅ Name updated!','success');}},'✏️'));
  infoRow.appendChild(nd);
  infoRow.appendChild(el('div',{style:{color:S.isAdmin?q.ac:q.tm,fontSize:'11px',marginTop:'2px'}},S.isAdmin?'👑 Admin':'👤 User'));
  const bd=el('div',{style:{display:'flex',alignItems:'flex-start',gap:'6px',marginTop:'7px'}});
  bd.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',lineHeight:'1.6',flex:'1'}},u.bio||'No bio yet.'));
  bd.appendChild(el('button',{style:{background:'none',border:'none',color:q.ac,cursor:'pointer',fontSize:'11px'},onclick:async ()=>{const nb=prompt('New bio:',u.bio||'');if(nb===null)return;await DB.updUser(u.id,{bio:nb});rMyAcct();notif('✅ Bio updated!','success');}},'✏️'));
  infoRow.appendChild(bd);hCard.appendChild(infoRow);c.appendChild(hCard);
  // Stats row
  const sr=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(105px,1fr))',gap:'10px',marginBottom:'16px'}});
  sr.appendChild(gc({padding:'13px',textAlign:'center'},el('div',{style:{fontSize:'16px',fontWeight:'900',color:q.ac}},friends.length),el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'2px'}},'👥 '+T('friends'))));
  sr.appendChild(gc({padding:'13px',textAlign:'center'},el('div',{style:{fontSize:'16px',fontWeight:'900',color:q.ac}},(u.badges||[]).length),el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'2px'}},'🏅 Badges')));
  sr.appendChild(gc({padding:'13px',textAlign:'center'},el('div',{style:{fontSize:'14px',fontWeight:'700',color:q.ac}},fdate(u.joinDate)),el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'2px'}},'🗓️ Joined')));
  // Fraction card
  const FRACTIONS=['Singularity Nexus','Protocol Zero','Shadow Syntax'];
  const FRACTION_INFO={
    'Singularity Nexus':{em:'🌀',color:'#00ffc8',desc:'Pioneers of AI & singularity research'},
    'Protocol Zero':{em:'⚡',color:'#FAB715',desc:'Zero-trust security & protocol architecture'},
    'Shadow Syntax':{em:'🕶️',color:'#ce93d8',desc:'Stealth operations & dark web analytics'},
  };
  const userFraction=u.fraction||null;
  const fi=userFraction?FRACTION_INFO[userFraction]:null;
  const frCard=gc({padding:'13px',textAlign:'center',border:`1px solid ${fi?fi.color:q.sb}`});
  frCard.appendChild(el('div',{style:{fontSize:'18px'}},fi?fi.em:'❓'));
  frCard.appendChild(el('div',{style:{fontSize:'11px',fontWeight:'700',color:fi?fi.color:q.tm,marginTop:'2px'}},userFraction||'No Fraction'));
  frCard.appendChild(el('div',{style:{color:q.tm,fontSize:'8px',marginTop:'1px'}},'🔱 Fraction'));
  sr.appendChild(frCard);
  c.appendChild(sr);
  // Fraction Section
  const frcSection=gc({padding:'18px',marginBottom:'14px',border:`1px solid ${q.sb}`});
  frcSection.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'10px'}},'🔱 FRACTION'));
  if(S.isAdmin){
    frcSection.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'8px'}},'Assign fraction to yourself:'));
    const frRow=el('div',{style:{display:'flex',flexDirection:'column',gap:'6px'}});
    for(const fr of FRACTIONS){
const fi2=FRACTION_INFO[fr];const active=u.fraction===fr;frRow.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'10px',padding:'9px 11px',borderRadius:'8px',border:`1px solid ${active?fi2.color:q.sb}`,background:active?`${fi2.color}12`:'rgba(255,255,255,.03)',cursor:'pointer',transition:'all .18s'},onclick:async ()=>{await DB.updUser(u.id,{fraction:active?null:fr});S.user={...S.user,fraction:active?null:fr};rMyAcct();notif((active?'❌ Left ':'✅ Joined ')+fr,'success');}},el('div',{style:{fontSize:'22px'}},fi2.em),el('div',{style:{flex:'1'}},el('div',{style:{color:active?fi2.color:q.tx,fontWeight:active?'700':'400',fontSize:'12px'}},fr),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'1px'}},fi2.desc)),active?el('span',{style:{color:fi2.color,fontSize:'11px',fontWeight:'700'}},'✓'):null));
}
    frcSection.appendChild(frRow);
  } else {
    if(userFraction&&fi){
      frcSection.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'12px',padding:'11px',borderRadius:'9px',background:`${fi.color}12`,border:`1px solid ${fi.color}`}},el('div',{style:{fontSize:'32px'}},fi.em),el('div',{},el('div',{style:{color:fi.color,fontWeight:'700',fontSize:'14px'}},userFraction),el('div',{style:{color:q.tm,fontSize:'11px',marginTop:'2px'}},fi.desc),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'4px'}},'Assigned by Admin'))));
    }else{
      frcSection.appendChild(el('div',{style:{textAlign:'center',padding:'14px',color:q.tm,fontSize:'12px'}},el('div',{style:{fontSize:'36px',marginBottom:'6px'}},'⏳'),el('div',{},'No fraction assigned yet.'),el('div',{style:{fontSize:'10px',marginTop:'4px'}},'Contact Admin to join a Fraction')));
    }
    if(S.isAdmin){
      frcSection.appendChild(el('div',{style:{marginTop:'10px',padding:'9px',borderRadius:'7px',background:q.sur,border:`1px solid ${q.sb}`,fontSize:'10px',color:q.ac}},'Manage user fractions in Dashboard → Users'));
    }
  }
  c.appendChild(frcSection);
  // Friend Requests
  if(requests.length>0){
    const rc=gc({padding:'18px',marginBottom:'14px'});rc.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'10px'}},'🔔 Friend Requests ('+requests.length+')'));
    for(const fr of requests){
const row=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'7px 0',borderBottom:`1px solid ${q.sb}`}});row.appendChild(avEl(fr,33));row.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'600'}},fr.username),el('div',{style:{color:q.tm,fontSize:'10px'}},fr.email)));row.appendChild(el('div',{style:{display:'flex',gap:'5px'}},btn('✅',async ()=>{await DB.acceptFR(u.id,fr.id);rMyAcct();notif('✅ '+fr.username+' added!','success');},false,{fontSize:'11px',padding:'3px 9px'}),btn('✕',async ()=>{await DB.rejectFR(u.id,fr.id);rMyAcct();},true,{fontSize:'11px',padding:'3px 7px',borderColor:'#f44',color:'#f88'})));rc.appendChild(row);
}
    c.appendChild(rc);
  }
  // Friends
  const fc=gc({padding:'18px',marginBottom:'14px'});fc.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'10px'}},'👥 '+T('friends')+' ('+friends.length+')'));
  if(!friends.length)fc.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',textAlign:'center',padding:'14px'}},T('noFriends')));
  for(const f of friends){
const row=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'7px 0',borderBottom:`1px solid ${q.sb}`}});row.appendChild(el('div',{style:{position:'relative',flexShrink:'0'}},avEl(f,33),el('div',{class:'dot-s '+(f.online?'on':'off'),style:{position:'absolute',bottom:'0',right:'0',border:`2px solid ${q.cb}`}})));row.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'600'}},f.username),el('div',{style:{color:f.online?'#64dc64':q.tm,fontSize:'10px'}},f.online?T('online'):ago(f.lastSeen||new Date().toISOString()))));row.appendChild(el('div',{style:{display:'flex',gap:'4px',flexWrap:'wrap'}},btn('💬',()=>openChatWith(f),false,{fontSize:'11px',padding:'3px 7px'}),btn('👤',()=>{S.usrSel=f;goTo('userprofile');},true,{fontSize:'11px',padding:'3px 7px'}),btn('✕',async ()=>{if(confirm('Remove '+f.username+'?')){await DB.removeFriend(u.id,f.id);rMyAcct();}},true,{fontSize:'11px',padding:'3px 6px',borderColor:'#f44',color:'#f88'})));fc.appendChild(row);
}
  c.appendChild(fc);
  // ── BADGE COLLECTION ──────────────────────────────────────────
  const BADGE_CATS=[
    {id:'special',label:'⚡ Tugas Khusus Admin',color:'#FAB715'},
    {id:'education',label:'🎓 Pendidikan',color:'#4fc3f7'},
    {id:'voluntary',label:'🤝 Kontribusi Sukarela',color:'#81c784'},
    {id:'tenure',label:'📅 Masa Dinas',color:'#ce93d8'},
    {id:'general',label:'🎉 Tugas Umum',color:'#f06292'},
  ];
  const BADGE_DEFS=[
    // ── Tugas Khusus Admin ──
    {id:'proctor',cat:'special',em:'⚖️',name:'Proctor',desc:'Otoritas khusus — Proctor',color:'#FAB715'},
    {id:'vice_admin',cat:'special',em:'🌟',name:'Vice Admin',desc:'Otoritas khusus — Wakil Admin',color:'#FAB715'},
    {id:'special_ops',cat:'special',em:'🛡️',name:'Special Ops',desc:'Ditugaskan langsung oleh Admin untuk operasi khusus',color:'#FAB715'},
    // ── Pendidikan ──
    {id:'edu_basic',cat:'education',em:'📗',name:'Pendidikan Dasar',desc:'Menyelesaikan materi pendidikan dasar StarLive',color:'#4fc3f7'},
    {id:'edu_advanced',cat:'education',em:'📘',name:'Pendidikan Lanjutan',desc:'Menyelesaikan materi pendidikan lanjutan StarLive',color:'#4fc3f7'},
    {id:'challenge_taker',cat:'education',em:'🏆',name:'Challenger',desc:'Lulus setidaknya 1 Challenge',color:'#4fc3f7',auto:true},
    // ── Kontribusi Sukarela ──
    {id:'web_contributor',cat:'voluntary',em:'🛠️',name:'Web Contributor',desc:'Berkontribusi dalam pengembangan web',color:'#81c784'},
    {id:'news_contributor',cat:'voluntary',em:'📰',name:'News Contributor',desc:'Berkontribusi konten berita',color:'#81c784'},
    {id:'challenge_maker',cat:'voluntary',em:'✏️',name:'Challenge Creator',desc:'Challenge yang dibuat disetujui Admin',color:'#81c784'},
    // ── Masa Dinas ──
    {id:'member_1y',cat:'tenure',em:'🏅',name:'1 Tahun',desc:'Akun berusia minimal 1 tahun',color:'#ce93d8',auto:true},
    {id:'member_2y',cat:'tenure',em:'🥈',name:'2 Tahun',desc:'Akun berusia minimal 2 tahun',color:'#ce93d8',auto:true},
    {id:'member_5y',cat:'tenure',em:'🥇',name:'5 Tahun',desc:'Akun berusia minimal 5 tahun',color:'#ce93d8',auto:true},
    {id:'member_10y',cat:'tenure',em:'💎',name:'10 Tahun',desc:'Akun berusia minimal 10 tahun',color:'#ce93d8',auto:true},
    // ── Tugas Umum ──
    {id:'chat_active',cat:'general',em:'💬',name:'Chat Champion',desc:'User teraktif di Global Chat',color:'#f06292'},
    {id:'top_buyer',cat:'general',em:'🛒',name:'Top Buyer',desc:'User paling rajin membeli di Store',color:'#f06292'},
    {id:'top_donor',cat:'general',em:'💸',name:'Top Donor',desc:'User paling sering donasi',color:'#f06292'},
    {id:'top_reader',cat:'general',em:'📚',name:'Avid Reader',desc:'User paling rajin membaca berita',color:'#f06292'},
    {id:'event_participant',cat:'general',em:'🎪',name:'Event Participant',desc:'Berpartisipasi dalam event/hiburan StarLive',color:'#f06292'},
  ];
  const joinYears=u.joinDate?((Date.now()-new Date(u.joinDate))/31536e6):0;
  async function autoCheckBadges(usr){
    const badges=new Set(usr.badges||[]);
    if(joinYears>=1)badges.add('member_1y');
    if(joinYears>=2)badges.add('member_2y');
    if(joinYears>=5)badges.add('member_5y');
    if(joinYears>=10)badges.add('member_10y');
    const _chs=await DB.getChallenges();const won=_chs.flatMap(ch=>ch.attempts||[]).filter(a=>a.user_id===usr.id&&a.passed).length;
    if(won>0)badges.add('challenge_taker');
    const arr=Array.from(badges);if(JSON.stringify(arr.sort())!==JSON.stringify((usr.badges||[]).sort())){await DB.updUser(usr.id,{badges:arr});}
    return arr;
  }
  const earned=await autoCheckBadges(u);
  const bc=gc({padding:'18px',marginBottom:'14px'});
  bc.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'12px'}},'🏅 BADGE COLLECTION ('+earned.length+'/'+BADGE_DEFS.length+')'));
  for(const cat of BADGE_CATS){

    const catBadges=BADGE_DEFS.filter(b=>b.cat===cat.id);
    const catEarned=catBadges.filter(b=>earned.includes(b.id)).length;
    const catSec=el('div',{style:{marginBottom:'14px'}});
    catSec.appendChild(el('div',{style:{color:cat.color,fontSize:'10px',fontWeight:'700',marginBottom:'7px',display:'flex',alignItems:'center',gap:'6px'}},cat.label,el('span',{style:{color:q.tm,fontWeight:'400'}},`(${catEarned}/${catBadges.length})`)));
    const bgrid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))',gap:'6px'}});
    for(const bd of catBadges){

      const has=earned.includes(bd.id);
      const bcard=el('div',{style:{padding:'9px 7px',borderRadius:'9px',textAlign:'center',border:`1px solid ${has?bd.color:q.sb}`,background:has?`${bd.color}15`:'rgba(255,255,255,.02)',opacity:has?'1':'0.42',position:'relative',transition:'all .2s'}});
      bcard.appendChild(el('div',{style:{fontSize:'20px',marginBottom:'3px'}},bd.em));
      bcard.appendChild(el('div',{style:{color:has?bd.color:q.tm,fontSize:'9px',fontWeight:'700',lineHeight:'1.3'}},bd.name));
      bcard.appendChild(el('div',{style:{color:q.tm,fontSize:'8px',marginTop:'2px',lineHeight:'1.4'}},bd.desc));
      if(!has)bcard.appendChild(el('div',{style:{position:'absolute',top:'4px',right:'4px',fontSize:'8px',color:q.tm}},'🔒'));
      if(has&&S.isAdmin){bcard.appendChild(el('button',{style:{position:'absolute',top:'2px',right:'2px',background:'none',border:'none',color:'#f44',cursor:'pointer',fontSize:'9px'},onclick:async (e)=>{e.stopPropagation();const nb=earned.filter(x=>x!==bd.id);await DB.updUser(u.id,{badges:nb});rMyAcct();}},'✕'));}
      bgrid.appendChild(bcard);
    
}
    catSec.appendChild(bgrid);bc.appendChild(catSec);
  
}
  if(S.isAdmin)bc.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'4px'}},'Admin: Grant badge manual via User Admin panel.'));
  c.appendChild(bc);
  // Find Users
  const nc=gc({padding:'18px'});nc.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'10px'}},'🔍 Find Users'));
  for(const user of allUsers){const isF=friends.some(f=>f.email===user.email);const sentR=false;const row=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'7px 0',borderBottom:`1px solid ${q.sb}`}});row.appendChild(avEl(user,32));row.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'600'}},user.username),el('div',{style:{color:q.tm,fontSize:'10px'}},user.email)));let ab;if(isF)ab=btn('✅ Friends',null,true,{fontSize:'10px',padding:'3px 8px',cursor:'default',opacity:'.6'});else if(sentR)ab=btn('⏳ Sent',null,true,{fontSize:'10px',padding:'3px 8px',cursor:'default',opacity:'.6'});else ab=btn('➕ '+T('addFriend'),async ()=>{const ok=await DB.sendFR(u.email,user.email);notif(ok?'✅ Request sent!':'⚠️ Already sent.',ok?'success':'error');rMyAcct();},false,{fontSize:'10px',padding:'3px 8px'});row.appendChild(el('div',{style:{display:'flex',gap:'4px'}},btn('👤',()=>{S.usrSel=user;goTo('userprofile');},true,{fontSize:'10px',padding:'3px 7px'}),ab));nc.appendChild(row);}
  c.appendChild(nc);
}

// ── WALLET TOP-UP (Requires Admin Approval) ───────────────────
// ── USER PROFILE ──────────────────────────────────────────────
async function rUserProfile(){
  const q=t();const c=document.getElementById('page-userprofile');c.innerHTML='';
  if(!S.usrSel){goTo('myaccount');return;}
  const u=await DB.byEmail(S.usrSel.email)||S.usrSel;const me=S.loggedIn?await DB.byId(S.user.id):null;
  const isF=me&&(me.friends||[]).includes(u.id);const sentR=(u.friendRequests||[]).includes(me?.id);
  c.appendChild(btn('← Back',()=>goTo('myaccount'),true,{marginBottom:'18px'}));
  const card=gc({borderRadius:'14px',overflow:'hidden',marginBottom:'16px'});
  const cv=el('div',{class:'cover'});if(u.cover){cv.style.backgroundImage=`url(${u.cover})`;cv.style.backgroundSize='cover';}else{cv.style.background='linear-gradient(135deg,#0d1a30,#1a0d30)';cv.appendChild(el('div',{style:{position:'absolute',inset:'0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'72px',opacity:'.1'}},'⭐'));}card.appendChild(cv);
  const ir=el('div',{style:{padding:'0 20px 20px'}});
  const aw=el('div',{style:{marginTop:'-38px',marginBottom:'9px',display:'inline-block',position:'relative'}});
  if(u.avatar)aw.appendChild(el('img',{src:u.avatar,style:{width:'76px',height:'76px',borderRadius:'50%',objectFit:'cover',border:`3px solid ${q.ac}`,display:'block'}}));
  else aw.appendChild(el('div',{style:{width:'76px',height:'76px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'34px',background:q.as,border:`3px solid ${q.ac}`,color:q.ac}},u.username[0].toUpperCase()));
  aw.appendChild(el('div',{style:{position:'absolute',bottom:'2px',right:'2px',width:'14px',height:'14px',borderRadius:'50%',background:u.online?'#64dc64':'#555',border:`2px solid ${q.cb}`}}));
  ir.appendChild(aw);ir.appendChild(el('h1',{style:{color:q.tx,fontSize:'22px',fontWeight:'800',margin:'0 0 3px'}},u.username));ir.appendChild(el('div',{style:{color:u.online?'#64dc64':q.tm,fontSize:'11px',marginBottom:'7px'}},u.online?'🟢 '+T('online'):'⚫ '+ago(u.lastSeen||new Date().toISOString())));ir.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',lineHeight:'1.6',marginBottom:'12px'}},u.bio||'No bio.'));ir.appendChild(el('div',{style:{display:'flex',gap:'18px',marginBottom:'14px'}},el('div',{style:{textAlign:'center'}},el('div',{style:{color:q.ac,fontWeight:'800',fontSize:'16px'}},(u.friends||[]).length),el('div',{style:{color:q.tm,fontSize:'10px'}},T('friends'))),el('div',{style:{textAlign:'center'}},el('div',{style:{color:q.ac,fontWeight:'700',fontSize:'12px'}},fdate(u.joinDate)),el('div',{style:{color:q.tm,fontSize:'10px'}},'Joined'))));
  if(S.loggedIn&&me){const bd=el('div',{style:{display:'flex',gap:'7px',flexWrap:'wrap'}});if(isF){bd.appendChild(btn('💬 '+T('chat'),()=>openChatWith(u)));bd.appendChild(btn('✅ Friends',null,true,{cursor:'default',opacity:'.7'}));}else if(sentR)bd.appendChild(btn('⏳ Request Sent',null,true,{cursor:'default',opacity:'.7'}));else bd.appendChild(btn('➕ '+T('addFriend'),async ()=>{const ok=await DB.sendFR(me.id,u.id);notif(ok?'✅ Request sent!':'⚠️ Already sent.',ok?'success':'error');rUserProfile();}));ir.appendChild(bd);}
  card.appendChild(ir);c.appendChild(card);
}
// ── CHAT SYSTEM ───────────────────────────────────────────────
let chatRefT=null,chatBadgeT=null;
async function getTotalUnread(){
  if(!S.loggedIn||!S.user)return{total:0,friend:0,service:0};
  const me=await DB.byId(S.user.id);
  const friendUsers=(await Promise.all((me.friends||[]).map(fid=>DB.byId(fid)))).filter(Boolean);
  let friend=0;
  for(const fu of friendUsers){const room=roomId(me.email,fu.email);const msgs=await DB.getMsgs(room);friend+=msgs.filter(m=>m.userEmail!==me.id&&!m.read).length;}
  const adminMsgs=await DB.getAdminMsgs();
  const service=S.isAdmin?adminMsgs.filter(m=>!m.read).length:adminMsgs.filter(m=>m.from_id===me.id&&m.reply&&!m.replyRead).length;
  return{total:friend+service,friend,service};
}
async function updChatBadge(){
  const btn2=document.getElementById('cfbtn');if(!btn2)return;
  const {total,friend,service}=await getTotalUnread();
  let badge=document.getElementById('chat-badge');
  if(total>0){
    if(!badge){badge=el('div',{id:'chat-badge',style:{position:'absolute',top:'-5px',right:'-5px',background:'#f44',color:'#fff',borderRadius:'50%',width:'18px',height:'18px',fontSize:'10px',fontWeight:'700',display:'flex',alignItems:'center',justifyContent:'center',border:'2px solid transparent',zIndex:'10'}});btn2.style.position='relative';btn2.appendChild(badge);}
    badge.textContent=total>99?'99+':total;
  }else if(badge){badge.remove();}
}
function startChatBadgePoll(){if(chatBadgeT)clearInterval(chatBadgeT);chatBadgeT=setInterval(updChatBadge,3000);updChatBadge();}
function toggleC(){
  const box=document.getElementById('cpbox');S.cpopen=!S.cpopen;S.spopen=false;
  document.getElementById('spbox').style.display='none';
  if(S.cpopen){box.style.display='flex';box.style.flexDirection='column';rChatPanel();}
  else{box.style.display='none';if(chatRefT){clearInterval(chatRefT);chatRefT=null;}}
}
async function rChatPanel(){
  const q=t();const box=document.getElementById('cpbox');box.innerHTML='';
  box.style.cssText=`display:flex;flex-direction:column;background:${q.cb};backdrop-filter:${q.bl};border:1px solid ${q.sb};border-radius:14px;overflow:hidden;width:330px;height:490px;box-shadow:${q.sh}`;
  if(!S.loggedIn){
    box.appendChild(el('div',{style:{padding:'20px',textAlign:'center',color:q.tm,fontSize:'12px',display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',justifyContent:'center',flex:'1'}},'🔒 Login to use chat.',btn('Login',()=>{closePanels();openAuthM();})));return;
  }
  // Tab header with unread badges
  const hdr=el('div',{style:{padding:'10px 12px 8px',borderBottom:`1px solid ${q.sb}`,flexShrink:'0'}});
  const tabRow=el('div',{style:{display:'flex',gap:'6px'}});
  const {friend:fUnread,service:sUnread}=await getTotalUnread();
  [['friends','👥 '+T('friends'),fUnread],['support','📩 Service',sUnread]].forEach(([id,label,unread])=>{
    const active=S.chatTab===id;
    const tabBtn=el('button',{class:'chat-tab',style:{background:active?q.as:'transparent',borderColor:active?q.ac:q.sb,color:active?q.ac:q.tm,flex:'1',position:'relative',display:'flex',alignItems:'center',justifyContent:'center',gap:'4px'},onclick:()=>{S.chatTab=id;S.chatRoom=null;S.chatTarget=null;rChatPanel();}},label);
    if(unread>0)tabBtn.appendChild(el('span',{style:{background:'#f44',color:'#fff',borderRadius:'99px',padding:'0 5px',fontSize:'9px',fontWeight:'700',minWidth:'16px',textAlign:'center'}},unread));
    tabRow.appendChild(tabBtn);
  });
  const closeX=el('button',{style:{marginLeft:'auto',background:'none',border:'none',color:q.tm,cursor:'pointer',fontSize:'14px',padding:'0 4px'},onclick:()=>{S.cpopen=false;box.style.display='none';if(chatRefT){clearInterval(chatRefT);chatRefT=null;}}},'✕');
  const topRow=el('div',{style:{display:'flex',alignItems:'center',gap:'6px'}});topRow.appendChild(tabRow);topRow.appendChild(closeX);
  hdr.appendChild(topRow);box.appendChild(hdr);
  if(S.chatTab==='friends')rChatFriends(box,q);
  else{rChatSupport(box,q);}
  updChatBadge();
}

async function rChatFriends(box,q){
  const me=await DB.byId(S.user.id);
  const friends=(await Promise.all((me.friends||[]).map(e=>DB.byId(e)))).filter(Boolean);
  if(!S.chatRoom){
    if(!friends.length){box.appendChild(el('div',{style:{flex:'1',display:'flex',alignItems:'center',justifyContent:'center',color:q.tm,fontSize:'11px',textAlign:'center',padding:'18px',lineHeight:'1.7'}},'No friends yet.\nAdd friends in My Account to start chatting.'));return;}
    const list=el('div',{style:{flex:'1',overflowY:'auto',padding:'7px'}});
    for(const f of friends){

      const room=roomId(me.email,f.email);const msgs=await DB.getMsgs(room);const last=msgs.length?msgs[msgs.length-1]:null;
      const unread=msgs.filter(mm=>mm.userEmail!==me.id&&!mm.read).length;
      const row=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'9px',borderRadius:'9px',cursor:'pointer',transition:'.18s',marginBottom:'2px'},onclick:async ()=>{S.chatRoom=room;S.chatTarget=f;await DB.markMsgsRead(room,me.id);rChatPanel();}});
      row.onmouseenter=()=>row.style.background=q.sur;row.onmouseleave=()=>row.style.background='transparent';
      row.appendChild(el('div',{style:{position:'relative',flexShrink:'0'}},avEl(f,36),el('div',{class:'dot-s '+(f.online?'on':'off'),style:{position:'absolute',bottom:'0',right:'0',border:`2px solid ${q.cb}`}})));
      row.appendChild(el('div',{style:{flex:'1',minWidth:'0'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'600',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},f.username),el('div',{style:{color:q.tm,fontSize:'10px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},last?(last.img?'📷 Photo':last.text.slice(0,28)+'...'):T('startChat'))));
      if(unread>0)row.appendChild(el('div',{style:{background:q.ac,color:'#000',borderRadius:'50%',width:'16px',height:'16px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'9px',fontWeight:'700',flexShrink:'0'}},unread));
      list.appendChild(row);
    
}
    box.appendChild(list);
  } else {
    const f=S.chatTarget;const room=S.chatRoom;
    const hdr2=el('div',{style:{padding:'9px 11px',borderBottom:`1px solid ${q.sb}`,display:'flex',alignItems:'center',gap:'9px',flexShrink:'0'}});
    hdr2.appendChild(el('button',{style:{background:'none',border:'none',color:q.ac,cursor:'pointer',fontSize:'15px',padding:'1px 3px'},onclick:async ()=>{S.chatRoom=null;S.chatTarget=null;rChatPanel();}},'←'));
    hdr2.appendChild(el('div',{style:{position:'relative'}},avEl(f,32),el('div',{class:'dot-s '+(f.online?'on':'off'),style:{position:'absolute',bottom:'0',right:'0',border:`2px solid ${q.cb}`}})));
    hdr2.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'700'}},f.username),el('div',{style:{color:f.online?'#64dc64':q.tm,fontSize:'10px'}},f.online?T('online'):T('offline'))));
    hdr2.appendChild(el('button',{style:{background:'none',border:'none',color:q.tm,cursor:'pointer',fontSize:'14px'},onclick:async ()=>{S.cpopen=false;box.style.display='none';S.chatRoom=null;S.chatTarget=null;if(chatRefT){clearInterval(chatRefT);chatRefT=null;}}},'✕'));
    box.appendChild(hdr2);
    const msgs=await DB.getMsgs(room);
    const md=el('div',{style:{flex:'1',overflowY:'auto',padding:'11px',display:'flex',flexDirection:'column',gap:'3px'}});
    if(!msgs.length)md.appendChild(el('div',{style:{textAlign:'center',color:q.tm,fontSize:'11px',marginTop:'18px'}},T('startChat')+' with '+f.username));
    msgs.forEach(msg=>{
      const isMe=msg.userEmail===me.id;
      const bbl=el('div',{class:`cmsg ${isMe?'me':''}`});
      if(!isMe)bbl.appendChild(avEl(f,24));
      const ct=el('div',{class:'cbubble',style:{background:isMe?q.mm:q.mo,color:q.tx,borderRadius:isMe?'11px 11px 2px 11px':'11px 11px 11px 2px'}});
      if(msg.img){const im=el('img',{src:msg.img});im.onclick=async ()=>{const mv=document.getElementById('m-iv');mv.style.display='flex';mv.innerHTML='';mv.appendChild(el('img',{src:msg.img,style:{maxWidth:'92vw',maxHeight:'88vh',borderRadius:'11px',objectFit:'contain'}}));};ct.appendChild(im);}
      if(msg.text)ct.appendChild(el('div',{},msg.text));
      ct.appendChild(el('div',{style:{color:'rgba(255,255,255,.3)',fontSize:'9px',marginTop:'2px',textAlign:isMe?'right':'left'}},ago(msg.time)));
      bbl.appendChild(ct);if(isMe)bbl.appendChild(avEl(me,24));md.appendChild(bbl);
    });
    box.appendChild(md);setTimeout(async ()=>{md.scrollTop=md.scrollHeight;},25);
    const ir=el('div',{style:{padding:'7px 9px',borderTop:`1px solid ${q.sb}`,display:'flex',gap:'5px',alignItems:'center',flexShrink:'0'}});
    const inp=el('input',{type:'text',placeholder:'Type message...',style:{flex:'1',padding:'7px 10px',borderRadius:'20px',background:q.ib,border:`1px solid ${q.sb}`,color:q.tx,fontSize:'11px',outline:'none'}});
    inp.value=S.chatDraft[room]||'';inp.oninput=e=>{S.chatDraft[room]=e.target.value;};
    inp.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}};
    ir.appendChild(el('button',{style:{background:'none',border:'none',color:q.ac,cursor:'pointer',fontSize:'16px',padding:'3px'},onclick:()=>document.getElementById('fi-cimg').click()},'📷'));
    ir.appendChild(inp);
    ir.appendChild(el('button',{style:{background:q.bb,border:`1px solid ${q.bc}`,color:q.bt,borderRadius:'20px',padding:'5px 12px',fontSize:'11px',cursor:'pointer',fontWeight:'600'},onclick:sendMsg},'→'));
    box.appendChild(ir);
    if(chatRefT)clearInterval(chatRefT);
    chatRefT=setInterval(async ()=>{if(S.cpopen&&S.chatRoom&&S.chatTab==='friends')rChatPanel();},4000);
  }
}

async function rChatSupport(box,q){
  const me=await DB.byId(S.user.id);const isAdmin=S.isAdmin;
  const msgs=await DB.getAdminMsgs();
  const myMsgs=isAdmin?msgs:msgs.filter(m=>m.from_id===me.id);
  const hdr2=el('div',{style:{padding:'8px 12px',borderBottom:`1px solid ${q.sb}`,flexShrink:'0'}});
  hdr2.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700'}},isAdmin?'📬 All User Messages':'📩 '+T('directMsg')));
  hdr2.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'2px'}},(isAdmin?'Review & reply to user messages':'Send message directly to Admin — no friendship needed')));
  box.appendChild(hdr2);
  const ml=el('div',{style:{flex:'1',overflowY:'auto',padding:'9px'}});
  const TC={complaint:'#f44',suggestion:'#81c784',partnership:'#4fc3f7',inquiry:'#ffb74d'};
  if(!myMsgs.length)ml.appendChild(el('div',{style:{textAlign:'center',color:q.tm,fontSize:'11px',padding:'20px',lineHeight:'1.7'}},'No messages yet.'+(isAdmin?'':'\nUse the form below to contact Admin.')));
  for(const msg of [...myMsgs].reverse()){

    const sender=isAdmin?await DB.byId(msg.from_id):me;const tc=TC[msg.type]||q.ac;
    const card=el('div',{style:{background:q.sur,borderRadius:'9px',padding:'10px',marginBottom:'7px',border:`1px solid ${tc}44`}});
    const topR=el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'6px'}});
    topR.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'7px'}},avEl(sender||{username:msg.fromUsername||'User'},26),el('div',{},el('div',{style:{color:q.tx,fontSize:'11px',fontWeight:'700'}},msg.fromUsername||sender?.username||'Unknown'),el('div',{style:{color:q.tm,fontSize:'9px'}},ago(msg.time||msg.created_at)))));
    topR.appendChild(el('span',{style:{background:`${tc}18`,color:tc,borderRadius:'20px',padding:'1px 8px',fontSize:'9px',fontWeight:'700'}},(msg.type||'msg').toUpperCase()));
    card.appendChild(topR);
    card.appendChild(el('div',{style:{color:q.tx,fontSize:'11px',lineHeight:'1.5',marginBottom:'6px'}},msg.text));
    if(isAdmin&&!msg.replied){
      const ri=el('input',{type:'text',placeholder:'Reply to this message...',style:{width:'100%',padding:'5px 9px',borderRadius:'7px',background:q.ib,border:`1px solid ${q.sb}`,color:q.tx,fontSize:'11px',outline:'none',marginBottom:'5px'}});
      const rb=btn('↩ Reply',async ()=>{const txt=ri.value.trim();if(!txt)return;await DB.updAdminMsg(msg.id,{reply:txt,replied:true,repliedAt:new Date().toISOString()});rChatPanel();notif('✅ Reply sent!','success');},false,{fontSize:'10px',padding:'3px 9px'});
      card.appendChild(ri);card.appendChild(rb);
    }
    if(msg.reply){card.appendChild(el('div',{style:{marginTop:'7px',padding:'7px 9px',background:q.as,borderRadius:'7px',border:`1px solid ${q.ac}`}},el('div',{style:{color:q.ac,fontSize:'9px',fontWeight:'700',marginBottom:'3px'}},'↩ ADMIN REPLY'),el('div',{style:{color:q.tx,fontSize:'11px'}},msg.reply)));}
    ml.appendChild(card);
  
}
  box.appendChild(ml);
  if(!isAdmin){
    const frm=el('div',{style:{padding:'9px',borderTop:`1px solid ${q.sb}`,flexShrink:'0'}});
    const sel=el('select',{style:{width:'100%',padding:'6px 10px',borderRadius:'7px',background:q.ib,border:`1px solid ${q.sb}`,color:q.tx,fontSize:'11px',marginBottom:'6px',outline:'none'}});
    ['complaint','suggestion','partnership','inquiry'].forEach(ty=>{const o=el('option',{value:ty},ty.charAt(0).toUpperCase()+ty.slice(1));sel.appendChild(o);});
    const ta=el('textarea',{rows:'3',placeholder:'Write your message to Admin...',style:{width:'100%',padding:'7px 10px',borderRadius:'7px',background:q.ib,border:`1px solid ${q.sb}`,color:q.tx,fontSize:'11px',outline:'none',resize:'none',marginBottom:'6px'}});
    frm.appendChild(sel);frm.appendChild(ta);
    frm.appendChild(btn('📩 '+T('send'),async ()=>{const txt=ta.value.trim();if(!txt){notif('Please write a message.','error');return;}await DB.addAdminMsg({type:sel.value,text:txt});ta.value='';rChatPanel();notif('✅ Message sent to Admin!','success');},false,{width:'100%',fontSize:'11px'}));
    box.appendChild(frm);
  }
}

async function sendMsg(){
  if(!S.loggedIn||!S.chatRoom)return;
  const draft=S.chatDraft[S.chatRoom]||'';if(!draft.trim())return;
  await DB.addMsg(S.chatRoom,{from:S.user.email,text:draft.trim(),time:new Date().toISOString(),read:false});
  S.chatDraft[S.chatRoom]='';rChatPanel();
}
async function onFiCimg(e){const f=e.target.files[0];if(!f||!S.chatRoom)return;const d=await rf(f);await DB.addMsg(S.chatRoom,{from:S.user.email,img:d,text:'',time:new Date().toISOString(),read:false});rChatPanel();e.target.value='';}
async function openChatWith(user){
  if(!S.loggedIn){openAuthM();return;}
  const me=await DB.byId(S.user.id);if(!(me.friends||[]).includes(user.id)){notif('⚠️ Can only chat with friends.','error');return;}
  S.chatRoom=roomId(me.email,user.email);S.chatTarget=user;S.chatTab='friends';S.cpopen=true;S.spopen=false;
  document.getElementById('spbox').style.display='none';
  const box=document.getElementById('cpbox');box.style.display='flex';rChatPanel();
}
// ── SETTINGS PANEL ────────────────────────────────────────────
function toggleS(){
  const box=document.getElementById('spbox');S.spopen=!S.spopen;S.cpopen=false;
  document.getElementById('cpbox').style.display='none';
  if(chatRefT){clearInterval(chatRefT);chatRefT=null;}
  if(S.spopen){box.style.display='block';rSPanel();}else box.style.display='none';
}
function rSPanel(){
  const q=t();const box=document.getElementById('spbox');box.innerHTML='';
  box.style.cssText=`background:${q.cb};backdrop-filter:${q.bl};border:1px solid ${q.sb};border-radius:14px;padding:14px;width:268px;box-shadow:${q.sh}`;
  if(!S.loggedIn){
    box.appendChild(el('div',{style:{textAlign:'center',padding:'20px',display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'}},el('div',{style:{fontSize:'36px'}},'🔒'),el('div',{style:{color:q.tm,fontSize:'12px',lineHeight:'1.6'}},'Login to access Settings'),btn('🔐 Login',()=>{S.spopen=false;box.style.display='none';openAuthM();},false,{width:'100%',fontSize:'11px'})));return;
  }
  const tr=el('div',{style:{display:'flex',gap:'4px',marginBottom:'12px',flexWrap:'wrap'}});
  ['theme','season','bg','lang'].forEach(tb=>{const a=S.stab===tb;tr.appendChild(el('button',{style:{background:a?q.as:'transparent',border:`1px solid ${a?q.ac:q.sb}`,color:a?q.ac:q.tm,borderRadius:'5px',padding:'2px 8px',fontSize:'9px',cursor:'pointer',fontWeight:a?'700':'400'},onclick:()=>{S.stab=tb;rSPanel();}},tb.toUpperCase()));});
  box.appendChild(tr);
  if(S.stab==='theme'){
    box.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',fontWeight:'700',marginBottom:'6px'}},'🎨 THEME'));
    Object.entries(TH).forEach(([k,v])=>{const a=S.theme===k;box.appendChild(el('div',{style:{padding:'7px 10px',borderRadius:'7px',marginBottom:'4px',cursor:'pointer',background:a?q.as:'rgba(255,255,255,.03)',border:`1px solid ${a?q.ac:q.sb}`,color:a?q.ac:q.tx,fontSize:'11px'},onclick:()=>{S.theme=k;applyTheme();rPage();rSPanel();}},v.name));});
    box.appendChild(el('div',{style:{marginTop:'10px',padding:'9px',borderRadius:'7px',background:q.sur,border:`1px solid ${q.sb}`,fontSize:'10px',color:q.tm}},'✨ Effects auto-follow Season setting'));
  } else if(S.stab==='season'){
    // Season descriptions with elements/effects
    const seasonInfo={
      Spring:{em:'🌸',desc:'Sakura petals falling',color:'#f8a4c8',elements:'🌸🌷🦋',bg:'linear-gradient(135deg,#2d1020,#3d1535,#1a0828)'},
      Summer:{em:'☀️',desc:'Sunflowers & fireflies',color:'#FFD700',elements:'🌻🌊🌟',bg:'linear-gradient(135deg,#1a1000,#2a1800,#0a1020)'},
      Autumn:{em:'🍂',desc:'Maple leaves drifting',color:'#FF6B35',elements:'🍂🍁🎃',bg:'linear-gradient(135deg,#1a0a00,#2a1200,#0a0a18)'},
      Winter:{em:'❄️',desc:'Snowflakes & frost',color:'#87CEEB',elements:'❄️⛄🌨️',bg:'linear-gradient(135deg,#0a1020,#0d1a2d,#050a18)'},
    };
    box.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',fontWeight:'700',marginBottom:'6px'}},'🌸 SEASON'));
    ['Spring','Summer','Autumn','Winter'].forEach(s=>{
      const a=S.season===s;const si=seasonInfo[s];
      const card=el('div',{style:{padding:'9px 11px',borderRadius:'7px',marginBottom:'5px',cursor:'pointer',background:a?q.as:'rgba(255,255,255,.03)',border:`1px solid ${a?si.color:q.sb}`,transition:'all .18s'},onclick:()=>{S.season=s;S.fx=true;applySeasonBg();updParticles();rSPanel();notif(si.em+' Season changed to '+s,'success');}});
      const row=el('div',{style:{display:'flex',alignItems:'center',gap:'8px'}});
      row.appendChild(el('div',{style:{fontSize:'20px'}},si.em));
      const info2=el('div',{style:{flex:'1'}});
      info2.appendChild(el('div',{style:{color:a?si.color:q.tx,fontWeight:a?'700':'400',fontSize:'11px'}},s));
      info2.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'1px'}},si.desc));
      row.appendChild(info2);
      row.appendChild(el('div',{style:{fontSize:'14px',letterSpacing:'1px'}},si.elements));
      if(a)row.appendChild(el('span',{style:{color:si.color,fontSize:'10px',fontWeight:'700'}},'✓'));
      card.appendChild(row);
      box.appendChild(card);
    });
    box.appendChild(el('div',{style:{marginTop:'8px',padding:'8px',borderRadius:'7px',background:q.sur,border:`1px solid ${q.sb}`,fontSize:'10px',color:q.tm}},'Effects are always active with season'));
  } else if(S.stab==='bg'){
    const BG_DEFS=[
      {label:'🪐 Planet & Galaxy',gradient:'linear-gradient(135deg,#0a0015,#1a0040,#000820)',stars:true},
      {label:'🌆 Night City',gradient:'linear-gradient(135deg,#0a0010,#050020,#001020)',stars:false},
      {label:'🌅 Japanese Village',gradient:'linear-gradient(135deg,#1a0818,#2d0d28,#0a1020)',stars:false},
      {label:'🎒 Classroom',gradient:'linear-gradient(135deg,#0a1018,#0d1828,#050a10)',stars:false},
      {label:'♨️ Onsen Night',gradient:'linear-gradient(135deg,#0d0a18,#1a0828,#050a14)',stars:false},
      {label:'🤖 Cyber City',gradient:'linear-gradient(135deg,#001a10,#003020,#000a08)',stars:false},
    ];
    box.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',fontWeight:'700',marginBottom:'6px'}},'🖼️ BACKGROUND'));
    BG_DEFS.forEach((bg,i)=>{const a=S.bgP===i&&!S.customBg;box.appendChild(el('div',{style:{padding:'7px 10px',borderRadius:'7px',marginBottom:'4px',cursor:'pointer',background:a?q.as:'rgba(255,255,255,.03)',border:`1px solid ${a?q.ac:q.sb}`,color:a?q.ac:q.tx,fontSize:'11px',display:'flex',alignItems:'center',gap:'8px'},onclick:()=>{S.bgP=i;rmCustomBg();applyBgGradient(BG_DEFS[i].gradient);rSPanel();}},el('div',{style:{width:'26px',height:'16px',borderRadius:'3px',background:bg.gradient,border:`1px solid ${q.sb}`,flexShrink:'0'}}),bg.label));});
    // Custom BG for all logged-in users
    box.appendChild(el('div',{style:{borderTop:`1px solid ${q.sb}`,paddingTop:'9px',marginTop:'7px'}}));
    box.appendChild(el('div',{style:{color:q.ac,fontSize:'9px',fontWeight:'700',marginBottom:'6px'}},'📁 CUSTOM BACKGROUND'));
    if(S.customBg){
      box.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',marginBottom:'6px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},(S.customBg.type==='video'?'🎬 ':'🖼️ ')+S.customBg.name));
      box.appendChild(btn('✕ Remove Custom BG',()=>rmCustomBg(),true,{width:'100%',fontSize:'10px',borderColor:'#f44',color:'#f88'}));
    }else{
      const uploadRow=el('div',{style:{display:'flex',gap:'6px',marginBottom:'4px'}});
      uploadRow.appendChild(btn('🖼️ Image',()=>document.getElementById('fi-bg').click(),false,{flex:'1',fontSize:'10px'}));
      uploadRow.appendChild(btn('🎬 Video',()=>document.getElementById('fi-bgv').click(),true,{flex:'1',fontSize:'10px'}));
      box.appendChild(uploadRow);
      box.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',textAlign:'center'}},'JPG PNG GIF / MP4 WEBM'));
    }
  } else {
    // LANGUAGE — fully working
    box.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',fontWeight:'700',marginBottom:'6px'}},'🌍 LANGUAGE'));
    Object.keys(LANGS).forEach(l=>{
      const a=S.lang===l;
      const item=el('div',{style:{padding:'7px 10px',borderRadius:'7px',marginBottom:'4px',cursor:'pointer',background:a?q.as:'rgba(255,255,255,.03)',border:`1px solid ${a?q.ac:q.sb}`,color:a?q.ac:q.tx,fontSize:'11px',display:'flex',justifyContent:'space-between',alignItems:'center'},onclick:()=>{
        S.lang=l;
        // Re-render everything with new language
        renderNav();renderAuth();rPage();
        rSPanel();
        notif('🌍 Language: '+l);
      }},l,a?el('span',{style:{color:q.ac,fontSize:'10px',fontWeight:'700'}},'✓'):null);
      box.appendChild(item);
    });
  }
}

// ── PARTICLES ─────────────────────────────────────────────────
let pAnim=null,pArr=[];
function updParticles(){
  S.fx=true; // always active, follows season
  const cv=document.getElementById('pcan');
  cv.style.display='block';cv.width=innerWidth;cv.height=innerHeight;
  const seasonConfig={
    Spring:{ems:['🌸','🌸','🌷','🦋'],count:30,speed:0.7,drift:0.5},
    Summer:{ems:['🌟','✨','🌻','🌊'],count:22,speed:1.0,drift:0.3},
    Autumn:{ems:['🍂','🍁','🍂','🍁'],count:34,speed:0.9,drift:0.8},
    Winter:{ems:['❄️','❄️','⛄','❄️'],count:28,speed:0.5,drift:0.2},
  };
  const cfg=seasonConfig[S.season]||seasonConfig.Autumn;
  pArr=Array.from({length:cfg.count},()=>{const emi=cfg.ems[Math.floor(Math.random()*cfg.ems.length)];return{x:Math.random()*cv.width,y:Math.random()*cv.height-cv.height,sp:cfg.speed*(0.6+Math.random()*0.8),dr:(Math.random()-.5)*cfg.drift*2,sz:9+Math.random()*14,op:0.35+Math.random()*0.5,em:emi,rot:Math.random()*360,rotSp:(Math.random()-.5)*2};});
  if(pAnim)cancelAnimationFrame(pAnim);
  const ctx=cv.getContext('2d');
  function tick(){ctx.clearRect(0,0,cv.width,cv.height);pArr.forEach(p=>{ctx.save();ctx.globalAlpha=p.op;ctx.font=p.sz+'px serif';ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.fillText(p.em,-p.sz/2,-p.sz/2);ctx.restore();p.y+=p.sp;p.x+=p.dr;p.rot+=p.rotSp;if(p.y>cv.height){p.y=-18;p.x=Math.random()*cv.width;}});pAnim=requestAnimationFrame(tick);}
  tick();
}
window.addEventListener('resize',()=>{const c=document.getElementById('pcan');if(S.fx){c.width=innerWidth;c.height=innerHeight;}});

// ── BG / FILE UPLOADS ─────────────────────────────────────────
async function applySeasonBg(){
  if(S.customBg)return;
  const seasonBg={
    Spring:'linear-gradient(135deg,#2d1020,#3d1535,#1a0828)',
    Summer:'linear-gradient(135deg,#1a1000,#2a1800,#0a1020)',
    Autumn:'linear-gradient(135deg,#1a0a00,#2a1200,#0a0a18)',
    Winter:'linear-gradient(135deg,#0a1020,#0d1a2d,#050a18)',
  };
  document.body.style.background=seasonBg[S.season]||t().bg;
}
async function applyBgGradient(grad){if(!S.customBg)document.body.style.background=grad;}
async function onFiBg(e){const f=e.target.files[0];if(!f)return;const url=URL.createObjectURL(f);S.customBg={type:f.type.startsWith('video')?'video':'image',url,name:f.name};applyCustomBg();e.target.value='';rSPanel();}
async function onFiBgv(e){const f=e.target.files[0];if(!f)return;const url=URL.createObjectURL(f);S.customBg={type:'video',url,name:f.name};applyCustomBg();e.target.value='';rSPanel();}
async function applyCustomBg(){const old=document.getElementById('_cbg');if(old)old.remove();if(!S.customBg)return;const l=document.createElement(S.customBg.type==='video'?'video':'div');l.id='_cbg';l.style.cssText='position:fixed;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;pointer-events:none;';if(S.customBg.type==='video'){l.src=S.customBg.url;l.autoplay=true;l.loop=true;l.muted=true;l.style.opacity='.38';}else{l.style.backgroundImage=`url(${S.customBg.url})`;l.style.backgroundSize='cover';l.style.backgroundPosition='center';l.style.opacity='.28';}document.getElementById('app').insertBefore(l,document.getElementById('app').firstChild);}
async function rmCustomBg(){S.customBg=null;const o=document.getElementById('_cbg');if(o)o.remove();document.body.style.background=t().bg;rSPanel();}
async function onFiAv(e){
  const f=e.target.files[0];if(!f)return;
  openCropModal(f,'avatar',async(dataUrl,file)=>{
    if(supa&&file){
      const url=await uploadAvatar(file);
      if(url){await DB.updUser(S.user.id,{avatar_url:url});S.user.avatar=url;S.user.avatar_url=url;applyTheme();rMyAcct();notif('✅ Foto profil diperbarui!','success');return;}
    }
    // Fallback: store as base64 if no Supabase
    await DB.updUser(S.user.id,{avatar:dataUrl});S.user.avatar=dataUrl;applyTheme();rMyAcct();notif('✅ Foto profil diperbarui!','success');
  });
  e.target.value='';
}
async function onFiCp(e){
  const f=e.target.files[0];if(!f)return;
  openCropModal(f,'cover',async(dataUrl,file)=>{
    if(supa&&file){
      const url=await uploadCover(file);
      if(url){await DB.updUser(S.user.id,{cover_url:url});S.user.cover=url;S.user.cover_url=url;rMyAcct();notif('✅ Foto cover diperbarui!','success');return;}
    }
    await DB.updUser(S.user.id,{cover:dataUrl});S.user.cover=dataUrl;rMyAcct();notif('✅ Foto cover diperbarui!','success');
  });
  e.target.value='';
}

// ── IMAGE CROP MODAL ──────────────────────────────────────────
function openCropModal(file,target,onApply){
  const q=t();
  let cropX=0,cropY=0,cropW=0,cropH=0,dragging=false,resizing=false;
  let dragSX=0,dragSY=0,resSide='',isDrawing=false,drawStartX=0,drawStartY=0;
  const isAvatar=target==='avatar';
  const url=URL.createObjectURL(file);
  const m=document.getElementById('m-crop');m.style.display='flex';m.innerHTML='';
  const card=gc({padding:'22px',width:'560px',maxWidth:'97vw',position:'relative',borderRadius:'18px',maxHeight:'95vh',display:'flex',flexDirection:'column',gap:'10px'});
  card.appendChild(el('button',{style:{position:'absolute',top:'10px',right:'12px',background:'none',border:'none',color:q.tm,fontSize:'20px',cursor:'pointer',zIndex:'10'},onclick:()=>{cleanup();}},'✕'));
  card.appendChild(el('div',{style:{color:q.ac,fontSize:'14px',fontWeight:'800'}},isAvatar?'📷 Crop Profile Photo':'🖼️ Crop Cover Photo'));
  card.appendChild(el('div',{style:{color:q.tm,fontSize:'11px'}},isAvatar?'Drag selection · Resize with handles · Circle crop':'Drag to draw selection · Ratio 3:1 locked · Resize freely'));

  const wrap=el('div',{id:'cropwrap',style:{position:'relative',overflow:'hidden',borderRadius:'9px',background:'#000',flexShrink:'0',lineHeight:'0'}});
  const imgEl=new Image();
  imgEl.style.cssText='display:block;max-width:100%;max-height:52vh;object-fit:contain;pointer-events:none;user-select:none;';
  const overlayCanvas=document.createElement('canvas');
  overlayCanvas.style.cssText='position:absolute;left:0;top:0;pointer-events:none;';
  const selBox=el('div',{style:{position:'absolute',border:`2px solid ${q.ac}`,boxSizing:'border-box',cursor:'move',display:'none',userSelect:'none'}});
  const HANDLES=['nw','n','ne','w','e','sw','s','se'];
  HANDLES.forEach(h=>{const hd=document.createElement('div');hd.dataset.h=h;hd.style.cssText=`position:absolute;width:12px;height:12px;background:${q.ac};border-radius:2px;cursor:${h}-resize;border:1px solid rgba(0,0,0,.5);`;selBox.appendChild(hd);});

  wrap.appendChild(imgEl);wrap.appendChild(overlayCanvas);wrap.appendChild(selBox);
  card.appendChild(wrap);

  function posH(){
    const W=selBox.offsetWidth,H=selBox.offsetHeight;
    [{h:'nw',l:-6,t:-6},{h:'n',l:W/2-6,t:-6},{h:'ne',l:W-6,t:-6},{h:'w',l:-6,t:H/2-6},{h:'e',l:W-6,t:H/2-6},{h:'sw',l:-6,t:H-6},{h:'s',l:W/2-6,t:H-6},{h:'se',l:W-6,t:H-6}].forEach(p=>{const hd=selBox.querySelector(`[data-h="${p.h}"]`);if(hd){hd.style.left=p.l+'px';hd.style.top=p.t+'px';}});
  }
  function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
  function drawOverlay(){
    const iw=imgEl.offsetWidth,ih=imgEl.offsetHeight;
    overlayCanvas.width=iw;overlayCanvas.height=ih;overlayCanvas.style.width=iw+'px';overlayCanvas.style.height=ih+'px';
    const ctx=overlayCanvas.getContext('2d');
    ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,0,iw,ih);
    if(cropW>0&&cropH>0){
      ctx.clearRect(cropX,cropY,cropW,cropH);
      ctx.strokeStyle=q.ac;ctx.lineWidth=1;ctx.setLineDash([4,3]);ctx.strokeRect(cropX,cropY,cropW,cropH);ctx.setLineDash([]);
      if(isAvatar){ctx.save();ctx.beginPath();ctx.arc(cropX+cropW/2,cropY+cropH/2,Math.min(cropW,cropH)/2,0,Math.PI*2);ctx.strokeStyle=q.ac;ctx.lineWidth=2;ctx.stroke();ctx.restore();}
    }
  }
  function updSel(){
    selBox.style.left=cropX+'px';selBox.style.top=cropY+'px';
    selBox.style.width=Math.max(0,cropW)+'px';selBox.style.height=Math.max(0,cropH)+'px';
    selBox.style.display=(cropW>5&&cropH>5)?'block':'none';
    posH();drawOverlay();
  }
  imgEl.onload=()=>{
    wrap.style.width=imgEl.offsetWidth+'px';
    const iw=imgEl.offsetWidth,ih=imgEl.offsetHeight;
    if(isAvatar){const sz=Math.min(iw,ih)*0.65;cropX=(iw-sz)/2;cropY=(ih-sz)/2;cropW=sz;cropH=sz;}
    else{cropW=iw*0.9;cropH=Math.round(cropW/3);if(cropH>ih*0.9){cropH=Math.round(ih*0.9);cropW=cropH*3;}cropX=(iw-cropW)/2;cropY=(ih-cropH)/2;}
    updSel();
  };
  imgEl.src=url;

  // ── Mouse events on WRAP (draw new crop) ──
  wrap.addEventListener('mousedown',e=>{
    if(e.target===selBox||e.target.dataset.h)return;
    const r=wrap.getBoundingClientRect();
    drawStartX=e.clientX-r.left;drawStartY=e.clientY-r.top;
    cropX=drawStartX;cropY=drawStartY;cropW=0;cropH=0;
    isDrawing=true;dragging=false;resizing=false;
    e.preventDefault();
  });
  // ── Mouse events on SELBOX (move) ──
  selBox.addEventListener('mousedown',e=>{
    if(e.target.dataset.h){resizing=true;resSide=e.target.dataset.h;}
    else{dragging=true;}
    dragSX=e.clientX;dragSY=e.clientY;
    isDrawing=false;e.preventDefault();e.stopPropagation();
  });
  function onMove(e){
    const r=wrap.getBoundingClientRect();
    const iw=imgEl.offsetWidth,ih=imgEl.offsetHeight;const mn=20;
    if(isDrawing){
      const cx=clamp(e.clientX-r.left,0,iw),cy=clamp(e.clientY-r.top,0,ih);
      cropX=Math.min(cx,drawStartX);cropY=Math.min(cy,drawStartY);
      cropW=Math.abs(cx-drawStartX);cropH=Math.abs(cy-drawStartY);
      if(isAvatar){const s=Math.min(cropW,cropH);cropW=s;cropH=s;}
      else{cropH=Math.round(cropW/3);} // enforce 3:1 for cover
      updSel();return;
    }
    const dx=e.clientX-dragSX,dy=e.clientY-dragSY;dragSX=e.clientX;dragSY=e.clientY;
    if(dragging){cropX=clamp(cropX+dx,0,iw-cropW);cropY=clamp(cropY+dy,0,ih-cropH);}
    else if(resizing){
      if(resSide==='se'){cropW=clamp(cropW+dx,mn,iw-cropX);cropH=isAvatar?cropW:Math.round(cropW/3);}
      else if(resSide==='nw'){const nw=clamp(cropW-dx,mn,cropX+cropW);const nh=isAvatar?nw:Math.round(nw/3);cropX+=cropW-nw;cropY+=cropH-nh;cropW=nw;cropH=nh;}
      else if(resSide==='ne'){cropW=clamp(cropW+dx,mn,iw-cropX);const nh=isAvatar?cropW:Math.round(cropW/3);cropY+=cropH-nh;cropH=nh;}
      else if(resSide==='sw'){const nw=clamp(cropW-dx,mn,cropX+cropW);cropX+=cropW-nw;cropW=nw;cropH=isAvatar?cropW:Math.round(cropW/3);}
      else if(resSide==='n'){const nh=clamp(cropH-dy,mn,cropY+cropH);cropY+=cropH-nh;cropH=nh;if(isAvatar)cropW=cropH;else cropW=Math.round(cropH*3);}
      else if(resSide==='s'){cropH=clamp(cropH+dy,mn,ih-cropY);if(isAvatar)cropW=cropH;else cropW=Math.min(Math.round(cropH*3),iw-cropX);}
      else if(resSide==='w'){const nw=clamp(cropW-dx,mn,cropX+cropW);cropX+=cropW-nw;cropW=nw;if(isAvatar)cropH=cropW;else cropH=Math.round(cropW/3);}
      else if(resSide==='e'){cropW=clamp(cropW+dx,mn,iw-cropX);if(isAvatar)cropH=cropW;else cropH=Math.round(cropW/3);}
    }
    updSel();
  }
  function onUp(){isDrawing=false;dragging=false;resizing=false;}
  document.addEventListener('mousemove',onMove);document.addEventListener('mouseup',onUp);

  // Touch support
  function touchPos(e){const r=wrap.getBoundingClientRect();return{x:e.touches[0].clientX-r.left,y:e.touches[0].clientY-r.top};}
  wrap.addEventListener('touchstart',e=>{const p=touchPos(e);drawStartX=p.x;drawStartY=p.y;cropX=p.x;cropY=p.y;cropW=0;cropH=0;isDrawing=true;},{passive:true});
  selBox.addEventListener('touchstart',e=>{if(e.target.dataset.h){resizing=true;resSide=e.target.dataset.h;}else dragging=true;dragSX=e.touches[0].clientX;dragSY=e.touches[0].clientY;isDrawing=false;e.stopPropagation();},{passive:true});
  wrap.addEventListener('touchmove',e=>{e.preventDefault();const r=wrap.getBoundingClientRect();const iw=imgEl.offsetWidth,ih=imgEl.offsetHeight;const cx=clamp(e.touches[0].clientX-r.left,0,iw),cy=clamp(e.touches[0].clientY-r.top,0,ih);if(isDrawing){cropX=Math.min(cx,drawStartX);cropY=Math.min(cy,drawStartY);cropW=Math.abs(cx-drawStartX);if(isAvatar){const s=Math.min(cropW,Math.abs(cy-drawStartY));cropW=s;cropH=s;}else{cropH=Math.round(cropW/3);}}else{const dx=e.touches[0].clientX-dragSX,dy=e.touches[0].clientY-dragSY;dragSX=e.touches[0].clientX;dragSY=e.touches[0].clientY;if(dragging){cropX=clamp(cropX+dx,0,iw-cropW);cropY=clamp(cropY+dy,0,ih-cropH);}}updSel();},{passive:false});
  wrap.addEventListener('touchend',()=>{isDrawing=false;dragging=false;resizing=false;},{passive:true});

  const previewBox=el('div',{style:{textAlign:'center',minHeight:'20px'}});
  const brow=el('div',{style:{display:'flex',gap:'7px',flexWrap:'wrap'}});
  brow.appendChild(btn('👁 Preview',()=>{
    if(cropW<10||cropH<10){notif('Pilih area crop terlebih dahulu!','error');return;}
    const canvas=document.createElement('canvas');
    const sx=imgEl.naturalWidth/imgEl.offsetWidth,sy=imgEl.naturalHeight/imgEl.offsetHeight;
    // For cover: force exact 3:1 ratio in output
    const outW=isAvatar?200:600;const outH=isAvatar?200:200; // 600×200 = 3:1
    canvas.width=outW;canvas.height=outH;const ctx=canvas.getContext('2d');
    if(isAvatar){ctx.beginPath();ctx.arc(outW/2,outH/2,outW/2,0,Math.PI*2);ctx.clip();}
    ctx.drawImage(imgEl,cropX*sx,cropY*sy,cropW*sx,cropH*sy,0,0,outW,outH);
    previewBox.innerHTML='';
    previewBox.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'4px'}},isAvatar?'Preview (lingkaran, 1:1):':'Preview (cover, 3:1 — sama dengan hasil akhir):'));
    previewBox.appendChild(el('img',{src:canvas.toDataURL('image/jpeg',.9),style:{borderRadius:isAvatar?'50%':'7px',width:isAvatar?'80px':'240px',height:isAvatar?'80px':'80px',objectFit:'fill',border:`2px solid ${q.ac}`,display:'block',margin:'0 auto'}}));
    previewBox.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'4px'}},isAvatar?'80×80px':'240×80px (rasio 3:1)'));
  },true,{fontSize:'11px'}));
  brow.appendChild(btn('✅ Apply Crop',async ()=>{
    if(cropW<10||cropH<10){notif('Pilih area crop terlebih dahulu!','error');return;}
    const canvas=document.createElement('canvas');
    const sx=imgEl.naturalWidth/imgEl.offsetWidth,sy=imgEl.naturalHeight/imgEl.offsetHeight;
    const outW=isAvatar?300:900;const outH=isAvatar?300:300; // 900×300 = exact 3:1
    canvas.width=outW;canvas.height=outH;const ctx=canvas.getContext('2d');
    if(isAvatar){ctx.beginPath();ctx.arc(outW/2,outH/2,outW/2,0,Math.PI*2);ctx.clip();}
    ctx.drawImage(imgEl,cropX*sx,cropY*sy,cropW*sx,cropH*sy,0,0,outW,outH);
    const dataUrl=canvas.toDataURL('image/jpeg',.88);
    if(onApply){
      const blob=await new Promise(res=>canvas.toBlob(res,'image/jpeg',.88));
      const croppedFile=new File([blob],'cropped.jpg',{type:'image/jpeg'});
      await onApply(dataUrl,croppedFile);
    } else if(target==='avatar'){await DB.updUser(S.user.id,{avatar:dataUrl});S.user={...S.user,avatar:dataUrl};applyTheme();rMyAcct();notif('✅ Foto profil diperbarui!','success');}
    else{await DB.updUser(S.user.id,{cover:dataUrl});rMyAcct();notif('✅ Foto cover diperbarui! (rasio 3:1)','success');}
    cleanup();
  },false,{fontSize:'11px'}));
  brow.appendChild(btn('Batal',()=>cleanup(),true,{fontSize:'11px'}));
  card.appendChild(brow);card.appendChild(previewBox);m.appendChild(card);

  function cleanup(){
    document.removeEventListener('mousemove',onMove);document.removeEventListener('mouseup',onUp);
    URL.revokeObjectURL(url);m.style.display='none';m.innerHTML='';
  }
}
// ── FRACTION PAGE ─────────────────────────────────────────────
const FRACTION_DATA={
  'Singularity Nexus':{em:'🌀',color:'#00ffc8',desc:'Pioneers of AI research and singularity thought leadership. Masters of emerging technology and computational theory.',perks:['AI-exclusive chat channel','5% voucher on all Store purchases','Quest: Research Track'],quests:['Complete 3 AI-themed Challenges','Read 10 News articles','Win a Challenge with 100% score']},
  'Protocol Zero':{em:'⚡',color:'#FAB715',desc:'Zero-trust security specialists and protocol architects. The backbone of StarLive infrastructure and digital defense.',perks:['Security chat channel','10% discount on digital products','Quest: Protocol Track'],quests:['Complete 3 Security Challenges','Submit a web development contribution','Maintain 30-day login streak']},
  'Shadow Syntax':{em:'🕶️',color:'#ce93d8',desc:'Stealth operations and dark analytics unit. Experts in pattern recognition, cipher, and covert digital intelligence.',perks:['Shadow-only chat channel','Mystery voucher drops','Quest: Shadow Track'],quests:['Complete 5 Challenges of any type','Top the weekly chat activity','Unlock 5 badges']},
};
const EXAM_QUESTIONS=[
  {q:'You find a zero-day vulnerability in a critical system. What is your first instinct?',opts:['Report it immediately through proper channels','Study it deeply to understand its architecture','Document it secretly for your own knowledge','Exploit it to see how far it goes'],scores:['Protocol Zero','Singularity Nexus','Shadow Syntax','Shadow Syntax']},
  {q:'When approaching a complex problem, you prefer to:',opts:['Model it mathematically and simulate outcomes','Break it into protocols and enforce constraints','Find the hidden pattern no one else sees','Combine all three approaches intuitively'],scores:['Singularity Nexus','Protocol Zero','Shadow Syntax','Singularity Nexus']},
  {q:'Your ideal role in a team project?',opts:['The visionary who sets the direction','The architect who builds the framework','The shadow who executes silently','The leader who coordinates everyone'],scores:['Singularity Nexus','Protocol Zero','Shadow Syntax','Protocol Zero']},
  {q:'Which phrase resonates most with you?',opts:['"The future is already here, unequally distributed"','"Trust nothing, verify everything"','"What you cannot see, you cannot stop"','"Knowledge shared is power multiplied"'],scores:['Singularity Nexus','Protocol Zero','Shadow Syntax','Singularity Nexus']},
  {q:'When learning something new, you:',opts:['Study the theory and underlying models first','Look for rules and systematic frameworks','Observe others without revealing your intent','Experiment and iterate freely'],scores:['Singularity Nexus','Protocol Zero','Shadow Syntax','Shadow Syntax']},
];
async function rFraction(){
  const q=t();const c=document.getElementById('page-fraction');c.innerHTML='';
  if(!S.loggedIn){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'🔱'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700',marginBottom:'8px'}},T('loginRequired')),btn('🔐 '+T('login'),openAuthM)));return;}
  const u=await DB.byId(S.user.id);
  const hasFraction=!!(u.fraction&&FRACTION_DATA[u.fraction]);
  const fracTab=S.fracPageTab||'info';

  // ── HEADER ──
  const hdr=el('div',{style:{marginBottom:'16px'}});
  hdr.appendChild(el('h1',{style:{color:q.ac,fontSize:'22px',fontWeight:'800',marginBottom:'3px'}},'🔱 Fraction'));
  hdr.appendChild(el('p',{style:{color:q.tm,fontSize:'12px',marginBottom:'12px'}},'Komunitas fraksi StarLive — Chat, Challenge, dan kolaborasi antar fraksi.'));
  c.appendChild(hdr);

  // ── TABS ──
  const TABS=[
    {id:'info',lb:'🔱 Info Fraksi'},
    {id:'chat',lb:'💬 Global Chat',locked:!hasFraction},
    {id:'challenge',lb:'🏆 Challenge'},
  ];
  const tabRow=el('div',{style:{display:'flex',gap:'7px',marginBottom:'20px',flexWrap:'wrap'}});
  TABS.forEach(tab=>{
    const active=fracTab===tab.id;
    const b=el('button',{
      style:{padding:'7px 14px',borderRadius:'9px',border:`1px solid ${active?q.ac:tab.locked?q.sb+'88':q.sb}`,
        background:active?q.as:'rgba(255,255,255,.03)',color:active?q.ac:tab.locked?q.tm:q.tx,
        cursor:tab.locked?'not-allowed':'pointer',fontSize:'12px',fontWeight:active?'700':'400',
        transition:'all .18s',opacity:tab.locked?'0.55':'1'},
      title:tab.locked?'Bergabunglah ke Fraksi untuk mengakses':'',
      onclick:()=>{if(!tab.locked){S.fracPageTab=tab.id;rFraction();}else notif('🔒 Bergabunglah ke Fraksi terlebih dahulu.','error');}
    },(tab.locked?'🔒 ':'')+tab.lb);
    tabRow.appendChild(b);
  });
  c.appendChild(tabRow);

  // ═══════════════════════════════════
  // TAB: INFO
  // ═══════════════════════════════════
  if(fracTab==='info'){
    if(hasFraction){
      const fi=FRACTION_DATA[u.fraction];
      const fcard=gc({padding:'22px',marginBottom:'18px',border:`2px solid ${fi.color}`,borderRadius:'16px',background:`${fi.color}10`});
      fcard.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'14px',marginBottom:'12px'}},
        el('div',{style:{fontSize:'46px'}},fi.em),
        el('div',{},el('div',{style:{color:fi.color,fontSize:'20px',fontWeight:'900'}},u.fraction),el('div',{style:{color:q.tm,fontSize:'11px',marginTop:'3px'}},fi.desc))));
      fcard.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'7px'}},'✨ PERKS'));
      fi.perks.forEach(p=>fcard.appendChild(el('div',{style:{color:q.tx,fontSize:'11px',padding:'4px 0',borderBottom:`1px solid ${fi.color}22`,display:'flex',alignItems:'center',gap:'6px'}},el('span',{style:{color:fi.color}},'►'),p)));
      fcard.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',margin:'12px 0 7px'}},'📋 QUESTS'));
      fi.quests.forEach(qs=>fcard.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',padding:'4px 0',display:'flex',alignItems:'center',gap:'6px'}},el('span',{style:{color:fi.color}},'○'),qs)));
      fcard.appendChild(el('div',{style:{marginTop:'14px',display:'flex',gap:'8px'}},
        btn('💬 Chat Global',()=>{S.fracPageTab='chat';rFraction();},false,{fontSize:'11px'}),
        btn('🏆 Challenge',()=>{S.fracPageTab='challenge';rFraction();},true,{fontSize:'11px'})));
      c.appendChild(fcard);
      c.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',textAlign:'center',marginBottom:'14px'}},'Fraksi hanya bisa diubah oleh Admin.'));
    } else {
      const examDone=u.fracExamDone;
      if(examDone){
        c.appendChild(gc({padding:'22px',textAlign:'center',marginBottom:'16px'},
          el('div',{style:{fontSize:'46px',marginBottom:'8px'}},'⏳'),
          el('div',{style:{color:q.ac,fontSize:'14px',fontWeight:'700',marginBottom:'5px'}},'Exam submitted!'),
          el('div',{style:{color:q.tm,fontSize:'11px'}},'Hasil: '+(u.fracResult?el('span',{style:{color:FRACTION_DATA[u.fracResult]?.color||q.ac,fontWeight:'700'}},FRACTION_DATA[u.fracResult]?.em+' '+u.fracResult).outerHTML:'Pending')),
          el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'7px'}},'Admin akan meninjau dan menetapkan Fraksi segera.')));
      } else {
        const row=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'12px',marginBottom:'18px'}});
        Object.entries(FRACTION_DATA).forEach(([name,fi])=>{
          const card=gc({padding:'16px',border:`1px solid ${fi.color}44`,borderRadius:'12px',textAlign:'center'});
          card.appendChild(el('div',{style:{fontSize:'32px',marginBottom:'6px'}},fi.em));
          card.appendChild(el('div',{style:{color:fi.color,fontSize:'14px',fontWeight:'700',marginBottom:'5px'}},name));
          card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',lineHeight:'1.6'}},fi.desc));
          row.appendChild(card);
        });
        c.appendChild(row);
        const startCard=gc({padding:'22px',textAlign:'center',marginBottom:'16px'});
        startCard.appendChild(el('div',{style:{fontSize:'40px',marginBottom:'8px'}},'📝'));
        startCard.appendChild(el('div',{style:{color:q.ac,fontSize:'15px',fontWeight:'800',marginBottom:'5px'}},'Take the Fraction Exam'));
        startCard.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',marginBottom:'14px'}},'5 questions · Hasilnya dikirim ke Admin untuk disetujui.'));
        startCard.appendChild(btn('🔱 Start Exam',()=>openFractionExam(),false,{fontSize:'13px',padding:'10px 24px'}));
        c.appendChild(startCard);
      }
    }
    // All fractions overview
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'10px'}},'🔱 SEMUA FRAKSI'));
    const allRow=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'10px'}});
    const _allUsersForFrac=await DB.getUsers();
    for(const [name,fi] of Object.entries(FRACTION_DATA)){
      const count=_allUsersForFrac.filter(x=>x.fraction===name).length;
      const card=gc({padding:'14px',border:`1px solid ${fi.color}33`});
      card.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'8px',marginBottom:'7px'}},el('div',{style:{fontSize:'24px'}},fi.em),el('div',{style:{color:fi.color,fontSize:'13px',fontWeight:'700'}},name)));
      card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',lineHeight:'1.5',marginBottom:'6px'}},fi.desc));
      card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700'}},count+' member'+(count!==1?'s':'')));
      allRow.appendChild(card);
    }
    c.appendChild(allRow);
    return;
  }

  // ═══════════════════════════════════
  // TAB: GLOBAL CHAT (Discord-style)
  // ═══════════════════════════════════
  if(fracTab==='chat'&&hasFraction){
    const fi=FRACTION_DATA[u.fraction];
    // Sidebar with fraction channels + direct area
    const chatLayout=el('div',{style:{display:'flex',gap:'0',height:'72vh',minHeight:'420px',borderRadius:'14px',overflow:'hidden',border:`1px solid ${q.sb}`}});

    // ── Left sidebar: channels ──
    const chanSB=el('div',{style:{width:'180px',flexShrink:'0',background:'rgba(0,0,0,.22)',borderRight:`1px solid ${q.sb}`,display:'flex',flexDirection:'column',overflowY:'auto'}});
    chanSB.appendChild(el('div',{style:{padding:'12px 12px 8px',color:q.tm,fontSize:'9px',fontWeight:'800',letterSpacing:'.1em'}},'CHANNELS'));
    const channels=[
      {id:'global',lb:'# global',desc:'Semua fraksi — ruang umum'},
      {id:'fraction',lb:'# '+u.fraction.toLowerCase().replace(/ /g,'-'),desc:'Chat khusus fraksimu'},
      {id:'announcements',lb:'📢 pengumuman',desc:'Info dari Admin'},
    ];
    const activeChan=S._fracChan||'global';
    channels.forEach(ch=>{
      const active=activeChan===ch.id;
      const cb=el('div',{style:{padding:'7px 12px',cursor:'pointer',borderRadius:'6px',margin:'1px 5px',background:active?q.as:'transparent',color:active?q.ac:q.tm,fontSize:'12px',fontWeight:active?'700':'400',transition:'all .15s'},
        title:ch.desc,
        onclick:()=>{S._fracChan=ch.id;rFraction();}},ch.lb);
      cb.onmouseenter=()=>{if(!active)cb.style.background='rgba(255,255,255,.05)';cb.style.color=q.tx;};
      cb.onmouseleave=()=>{if(!active){cb.style.background='transparent';cb.style.color=q.tm;}};
      chanSB.appendChild(cb);
    });
    chanSB.appendChild(el('div',{style:{padding:'12px 12px 6px',color:q.tm,fontSize:'9px',fontWeight:'800',letterSpacing:'.1em',marginTop:'10px'}},'FRAKSI LAIN'));
    for(const [name,ffi] of Object.entries(FRACTION_DATA)){
      const isMe=name===u.fraction;
      const fb=el('div',{style:{padding:'6px 12px',color:isMe?ffi.color:q.tm,fontSize:'11px',display:'flex',alignItems:'center',gap:'5px'}},el('span',{},ffi.em),el('span',{},name));
      chanSB.appendChild(fb);
    }
    chatLayout.appendChild(chanSB);

    // ── Main chat area ──
    const chatMain=el('div',{style:{flex:'1',display:'flex',flexDirection:'column',minWidth:'0'}});
    // Channel header
    const chanInfo=channels.find(x=>x.id===activeChan)||channels[0];
    const chatHdr=el('div',{style:{padding:'11px 16px',borderBottom:`1px solid ${q.sb}`,display:'flex',alignItems:'center',gap:'10px',flexShrink:'0',background:'rgba(0,0,0,.1)'}});
    chatHdr.appendChild(el('div',{style:{fontSize:'18px'}},activeChan==='global'?'🌐':activeChan==='fraction'?fi.em:'📢'));
    chatHdr.appendChild(el('div',{},el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700'}},chanInfo.lb),el('div',{style:{color:q.tm,fontSize:'9px'}},chanInfo.desc)));
    chatMain.appendChild(chatHdr);

    // Messages
    const msgArea=el('div',{style:{flex:'1',overflowY:'auto',padding:'14px',display:'flex',flexDirection:'column',gap:'9px'}});
    let allMsgs=[];
    if(activeChan==='global'||activeChan==='fraction'){
      if(activeChan==='fraction'){
        const fracRoom='fraction_'+(u.fraction||'').replace(/ /g,'_').toLowerCase();
        allMsgs=await DB.getGlobalFracChat(200, fracRoom);
      } else {
        allMsgs=await DB.getGlobalFracChat(200, 'global_fraction');
      }
    } else if(activeChan==='announcements'){
      // Use static announcements
      allMsgs=[{username:'⭐ Admin',fraction:'System',text:'Selamat datang di channel pengumuman StarLive Group! Update terbaru akan diposting di sini.',time:new Date(Date.now()-3600000).toISOString(),isSystem:true},{username:'⭐ Admin',fraction:'System',text:'Fraksi baru telah dibuka — ikuti exam dan bergabunglah sekarang!',time:new Date(Date.now()-7200000).toISOString(),isSystem:true}];
    }
    if(!allMsgs.length){
      msgArea.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',textAlign:'center',padding:'40px',lineHeight:'1.7'}},
        el('div',{style:{fontSize:'32px',marginBottom:'8px'}},'💬'),
        el('div',{},'Belum ada pesan di channel ini.'),
        el('div',{style:{fontSize:'10px',marginTop:'5px'}},'Jadilah yang pertama memulai percakapan!')));
    }
    for(const msg of allMsgs){
      const isMe=msg.userEmail===u.id;
      const senderU=msg.isSystem?null:await DB.byId(msg.userEmail);
      const senderFrac=senderU?.fraction&&FRACTION_DATA[senderU.fraction];
      const row=el('div',{style:{display:'flex',gap:'9px',alignItems:'flex-start'}});
      // Avatar
      const av=msg.isSystem?
        el('div',{style:{width:'32px',height:'32px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'15px',background:q.as,border:`2px solid ${q.ac}`,flexShrink:'0'}},'⭐'):
        avEl(senderU||{username:msg.username},32);
      row.appendChild(av);
      const bubble=el('div',{style:{flex:'1',minWidth:'0'}});
      const nameRow=el('div',{style:{display:'flex',alignItems:'center',gap:'5px',marginBottom:'3px',flexWrap:'wrap'}});
      nameRow.appendChild(el('span',{style:{color:isMe?q.ac:msg.isSystem?'#FAB715':q.tx,fontSize:'12px',fontWeight:'700'}},msg.username));
      if(senderFrac)nameRow.appendChild(el('span',{style:{background:`${senderFrac.color}18`,color:senderFrac.color,borderRadius:'10px',padding:'1px 7px',fontSize:'9px',fontWeight:'700'}},senderFrac.em+' '+senderU.fraction));
      else if(msg.fraction)nameRow.appendChild(el('span',{style:{background:q.as,color:q.tm,borderRadius:'10px',padding:'1px 7px',fontSize:'9px'}},msg.fraction));
      nameRow.appendChild(el('span',{style:{color:q.tm,fontSize:'9px'}},ago(msg.time)));
      bubble.appendChild(nameRow);
      const btext=el('div',{style:{color:q.tx,fontSize:'12px',lineHeight:'1.6',wordBreak:'break-word',background:isMe?`${q.ac}12`:msg.isSystem?'rgba(250,183,21,.06)':'rgba(255,255,255,.03)',borderRadius:'8px',padding:'7px 11px',border:`1px solid ${isMe?q.ac+'33':q.sb}`}},msg.text);
      bubble.appendChild(btext);
      row.appendChild(bubble);
      msgArea.appendChild(row);
    }
    chatMain.appendChild(msgArea);

    // Input (disabled for announcements)
    if(activeChan!=='announcements'){
      const inputRow=el('div',{style:{display:'flex',gap:'8px',padding:'10px 14px',borderTop:`1px solid ${q.sb}`,flexShrink:'0',alignItems:'flex-end',background:'rgba(0,0,0,.08)'}});
      const inp=el('textarea',{class:'inf',rows:'2',placeholder:'Tulis pesan... (Enter untuk kirim, Shift+Enter baris baru)',style:{background:q.ib,borderColor:q.sb,color:q.tx,flex:'1',resize:'none',marginBottom:'0',fontSize:'12px',lineHeight:'1.5'}});
      inp.onkeydown=async e2=>{
        if(e2.key==='Enter'&&!e2.shiftKey){e2.preventDefault();
          const txt=inp.value.trim();if(!txt)return;
          await DB.addFracChatMsg({userEmail:u.id,username:u.username,fraction:u.fraction,channel:activeChan,text:SEC.strip(txt).substring(0,500),time:new Date().toISOString()});
          inp.value='';rFraction();
        }
      };
      inputRow.appendChild(inp);
      inputRow.appendChild(btn('Kirim →',async ()=>{
        const txt=inp.value.trim();if(!txt)return;
        await DB.addFracChatMsg({userEmail:u.id,username:u.username,fraction:u.fraction,channel:activeChan,text:SEC.strip(txt).substring(0,500),time:new Date().toISOString()});
        inp.value='';rFraction();
      },false,{fontSize:'11px',padding:'7px 14px',flexShrink:'0'}));
      chatMain.appendChild(inputRow);
    } else {
      chatMain.appendChild(el('div',{style:{padding:'10px 16px',borderTop:`1px solid ${q.sb}`,color:q.tm,fontSize:'11px',textAlign:'center',background:'rgba(0,0,0,.08)'}},'📢 Channel pengumuman hanya dapat ditulis oleh Admin.'));
    }
    chatLayout.appendChild(chatMain);
    c.appendChild(chatLayout);
    setTimeout(()=>{msgArea.scrollTop=msgArea.scrollHeight;},100);
    return;
  }

  // ═══════════════════════════════════
  // TAB: CHALLENGE (embedded)
  // ═══════════════════════════════════
  if(fracTab==='challenge'){
    c.appendChild(el('p',{style:{color:q.tm,fontSize:'12px',marginBottom:'16px'}},'Selesaikan quiz untuk mendapatkan badge. Pengguna bisa berkontribusi challenge (perlu persetujuan Admin).'));
    const tabs2=el('div',{style:{display:'flex',gap:'6px',marginBottom:'16px',flexWrap:'wrap'}});
    const challTabs=[['browse','🔍 Browse'],['mine','📋 Percobaan Saya'],['create','➕ Kontribusi']];
    challTabs.forEach(([id,lb])=>tabs2.appendChild(btn(lb,()=>{S.challTab=id;rFraction();},S.challTab!==id,{fontSize:'11px'})));
    c.appendChild(tabs2);

    if(S.challTab==='browse'){
      const approved=(await DB.getChallenges()).filter(x=>x.status==='approved');
      if(!approved.length){c.appendChild(el('div',{style:{textAlign:'center',padding:'40px',color:q.tm,lineHeight:'1.8'}},el('div',{style:{fontSize:'32px'}},'🏆'),el('div',{},'Belum ada challenge. Jadilah yang pertama berkontribusi!')));return;}
      const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'12px'}});
      for(const ch of approved){
        const u2=await DB.byId(S.user.id);const myAttempt=(ch.attempts||[]).find(a=>a.user_id===u2.id);
        const TC={Knowledge:'#4fc3f7',Creative:'#f06292',Technical:'#81c784',General:'#ffb74d'};const tc=TC[ch.type]||q.ac;
        const card=gc({padding:'18px',border:`1px solid ${tc}33`,cursor:'pointer',transition:'border-color .2s'});
        card.onmouseenter=()=>card.style.borderColor=tc;card.onmouseleave=()=>card.style.borderColor=`${tc}33`;
        card.appendChild(el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'8px'}},
          el('span',{style:{background:`${tc}22`,color:tc,borderRadius:'20px',padding:'2px 9px',fontSize:'9px',fontWeight:'700'}},ch.type),
          myAttempt?el('span',{style:{color:myAttempt.passed?'#64dc64':'#ffb74d',fontSize:'9px',fontWeight:'700'}},myAttempt.passed?'✅ Lulus':'📊 '+(myAttempt.score||0)+'%'):''));
        card.appendChild(el('div',{style:{color:q.tx,fontSize:'14px',fontWeight:'700',marginBottom:'4px'}},ch.title));
        card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'9px'}},ch.questions.length+' soal · oleh '+ch.createdByName));
        if(ch.reward)card.appendChild(el('div',{style:{color:'#ffb74d',fontSize:'10px',fontWeight:'700',marginBottom:'9px'}},'🎁 Hadiah: '+ch.reward));
        card.appendChild(el('div',{style:{display:'flex',gap:'6px'}},btn(myAttempt?'🔁 Coba Lagi':'▶️ Mulai',()=>openQuiz(ch),false,{fontSize:'11px',padding:'5px 12px'})));
        grid.appendChild(card);
      }
      c.appendChild(grid);
    } else if(S.challTab==='mine'){
      const allCh=await DB.getChallenges();const me=S.user.id;
      const myAttempts=allCh.flatMap(ch=>(ch.attempts||[]).filter(a=>a.user_id===me).map(a=>({...a,chTitle:ch.title,chId:ch.id})));
      myAttempts.sort((a,b)=>new Date(b.date)-new Date(a.date));
      if(!myAttempts.length){c.appendChild(el('div',{style:{textAlign:'center',padding:'40px',color:q.tm,lineHeight:'1.8'}},el('div',{style:{fontSize:'32px'}},'📋'),el('div',{},'Belum ada percobaan. Mulai challenge pertamamu!')));return;}
      const list=el('div',{style:{display:'flex',flexDirection:'column',gap:'8px'}});
      myAttempts.forEach(a=>{list.appendChild(gc({padding:'14px'},el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},el('div',{},el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700'}},a.chTitle),el('div',{style:{color:q.tm,fontSize:'10px'}},fdate(a.date)+' · Skor: '+a.score+'%'+(a.passed?' · ✅ Lulus':' · ❌ Belum lulus'))),el('span',{style:{color:a.passed?'#64dc64':'#ffb74d',fontWeight:'700',fontSize:'12px'}},a.passed?'LULUS':'GAGAL'))));});
      c.appendChild(list);
    } else if(S.challTab==='create'){
      const mySubmissions=(await DB.getChallenges()).filter(x=>x.createdBy===S.user.id);
      if(mySubmissions.length){
        c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'5px'}},'📋 Submisi Saya ('+mySubmissions.length+')'));
        mySubmissions.forEach(ch=>{const SC2={pending:'#ffb74d',approved:'#64dc64',rejected:'#f44'};const sc=SC2[ch.status]||'#aaa';c.appendChild(gc({padding:'11px',marginBottom:'6px',border:`1px solid ${sc}33`},el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'700'}},ch.title),el('span',{style:{background:`${sc}18`,color:sc,borderRadius:'20px',padding:'2px 8px',fontSize:'9px',fontWeight:'700'}},ch.status.toUpperCase()))));});
      }
      c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginTop:'14px',marginBottom:'10px'}},'➕ BUAT CHALLENGE BARU'));
      const form={title:'',type:'Knowledge',reward:'',questions:[]};
      const formCard=gc({padding:'20px'});
      const is={background:q.ib,borderColor:q.sb,color:q.tx};
      const lb2=tx=>el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'3px'}},tx);
      formCard.appendChild(lb2('JUDUL'));const ti2=el('input',{class:'inf',placeholder:'Judul challenge',style:is});ti2.oninput=e=>form.title=e.target.value;formCard.appendChild(ti2);
      formCard.appendChild(lb2('TIPE'));const sel2=el('select',{class:'inf',style:{...is,cursor:'pointer'}});['Knowledge','Creative','Technical','General'].forEach(tp=>{sel2.appendChild(el('option',{value:tp},tp));});sel2.onchange=e=>form.type=e.target.value;formCard.appendChild(sel2);
      formCard.appendChild(lb2('HADIAH (badge atau deskripsi voucher)'));const ri=el('input',{class:'inf',placeholder:'contoh: 🏅 Challenger Badge',style:is});ri.oninput=e=>form.reward=e.target.value;formCard.appendChild(ri);
      formCard.appendChild(lb2('PERTANYAAN'));
      const qlist=el('div',{style:{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'10px'}});
      function addQuestionRow(){
        const qn=qlist.children.length+1;
        const qcard=el('div',{style:{padding:'12px',border:`1px solid ${q.sb}`,borderRadius:'9px',background:'rgba(255,255,255,.03)'}});
        qcard.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'6px'}},'Q'+qn));
        const qinp=el('input',{class:'inf',placeholder:'Teks pertanyaan',style:{...is,marginBottom:'5px'}});qcard.appendChild(qinp);
        const optsDiv=el('div',{style:{display:'flex',flexDirection:'column',gap:'4px'}});
        for(let i=0;i<4;i++){const oi2=el('input',{class:'inf',placeholder:'Pilihan '+(i+1),style:{...is,fontSize:'11px',marginBottom:'0'}});optsDiv.appendChild(oi2);}
        qcard.appendChild(optsDiv);
        const answL=el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'6px',marginBottom:'2px'}},'Jawaban benar (1-4):');qcard.appendChild(answL);
        const ainp=el('input',{class:'inf',type:'number',min:'1',max:'4',placeholder:'1',style:{...is,width:'60px',marginBottom:'0',display:'inline-block'}});qcard.appendChild(ainp);
        qcard.appendChild(btn('✕ Hapus',()=>{qcard.remove();},true,{fontSize:'9px',padding:'2px 7px',marginLeft:'7px',borderColor:'#f44',color:'#f88'}));
        qlist.appendChild(qcard);
      }
      addQuestionRow();formCard.appendChild(qlist);
      formCard.appendChild(btn('➕ Tambah Pertanyaan',()=>addQuestionRow(),true,{fontSize:'11px',marginBottom:'10px'}));
      formCard.appendChild(btn('📩 Submit untuk Disetujui',async ()=>{
        const questions=[];let valid=true;
        Array.from(qlist.children).forEach(qcard=>{
          const inputs=qcard.querySelectorAll('input');const qtext=inputs[0].value.trim();
          const opts2=[inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value].map(x=>x.trim());
          const correct=parseInt(inputs[5]?.value||'1')-1;
          if(!qtext||opts2.some(o=>!o)){valid=false;return;}
          questions.push({q:SEC.strip(qtext),opts:opts2.map(o=>SEC.strip(o)),correct});
        });
        if(!form.title){notif('Judul wajib diisi!','error');return;}
        if(!valid||!questions.length){notif('Isi semua field pertanyaan (teks + 4 pilihan)','error');return;}
        await DB.addChallenge({title:SEC.strip(form.title),type:form.type,reward:SEC.strip(form.reward),questions,createdBy:S.user.id,createdByName:S.user.username});
        notif('✅ Submitted! Menunggu persetujuan Admin.','success');S.challTab='mine';rFraction();
      },false,{fontSize:'12px',padding:'9px 18px'}));
      c.appendChild(formCard);
    }
    return;
  }
}

function openFractionExam(){
  const q=t();const m=document.getElementById('m-fraction-exam');m.style.display='flex';m.innerHTML='';
  let step=0;const answers=[];
  const render=()=>{
    m.innerHTML='';
    const card=gc({padding:'28px',width:'500px',maxWidth:'97vw',borderRadius:'18px',position:'relative'});
    if(step<EXAM_QUESTIONS.length){
      const qobj=EXAM_QUESTIONS[step];
      card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'5px'}},`QUESTION ${step+1} OF ${EXAM_QUESTIONS.length}`));
      card.appendChild(el('div',{style:{width:'100%',height:'3px',background:`${q.sb}`,borderRadius:'99px',marginBottom:'14px',overflow:'hidden'}},el('div',{style:{width:((step/EXAM_QUESTIONS.length)*100)+'%',height:'100%',background:q.ac,borderRadius:'99px'}})));
      card.appendChild(el('div',{style:{color:q.tx,fontSize:'14px',fontWeight:'700',lineHeight:'1.6',marginBottom:'16px'}},qobj.q));
      const opts=el('div',{style:{display:'flex',flexDirection:'column',gap:'8px'}});
      qobj.opts.forEach((opt,i)=>{
        const ob=el('div',{style:{padding:'11px 14px',borderRadius:'9px',border:`1px solid ${q.sb}`,color:q.tx,fontSize:'12px',cursor:'pointer',transition:'all .18s'},onclick:()=>{answers.push(qobj.scores[i]);step++;render();}});
        ob.onmouseenter=()=>{ob.style.borderColor=q.ac;ob.style.background=q.as;};ob.onmouseleave=()=>{ob.style.borderColor=q.sb;ob.style.background='transparent';};
        ob.textContent=opt;opts.appendChild(ob);
      });
      card.appendChild(opts);
    } else {
      const tally={};answers.forEach(a=>tally[a]=(tally[a]||0)+1);
      const result=Object.entries(tally).sort((a,b)=>b[1]-a[1])[0][0];
      const fi=FRACTION_DATA[result];
      card.appendChild(el('div',{style:{textAlign:'center'}},
        el('div',{style:{fontSize:'54px',marginBottom:'8px'}},fi.em),
        el('div',{style:{color:fi.color,fontSize:'18px',fontWeight:'900',marginBottom:'6px'}},result),
        el('div',{style:{color:q.tm,fontSize:'12px',marginBottom:'14px'}},'Kepribadianmu cocok dengan '+result+'! '+fi.desc),
        el('div',{style:{background:`${fi.color}18`,border:`1px solid ${fi.color}`,borderRadius:'9px',padding:'11px',color:fi.color,fontSize:'11px',marginBottom:'16px'}},'Hasil ini akan dikirim ke Admin untuk ditinjau. Fraksimu akan ditetapkan setelah disetujui.'),
        btn('📩 Submit Hasil',async ()=>{await DB.updUser(S.user.id,{fracExamDone:true,fracResult:result});m.style.display='none';rFraction();notif('✅ Exam submitted! Menunggu persetujuan Admin.','success');},false,{fontSize:'13px',padding:'9px 20px'}),
        el('button',{style:{display:'block',margin:'8px auto 0',background:'none',border:'none',color:q.tm,fontSize:'11px',cursor:'pointer'},onclick:()=>{m.style.display='none';}},'Nanti saja')
      ));
    }
    m.appendChild(card);
  };render();
}

// ── CHALLENGE PAGE (redirects to Fraction tab) ──────────────
async function rChallenge(){
  // Challenge is now embedded in the Fraction page
  S.fracPageTab='challenge';
  goTo('fraction');
}

async function openQuiz(ch){
  const q=t();const m=document.getElementById('m-quiz');m.style.display='flex';m.innerHTML='';
  let step2=0;let score2=0;const total=ch.questions.length;
  const render=async ()=>{
    m.innerHTML='';
    const card=gc({padding:'26px',width:'480px',maxWidth:'97vw',borderRadius:'18px',position:'relative'});
    card.appendChild(el('button',{style:{position:'absolute',top:'10px',right:'12px',background:'none',border:'none',color:q.tm,fontSize:'18px',cursor:'pointer'},onclick:()=>closeM('m-quiz')},'✕'));
    if(step2<total){
      const qobj=ch.questions[step2];
      card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'5px'}},'🏆 '+ch.title+' — Q'+(step2+1)+'/'+total));
      card.appendChild(el('div',{style:{width:'100%',height:'3px',background:q.sb,borderRadius:'99px',marginBottom:'14px',overflow:'hidden'}},el('div',{style:{width:((step2/total)*100)+'%',height:'100%',background:q.ac,borderRadius:'99px'}})));
      card.appendChild(el('div',{style:{color:q.tx,fontSize:'14px',fontWeight:'700',lineHeight:'1.6',marginBottom:'14px'}},qobj.q));
      const opts=el('div',{style:{display:'flex',flexDirection:'column',gap:'7px'}});
      qobj.opts.forEach((opt,i)=>{
        const ob=el('div',{style:{padding:'10px 14px',borderRadius:'8px',border:`1px solid ${q.sb}`,color:q.tx,fontSize:'12px',cursor:'pointer',transition:'all .15s'},onclick:()=>{if(i===qobj.correct)score2++;step2++;render();}});
        ob.onmouseenter=()=>{ob.style.borderColor=q.ac;ob.style.background=q.as;};ob.onmouseleave=()=>{ob.style.borderColor=q.sb;ob.style.background='transparent';};
        ob.textContent=opt;opts.appendChild(ob);
      });card.appendChild(opts);
    } else {
      const pct=Math.round(score2/total*100);const passed=pct>=60;
      card.appendChild(el('div',{style:{textAlign:'center'}},el('div',{style:{fontSize:'50px',marginBottom:'8px'}},passed?'🏆':'📊'),el('div',{style:{color:passed?'#64dc64':'#ffb74d',fontSize:'22px',fontWeight:'900',marginBottom:'4px'}},pct+'%'),el('div',{style:{color:q.tx,fontSize:'14px',fontWeight:'700',marginBottom:'5px'}},passed?'Challenge Passed!':'Keep Practicing!'),el('div',{style:{color:q.tm,fontSize:'11px',marginBottom:'12px'}},'Score: '+score2+'/'+total+(passed&&ch.reward?'\n🎁 Reward: '+ch.reward:''))));
      await DB.addAttempt(ch.id,{score:pct,passed});
      if(passed){
        const u2=await DB.byId(S.user.id);const newB=[...new Set([...(u2.badges||[]),'challenge_taker'])];
        await DB.updUser(S.user.id,{badges:newB});S.user={...S.user,badges:newB};
        notif('🏆 Challenge passed! Badge earned.','success');
      }
      card.appendChild(el('div',{style:{display:'flex',gap:'8px',justifyContent:'center'}},btn('🔁 Retry',()=>{step2=0;score2=0;render();},true,{fontSize:'11px'}),btn('✅ Done',()=>closeM('m-quiz'),false,{fontSize:'11px'})));
    }
    m.appendChild(card);
  };render();
}

// ── CLOCK ─────────────────────────────────────────────────────
function updateClock(){
  const now=new Date();const q=t();
  const ts=`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  const ds=`${DA[now.getDay()]}, ${now.getDate()} ${MA[now.getMonth()]} ${now.getFullYear()}`;
  const ct=document.getElementById('cwt');if(ct){ct.textContent=ts;ct.style.color=t().ac;}
  const cd=document.getElementById('cwd');if(cd){cd.textContent=ds;cd.style.color=t().tm;}
}
setInterval(updateClock,1000);

// ── SIDEBAR TOGGLE ────────────────────────────────────────────
document.getElementById('stgl').onclick=()=>{
  S.sopen=!S.sopen;
  const sb=document.getElementById('sidebar'),mc=document.getElementById('mc'),sf=document.getElementById('sfab');
  if(S.sopen){sb.classList.remove('col');mc.classList.remove('col');document.getElementById('stgl').textContent='◀';sf.style.left='234px';}
  else{sb.classList.add('col');mc.classList.add('col');document.getElementById('stgl').textContent='▶';sf.style.left='74px';}
};

// ── INIT & LOADING ────────────────────────────────────────────
let prog=0;
const ldi=setInterval(()=>{
  prog+=3;
  const pct=Math.min(prog,80);
  document.getElementById('lbf').style.width=pct+'%';
  document.getElementById('lpct').textContent='Connecting... '+pct+'%';
  if(prog>=80){clearInterval(ldi);}
},25);
(async()=>{
  if(!SEC.init())return; // security check: no iframe embedding
  try{
    await checkSession();
  }catch(e){console.warn('Session check failed:',e);}
  document.getElementById('lbf').style.width='100%';
  document.getElementById('lpct').textContent='Ready! ✨';
  setTimeout(()=>{
    document.getElementById('ls').style.display='none';
    document.getElementById('app').style.display='flex';
    applyTheme();rHome();updateClock();
    updParticles();startChatBadgePoll();
    renderNav();renderAuth();
    notif('✨ '+T('welcome'));
  },400);
})();
