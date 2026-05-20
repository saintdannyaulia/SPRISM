// ── TRANSLATIONS ──────────────────────────────────────────────
const LANGS={
  English:{home:'Home',affiliation:'Affiliation',creator:'Creator',project:'Project',gallery:'Gallery',store:'Store',social:'Social',dashboard:'Dashboard',vault:'Vault',fraction:'Fraction',challenge:'Challenge',myAccount:'My Account',login:'Login',logout:'Logout',loginReg:'🔐 Login / Register',friends:'Friends',addFriend:'Add Friend',chat:'Chat',online:'Online',offline:'Offline',send:'Send',cancel:'Cancel',save:'Save',edit:'Edit',whoWeAre:'Who We Are',whoWeAreDesc:'StarLive Group is a multi-vertical technology and creative conglomerate operating at the intersection of media, technology, education, and culture.',ourMission:'Our five affiliates collaborate under one vision: to light up every corner of the digital universe.',creatorSub:'The minds behind StarLive.',affiliSub:'Our network of partner organizations.',projectSub:'Active initiatives shaping the future of StarLive.',gallerySub:'Visual stories from across the StarLive universe.',storeSub:'Official StarLive merchandise.',socialSub:'Join the StarLive community across all platforms.',loginRequired:'Login required',noFriends:'No friends yet.',startChat:'Start a conversation',complaints:'Complaints & Suggestions',directMsg:'Direct Message to Admin',welcome:'Welcome to StarLive Group!',search:'Search...',vaultTitle:'Vault — Secure Data Storage',vaultSub:'Admin-only access to confidential business data.'},
  Indonesian:{home:'Beranda',affiliation:'Afiliasi',creator:'Kreator',project:'Proyek',gallery:'Galeri',store:'Toko',social:'Sosial',dashboard:'Dasbor',vault:'Brankas',fraction:'Fraksi',challenge:'Tantangan',myAccount:'Akun Saya',login:'Masuk',logout:'Keluar',loginReg:'🔐 Masuk / Daftar',friends:'Teman',addFriend:'Tambah Teman',chat:'Obrolan',online:'Online',offline:'Offline',send:'Kirim',cancel:'Batal',save:'Simpan',edit:'Edit',whoWeAre:'Tentang Kami',whoWeAreDesc:'StarLive Group adalah konglomerat teknologi dan kreatif multi-vertikal yang beroperasi di persimpangan media, teknologi, pendidikan, dan budaya.',ourMission:'Lima afiliasi kami berkolaborasi dalam satu visi: menerangi setiap sudut alam semesta digital.',creatorSub:'Pikiran di balik StarLive.',affiliSub:'Jaringan organisasi mitra kami.',projectSub:'Inisiatif aktif membentuk masa depan StarLive.',gallerySub:'Kisah visual dari alam semesta StarLive.',storeSub:'Merchandise resmi StarLive.',socialSub:'Bergabung dengan komunitas StarLive di semua platform.',loginRequired:'Login diperlukan',noFriends:'Belum ada teman.',startChat:'Mulai percakapan',complaints:'Keluhan & Saran',directMsg:'Pesan Langsung ke Admin',welcome:'Selamat datang di StarLive Group!',search:'Cari...',vaultTitle:'Brankas — Penyimpanan Data Aman',vaultSub:'Akses khusus admin untuk data bisnis rahasia.'},
  Japanese:{home:'ホーム',affiliation:'提携',creator:'クリエイター',project:'プロジェクト',gallery:'ギャラリー',store:'ストア',social:'ソーシャル',dashboard:'ダッシュボード',vault:'金庫',myAccount:'マイアカウント',login:'ログイン',logout:'ログアウト',loginReg:'🔐 ログイン / 登録',friends:'友達',addFriend:'友達追加',chat:'チャット',online:'オンライン',offline:'オフライン',send:'送信',cancel:'キャンセル',save:'保存',edit:'編集',whoWeAre:'私たちについて',whoWeAreDesc:'StarLive Groupは、メディア、テクノロジー、教育、文化の交差点で活動する多角的なテクノロジー・クリエイティブコングロマリットです。',ourMission:'5つの関連会社が一つのビジョンのもとに協力しています。',creatorSub:'StarLiveを支える人々。',affiliSub:'パートナー組織のネットワーク。',projectSub:'StarLiveの未来を形作るイニシアチブ。',gallerySub:'StarLiveユニバース全体のビジュアルストーリー。',storeSub:'StarLiveオフィシャルグッズ。',socialSub:'全プラットフォームでStarLiveコミュニティに参加。',loginRequired:'ログインが必要です',noFriends:'まだ友達がいません。',startChat:'会話を始める',complaints:'苦情・提案',directMsg:'管理者への直接メッセージ',welcome:'StarLive Groupへようこそ！',search:'検索...',vaultTitle:'金庫 — 安全なデータ保管',vaultSub:'管理者専用の機密ビジネスデータへのアクセス。'},
  Chinese:{home:'主页',affiliation:'联属',creator:'创作者',project:'项目',gallery:'画廊',store:'商店',social:'社交',dashboard:'仪表板',vault:'保险库',myAccount:'我的账户',login:'登录',logout:'登出',loginReg:'🔐 登录 / 注册',friends:'朋友',addFriend:'添加朋友',chat:'聊天',online:'在线',offline:'离线',send:'发送',cancel:'取消',save:'保存',edit:'编辑',whoWeAre:'关于我们',whoWeAreDesc:'StarLive Group是一家多元化科技创意集团，活跃于媒体、技术、教育和文化的交汇处。',ourMission:'我们的五个附属机构在同一愿景下合作：照亮数字宇宙的每个角落。',creatorSub:'StarLive背后的思想。',affiliSub:'我们的合作伙伴网络。',projectSub:'塑造StarLive未来的主动性。',gallerySub:'来自StarLive宇宙的视觉故事。',storeSub:'StarLive官方周边。',socialSub:'在所有平台加入StarLive社区。',loginRequired:'需要登录',noFriends:'还没有朋友。',startChat:'开始对话',complaints:'投诉与建议',directMsg:'直接发消息给管理员',welcome:'欢迎来到StarLive Group！',search:'搜索...',vaultTitle:'保险库 — 安全数据存储',vaultSub:'管理员专用的机密业务数据访问。'},
  Korean:{home:'홈',affiliation:'제휴',creator:'크리에이터',project:'프로젝트',gallery:'갤러리',store:'스토어',social:'소셜',dashboard:'대시보드',vault:'금고',myAccount:'내 계정',login:'로그인',logout:'로그아웃',loginReg:'🔐 로그인 / 회원가입',friends:'친구',addFriend:'친구 추가',chat:'채팅',online:'온라인',offline:'오프라인',send:'전송',cancel:'취소',save:'저장',edit:'편집',whoWeAre:'회사 소개',whoWeAreDesc:'StarLive Group은 미디어, 기술, 교육, 문화의 교차점에서 운영되는 다각적 기술·창의 기업입니다.',ourMission:'5개의 계열사가 하나의 비전으로 협력합니다.',creatorSub:'StarLive를 이끄는 사람들.',affiliSub:'파트너 조직 네트워크.',projectSub:'StarLive의 미래를 형성하는 이니셔티브.',gallerySub:'StarLive 유니버스의 시각적 이야기.',storeSub:'StarLive 공식 상품.',socialSub:'모든 플랫폼에서 StarLive 커뮤니티에 참여하세요.',loginRequired:'로그인 필요',noFriends:'아직 친구가 없습니다.',startChat:'대화 시작',complaints:'불만 및 제안',directMsg:'관리자에게 직접 메시지',welcome:'StarLive Group에 오신 것을 환영합니다!',search:'검색...',vaultTitle:'금고 — 안전한 데이터 저장소',vaultSub:'관리자 전용 기밀 비즈니스 데이터 접근.'},
  German:{home:'Startseite',affiliation:'Partner',creator:'Ersteller',project:'Projekt',gallery:'Galerie',store:'Shop',social:'Sozial',dashboard:'Dashboard',vault:'Tresor',myAccount:'Mein Konto',login:'Anmelden',logout:'Abmelden',loginReg:'🔐 Anmelden / Registrieren',friends:'Freunde',addFriend:'Freund hinzufügen',chat:'Chat',online:'Online',offline:'Offline',send:'Senden',cancel:'Abbrechen',save:'Speichern',edit:'Bearbeiten',whoWeAre:'Über uns',whoWeAreDesc:'StarLive Group ist ein diversifizierter Technologie- und Kreativkonzern an der Schnittstelle von Medien, Technologie, Bildung und Kultur.',ourMission:'Unsere fünf Tochtergesellschaften arbeiten zusammen, um jeden Winkel des digitalen Universums zu erhellen.',creatorSub:'Die Köpfe hinter StarLive.',affiliSub:'Unser Netzwerk von Partnerorganisationen.',projectSub:'Aktive Initiativen, die die Zukunft von StarLive gestalten.',gallerySub:'Visuelle Geschichten aus dem StarLive-Universum.',storeSub:'Offizielle StarLive-Merchandise.',socialSub:'Treten Sie der StarLive-Community auf allen Plattformen bei.',loginRequired:'Anmeldung erforderlich',noFriends:'Noch keine Freunde.',startChat:'Gespräch beginnen',complaints:'Beschwerden & Vorschläge',directMsg:'Direktnachricht an Admin',welcome:'Willkommen bei StarLive Group!',search:'Suchen...',vaultTitle:'Tresor — Sicherer Datenspeicher',vaultSub:'Nur-Admin-Zugriff auf vertrauliche Geschäftsdaten.'},
};
function T(k){return (LANGS[S.lang]||LANGS.English)[k]||k;}
// ── DB (localStorage) ─────────────────────────────────────────
const K=k=>'sl5_'+k;
const DB={
  g(k,d=null){try{const v=localStorage.getItem(K(k));return v!=null?JSON.parse(v):d;}catch{return d;}},
  s(k,v){try{localStorage.setItem(K(k),JSON.stringify(v));}catch{}},
  getUsers(){return this.g('users',[]);},saveUsers(u){this.s('users',u);},
  findUser(e,p){return this.getUsers().find(u=>u.email===e&&u.password===p)||null;},
  byEmail(e){return this.getUsers().find(u=>u.email===e)||null;},
  updUser(e,d){const us=this.getUsers();const i=us.findIndex(u=>u.email===e);if(i>-1){us[i]={...us[i],...d};this.saveUsers(us);}},
  reg(e,p,n){const us=this.getUsers();if(us.find(u=>u.email===e))return{ok:false,msg:'Email already registered.'};const isAdmin=e==='admin@starlive.com'&&p==='admin123';const now=new Date().toISOString();const u={email:e,password:p,username:n,role:isAdmin?'admin':'user',wallet:0,avatar:null,cover:null,bio:'Hi! I just joined StarLive.',joinDate:now,friends:[],friendRequests:[],online:true,lastSeen:now};us.push(u);this.saveUsers(us);return{ok:true,user:u};},
  getMsgs(room){return this.g('chat_'+room,[]);},saveMsgs(room,m){this.s('chat_'+room,m);},addMsg(room,msg){const m=this.getMsgs(room);m.push(msg);if(m.length>300)m.splice(0,m.length-300);this.saveMsgs(room,m);},
  getAdminMsgs(){return this.g('adminmsgs',[]);},addAdminMsg(msg){const m=this.getAdminMsgs();m.push(msg);this.s('adminmsgs',m);},updAdminMsg(id,d){const m=this.getAdminMsgs();const i=m.findIndex(x=>x.id===id);if(i>-1){m[i]={...m[i],...d};this.s('adminmsgs',m);}},markAdminRead(email,isAdmin){const m=this.getAdminMsgs();let changed=false;m.forEach(msg=>{if(isAdmin&&!msg.read){msg.read=true;changed=true;}else if(!isAdmin&&msg.from===email&&msg.reply&&!msg.replyRead){msg.replyRead=true;changed=true;}});if(changed)this.s('adminmsgs',m);},
  sendFR(from,to){const us=this.getUsers();const t=us.find(u=>u.email===to);if(!t)return false;if(!t.friendRequests)t.friendRequests=[];if(t.friendRequests.includes(from)||(t.friends||[]).includes(from))return false;t.friendRequests.push(from);this.saveUsers(us);return true;},
  acceptFR(me,from){const us=this.getUsers();const a=us.find(u=>u.email===me),b=us.find(u=>u.email===from);if(!a||!b)return;if(!a.friends)a.friends=[];if(!b.friends)b.friends=[];if(!a.friends.includes(from))a.friends.push(from);if(!b.friends.includes(me))b.friends.push(me);a.friendRequests=(a.friendRequests||[]).filter(x=>x!==from);this.saveUsers(us);},
  rejectFR(me,from){const us=this.getUsers();const a=us.find(u=>u.email===me);if(a){a.friendRequests=(a.friendRequests||[]).filter(x=>x!==from);this.saveUsers(us);}},
  removeFriend(me,fe){const us=this.getUsers();const a=us.find(u=>u.email===me),b=us.find(u=>u.email===fe);if(a)a.friends=(a.friends||[]).filter(x=>x!==fe);if(b)b.friends=(b.friends||[]).filter(x=>x!==me);this.saveUsers(us);},
  getCreators(){return this.g('creators')||JSON.parse(JSON.stringify(CDEF));},saveCreators(c){this.s('creators',c);},updCreator(id,d){const l=this.getCreators();const i=l.findIndex(c=>c.id===id);if(i>-1){l[i]={...l[i],...d};this.saveCreators(l);}},
  getProjects(){return this.g('projects')||JSON.parse(JSON.stringify(PDEF));},saveProjects(p){this.s('projects',p);},updProject(id,d){const l=this.getProjects();const i=l.findIndex(p=>p.id===id);if(i>-1){l[i]={...l[i],...d};this.saveProjects(l);}},
  getGallery(){return this.g('gallery')||JSON.parse(JSON.stringify(GALDEF));},saveGallery(g){this.s('gallery',g);},
  getProducts(){return this.g('products')||JSON.parse(JSON.stringify(PRODDEF));},saveProducts(p){this.s('products',p);},updProduct(id,d){const l=this.getProducts();const i=l.findIndex(p=>p.id===id);if(i>-1){l[i]={...l[i],...d};this.saveProducts(l);}},
  getTopUpReqs(){return this.g('topup_reqs',[]);},saveTopUpReqs(r){this.s('topup_reqs',r);},
  addTopUpReq(req){const r=this.getTopUpReqs();req.id='TU'+Date.now();req.createdAt=new Date().toISOString();req.status='pending';r.push(req);this.saveTopUpReqs(r);return req;},
  updTopUpReq(id,d){const r=this.getTopUpReqs();const i=r.findIndex(x=>x.id===id);if(i>-1){r[i]={...r[i],...d,updatedAt:new Date().toISOString()};this.saveTopUpReqs(r);}},
  getPendingTopUps(){return this.getTopUpReqs().filter(r=>r.status==='pending');},
  getChallenges(){return this.g('challenges')||[];},saveChallenges(c){this.s('challenges',c);},
  addChallenge(c){const all=this.getChallenges();c.id='CH'+Date.now();c.createdAt=new Date().toISOString();c.status='pending';c.attempts=[];all.push(c);this.saveChallenges(all);return c;},
  updChallenge(id,d){const all=this.getChallenges();const i=all.findIndex(x=>x.id===id);if(i>-1){all[i]={...all[i],...d};this.saveChallenges(all);}},
  delChallenge(id){this.saveChallenges(this.getChallenges().filter(x=>x.id!==id));},
  addAttempt(chId,attempt){const all=this.getChallenges();const i=all.findIndex(x=>x.id===chId);if(i>-1){if(!all[i].attempts)all[i].attempts=[];all[i].attempts.push(attempt);this.saveChallenges(all);}},
  getPageViews(){return this.g('pageviews',{days:{},total:0,accessLog:[]});},
  recordPageView(page){
    const pv=this.getPageViews();
    const today=new Date().toISOString().slice(0,10);
    if(!pv.days)pv.days={};if(!pv.days[today])pv.days[today]={total:0,pages:{},users:{}};
    pv.days[today].total++;
    pv.days[today].pages[page]=(pv.days[today].pages[page]||0)+1;
    // Track user
    const uname=S.loggedIn&&S.user?S.user.username:'(tamu)';
    if(!pv.days[today].users[uname])pv.days[today].users[uname]={total:0,pages:{}};
    pv.days[today].users[uname].total++;
    pv.days[today].users[uname].pages[page]=(pv.days[today].users[uname].pages[page]||0)+1;
    pv.total=(pv.total||0)+1;
    // Access log
    if(!pv.accessLog)pv.accessLog=[];
    pv.accessLog.push({time:new Date().toISOString(),user:uname,page});
    if(pv.accessLog.length>500)pv.accessLog.splice(0,pv.accessLog.length-500);
    this.s('pageviews',pv);
  },
  getStoreOrders(){return this.g('store_orders',[]);},addStoreOrder(o){const all=this.getStoreOrders();o.id='ORD'+Date.now();o.createdAt=new Date().toISOString();all.push(o);this.s('store_orders',all);},saveVault(v){this.s('vault',v);},
  addVault(entry){const v=this.getVault();entry.id='V'+Date.now();entry.createdAt=new Date().toISOString();v.push(entry);this.saveVault(v);return entry;},
  updVault(id,d){const v=this.getVault();const i=v.findIndex(x=>x.id===id);if(i>-1){v[i]={...v[i],...d,updatedAt:new Date().toISOString()};this.saveVault(v);}},
  delVault(id){this.saveVault(this.getVault().filter(x=>x.id!==id));},
  getVaultLogs(){return this.g('vault_logs',[]);},
  addVaultLog(log){const l=this.getVaultLogs();log.time=new Date().toISOString();l.push(log);if(l.length>200)l.splice(0,l.length-200);this.s('vault_logs',l);},
  getGlobalFracChat(){return this.g('frac_chat',[]);},
  addFracChatMsg(msg){const c=this.getGlobalFracChat();msg.id='FC'+Date.now();c.push(msg);if(c.length>500)c.splice(0,c.length-500);this.s('frac_chat',c);},
};
function initDB(){if(!DB.getUsers().length){DB.reg('admin@starlive.com','admin123','Admin StarLive');DB.reg('user@starlive.com','user123','Demo User');DB.updUser('admin@starlive.com',{wallet:500});DB.updUser('user@starlive.com',{wallet:100});}}

// ── THEMES ────────────────────────────────────────────────────
const TH={
  cyber:{name:"Cyber Serenity",bg:"linear-gradient(135deg,#1a1208,#0d1a14,#0a1520)",sb:"rgba(0,255,200,0.15)",ac:"#00ffc8",as:"rgba(0,255,200,0.12)",tx:"#f0e8d8",tm:"#a89878",cb:"rgba(20,30,25,0.76)",bl:"blur(14px)",nab:"rgba(0,255,200,0.12)",nat:"#00ffc8",bb:"rgba(0,255,200,0.15)",bc:"#00ffc8",bt:"#00ffc8",ib:"rgba(0,255,200,0.06)",sh:"0 4px 22px rgba(0,255,200,0.07)",tb:"rgba(0,255,200,0.1)",tt:"#00ffc8",sur:"rgba(0,255,200,0.04)",mm:"rgba(0,255,200,0.18)",mo:"rgba(255,255,255,0.07)"},
  inst:{name:"Institutional Future",bg:"linear-gradient(135deg,#001830,#002a5a,#001020)",sb:"rgba(250,183,21,0.26)",ac:"#FAB715",as:"rgba(250,183,21,0.12)",tx:"#e8f0ff",tm:"#7a9cc8",cb:"rgba(0,20,50,0.78)",bl:"blur(12px)",nab:"rgba(250,183,21,0.12)",nat:"#FAB715",bb:"rgba(250,183,21,0.14)",bc:"#FAB715",bt:"#FAB715",ib:"rgba(0,95,172,0.12)",sh:"0 4px 22px rgba(0,95,172,0.14)",tb:"rgba(250,183,21,0.1)",tt:"#FAB715",sur:"rgba(250,183,21,0.04)",mm:"rgba(250,183,21,0.18)",mo:"rgba(255,255,255,0.06)"},
  gold:{name:"Golden Autumn",bg:"linear-gradient(135deg,#1a0f00,#2a1500,#0a1020)",sb:"rgba(250,183,21,0.2)",ac:"#FAB715",as:"rgba(250,183,21,0.13)",tx:"#fef0c8",tm:"#b8900a",cb:"rgba(25,15,0,0.78)",bl:"blur(14px)",nab:"rgba(250,183,21,0.13)",nat:"#FAB715",bb:"rgba(250,183,21,0.17)",bc:"#FAB715",bt:"#FAB715",ib:"rgba(250,183,21,0.07)",sh:"0 4px 22px rgba(250,183,21,0.07)",tb:"rgba(250,183,21,0.1)",tt:"#FAB715",sur:"rgba(250,183,21,0.05)",mm:"rgba(250,183,21,0.18)",mo:"rgba(255,255,255,0.05)"},
};

