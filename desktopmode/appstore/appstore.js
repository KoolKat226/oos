var apps = [
  {
    name: "Clock Widget",
    developer: "OvalOS",
    category: "Apps",
    icon: "https://store-images.s-microsoft.com/image/apps.14783.14399867284918662.1ed3b2f0-79ad-4226-9bf5-81fd9dc40eae.37586b11-bfde-4aaa-a14d-c6663a2e7119?h=464",
    mode: "none",
    data: "/* Version 1 */ ",
    code: "",
    widget: `<iframe style="pointer-events: none;" src="https://free.timeanddate.com/clock/i9f55hqu/n746/szw110/szh110/hoceee/cf100/hncccc/fas10/fac666" frameborder="0" width="110" height="110"></iframe>
`
  },
  {
    name: "Google Widget",
    developer: "OvalOS",
    category: "Apps",
    icon: "https://cdn.icon-icons.com/icons2/800/PNG/512/_google_icon-icons.com_65791.png",
    mode: "none",
    data: "/* Version 1 */ ",
    code: "",
    widget: `<iframe src="https://www.google.com/webhp?igu=1&safe=active&ssui=on/" name="Google" width="418" height="318" frameborder="0" style="border-radius: 20px; border: 0px solid #10658E;"></iframe>
`
  },
  {
    name: "Settings",
    developer: "OvalOS",
    category: "Apps",
    icon: "./settings/icon.png",
    mode: "",
    data: "/* Version 3 */ showSettingPopup();",
    code: "*oosango*iframe name*ooseq**oosqu*settings*oosqu* frameborder*ooseq**oosqu*0*oosqu* style*ooseq**oosqu*height*ooscol* 100%*oosscol* display*ooscol*none*oosscol* width*ooscol* 100%*oosscol**oosqu* src*ooseq**oosqu*.*oosfsl*settings*oosfsl*settings.html*oosqu**oosangc**oosango**oosfsl*iframe*oosangc*",
    widget: ``
  },
  {
    name: "Ovalmoji",
    developer: "OvalOS",
    category: "Apps",
    icon: "./ovalmoji/studio/icon.png",
    mode: "",
    data: "/* Version 1.2 */ showSpeedPopup();",
    x_dimension: 90,
    y_dimension: 90,
    top_distance: 3,
    left_distance: 5,
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquote./ovalmoji/studio/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc     ovalangloaudio style=ovalquotedisplayovalcolonnoneovalsolonovalquote controls autoplay loopovalanglc          ovalanglosource src=  ovalquote./ovalmoji/bgaudio.wavovalquote         type=ovalquoteaudio/mp3ovalquoteovalanglc ",
    widget: ``
  },
  // Add more apps as needed
  {
    name: "Browser",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://olex.glitch.me/images/browsericon.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquote./browser/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Browser",
    developer: "Offered by OlexOS",
    category: "Popular",
    icon: "https://olex.glitch.me/images/browsericon.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquote./browser/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "OlexOS Lite",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://cdn.glitch.global/d1e02572-71fa-41ad-9b3f-b15de585711e/logoli.png?v=1704322792530",
    mode: "",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexlite.glitch.me/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Rammerhead Browser",
    developer: "Offered by Rammerhead",
    category: "Apps",
    icon: "https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/chrome.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexosconnect.gotoinfo.ch/ovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "My Schedule",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://olex.glitch.me/images/scheduleicon.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olex.glitch.me/system/schedule/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Music",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://olex.glitch.me/images/music.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olex.glitch.me/system/music/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Clipboard",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://olex.glitch.me/images/clipboard.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olex.glitch.me/system/clipboard/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Calculator",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://olex.glitch.me/images/calculatoricon.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://www.desmos.com/scientificovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Habit Tracker",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://olex.glitch.me/images/habittrackicon.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexlessbulkygames.glitch.me/habittracker.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "App Labs",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://olex.glitch.me/images/applabsicon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olex.glitch.me/system/applabs/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "My Games",
    developer: "Offered by OlexOS",
    category: "Games",
    icon: "https://olex.glitch.me/images/gamebubble.png",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olex.glitch.me/cantaloupe/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Appstore Shortcut",
    developer: "Offered by OlexOS",
    category: "Apps",
    icon: "https://olex.glitch.me/images/appstorefavicon.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olex.glitch.me/system/appstore/appstore.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Wikepedia",
    developer: "Offered by Wikimedia",
    category: "Apps",
    icon: "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@1.5x.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://wikepedia.orgovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Bobs School",
    developer: "Offered by Bob",
    category: "Apps",
    icon: "https://cdn-icons-png.flaticon.com/512/4720/4720451.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://schooltest62.w3spaces.com/index.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Cube",
    developer: "Offered by OlexOS",
    category: "Games",
    icon: "https://olexlessbulkygames.glitch.me/game/cube/.icon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexlessbulkygames.glitch.me/cube.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Corbin the Game",
    developer: "Offered by Corbin",
    category: "Games",
    icon: "https://olexlessbulkygames.glitch.me/game/corbin/corbinthegame.png",
    mode: "fullscreen",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexlessbulkygames.glitch.me/corbin.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Doodle Jump",
    developer: "Offered by OlexOS",
    category: "Games",
    icon: "https://olexlessbulkygames.glitch.me/game/doodlejump/.icon.png",
    mode: "",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexlessbulkygames.glitch.me/doodlejump.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Minceraft",
    developer: "Offered by Mojang",
    category: "Games",
    icon: "https://olexminceraft.glitch.me/icon.png",
    mode: "",
    data: "/* Version 2 */ showSpeedPopup();",
    x_dimension: 90,
    y_dimension: 90,
    top_distance: 5,
    left_distance: 5,
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexminceraft.glitch.me/ovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Minesweeper",
    developer: "Offered by Everett Coleman",
    category: "Games",
    icon: "https://play-lh.googleusercontent.com/9rycf89uVflWQHRgAZm4P8GvT5Kpzzsoo77EWjDew0DiMhz3YmZhis5mgiWWWov5lUOr",
    mode: "fullscreen",
    data: "/* Version 1.2 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://www.google.com/search?q=minesweeper&safe=active&sca_esv=569265910&igu=1ovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Ghost Chat Bot",
    developer: "Offered by Dusan Halicky",
    category: "Games",
    icon: "https://olexlessbulkygames.glitch.me/game/ghostchatbot/.icon.png",
    mode: "",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexlessbulkygames.glitch.me/ghostchatbot.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Happy Friday",
    developer: "Offered by SmashPlug",
    category: "Games",
    icon: "https://olexlessbulkygames.glitch.me/game/happyfriday/.icon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexlessbulkygames.glitch.me/happyfriday.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "EverettOS 3",
    developer: "Offered by Everett Coleman",
    category: "Games",
    icon: "https://olexproductivity.glitch.me/productivity/eos3/icon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexproductivity.glitch.me/eos3.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Sandboxels",
    developer: "Offered by R74n",
    category: "Games",
    icon: "https://sandboxels.r74n.com/icons/icon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://shadowgmes.github.io/gfiles/sandboxelsovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Subway Surfers",
    developer: "Offered by Sybo Games",
    category: "Games",
    icon: "https://olexbulkygames.glitch.me/game/subwaysurfers/.icon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexbulkygames.glitch.me/subwaysurfers.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Super Mario 64",
    developer: "Offered by Nintendo",
    category: "Games",
    icon: "https://nintendocore.org/cdn/shop/products/Super-Mario-64-1.png?v=1568966086",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexminceraft.glitch.me/indexmario.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Mario Kart 64",
    developer: "Offered by Nintendo",
    category: "Games",
    icon: "https://olexbulkygames.glitch.me/game/64emu/kart64.png",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexbulkygames.glitch.me/kart64.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Retro Bowl",
    developer: "Offered by New Star Games",
    category: "Games",
    icon: "https://olexbulkygames.glitch.me/game/retrobowl/.icon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexbulkygames.glitch.me/retrobowl.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Spelunky",
    developer: "Offered by MossMouth",
    category: "Games",
    icon: "https://olexbulkygames.glitch.me/game/spelunky/src/.icon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexbulkygames.glitch.me/spelunky.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "Funny Shooter 2",
    developer: "Offered by Graham Finholtd",
    category: "Games",
    icon: "https://olexlessbulkygames.glitch.me/game/funnyshooter2/.icon.png",
    mode: "fullscreen",
    data: "/* Version 1 */ showSpeedPopup();",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://olexlessbulkygames.glitch.me/funnyshooter2.htmlovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
  {
    name: "A Small World Cup",
    developer: "Offered by Everett Coleman",
    category: "Games",
    icon: "https://i.ytimg.com/vi/2LXQMs5DZ1k/hqdefault.jpg",
    mode: "fullscreen",
    data: "/* Version 1 */ ",
    code: "ovalangloiframe frameborder=ovalquote0ovalquote style=ovalquoteheightovalcolon 100%ovalsolon widthovalcolon 100%ovalsolonovalquote src=ovalquotehttps://asmallworldcup.com/ovalquoteovalanglcovalanglo/iframeovalanglc",
    widget: ``
  },
];