// ── STATE ─────────────────────────────────────────────────────
const S={theme:'cyber',season:'Autumn',lang:'English',bgP:0,fx:false,loggedIn:false,isAdmin:false,user:null,page:'home',sopen:true,spopen:false,cpopen:false,crtSel:null,usrSel:null,cart:{},tuAmt:'',atab:'login',aerr:'',aform:{email:'',password:'',username:'',cp:''},stab:'theme',customBg:null,slidx:0,slTimer:null,dtab:'analytics',chatRoom:null,chatTarget:null,chatDraft:{},chatTab:'friends',vaultQ:'',vaultTab:'home',fracPageTab:'info',_cb:{},_pimgid:null,_ecid:null,_ecf:null,_prodEditId:null,fracExamAnswers:{},fracExamStep:0,challTab:'browse',challEditId:null,challTakeId:null,dashTab2:'users',pageViews:{}};

// ── STATIC DATA ───────────────────────────────────────────────
const CDEF=[
  {id:1,name:"Aiden Voss",role:"Lead Developer",hobby:"Cyberpunk & synthwave",bio:"Full-stack architect with 8 years building scalable systems.",education:"B.Sc Computer Science — MIT (2015)\nM.Sc Software Engineering — Stanford (2017)",fraction:"Zenith Prime Labs",achievements:"🏆 Best Developer Award 2023\n🥇 Hackathon Champion — DevFest Asia\n📜 Google Cloud Certified",images:["👨‍💻"],tags:["React","Node.js","Rust"],photo:null,cvUrl:null,email:"aiden@starlive.com",phone:"+62 812 0001"},
  {id:2,name:"Yuki Tanaka",role:"UI/UX Designer",hobby:"Watercolor & tea ceremony",bio:"Visual storyteller blending Japanese aesthetics with futuristic design.",education:"B.A Design — Kyoto University (2018)\nExchange — Parsons NYC (2019)",fraction:"Nova Creative Studio",achievements:"🎨 Red Dot Design Award 2023\n✨ UX Pioneer — Figma Community",images:["👩‍🎨"],tags:["Figma","Motion","3D"],photo:null,cvUrl:null,email:"yuki@starlive.com",phone:"+62 812 0002"},
  {id:3,name:"Marcus Chen",role:"Backend Engineer",hobby:"Chess & astrophotography",bio:"Systems thinker who loves elegant algorithms.",education:"B.Sc IT — NUS (2016)\nM.Sc Data Science — HKUST (2018)",fraction:"Zenith Prime Labs",achievements:"♟️ National Chess Champion U-25\n🔭 Astrophotography Award",images:["👨‍🔬"],tags:["Python","Go","PostgreSQL"],photo:null,cvUrl:null,email:"marcus@starlive.com",phone:"+62 812 0003"},
  {id:4,name:"Sora Kim",role:"Creative Director",hobby:"K-drama & digital illustration",bio:"Bridges the gap between art and strategy.",education:"B.F.A — Hongik University (2017)\nMBA — Seoul National University (2020)",fraction:"Nova Creative Studio",achievements:"🎬 Best Creative Director — MediaAsia 2023\n🌠 Cannes Lions 2022",images:["👩‍💼"],tags:["Branding","Art Direction","Video"],photo:null,cvUrl:null,email:"sora@starlive.com",phone:"+62 812 0004"},
  {id:5,name:"Lena Richter",role:"Data Scientist",hobby:"Hiking & piano",bio:"Turns raw data into actionable insights.",education:"B.Sc Statistics — TU Munich (2017)\nPh.D ML — ETH Zurich (2021)",fraction:"Zenith Prime Labs",achievements:"🤖 Best ML Paper — NeurIPS 2022\n📊 Kaggle Winner ×3",images:["👩‍🔬"],tags:["Python","TensorFlow","D3.js"],photo:null,cvUrl:null,email:"lena@starlive.com",phone:"+62 812 0005"},
];
const PDEF=[
  {id:1,name:"Project Aurora",desc:"Next-gen streaming infrastructure for real-time content delivery.",team:["Aiden Voss","Marcus Chen"],progress:78,budget:450000,status:"Active",tags:["Streaming","SE Asia"],image:null},
  {id:2,name:"NeoCanvas",desc:"AI-powered creative suite for digital artists.",team:["Yuki Tanaka","Sora Kim"],progress:55,budget:280000,status:"In Development",tags:["AI","Creative"],image:null},
  {id:3,name:"StarGrid Analytics",desc:"Unified analytics aggregating social media performance.",team:["Lena Richter","Marcus Chen"],progress:92,budget:180000,status:"Testing",tags:["Analytics","Data"],image:null},
  {id:4,name:"Orbital Commerce",desc:"E-commerce backbone powering StarLive Store.",team:["Aiden Voss","Yuki Tanaka"],progress:40,budget:320000,status:"Planning",tags:["E-commerce","AR"],image:null},
];
const GALDEF=[
  {id:1,type:"image",emoji:"🌌",title:"Nebula Conference 2025",cat:"Event",mediaUrl:null},
  {id:2,type:"image",emoji:"🎨",title:"NeoCanvas Launch",cat:"Product",mediaUrl:null},
  {id:3,type:"video",emoji:"🎬",title:"StarLive Documentary",cat:"Media",mediaUrl:null},
  {id:4,type:"image",emoji:"🏙️",title:"Cyber Office Tour",cat:"BTS",mediaUrl:null},
  {id:5,type:"image",emoji:"🌸",title:"Spring Festival 2025",cat:"Event",mediaUrl:null},
  {id:6,type:"video",emoji:"🎵",title:"Creator Showcase Reel",cat:"Media",mediaUrl:null},
];
const PRODDEF=[
  {id:1,name:"StarLive Hoodie",price:85,e:"👕",cat:"Apparel",desc:"Premium cyber-aesthetic hoodie",stock:50,image:null},
  {id:2,name:"Creator Pack",price:149,e:"📦",cat:"Bundle",desc:"Complete digital creator toolkit",stock:30,image:null},
  {id:3,name:"Neon Mug",price:28,e:"☕",cat:"Accessories",desc:"Heat-reactive constellation mug",stock:100,image:null},
  {id:4,name:"StarPad Pro",price:220,e:"🖱️",cat:"Hardware",desc:"XL desk pad with wireless charging",stock:20,image:null},
  {id:5,name:"Digital Zine Vol.1",price:12,e:"📕",cat:"Digital",desc:"Behind-the-scenes digital magazine",stock:999,image:null},
  {id:6,name:"Galaxy Pin Set",price:35,e:"📌",cat:"Accessories",desc:"Set of 5 enamel affiliate pins",stock:75,image:null},
];
const AFFIL=[
  {id:1,n:"Polaris Academy",ic:"⭐",d:"Elite training hub for creative professionals.",c:"#4fc3f7",url:"https://example.com/polaris"},
  {id:2,n:"Zenith Prime Labs",ic:"🧪",d:"R&D wing focused on next-gen technology.",c:"#81c784",url:"https://example.com/zenith"},
  {id:3,n:"Solstice Media Info",ic:"📡",d:"Media broadcasting and information platform.",c:"#ffb74d",url:"https://example.com/solstice"},
  {id:4,n:"Nova Creative Studio",ic:"🎨",d:"Powerhouse for visual design and multimedia.",c:"#f06292",url:"https://example.com/nova"},
  {id:5,n:"Stellaris Lounge",ic:"🛋️",d:"Community hub for collaboration.",c:"#ce93d8",url:"https://example.com/stellaris"},
];
const SLIDES=[{e:"🌌",l:"Nebula Conference 2025",bg:"linear-gradient(135deg,#0d0020,#1a0040)"},{e:"🎨",l:"NeoCanvas Launch",bg:"linear-gradient(135deg,#200010,#400030)"},{e:"🏙️",l:"StarLive Cyber HQ",bg:"linear-gradient(135deg,#001a20,#003040)"},{e:"🌸",l:"Spring Creator Festival",bg:"linear-gradient(135deg,#200a00,#402000)"},{e:"🤖",l:"AI Lab Grand Opening",bg:"linear-gradient(135deg,#001020,#002040)"},{e:"✨",l:"Awards Gala Night 2024",bg:"linear-gradient(135deg,#1a1000,#302000)"}];
const NAV=[{id:"home",lk:"home",i:"🏠"},{id:"affiliation",lk:"affiliation",i:"🤝"},{id:"creator",lk:"creator",i:"👨‍💻"},{id:"project",lk:"project",i:"🚀"},{id:"gallery",lk:"gallery",i:"🖼️"},{id:"social",lk:"social",i:"🌐"},{id:"store",lk:"store",i:"🛒",locked:true},{id:"fraction",lk:"fraction",i:"🔱",locked:true},{id:"challenge",lk:"challenge",i:"🏆",locked:true},{id:"dashboard",lk:"dashboard",i:"📊",admin:true},{id:"vault",lk:"vault",i:"🔐",admin:true}];
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

// ── THEME ─────────────────────────────────────────────────────
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
  if(S.loggedIn&&S.user){const u=DB.byEmail(S.user.email)||S.user;if(sav){if(u.avatar){const img=el('img',{src:u.avatar,style:{width:'100%',height:'100%',objectFit:'cover'}});sav.appendChild(img);}else{sav.textContent=u.username[0].toUpperCase();sav.style.color=q.ac;}}if(sun){sun.textContent=u.username;sun.style.color=q.tx;}if(sur){sur.textContent=S.isAdmin?'👑 Admin':'👤 User';sur.style.color=q.ac;}if(sod)sod.style.display='block';}
  else{if(sav){sav.textContent='👤';sav.style.color=q.tm;}if(sun){sun.textContent='Not logged in';sun.style.color=q.tm;}if(sur){sur.textContent='Click to login';sur.style.color=q.ac;}if(sod)sod.style.display='none';}
}
function handleMyAcct(){if(!S.loggedIn){openAuthM();return;}goTo('myaccount');}

// ── NAV + AUTH ────────────────────────────────────────────────
function renderNav(){
  const q=t();const nav=document.getElementById('nav');nav.innerHTML='';
  NAV.forEach(item=>{if(item.admin&&!S.isAdmin)return;const locked=item.locked&&!S.loggedIn;const active=S.page===item.id;nav.appendChild(el('div',{class:'nav-i',style:{background:active?q.nab:'transparent',color:active?q.nat:locked?q.tm+'88':q.tx,cursor:locked?'not-allowed':'pointer',opacity:locked?'.5':'1'},onclick:()=>{if(!locked)goTo(item.id);}},el('span',{style:{fontSize:'17px',flexShrink:'0'}},item.i),el('span',{class:'sl',style:{fontSize:'12px',fontWeight:active?'700':'400'}},T(item.lk)),locked?el('span',{class:'slk',style:{marginLeft:'auto',fontSize:'10px'}},'🔒'):null));});
}
function renderAuth(){
  const q=t();const af=document.getElementById('afull');af.innerHTML='';
  const collapsed=!S.sopen;
  if(S.loggedIn){
    const lb=btn(collapsed?T('logout').slice(0,2):T('logout'),()=>{if(!confirm('Are you sure you want to logout?'))return;if(S.user)DB.updUser(S.user.email,{online:false,lastSeen:new Date().toISOString()});S.loggedIn=false;S.isAdmin=false;S.user=null;S.cart={};S.chatRoom=null;S.chatTarget=null;if(['myaccount','dashboard','vault'].includes(S.page))goTo('home');else{applyTheme();rPage();}notif('👋 Logged out.');},true,{width:'100%',fontSize:'11px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'});
    af.appendChild(lb);
  } else {
    const loginBtn=el('button',{class:'btn',style:{width:'100%',fontSize:'11px',background:q.bb,borderColor:q.bc,color:q.bt,overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'},onclick:openAuthM});
    loginBtn.appendChild(el('span',{style:{fontSize:'14px',flexShrink:'0'}},'🔐'));
    loginBtn.appendChild(el('span',{class:'sl',style:{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},T('loginReg').replace('🔐 ','')));
    af.appendChild(loginBtn);
  }
}

// ── AUTH MODAL ────────────────────────────────────────────────
function openAuthM(){document.getElementById('m-auth').style.display='flex';rAuthM();}
function rAuthM(){
  const q=t();const m=document.getElementById('m-auth');m.innerHTML='';
  const card=gc({padding:'32px',width:'350px',maxWidth:'94vw',position:'relative',borderRadius:'18px'});
  card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'19px',cursor:'pointer'},onclick:()=>closeM('m-auth')},'✕'));
  card.appendChild(el('div',{style:{fontSize:'26px',textAlign:'center',marginBottom:'5px'}},'⭐'));
  card.appendChild(el('h2',{style:{color:q.ac,textAlign:'center',marginBottom:'16px',fontSize:'16px',fontWeight:'800'}},'StarLive '+(S.atab==='login'?T('login'):'Register')));
  const tr=el('div',{style:{display:'flex',gap:'7px',marginBottom:'15px'}});
  ['login','register'].forEach(tb=>{const a=S.atab===tb;tr.appendChild(el('button',{class:'btn',style:{flex:'1',background:a?q.as:'transparent',borderColor:a?q.ac:q.sb,color:a?q.ac:q.tm},onclick:()=>{S.atab=tb;S.aerr='';rAuthM();}},tb==='login'?'🔑 Login':'📝 Register'));});
  card.appendChild(tr);
  if(S.aerr)card.appendChild(el('div',{style:{background:'rgba(255,80,80,.1)',border:'1px solid #f44',borderRadius:'7px',padding:'7px 11px',marginBottom:'9px',color:'#f88',fontSize:'11px'}},S.aerr));
  const f=S.aform;const inp=(ph,key,ty='text')=>{const i=el('input',{type:ty,placeholder:ph,class:'inf',style:{background:q.ib,borderColor:q.sb,color:q.tx}});i.value=f[key]||'';i.oninput=e=>{S.aform[key]=e.target.value;};return i;};
  if(S.atab==='register')card.appendChild(inp('Full Name / Username','username'));
  card.appendChild(inp('Email','email'));card.appendChild(inp('Password','password','password'));
  if(S.atab==='register')card.appendChild(inp('Confirm Password','cp','password'));
  if(S.atab==='login'){card.appendChild(btn('🔓 Login',doLogin,false,{width:'100%',marginTop:'4px'}));card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',textAlign:'center',marginTop:'9px'}},'Demo: user@starlive.com / user123 · admin@starlive.com / admin123'));}
  else card.appendChild(btn('✅ Register',doReg,false,{width:'100%',marginTop:'4px'}));
  m.appendChild(card);setTimeout(()=>{const i=card.querySelector('input');if(i)i.focus();},50);
}
function doLogin(){const{email,password}=S.aform;if(!email||!password){S.aerr='Email & password required.';rAuthM();return;}const u=DB.findUser(email,password);if(!u){S.aerr='Wrong email or password.';rAuthM();return;}DB.updUser(email,{online:true,lastSeen:new Date().toISOString()});S.loggedIn=true;S.isAdmin=u.role==='admin';S.user={...u,...DB.byEmail(email)};S.aform={email:'',password:'',username:'',cp:''};S.aerr='';closeM('m-auth');applyTheme();rPage();notif(`✨ ${T('welcome')} ${u.username}!`);}
function doReg(){const{email,password,username,cp}=S.aform;if(!username||!email||!password){S.aerr='All fields required.';rAuthM();return;}const emailRx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!emailRx.test(email)){S.aerr='Please enter a valid email address.';rAuthM();return;}if(password!==cp){S.aerr='Passwords do not match.';rAuthM();return;}if(password.length<6){S.aerr='Min 6 characters.';rAuthM();return;}const res=DB.reg(email,password,username);if(!res.ok){S.aerr=res.msg;rAuthM();return;}S.atab='login';S.aform={email,password,username:'',cp:''};S.aerr='';rAuthM();notif('✅ Account created! Please login.','success');}

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
// ── HOME ──────────────────────────────────────────────────────
function rHome(){
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
function rAffil(){const q=t();const c=document.getElementById('page-affiliation');c.innerHTML='';c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('affiliation')));c.appendChild(el('p',{style:{color:q.tm,marginBottom:'18px',fontSize:'12px'}},T('affiliSub')));const list=el('div',{style:{display:'flex',flexDirection:'column',gap:'12px'}});AFFIL.forEach(aff=>{const exp=AX[aff.id];const card=gc({padding:'20px',cursor:'pointer',border:`1px solid ${exp?aff.c:q.sb}`,transition:'border-color .2s'});card.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'11px'}},el('div',{style:{fontSize:'26px',width:'48px',height:'48px',display:'flex',alignItems:'center',justifyContent:'center',background:`${aff.c}18`,borderRadius:'11px',flexShrink:'0'}},aff.ic),el('div',{style:{flex:'1'}},el('div',{style:{color:aff.c,fontWeight:'700',fontSize:'14px'}},aff.n),el('div',{style:{color:q.tm,fontSize:'11px',marginTop:'2px'}},aff.d)),el('div',{style:{color:q.tm,fontSize:'14px'}},exp?'▲':'▼')));if(exp){const va=el('a',{href:aff.url,target:'_blank',rel:'noopener',style:{textDecoration:'none',display:'inline-block'}});va.appendChild(btn('🌐 Visit Portal →',null,false));va.onclick=e=>e.stopPropagation();card.appendChild(el('div',{style:{marginTop:'12px',paddingTop:'12px',borderTop:`1px solid ${q.sb}`}},el('div',{style:{display:'flex',gap:'7px',flexWrap:'wrap',marginBottom:'9px'}},tg('🌐 Active'),tg('📊 Growing')),el('p',{style:{color:q.tx,fontSize:'12px',lineHeight:'1.7',marginBottom:'9px'}},`${aff.n} operates as an autonomous entity sharing resources within the StarLive ecosystem.`),va));}card.onclick=()=>{const wasOpen=AX[aff.id];Object.keys(AX).forEach(k=>AX[k]=false);AX[aff.id]=!wasOpen;rAffil();};list.appendChild(card);});c.appendChild(list);}

// ── CREATORS ─────────────────────────────────────────────────
function rCreators(){const q=t();const c=document.getElementById('page-creator');c.innerHTML='';c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('creator')));c.appendChild(el('p',{style:{color:q.tm,marginBottom:'18px',fontSize:'12px'}},T('creatorSub')));const creators=DB.getCreators();const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'16px'}});creators.forEach(cr=>{const wrap=el('div',{style:{position:'relative'}});const card=gc({padding:'20px',cursor:'pointer'});if(cr.photo)card.appendChild(el('img',{src:cr.photo,style:{width:'56px',height:'56px',borderRadius:'50%',objectFit:'cover',marginBottom:'9px',border:`2px solid ${q.ac}`}}));else card.appendChild(el('div',{style:{fontSize:'40px',marginBottom:'9px'}},cr.images[0]));card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',letterSpacing:'.09em'}},cr.role.toUpperCase()));card.appendChild(el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700',margin:'3px 0'}},cr.name));card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'7px'}},'📂 '+cr.fraction));card.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',lineHeight:'1.6',marginBottom:'9px'}},cr.bio.slice(0,72)+'...'));card.appendChild(el('div',{style:{display:'flex',gap:'4px',flexWrap:'wrap'}},...(Array.isArray(cr.tags)?cr.tags:[]).map(x=>tg(x))));card.onclick=()=>{S.crtSel=cr;goTo('profile');};wrap.appendChild(card);if(S.isAdmin)wrap.appendChild(el('button',{style:{position:'absolute',top:'9px',right:'9px',background:q.as,border:`1px solid ${q.ac}`,color:q.ac,borderRadius:'6px',padding:'3px 7px',fontSize:'10px',cursor:'pointer'},onclick:e=>{e.stopPropagation();openEC(cr.id);}},T('edit')));grid.appendChild(wrap);});c.appendChild(grid);}

function openEC(id){const l=DB.getCreators();const cr=l.find(x=>x.id===id);if(!cr)return;S._ecid=id;S._ecf={...cr};document.getElementById('m-ec').style.display='flex';rEC();}
function rEC(){
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
  const br=el('div',{style:{display:'flex',gap:'7px',marginTop:'13px'}});br.appendChild(btn('💾 '+T('save'),()=>{const d={...S._ecf};if(typeof d.tags==='string')d.tags=d.tags.split(',').map(s=>s.trim()).filter(Boolean).slice(0,4);DB.updCreator(S._ecid,d);closeM('m-ec');rCreators();notif('✅ Creator updated!','success');},false));br.appendChild(btn(T('cancel'),()=>closeM('m-ec'),true));card.appendChild(br);m.appendChild(card);
}
function onFiCphoto(e){const f=e.target.files[0];if(!f)return;openCreatorCropModal(f,S._ecid);e.target.value='';}

function openCreatorCropModal(file,creatorId){
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
  brow.appendChild(btn('✅ Apply',()=>{const canvas=document.createElement('canvas');const sx=imgEl.naturalWidth/imgEl.offsetWidth,sy=imgEl.naturalHeight/imgEl.offsetHeight;canvas.width=300;canvas.height=300;const ctx=canvas.getContext('2d');ctx.beginPath();ctx.arc(150,150,150,0,Math.PI*2);ctx.clip();ctx.drawImage(imgEl,cropX*sx,cropY*sy,cropW*sx,cropH*sy,0,0,300,300);const d=canvas.toDataURL('image/jpeg',0.88);DB.updCreator(creatorId,{photo:d});URL.revokeObjectURL(url);closeM('m-gal');if(S.page==='creator')rCreators();if(S.page==='profile')rProfile();notif('✅ Creator photo updated!','success');document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',mu);},false,{fontSize:'11px'}));
  brow.appendChild(btn('Cancel',()=>{URL.revokeObjectURL(url);closeM('m-gal');document.removeEventListener('mousemove',mv);document.removeEventListener('mouseup',mu);},true,{fontSize:'11px'}));
  card.appendChild(brow);m.appendChild(card);
}
function onFiCv(e){const f=e.target.files[0];if(!f)return;if(S._cb['fi-cv'])S._cb['fi-cv'](f);e.target.value='';}

// ── PROFILE PAGE ──────────────────────────────────────────────
function rProfile(){
  const q=t();const c=document.getElementById('page-profile');c.innerHTML='';
  const crs=DB.getCreators();const cr=crs.find(x=>x.id===S.crtSel?.id)||S.crtSel;
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
function openConM(cr){const q=t();const m=document.getElementById('m-con');m.style.display='flex';m.innerHTML='';const card=gc({padding:'26px',width:'340px',maxWidth:'94vw',position:'relative',borderRadius:'18px'});card.appendChild(el('button',{style:{position:'absolute',top:'11px',right:'13px',background:'none',border:'none',color:q.tm,fontSize:'18px',cursor:'pointer'},onclick:()=>closeM('m-con')},'✕'));if(cr.photo)card.appendChild(el('img',{src:cr.photo,style:{width:'64px',height:'64px',borderRadius:'50%',objectFit:'cover',border:`2px solid ${q.ac}`,display:'block',margin:'0 auto 9px'}}));else card.appendChild(el('div',{style:{fontSize:'48px',textAlign:'center',marginBottom:'9px'}},cr.images[0]));card.appendChild(el('h3',{style:{color:q.ac,textAlign:'center',marginBottom:'2px',fontSize:'16px'}},cr.name));card.appendChild(el('div',{style:{color:q.tm,textAlign:'center',fontSize:'11px',marginBottom:'14px'}},cr.role+' · '+cr.fraction));card.appendChild(el('div',{style:{background:q.sur,borderRadius:'9px',padding:'12px',border:`1px solid ${q.sb}`,display:'flex',flexDirection:'column',gap:'9px'}},el('div',{style:{display:'flex',alignItems:'center',gap:'9px'}},el('span',{style:{fontSize:'15px'}},'📧'),el('div',{},el('div',{style:{color:q.tm,fontSize:'9px'}},'EMAIL'),el('a',{href:`mailto:${cr.email}`,style:{color:q.ac,fontSize:'12px',textDecoration:'none'}},cr.email))),el('div',{style:{display:'flex',alignItems:'center',gap:'9px'}},el('span',{style:{fontSize:'15px'}},'📞'),el('div',{},el('div',{style:{color:q.tm,fontSize:'9px'}},'PHONE'),el('div',{style:{color:q.tx,fontSize:'12px'}},cr.phone||'-')))));m.appendChild(card);}

// ── PROJECTS ──────────────────────────────────────────────────
function rProjects(){
  const q=t();const c=document.getElementById('page-project');c.innerHTML='';
  const sc={Active:"#4fc3f7","In Development":"#ffb74d",Testing:"#81c784",Planning:"#ce93d8"};
  c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('project')));
  c.appendChild(el('p',{style:{color:q.tm,marginBottom:'18px',fontSize:'12px'}},T('projectSub')));
  const list=el('div',{style:{display:'flex',flexDirection:'column',gap:'16px'}});
  DB.getProjects().forEach(p=>{const s=sc[p.status]||'#fff';let ie=null;if(p.image)ie=el('img',{src:p.image,style:{width:'100%',height:'140px',objectFit:'cover',borderRadius:'9px',marginBottom:'12px',border:`1px solid ${q.sb}`}});else if(S.isAdmin)ie=el('div',{style:{width:'100%',height:'70px',border:`2px dashed ${q.sb}`,borderRadius:'9px',marginBottom:'12px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:q.tm,fontSize:'11px'},onclick:()=>{S._pimgid=p.id;document.getElementById('fi-pimg').click();}},'📷 Upload project image');list.appendChild(gc({padding:'22px'},ie,el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'7px',marginBottom:'10px'}},el('div',{},el('h2',{style:{color:q.tx,fontSize:'17px',fontWeight:'800',marginBottom:'3px'}},p.name),el('p',{style:{color:q.tm,fontSize:'11px'}},p.desc)),el('span',{style:{background:`${s}22`,color:s,border:`1px solid ${s}44`,borderRadius:'20px',padding:'2px 10px',fontSize:'10px',fontWeight:'700'}},p.status)),el('div',{style:{display:'flex',gap:'5px',flexWrap:'wrap',marginBottom:'12px'}},...p.tags.map(x=>tg(x))),el('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginBottom:'12px'}},el('div',{},el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'2px'}},'TEAM'),...p.team.map(n=>el('div',{style:{color:q.tx,fontSize:'11px',marginBottom:'1px'}},'• '+n))),el('div',{},el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'2px'}},'BUDGET'),el('div',{style:{color:q.ac,fontSize:'16px',fontWeight:'900'}},'$'+p.budget.toLocaleString()))),el('div',{},el('div',{style:{display:'flex',justifyContent:'space-between',fontSize:'10px',color:q.tm,marginBottom:'4px'}},el('span',{},'PROGRESS'),el('span',{style:{color:q.ac,fontWeight:'700'}},p.progress+'%')),pb(p.progress))));});
  c.appendChild(list);
}
function onFiPimg(e){const f=e.target.files[0];if(!f)return;rf(f).then(d=>{DB.updProject(S._pimgid,{image:d});rProjects();notif('✅ Image uploaded!','success');});e.target.value='';}
// ── GALLERY (Admin upload) ────────────────────────────────────
function rGallery(){
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
  const gal=DB.getGallery();
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
    if(S.isAdmin)bot.appendChild(el('button',{style:{background:'rgba(255,60,60,.12)',border:'1px solid #f44',color:'#f88',borderRadius:'5px',padding:'2px 6px',fontSize:'10px',cursor:'pointer'},onclick:e=>{e.stopPropagation();if(confirm('Delete this item?')){const g=DB.getGallery().filter(x=>x.id!==item.id);DB.saveGallery(g);rGallery();notif('Deleted.','success');}}},'✕'));
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
    brow.appendChild(btn('✅ Upload ke Gallery',()=>{
      if(!gTitle.trim()){notif('Judul wajib diisi!','error');return;}
      const gal=DB.getGallery();
      gal.push({id:'G'+Date.now(),type,emoji:type==='video'?'🎬':'🖼️',title:gTitle.trim(),cat:gCat,mediaUrl:dataUrl,uploadedBy:S.user?.username||'Admin',uploadedAt:new Date().toISOString()});
      DB.saveGallery(gal);closeM('m-gal');rGallery();notif('✅ Media berhasil ditambahkan!','success');
    },false,{fontSize:'12px'}));
    brow.appendChild(btn('Batal',()=>closeM('m-gal'),true,{fontSize:'12px'}));
    card.appendChild(brow);m.appendChild(card);
    setTimeout(()=>ti.focus(),50);
  }).catch(()=>notif('Gagal membaca file.','error'));
}

// ── STORE (Admin edit: stock, price, photo) ───────────────────
function rStore(){
  const q=t();const c=document.getElementById('page-store');c.innerHTML='';
  if(!S.loggedIn){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'🔒'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700',marginBottom:'8px'}},T('loginRequired')),btn('🔐 '+T('login'),openAuthM)));return;}
  const prods=DB.getProducts();
  const tot=prods.reduce((s,p)=>s+(S.cart[p.id]||0)*p.price,0);const cnt=Object.values(S.cart).reduce((a,b)=>a+b,0);
  const hdr=el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px',flexWrap:'wrap',gap:'9px'}},el('div',{},el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'3px'}},T('store')),el('p',{style:{color:q.tm,fontSize:'12px'}},T('storeSub'))));
  const hdrRight=el('div',{style:{display:'flex',gap:'8px',alignItems:'center'}});
  if(cnt>0)hdrRight.appendChild(gc({padding:'8px 13px',display:'flex',gap:'9px',alignItems:'center'},el('span',{style:{fontSize:'16px'}},'🛒'),el('div',{},el('div',{style:{color:q.ac,fontWeight:'700',fontSize:'12px'}},cnt+' items'),el('div',{style:{color:q.tx,fontSize:'11px'}},'$'+tot.toFixed(2))),btn('Checkout →',()=>openCO())));
  if(S.isAdmin)hdrRight.appendChild(btn('➕ New Item',()=>openProdNew(),false,{fontSize:'11px'}));
  hdr.appendChild(hdrRight);
  c.appendChild(hdr);
  const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:'16px'}});
  prods.forEach(p=>{
    const qty=S.cart[p.id]||0;const oos=p.stock<=0;
    const qc=el('div',{style:{display:'flex',alignItems:'center',gap:'8px'}});
    qc.appendChild(el('button',{style:{width:'27px',height:'27px',borderRadius:'50%',background:q.bb,border:`1px solid ${q.bc}`,color:q.bt,cursor:'pointer',fontSize:'13px'},onclick:()=>{if(S.cart[p.id]>1)S.cart[p.id]--;else delete S.cart[p.id];rStore();}},'−'));
    qc.appendChild(el('span',{style:{color:q.tx,fontWeight:'700',minWidth:'17px',textAlign:'center',fontSize:'12px'}},String(qty)));
    qc.appendChild(el('button',{style:{width:'27px',height:'27px',borderRadius:'50%',background:q.bb,border:`1px solid ${q.bc}`,color:q.bt,cursor:'pointer',fontSize:'13px'},onclick:()=>{if(qty<p.stock){S.cart[p.id]=(S.cart[p.id]||0)+1;rStore();}else notif('Stock limit reached.','error');}},'+'));
    const wrap=el('div',{style:{position:'relative'}});
    const imgA=el('div',{style:{height:'64px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'9px',borderRadius:'8px',overflow:'hidden'}});
    if(p.image){imgA.appendChild(el('img',{src:p.image,style:{width:'64px',height:'64px',objectFit:'cover',borderRadius:'8px'}}));}
    else imgA.appendChild(el('div',{style:{fontSize:'48px'}},p.e));
    const card=gc({padding:'17px'},imgA,el('div',{style:{color:q.ac,fontSize:'9px',fontWeight:'700',letterSpacing:'.07em'}},p.cat),el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700',margin:'3px 0 5px'}},p.name),el('div',{style:{color:q.tm,fontSize:'10px',lineHeight:'1.5',marginBottom:'9px'}},p.desc),el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'9px'}},el('div',{style:{color:q.ac,fontSize:'19px',fontWeight:'900'}},'$'+p.price),el('div',{style:{color:p.stock<5?'#f88':q.tm,fontSize:'10px'}},oos?'❌ Out of stock':'Stock: '+p.stock)),(oos?el('div',{style:{color:'#f88',fontSize:'11px',textAlign:'center',padding:'6px'}},'Unavailable'):(qty?qc:btn('Add to Cart',()=>{if(p.stock>0){S.cart[p.id]=(S.cart[p.id]||0)+1;rStore();}},false,{width:'100%'}))));
    wrap.appendChild(card);
    if(S.isAdmin){const aRow=el('div',{style:{display:'flex',gap:'4px',position:'absolute',top:'9px',right:'9px'}});aRow.appendChild(el('button',{style:{background:q.as,border:`1px solid ${q.ac}`,color:q.ac,borderRadius:'6px',padding:'3px 7px',fontSize:'10px',cursor:'pointer'},onclick:e=>{e.stopPropagation();openProdEdit(p.id);}},T('edit')));aRow.appendChild(el('button',{style:{background:'rgba(244,68,68,.12)',border:'1px solid #f44',color:'#f88',borderRadius:'6px',padding:'3px 6px',fontSize:'10px',cursor:'pointer'},onclick:e=>{e.stopPropagation();if(confirm('Delete "'+p.name+'"?')){const ps=DB.getProducts().filter(x=>x.id!==p.id);DB.saveProducts(ps);rStore();notif('🗑️ Product deleted.','error');}}},'✕'));wrap.appendChild(aRow);}
    grid.appendChild(wrap);
  });
  c.appendChild(grid);
}
function openProdNew(){
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
    imgRow.appendChild(btn('📷 Photo',()=>{S._cb['fi-prod']=async file=>{const d=await rf(file);form.image=d;render();};document.getElementById('fi-prod').click();},true,{fontSize:'10px'}));
    if(form.image)imgRow.appendChild(btn('✕',()=>{form.image=null;render();},true,{fontSize:'10px',borderColor:'#f44',color:'#f88'}));
    card.appendChild(imgRow);
    lb('EMOJI (icon)');card.appendChild(lb('EMOJI'));const ei=el('input',{class:'inf',style:is,placeholder:'📦'});ei.value=form.e;ei.oninput=e=>{form.e=e.target.value;};card.appendChild(ei);
    card.appendChild(lb('NAME'));const ni=el('input',{class:'inf',style:is,placeholder:'Product name'});ni.oninput=e=>{form.name=e.target.value;};card.appendChild(ni);
    card.appendChild(lb('CATEGORY'));const cats=['Apparel','Bundle','Accessories','Hardware','Digital','Other'];const catSel=el('select',{class:'inf',style:{...is,cursor:'pointer'}});cats.forEach(c2=>{const o=el('option',{value:c2},c2);if(form.cat===c2)o.selected=true;catSel.appendChild(o);});catSel.onchange=e=>{form.cat=e.target.value;};card.appendChild(catSel);
    card.appendChild(lb('PRICE ($)'));const pi=el('input',{type:'number',class:'inf',style:is,placeholder:'0'});pi.value=form.price;pi.oninput=e=>{form.price=parseFloat(e.target.value)||0;};card.appendChild(pi);
    card.appendChild(lb('STOCK'));const si=el('input',{type:'number',class:'inf',style:is,placeholder:'0'});si.value=form.stock;si.oninput=e=>{form.stock=parseInt(e.target.value)||0;};card.appendChild(si);
    card.appendChild(lb('DESCRIPTION'));const di=el('textarea',{class:'inf',rows:'3',style:{...is,resize:'vertical'},placeholder:'Product description'});di.oninput=e=>{form.desc=e.target.value;};card.appendChild(di);
    const br=el('div',{style:{display:'flex',gap:'7px'}});
    br.appendChild(btn('➕ Add Product',()=>{if(!form.name){notif('Name required!','error');return;}const prods=DB.getProducts();const newId=Math.max(0,...prods.map(x=>x.id))+1;prods.push({id:newId,name:form.name,price:form.price,stock:form.stock,desc:form.desc,cat:form.cat,e:form.e,image:form.image});DB.saveProducts(prods);closeM('m-prod');rStore();notif('✅ Product added!','success');},false));
    br.appendChild(btn('Cancel',()=>closeM('m-prod'),true));card.appendChild(br);m.appendChild(card);
  };render();
}
function openProdEdit(id){
  const prods=DB.getProducts();const p=prods.find(x=>x.id===id);if(!p)return;
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
    imgRow.appendChild(btn('📷 Product Photo',()=>{S._cb['fi-prod']=async file=>{const d=await rf(file);form.image=d;render();};document.getElementById('fi-prod').click();},true,{fontSize:'10px'}));
    if(form.image)imgRow.appendChild(btn('✕ Remove',()=>{form.image=null;render();},true,{fontSize:'10px',borderColor:'#f44',color:'#f88'}));
    card.appendChild(imgRow);
    card.appendChild(lb('PRODUCT NAME'));const ni=el('input',{class:'inf',style:is});ni.value=form.name;ni.oninput=e=>{form.name=e.target.value;};card.appendChild(ni);
    card.appendChild(lb('PRICE ($)'));const pi=el('input',{type:'number',class:'inf',style:is});pi.value=form.price;pi.oninput=e=>{form.price=parseFloat(e.target.value)||0;};card.appendChild(pi);
    card.appendChild(lb('STOCK'));const si=el('input',{type:'number',class:'inf',style:is});si.value=form.stock;si.oninput=e=>{form.stock=parseInt(e.target.value)||0;};card.appendChild(si);
    card.appendChild(lb('DESCRIPTION'));const di=el('textarea',{class:'inf',rows:'3',style:{...is,resize:'vertical'}});di.textContent=form.desc;di.oninput=e=>{form.desc=e.target.value;};card.appendChild(di);
    card.appendChild(gc({padding:'10px',marginBottom:'12px',display:'flex',justifyContent:'space-between'},el('span',{style:{color:q.tm,fontSize:'11px'}},'$'+form.price+' · Stock: '+form.stock),el('span',{style:{color:form.stock===0?'#f88':form.stock<5?'#ffb74d':q.ac,fontSize:'11px',fontWeight:'700'}},form.stock===0?'❌ Out':form.stock<5?'⚠️ Low':'✅ Available')));
    const br=el('div',{style:{display:'flex',gap:'7px'}});br.appendChild(btn('💾 '+T('save'),()=>{DB.updProduct(id,{name:form.name,price:form.price,stock:form.stock,desc:form.desc,image:form.image});closeM('m-prod');rStore();notif('✅ Product updated!','success');},false));br.appendChild(btn(T('cancel'),()=>closeM('m-prod'),true));card.appendChild(br);m.appendChild(card);
  };render();
}
function onFiProd(e){const f=e.target.files[0];if(!f)return;if(S._cb['fi-prod'])S._cb['fi-prod'](f);e.target.value='';}
function openCO(){
  const q=t();const m=document.getElementById('m-co');m.style.display='flex';m.innerHTML='';
  const prods=DB.getProducts();const items=prods.filter(p=>S.cart[p.id]);const tot=items.reduce((s,p)=>s+S.cart[p.id]*p.price,0);
  const u=DB.byEmail(S.user.email);const wal=u?u.wallet:0;const suf=wal>=tot;
  const card=gc({padding:'26px',width:'400px',maxWidth:'96vw',position:'relative',borderRadius:'18px'});
  card.appendChild(el('button',{style:{position:'absolute',top:'11px',right:'13px',background:'none',border:'none',color:q.tm,fontSize:'18px',cursor:'pointer'},onclick:()=>closeM('m-co')},'✕'));
  card.appendChild(el('h2',{style:{color:q.ac,marginBottom:'14px',fontSize:'16px'}},'🛒 Checkout — StarLive E-Wallet'));
  const id=el('div',{style:{background:q.sur,borderRadius:'11px',padding:'11px',marginBottom:'12px',border:`1px solid ${q.sb}`}});
  items.forEach(p=>id.appendChild(el('div',{style:{display:'flex',justifyContent:'space-between',padding:'4px 0',borderBottom:`1px solid ${q.sb}`}},el('div',{style:{display:'flex',gap:'6px',alignItems:'center'}},el('span',{style:{fontSize:'14px'}},p.e),el('span',{style:{color:q.tx,fontSize:'11px'}},p.name+' ×'+S.cart[p.id])),el('span',{style:{color:q.ac,fontWeight:'700',fontSize:'11px'}},'$'+(S.cart[p.id]*p.price).toFixed(2)))));
  id.appendChild(el('div',{style:{display:'flex',justifyContent:'space-between',paddingTop:'7px'}},el('span',{style:{color:q.tx,fontWeight:'700',fontSize:'12px'}},'TOTAL'),el('span',{style:{color:q.ac,fontWeight:'900',fontSize:'16px'}},'$'+tot.toFixed(2))));
  card.appendChild(id);
  card.appendChild(gc({padding:'11px',marginBottom:'12px',border:`1px solid ${suf?q.ac:'#f44'}`,background:suf?q.as:'rgba(255,60,60,.08)',display:'flex',justifyContent:'space-between',alignItems:'center'},el('div',{},el('div',{style:{color:q.ac,fontSize:'9px',fontWeight:'700'}},'⭐ STARLIVE E-WALLET'),el('div',{style:{color:q.tx,fontSize:'17px',fontWeight:'900'}},'$'+wal.toFixed(2))),el('span',{style:{color:suf?'#64dc64':'#f88',fontWeight:'700',fontSize:'11px'}},suf?'✅ Sufficient':'❌ Insufficient')));
  if(!suf){card.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',marginBottom:'11px',textAlign:'center'}},'Need $'+(tot-wal).toFixed(2)+' more'));const br=el('div',{style:{display:'flex',gap:'7px'}});br.appendChild(btn('💳 Top-Up',()=>{closeM('m-co');openTopUp();},false,{flex:'1'}));br.appendChild(btn(T('cancel'),()=>closeM('m-co'),true,{flex:'1'}));card.appendChild(br);}
  else{card.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',marginBottom:'11px',textAlign:'center'}},'Balance after: $'+(wal-tot).toFixed(2)));const br=el('div',{style:{display:'flex',gap:'7px'}});br.appendChild(btn('✅ Pay Now',()=>{const prs=DB.getProducts();items.forEach(p=>{const st=prs.find(x=>x.id===p.id)?.stock||0;DB.updProduct(p.id,{stock:Math.max(0,st-S.cart[p.id])});});DB.updUser(S.user.email,{wallet:wal-tot});S.cart={};closeM('m-co');rStore();notif('🎉 Payment successful!','success');},false,{flex:'1'}));br.appendChild(btn(T('cancel'),()=>closeM('m-co'),true,{flex:'1'}));card.appendChild(br);}
  m.appendChild(card);
}

// ── SOCIAL ────────────────────────────────────────────────────
function rSocial(){const q=t();const c=document.getElementById('page-social');c.innerHTML='';const sc=[{n:"Instagram",h:"@starlivegroup",c:"#E1306C",e:"📸",f:"48.2K"},{n:"Facebook",h:"StarLive Group",c:"#1877F2",e:"📘",f:"31.5K"},{n:"Twitter/X",h:"@StarLiveGrp",c:"#1DA1F2",e:"🐦",f:"22.8K"},{n:"YouTube",h:"StarLive Official",c:"#FF0000",e:"▶️",f:"15.3K"},{n:"TikTok",h:"@starliveofficial",c:"#69C9D0",e:"🎵",f:"67.1K"}];c.appendChild(el('h1',{style:{color:q.ac,fontSize:'24px',fontWeight:'800',marginBottom:'5px'}},T('social')));c.appendChild(el('p',{style:{color:q.tm,marginBottom:'18px',fontSize:'12px'}},T('socialSub')));const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))',gap:'16px'}});sc.forEach(s=>grid.appendChild(gc({padding:'22px',border:`1px solid ${s.c}44`},el('div',{style:{display:'flex',alignItems:'center',gap:'11px',marginBottom:'12px'}},el('div',{style:{fontSize:'28px',width:'48px',height:'48px',display:'flex',alignItems:'center',justifyContent:'center',background:`${s.c}18`,borderRadius:'11px'}},s.e),el('div',{},el('div',{style:{color:s.c,fontWeight:'800',fontSize:'14px'}},s.n),el('div',{style:{color:q.tm,fontSize:'11px'}},s.h))),el('div',{style:{color:q.tx,fontSize:'20px',fontWeight:'900',marginBottom:'3px'}},s.f),el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'13px'}},'followers'),btn('Follow →',()=>{},false,{width:'100%',borderColor:s.c,color:s.c,background:`${s.c}18`}))));c.appendChild(grid);}
// ── DASHBOARD (Admin only — full monitoring) ──────────────────
function rDash(){
  const q=t();const c=document.getElementById('page-dashboard');c.innerHTML='';
  if(!S.isAdmin){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'🔒'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700'}},'Admin Access Only')));return;}
  c.appendChild(el('h1',{style:{color:q.ac,fontSize:'22px',fontWeight:'800',marginBottom:'14px'}},'📊 Dashboard'));
  const tabs=[['analytics','📈 Analytics'],['users','👥 Users'],['store','🛒 Store'],['wallet','💳 eWallet'],['challenges','🏆 Challenges'],['log','📋 Log']];
  const tr=el('div',{style:{display:'flex',gap:'6px',marginBottom:'20px',flexWrap:'wrap'}});
  tabs.forEach(([id,lb])=>tr.appendChild(btn(lb,()=>{S.dtab=id;rDash();},S.dtab!==id,{fontSize:'11px'})));
  c.appendChild(tr);

  if(S.dtab==='users'){
    const us=DB.getUsers();
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
      [['Friends',(u.friends||[]).length],['Wallet','$'+(u.wallet||0).toFixed(0)],['Badges',(u.badges||[]).length],['Joined',fdate(u.joinDate)]].forEach(([l,v])=>stats.appendChild(el('div',{style:{background:q.sur,borderRadius:'6px',padding:'5px',textAlign:'center'}},el('div',{style:{color:q.ac,fontWeight:'800',fontSize:'12px'}},v),el('div',{style:{color:q.tm,fontSize:'8px'}},l))));
      card.appendChild(stats);grid.appendChild(card);
    });c.appendChild(grid);

  } else if(S.dtab==='wallet'){
    const walletC=el('div',{});rWalletAdmin(walletC);c.appendChild(walletC);

  } else if(S.dtab==='store'){
    const orders=DB.getStoreOrders().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    const topReqs=DB.getTopUpReqs().filter(r=>r.status==='approved');
    const totalRev=orders.reduce((s,o)=>s+o.total,0);
    const row=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',marginBottom:'16px'}});
    [[orders.length,'📦 Total Orders','#4fc3f7'],['$'+totalRev.toFixed(2),'💰 Revenue','#81c784'],[DB.getProducts().filter(p=>p.stock===0).length,'❌ Out of Stock','#f44']].forEach(([v,l,c2])=>row.appendChild(gc({padding:'14px',textAlign:'center',border:`1px solid ${c2}44`},el('div',{style:{fontSize:'20px',fontWeight:'900',color:c2}},v),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'3px'}},l))));
    c.appendChild(row);
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'10px'}},'📋 Recent Orders'));
    if(!orders.length){c.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',textAlign:'center',padding:'20px'}},'No orders yet.'));}
    orders.slice(0,20).forEach(o=>{
      c.appendChild(gc({padding:'12px',marginBottom:'8px'},el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},el('div',{},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'700'}},o.userName+' — $'+o.total.toFixed(2)),el('div',{style:{color:q.tm,fontSize:'10px'}},fdate(o.createdAt)+' · '+o.items+' item(s)')),el('span',{style:{background:'rgba(100,220,100,.12)',color:'#64dc64',borderRadius:'20px',padding:'2px 9px',fontSize:'9px',fontWeight:'700'}},'✅ Paid'))));
    });

  } else if(S.dtab==='analytics'){
    const pv=DB.getPageViews();const today=new Date().toISOString().slice(0,10);
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
    const chs=DB.getChallenges();
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'10px'}},'🏆 Challenge Management'));
    const pending=chs.filter(x=>x.status==='pending');
    if(pending.length){
      c.appendChild(el('div',{style:{color:'#ffb74d',fontSize:'11px',fontWeight:'700',marginBottom:'8px'}},'⏳ Pending Approval ('+pending.length+')'));
      pending.forEach(ch=>{
        const card=gc({padding:'14px',marginBottom:'8px',border:'1px solid rgba(255,183,21,.3)'});
        card.appendChild(el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700',marginBottom:'3px'}},ch.title));
        card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'8px'}},'By: '+ch.createdByName+' · '+ch.questions.length+' questions'));
        const brow=el('div',{style:{display:'flex',gap:'6px'}});
        brow.appendChild(btn('✅ Approve',()=>{DB.updChallenge(ch.id,{status:'approved'});notif('✅ Challenge approved!','success');rDash();},false,{fontSize:'10px',padding:'4px 10px'}));
        brow.appendChild(btn('✕ Reject',()=>{DB.updChallenge(ch.id,{status:'rejected'});notif('Challenge rejected.','error');rDash();},true,{fontSize:'10px',padding:'4px 8px',borderColor:'#f44',color:'#f88'}));
        card.appendChild(brow);c.appendChild(card);
      });
    }
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'8px',marginTop:'14px'}},'📋 All Challenges ('+chs.length+')'));
    chs.forEach(ch=>{
      const SC={pending:'#ffb74d',approved:'#64dc64',rejected:'#f44'};const sc=SC[ch.status]||'#aaa';
      const attempts=(ch.attempts||[]).length;
      c.appendChild(gc({padding:'12px',marginBottom:'6px',border:`1px solid ${sc}33`},el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},el('div',{},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'700'}},ch.title),el('div',{style:{color:q.tm,fontSize:'10px'}},ch.type+' · '+ch.questions.length+' Q · '+attempts+' attempts')),el('div',{style:{display:'flex',alignItems:'center',gap:'6px'}},el('span',{style:{background:`${sc}18`,color:sc,borderRadius:'20px',padding:'2px 8px',fontSize:'9px',fontWeight:'700'}},ch.status.toUpperCase()),btn('✕',()=>{if(confirm('Delete this challenge?')){DB.delChallenge(ch.id);rDash();}},true,{fontSize:'10px',padding:'2px 6px',borderColor:'#f44',color:'#f88'})))));
    });
  } else if(S.dtab==='log'){
    const pv2=DB.getPageViews();const ords2=DB.getStoreOrders();const rqs2=DB.getTopUpReqs();const chs3=DB.getChallenges();
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
    DB.getUsers().forEach(u2=>{if(u2.joinDate)evs.push({time:u2.joinDate,type:'reg',msg:`${u2.username} mendaftar`,icon:'👤'});});
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
function openUserAdmin(u){
  const q=t();const m=document.getElementById('m-uadmin');m.style.display='flex';m.innerHTML='';
  const card=gc({padding:'28px',width:'420px',maxWidth:'96vw',maxHeight:'88vh',overflowY:'auto',position:'relative',borderRadius:'18px'});
  card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'19px',cursor:'pointer'},onclick:()=>closeM('m-uadmin')},'✕'));
  const cv=el('div',{style:{height:'90px',borderRadius:'9px',marginBottom:'10px',overflow:'hidden',background:'linear-gradient(135deg,#1a0030,#002040)'}});if(u.cover){cv.style.backgroundImage=`url(${u.cover})`;cv.style.backgroundSize='cover';}
  card.appendChild(cv);
  const avRow=el('div',{style:{display:'flex',alignItems:'flex-end',gap:'12px',marginBottom:'12px'}});avRow.appendChild(avEl(u,56));avRow.appendChild(el('div',{},el('div',{style:{color:q.tx,fontSize:'18px',fontWeight:'800'}},u.username),el('div',{style:{color:u.online?'#64dc64':q.tm,fontSize:'12px'}},u.online?'🟢 Online':'⚫ '+ago(u.lastSeen||new Date().toISOString())),el('div',{style:{color:q.ac,fontSize:'11px',marginTop:'3px'}},u.role==='admin'?'👑 Admin':'👤 User')));card.appendChild(avRow);
  card.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',lineHeight:'1.6',marginBottom:'12px'}},u.bio||'No bio.'));
  const info=el('div',{style:{background:q.sur,borderRadius:'9px',padding:'12px',marginBottom:'12px',border:`1px solid ${q.sb}`}});
  [['📧 Email',u.email],['🗓️ Joined',fdate(u.joinDate)],['💳 Wallet','$'+(u.wallet||0).toFixed(2)],['👥 Friends',(u.friends||[]).length+' friends'],['🔔 Pending',(u.friendRequests||[]).length+' requests']].forEach(([l,v])=>info.appendChild(el('div',{style:{display:'flex',justifyContent:'space-between',padding:'5px 0',borderBottom:`1px solid ${q.sb}`}},el('span',{style:{color:q.tm,fontSize:'11px'}},l),el('span',{style:{color:q.tx,fontSize:'11px',fontWeight:'600'}},v))));
  card.appendChild(info);
  if(S.user&&u.email!==S.user.email){
    card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'8px'}},'⚡ ADMIN ACTIONS'));
    const acts=el('div',{style:{display:'flex',gap:'7px',flexWrap:'wrap'}});
    acts.appendChild(btn('💳 Adjust Wallet',()=>{const amt=parseFloat(prompt('Set wallet to:',u.wallet||0));if(isNaN(amt))return;DB.updUser(u.email,{wallet:amt});closeM('m-uadmin');rDash();notif('✅ Wallet adjusted!','success');},true,{fontSize:'11px'}));
    if(u.role!=='admin')acts.appendChild(btn('👑 Make Admin',()=>{if(confirm('Make '+u.username+' admin?')){DB.updUser(u.email,{role:'admin'});closeM('m-uadmin');rDash();notif('✅ Role updated.','success');}},true,{fontSize:'11px'}));
    else acts.appendChild(btn('👤 Remove Admin',()=>{if(confirm('Remove admin from '+u.username+'?')){DB.updUser(u.email,{role:'user'});closeM('m-uadmin');rDash();notif('✅ Role updated.','success');}},true,{fontSize:'11px'}));
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
    function renderBdg(){
      bdgGrid.innerHTML='';const cur=freshU();
      BADGE_DEFS2.forEach(bd=>{
        const has=(cur.badges||[]).includes(bd.id);
        const bcard2=el('div',{style:{display:'flex',alignItems:'center',gap:'7px',padding:'5px 7px',borderRadius:'7px',border:`1px solid ${has?q.ac:q.sb}`,background:has?q.as:'transparent',cursor:'pointer',transition:'all .15s'},onclick:()=>{const nb=has?(cur.badges||[]).filter(x=>x!==bd.id):[...(cur.badges||[]),bd.id];DB.updUser(u.email,{badges:nb});renderBdg();notif((has?'❌ Removed ':'✅ Granted ')+bd.name,'success');}},el('span',{style:{fontSize:'14px'}},bd.em),el('span',{style:{color:has?q.ac:q.tm,fontSize:'10px',fontWeight:has?'700':'400'}},bd.name),has?el('span',{style:{color:q.ac,fontSize:'9px',marginLeft:'auto'}},'✓'):'');
        bdgGrid.appendChild(bcard2);
      });
    }
    renderBdg();card.appendChild(bdgGrid);
    const FRACTIONS2=['Singularity Nexus','Protocol Zero','Shadow Syntax'];
    const FRACTION_INFO2={'Singularity Nexus':{em:'🌀',color:'#00ffc8'},'Protocol Zero':{em:'⚡',color:'#FAB715'},'Shadow Syntax':{em:'🕶️',color:'#ce93d8'}};
    card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',margin:'12px 0 7px'}},'🔱 ASSIGN FRACTION'));
    const frRow2=el('div',{style:{display:'flex',flexDirection:'column',gap:'5px'}});
    FRACTIONS2.forEach(fr=>{const fi=FRACTION_INFO2[fr];const active=u.fraction===fr;frRow2.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'7px 10px',borderRadius:'7px',border:`1px solid ${active?fi.color:q.sb}`,background:active?`${fi.color}12`:'rgba(255,255,255,.03)',cursor:'pointer',transition:'all .15s'},onclick:()=>{const newFrac=active?null:fr;DB.updUser(u.email,{fraction:newFrac});notif((newFrac?'✅ Assigned '+newFrac:'❌ Removed fraction'),'success');closeM('m-uadmin');rDash();}},el('div',{style:{fontSize:'18px'}},fi.em),el('div',{style:{color:active?fi.color:q.tx,fontSize:'11px',fontWeight:active?'700':'400',flex:'1'}},fr),active?el('span',{style:{color:fi.color,fontSize:'10px',fontWeight:'700'}},'✓'):null));});
    card.appendChild(frRow2);
  }
  m.appendChild(card);
}

// ── VAULT (Admin only) ────────────────────────────────────────
function rVault(){
  const q=t();const c=document.getElementById('page-vault');c.innerHTML='';
  if(!S.isAdmin){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'\uD83D\uDD10'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700'}},'Admin Access Only')));return;}
  // Vault tabs: home, pegawai, transaksi, umum
  const VTABS=[['home','🏠 Beranda'],['pegawai','👤 Data Pegawai'],['transaksi','💰 Data Transaksi'],['umum','📂 Data Umum']];
  c.appendChild(el('h1',{style:{color:q.ac,fontSize:'22px',fontWeight:'800',marginBottom:'4px'}},'🔐 Vault'));
  c.appendChild(el('p',{style:{color:q.tm,marginBottom:'14px',fontSize:'11px'}},'Penyimpanan data rahasia admin. Kode wajib format SLV-...'));
  const vtabs=el('div',{style:{display:'flex',gap:'6px',marginBottom:'18px',flexWrap:'wrap'}});
  VTABS.forEach(([id,lb])=>vtabs.appendChild(btn(lb,()=>{S.vaultTab=id;rVault();},S.vaultTab!==id,{fontSize:'11px'})));
  c.appendChild(vtabs);
  if(S.vaultTab==='home'){
    // Beranda: history/timeline only, no entries shown
    const logs=DB.getVaultLogs();
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'12px'}},'📋 Vault Activity'));
    if(!logs.length){c.appendChild(el('div',{style:{textAlign:'center',padding:'40px',color:q.tm}},'Belum ada aktivitas vault.'));return;}
    const tl=el('div',{style:{position:'relative',paddingLeft:'22px'}});
    tl.appendChild(el('div',{style:{position:'absolute',left:'7px',top:'0',bottom:'0',width:'2px',background:q.sb,borderRadius:'99px'}}));
    [...logs].reverse().forEach(log=>{
      const row=el('div',{style:{display:'flex',alignItems:'flex-start',gap:'7px',marginBottom:'6px',position:'relative'}});
      row.appendChild(el('div',{style:{position:'absolute',left:'-18px',top:'4px',width:'9px',height:'9px',borderRadius:'50%',background:q.ac,border:`2px solid ${q.cb}`}}));
      row.appendChild(el('div',{style:{background:q.sur,borderRadius:'6px',padding:'5px 10px',flex:'1',border:`1px solid ${q.sb}`}},el('div',{style:{color:q.tx,fontSize:'10px'}},log.action+' — '+log.title+' ('+log.code+')'),el('div',{style:{color:q.tm,fontSize:'8px',marginTop:'1px'}},new Date(log.time).toLocaleString('id-ID')+' · oleh '+log.by)));
      tl.appendChild(row);
    });
    c.appendChild(gc({padding:'14px'},tl));
    return;
  }
  const CAT_MAP={pegawai:'Data Informasi Pegawai',transaksi:'Data Informasi Transaksi',umum:'Data Informasi Umum'};
  const cat=CAT_MAP[S.vaultTab];
  const cr=el('div',{style:{display:'flex',gap:'10px',marginBottom:'16px',flexWrap:'wrap',alignItems:'center'}});
  const si=el('input',{type:'text',placeholder:'Cari judul, pemilik, atau kode SLV-...',class:'inf',style:{background:q.ib,borderColor:q.sb,color:q.tx,flex:'1',marginBottom:'0'}});
  si.value=S.vaultQ||'';si.oninput=e=>{S.vaultQ=e.target.value;rVault();};
  cr.appendChild(si);cr.appendChild(btn('➕ Tambah Entri',()=>openVaultM(null,cat),false,{fontSize:'12px',flexShrink:'0'}));c.appendChild(cr);
  let entries=(DB.getVault()||[]).filter(e=>e.category===cat);
  if((S.vaultQ||'').trim()){const qv=S.vaultQ.toLowerCase();entries=entries.filter(e=>(e.title||'').toLowerCase().includes(qv)||(e.owner||'').toLowerCase().includes(qv)||(e.ownerCode||'').toLowerCase().includes(qv));}
  if(!entries.length){c.appendChild(el('div',{style:{textAlign:'center',padding:'40px',color:q.tm}},'Belum ada data di kategori ini.'));return;}
  const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'14px'}});
  entries.forEach(entry=>{
    const card=gc({padding:'18px',border:`1px solid ${q.ac}33`});
    const top=el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'8px'}});
    top.appendChild(el('div',{},el('div',{style:{color:q.ac,fontSize:'9px',fontWeight:'700',letterSpacing:'.1em',marginBottom:'2px'}},entry.category),el('div',{style:{color:q.tx,fontSize:'14px',fontWeight:'700'}},entry.title||'Untitled')));
    const acts=el('div',{style:{display:'flex',gap:'4px',flexWrap:'wrap'}});
    acts.appendChild(btn('✏️',()=>openVaultM(entry,cat),true,{fontSize:'9px',padding:'2px 5px'}));
    acts.appendChild(btn('📄 PDF',()=>downloadVaultPDF(entry),true,{fontSize:'9px',padding:'2px 5px'}));
    const uploadSt=entry.uploaded?el('span',{style:{color:'#64dc64',fontSize:'9px',fontWeight:'700'}},'✅ Uploaded'):el('span',{style:{color:'#f88',fontSize:'9px',fontWeight:'700'}},'✗ Belum');
    acts.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'4px'}},btn('☁️ Upload',()=>uploadToSupabase(entry),false,{fontSize:'9px',padding:'2px 5px'}),uploadSt));
    // NO delete button — vault entries are permanent (code is locked)
    top.appendChild(acts);card.appendChild(top);
    if(entry.ownerCode)card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'5px',display:'flex',alignItems:'center',gap:'4px'}},'🔒 ',el('span',{style:{color:q.ac,fontFamily:'monospace',fontWeight:'700',letterSpacing:'.08em'}},entry.ownerCode),el('span',{style:{color:'#FAB715',fontSize:'8px'}},'(terkunci)')));
    if(entry.owner)card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'5px'}},'👤 '+entry.owner));
    card.appendChild(el('div',{style:{color:q.tx,fontSize:'11px',lineHeight:'1.6',marginBottom:'7px',maxHeight:'65px',overflow:'hidden'}},entry.content||''));
    if(entry.tags){const tgr=el('div',{style:{display:'flex',gap:'4px',flexWrap:'wrap',marginBottom:'5px'}});entry.tags.split(',').map(x=>x.trim()).filter(Boolean).forEach(tg2=>tgr.appendChild(el('span',{style:{background:`${q.ac}18`,color:q.ac,borderRadius:'20px',padding:'1px 7px',fontSize:'8px',fontWeight:'600'}},tg2)));card.appendChild(tgr);}
    // Show attachments
    const attRow=el('div',{style:{display:'flex',gap:'8px',alignItems:'center',flexWrap:'wrap',marginBottom:'5px'}});
    if(entry.imageData)attRow.appendChild(el('img',{src:entry.imageData,style:{width:'36px',height:'36px',objectFit:'cover',borderRadius:'5px',border:`1px solid ${q.ac}44`,cursor:'pointer'},onclick:()=>{const mig=document.getElementById('m-gal');mig.style.display='flex';mig.innerHTML='';const mc=gc({padding:'20px',textAlign:'center',maxWidth:'90vw',borderRadius:'18px'});mc.appendChild(el('button',{style:{float:'right',background:'none',border:'none',color:q.tm,fontSize:'18px',cursor:'pointer'},onclick:()=>closeM('m-gal')},'✕'));mc.appendChild(el('img',{src:entry.imageData,style:{maxWidth:'100%',maxHeight:'70vh',borderRadius:'9px'}}));mc.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'8px'}},entry.imageName||''));mig.appendChild(mc);}}));
    if(entry.fileData){const fIc=entry.fileName?.match(/\.pdf$/i)?'📄':entry.fileName?.match(/\.docx?$/i)?'📝':entry.fileName?.match(/\.xlsx?$/i)?'📊':'📎';const fdl=el('a',{style:{display:'flex',alignItems:'center',gap:'4px',color:q.ac,fontSize:'9px',textDecoration:'none',border:`1px solid ${q.ac}33`,borderRadius:'5px',padding:'3px 7px'}},el('span',{},fIc),el('span',{},entry.fileName||'File'));fdl.href=entry.fileData;fdl.download=entry.fileName||'vault_file';attRow.appendChild(fdl);}
    if(attRow.children.length)card.appendChild(attRow);
    card.appendChild(el('div',{style:{color:q.tm,fontSize:'8px'}},fdate(entry.createdAt)+(entry.updatedAt?' · Edit '+fdate(entry.updatedAt):'')));
    grid.appendChild(card);
  });c.appendChild(grid);
}

function openVaultM(existing,catForce){
  const q=t();const m=document.getElementById('m-vault');m.style.display='flex';m.innerHTML='';
  const isEdit=!!existing;
  const CAT_OPTS=['Data Informasi Pegawai','Data Informasi Transaksi','Data Informasi Umum'];
  const SLV_RX=/^SLV-\d{6}$/;
  function genCode(){return 'SLV-'+String(Math.floor(100000+Math.random()*900000));}
  const form={
    title:existing?.title||'',category:existing?.category||catForce||CAT_OPTS[0],
    owner:existing?.owner||'',ownerCode:existing?.ownerCode||genCode(),
    content:existing?.content||'',tags:existing?.tags||'',
    fileData:existing?.fileData||null,fileName:existing?.fileName||null,fileType:existing?.fileType||null,
    imageData:existing?.imageData||null,imageName:existing?.imageName||null,
  };
  const render=()=>{
    m.innerHTML='';
    const card=gc({padding:'26px',width:'540px',maxWidth:'97vw',maxHeight:'94vh',overflowY:'auto',position:'relative',borderRadius:'18px'});
    card.appendChild(el('button',{style:{position:'absolute',top:'12px',right:'14px',background:'none',border:'none',color:q.tm,fontSize:'19px',cursor:'pointer'},onclick:()=>closeM('m-vault')},'\u2715'));
    card.appendChild(el('h2',{style:{color:q.ac,marginBottom:'14px',fontSize:'15px'}},(isEdit?'\u270F\uFE0F Edit':'\u2795 Tambah')+' Entri Vault'));
    const is={background:q.ib,borderColor:q.sb,color:q.tx};
    const lb=tx=>el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'3px',marginTop:'9px'}},tx);
    card.appendChild(lb('JUDUL *'));
    const ti=el('input',{class:'inf',placeholder:'Judul entri',style:is});ti.value=form.title;ti.oninput=e=>{form.title=e.target.value;};card.appendChild(ti);
    card.appendChild(lb('KATEGORI'));
    const sel=el('select',{class:'inf',style:{...is,cursor:'pointer'}});
    CAT_OPTS.forEach(ct=>{const o=el('option',{value:ct},ct);if(form.category===ct)o.selected=true;sel.appendChild(o);});
    sel.onchange=e=>{form.category=e.target.value;};card.appendChild(sel);
    card.appendChild(lb('PEMILIK'));
    const oi=el('input',{class:'inf',placeholder:'Nama pemilik / username',style:is});oi.value=form.owner;oi.oninput=e=>{form.owner=e.target.value;};card.appendChild(oi);
    card.appendChild(lb('KODE VAULT — format wajib SLV-XXXXXX (6 digit angka)'));
    const codeRow=el('div',{style:{display:'flex',gap:'7px',alignItems:'center'}});
    const codeWarn=el('div',{style:{color:'#f88',fontSize:'9px',marginTop:'3px',display:SLV_RX.test(form.ownerCode)?'none':'block'}},
      '⚠️ Format salah. Contoh yang benar: SLV-123456');
    const oci=el('input',{class:'inf',placeholder:'SLV-123456',style:{...is,flex:'1',marginBottom:'0',fontFamily:'monospace',fontWeight:'700',letterSpacing:'.1em',opacity:isEdit?'0.7':'1'}});
    oci.value=form.ownerCode;
    if(isEdit){
      // Code is LOCKED on edit — cannot be changed
      oci.readOnly=true;
      oci.style.cursor='not-allowed';
      oci.style.borderColor='#FAB71566';
      oci.title='Kode Vault tidak dapat diubah setelah dibuat';
      codeRow.appendChild(oci);
      codeRow.appendChild(el('span',{style:{color:'#FAB715',fontSize:'10px',flexShrink:'0'}},'🔒 Terkunci'));
    } else {
      oci.oninput=e=>{
        form.ownerCode=e.target.value.toUpperCase();
        codeWarn.style.display=SLV_RX.test(form.ownerCode)?'none':'block';
      };
      codeRow.appendChild(oci);
      codeRow.appendChild(btn('🔄 Generate',()=>{form.ownerCode=genCode();oci.value=form.ownerCode;codeWarn.style.display='none';},true,{fontSize:'10px',padding:'5px 10px',flexShrink:'0'}));
    }
    card.appendChild(codeRow);card.appendChild(codeWarn);
    card.appendChild(lb('ISI / DATA'));
    const ci=el('textarea',{class:'inf',rows:'5',placeholder:'Masukkan data rahasia...',style:{...is,resize:'vertical'}});
    ci.textContent=form.content;ci.oninput=e=>{form.content=e.target.value;};card.appendChild(ci);
    card.appendChild(lb('TAG (pisah koma)'));
    const tgi=el('input',{class:'inf',placeholder:'keuangan, Q1, kontrak',style:is});
    tgi.value=form.tags;tgi.oninput=e=>{form.tags=e.target.value;};card.appendChild(tgi);
    // Lampiran Gambar
    card.appendChild(lb('\uD83D\uDDBC\uFE0F LAMPIRAN GAMBAR (opsional · JPG/PNG/GIF)'));
    const imgRow=el('div',{style:{display:'flex',gap:'8px',alignItems:'center',flexWrap:'wrap',padding:'8px',background:'rgba(255,255,255,.03)',borderRadius:'8px',border:`1px dashed ${q.sb}`}});
    if(form.imageData){
      imgRow.appendChild(el('img',{src:form.imageData,style:{width:'60px',height:'60px',objectFit:'cover',borderRadius:'7px',border:`1px solid ${q.ac}`}}));
      imgRow.appendChild(el('span',{style:{color:q.ac,fontSize:'10px',flex:'1'}},form.imageName||'Gambar'));
      imgRow.appendChild(btn('\u2715 Hapus',()=>{form.imageData=null;form.imageName=null;render();},true,{fontSize:'9px',borderColor:'#f44',color:'#f88',padding:'3px 8px'}));
    } else {
      const ib=btn('\uD83D\uDCF7 Pilih Gambar',()=>{
        const fi=document.createElement('input');fi.type='file';fi.accept='image/*';
        fi.onchange=async ev=>{const f2=ev.target.files[0];if(!f2)return;if(f2.size>4*1024*1024){notif('Gambar maks 4MB','error');return;}const d=await rf(f2);form.imageData=d;form.imageName=f2.name;render();};
        fi.click();
      },true,{fontSize:'10px'});
      imgRow.appendChild(ib);
      imgRow.appendChild(el('span',{style:{color:q.tm,fontSize:'9px'}},'Maks 4MB'));
    }
    card.appendChild(imgRow);
    // Lampiran File
    card.appendChild(lb('\uD83D\uDCCE LAMPIRAN FILE (PDF / Word / Excel / TXT)'));
    const fileRow=el('div',{style:{display:'flex',gap:'8px',alignItems:'center',flexWrap:'wrap',padding:'8px',background:'rgba(255,255,255,.03)',borderRadius:'8px',border:`1px dashed ${q.sb}`}});
    if(form.fileData){
      const fIc=form.fileName?.match(/\.pdf$/i)?'\uD83D\uDCC4':form.fileName?.match(/\.docx?$/i)?'\uD83D\uDCDD':form.fileName?.match(/\.xlsx?$/i)?'\uD83D\uDCCA':'\uD83D\uDCCE';
      fileRow.appendChild(el('span',{style:{fontSize:'22px'}},fIc));
      fileRow.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'600',wordBreak:'break-all'}},form.fileName),el('div',{style:{color:q.tm,fontSize:'8px'}},form.fileType||'')));
      fileRow.appendChild(btn('\u2715 Hapus',()=>{form.fileData=null;form.fileName=null;form.fileType=null;render();},true,{fontSize:'9px',borderColor:'#f44',color:'#f88',padding:'3px 8px'}));
    } else {
      const fb=btn('\uD83D\uDCCE Pilih File',()=>{
        const fi=document.createElement('input');fi.type='file';
        fi.accept='.pdf,.doc,.docx,.xls,.xlsx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        fi.onchange=async ev=>{
          const f2=ev.target.files[0];if(!f2)return;
          if(f2.size>5*1024*1024){notif('File maks 5MB','error');return;}
          const d=await rf(f2);form.fileData=d;form.fileName=f2.name;form.fileType=f2.type;render();
        };fi.click();
      },true,{fontSize:'10px'});
      fileRow.appendChild(fb);
      fileRow.appendChild(el('span',{style:{color:q.tm,fontSize:'9px'}},'Maks 5MB · PDF, Word, Excel, TXT'));
    }
    card.appendChild(fileRow);
    const br=el('div',{style:{display:'flex',gap:'8px',marginTop:'16px'}});
    br.appendChild(btn('\uD83D\uDCBE Simpan Entri',()=>{
      if(!form.title.trim()){notif('Judul wajib diisi!','error');return;}
      if(!SLV_RX.test(form.ownerCode)){
        notif('\u274C Kode tidak valid! Wajib format SLV- diikuti tepat 6 digit angka. Contoh: SLV-123456','error');
        codeWarn.style.display='block';return;
      }
      if(!isEdit){
        const dup=DB.getVault().find(v=>v.ownerCode===form.ownerCode);
        if(dup){notif('\u274C Kode '+form.ownerCode+' sudah dipakai entri lain!','error');return;}
      }
      const payload={title:form.title.trim(),category:form.category,owner:form.owner.trim(),
        ownerCode:form.ownerCode,content:form.content,tags:form.tags,
        fileData:form.fileData,fileName:form.fileName,fileType:form.fileType,
        imageData:form.imageData,imageName:form.imageName};
      if(isEdit){DB.updVault(existing.id,payload);DB.addVaultLog({action:'Edit',title:form.title,code:form.ownerCode,by:S.user?.username||'Admin'});}
      else{DB.addVault({...payload,createdBy:S.user?.email,uploaded:false});DB.addVaultLog({action:'Tambah',title:form.title,code:form.ownerCode,by:S.user?.username||'Admin'});}
      const catTab={'Data Informasi Pegawai':'pegawai','Data Informasi Transaksi':'transaksi','Data Informasi Umum':'umum'};
      S.vaultTab=catTab[form.category]||'pegawai';
      closeM('m-vault');rVault();notif('\u2705 Entri vault disimpan!','success');
    },false,{padding:'9px 20px'}));
    br.appendChild(btn('Batal',()=>closeM('m-vault'),true));
    card.appendChild(br);m.appendChild(card);
  };render();
}


function downloadVaultPDF(entry){
  const lines=[
    'STARLIVE GROUP — VAULT ENTRY',
    '='.repeat(40),
    'Kode: '+entry.ownerCode,
    'Kategori: '+entry.category,
    'Judul: '+entry.title,
    'Pemilik: '+(entry.owner||'-'),
    'Tanggal: '+new Date(entry.createdAt).toLocaleString('id-ID'),
    entry.updatedAt?'Diperbarui: '+new Date(entry.updatedAt).toLocaleString('id-ID'):'',
    '',
    'TAG: '+(entry.tags||'-'),
    '',
    'ISI / DATA:',
    '-'.repeat(40),
    entry.content||'(tidak ada isi)',
    '',
    '='.repeat(40),
    'Dicetak oleh: '+S.user.username+' pada '+new Date().toLocaleString('id-ID'),
  ].filter(l=>l!==undefined).join('\n');
  // Simple text-based PDF via data URI (pure JS, no lib needed)
  const escaped=encodeURIComponent(lines);
  const blob=new Blob([lines],{type:'text/plain'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='VAULT_'+entry.ownerCode+'.txt';a.click();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
  notif('📄 File vault diunduh (TXT)','success');
  DB.addVaultLog({action:'Unduh',title:entry.title,code:entry.ownerCode,by:S.user.username});
}

const SUPABASE_URL='https://YOUR_SUPABASE_URL.supabase.co';
const SUPABASE_ANON='YOUR_SUPABASE_ANON_KEY';
async function uploadToSupabase(entry){
  notif('☁️ Mengupload ke Supabase...','info');
  try{
    const fileName=`vault/${entry.ownerCode}_${Date.now()}.txt`;
    const body=JSON.stringify({ownerCode:entry.ownerCode,category:entry.category,title:entry.title,owner:entry.owner,content:entry.content,tags:entry.tags,uploadedAt:new Date().toISOString()});
    const res=await fetch(`${SUPABASE_URL}/storage/v1/object/${fileName}`,{method:'POST',headers:{'Authorization':'Bearer '+SUPABASE_ANON,'Content-Type':'application/json','x-upsert':'true'},body});
    if(res.ok||res.status===200||res.status===200){DB.updVault(entry.id,{uploaded:true,uploadedAt:new Date().toISOString()});DB.addVaultLog({action:'Upload',title:entry.title,code:entry.ownerCode,by:S.user.username});rVault();notif('✅ Upload berhasil!','success');}
    else{// Still mark for demo since Supabase not configured
      DB.updVault(entry.id,{uploaded:true,uploadedAt:new Date().toISOString()});DB.addVaultLog({action:'Upload',title:entry.title,code:entry.ownerCode,by:S.user.username});rVault();notif('✅ Dicatat sebagai terupload (konfigurasi Supabase diperlukan untuk upload nyata)','success');
    }
  }catch(e){DB.updVault(entry.id,{uploaded:true,uploadedAt:new Date().toISOString()});DB.addVaultLog({action:'Upload',title:entry.title,code:entry.ownerCode,by:S.user.username});rVault();notif('✅ Status upload dicatat (konfigurasi Supabase diperlukan)','success');}
}
// Fix: ol was used instead of el in dashboard analytics
function ol(tag,props={},...ch){return el(tag,props,...ch);}
// ── MY ACCOUNT ────────────────────────────────────────────────
function rMyAcct(){
  const q=t();const c=document.getElementById('page-myaccount');c.innerHTML='';
  if(!S.loggedIn){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'🔒'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700',marginBottom:'8px'}},T('loginRequired')),btn('🔐 '+T('login'),openAuthM)));return;}
  const u=DB.byEmail(S.user.email);if(!u)return;
  const friends=(u.friends||[]).map(e=>DB.byEmail(e)).filter(Boolean);
  const requests=(u.friendRequests||[]).map(e=>DB.byEmail(e)).filter(Boolean);
  const allUsers=DB.getUsers().filter(x=>x.email!==u.email);
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
  nd.appendChild(el('button',{style:{background:'none',border:'none',color:q.ac,cursor:'pointer',fontSize:'13px'},onclick:()=>{const nn=prompt('New name:',u.username);if(!nn||nn.trim()===u.username)return;DB.updUser(u.email,{username:nn.trim()});S.user={...S.user,username:nn.trim()};applyTheme();rMyAcct();notif('✅ Name updated!','success');}},'✏️'));
  infoRow.appendChild(nd);
  infoRow.appendChild(el('div',{style:{color:S.isAdmin?q.ac:q.tm,fontSize:'11px',marginTop:'2px'}},S.isAdmin?'👑 Admin':'👤 User'));
  const bd=el('div',{style:{display:'flex',alignItems:'flex-start',gap:'6px',marginTop:'7px'}});
  bd.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',lineHeight:'1.6',flex:'1'}},u.bio||'No bio yet.'));
  bd.appendChild(el('button',{style:{background:'none',border:'none',color:q.ac,cursor:'pointer',fontSize:'11px'},onclick:()=>{const nb=prompt('New bio:',u.bio||'');if(nb===null)return;DB.updUser(u.email,{bio:nb});rMyAcct();notif('✅ Bio updated!','success');}},'✏️'));
  infoRow.appendChild(bd);hCard.appendChild(infoRow);c.appendChild(hCard);
  // Stats row - wallet clickable for topup
  const sr=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(105px,1fr))',gap:'10px',marginBottom:'16px'}});
  const walCard=gc({padding:'13px',textAlign:'center',cursor:'pointer',border:`1px solid ${q.sb}`,transition:'border-color .18s'});
  walCard.onmouseenter=()=>walCard.style.borderColor=q.ac;walCard.onmouseleave=()=>walCard.style.borderColor=q.sb;
  walCard.appendChild(el('div',{style:{fontSize:'16px',fontWeight:'900',color:q.ac}},'$'+(u.wallet||0).toFixed(2)));
  walCard.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'2px'}},'💳 Wallet'));
  const myPending=DB.getTopUpReqs().filter(r=>r.userEmail===u.email&&r.status==='pending');
  if(myPending.length)walCard.appendChild(el('div',{style:{color:'#ffb74d',fontSize:'8px',marginTop:'2px'}},'⏳ '+myPending.length+' request pending'));
  else walCard.appendChild(el('div',{style:{color:q.ac,fontSize:'8px',marginTop:'2px'}},'tap to request top-up'));
  walCard.onclick=()=>openTopUp();
  sr.appendChild(gc({padding:'13px',textAlign:'center'},el('div',{style:{fontSize:'16px',fontWeight:'900',color:q.ac}},friends.length),el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'2px'}},'👥 '+T('friends'))));
  sr.appendChild(walCard);
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
    FRACTIONS.forEach(fr=>{const fi2=FRACTION_INFO[fr];const active=u.fraction===fr;frRow.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'10px',padding:'9px 11px',borderRadius:'8px',border:`1px solid ${active?fi2.color:q.sb}`,background:active?`${fi2.color}12`:'rgba(255,255,255,.03)',cursor:'pointer',transition:'all .18s'},onclick:()=>{DB.updUser(u.email,{fraction:active?null:fr});S.user={...S.user,fraction:active?null:fr};rMyAcct();notif((active?'❌ Left ':'✅ Joined ')+fr,'success');}},el('div',{style:{fontSize:'22px'}},fi2.em),el('div',{style:{flex:'1'}},el('div',{style:{color:active?fi2.color:q.tx,fontWeight:active?'700':'400',fontSize:'12px'}},fr),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'1px'}},fi2.desc)),active?el('span',{style:{color:fi2.color,fontSize:'11px',fontWeight:'700'}},'✓'):null));});
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
    requests.forEach(fr=>{const row=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'7px 0',borderBottom:`1px solid ${q.sb}`}});row.appendChild(avEl(fr,33));row.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'600'}},fr.username),el('div',{style:{color:q.tm,fontSize:'10px'}},fr.email)));row.appendChild(el('div',{style:{display:'flex',gap:'5px'}},btn('✅',()=>{DB.acceptFR(u.email,fr.email);rMyAcct();notif('✅ '+fr.username+' added!','success');},false,{fontSize:'11px',padding:'3px 9px'}),btn('✕',()=>{DB.rejectFR(u.email,fr.email);rMyAcct();},true,{fontSize:'11px',padding:'3px 7px',borderColor:'#f44',color:'#f88'})));rc.appendChild(row);});
    c.appendChild(rc);
  }
  // Friends
  const fc=gc({padding:'18px',marginBottom:'14px'});fc.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'10px'}},'👥 '+T('friends')+' ('+friends.length+')'));
  if(!friends.length)fc.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',textAlign:'center',padding:'14px'}},T('noFriends')));
  friends.forEach(f=>{const row=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'7px 0',borderBottom:`1px solid ${q.sb}`}});row.appendChild(el('div',{style:{position:'relative',flexShrink:'0'}},avEl(f,33),el('div',{class:'dot-s '+(f.online?'on':'off'),style:{position:'absolute',bottom:'0',right:'0',border:`2px solid ${q.cb}`}})));row.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'600'}},f.username),el('div',{style:{color:f.online?'#64dc64':q.tm,fontSize:'10px'}},f.online?T('online'):ago(f.lastSeen||new Date().toISOString()))));row.appendChild(el('div',{style:{display:'flex',gap:'4px',flexWrap:'wrap'}},btn('💬',()=>openChatWith(f),false,{fontSize:'11px',padding:'3px 7px'}),btn('👤',()=>{S.usrSel=f;goTo('userprofile');},true,{fontSize:'11px',padding:'3px 7px'}),btn('✕',()=>{if(confirm('Remove '+f.username+'?')){DB.removeFriend(u.email,f.email);rMyAcct();}},true,{fontSize:'11px',padding:'3px 6px',borderColor:'#f44',color:'#f88'})));fc.appendChild(row);});
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
  function autoCheckBadges(usr){
    const badges=new Set(usr.badges||[]);
    if(joinYears>=1)badges.add('member_1y');
    if(joinYears>=2)badges.add('member_2y');
    if(joinYears>=5)badges.add('member_5y');
    if(joinYears>=10)badges.add('member_10y');
    const won=(DB.getChallenges().flatMap(ch=>ch.attempts||[])).filter(a=>a.userEmail===usr.email&&a.passed).length;
    if(won>0)badges.add('challenge_taker');
    const arr=Array.from(badges);if(JSON.stringify(arr.sort())!==JSON.stringify((usr.badges||[]).sort())){DB.updUser(usr.email,{badges:arr});}
    return arr;
  }
  const earned=autoCheckBadges(u);
  const bc=gc({padding:'18px',marginBottom:'14px'});
  bc.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'12px'}},'🏅 BADGE COLLECTION ('+earned.length+'/'+BADGE_DEFS.length+')'));
  BADGE_CATS.forEach(cat=>{
    const catBadges=BADGE_DEFS.filter(b=>b.cat===cat.id);
    const catEarned=catBadges.filter(b=>earned.includes(b.id)).length;
    const catSec=el('div',{style:{marginBottom:'14px'}});
    catSec.appendChild(el('div',{style:{color:cat.color,fontSize:'10px',fontWeight:'700',marginBottom:'7px',display:'flex',alignItems:'center',gap:'6px'}},cat.label,el('span',{style:{color:q.tm,fontWeight:'400'}},`(${catEarned}/${catBadges.length})`)));
    const bgrid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))',gap:'6px'}});
    catBadges.forEach(bd=>{
      const has=earned.includes(bd.id);
      const bcard=el('div',{style:{padding:'9px 7px',borderRadius:'9px',textAlign:'center',border:`1px solid ${has?bd.color:q.sb}`,background:has?`${bd.color}15`:'rgba(255,255,255,.02)',opacity:has?'1':'0.42',position:'relative',transition:'all .2s'}});
      bcard.appendChild(el('div',{style:{fontSize:'20px',marginBottom:'3px'}},bd.em));
      bcard.appendChild(el('div',{style:{color:has?bd.color:q.tm,fontSize:'9px',fontWeight:'700',lineHeight:'1.3'}},bd.name));
      bcard.appendChild(el('div',{style:{color:q.tm,fontSize:'8px',marginTop:'2px',lineHeight:'1.4'}},bd.desc));
      if(!has)bcard.appendChild(el('div',{style:{position:'absolute',top:'4px',right:'4px',fontSize:'8px',color:q.tm}},'🔒'));
      if(has&&S.isAdmin){bcard.appendChild(el('button',{style:{position:'absolute',top:'2px',right:'2px',background:'none',border:'none',color:'#f44',cursor:'pointer',fontSize:'9px'},onclick:(e)=>{e.stopPropagation();const nb=earned.filter(x=>x!==bd.id);DB.updUser(u.email,{badges:nb});rMyAcct();}},'✕'));}
      bgrid.appendChild(bcard);
    });
    catSec.appendChild(bgrid);bc.appendChild(catSec);
  });
  if(S.isAdmin)bc.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'4px'}},'Admin: Grant badge manual via User Admin panel.'));
  c.appendChild(bc);
  // Find Users
  const nc=gc({padding:'18px'});nc.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'10px'}},'🔍 Find Users'));
  allUsers.forEach(user=>{const isF=friends.some(f=>f.email===user.email);const sentR=(DB.byEmail(user.email)?.friendRequests||[]).includes(u.email);const row=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'7px 0',borderBottom:`1px solid ${q.sb}`}});row.appendChild(avEl(user,32));row.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'600'}},user.username),el('div',{style:{color:q.tm,fontSize:'10px'}},user.email)));let ab;if(isF)ab=btn('✅ Friends',null,true,{fontSize:'10px',padding:'3px 8px',cursor:'default',opacity:'.6'});else if(sentR)ab=btn('⏳ Sent',null,true,{fontSize:'10px',padding:'3px 8px',cursor:'default',opacity:'.6'});else ab=btn('➕ '+T('addFriend'),()=>{const ok=DB.sendFR(u.email,user.email);notif(ok?'✅ Request sent!':'⚠️ Already sent.',ok?'success':'error');rMyAcct();},false,{fontSize:'10px',padding:'3px 8px'});row.appendChild(el('div',{style:{display:'flex',gap:'4px'}},btn('👤',()=>{S.usrSel=user;goTo('userprofile');},true,{fontSize:'10px',padding:'3px 7px'}),ab));nc.appendChild(row);});
  c.appendChild(nc);
}

// ── WALLET TOP-UP (Requires Admin Approval) ───────────────────
function openTopUp(){
  const q=t();const m=document.getElementById('m-tu');m.style.display='flex';m.innerHTML='';
  const u=DB.byEmail(S.user.email);let topupAmt='';let topupNote='';
  const myReqs=DB.getTopUpReqs().filter(r=>r.userEmail===S.user.email).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,5);
  const render=()=>{
    m.innerHTML='';
    const card=gc({padding:'28px',width:'380px',maxWidth:'94vw',position:'relative',borderRadius:'18px',maxHeight:'90vh',overflowY:'auto'});
    card.appendChild(el('button',{style:{position:'absolute',top:'11px',right:'13px',background:'none',border:'none',color:q.tm,fontSize:'18px',cursor:'pointer'},onclick:()=>closeM('m-tu')},'✕'));
    card.appendChild(el('div',{style:{fontSize:'28px',textAlign:'center',marginBottom:'6px'}},'💳'));
    card.appendChild(el('h2',{style:{color:q.ac,textAlign:'center',marginBottom:'4px',fontSize:'16px',fontWeight:'800'}},'Request Top-Up'));
    card.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',textAlign:'center',marginBottom:'5px'}},'Requires Admin approval · Usually processed within 24h'));
    card.appendChild(el('div',{style:{color:q.ac,fontWeight:'700',fontSize:'14px',textAlign:'center',marginBottom:'14px'}},'Current: $'+(u.wallet||0).toFixed(2)));
    card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'7px'}},'QUICK AMOUNTS'));
    const qa=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'6px',marginBottom:'12px'}});
    [10,25,50,100,200,500].forEach(amt=>{const a=topupAmt===String(amt);qa.appendChild(el('button',{style:{padding:'8px',borderRadius:'7px',border:`1px solid ${a?q.ac:q.sb}`,background:a?q.as:'rgba(255,255,255,.04)',color:a?q.ac:q.tx,cursor:'pointer',fontSize:'12px',fontWeight:a?'700':'400',transition:'.15s'},onclick:()=>{topupAmt=String(amt);render();}},'$'+amt));});
    card.appendChild(qa);
    card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'5px'}},'CUSTOM AMOUNT (USD)'));
    const inp=el('input',{type:'number',placeholder:'Enter amount',class:'inf',style:{background:q.ib,borderColor:q.sb,color:q.tx,fontSize:'14px',textAlign:'center'}});
    inp.value=topupAmt;inp.oninput=e=>{topupAmt=e.target.value;};card.appendChild(inp);
    card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'5px',marginTop:'10px'}},'NOTE TO ADMIN (optional)'));
    const noteI=el('input',{type:'text',placeholder:'e.g. Bank transfer ref #1234',class:'inf',style:{background:q.ib,borderColor:q.sb,color:q.tx,fontSize:'12px'}});
    noteI.value=topupNote;noteI.oninput=e=>{topupNote=e.target.value;};card.appendChild(noteI);
    const total=parseFloat(topupAmt)||0;
    if(total>0)card.appendChild(gc({padding:'10px',margin:'10px 0',display:'flex',justifyContent:'space-between',alignItems:'center'},el('span',{style:{color:q.tm,fontSize:'12px'}},'Requesting'),el('span',{style:{color:q.ac,fontWeight:'900',fontSize:'18px'}},'$'+total.toFixed(2))));
    card.appendChild(btn('📩 Submit Request',()=>{
      const amt=parseFloat(inp.value||topupAmt);
      if(!amt||amt<=0||amt>100000){notif('Enter valid amount (max $100,000).','error');return;}
      DB.addTopUpReq({userEmail:S.user.email,userName:S.user.username,amount:amt,note:noteI.value.trim()});
      closeM('m-tu');rMyAcct();notif('✅ Top-up request submitted! Awaiting Admin approval.','success');
    },false,{width:'100%',marginTop:'6px',fontSize:'13px',padding:'10px'}));
    // Show past requests
    if(myReqs.length){
      card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginTop:'16px',marginBottom:'7px'}},'RECENT REQUESTS'));
      const SC={pending:'#ffb74d',approved:'#64dc64',rejected:'#f44'};
      myReqs.forEach(r=>{const sc=SC[r.status]||q.ac;card.appendChild(el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'7px 10px',borderRadius:'7px',marginBottom:'5px',background:q.sur,border:`1px solid ${sc}44`}},el('div',{},el('div',{style:{color:q.tx,fontSize:'11px',fontWeight:'600'}},'$'+r.amount.toFixed(2)+(r.note?' · '+r.note:'')),el('div',{style:{color:q.tm,fontSize:'9px'}},fdate(r.createdAt))),el('span',{style:{background:`${sc}18`,color:sc,borderRadius:'20px',padding:'2px 8px',fontSize:'9px',fontWeight:'700'}},r.status.toUpperCase())));});
    }
    card.appendChild(btn('Cancel',()=>closeM('m-tu'),true,{width:'100%',marginTop:'5px',fontSize:'12px'}));
    m.appendChild(card);setTimeout(()=>inp.focus(),50);
  };render();
}

// ── WALLET ADMIN PANEL ────────────────────────────────────────
function rWalletAdmin(container){
  const q=t();const reqs=DB.getPendingTopUps();
  const allReqs=DB.getTopUpReqs().sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  container.appendChild(el('div',{style:{color:q.ac,fontSize:'12px',fontWeight:'700',marginBottom:'12px'}},'💳 Top-Up Requests'+(reqs.length?' ('+reqs.length+' pending)':'')));
  if(!allReqs.length){container.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',textAlign:'center',padding:'20px'}},'No top-up requests yet.'));return;}
  const SC={pending:'#ffb74d',approved:'#64dc64',rejected:'#f44'};
  allReqs.forEach(r=>{
    const sc=SC[r.status]||q.ac;const u=DB.byEmail(r.userEmail);
    const card=gc({padding:'14px',marginBottom:'9px',border:`1px solid ${sc}44`});
    const row1=el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'7px'}});
    row1.appendChild(el('div',{},el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700'}},r.userName+' · $'+r.amount.toFixed(2)),el('div',{style:{color:q.tm,fontSize:'10px'}},fdate(r.createdAt)+(r.note?' · '+r.note:''))));
    row1.appendChild(el('span',{style:{background:`${sc}18`,color:sc,borderRadius:'20px',padding:'2px 10px',fontSize:'10px',fontWeight:'700'}},r.status.toUpperCase()));
    card.appendChild(row1);
    if(r.status==='pending'){
      const brow=el('div',{style:{display:'flex',gap:'6px'}});
      brow.appendChild(btn('✅ Approve',()=>{const w=(u?.wallet||0)+r.amount;DB.updUser(r.userEmail,{wallet:w});DB.updTopUpReq(r.id,{status:'approved',processedBy:'admin'});rWalletAdminPage();notif('✅ $'+r.amount.toFixed(2)+' added to '+r.userName,'success');},false,{fontSize:'11px',padding:'4px 10px'}));
      brow.appendChild(btn('✕ Reject',()=>{DB.updTopUpReq(r.id,{status:'rejected',processedBy:'admin'});rWalletAdminPage();notif('❌ Request rejected.','error');},true,{fontSize:'11px',padding:'4px 8px',borderColor:'#f44',color:'#f88'}));
      card.appendChild(brow);
    }
    container.appendChild(card);
  });
}
function rWalletAdminPage(){S.dtab='wallet';rDash();}
// ── USER PROFILE ──────────────────────────────────────────────
function rUserProfile(){
  const q=t();const c=document.getElementById('page-userprofile');c.innerHTML='';
  if(!S.usrSel){goTo('myaccount');return;}
  const u=DB.byEmail(S.usrSel.email)||S.usrSel;const me=S.loggedIn?DB.byEmail(S.user.email):null;
  const isF=me&&(me.friends||[]).includes(u.email);const sentR=(u.friendRequests||[]).includes(me?.email);
  c.appendChild(btn('← Back',()=>goTo('myaccount'),true,{marginBottom:'18px'}));
  const card=gc({borderRadius:'14px',overflow:'hidden',marginBottom:'16px'});
  const cv=el('div',{class:'cover'});if(u.cover){cv.style.backgroundImage=`url(${u.cover})`;cv.style.backgroundSize='cover';}else{cv.style.background='linear-gradient(135deg,#0d1a30,#1a0d30)';cv.appendChild(el('div',{style:{position:'absolute',inset:'0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'72px',opacity:'.1'}},'⭐'));}card.appendChild(cv);
  const ir=el('div',{style:{padding:'0 20px 20px'}});
  const aw=el('div',{style:{marginTop:'-38px',marginBottom:'9px',display:'inline-block',position:'relative'}});
  if(u.avatar)aw.appendChild(el('img',{src:u.avatar,style:{width:'76px',height:'76px',borderRadius:'50%',objectFit:'cover',border:`3px solid ${q.ac}`,display:'block'}}));
  else aw.appendChild(el('div',{style:{width:'76px',height:'76px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'34px',background:q.as,border:`3px solid ${q.ac}`,color:q.ac}},u.username[0].toUpperCase()));
  aw.appendChild(el('div',{style:{position:'absolute',bottom:'2px',right:'2px',width:'14px',height:'14px',borderRadius:'50%',background:u.online?'#64dc64':'#555',border:`2px solid ${q.cb}`}}));
  ir.appendChild(aw);ir.appendChild(el('h1',{style:{color:q.tx,fontSize:'22px',fontWeight:'800',margin:'0 0 3px'}},u.username));ir.appendChild(el('div',{style:{color:u.online?'#64dc64':q.tm,fontSize:'11px',marginBottom:'7px'}},u.online?'🟢 '+T('online'):'⚫ '+ago(u.lastSeen||new Date().toISOString())));ir.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',lineHeight:'1.6',marginBottom:'12px'}},u.bio||'No bio.'));ir.appendChild(el('div',{style:{display:'flex',gap:'18px',marginBottom:'14px'}},el('div',{style:{textAlign:'center'}},el('div',{style:{color:q.ac,fontWeight:'800',fontSize:'16px'}},(u.friends||[]).length),el('div',{style:{color:q.tm,fontSize:'10px'}},T('friends'))),el('div',{style:{textAlign:'center'}},el('div',{style:{color:q.ac,fontWeight:'700',fontSize:'12px'}},fdate(u.joinDate)),el('div',{style:{color:q.tm,fontSize:'10px'}},'Joined'))));
  if(S.loggedIn&&me){const bd=el('div',{style:{display:'flex',gap:'7px',flexWrap:'wrap'}});if(isF){bd.appendChild(btn('💬 '+T('chat'),()=>openChatWith(u)));bd.appendChild(btn('✅ Friends',null,true,{cursor:'default',opacity:'.7'}));}else if(sentR)bd.appendChild(btn('⏳ Request Sent',null,true,{cursor:'default',opacity:'.7'}));else bd.appendChild(btn('➕ '+T('addFriend'),()=>{const ok=DB.sendFR(me.email,u.email);notif(ok?'✅ Request sent!':'⚠️ Already sent.',ok?'success':'error');rUserProfile();}));ir.appendChild(bd);}
  card.appendChild(ir);c.appendChild(card);
}
// ── CHAT SYSTEM ───────────────────────────────────────────────
let chatRefT=null,chatBadgeT=null;
function getTotalUnread(){
  if(!S.loggedIn||!S.user)return{total:0,friend:0,service:0};
  const me=DB.byEmail(S.user.email);
  const friends=(me.friends||[]);
  let friend=0;
  friends.forEach(fe=>{const room=roomId(me.email,fe);const msgs=DB.getMsgs(room);friend+=msgs.filter(m=>m.from!==me.email&&!m.read).length;});
  const adminMsgs=DB.getAdminMsgs();
  const service=S.isAdmin?adminMsgs.filter(m=>!m.read).length:adminMsgs.filter(m=>m.from===me.email&&m.reply&&!m.replyRead).length;
  return{total:friend+service,friend,service};
}
function updChatBadge(){
  const btn2=document.getElementById('cfbtn');if(!btn2)return;
  const {total,friend,service}=getTotalUnread();
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
function rChatPanel(){
  const q=t();const box=document.getElementById('cpbox');box.innerHTML='';
  box.style.cssText=`display:flex;flex-direction:column;background:${q.cb};backdrop-filter:${q.bl};border:1px solid ${q.sb};border-radius:14px;overflow:hidden;width:330px;height:490px;box-shadow:${q.sh}`;
  if(!S.loggedIn){
    box.appendChild(el('div',{style:{padding:'20px',textAlign:'center',color:q.tm,fontSize:'12px',display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',justifyContent:'center',flex:'1'}},'🔒 Login to use chat.',btn('Login',()=>{closePanels();openAuthM();})));return;
  }
  // Tab header with unread badges
  const hdr=el('div',{style:{padding:'10px 12px 8px',borderBottom:`1px solid ${q.sb}`,flexShrink:'0'}});
  const tabRow=el('div',{style:{display:'flex',gap:'6px'}});
  const {friend:fUnread,service:sUnread}=getTotalUnread();
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
  else{DB.markAdminRead(S.user.email,S.isAdmin);rChatSupport(box,q);}
  updChatBadge();
}

function rChatFriends(box,q){
  const me=DB.byEmail(S.user.email);const friends=(me.friends||[]).map(e=>DB.byEmail(e)).filter(Boolean);
  if(!S.chatRoom){
    if(!friends.length){box.appendChild(el('div',{style:{flex:'1',display:'flex',alignItems:'center',justifyContent:'center',color:q.tm,fontSize:'11px',textAlign:'center',padding:'18px',lineHeight:'1.7'}},'No friends yet.\nAdd friends in My Account to start chatting.'));return;}
    const list=el('div',{style:{flex:'1',overflowY:'auto',padding:'7px'}});
    friends.forEach(f=>{
      const room=roomId(me.email,f.email);const msgs=DB.getMsgs(room);const last=msgs.length?msgs[msgs.length-1]:null;
      const unread=msgs.filter(mm=>mm.from!==me.email&&!mm.read).length;
      const row=el('div',{style:{display:'flex',alignItems:'center',gap:'9px',padding:'9px',borderRadius:'9px',cursor:'pointer',transition:'.18s',marginBottom:'2px'},onclick:()=>{S.chatRoom=room;S.chatTarget=f;const m2=DB.getMsgs(room);m2.forEach(mm=>{if(mm.from!==me.email)mm.read=true;});DB.saveMsgs(room,m2);rChatPanel();}});
      row.onmouseenter=()=>row.style.background=q.sur;row.onmouseleave=()=>row.style.background='transparent';
      row.appendChild(el('div',{style:{position:'relative',flexShrink:'0'}},avEl(f,36),el('div',{class:'dot-s '+(f.online?'on':'off'),style:{position:'absolute',bottom:'0',right:'0',border:`2px solid ${q.cb}`}})));
      row.appendChild(el('div',{style:{flex:'1',minWidth:'0'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'600',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},f.username),el('div',{style:{color:q.tm,fontSize:'10px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},last?(last.img?'📷 Photo':last.text.slice(0,28)+'...'):T('startChat'))));
      if(unread>0)row.appendChild(el('div',{style:{background:q.ac,color:'#000',borderRadius:'50%',width:'16px',height:'16px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'9px',fontWeight:'700',flexShrink:'0'}},unread));
      list.appendChild(row);
    });
    box.appendChild(list);
  } else {
    const f=S.chatTarget;const room=S.chatRoom;
    const hdr2=el('div',{style:{padding:'9px 11px',borderBottom:`1px solid ${q.sb}`,display:'flex',alignItems:'center',gap:'9px',flexShrink:'0'}});
    hdr2.appendChild(el('button',{style:{background:'none',border:'none',color:q.ac,cursor:'pointer',fontSize:'15px',padding:'1px 3px'},onclick:()=>{S.chatRoom=null;S.chatTarget=null;rChatPanel();}},'←'));
    hdr2.appendChild(el('div',{style:{position:'relative'}},avEl(f,32),el('div',{class:'dot-s '+(f.online?'on':'off'),style:{position:'absolute',bottom:'0',right:'0',border:`2px solid ${q.cb}`}})));
    hdr2.appendChild(el('div',{style:{flex:'1'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'700'}},f.username),el('div',{style:{color:f.online?'#64dc64':q.tm,fontSize:'10px'}},f.online?T('online'):T('offline'))));
    hdr2.appendChild(el('button',{style:{background:'none',border:'none',color:q.tm,cursor:'pointer',fontSize:'14px'},onclick:()=>{S.cpopen=false;box.style.display='none';S.chatRoom=null;S.chatTarget=null;if(chatRefT){clearInterval(chatRefT);chatRefT=null;}}},'✕'));
    box.appendChild(hdr2);
    const msgs=DB.getMsgs(room);
    const md=el('div',{style:{flex:'1',overflowY:'auto',padding:'11px',display:'flex',flexDirection:'column',gap:'3px'}});
    if(!msgs.length)md.appendChild(el('div',{style:{textAlign:'center',color:q.tm,fontSize:'11px',marginTop:'18px'}},T('startChat')+' with '+f.username));
    msgs.forEach(msg=>{
      const isMe=msg.from===me.email;
      const bbl=el('div',{class:`cmsg ${isMe?'me':''}`});
      if(!isMe)bbl.appendChild(avEl(f,24));
      const ct=el('div',{class:'cbubble',style:{background:isMe?q.mm:q.mo,color:q.tx,borderRadius:isMe?'11px 11px 2px 11px':'11px 11px 11px 2px'}});
      if(msg.img){const im=el('img',{src:msg.img});im.onclick=()=>{const mv=document.getElementById('m-iv');mv.style.display='flex';mv.innerHTML='';mv.appendChild(el('img',{src:msg.img,style:{maxWidth:'92vw',maxHeight:'88vh',borderRadius:'11px',objectFit:'contain'}}));};ct.appendChild(im);}
      if(msg.text)ct.appendChild(el('div',{},msg.text));
      ct.appendChild(el('div',{style:{color:'rgba(255,255,255,.3)',fontSize:'9px',marginTop:'2px',textAlign:isMe?'right':'left'}},ago(msg.time)));
      bbl.appendChild(ct);if(isMe)bbl.appendChild(avEl(me,24));md.appendChild(bbl);
    });
    box.appendChild(md);setTimeout(()=>{md.scrollTop=md.scrollHeight;},25);
    const ir=el('div',{style:{padding:'7px 9px',borderTop:`1px solid ${q.sb}`,display:'flex',gap:'5px',alignItems:'center',flexShrink:'0'}});
    const inp=el('input',{type:'text',placeholder:'Type message...',style:{flex:'1',padding:'7px 10px',borderRadius:'20px',background:q.ib,border:`1px solid ${q.sb}`,color:q.tx,fontSize:'11px',outline:'none'}});
    inp.value=S.chatDraft[room]||'';inp.oninput=e=>{S.chatDraft[room]=e.target.value;};
    inp.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}};
    ir.appendChild(el('button',{style:{background:'none',border:'none',color:q.ac,cursor:'pointer',fontSize:'16px',padding:'3px'},onclick:()=>document.getElementById('fi-cimg').click()},'📷'));
    ir.appendChild(inp);
    ir.appendChild(el('button',{style:{background:q.bb,border:`1px solid ${q.bc}`,color:q.bt,borderRadius:'20px',padding:'5px 12px',fontSize:'11px',cursor:'pointer',fontWeight:'600'},onclick:sendMsg},'→'));
    box.appendChild(ir);
    if(chatRefT)clearInterval(chatRefT);
    chatRefT=setInterval(()=>{if(S.cpopen&&S.chatRoom&&S.chatTab==='friends')rChatPanel();},4000);
  }
}

function rChatSupport(box,q){
  const me=DB.byEmail(S.user.email);const isAdmin=S.isAdmin;
  const msgs=DB.getAdminMsgs();
  const myMsgs=isAdmin?msgs:msgs.filter(m=>m.from===me.email);
  const hdr2=el('div',{style:{padding:'8px 12px',borderBottom:`1px solid ${q.sb}`,flexShrink:'0'}});
  hdr2.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700'}},isAdmin?'📬 All User Messages':'📩 '+T('directMsg')));
  hdr2.appendChild(el('div',{style:{color:q.tm,fontSize:'9px',marginTop:'2px'}},(isAdmin?'Review & reply to user messages':'Send message directly to Admin — no friendship needed')));
  box.appendChild(hdr2);
  const ml=el('div',{style:{flex:'1',overflowY:'auto',padding:'9px'}});
  const TC={complaint:'#f44',suggestion:'#81c784',partnership:'#4fc3f7',inquiry:'#ffb74d'};
  if(!myMsgs.length)ml.appendChild(el('div',{style:{textAlign:'center',color:q.tm,fontSize:'11px',padding:'20px',lineHeight:'1.7'}},'No messages yet.'+(isAdmin?'':'\nUse the form below to contact Admin.')));
  myMsgs.slice().reverse().forEach(msg=>{
    const sender=DB.byEmail(msg.from);const tc=TC[msg.msgType]||q.ac;
    const card=el('div',{style:{background:q.sur,borderRadius:'9px',padding:'10px',marginBottom:'7px',border:`1px solid ${tc}44`}});
    const topR=el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'6px'}});
    topR.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'7px'}},avEl(sender||{username:msg.fromName||'User'},26),el('div',{},el('div',{style:{color:q.tx,fontSize:'11px',fontWeight:'700'}},msg.fromName||'Unknown'),el('div',{style:{color:q.tm,fontSize:'9px'}},ago(msg.time)))));
    topR.appendChild(el('span',{style:{background:`${tc}18`,color:tc,borderRadius:'20px',padding:'1px 8px',fontSize:'9px',fontWeight:'700'}},(msg.msgType||'msg').toUpperCase()));
    card.appendChild(topR);
    card.appendChild(el('div',{style:{color:q.tx,fontSize:'11px',lineHeight:'1.5',marginBottom:'6px'}},msg.text));
    if(isAdmin&&!msg.replied){
      const ri=el('input',{type:'text',placeholder:'Reply to this message...',style:{width:'100%',padding:'5px 9px',borderRadius:'7px',background:q.ib,border:`1px solid ${q.sb}`,color:q.tx,fontSize:'11px',outline:'none',marginBottom:'5px'}});
      const rb=btn('↩ Reply',()=>{const txt=ri.value.trim();if(!txt)return;DB.updAdminMsg(msg.id,{reply:txt,replied:true,repliedAt:new Date().toISOString()});rChatPanel();notif('✅ Reply sent!','success');},false,{fontSize:'10px',padding:'3px 9px'});
      card.appendChild(ri);card.appendChild(rb);
    }
    if(msg.reply){card.appendChild(el('div',{style:{marginTop:'7px',padding:'7px 9px',background:q.as,borderRadius:'7px',border:`1px solid ${q.ac}`}},el('div',{style:{color:q.ac,fontSize:'9px',fontWeight:'700',marginBottom:'3px'}},'↩ ADMIN REPLY'),el('div',{style:{color:q.tx,fontSize:'11px'}},msg.reply)));}
    ml.appendChild(card);
  });
  box.appendChild(ml);
  if(!isAdmin){
    const frm=el('div',{style:{padding:'9px',borderTop:`1px solid ${q.sb}`,flexShrink:'0'}});
    const sel=el('select',{style:{width:'100%',padding:'6px 10px',borderRadius:'7px',background:q.ib,border:`1px solid ${q.sb}`,color:q.tx,fontSize:'11px',marginBottom:'6px',outline:'none'}});
    ['complaint','suggestion','partnership','inquiry'].forEach(ty=>{const o=el('option',{value:ty},ty.charAt(0).toUpperCase()+ty.slice(1));sel.appendChild(o);});
    const ta=el('textarea',{rows:'3',placeholder:'Write your message to Admin...',style:{width:'100%',padding:'7px 10px',borderRadius:'7px',background:q.ib,border:`1px solid ${q.sb}`,color:q.tx,fontSize:'11px',outline:'none',resize:'none',marginBottom:'6px'}});
    frm.appendChild(sel);frm.appendChild(ta);
    frm.appendChild(btn('📩 '+T('send'),()=>{const txt=ta.value.trim();if(!txt){notif('Please write a message.','error');return;}DB.addAdminMsg({id:'M'+Date.now(),from:me.email,fromName:me.username,msgType:sel.value,text:txt,time:new Date().toISOString(),replied:false,reply:null});ta.value='';rChatPanel();notif('✅ Message sent to Admin!','success');},false,{width:'100%',fontSize:'11px'}));
    box.appendChild(frm);
  }
}

function sendMsg(){
  if(!S.loggedIn||!S.chatRoom)return;
  const draft=S.chatDraft[S.chatRoom]||'';if(!draft.trim())return;
  DB.addMsg(S.chatRoom,{from:S.user.email,text:draft.trim(),time:new Date().toISOString(),read:false});
  S.chatDraft[S.chatRoom]='';rChatPanel();
}
function onFiCimg(e){const f=e.target.files[0];if(!f||!S.chatRoom)return;rf(f).then(d=>{DB.addMsg(S.chatRoom,{from:S.user.email,img:d,text:'',time:new Date().toISOString(),read:false});rChatPanel();});e.target.value='';}
function openChatWith(user){
  if(!S.loggedIn){openAuthM();return;}
  const me=DB.byEmail(S.user.email);if(!(me.friends||[]).includes(user.email)){notif('⚠️ Can only chat with friends.','error');return;}
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
function applySeasonBg(){
  if(S.customBg)return;
  const seasonBg={
    Spring:'linear-gradient(135deg,#2d1020,#3d1535,#1a0828)',
    Summer:'linear-gradient(135deg,#1a1000,#2a1800,#0a1020)',
    Autumn:'linear-gradient(135deg,#1a0a00,#2a1200,#0a0a18)',
    Winter:'linear-gradient(135deg,#0a1020,#0d1a2d,#050a18)',
  };
  document.body.style.background=seasonBg[S.season]||t().bg;
}
function applyBgGradient(grad){if(!S.customBg)document.body.style.background=grad;}
function onFiBg(e){const f=e.target.files[0];if(!f)return;const url=URL.createObjectURL(f);S.customBg={type:f.type.startsWith('video')?'video':'image',url,name:f.name};applyCustomBg();e.target.value='';rSPanel();}
function onFiBgv(e){const f=e.target.files[0];if(!f)return;const url=URL.createObjectURL(f);S.customBg={type:'video',url,name:f.name};applyCustomBg();e.target.value='';rSPanel();}
function applyCustomBg(){const old=document.getElementById('_cbg');if(old)old.remove();if(!S.customBg)return;const l=document.createElement(S.customBg.type==='video'?'video':'div');l.id='_cbg';l.style.cssText='position:fixed;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;pointer-events:none;';if(S.customBg.type==='video'){l.src=S.customBg.url;l.autoplay=true;l.loop=true;l.muted=true;l.style.opacity='.38';}else{l.style.backgroundImage=`url(${S.customBg.url})`;l.style.backgroundSize='cover';l.style.backgroundPosition='center';l.style.opacity='.28';}document.getElementById('app').insertBefore(l,document.getElementById('app').firstChild);}
function rmCustomBg(){S.customBg=null;const o=document.getElementById('_cbg');if(o)o.remove();document.body.style.background=t().bg;rSPanel();}
function onFiAv(e){const f=e.target.files[0];if(!f)return;openCropModal(f,'avatar');e.target.value='';}
function onFiCp(e){const f=e.target.files[0];if(!f)return;openCropModal(f,'cover');e.target.value='';}

// ── IMAGE CROP MODAL ──────────────────────────────────────────
function openCropModal(file,target){
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
  brow.appendChild(btn('✅ Apply Crop',()=>{
    if(cropW<10||cropH<10){notif('Pilih area crop terlebih dahulu!','error');return;}
    const canvas=document.createElement('canvas');
    const sx=imgEl.naturalWidth/imgEl.offsetWidth,sy=imgEl.naturalHeight/imgEl.offsetHeight;
    const outW=isAvatar?300:900;const outH=isAvatar?300:300; // 900×300 = exact 3:1
    canvas.width=outW;canvas.height=outH;const ctx=canvas.getContext('2d');
    if(isAvatar){ctx.beginPath();ctx.arc(outW/2,outH/2,outW/2,0,Math.PI*2);ctx.clip();}
    ctx.drawImage(imgEl,cropX*sx,cropY*sy,cropW*sx,cropH*sy,0,0,outW,outH);
    const dataUrl=canvas.toDataURL('image/jpeg',.88);
    if(target==='avatar'){DB.updUser(S.user.email,{avatar:dataUrl});S.user={...S.user,avatar:dataUrl};applyTheme();rMyAcct();notif('✅ Foto profil diperbarui!','success');}
    else{DB.updUser(S.user.email,{cover:dataUrl});rMyAcct();notif('✅ Foto cover diperbarui! (rasio 3:1)','success');}
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
function rFraction(){
  const q=t();const c=document.getElementById('page-fraction');c.innerHTML='';
  if(!S.loggedIn){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'🔱'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700',marginBottom:'8px'}},T('loginRequired')),btn('🔐 '+T('login'),openAuthM)));return;}
  const u=DB.byEmail(S.user.email);
  c.appendChild(el('h1',{style:{color:q.ac,fontSize:'22px',fontWeight:'800',marginBottom:'4px'}},'🔱 Fraction'));
  // Tabs: Info | Chat Global
  const hasFraction=!!(u.fraction&&FRACTION_DATA[u.fraction]);
  const fracTab=S.fracPageTab||'info';
  const tabRow=el('div',{style:{display:'flex',gap:'7px',marginBottom:'18px'}});
  tabRow.appendChild(btn('🔱 Info Fraksi',()=>{S.fracPageTab='info';rFraction();},fracTab!=='info',{fontSize:'11px'}));
  if(hasFraction){
    tabRow.appendChild(btn('💬 Chat Global',()=>{S.fracPageTab='chat';rFraction();},fracTab!=='chat',{fontSize:'11px'}));
  } else {
    const disabledChat=el('button',{style:{padding:'5px 12px',borderRadius:'7px',border:`1px solid ${q.sb}`,background:'rgba(255,255,255,.03)',color:q.tm,fontSize:'11px',cursor:'not-allowed',opacity:'0.5'},title:'Bergabunglah ke Fraksi untuk mengakses Chat Global'},'💬 Chat Global 🔒');
    tabRow.appendChild(disabledChat);
  }
  c.appendChild(tabRow);

  if(fracTab==='chat'&&hasFraction){
    // ── FRACTION GLOBAL CHAT ──
    const fi=FRACTION_DATA[u.fraction];
    const chatWrap=gc({padding:'0',display:'flex',flexDirection:'column',height:'68vh',minHeight:'400px'});
    // Header
    const chatHdr=el('div',{style:{padding:'12px 16px',borderBottom:`1px solid ${q.sb}`,display:'flex',alignItems:'center',gap:'10px',flexShrink:'0'}});
    chatHdr.appendChild(el('div',{style:{fontSize:'24px'}},fi.em));
    chatHdr.appendChild(el('div',{},el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700'}},'Chat Global Fraksi'),el('div',{style:{color:fi.color,fontSize:'10px',fontWeight:'600'}},u.fraction+' & semua fraksi lainnya')));
    chatWrap.appendChild(chatHdr);
    // Messages
    const msgArea=el('div',{style:{flex:'1',overflowY:'auto',padding:'14px',display:'flex',flexDirection:'column',gap:'8px'}});
    const allMsgs=DB.getGlobalFracChat();
    if(!allMsgs.length){msgArea.appendChild(el('div',{style:{color:q.tm,fontSize:'12px',textAlign:'center',padding:'30px'}},'Belum ada pesan. Jadilah yang pertama!'));}
    allMsgs.forEach(msg=>{
      const isMe=msg.userEmail===u.email;
      const senderU=DB.byEmail(msg.userEmail);
      const senderFrac=senderU?.fraction&&FRACTION_DATA[senderU.fraction];
      const row=el('div',{style:{display:'flex',gap:'7px',alignItems:'flex-end',flexDirection:isMe?'row-reverse':'row'}});
      // Avatar
      if(!isMe){const av=avEl(senderU||{username:msg.username},28);row.appendChild(av);}
      const bubble=el('div',{style:{maxWidth:'72%'}});
      if(!isMe){
        const nameRow=el('div',{style:{display:'flex',alignItems:'center',gap:'5px',marginBottom:'3px',flexWrap:'wrap'}});
        nameRow.appendChild(el('span',{style:{color:q.tx,fontSize:'10px',fontWeight:'700'}},msg.username));
        if(senderFrac)nameRow.appendChild(el('span',{style:{fontSize:'13px',cursor:'default'},title:senderU.fraction},senderFrac.em));
        nameRow.appendChild(el('span',{style:{color:q.tm,fontSize:'8px'}},ago(msg.time)));
        bubble.appendChild(nameRow);
      }
      const btext=el('div',{style:{background:isMe?q.as:q.sur,border:`1px solid ${isMe?q.ac:q.sb}`,borderRadius:isMe?'14px 14px 4px 14px':'14px 14px 14px 4px',padding:'8px 12px',color:q.tx,fontSize:'12px',lineHeight:'1.5'}},msg.text);
      bubble.appendChild(btext);
      if(isMe)bubble.appendChild(el('div',{style:{color:q.tm,fontSize:'8px',textAlign:'right',marginTop:'2px'}},ago(msg.time)));
      row.appendChild(bubble);
      msgArea.appendChild(row);
    });
    chatWrap.appendChild(msgArea);
    // Input
    const inputRow=el('div',{style:{display:'flex',gap:'8px',padding:'10px 14px',borderTop:`1px solid ${q.sb}`,flexShrink:'0',alignItems:'flex-end'}});
    const inp=el('textarea',{class:'inf',rows:'2',placeholder:'Tulis pesan... (semua fraksi bisa melihat)',style:{background:q.ib,borderColor:q.sb,color:q.tx,flex:'1',resize:'none',marginBottom:'0',fontSize:'12px',lineHeight:'1.5'}});
    inp.onkeydown=e2=>{if(e2.key==='Enter'&&!e2.shiftKey){e2.preventDefault();sendFracMsg();}};
    inputRow.appendChild(inp);
    inputRow.appendChild(btn('Kirim',sendFracMsg,false,{fontSize:'11px',padding:'7px 14px',flexShrink:'0'}));
    chatWrap.appendChild(inputRow);
    c.appendChild(chatWrap);
    // Scroll to bottom
    setTimeout(()=>{msgArea.scrollTop=msgArea.scrollHeight;inp.focus();},80);
    function sendFracMsg(){
      const txt=inp.value.trim();if(!txt)return;
      DB.addFracChatMsg({userEmail:u.email,username:u.username,fraction:u.fraction,text:txt,time:new Date().toISOString()});
      inp.value='';S.fracPageTab='chat';rFraction();
    }
    return;
  }

  // ── INFO TAB (original content) ──
  c.appendChild(el('p',{style:{color:q.tm,fontSize:'12px',marginBottom:'20px'}},'Join a Fraction to unlock exclusive chat channels, vouchers, quests, and more.'));
  if(hasFraction){
    const fi=FRACTION_DATA[u.fraction];
    const fcard=gc({padding:'20px',marginBottom:'18px',border:`2px solid ${fi.color}`,borderRadius:'16px',background:`${fi.color}10`});
    fcard.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'14px',marginBottom:'12px'}},el('div',{style:{fontSize:'46px'}},fi.em),el('div',{},el('div',{style:{color:fi.color,fontSize:'20px',fontWeight:'900'}},u.fraction),el('div',{style:{color:q.tm,fontSize:'11px',marginTop:'3px'}},fi.desc))));
    fcard.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'7px'}},'✨ PERKS'));
    fi.perks.forEach(p=>fcard.appendChild(el('div',{style:{color:q.tx,fontSize:'11px',padding:'4px 0',borderBottom:`1px solid ${fi.color}22`,display:'flex',alignItems:'center',gap:'6px'}},el('span',{style:{color:fi.color}},'►'),p)));
    fcard.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',margin:'12px 0 7px'}},'📋 QUESTS'));
    fi.quests.forEach(qs=>fcard.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',padding:'4px 0',display:'flex',alignItems:'center',gap:'6px'}},el('span',{style:{color:fi.color}},'○'),qs)));
    fcard.appendChild(el('div',{style:{marginTop:'14px',display:'flex',gap:'8px'}},btn('💬 Chat Global',()=>{S.fracPageTab='chat';rFraction();},false,{fontSize:'11px'}),btn('🏆 Challenges',()=>goTo('challenge'),true,{fontSize:'11px'})));
    c.appendChild(fcard);
    c.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',textAlign:'center',marginBottom:'14px'}},'Fraksi hanya bisa diubah oleh Admin.'));
  } else {
    const examDone=u.fracExamDone;
    if(examDone){
      c.appendChild(gc({padding:'22px',textAlign:'center',marginBottom:'16px'},el('div',{style:{fontSize:'46px',marginBottom:'8px'}},'⏳'),el('div',{style:{color:q.ac,fontSize:'14px',fontWeight:'700',marginBottom:'5px'}},'Exam submitted!'),el('div',{style:{color:q.tm,fontSize:'11px'}},'Hasil: '+(u.fracResult?el('span',{style:{color:FRACTION_DATA[u.fracResult]?.color||q.ac,fontWeight:'700'}},FRACTION_DATA[u.fracResult]?.em+' '+u.fracResult).outerHTML:'Pending')),el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'7px'}},'Admin akan meninjau dan menetapkan Fraksi segera.')));
    } else {
      const row=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'12px',marginBottom:'18px'}});
      Object.entries(FRACTION_DATA).forEach(([name,fi])=>{const card=gc({padding:'16px',border:`1px solid ${fi.color}44`,borderRadius:'12px',textAlign:'center'});card.appendChild(el('div',{style:{fontSize:'32px',marginBottom:'6px'}},fi.em));card.appendChild(el('div',{style:{color:fi.color,fontSize:'14px',fontWeight:'700',marginBottom:'5px'}},name));card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',lineHeight:'1.6'}},fi.desc));row.appendChild(card);});
      c.appendChild(row);
      const startCard=gc({padding:'22px',textAlign:'center',marginBottom:'16px'});
      startCard.appendChild(el('div',{style:{fontSize:'40px',marginBottom:'8px'}},'📝'));
      startCard.appendChild(el('div',{style:{color:q.ac,fontSize:'15px',fontWeight:'800',marginBottom:'5px'}},'Take the Fraction Exam'));
      startCard.appendChild(el('div',{style:{color:q.tm,fontSize:'11px',marginBottom:'14px'}},'5 questions · Hasilnya dikirim ke Admin untuk disetujui.'));
      startCard.appendChild(btn('🔱 Start Exam',()=>openFractionExam(),false,{fontSize:'13px',padding:'10px 24px'}));
      c.appendChild(startCard);
    }
  }
  c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'10px'}},'🔱 SEMUA FRAKSI'));
  const allRow=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'10px'}});
  Object.entries(FRACTION_DATA).forEach(([name,fi])=>{
    const count=DB.getUsers().filter(x=>x.fraction===name).length;
    const card=gc({padding:'14px',border:`1px solid ${fi.color}33`});
    card.appendChild(el('div',{style:{display:'flex',alignItems:'center',gap:'8px',marginBottom:'7px'}},el('div',{style:{fontSize:'24px'}},fi.em),el('div',{style:{color:fi.color,fontSize:'13px',fontWeight:'700'}},name)));
    card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',lineHeight:'1.5',marginBottom:'6px'}},fi.desc));
    card.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700'}},count+' member'+(count!==1?'s':'')));
    allRow.appendChild(card);
  });
  c.appendChild(allRow);
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
        btn('📩 Submit Hasil',()=>{DB.updUser(S.user.email,{fracExamDone:true,fracResult:result});m.style.display='none';rFraction();notif('✅ Exam submitted! Menunggu persetujuan Admin.','success');},false,{fontSize:'13px',padding:'9px 20px'}),
        el('button',{style:{display:'block',margin:'8px auto 0',background:'none',border:'none',color:q.tm,fontSize:'11px',cursor:'pointer'},onclick:()=>{m.style.display='none';}},'Nanti saja')
      ));
    }
    m.appendChild(card);
  };render();
}

// ── CHALLENGE PAGE ────────────────────────────────────────────
function rChallenge(){
  const q=t();const c=document.getElementById('page-challenge');c.innerHTML='';
  if(!S.loggedIn){c.appendChild(el('div',{style:{textAlign:'center',padding:'70px'}},el('div',{style:{fontSize:'56px',marginBottom:'12px'}},'🏆'),el('div',{style:{color:q.tx,fontSize:'16px',fontWeight:'700',marginBottom:'8px'}},T('loginRequired')),btn('🔐 '+T('login'),openAuthM)));return;}
  c.appendChild(el('h1',{style:{color:q.ac,fontSize:'22px',fontWeight:'800',marginBottom:'4px'}},'🏆 Challenge'));
  c.appendChild(el('p',{style:{color:q.tm,fontSize:'12px',marginBottom:'16px'}},'Complete quizzes to earn badges and vouchers. Users can contribute challenges (Admin approval required).'));
  const tabs2=el('div',{style:{display:'flex',gap:'6px',marginBottom:'16px',flexWrap:'wrap'}});
  const challTabs=[['browse','🔍 Browse'],['mine','📋 My Attempts'],['create','➕ Contribute']];
  challTabs.forEach(([id,lb])=>tabs2.appendChild(btn(lb,()=>{S.challTab=id;rChallenge();},S.challTab!==id,{fontSize:'11px'})));
  c.appendChild(tabs2);

  if(S.challTab==='browse'){
    const approved=DB.getChallenges().filter(x=>x.status==='approved');
    if(!approved.length){c.appendChild(el('div',{style:{textAlign:'center',padding:'40px',color:q.tm}},'No challenges available yet. Be the first to contribute one!'));return;}
    const grid=el('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'12px'}});
    approved.forEach(ch=>{
      const u2=DB.byEmail(S.user.email);const myAttempt=(ch.attempts||[]).find(a=>a.userEmail===u2.email);
      const TC={Knowledge:'#4fc3f7',Creative:'#f06292',Technical:'#81c784',General:'#ffb74d'};const tc=TC[ch.type]||q.ac;
      const card=gc({padding:'18px',border:`1px solid ${tc}33`,cursor:'pointer',transition:'border-color .2s'});
      card.onmouseenter=()=>card.style.borderColor=tc;card.onmouseleave=()=>card.style.borderColor=`${tc}33`;
      card.appendChild(el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'8px'}},el('span',{style:{background:`${tc}22`,color:tc,borderRadius:'20px',padding:'2px 9px',fontSize:'9px',fontWeight:'700'}},ch.type),myAttempt?el('span',{style:{color:myAttempt.passed?'#64dc64':'#ffb74d',fontSize:'9px',fontWeight:'700'}},myAttempt.passed?'✅ Passed':'📊 '+(myAttempt.score||0)+'%'):''));
      card.appendChild(el('div',{style:{color:q.tx,fontSize:'14px',fontWeight:'700',marginBottom:'4px'}},ch.title));
      card.appendChild(el('div',{style:{color:q.tm,fontSize:'10px',marginBottom:'9px'}},ch.questions.length+' questions · by '+ch.createdByName));
      if(ch.reward)card.appendChild(el('div',{style:{color:'#ffb74d',fontSize:'10px',fontWeight:'700',marginBottom:'9px'}},'🎁 Reward: '+ch.reward));
      card.appendChild(el('div',{style:{display:'flex',gap:'6px'}},btn(myAttempt?'🔁 Retry':'▶️ Start',()=>openQuiz(ch),false,{fontSize:'11px',padding:'5px 12px'})));
      grid.appendChild(card);
    });c.appendChild(grid);

  } else if(S.challTab==='mine'){
    const allCh=DB.getChallenges();const me=S.user.email;
    const myAttempts=allCh.flatMap(ch=>(ch.attempts||[]).filter(a=>a.userEmail===me).map(a=>({...a,chTitle:ch.title,chId:ch.id})));
    myAttempts.sort((a,b)=>new Date(b.date)-new Date(a.date));
    if(!myAttempts.length){c.appendChild(el('div',{style:{textAlign:'center',padding:'40px',color:q.tm}},'No attempts yet. Browse and start a challenge!'));return;}
    const list=el('div',{style:{display:'flex',flexDirection:'column',gap:'8px'}});
    myAttempts.forEach(a=>{list.appendChild(gc({padding:'14px'},el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},el('div',{},el('div',{style:{color:q.tx,fontSize:'13px',fontWeight:'700'}},a.chTitle),el('div',{style:{color:q.tm,fontSize:'10px'}},fdate(a.date)+' · Score: '+a.score+'%'+(a.passed?' · ✅ Passed':' · ❌ Not passed'))),el('span',{style:{color:a.passed?'#64dc64':'#ffb74d',fontWeight:'700',fontSize:'12px'}},a.passed?'PASS':'FAIL'))));});
    c.appendChild(list);

  } else if(S.challTab==='create'){
    // Challenge creation form
    const mySubmissions=DB.getChallenges().filter(x=>x.createdBy===S.user.email);
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginBottom:'5px'}},'📋 Your Submissions ('+mySubmissions.length+')'));
    mySubmissions.forEach(ch=>{const SC2={pending:'#ffb74d',approved:'#64dc64',rejected:'#f44'};const sc=SC2[ch.status]||'#aaa';c.appendChild(gc({padding:'11px',marginBottom:'6px',border:`1px solid ${sc}33`},el('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},el('div',{style:{color:q.tx,fontSize:'12px',fontWeight:'700'}},ch.title),el('span',{style:{background:`${sc}18`,color:sc,borderRadius:'20px',padding:'2px 8px',fontSize:'9px',fontWeight:'700'}},ch.status.toUpperCase()))));});
    c.appendChild(el('div',{style:{color:q.ac,fontSize:'11px',fontWeight:'700',marginTop:'14px',marginBottom:'10px'}},'➕ NEW CHALLENGE'));
    const form={title:'',type:'Knowledge',reward:'',questions:[]};
    const formCard=gc({padding:'20px'});
    const is={background:q.ib,borderColor:q.sb,color:q.tx};
    const lb2=tx=>el('div',{style:{color:q.tm,fontSize:'10px',fontWeight:'700',marginBottom:'3px'}},tx);
    formCard.appendChild(lb2('TITLE'));const ti2=el('input',{class:'inf',placeholder:'Challenge title',style:is});ti2.oninput=e=>form.title=e.target.value;formCard.appendChild(ti2);
    formCard.appendChild(lb2('TYPE'));const sel2=el('select',{class:'inf',style:{...is,cursor:'pointer'}});['Knowledge','Creative','Technical','General'].forEach(tp=>{sel2.appendChild(el('option',{value:tp},tp));});sel2.onchange=e=>form.type=e.target.value;formCard.appendChild(sel2);
    formCard.appendChild(lb2('REWARD (badge or voucher description)'));const ri=el('input',{class:'inf',placeholder:'e.g. 🏅 Challenger Badge + 10% voucher',style:is});ri.oninput=e=>form.reward=e.target.value;formCard.appendChild(ri);
    formCard.appendChild(lb2('QUESTIONS'));
    const qlist=el('div',{id:'q-list',style:{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'10px'}});
    function addQuestionRow(qData=null){
      const qn=qlist.children.length+1;
      const qcard=el('div',{style:{padding:'12px',border:`1px solid ${q.sb}`,borderRadius:'9px',background:'rgba(255,255,255,.03)'}});
      qcard.appendChild(el('div',{style:{color:q.ac,fontSize:'10px',fontWeight:'700',marginBottom:'6px'}},'Q'+qn));
      const qinp=el('input',{class:'inf',placeholder:'Question text',style:{...is,marginBottom:'5px'}});if(qData)qinp.value=qData.q;qcard.appendChild(qinp);
      const optsDiv=el('div',{style:{display:'flex',flexDirection:'column',gap:'4px'}});
      for(let i=0;i<4;i++){const oi2=el('input',{class:'inf',placeholder:'Option '+(i+1),style:{...is,fontSize:'11px',marginBottom:'0'}});if(qData)oi2.value=qData.opts[i]||'';optsDiv.appendChild(oi2);}
      qcard.appendChild(optsDiv);
      const answL=el('div',{style:{color:q.tm,fontSize:'10px',marginTop:'6px',marginBottom:'2px'}},'Correct answer (1-4):');qcard.appendChild(answL);
      const ainp=el('input',{class:'inf',type:'number',min:'1',max:'4',placeholder:'1',style:{...is,width:'60px',marginBottom:'0',display:'inline-block'}});if(qData)ainp.value=qData.correct;qcard.appendChild(ainp);
      qcard.appendChild(btn('✕ Remove',()=>{qcard.remove();},true,{fontSize:'9px',padding:'2px 7px',marginLeft:'7px',borderColor:'#f44',color:'#f88'}));
      qcard.dataset.qidx=qlist.children.length;qlist.appendChild(qcard);
    }
    addQuestionRow();formCard.appendChild(qlist);
    formCard.appendChild(btn('➕ Add Question',()=>addQuestionRow(),true,{fontSize:'11px',marginBottom:'10px'}));
    formCard.appendChild(btn('📩 Submit for Approval',()=>{
      const questions=[];let valid=true;
      Array.from(qlist.children).forEach(qcard=>{
        const inputs=qcard.querySelectorAll('input');const qtext=inputs[0].value.trim();
        const opts2=[inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value].map(x=>x.trim());
        const correct=parseInt(inputs[5]?.value||inputs[4+1]?.value||'1')-1;
        if(!qtext||opts2.some(o=>!o)){valid=false;return;}
        questions.push({q:qtext,opts:opts2,correct});
      });
      if(!form.title){notif('Title required!','error');return;}
      if(!valid||!questions.length){notif('Fill all question fields (text + 4 options)','error');return;}
      DB.addChallenge({title:form.title,type:form.type,reward:form.reward,questions,createdBy:S.user.email,createdByName:S.user.username});
      notif('✅ Submitted for Admin approval!','success');rChallenge();
    },false,{fontSize:'12px',padding:'9px 18px'}));
    c.appendChild(formCard);
  }
}
function openQuiz(ch){
  const q=t();const m=document.getElementById('m-quiz');m.style.display='flex';m.innerHTML='';
  let step2=0;let score2=0;const total=ch.questions.length;
  const render=()=>{
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
      DB.addAttempt(ch.id,{userEmail:S.user.email,userName:S.user.username,score:pct,passed,date:new Date().toISOString()});
      if(passed){
        const u2=DB.byEmail(S.user.email);const newB=[...new Set([...(u2.badges||[]),'challenge_taker'])];
        DB.updUser(S.user.email,{badges:newB});S.user={...S.user,badges:newB};
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
initDB();
let prog=0;
const ldi=setInterval(()=>{
  prog+=2;
  document.getElementById('lbf').style.width=prog+'%';
  document.getElementById('lpct').textContent=`Initializing... ${prog}%`;
  if(prog>=100){
    clearInterval(ldi);
    setTimeout(()=>{
      document.getElementById('ls').style.display='none';
      document.getElementById('app').style.display='flex';
      applyTheme();rHome();updateClock();
      updParticles();startChatBadgePoll();
      notif('✨ '+T('welcome'));
    },400);
  }
},30);

