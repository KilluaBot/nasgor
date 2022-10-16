//NO Enc
process.on('uncaughtException', console.error) //Safe Log Error
//=====================
require("./settings/config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, MessageType, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const fetch = require('node-fetch')
const jimp_1 = require('jimp')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const brainly = require('brainly-scraper')
const { TiktokDownloader } = require('./baileys/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const xa = require('xfarr-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, savefrom, snapsave, chord, mediafiredl, sfilemobi, sfilemobiSearch, zippyshare , bioskopNow, bioskop, cnbindonesia, antaranews, kompas } = require('@bochilteam/scraper')
const caliph = require("caliph-api");
const { color, bgcolor } = require('./baileys/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const CFonts = require('cfonts');
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./baileys/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, generateProfilePicture, jsonformat, format, parseMention, getRandom, runh } = require('./baileys/myfunc')
const { pinterest, wallpaper, wikimedia, quotesAnime, umma, ringtone, styletext } = require('./baileys/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./baileys/textpro')
const { detikNews } = require('./baileys/detik')
const { mediafireDl } = require('./baileys/mediafire')
const { wikiSearch } = require('./baileys/wiki.js');
const { Gempa } = require("./baileys/gempa.js");
const ms = require('ms')
 let { covid } = require('./baileys/covid.js') 
 let { copid } = require('./baileys/copid.js') 
 let { cerpen } = require('./baileys/cerpen')
const { jadwaltv }= require('./baileys/jadwaltv');
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./baileys/ytdl')
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./database/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./database/user/darah.json'))

// Read Database
global.db = JSON.parse(fs.readFileSync('./mongoDB/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}
// redmor
let readmore = String.fromCharCode(8206).repeat(4001)
//db
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./database/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let _sewa = require("./baileys/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));

// UCAPAN WAKTU 
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tb2 = 'https://telegra.ph/file/128307237b4d2a0c88748.jpg'
const tb1 = 'https://telegra.ph/file/ef36d8dbac2f03e9a2de8.jpg'

// TANGGAL
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = ham = async (ham, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await ham.decodeJid(ham.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await ham.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
 
//const lakal = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : true
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : true
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
autoreadsw = true
// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
const isVideo = (m.type === 'videoMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

//Bandwitch
let { sizeFormatter } = require("human-readable");
let formatd = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
async function checkBandwidth() {
var data = require("node-os-utils")
data = await data.netstat.stats()
let ind = 0
let out = 0
for (let i of data) {
ind = ind + i.inputBytes
out = out + i.outputBytes
}
return {
download: formatd(ind),
upload: formatd(out)
}
}
//styletext
async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    return obj
}
//Sewa
_sewa.expiredCheck(ham, sewa)


// Auto-group sticker
if (isAutoSticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
    let mediac = await quoted.download()
    await ham.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
    console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return
    let mediac = await quoted.download()
    await ham.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}
    if (isAutoStick) {
if (/image/.test(mime) && !/webp/.test(mime)) {
    let mediac = await quoted.download()
    await ham.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
    console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return
    let mediac = await quoted.download()
    await ham.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}
async function sendFileFromUrl(from, url, caption, nay, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return ham.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: m, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//pickRandom
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//fakealldoc
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
  
//push in console & readMessages 
if (m.message) {
	ham.readMessages([m.key])
            console.log(chalk.blue('~>'), chalk.cyan('[CMD]'), chalk.red(`=`), chalk.green(prefix + command ? prefix + command : 'Media Message'), chalk.yellow(`Args: ${args.length}`) + '\n' + chalk.cyan('>> Users'), chalk.yellow(`=`), chalk.red(pushname), chalk.green(`(${m.sender})`) + `\n` + chalk.cyan(`>> (${groupName ? groupName : 'Private Chat'})`), chalk.green('='), chalk.yellow(chalk.italic(('[' + m.chat + ']'))))
		}
		
//console.log('\x1b[1;31m\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', `\x1b[1;33m${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD/MM HH:mm:ss')}\x1b[1;37m`, `\x1b[1;34m${prefix + command}\x1b[1;37m`, 'From', chalk.green(pushname + ' => ' + m.sender.split('@')[0]), 'In', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(args.length))
		
//fake recording, composing
/*if (m.message) {
ham.sendPresenceUpdate('recording', m.chat)
}
if (m.message) {
ham.sendPresenceUpdate('composing', m.chat)
}*/
		
if (isCmd && !isUser){
pendaftar.push(m.sender)
fs.writeFileSync('./database/user/user.json', JSON.stringify(pendaftar))
} 
// Leveling Punya Chika 🗿🗿 Di Copas Oleh Fardan
const getLevelingXp = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    return _level[position].xp
   }
}

const getLevelingLevel = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    return _level[position].level
    }
}

const getLevelingId = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    return _level[position].jid
    }
 }

const addLevelingXp = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    _level[position].xp += amount
    fs.writeFileSync('./database/level.json', JSON.stringify(_level))
    }
}

const addLevelingLevel = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    _level[position].level += amount
    fs.writeFileSync('./database/level.json', JSON.stringify(_level))
    }
}

const addLevelingId = (userId) => {
const obj = {jid: userId, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
if (_level[i].id === userId) {
position = i
found = true
}
    })
    if (found === false && position === null) {
const obj = { id: userId, xp: 0, level: 1 }
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
return 99
    } else {
return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
return xpGain.delete(userId)
    }, 60000) // Each minute
}

var levelRole = getLevelingLevel(m.sender)
var role = 'Copper V'
if (levelRole <= 5) {
role = 'Copper IV'
} else if (levelRole <= 10) {
role = 'Copper III'
} else if (levelRole <= 15) {
role = 'Copper II'
} else if (levelRole <= 20) {
role = 'Copper I'
} else if (levelRole <= 25) {
role = 'Silver V'
} else if (levelRole <= 30) {
role = 'Silver IV'
} else if (levelRole <= 35) {
role = 'Silver III'
} else if (levelRole <= 40) {
role = 'Silver II'
} else if (levelRole <= 45) {
role = 'Silver I'
} else if (levelRole <= 50) {
role = 'Gold V'
} else if (levelRole <= 55) {
role = 'Gold IV'
} else if (levelRole <= 60) {
role = 'Gold III'
} else if (levelRole <= 65) {
role = 'Gold II'
} else if (levelRole <= 70) {
role = 'Gold I'
} else if (levelRole <= 75) {
role = 'Platinum V'
} else if (levelRole <= 80) {
role = 'Platinum IV'
} else if (levelRole <= 85) {
role = 'Platinum III'
} else if (levelRole <= 90) {
role = 'Platinum II'
} else if (levelRole <= 95) {
role = 'Platinum I'
} else if (levelRole < 100) {
role = 'Exterminator'
}

var levelRoles = getLevelingLevel(m.sender)
var roles = 'Cop V'
if (levelRoles <= 5) {
roles = 'Cop IV'
} else if (levelRoles <= 10) {
roles = 'Cop III'
} else if (levelRoles <= 15) {
roles = 'Cop II'
} else if (levelRoles <= 20) {
roles = 'Cop I'
} else if (levelRoles <= 25) {
roles = 'Sil V'
} else if (levelRoles <= 30) {
roles = 'Sil IV'
} else if (levelRoles <= 35) {
roles = 'Sil III'
} else if (levelRoles <= 40) {
roles = 'Sil II'
} else if (levelRoles <= 45) {
roles = 'Sil I'
} else if (levelRoles <= 50) {
roles = 'Gol V'
} else if (levelRoles <= 55) {
roles = 'Gol IV'
} else if (levelRoles <= 60) {
roles = 'Gol III'
} else if (levelRoles <= 65) {
roles = 'Gol II'
} else if (levelRoles <= 70) {
roles = 'Gol I'
} else if (levelRoles <= 75) {
roles = 'Plat V'
} else if (levelRoles <= 80) {
roles = 'Plat IV'
} else if (levelRoles <= 85) {
roles = 'Plat III'
} else if (levelRoles <= 90) {
roles = 'Plat II'
} else if (levelRoles <= 95) {
roles = 'Plati I'
} else if (levelRoles < 100) {
roles = 'Exter'
}
//function levelingnya
if (m.isGroup && isLeveling && isUser && ham.public) {
const currentLevel = getLevelingLevel(m.sender)
const checkId = getLevelingId(m.sender)
try {
    addCooldown(m.sender)
    if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
    const amountXp = Math.floor(Math.random() * 10) + 200
    const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
    const getLevel = getLevelingLevel(m.sender)
    addLevelingXp(m.sender, amountXp)
    if (requiredXp <= getLevelingXp(m.sender)) {
    addLevelingLevel(m.sender, 1)
teks = `*──「 LEVEL UP 」──*\n\n❑ *Name*:  @${m.sender.split("@")[0]}\n❑ *XP*: ${getLevelingXp(m.sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`
ham.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

} catch (err) {
console.error(err)
}
    }
if (autoreadsw) {
if (from === 'status@broadcast') {
ham.chatRead(from)
}
}


const hariRaya = new Date('4 21, 2023 00:00:00')
const tahunBaru = new Date('1 01, 2023 00:00:00')
const sendMediaURL = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return ham.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return ham.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return ham.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return ham.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const seli = tahunBaru - sekarang

const ahari = Math.floor( seli / (1000 * 60 * 60 * 24));
const bjam = Math.floor( seli % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const cmmenit = Math.floor( seli % (1000 * 60 * 60) / (1000 * 60));
const detik = Math.floor( seli % (1000 * 60) / 1000);
const eltah = `${ahari} Days ${bjam} Hours ${cmmenit} Minute ${detik} Second`

const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari} Days ${jjam} Hours ${mmmenit} Minute ${ddetik} Second`

async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
  let from = new Date(`${bulan} ${tanggal}, 2023 00:00:00`).getTime();
  let now = Date.now();
  let distance = from - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
ham.relayMessage(jid, order.message, { messageId: order.key.id})
}

//function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./database/user/darah.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./database/user/alat_tukar.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./database/user/monay.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./database/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./database/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
   //Fax
let picaks = ['flaming','fluming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
let picek = pickRandom(picaks)
// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

//Add Hit Fax
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/namespace/key')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik .owner untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "5123658817728409", log0, 2022, "Ilham ~ Multi Device", "6281233649676@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
/*const bodyyy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
if (!isCmd && !m.isGroup && !m.key.fromMe) {
const simi = await fetchJson(`https://caliph.my.id/api/simi.php?text=${budy}`)
const sami = simi.result
await ham.sendMessage(from, {text:sami}, {quoted:m})
}*/

// auto set bio
	if (m.message) {
		let times = speed()
    let late = speed() - times
		await ham.setStatus(`Speed: ${late.toFixed(4)} Ms | Runtime: ${runtime(process.uptime())} | OS Uptime: ${runtime(os.uptime())}`)
	}
	
// auto set desc gc
    /*if (m.message) {
		let times = speed()
    let lato = speed() - times
		await ham.groupUpdateDescription('6285232599038-1497274458@g.us', `[ BOT ONLINE ]\n| Runtime: ${runtime(process.uptime())}\n| Ram: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n| Speed: ${lato.toFixed(4)} Ms`)
	}*/

// AntiLink
if (AntiLink) {
linkgc = await ham.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgc}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await ham.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
ham.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

// Public & Self
if (!ham.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./mongoDB/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© ||77+ - X - Ilham", m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
ham.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
ham.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
ham.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) ham.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) ham.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) ham.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
ham.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) ham.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) ham.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
ham.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//Cerpen
async function cerpen (category) {
    return new Promise((resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "")
let judul = title.replace(/\s/g, "-")
let page = Math.floor(Math.random() * 5)
axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
.then((get) => {
let $ = cheerio.load(get.data)
let link = []
$('article.post').each(function (a, b) {
    link.push($(b).find('a').attr('href'))
})
let random = link[Math.floor(Math.random() * link.length)]
axios.get(random)
.then((res) => {
    let $$ = cheerio.load(res.data)
    let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
cerita: $$('#content > article > p').text()
    }
    resolve(hasil)
})
})
    })
}
// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await ham.sendText(room.x, str, m, { mentions: parseMention(str) } )
await ham.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: ham.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ham.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
ham.ev.emit('messages.upsert', msg)
}

// Fake Reply
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //Gambarnye
},
"title": "Utamakan jgn spam!", //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "9999999",
"retailerId": "MyGans",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'Ilham-MD', //Kasih namalu
orderTitle: 'Hooh',
thumbnail: log0, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"Ilham",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'Ilham',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {"title": `github.com/KilluaBot`},"jpegThumbnail": tb2 }}
const frkey = (teks) => {ham.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${namebot}`,"body": `Hai kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4`}}}, { quoted: m})}
const freply = (teks) => {
ham.sendMessage(m.chat, teks, {contextInfo:{externalAdReply:{
showAdAttribution: true,
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",
title:`Selamat ${salam} ${pushname}`,
body: 'Jangan Lupa Donasi',
mediaType: 1,
previewType: "PHOTO",
jpegThumbnail: fs.readFileSync("./settings/log0.jpg"),
thumbnailUrl: "https://l.top4top.io/p_2151xup9t0.jpeg",
thumbnail: fs.readFileSync("./settings/log0.jpg"),
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}}}, { quoted: m})
}
const ftext = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "status@broadcast" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')}`,
"title": `Ilham-MD`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}
const ikln =`
#WTS
🛒RDP / VPS Bulanan🛒
💻Ram 1   : 15K 
💻Ram 2   : 25K
💻Ram 4   : 35K
💻Ram 8   : 60K (SG REGION)
💻Ram 16 : 80K (SG REGION)
💻Ram 32 : 150K (SG REGION)
💻Ram 64 : 250K

🔴Azure Pay As You Go
Price : 80K
🎊Fast Respon Di jam tertentu🎉
❏ ➪ Minat hub : wa.me/6288221255023
❏ ➪ Testi https://t.me/testisonel1
❏ ➪ Payment : Gopay, Bnk Jgo, dana, Qris All payment
`
l = 1
monospace = '```'
const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
let Bandwit = await checkBandwidth()
let kunyek = '```'
let bio = await ham.fetchStatus(m.sender).catch(_ => 'Private!')
const version = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
const qtod = m.quoted? "true":"false"
// Case Nye Sini Ngab
switch(command) {
case 'donasi': case 'donate':
{
let btnR = [{
urlButton: {
displayText: 'GROUP BOT',
url: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4'
}
}, {
urlButton: {
displayText: 'NOTE BOT',
url: 'https://s.id/notebot'
}
}, {
quickReplyButton: {
displayText: 'IKLAN BOT',
id: 'iklan'
}
}, {
quickReplyButton: {
displayText: 'SEWA BOT',
id: 'sewa'
}
}, {
quickReplyButton: {
displayText: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓',
id: 'command'
}
}]
let butts = [
{buttonId: 'iklan', buttonText: {displayText: '⫹⫺ IKLAN BOT'}, type: 1},
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '⫹⫺ OWNER BOT'}, type: 1}
]
let buttonMessage = {
location: { jpegThumbnail: await ham.reSize(flaming+'Support Me', 300, 150) },
jpegThumbnail: thumb,
fileLength: `999140795000000000`,
contextInfo:{externalAdReply:{
//renderLargerThumbnail: true, 
showAdAttribution: true, 
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",
title: `Selamat ${salam} ${pushname}`,
body: 'Jangan Lupa Donasi',
mediaType: 1,
jpegThumbnail: log0, 
thumbnail: log0,
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}},
caption: `${require('./settings/help.js').donate(prefix, l, pushname)}`,
mentions:[m.sender],
footer: `© Ilham`,
//templateButtons: btn,
buttons: butts,
headerType: 6
}
ham.sendMessage(m.chat, buttonMessage, {quoted:m})
//ham.send5ButImg(m.chat, `${require('./settings/help.js').donate(prefix, l, pushname)}`, `Created By © Ilham`, qris, btnR)
}
break
case 'sewa': case 'sewabot':
{
let btnD = [{
urlButton: {
displayText: 'GROUP BOT',
url: 'https://s.id/allbot'
}
}, {
urlButton: {
displayText: 'SOURCE CODE',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
quickReplyButton: {
displayText: 'STATUS BOT',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'DONASI BOT',
id: 'donate'
}
}, {
quickReplyButton: {
displayText: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓',
id: 'command'
}
}]
let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '⫹⫺ OWNER BOT'}, type: 1}
]
let btn = [
    {index: 1, urlButton: {displayText: `GROUP BOT 🍒`, url : 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4' }},
    {index: 2, urlButton: {
displayText: 'SOURCE CODE',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}},
    {index: 3, quickReplyButton: { displayText: `⫹⫺ DONASI 🍱`, id: 'donasi'} },
	{index: 4, quickReplyButton: { displayText: `⫹⫺ IKLAN  🍢`, id: 'iklan'} },
    {index: 5, quickReplyButton: { displayText: `⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔`, id: 'command'} }
]
let buttonMessage = {
location: { jpegThumbnail: await ham.reSize(flaming+'BOT PRIVATE', 300, 150) },
jpegThumbnail: sewabot,
fileLength: `999140795000000000`,
contextInfo:{externalAdReply:{
//renderLargerThumbnail: true,
showAdAttribution: true,
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",
title: `Selamat ${salam} ${pushname}`,
body: 'Jangan Lupa Donasi',
mediaType: 1,
jpegThumbnail: log0,
thumbnail: log0,
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}},
caption: `${require('./settings/help.js').sewabot(prefix, l, pushname)}`,
mentions:[m.sender],
footer: `Created By © Ilham`,
//templateButtons: btn,
buttons: butts,
headerType: 6
}
ham.sendMessage(m.chat, buttonMessage, {quoted:m})
//ham.send5ButImg(m.chat, `${require('./settings/help.js').sewabot(prefix, l, pushname)}`, `Created By © Ilham`, sewabot, btnD)
}
break
case 'iklan3':
    {
        let btnG = [{
            urlButton: {
            displayText: 'GROUP BOT',
            url: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4'
            }
            }, {
            urlButton: {
            displayText: 'BUY ?, Click Here!',
            url: 'https://wa.me//6287877173955?text='
            }
            }, {
            quickReplyButton: {
            displayText: 'STATUS BOT',
            id: 'ping'
            }
            }, {
            quickReplyButton: {
            displayText: 'DONASI BOT',
            id: 'donate'
            }
            }, {
            quickReplyButton: {
            displayText: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓',
            id: 'command'
            }
            }]
            let esesha = `JUAL Scripts akses ssh railway

HARGA: 160K
- akses via tcp ip ngrok
- langsung bisa akses root
- os debian
- cocok buat run + memantau bot lewat ssh
- online terus sesuai dengan credits waktu yang di kasih sama railway 
            
Note : Boleh Ngapain Aja, Resiko Di Tanggung Sendiri
            
Minat chat wa.me//6287877173955`
            let eses = await getBuffer('https://telegra.ph/file/a2334689f5f8083db3265.jpg')
            ham.send5ButImg(m.chat, esesha, `© Ilham`, eses, btnG)
    }
    break
case 'iklan1':
{
let btnG = [{
urlButton: {
displayText: 'GROUP BOT',
url: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4'
}
}, {
urlButton: {
displayText: 'BUY RDP/VPS, Click Here!',
url: 'https://wa.me/6288221255023?text=bg+saya+mau+borong:v'
}
}, {
quickReplyButton: {
displayText: 'STATUS BOT',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'DONASI BOT',
id: 'donate'
}
}, {
quickReplyButton: {
displayText: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓',
id: 'command'
}
}]
let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '⫹⫺ OWNER BOT'}, type: 1}
]
/*let buttonMessage = {
image: fs.readFileSync("./settings/sonel.jpg"),
jpegThumbnail: fs.readFileSync("./settings/sonel.jpg"),
fileName: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham女`,
fileLength: `999140795000000000`,
contextInfo:{externalAdReply:{
showAdAttribution: true,
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",  
title: `Selamat ${salam} ${pushname}`,
mediaType: 1,
jpegThumbnail: fs.readFileSync('./settings/log0.jpg'),
thumbnail: fs.readFileSync('./settings/log0.jpg'),
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}},
caption: ikln,
mentions:[m.sender],
footer: `© Ilham`,
//templateButtons: btn,
buttons: butts,
headerType: 6
}
ham.sendMessage(m.chat, buttonMessage, {quoted:m})*/
/*let buttonMessage = {
image: fs.readFileSync('./settings/log0.jpg'),
jpegThumbnail: ilham,
fileName: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham女`,
fileLength: `999140795000000000`,
contextInfo:{externalAdReply:{
renderLargerThumbnail: true,
showAdAttribution: true,
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",
title:`Selamat ${salam} ${pushname}`,
body: 'Jangan Lupa Donasi',
mediaType: 1,
jpegThumbnail: fs.readFileSync('./settings/log0.jpg'),
thumbnail: fs.readFileSync('./settings/log0.jpg'),
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}},
caption: listmn,
mentions:[m.sender, whatsapp],
footer: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham么`,
buttons: butts,
headerType: 6
}*/
ham.send5ButImg(m.chat, ikln, `© Ilham`, iklan1, btnG)
}
break
case 'iklan2':
{
let btnapi = [{
urlButton: {
displayText: 'Example Rest Api',
url: 'https://lolikey.herokuapp.com'
}
}, {
urlButton: {
displayText: 'Buy Sc Rest Api/Bot Click Here 😎',
url: 'https://wa.me/6285803583481?text=Halo+Bang+Mau+Buy+Sc+Api+Sama+Sc+Bot+Wa+😎🙏'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'DONASI BOT',
id: 'donate'
}
}, {
quickReplyButton: {
displayText: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓',
id: 'command'
}
}]
const ikln2 =`
#Sell
🛒Sc Rest Api/Sc Bot Wa🛒

*💠 Sc Rest Api Fitur  💠*
*💠 Download 💠*
*💠 Music 💠*
*💠 Information 💠*
*💠 Textprome 💠*
*💠 Search 💠*
*💠 Wallpaper 💠*
*💠 Stalk 💠*
*💠 Cecan 💠*
*💠 Asupan 💠*
*💠 Maker 💠*
*💠 Game 💠*
*💠 Islamic 💠*
*💠 Simi Simi 💠*
*💠 Primbon 💠*
*💠 Random Image 💠*
*💠 Random Text 💠*
*💠 Nsfw 💠*
*💠 Anime 💠*
*💠 News 💠*
*💠 Other 💠*

*💠 Example https://lolikey.herokuapp.com 💠*
🎊 Price : 25K

*💠 Sc Bot Wa 💠*
*💠 Fitur Banyak Kids Pengen Test Nomor Botnya?pc gweh 💠*
🎊 Price : 30K

🎊Fast Respon Di jam tertentu🎉
❏ ➪ Minat hub : wa.me/6285803583481
❏ ➪ Payment : Gopay, Dana
`
const iklan1 = await getBuffer (`https://telegra.ph/file/1fbd82f444625c5f63a39.jpg`)
let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '⫹⫺ OWNER BOT'}, type: 1}
]
ham.send5ButImg(m.chat, ikln2, `© Ilham`, iklan1, btnapi)
}
break

case 'wa': {ham.sendMessage(m.chat, { text: `@${whatsapp.split('@')[0]}`, mentions:[whatsapp] }, { quoted: m })}
break
case 'tagme': {
ham.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]} Sayang 😘`, mentions:[m.sender] }, { quoted: m })
}
break
case 'menuall': 
try {
oy = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ham.user.jid : m.sender
coy = await ham.profilePictureUrl(oy)
hamkun = await getBuffer(coy)
} catch {
hamkun = log0
}
{
	const spow = [
    {index: 1, urlButton: {displayText: `SOURCE CODE 🍒`, url : 'https://github.com/DikaArdnt/Hisoka-Morou' }},
    {index: 2, urlButton: {
displayText: 'My Group BOT',
url: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4'
}},
    {index: 3, quickReplyButton: { displayText: 'STATS BOT',
id: 'ping'} },
	{index: 4, quickReplyButton: { displayText: 'DONASI',
id: 'donasi'} },
    {index: 5, quickReplyButton: { displayText: 'OWNER BOT',
id: 'owner'} }
]
let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'ping', buttonText: {displayText: '⫹⫺ STATS BOT'}, type: 1},
{buttonId: 'iklan', buttonText: {displayText: '⫹⫺ IKLAN BOT'}, type: 1}
]
let tqto =`-THANKS TO-
Allah SWT
My Parent
Mark Zuckerberg
@adiwajshing
DikaArdnt
Jack
Neoxr
DeltaUhuyy
DenpaUhuyy
Hyzer
LanOFC
DinnPsatirzZ
this.Ilham
Penyedia RestApi
Penyedia Module
And Friends BOT`
let buttonMessage = {
location: { jpegThumbnail: await ham.reSize(flaming+'All Menu', 300, 150) },
//fileName: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham女`,
//fileLength: `999140795000000000`,
contextInfo:{externalAdReply:{
showAdAttribution: true,
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",
title: `Selamat ${salam} ${pushname}`,
body: 'Jangan Lupa Donasi',
mediaType: 1,
jpegThumbnail: thumb,
thumbnail: thumb,
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}},
caption: `${require('./settings/help.js').help(prefix, l, pushname)}`,
mentions:[m.sender],
footer: tqto,
buttons: butts,
headerType: 6
}
ham.sendMessage(m.chat, buttonMessage, {quoted:m})   
//ham.send5ButLoc(m.chat, `${require('./settings/help.js').help(prefix, l, pushname)}`, tqto, fluming+'All Menu', spow)
}
break
// ham.sendMessage(m.chat, { caption: `${require('./message/help.js').help(prefix, l, pushname)}`, document: fs.readFileSync('./media/file/ilham.xlsx'), mimetype: `${docs}`, fileName: `List Menunya kak ${pushname} 👋`, templateButtons: spow, footer: `Created by Ilham`, mentionedJid: [m.sender]  })
case 'hanzo': case 'prp': case 'inventori': case 'profile':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var flob = await getBuffer(picak+'Profile User')
     let teksehmazeh = `*── 「 PROFIL BIODATA 」 ──*\n\n`
     teksehmazeh += `*Name* : ${pushname}\n`
     teksehmazeh += `*Nomer* : _wa.me/${m.sender.split("@")[0]}_\n`
     teksehmazeh += `*Limit* : ${global.db.users[m.sender].limit}\n`
     teksehmazeh += `*Role* : ${role}\n`
     teksehmazeh += `*Level* : ${getLevelingLevel(m.sender)}`
     let butRun = [
{ urlButton: { displayText: `Group WhatsApp`, url : `https://s.id/allbot` } },
{ urlButton: { displayText: `Instagram`, url : `https://Instagram.com/rusydiilham_` } },
{ urlButton: { displayText: `☎️Contact Me`, url: `+62 812-3364-9676` } },
{ quickReplyButton: { displayText: `🏧 leaderboard`, id: 'leaderboard'} }
]
let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '⫹⫺ OWNER BOT'}, type: 1}
]
ham.sendMessage(m.chat, { caption: teksehmazeh, document: { url: 'https://wa.me/6281233649676' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: '© Ilham', buttons: butts, footer: `ingin Berpetualang Lagi`, mentions: [m.sender] })
}
break
case 'm': case 'list': case 'menu': case 'help': case '?':
try {
pp = await ham.profilePictureUrl(m.sender, 'image')
ilham = await getBuffer(pp)
} catch {
ilham = log0
}
let crotah = {key: {fromMe: false,"participant":whatsapp, "remoteJid": "status@broadcast"}, "message": {liveLocationMessage: {caption: `${moment(Date.now()).tz('Asia/Jakarta').locale('en').format('dddd, DD MMMM YYYY')}\nHave a nice days 🍃\n- this.ilham -`}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
{
    let kun = ["https://www.youtube.com/", "https://www.facebook.com/", "https://www.instagram.com/"]
    const btn = [
    {index: 1, urlButton: {displayText: `GROUP BOT`, url : 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4' }},
    {index: 2, urlButton: {
displayText: 'OWNER BOT',
url: 'https://wa.me/qr/M3ZKS3GNCSJSG1'
}},
    {index: 3, quickReplyButton: { displayText: `DONASI`, id: 'donasi'} },
	{index: 4, quickReplyButton: { displayText: `IKLAN`, id: 'iklan'} },
    {index: 5, quickReplyButton: { displayText: `ALLMENU`, id: 'menuall'} }
]
let timestamp = speed()
let latenso = speed() - timestamp
let tamnel = await ham.reSize(thumb, 300, 150)
let tamnel2 = await ham.reSize(ilham, 300, 150)
let fekling = await ham.reSize('https://telegra.ph/file/482ebce00aa380c407e58.jpg', 300, 150)
let butts = [
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'iklan', buttonText: {displayText: 'IKLAN BOT'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'DONATE'}, type: 1}
]
let buttonMessage= {
location: { jpegThumbnail: tamnel2 },
mimetype: docs,
fileName: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham女`,
fileLength: 999140795000000000,
jpegThumbnail: tamnel2,
pageCount: jumlahcmd,
caption: `${kunyek}Selamat ${salam}, ${pushname} 👋

- This Bot is currently under repair.

———「 User Info 」———
Name: ${pushname}
Limit: ${global.db.users[m.sender].limit}
Role: ${role}
Wame: wa.me/${m.sender.split('@')[0]}
Bio: ${bio.status}

———「 Server Info 」———
NodeJS: ${process.version}
Hostname: ${os.hostname()}
Platform: ${process.platform}
Down: ${Bandwit.download}
Up: ${Bandwit.upload}
Ram: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
OS Arch: ${process.arch}
OS Version: ${os.version()}
OS Release: ${os.release()}
OS Uptime: ${runtime(os.uptime())}
OS Type: ${os.type()}

———「 Date Info 」———
Masehi: ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')}
Hijriah: ${Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
    day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date(new Date + 3600000))}
Countdown:
Eid Mubarak: ${ultah}
New Year: ${eltah}

———「 Bot Info 」———
Hit total: ${jumlahcmd}
Hit today: ${jumlahharian}
𝘜𝘴𝘦𝘳𝘴 𝘚𝘦𝘳𝘷𝘦𝘳: ${jumlahUser}
SC:
https://github.com/DikaArdnt/Hisoka-Morou
Runtime: 
${runtime(process.uptime())}
Speed: ${latenso.toFixed(4)} Ms${kunyek}`,
footer: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham女`,
mentions:[m.sender],
//buttons: butts,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Active: ${runtime(process.uptime())}`,
body: 'Jangan Lupa Donasi',
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
mediaUrl: pickRandom(kun),
jpegThumbnail: ilham,
thumbnail: ilham,
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}},
templateButtons: btn,
}
ham.sendMessage(m.chat, buttonMessage, {quoted:m})
}
break
case 'senbug': {
if (!isCreator) return m.reply(mess.owner)
  const vyn = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "Semoga Harimu Senin Terus",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "@s.whatsapp.net"
}}}}
if (args.length < 1) return m.reply('senbug nomor|pesan')
nok = q.split('|')[0]+'@s.whatsapp.net'
pes = q.split('|')[1]
const jumlah = '1000'
for (let i = 0; i < jumlah; i++) {
ham.sendMessage(nok, {text: pes}, {quoted:vyn})
}
m.reply('sukses')
}
break
case 'b':
m.reply(`╭─❒ 「 Info Bot 」
├ Database: MongoDB
├ Lib: Baileys-MD
├ 𝘏𝘪𝘵 𝘚𝘦𝘳𝘷𝘦𝘳: ${jumlahcmd}
├ 𝘏𝘪𝘵 𝘛𝘰𝘥𝘢𝘺: ${jumlahharian}
├ Days, Date: ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')}
├ Server Time: ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss')} WIB
├ Down: ${Bandwit.download}
├ Up: ${Bandwit.upload}
├ Ram: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${formatp(os.totalmem())}
├ Hostname: ${os.hostname()}
├ OS Versi: ${os.version()}
├ OS Uptime: ${runtime(os.uptime())}
├ OS Type: ${os.type()}
├ Ping : ${ham.toFixed(4)} _Second_
├ Platform: ${os.platform()}
├ Runtime: ${runtime(process.uptime())}
╰──────❒`)
break
case 'groupbot':
case 'botgrup': 
m.reply(`s.id/allbot`)
break
case 'limit':
m.reply(`*Sisa Limit Anda : ${global.db.users[m.sender].limit}*`)
break
case 'getscmd': {
if (isBan) return m.reply(mess.ban)
ham.sendMessage(from, {sticker:{url:"https://Zackham.github.io/media/menu.webp"}}, {quoted:m})
ham.sendMessage(from, {sticker:{url:"https://Zackham.github.io/media/groupopen.webp"}}, {quoted:m})
ham.sendMessage(from, {sticker:{url:"https://Zackham.github.io/media/groupclose.webp"}}, {quoted:m})
}
break
//TEXT PRO CUY
case 'glitch3':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks|teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
await textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case '3dbox':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
.catch((err) => console.log(err));
break
case 'drapwater':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
 await textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
    .catch((err) => console.log(err));
break
case prefix+'lion':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks|teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
  await textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
     .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
     .catch((err) => console.log(err));
break
case 'lion2':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks|teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
  await textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
     .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
     .catch((err) => console.log(err));
break
case 'neondevil':
      if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
      m.reply(mess.wait)
      await textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
         .catch((err) => console.log(err));
break
case '3dstone':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case '3davengers':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks|teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
await textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'papercut':
      if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
      m.reply(mess.wait)
      await textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
         .catch((err) => console.log(err));
break
case 'transformer':
      if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
      m.reply(mess.wait)
      await textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
.catch((err) => console.log(err));
break
case 'hoorror':{
// data case
     m.reply(mess.wait)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
  case 'whitebear':{
   // data case
     m.reply(mess.wait)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'lirik':
     if (!q) return m.reply(`contoh: lirik sayang`)
	 const get = await fetchJson(`https://betabotz-api.herokuapp.com/api/music/liriklagu?query=${q}&apikey=${betakey}`)
     m.reply(`${get.result}`)
	 break
case 'thunder':{
// data case
     if (!q) return m.reply(`examples ${command} teks`)
     m.reply(mess.wait)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'styletext':
{
  m.reply(Object.entries(await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)).map(([name, value]) => `${name}\n${value}`).join`\n\n`)
}
break
case 'blackpink':{
// data case
     m.reply(mess.wait)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'pantun': case 'katabijak': case 'motivasi': 
let kon = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/${command}?apikey=${betakey}`)
m.reply(`${kon.result}`)
break
case 'katabucin':
bucin = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/${command}?apikey=${betakey}`)
m.reply(`${bucin.bucin}`)
break
case 'katasenja':
senja = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/${command}?apikey=${betakey}`)
m.reply(`${senja.senja}`)
break
case 'katadilan':
dilan = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/${command}?apikey=${betakey}`)
m.reply(`${dilan.dilan}`)
break
case 'fiersa': 
fier = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/${command}?apikey=${betakey}`)
m.reply(`${fier.fiersa}`)
break
case 'taugasih':
tau = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/taugasih?apikey=${betakey}`)
m.reply(`${tau.taugasih}`)
break
case 'nyindir': case 'ngawur': case 'bacot': case 'katailham':
bod = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/${command}?apikey=${betakey}`)
m.reply(`${bod.hasil}`)
break
case 'tsunami':
kon = await fetchJson(`https://betabotz-api.herokuapp.com/api/info/tsunami?apikey=${betakey}`)
mek = kon.daftar_tsunami
text = `Info Tsunami🌊
Title 💌 = ${kon.titles}
Tanggal 🗓️: ${mek.tangal}
Lokasi 🚩: ${mek.lokasi}
Magnitude 🌊: ${mek.magnitude}
Kedalaman 💦: ${mek.kedalaman}
Wilayah ⛰️: ${mek.wilayah}`
m.reply(text)
break
case 'hollographic':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'bear':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
await textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'wolf':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
await textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'bokeh':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'greenneon':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case '3dneon':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'neon':{
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'matrix':{
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sky':{
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'joker':{
     let link = `https://textpro.me/create-logo-joker-online-934.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'magma':{
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sand':{
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'candy': case prefix+'christmas': case prefix+'3dchristmas': case prefix+'sparklechristmas':
case prefix+'deepsea': case prefix+'scifi': case prefix+'rainbow': case prefix+'waterpipe': case prefix+'spooky': 
case prefix+'pencil': case prefix+'circuit': case prefix+'discovery': case prefix+'metalic': case prefix+'fiction': case prefix+'demon': 
case prefix+'transformer': case prefix+'berry': case prefix+'thunder': case prefix+'magma': case prefix+'3dstone': 
case prefix+'neonlight': case prefix+'glitch': case prefix+'harrypotter': case prefix+'brokenglass': case prefix+'papercut': 
case prefix+'watercolor': case prefix+'multicolor': case prefix+'neondevil': case prefix+'underwater': case prefix+'graffitibike':
 case prefix+'snow': case prefix+'cloud': case prefix+'honey': case prefix+'ice': case prefix+'fruitjuice': case prefix+'biscuit': case prefix+'wood': 
case prefix+'chocolate': case prefix+'strawberry': case prefix+'matrix': case prefix+'blood': case prefix+'dropwater': case prefix+'toxic': 
case prefix+'lava': case prefix+'rock': case prefix+'bloodglas': case prefix+'hallowen': case prefix+'darkgold': case prefix+'joker': case prefix+'wicker':
 case prefix+'firework': case prefix+'skeleton': case prefix+'blackpink': case prefix+'sand': case prefix+'glue': case prefix+'1917': case prefix+'toy': {
             if (!q) return m.reply(`Example : ${prefix + command} Deff`) 
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/toy/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await textpro(link, q)
                ham.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
break
case 'natural':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'carbon':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'pencil':{
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'graffiti':{
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'metallic':{
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'steel':{
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'harrypotter':{
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'underwater':{
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'luxury':{
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'glue':{
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'fabric':{
     let crot = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(crot, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'neonlight':{
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'lava':{
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'toxic':{
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'ancient':{
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case '3dspace':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks|teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
await textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'glitch':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks`)
m.reply(mess.wait)
await textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'glitch2':
if(!q) return m.reply(`Penggunaan ${prefix + command} teks|teks`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
await textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ham.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'christmas':{
//del
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sci_fi':{
//del
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'rainbow':{
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
//BARU
case 'classic':{
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'watercolor':{
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'halloween':{
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'halloweenfire':{
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'writing':{
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'foggy':{
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'marvel':{
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
   case 'emojimix': {
if (!text) throw `Example : ${prefix + command} 😆+🤣`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
    let encmedia = await ham.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
    await fs.unlinkSync(encmedia)
}
    }
    break
case 'culik': {
 if (!isCreator) return m.reply(mess.owner)
  try {
  let pantk = []
  for (let mem of participants) {
  pantk.push(mem.jid)
  }
  ham.groupParticipantsUpdate(args[0], pantk)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'skeleton':{
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sketch':{
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'wonderful':{
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'cool':{
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'collwall':{
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'multicolor':{
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'batman':{
  //del
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'juice':{
  //del
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    ham.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
//WM By Rizki
case 'pornhub':{
if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
// data case
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
ham.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'retro':{
if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
// data case
     m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
ham.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'horror':{
if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
// data case
     m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
ham.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case '8bit':{
// data case
     m.reply(mess.wait)
if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
ham.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'textmaker': {
// data case
     m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return m.reply(`Example :\n${prefix + command + ' ' + args[0]} Zackham`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
ham.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return m.reply(`Example :\n${prefix + command + ' ' + args[0]} Zackham`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
ham.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*List Text Maker :*\n•> glitch\n•> glow`)
}
}
break
case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    m.reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    m.reply(txt)       
  }
 break
case 'mancing':{
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return m.reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
  m.reply("1 umpan terpakai")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
displayText: 'Mancing lagi🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './database/image/mancing.jpg' },
      caption: caption,
      footer: "Fax Ganteng",
      buttons: buttons,
      headerType: 4
     }
     ham.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai memancing🎣`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)     
  }   
  break  
  case 'darah':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  m.reply(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isCekDarah < 1) return m.reply('Darah kamu habis')
   kurangDarah(m.sender, 7)
  m.reply('Telah Si Bacok️')
  }
  break
case 'mining': case 'menambang':{
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './database/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     ham.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`*${pushname}* Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)     
  }   
  break 
  case 'readmore':{
    let [l, r] = text.split`|`
  if (!l) l = ''
  if (!r) r = ''
  m.reply( l + readmore + r )
  }
  break
  case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
 case 'cerpen-anak':{
let cerpe = await cerpen(`anak`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let cerpe = await cerpen(`bahasa daerah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let cerpe = await cerpen(`bahasa Inggris`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let cerpe = await cerpen(`bahasa jawa`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let cerpe = await cerpen(`bahasa sunda`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
let cerpe = await cerpen(`budaya`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
let cerpe = await cerpen(`cinta`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
let cerpe = await cerpen(`cinta islami`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
let cerpe = await cerpen(`cinta pertama`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let cerpe = await cerpen(`cinta romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
let cerpe = await cerpen(`cinta sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
let cerpe = await cerpen(`cinta sejati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
let cerpe = await cerpen(`gokil`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
let cerpe = await cerpen(`inspiratif`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
let cerpe = await cerpen(`jepang`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
let cerpe = await cerpen(`kehidupan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
let cerpe = await cerpen(`keluarga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let cerpe = await cerpen(`kisah nyata`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
let cerpe = await cerpen(`korea`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
let cerpe = await cerpen(`kristen`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
let cerpe = await cerpen(`liburan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
let cerpe = await cerpen(`malaysia`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
let cerpe = await cerpen(`mengharukan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
let cerpe = await cerpen(`misteri`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
let cerpe = await cerpen(`motivasi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
let cerpe = await cerpen(`nasihat`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let cerpe = await cerpen(`nasionalisme`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
let cerpe = await cerpen(`olahraga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
let cerpe = await cerpen(`penantian`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
let cerpe = await cerpen(`pendidikan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
let cerpe = await cerpen(`pengalaman pribadi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let cerpe = await cerpen(`pengorbanan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
let cerpe = await cerpen(`penyesalan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
let cerpe = await cerpen(`perjuangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
let cerpe = await cerpen(`perpisahan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
let cerpe = await cerpen(`petualangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
let cerpe = await cerpen(`ramadhan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
let cerpe = await cerpen(`remaja`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
let cerpe = await cerpen(`rindu`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
let cerpe = await cerpen(`romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
let cerpe = await cerpen(`sastra`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
let cerpe = await cerpen(`sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
let cerpe = await cerpen(`sejarah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'c':
case 'getcase':
if (!isCreator) return m.reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./hamz.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
break
 case 'sel': case 'jual':{
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break

 case 'heal':{
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'akira': case 'boruto': case 'akira':
                  case 'chitoge': case 'deidara': case 'doraemon': case 'elaina':
                  case 'emilia': case 'erza': case 'gremory': case 'hestia':
                  case 'hinata': case 'inori': case 'isuzu': case 'itachi':
                  case 'itori': case 'kaga': case 'doraemon': case 'kagura':
                  case 'kakasih': case 'kaori': case 'kotori': case 'keneki':
                  case 'madara': case 'megumin': case 'nekonime': case 'sagiri':
                  case 'ana': case 'asuna': case 'ayuzawa':
                  case 'akiyama': case 'loli': {
                   m.reply(mess.wait)
                   let anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/anime/${command}.json`)
                   let result = pickRandom(anu)
                   ham.sendMessage(m.chat, { image: { url: result }, caption: `Random Anime ${command}` }, { quoted: m })
                   }
	               break
 case 'berburu':{ 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './database/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './database/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './database/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './database/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './database/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './database/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     ham.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'ringtone': {
if (!args.join(" ")) return m.reply(`Contoh:\n${prefix + command} black over`)
let { ringtone } = require('./baileys/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
ham.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
    }
    break
case 'wallpaper': {
    if (!args.join(" ")) return m.reply("Mau cari gambar apa kak?")
let { wallpaper } = require('./baileys/scraper')
    anu = await wallpaper(args)
    result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
    ]
    let buttonMessage = {
image: { url: result.image[0] },
caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: `© Created Ilham`,
buttons: buttons,
headerType: 4
    }
    ham.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
arg = args.join(' ')
mee = await ham.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baileys/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await ham.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case prefix+'cuaca':{
if(!q) return m.reply('Example : #cuaca jakarta') 
cuc = await caliph.search.cuaca(q) 
await ham.sendMessage(from, { location: { degreesLatitude: cuc.data.Latitude, degreesLongitude: cuc.data.Longitude } })
joks = `Nama : ${q}\nLongtitude : ${cuc.data.Longitude}\nLatitude : ${cuc.data.Latitude}\nSuhu : ${cuc.data.Suhu}\nAngin : ${cuc.data.Angin}\nCuaca ${cuc.data.Cuaca}\nUdara :${cuc.data.Udara}\nKeterangan : ${cuc.data.Keterangan}`
m.reply(joks) 
}
break
case 'wikimedia': {
    if (!args.join(" ")) return m.reply("Mau cari gambar apa kak?")
let { wikimedia } = require('./baileys/scraper')
    anu = await wikimedia(args)
    result = anu[Math.floor(Math.random() * anu.length)]
    let buttons = [
{buttonId: `wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
    ]
    let buttonMessage = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
footer: `© Created Lol Ilham`,
buttons: buttons,
headerType: 4
    }
    ham.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesimage':case 'qoutesimage':
   let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
   m.reply(mess.wait)
  ham.sendMessage(m.chat, { image: { url: cok }, caption: 'Done By Ilham' }, { quoted: m })
  break
case 'quotesanime': case 'quoteanime': {
let { quotesAnime } = require('./baileys/scraper')
    let anu = await quotesAnime()
    result = anu[Math.floor(Math.random() * anu.length)]
    let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
    ]
    let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
    }
    ham.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'sc':
m.reply(`Base Script Ini Adalah:
https://github.com/DikaArdnt/Hisoka-Morou`)
break
case 'thanksto':
case 'tqto': {
let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'ping', buttonText: {displayText: '⫹⫺ STATS BOT'}, type: 1}
]
let buttonMessage = {
location: { jpegThumbnail: await ham.reSize(fluming+'Thanks To', 300, 150) },
//fileName: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham女`,
//fileLength: `999140795000000000`,
contextInfo:{externalAdReply:{
showAdAttribution: true,
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",
title: `Selamat ${salam} ${pushname}`,
body: 'Jangan Lupa Donasi',
mediaType: 1,
jpegThumbnail: thumb,
thumbnail: thumb,
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}},
caption: `-THANKS TO-
Allah SWT
My Parent
Mark Zuckerberg
@adiwajshing
DikaArdnt
Jack
Neoxr
DeltaUhuyy
DenpaUhuyy
Hyzer
LanOFC
DinnPsatirzZ
this.Ilham
Penyedia RestApi
Penyedia Module
And Friends BOT`,
mentions:[m.sender],
footer: 'Ilham',
buttons: butts,
headerType: 6
}
ham.sendMessage(m.chat, buttonMessage, {quoted:m})
}
break
//by Thunder team
case 'iklan': {
  const sections = [
    {
        title: "Iklan VPS/RDP 💻",
        rows: [
        {title: "IKLAN  VPS/RDP", rowId: "iklan1", description: `Menyediakan RDP/VPS yang murah, berkualitas, adminnya pun ramah. Recommended banget cuy😅☝️`}
        ]
        },
        {
          title: "Iklan Script Akses SSH Railway 💻",
          rows: [
          {title: "IKLAN  Script Akses SSH Railway", rowId: "iklan3", description: `Menyediakan Script Akses SSH Railway. Adminnya sih kedinginan, suka off, tapi kalau on fast respon cuy😅☝️`}
          ]
          },
        {
        title: "Iklan RestApi & Script Bot",
        rows: [
        {title: "IKLAN  Restapi & SC Bot", rowId: "iklan2", description: `Menyediakan Rest Api/SC Bot yg keren, fitur? banyak, btw adminnya ganz:v, jadi jangan lupa beli:v`}
        ]
        }
  ]
  const listMessage = {
  text: `Selamat ${salam},
Berikut adalah Iklan yang tersedia di ${namebot}.

Jika Menemukan Bug/Error, segera lapor kepada Owner,
agar segera di tangani.
  
Thanks`,
  footer: `© Ilham`,
  title: `Halo, kak ${pushname} 👋`,
  mentions:[m.sender],
  buttonText: "Click Here",
  sections
  }
  const sendMsg = await ham.sendMessage(m.chat, listMessage, {quoted: ftext})
}
  break
case 'command':
  const sections = [
  {
  title: "📖 All Menu Bot",
  rows: [
  {title: "All Menu", rowId: "menuall", description: `Menampilkan Seluruh Menu ${namebot}`}
  ]
  },
 {
  title: "🏆 Big Thanks To",
  rows: [
  {title: "Contributors", rowId: "tqto", description: `Ucapan Terima Kasih Kepada Constributor`}
  ]
  },
  {
  title: "Iklan VPS/RDP 💻",
  rows: [
  {title: "IKLAN  VPS/RDP", rowId: "iklan1", description: `Menyediakan RDP/VPS yang murah, berkualitas, adminnya pun ramah. Recommended banget cuy😅☝️`}
  ]
  },
  {
    title: "Iklan Script Akses SSH Railway 💻",
    rows: [
    {title: "IKLAN  Script Akses SSH Railway", rowId: "iklan3", description: `Menyediakan Script Akses SSH Railway. Adminnya sih kedinginan, suka off, tapi kalau on fast respon cuy😅☝️`}
    ]
    },
  {
  title: "Iklan RestApi & Script Bot",
  rows: [
  {title: "IKLAN  Restapi & SC Bot", rowId: "iklan2", description: `Menyediakan Rest Api/SC Bot yg keren, fitur? banyak, btw adminnya ganz:v, jadi jangan lupa beli:v`}
  ]
  },
  {
  title: "📚 Sumber Script",
  rows: [
  {title: "Script", rowId: "sc", description: `Menampilkan Sumber Script ${namebot}`}
  ]
  },
  {
  title: "👦 Creator",
  rows: [
  {title: "Creator", rowId: "owner", description: `Menampilkan Kontak Creator ${namebot}`}
  ]
  },
  ]
  const fkon = {
    key: { 
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(from ? 
    { remoteJid: "status@broadcast" } : {}) 
    },
    message: { 
    "extendedTextMessage": {
     "text":`${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')}`,
    "title": `Ilham-MD`,
     'jpegThumbnail': log0
    }
    } 
    }
  const listMessage = {
  text: `Selamat ${salam},
Berikut adalah Menu yang tersedia di ${namebot}.

Jika Menemukan Bug/Error, segera lapor kepada Owner,
agar segera di tangani.
  
Thanks`,
  footer: `© Ilham`,
  title: `Halo, kak ${pushname} 👋`,
  mentions:[m.sender],
  buttonText: "Click Here",
  sections
  }
  const sendMsg = await ham.sendMessage(m.chat, listMessage, {quoted: fkon})
  break
case 'git':
case 'gitclone':
if (isBan) return m.reply(mess.ban)
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return m.reply('\`\`\`Linknya?\`\`\`')
if (!regx.test(args[0])) return m.reply('\`\`\`Linknya Salah!\`\`\`')
let [, user, repo] = args[0].match(regx) || []
repos = repo.replace(/.git$/, '')
hasdl = `https://api.github.com/repos/${user}/${repos}/zipball`
//namafile = (await fetchJson(hasdl, {method: 'HEAD'})).headers.heads('content-disposition').match(/attachment; filename=(.*)/)[1]
ham.sendFile(m.chat, hasdl, 'done', m)
//ham.sendMessage(m.chat, {document: {url: res[0].link}, mimetype: res[0].mime, fileName: res[0].nama}, {quoted:m})
break
case 'anime': { 
m.reply(mess.wait)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
    {
     title: `${i.title}\n\n`, 
     rowId: `${prefix}animesearch ${i.mal_id}`,
     description: `${i.synopsis}`
    }, 
    ]
     }
     sections.push(list)   
     }
  const sendm =  ham.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: "Ilham",
       title: "Data Base Ada Di Button Ini",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'group':
case 'grupsetting':
case 'groupsetting':{
let sections = []
let com = [`grup open`,`leveling on`,`autosticker enable`,`welcome on`,`antilink on`]
let comm = [`grup close`,`leveling off`,`autosticker disable`,`welcome off`,`antilink off`]
let listnya = [`Group open/close`,`Leveling on/off`,`Auto-Sticker on/off`,`Welcome on/off`,`antilink on/off`]
let suruh = [`Enable`, `Disable`]
let fiturname = [`Group`,`Leveling`,`AutoSticker`,`Welcome`,`Antilink`]
let startnum = 0; let startnu = 0; let startn = 0;let start = 0
let startnumm = 1
for (let x of com) {
const yy = {title: `${listnya[startnum++]}`,
rows: [
   {
title: `${suruh[0]}`,
description: `Mengaktifkan ${fiturname[startnu++]}`,
rowId: `${prefix}${x}`
  },{
title: `${suruh[1]}`,
description: `Menonaktifkan ${fiturname[startn++]}`,
rowId: `${prefix}${comm[start++]}`
  }
]
       }
sections.push(yy)
}
const sendm =  ham.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: "Only Admin Yak",
       title: "Atur Settingan Grup anda disini......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break

case 'animesearch':{
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `     Anime Search      \n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Produser Utama:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
ham.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
case 'coffe': case 'kopi': {
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
    ]
    let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: `Created By © Ilham`,
buttons: buttons,
headerType: 4
    }
    ham.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'emoji': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply('emojinya?')
// data case
     m.reply(mess.wait)
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await ham.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
await ham.sendMessage(from, {text:"s"}, {quoted:mese})
})
}
break
case 'suitpvp': case 'suit': {
if (isBan) return m.reply(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await ham.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) ham.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

//============ RUMUS BIAR LU PINTER DEK - FAX
case 'luas-segitiga':
m.reply(mess.wait)
if (!q) return m.reply(`untuk mencari hasil dari luas segitiga\nGunakan ${prefix}luassegitiga alas tinggi\ncontoh: ${prefix}luas-segitiga 12 7`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
m.reply(`*Hasil:* ${luasseg}\n${caraluas}`)
} catch (err) {
m.reply('Format pesannya salah tuh')
}
break
case 'kel-segitiga':
m.reply(mess.wait)
if (!q) return m.reply(`Untuk mencari Hasil dari keliling segitiga\nGunakan ${prefix}kelsegitiga sisi1 sisi2 sisi3\nContoh: ${prefix}kelsegitiga 32 10 8`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return m.reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     m.reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
m.reply(`*Hasil:* ${kelsegitiga}\n*Rumus:* ${carakel}`)
} catch (err) {
m.reply('Format pesannya salah tuh')
}
break
case 'luas-persegi':

if (!q) return m.reply(`Untuk mencari Hasil dari luas persegi\nGunakan ${prefix}luaspersegi angka\nContoh: ${prefix}luaspersegi 32`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
m.reply(`*Hasil:* ${luaspersegi}\n*Rumus:* ${luaspersegis}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'pythagoras':

if (!q) return m.reply(`Untuk mencari hasil pythagoras\nGunakan ${prefix}pythagoras opsi angka1 angka2\nContoh: ${prefix}pythagoras miring 8 6`) 
try {
const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
m.reply(`*Hasil:* ${pytha}\n*Rumus:* ${rumuspytha}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'perkalian':

if (!q) return m.reply(`Untuk mencari hasil perkalian\nGunakan ${prefix}perkalian angkaperkalian jumlahperkalian\nContoh: ${prefix}perkalian 5 15`) 
try {
const perkal = bdr.rdb.perkalian(args[0], args[1])
m.reply(`*Hasil:* ${perkal}\n*Rumus:* ${rumusperkal}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kel-persegi':

if (!q) return m.reply(`Untuk mencari Hasil dari keliling persegi\nGunakan ${prefix}kelpersegi angka\nContoh: ${prefix}kelpersegi 78`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
m.reply(`*Hasil:* ${persegi}\n*Rumus:* ${caraPersegi}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kuadrat':
if (!q) return m.reply(`Untuk mencari sebuah Hasil Kuadrat\nGunakan ${prefix}kuadrat angka\nContoh: ${prefix}kuadrat 6`) 
try {
const kuadrat = bdr.rdb.kuadrat(q)
m.reply(`*Hasil:* ${kuadrat}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kubik':
if (!q) return m.reply(`Untuk mencari sebuah Hasil Kubik\nGunakan ${prefix}kubik angka\nContoh: ${prefix}kubik 9`) 
try {
const kubik = bdr.rdb.kubik(q)
m.reply(`*Hasil:* ${kubik}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'family100': {
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return m.reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     m.reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await ham.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await ham.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
ham.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
ham.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
ham.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
ham.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,"© Ilham - X - Ilham", m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
ham.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
ham.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
ham.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
ham.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
ham.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
ham.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
ham.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
ham.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply(mess.ban)
let TicTacToe = require("./baileys/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await ham.sendText(room.x, str, m, { mentions: parseMention(str) } )
await ham.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
m.reply('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
if (isBan) return m.reply(mess.ban)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
ham.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'kuismath': case 'math': {
if (isBan) return m.reply(mess.ban)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./mongoDB/math')
if (!args.join(" ")) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
ham.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await ham.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
					  /*let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '⫹⫺ OWNER BOT'}, type: 1}
]
let buttonMessage = {
image: global.thumb,
jpegThumbnail: global.thumb,
caption: txt,
footer: `© Ilham`,
//templateButtons: btn,
buttons: butts,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Selamat ${salam} ${pushname}`,
mediaType: 2,
renderLargerThumbnail: true, 
showAdAttribution: true, 
jpegThumbnail: {url: 'https://i.ibb.co/9st0YPR/proxy-form.png'},
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4", 
thumbnail: {url: 'https://i.ibb.co/9st0YPR/proxy-form.png'},
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"
}}
}
ham.sendMessage(m.chat, buttonMessage, {quoted:m})*/
                      ham.send5ButImg(i, txt, ham.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Text mana?\n\nExample : ${prefix + command} LoL`)
    let anu = await store.chats.all().map(v => v.id)
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
    await sleep(1500)
    let btn = [{
urlButton: {
displayText: 'SCRIPT',
url: 'https://github.com/Ilham24/KaguraMD'
}
    }, {
callButton: {
displayText: 'OWNER',
phoneNumber: ' +62 822-7991-5237'
}
    }, {
quickReplyButton: {
displayText: 'STATUS',
id: 'ping'
}
    }, {
quickReplyButton: {
displayText: 'CREATOR',
id: 'owner'
}  
    }, {
quickReplyButton: {
displayText: 'PROFILE',
id: 'hanzo'
}
    }]
  let txt = `「 Broadcast Bot 」\n\n${text}`
  /*let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '⫹⫺ OWNER BOT'}, type: 1}
]
let buttonMessage = {
image: global.thumb,
jpegThumbnail: global.thumb,
caption: txt,
footer: `© Ilham`,
//templateButtons: btn,
buttons: butts,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Selamat ${salam} ${pushname}`,
mediaType: 2,
renderLargerThumbnail: true, 
showAdAttribution: true, 
jpegThumbnail: {url: 'https://i.ibb.co/9st0YPR/proxy-form.png'},
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4", 
thumbnail: {url: 'https://i.ibb.co/9st0YPR/proxy-form.png'},
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"
}}
}
ham.sendMessage(yoi, buttonMessage, {quoted:m})*/
  ham.send5ButImg(yoi, txt, ham.user.name, global.thumb, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted && !args.join(" ")) return m.reply(`Kirim.reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case 'vote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (m.chat in vote) return m.reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!args.join(" ")) return m.reply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
image: log0,
jpegThumbnail: log0,
caption: teks_vote,
footer: "© Ilham - X - Ilham",
buttons: buttonsVote,
headerType: 1
}
ham.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return m.reply('Kamu Sudah Vote')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
image: log0,
jpegThumbnail: log0,
caption: teks_vote,
footer: "© Ilham - X - Ilham",
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
ham.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return m.reply('Kamu Sudah Vote')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
image: log0,
jpegThumbnail: log0,
caption: teks_vote,
footer: "© Ilham - X - Ilham",
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
ham.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${ham.user.id}
`
ham.sendTextWithMentions(m.chat, teks_vote, m)
}
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'listpc': {
if (isBan) return m.reply(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
ham.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await ham.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                ham.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'afk': {
if (isBan) return m.reply(mess.ban)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
m.reply(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : 'Nothing'}`)
}
break
case 'setcmd': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
if (!args.join(" ")) return m.reply(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
if (isBan) return m.reply(mess.ban)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return m.reply(`Tidak ada hash`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to delete this sticker command')
delete global.db.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
if (isBan) return m.reply(mess.ban)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
ham.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply('Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return m.reply('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case 'addmsg': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Message Yang Ingin Disave Di Database')
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} nama file`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return m.reply(`'${args.join(" ")}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
    
Akses dengan ${prefix}getmsg ${args.join(" ")}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${args.join(" ")}' tidak terdaftar di list pesan`)
ham.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break

case 'listmsg': {
if (isBan) return m.reply(mess.ban)
let msgs = JSON.parse(fs.readFileSync('./mongoDB/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
case 'fliptext': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext Myham`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'tohuruf': {
if (isBan) return m.reply(mess.ban)
if (!Number(args[0])) return m.reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
m.reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
m.reply("Error")
}
}
break
case 'ghfollowing':case 'followinggh':
anu = await fetchJson(`https://api.github.com/users/${q}/following`)
teks = `*Following Github: ${q}\n\n`
buffer = await getBuffer(anu[0].avatar_url)
teks = `*Username:* ${anu.login}\n*Link:* ${anu.html_url}\n    \n`
ham.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'welcome': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Succes menyalakan welcome di group ini')
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Succes mematikan welcome di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'autorevoke': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (GcRvk) return m.reply('Sudah Aktif')
gcrevoke.push(from)
m.reply('Succes menyalakan autorevoke di group ini')
} else if (args[0] === "off") {
if (!GcRvk) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
m.reply('Succes mematikan autorevoke di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'leveling':
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === 'on'){
if (isLeveling) return m.reply(`Udah aktif`)
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
m.reply('leveling aktif')
} else if (args[0] === 'off'){
let anu = _leveling.indexOf(from)
_leveling.splice(anu, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
m.reply('leveling nonaktif')
} 
break
case 'autosticker':
case 'autostiker':
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik autosticker enable untuk mengaktifkan\nketik autosticker disable untuk menonaktifkan')
if (args[0]  === 'enable'){
if (isAutoSticker) return m.reply(`Udah aktif`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker aktif')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker nonaktif')
}
break
case 'autostickerpc':
case 'autostikerpc':
      if (m.isGroup) return m.reply('Command ini khusus chat pribadi!')
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply('ketik autosticker enable untuk mengaktifkan\nketik autosticker disable untuk menonaktifkan')
if (args[0]  === 'enable'){
if (isAutoStick) return m.reply(`Udah aktif`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
m.reply('autostickerpc aktif')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
m.reply('autostickerpc nonaktif')
}
break
case 'sewad':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Penggunaan :\n*${prefix}sewad* add/del waktu`)
if (args[0] === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
m.reply(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
m.reply(mess.success)
} else {
m.reply(`Penggunaan :\n*${prefix}sewad* add/del waktu`)}
break
case 'sewalist': 
case 'listsewa':
let cekvippsewa = ms(i.expired - Date.now())
let listsewa = `List Sewa\nJumlah : ${sewa.length}\n\n*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
m.reply(listsewa)
break
case 'sewacheck':
case 'ceksewa': 
if (!m.isGroup) return m.reply('khusus Grup')
if (!isSewa) return m.reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
m.reply(sewanya)
break
case 'antilink': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini')
var groupe = await ham.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ham.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'listonline': case 'listaktif': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
ham.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'chat': {
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
ham.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await m.reply("Succes")
break
case 'cowner': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
case 'ban': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('User sudah dibanned')
banUser.push(orgnye)
m.reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
m.reply(`Succes delban`)
} else {
m.reply("Error")
}
}
break
case 'request': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
ham.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
ham.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'report': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
ham.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
ham.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'mcserver': case 'mcquery': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.zackham.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return m.reply("ipnya mana kak?")
if (!portnya) return m.reply("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
m.reply(jsonformat(success));
return q.basicStat()
})
.then(success => {
m.reply(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: log0,
caption: teks,
footer: "© Ilham",
buttons: buttons,
headerType: 4
}
ham.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'sfilesearch':
if (!q) return m.reply(`Example : ${prefix + command} config tsel`)
yogipw.sfilesearch(q).then(async(res) => {
for (let i of res) {
teks = `Name : ${i.name}
Link : ${i.lin}`
ham.sendMessage(m.chat, { image: { url: i.ico },  caption: 'Done'}, { quoted: m })
}})
break
case 'happymod': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: log0,
caption: teks,
footer: "© Ilham",
buttons: buttons,
headerType: 4
}
ham.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `ping`, buttonText: {displayText: 'Status'}, type: 1}
]
let buttonMessage = {
image: {url: flaming+'Group Whatsapp'},
caption: teks,
footer: "© Ilham",
buttons: buttons,
headerType: 4
}
ham.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
if (isBan) return m.reply(mess.ban)
yogipw.servermc().then(async(res) => {
let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: log0,
caption: teks,
footer: "© Ilham ",
buttons: buttons,
headerType: 4
}
ham.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'antitag': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
m.reply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
m.reply(`Berhasil menonaktifkan antitag!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'yts': case 'ytsearch': {
                if (!q) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(q)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
				teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                ham.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'npmjs':
            if (!q) return m.reply(`Kirim perintah ${prefix}npmjs *query*\nContoh: ${prefix}npmjs axios`)
            axios.get(`https://www.npmjs.com/search/suggestions?q=${q}`).then(x => {
                let listnpm = "*「 NPMJS-SEARCH 」*\n\n"
                for (let y = 0; y < x.data.length; y++) {
                    listnpm += `• *Name:* ${x.data[y].name}\n• *Scope:* ${x.data[y].scope}\n• *Publisher:* ${x.data[y].publisher.username}\n• *Link:* ${x.data[y].links.npm}\n• *Date:* ${x.data[y].date}\n• *Description:* ${x.data[y].description}\n\n`
                }
			ham.sendMessage(from, {image: { url: "https://static.npmjs.com/5f6e93af5bf0f5dcdd1eecdac99f51ee.png"}, caption: listnpm.trim()}, {quoted:m})
            })
            break
case 'getpic': {
if (qtod === "true") {
try {
pporg = await ham.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ham.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await ham.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ham.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
case 'infochat': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
ham.sendTextWithMentions(m.chat, teks, m)
}
break
case 'setexif': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text) return m.reply(`Example : ${prefix + command} packname|author`)
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n*Packname* : ${global.packname}\n*Author* : ${global.author}`)
}
break
case 'setnamabot': case 'setnamebot': {
	        if (!isCreator) return m.reply(mess.owner)
            if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
            let name = await ham.updateProfileName(text)
            m.reply(`Successfully renamed bot to ${text}`)
            }
            break
case 'setname': case 'setsubject': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Text ?')
await ham.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ham.updateBlockStatus(users, "block").then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ham.updateBlockStatus(users, "unblock").then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Text ?')
await ham.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
            if (!isCreator) return m.reply(mess.owner)
            if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            var media = await ham.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            if (args[0] == `'panjang'`) {
            var { img } = await generateProfilePicture(media)
            await ham.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            } else {
            var data = await ham.updateProfilePicture(botNumber, { url: media })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
            }
                break
/*case 'setppbot': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
let media = await ham.downloadAndSaveMediaMessage(quoted)
await ham.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break*/
case 'delete': case 'del': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
//if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
ham.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'clearall': {
     if (!isCreator) return m.reply(mess.owner)
{
      ham.chatModify({ delete: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isCreator) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                var media = await ham.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == `'panjang'`) {
                var { img } = await generateProfilePicture(media)
                await ham.query({
                tag: 'iq',
                attrs: {
                to: m.chat,
                type:'set',
                xmlns: 'w:profile:picture'
                },
                content: [
                {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
                }
                ]
                })
                fs.unlinkSync(media)
                m.reply(`Sukses`)
                } else {
                var data = await ham.updateProfilePicture(m.chat, { url: media })
                fs.unlinkSync(media)
                m.reply(`Sukses`)
                }
                }
                break
case 'tagall': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
ham.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
ham.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'totag': {
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
               ham.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case 'otag': {
               //if (!m.isGroup) return m.reply(mess.group)
               //if (!isBotAdmins) return m.reply(mess.botAdmin)
               //if (!isAdmins) return m.reply(mess.admin)
               if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
               ham.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case 'autoreadsw':
if (!isCreator) return m.reply(`Khusus Owner`)
if (args[0] == 'on') {
if (autoreadsw) return m.reply('*Sudah aktif!*')
autoreadsw = true
m.reply('*Berhasil mengaktifkan auto read sw*')
} else if (args[0] == 'off') {
if (!autoreadsw) return m.reply('*Belum aktif!*')
autoreadsw = false
m.reply('*Berhasil mematikan auto read sw*')
} else {
m.reply('Pilih on atau off!')
}
break
case 'link':
case 'linkgrup':
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return m.reply(mess.group)
let response = await ham.groupInviteCode(m.chat)
ham.sendMessage(m.chat, {
  text: `Link Group: ${groupMetadata.subject}`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Salin Link`,
      url: 'https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/' + `${response}l`
    }
  }],
  footer: 'Ilham'
})
}
break
case 'revoke': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
ham.groupRevokeInvite(m.chat)
}
break
case 'ephemeral': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!args[0]) return m.reply('Masukkan value enable/disable')
if (args[0] === 'enable') {
await ham.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await ham.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'editinfo': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'open'){
await ham.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await ham.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: log0,
caption: `*「 Ilham 」*\n\nChange Info, Select Open Or Close`,
footer: "© Ilham",
buttons: buttons,
headerType: 4
}
ham.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case 'grup': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'close'){
await ham.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await ham.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'grup open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'grup close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: log0,
caption: `*「 Ilham 」*\n\nChange Group Setting, Select Open Or Close`,
footer: "© Ilham",
buttons: buttons,
headerType: 4
}
ham.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case 'promote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ham.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ham.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'kick': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ham.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ham.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'inspect': {
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
ham.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await ham.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
ham.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await ham.parseMention(tekse) })
})
}
break
case 'join': {
if (isBan && isCreator) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return m.reply("Link invalid!")
if (isCreator) {
await ham.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
ham.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 1) {
teks = `Maaf anggota group anda kurang dari 1, minimal agar bot join harus mempunyai lebih dari 1 anggota`
sendOrder(m.chat, teks, "5123658817728409", log0, 2022, "Ilham ~ Multi Device", "6281233649676@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await ham.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
m.reply("Error")
}
}).catch(_ => _)
}
}
break
case 'volume': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await ham.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
ham.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: ftoko})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
ham.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: ftoko})
fs.unlinkSync(rname)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'tempo': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await ham.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
ham.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
ham.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await ham.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
ham.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'kalkulator': case 'kal': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case 'public': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
ham.public = true
m.reply('Sukses Change To Public Usage')
ham.setStatus(`Mode : Public Created By Ilham`)
}
break
case 'setstatut':
case 'setbio':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Kirim perintah *#setstatus text*')
ham.setStatus(`${q}`)
m.reply(`*Sukses Ganti Bio Bot Menjadi:*\n${q}`)
break
case 'self': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
ham.public = false
m.reply('Sukses Change To Self Usage')
ham.setStatus(`Mode : Self Created By Ilham`)
}
break
case 'cekapi3':
if (!isCreator) return m.reply(mess.owner)
apiKey = args[0]
                        get_result = await fetchJson(`https://api.xteam.xyz/cekey?APIKEY=${xteamkey}`)
                        get_result = get_result.response
                        txt = `User : ${get_result.name}\n`
                        txt += `Req : ${get_result.totalhit}\n`
                        txt += `Premium : ${get_result.premium}\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                        m.reply(txt)
                        break
case 'katacinta':
     get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
     m.reply(get_result.result)
     break
	case 'katagalau':
		get_result = await fetchJson(`https://api.zacros.my.id/randomtext/katagalau`)
     m.reply(get_result.result)
     break
case 'fakta-unik':
     get_result = await fetchJson(`https://api.zacros.my.id/randomtext/faktaunik`)
     m.reply(get_result.result)
     break
case 'twichquote':
     get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
     m.reply(get_result.result)
     break
case 'gantiapikey':
if (!q) return m.reply('Kirim perintah\n#gantiapikey Lolhuman')
if (!isCreator) return m.reply(mess.owner)
lolkey = q
gntiapi =`𝑺𝒖𝒌𝒔𝒆𝒔 𝑮𝒂𝒏𝒕𝒊 𝑨𝒑𝒊𝒌𝒆𝒚 𝑳𝒐𝒍𝑯𝒖𝒎𝒂𝒏\n𝑴𝒆𝒏𝒋𝒂𝒅𝒊 : ${q}`
m.reply(gntiapi)
break
case 'setthumb':{
if (!q) return m.reply('Kirim perintah\n#setthumb LinkURL')
if (!isCreator) return m.reply(mess.owner)
tae1 = q
ham.sendMessage(from, {image:{url:tae1}, caption:`*Sukses Ganti Thumbnail Menu Bot*`}, {quoted:m})
}
break
case 'ham':
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) return m.reply(mess.ban)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
ham.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: respon,
sequenceNumber: 2,
timeOffset: 3,
jpegThumbnail: await (await fetch('https://telegra.ph/file/3911d7aaaa8733314f70f.png')).buffer(), 
contextInfo:{externalAdReply:{showAdAttribution: true}},
}}, {})
}
break
case 'tes': {
let butts = [
{buttonId: 'donasi', buttonText: {displayText: '⫹⫺ DONASI'}, type: 1},
{buttonId: 'command', buttonText: {displayText: '⋮☰ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔'}, type: 1},
{buttonId: 'iklan', buttonText: {displayText: '⫹⫺ IKLAN BOT'}, type: 1}
]
let ahhay = await ham.reSize(thumb, 300, 150)
let kuns = ["https://www.youtube.com/", "https://www.facebook.com/", "https://www.instagram.com/"]
let a = [1,2]
let b = a[Math.floor(Math.random() * a.length)]
let buttonMessage= {
document: { url: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4" },
jpegThumbnail: ahhay,
//gifPlayback: true,
mimetype: docs,
fileName: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By Ilham`,
fileLength: 999140795000000000,
pageCount: 999,
contextInfo:{externalAdReply:{
renderLargerThumbnail: true,
gifAttribution: b,
showAdAttribution: true,
mediaUrl: pickRandom(kuns),
title:`Bot Offline`,
body: 'Jangan Lupa Donasi',
mediaType: 2,
jpegThumbnail: ahhay,
thumbnail: ahhay,
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}},
caption: `@${m.sender.split("@")[0]}\n@${whatsapp.split("@")[0]}\nBOT OFFLINE!`,
mentions:[m.sender, whatsapp],
footer: 'BOT OFFLINE',
buttons: butts,
headerType: 6}
ham.sendMessage(m.chat, buttonMessage, {quoted:ftext})
}
break
	case 'speed':
case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py --share')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
			case 'restart': {
	//if (isBan) return reply(mess.ban)
	if (!isCreator) return m.reply(mess.owner)
	const buttons = [
		{buttonId: `$ pm2 kill && pm2 start .`, buttonText: {displayText: 'PM2'}, type: 1},
		{buttonId: `$ npm stop && npm start`, buttonText: {displayText: 'BIASA'}, type:1}
	 ]
	 const buttonMessage = {
	text: "Klick Restart Bot",
	footerText: 'Owner Only',
	buttons: buttons,
	headerType: 1
	}
	ham.sendMessage(m.chat, buttonMessage, {quoted:m})
	}
	break
			case 'emojimix2': {
    if (!text) return m.reply(`Example : ${prefix + command} 😅`)
// data case
     m.reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
    let encmedia = await ham.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
    await fs.unlinkSync(encmedia)
}
    }
    break
       case 'attp': case 'ttp': {
   if (!text) return m.reply(`Example : ${prefix + command} text`)
   await ham.sendMedia(m.chat, `https://api.xteam.xyz/${command}?file&text=${text}`, 'ham', 'morou', m, {asSticker: true})

 }
 break
case 'runtime':
let timestamp = speed()
let latensi = speed() - timestamp
respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n\nRuntime : ${runtime(process.uptime())}`
m.reply(respon)
break
case 'toimage': case 'toimg': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await ham.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
ham.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let { webp2mp4File } = require('./baileys/uploader')
let media = await ham.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await ham.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim.reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Kirim.reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./baileys/converter')
let audio = await toAudio(media, 'mp4')
ham.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'tomp3': {
if (isBan) return m.reply(mess.ban)
if (/document/.test(mime)) return m.reply(`Kirim.reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim.reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Kirim.reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./baileys/converter')
let audio = await toAudio(media, 'mp4')
ham.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ham.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (isBan) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./baileys/converter')
let audio = await toPTT(media, 'mp4')
ham.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let { webp2mp4File } = require('./baileys/uploader')
let media = await ham.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await ham.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-islami':{
let cerpe = await cerpen(`Cinta segitiga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-Pengorbanan':{
let cerpe = await cerpen(`Pengorbanan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'tourl':{
// data case
     m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baileys/uploader')
let media = await ham.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'q': case 'quoted': {
if (isLimit < 1) return m.reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await ham.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'getname': {
if (isBan) return m.reply(mess.ban)
if (qtod === "true") {
namenye = await ham.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
ham.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
case 'getpic': {
if (isBan) return m.reply(mess.ban)
if (qtod === "true") {
try {
pporg = await ham.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ham.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await ham.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ham.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
case 'owner': case 'creator': {
ham.sendContact(m.chat, global.owner, ftext)
 const buttonMessage = {
text: "Ini kak, Ownerku",
footerText: 'Ilham - MD',
mentions:[m.sender],
headerType: 1
}
ham.sendMessage(from, buttonMessage, {quoted:ftext})
}
break
case 'translate': case 'terjemahan': {
if (isLimit < 1) return m.reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
break
case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
                if (!q) return m.reply('contoh : twt https://twitter.com/weareoneEXO/status/1344811074864914433')
                await m.reply(mess.wait)
                xa.downloader.twitter(`${q}`).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                ham.sendMessage(m.chat, { video: {url: data.quality_360}, caption: 'Done'}, {quoted:m})
                })
                .catch((err) => {
                    m.reply(mess.err)
                })
            break
case 'gimage': case 'gig': {
 m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: "© Ilham",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - Ilham",
body:"© Ilham - X - Ilham",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/watch?v=w6w0cy_1HY4",
sourceUrl: "https://youtube.com/watch?v=w6w0cy_1HY4"
}}
}
ham.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'google': {
// data case
     m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
	case 'fix':{
// data case
     m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:log0,
caption: textbv,
footer: "© Ilham",
buttons: buttons,
headerType: 4
}
ham.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
break
case 'igstory': case 'instagramstory': {
if (!args[0]) return m.reply(`Example :\n${command} deff.xyz`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: 'ilham',
buttons: buttons,
headerType: 4
}
ham.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
ads(String(err))
}
}
break
/*case 'igdl': case 'instagram': {
if (!args[0]) return m.reply(`Example :\n${command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: 'ilham',
buttons: buttons,
headerType: 4
}
ham.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
ads(String(err))
}
}
break*/
case 'mp4' : {
// data case
     m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
try {
ham.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - Ilham",
body:"© Ilham - X - Ilham",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/",
sourceUrl: "https://youtube.com/"
}}}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'jpeg': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
try {
ham.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - Ilham",
body:"© Ilham - X - Ilham",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/watch?v=w6w0cy_1HY4",
sourceUrl: "https://youtube.com/watch?v=w6w0cy_1HY4"
}}}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'facebook': case 'fbdl': case 'fbmp4': case'fb': {
                      if (!args[0]) return m.reply(`Gunakan Format : ${command} https://fb.watch/e7AFjgqFX8/`)
					  m.reply(mess.wait)
                      const { efbe } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
                      for (const { url } of efbe.reverse()) await ham.sendMessage(m.chat, {video:{url: url}, mimetype:"video/mp4", caption:`🔗 *Url:* ${url}`}, m)
}
break
case 'fbddl': {
if (isBan) return m.reply(mess.ban)
// data case
     m.reply(mess.wait)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© Ilham",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Ilham - Facebook Downloader",
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
ham.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'tiktokmp3fix':
case 'tiktokaudiofix':
case 'tiktokmusicfix':{
// data case
     m.reply(mess.wait)
  if (!q) return m.reply('Linknya?')
  if (!q.includes('tiktok')) return m.reply('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    ham.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
case 'tiktokwmfix':
  case 'tiktokfix':{
// data case
  if (!q) return m.reply('Linknya?')
  m.reply(mess.wait)
  if (!q.includes('tiktok')) return m.reply('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.watermark
    ham.sendMessage(from, { video: { url: musim_duren_v }, caption: `Anda Bisa Mengubah Menjadi Nonw Dengan Mengetik\n.tiktoknowm ${q}` }, { quoted: m })
   }
  break
case 'igmp4':
if (!q) return m.reply('mana linknya?')
m.reply(mess.wait)
let human = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${q}`)
human = human.result
ham.sendMessage(m.chat, { video: { url: human }, caption: 'Done' }, {quoted:m})
break
case 'igdl': case 'instagram':
case 'ig':
if (!q) return m.reply('linknya mana?')
let buttons = [
{buttonId: `${prefix}igvideo ${q}`, buttonText: {displayText: 'Video'}, type: 1},
{buttonId: `${prefix}igfoto ${q}`, buttonText: {displayText: 'Foto'}, type: 1}
]
let buttonMessage = {
	text: 'Jika Link Ignya video klik video, jika foto klik foto',
	footerText: 'Iham',
	buttons: buttons,
	headerType: 1
	}
ham.sendMessage(m.chat, buttonMessage, {quoted:m})
break
case 'chord': {
if (!q) return m.reply('Mana Querynya')
toy = await chord(q)
for (const { url, artist, artistUrl, title, chord } of toy) await ham.sendMessage(m.chat, { text: `${url}\n${artist}\n${artistUrl}\n${title}\n${chord}` }, {quoted:m})
}
break
  case 'igvideo':
  if (!args[0]) return m.reply(`Use example ${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`)
      const results = await instagramdl(args[0])
        .catch(async _ => await instagramdlv2(args[0]))
        .catch(async _ => await instagramdlv3(args[0]))
        .catch(async _ => await instagramdlv4(args[0]))
for (const { url } of results) await ham.sendMessage(from, { video: { url: url }, caption: `🔗 *Url:* ${url}` }, { quoted: m })
break
case 'igphoto':
case 'igfoto':
  if (!args[0]) return m.reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
  const tod = await instagramdl(args[0])
  .catch(async _ => await instagramdlv2(args[0]))
  .catch(async _ => await instagramdlv3(args[0]))
  .catch(async _ => await instagramdlv4(args[0]))
for (const { url } of tod) await ham.sendMessage(from, { image: { url: url }, caption: `🔗 *Url:* ${url}` }, { quoted: m })
break
  case 'tiktok':
  case 'tiktoknowm':
  if (!q) return m.reply(`Use example ${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`)
  const { author: { nickname }, video } = await tiktokdl(q)
  .catch(async _ => await tiktokdlv2(q))
    const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
    if (!url) throw 'Can\'t download video!'
	taex = `🔗 *Url:* ${url}
🧏 *Nickname:* ${nickname}`
ham.sendMessage(from, { video: { url: url },caption: taex }, { quoted: m })
  break
case 'iqra': {
		if (!text) return m.reply(`Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		ham.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(`error ya kak:v`))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		ham.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		ham.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		ham.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		ham.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
/*case 'hadist':
case 'hadis': {
if (!args[0]) return m.reply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (!args[1]) return m.reply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
get = await fetchJson(`https://betabotz-api.herokuapp.com/api/muslim/hadits?kitab=${args[0]}&nomor=${args[1]}&apikey=${betakey}`)
get = get.data.contents
m.reply(`No. ${get.number}

${get.arab}

${get.id}`)
}
break*/
case 'hadist':
case 'hadis': {
if (!args[0]) return m.reply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (!args[1]) return m.reply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'quran':
case 'alquran': {
if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
m.reply(`*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`)
ham.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
m.reply(`「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`)
}
break
case 'igstory': //error
if (!q) return m.reply(`Kirim perintah ${prefix + command} link`)
get = await fetchJson(`https://zenzapis.xyz/downloader/instastory?apikey=${apiskey}&url=${q}`)
get_result = get.result
ham.sendMessage(from, { video:{ url: get_result.media.url }, mimetype:'video/mp4', caption:"Success"}, {quoted:m})
break
case 'euni': case 'bocil': case 'gheayubi': case 'rikagusriani':
coke = `https://betabotz-api.herokuapp.com/api/asupan/${command}?apikey=${betakey}`
ham.sendMessage(from, {video:{url:coke}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
case 'ytstalk':
if (!q) return m.reply(`Example: ytstalk miawaug`)
get = await fetchJson(`https://betabotz-api.herokuapp.com/api/stalk/yt?user=${q}&apikey=${betakey}`)
get = get.result
ham.sendMessage(m.chat, { image: { url: get.image }, caption: `Name : ${get.name}
Url : ${get.url}
Title : ${get.title}
PostVid : ${get.videoCount}
Subs : ${get.subCount}` }, { quoted: m })
break
case 'igstalk':
if (!q) return m.reply(`Kirim perintah ${prefix + command} rusydiilham_`)
	get_result = await fetchJson(`https://betabotz-api.herokuapp.com/api/stalk/ig?username=${q}&apikey=${betakey}`)
    get_result = get_result.result
ham.sendMessage(m.chat, { image: { url: get_result.profilePicHD }, caption: `Username : ${get_result.username}
Name : ${get_result.fullName}
Bio : ${get_result.bio}
Followers : ${get_result.followers}
Following : ${get_result.following}
Jumlah Post : ${get_result.postsCount}` }, { quoted: m })
break
case 'rangkum': {
if (!q) return m.reply(`Example ${command} Teks `) 
rang = await caliph.other.rangkum(q) 
m.reply(rang) 
} break
case  'getsession':
if (!isCreator) return m.reply(mess.owner)
anuu = fs.readFileSync('./session.json')
ham.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `session.json`}, {quoted:m})  
break
case 'catalog': { // Nemu di Sc chika
var messa = await prepareWAMessageMedia({ image: log0 }, { upload: ham.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `ALL MENU`,
"description": `${listmn}`,
"footerText": `©Ilham`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `© Created Ilham`,
"url": listmn
},
"businessOwnerJid": "6281233649676@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
ham.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'happymod': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: "© Ilham",
buttons: buttons,
headerType: 4
}
ham.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case 'asmaulhusna':
get = await fetchJson(`https://api.zacros.my.id/islami/asmaulhusna`)
get = get.result
m.reply(`${get.arab}
${get.latin} 
Urutan: ${get.urutan}
Artinya: ${get.arti}`)
break
case 'qrcode':
if (!q) return m.reply(`teksnya?`)
get = `https://api.zacros.my.id/other/qrcode?text=${q}`
ham.sendMessage(m.chat, { image: { url: get }, caption: `Done!` }, { quoted: m })
break
case 'ghstalk':
if (!q) return m.reply(`example: ghstalk KilluaBot`)
get = await fetchJson(`https://betabotz-api.herokuapp.com/api/stalk/gh?username=${q}&apikey=${betakey}`)
get = get.result.user
ham.sendMessage(m.chat, { image: { url: get.avatarUrl }, caption: `Username: ${get.username}
Url: ${get.githubUrl}
Name: ${get.name}
Company: ${get.company}
Blog: ${get.blog}
Bio: ${get.bio}
PublicRepo: ${get.publicRepos}
Followers: ${get.followers}
Following: ${get.following}
Created At: ${get.createdAt}` }, { quoted: m })
break
case 'jooxplay':   
case 'joox':
if (!q) return m.reply(`Kirim perintah ${prefix + command} judul`)
get = await fetchJson(`https://zenzapis.xyz/downloader/joox?apikey=${apiskey}&query=${q}`)
get_result = get.result
       ham.sendMessage(m.chat, { image: { url: get_result.img }, caption: `Title : ${get_result.lagu}
Artists : ${get_result.penyanyi}
Album : ${get_result.album}
Uploaded : ${get_result.publish}
Lirik :\n ${get.lirik.result}` }, { quoted: m })
       ham.sendMessage(from, { audio: { url: get_result.mp3Link }, mimetype: 'audio/mp4' }, { quoted: m })
   break
case 'p': {
 m.reply(`Pa.. Pe.. Pa.. Pe.. jika liat menu bot ketik menu`)
}
break
case 'kbbi':
if (!q) return m.reply('examples: kbbi tahu')
get = await fetchJson(`https://betabotz-api.herokuapp.com/api/info/kbbi?kata=${q}&apikey=${betakey}`)
get = get.result
txt = `Kbbi: ${get.lema},
	${get.arti}`
m.reply(txt)
break
case 'cuacadunia':
get = await fetchJson(`https://betabotz-api.herokuapp.com/api/info/cuacadunia?apikey=${betakey}`)
get = get.result
ham.sendMessage(m.chat, {document: {url:get.cuaca_dunia}, mimetype:'application/pdf', fileName: get.title}, {quoted:m})
break
case 'tinyurl':
if (!q) return m.reply('linknya mana')
get = await fetchJson(`https://betabotz-api.herokuapp.com/api/tools/tinyurl?url=${q}&apikey=${betakey}`)
get = get.result
m.reply(`Tinyurl : 
${get}`)
break
case 'mediafire':                                
if (args.length < 1) return m.reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return m.reply(mess.Iv)
m.reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader

📌 *Nama :* ${res[0].nama}

📌 *Ukuran :* ${res[0].size}

📌 *Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......⏳*_`
m.reply(result)
ham.sendMessage(m.chat, {document: {url: res[0].link}, mimetype: res[0].mime, fileName: res[0].nama}, {quoted:m})
//sendMediaURL(res[0].link, { document, mimetype: res[0].mime, filename: res[0].nama }, { quoted: m })
break
case 'ytdl': case 'play': case 'ytplay': {
                if (!text) return m.reply(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    location: { jpegThumbnail: await ham.reSize(anu.thumbnail, 300, 150) },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: `Ilham`,
                    buttons: buttons,
                    headerType: 4
                }
                ham.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'yt': case 'youtube':{
if (isBan) return m.reply(mess.ban)
// data case
     m.reply(mess.wait)
if (!args[0]) return m.reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*── 「 YOUTUBE DOWNLOAD 」 ──*

❏ Title : ${res.title}
❏ Size : ${res.size}
❏ Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `.ytmp4 ${res.link}`, buttonText: {displayText: 'VIDEO'}, type: 1},
{buttonId: `.ytmp3 ${res.link}`, buttonText: {displayText: 'AUDIO'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: "© Ilham",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: "© Ilham - X - Ilham",
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
ham.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("Linknya Error!")
}
}
break
case 'couple': {
  // data case
     m.reply(mess.wait)
    let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    ham.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
    ham.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
    break
case 'twdl':
case 'twittermp4':
case'twitter': {
                     if (!q) throw m.reply(`Example : ${prefix + command} https://twitter.com/weareoneEXO/status/1344811074864914433`)  
                     m.reply(mess.wait)
					 ngen = await fetchJson(`https://betabotz-api.herokuapp.com/api/downloader/twittervid?url=${q}&apikey=${betakey}`)
                     let buttons = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}]
                     let buttonMessage = {
                     video: { url: ngen.result},
                     caption: 'Jangan lupa donasi', 
                     footer: 'Press The Button Below',
                     buttons: buttons,
                     headerType: 5
                     }
                     ham.sendMessage(m.chat, buttonMessage, { quoted: m })
                     }
                     break
/*case 'twitter':
case 'twdl':
if (!q) return m.reply("linknya mana?/nExample: twitter https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19")
m.reply(mess.wait)
get_result = await fetchJson(`https://zenzapis.xyz/downloader/twitter?apikey=${apiskey}&url=${q}`)
get_result = get_result.result
txt = `Desc: ${get_result.desc}`
ham.sendMessage(from, {image:{url:get_result.thumb}, caption:txt}, {quoted:m})
ham.sendMessage(from, {video:{url:get_result.sd}, mimetype:"video/mp4", caption:"Mau dijadiin audio? balas videonya dengan chat tomp3"}, {quoted:m})
break*/
case 'asupan-loli':
		m.reply(mess.wait)
buffer = `https://api.zacros.my.id/asupan/loli`
ham.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
case 'asupan':
// data case
     m.reply(mess.wait)
coke = `https://api.zacros.my.id/asupan/random`
ham.sendMessage(from, {video:{url:coke}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
case 'asupanukhty':
case 'asupan-ukhty':
// data case
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/ukhty`
ham.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
case 'asupan-santuy':
case 'asupansantuy':
// data case
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
ham.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
case 'hijaber':
// data case
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-indo':
// data case
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-malaysia':
// data case
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-thai':
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-vietnam':
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-korea':
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-china':
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/china`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-jepan':
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan':
 m.reply(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
                    m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						ham.sendImageAsSticker(m.chat, data.url, m, { packname: packname, author: author })
					})
					break
case 'fml':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/fml`)
teks = tes.result
m.reply(teks)
break
case 'cerpen':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/cerpen`)
teks = tes.result
buffer = `https://telegra.ph/file/dcd94851554d89a015c5e.jpg`
ham.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'katagalau':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/katagalau`)
teks = tes.result
m.reply(teks)
break
case 'truth':{
tes = await fetchJson(`https://api.zacros.my.id/randomtext/truth`)
let buttons = [
{buttonId: `dare`, buttonText: {displayText: 'Dare 🎯'}, type: 1}
    ]
    let buttonMessage = {
image: { url: 'https://telegra.ph/file/7188012d573871aaf4fa0.jpg' },
caption: `${tes.result}`,
footer: `Truth Or Dare??\nClick Button`,
buttons: buttons,
headerType: 4
    }
    ham.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
break
case 'dare':{
tes = await fetchJson(`https://api.zacros.my.id/randomtext/dare`)
teks = tes.result
let buttons = [
{buttonId: `dare`, buttonText: {displayText: 'Truth 🎯'}, type: 1}
    ]
    let buttonMessage = {
image: { url: 'https://telegra.ph/file/7188012d573871aaf4fa0.jpg' },
caption: `${tes.result}`,
footer: `Truth Or Dare??\nClick Button`,
buttons: buttons,
headerType: 4
    }
    ham.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//NEW 
case 'fotobts':
teks = `nih Kak >\\<`
buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break




//NEEWW

case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: false, id: quoted.id }
                    }
                }
                ham.sendMessage(m.chat, reactionMessage)
            }
            break
case 'ytmp3':
  case 'youtubemp3':{
  if (args.length < 1) return m.reply('linknya?')
  // data case
     m.reply(mess.wait)
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      ham.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  case 'ytmp4':
  case 'youtubemp4':{
  if (args.length < 1) return m.reply('linknya?')
  // data case
     m.reply(mess.wait)
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      ham.sendMessage(from, { video: { url: dl_link }, caption: "Succes\nJangan Lupa Donasi Ya:)" }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
case 'nekonime':
case 'naruto':
case 'minato':
case 'boruto':
case 'hinata':
case 'sasuke':
case 'sakura':
case 'kaneki':
case 'toukachan':
case 'rize':
case 'akira':
case 'itori':
case 'kurumi':
case 'anjing':
case 'miku': {
	 m.reply(mess.wait)
    anu = await pinterest(command)
    result = anu[Math.floor(Math.random() * anu.length)]
	let butpin = [
{buttonId: `${command}`, buttonText: {displayText: '⫹⫺ NEXT'}, type: 1}]
	let buttonMessage = {
	image: { url: result },
	fileName: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham女`,
	caption: ' ➭ Media Url : '+result,
	footer: `Klik NEXT jika mau gambar ${command} lagi`,
	buttons: butpin,
	headerType: 4}
    ham.sendMessage(m.chat, buttonMessage, {quoted:m})
	}
break
case 'pin':
case 'pinterest': {
 // data case
 if (!text) return m.reply('mau foto apa')
     m.reply(mess.wait)
    anu = await pinterest(text)
    result = anu[Math.floor(Math.random() * anu.length)]
	let butpin = [
{buttonId: `pin ${text}`, buttonText: {displayText: '⫹⫺ NEXT'}, type: 1}]
	let buttonMessage = {
	image: { url: result },
	fileName: `𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃 | By this.ilham女`,
	caption: ' ➭ Media Url : '+result,
	footer: `Klik NEXT jika mau gambar ${text} lagi`,
	buttons: butpin,
	headerType: 4}
    ham.sendMessage(m.chat, buttonMessage, {quoted:m})
	}
break
case 'wm':
case 'swm': case 'take': case 'stickerwm': {
 m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example :\n${command} mek | Pack`)
// data case
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
ham.downloadAndSaveMediaMessage(quoted, "weem")
ham.sendMessage(from, {sticker:fs.readFileSync("./src/weem.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ham.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ham.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
// Foto Editing bruda 
case 'tolol':
m.reply(mess.wait)
anu = `http://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${q}`
ham.sendMessage(from, {image:{url:anu}, caption:"Done!"}, {quoted:m})
break
case 'jail':{
m.reply(mess.wait)
if (isBan) return m.reply(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./baileys/uploader')
let fatGan = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/jail?apikey=${lolkey}&img=${fatGan.result.url}`
ham.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'smeme2': {
	        let respond = `Kirim.reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./baileys/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await ham.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
case 'menfes':{
if (args.length < 1) return m.reply(' Contoh Penggunaan nomor|pesan\nExample: menfes 6285803583481|Halo ')
num = q.split('|')[0]+'@s.whatsapp.net'
pesan = q.split('|')[1]
var nomor = m.sender
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let kata = `Hai Kamu Ada Yang Ngirim Pesan Rahasia Ni Ke Kamu Bisa Jadi Dia Pacar/Sahabat Kamu Lhoo Mau Tau Pesan Nya? Scroll Ke Bawah Yaa

----------------------------->

Pesan Rahasia 💌 : ${pesan} 

---------------------------->

Kalau Fitur Eror Lapor Saya Di wa.me/6285803583481`

ham.sendMessage(num, {text: kata, buttons: buttons, footer: 'By Lann'}, {quoted:ftext})
}
break
case 'sticker': case 'stiker': case 'setiker': case 's': {
if (isBan) return m.reply(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ham.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
await ham.sendImageAsSticker('6285232599038-1497274458@g.us', media, ftext, {packname: packname, author: author})
//await ham.sendImageAsSticker('6281380674817-1634785883@g.us', media, ftext, {packname: packname, author: author})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 21) return m.reply('Maksimal 20 detik!')
let media = await quoted.download()
let encmedia = await ham.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
await ham.sendVideoAsSticker('6285232599038-1497274458@g.us', media, ftext, {packname: packname, author: author})
//await ham.sendVideoAsSticker('6281380674817-1634785883@g.us', media, ftext, {packname: packname, author: author})
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-19 Detik`)
}
}
break

// NEW FITUR INTERNET
case 'detiknews': case 'detik':{
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `Result detik news ${i + 1}`,
  rows: [
    {
     title: `${aku_biji[i].Title}`, 
     rowId: `#google ${aku_biji[i].Link}`,
     description: ``
    }, 
    ]
     }
     sections.push(list)   
     }
  const sendm =  ham.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: "Ilham",
       title: "[ Data Data Yang Kami Dapatkan Dari detik.com 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
   }
  break
case 'telesticker':
                    if (args.length == 0) return m.reply(`Contoh: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://betabotz-api.herokuapp.com/api/download/telesticker?url=${ini_url}&apikey=${betakey}`)
                    ini_sticker = ini_url.result
                    for (sticker_ in ini_sticker) {
                        ini_kontol = await getBuffer(ini_sticker[sticker_])
                        ham.sendMessage(from, ini_kontol, sticker)
                    }
                        break

case 'wiki':
if (args.length < 1) return m.reply(' Yang Mau Di Cari Apa? ')
const res2 = await wikiSearch(q).catch(e => {
return m.reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
const result2 = `*Judul :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
ham.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case 'gempa':
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
ham.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covid':
const t = await copid()
var { kasus, kematian, sembuh } = t[0]
ham.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
case 'covidindo':
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
ham.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
case 'jadwaltv':
if (!q) return m.reply('Kirim perintah *#jadwaltv [channel]*')
m.reply(await jadwaltv(q))
break
case 'playstore':
            if (!q) return m.reply(`Example: ${prefix + command} telegram`)
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${q}`)
            var kids = 'Play Store Search : \n'
            for (var x of data.result) {
                kids += `Name : ${x.title}\n`
                kids += `ID : ${x.appId}\n`
                kids += `Developer : ${x.developer}\n`
                kids += `Link : ${x.url}\n`
                kids += `Price : ${x.priceText}\n`
                kids += `Price : ${x.price}\n\n`
            }
            m.reply(kids)
            break
//FITUR ISLAMIC
case 'kisahnabi':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} muhammad`)
kisah = await fetchJson(`https://betabotz-api.herokuapp.com/api/muslim/kisahnabi?nabi=${q}&apikey=4{betakey}`)
kisah = kisah.result
m.reply(`Nama : ${kisah.name}
Kelahiran : ${kisah.kelahiran}
Wafat :${kisah.wafat_usia}
Singgah : ${kisah.singgah}

Cerita : ${kisah.kisah}`)
break
case 'apakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
ham.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

break
case 'bisakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
ham.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

break
case 'bagaimanakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
ham.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
break
case 'rate':
 if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
ham.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
break
case 'gantengcek':
case 'cekganteng':
 if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
ham.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
break
case 'cantikcek':
  case 'cekcantik':
 if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
ham.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
case 'lesbicek':
  case 'ceklesbi':
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
ham.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
case 'kapankah':
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
ham.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
break
case 'wangy':
  if (!q) return m.reply(`Contoh : .wangy Riy`)
  qq = q.toUpperCase()
  awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 m.reply(awikwok)
  break
case 'cekmati':
  if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
  predea = await axios.get(`https://api.agify.io/?name=${q}`)
  m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
  break
  case 'get': {
  if (!q) return m.reply(`Mau ngecek apa?\nexamples: get youtube.com`)
  let getuk = await fetchJson(`${q}`)
  ham.sendMessage(m.chat, { text: getuk}, {quoted:m})
}
 break
 case 'gsmarena':
 case 'gsm':
case 'cekspek':
            if (!q) return m.reply(`Kirim perintah *${prefix}cekspek query*`)
            try {
                await fetchJson(`https://www.gsmarena.com/res.php3?sSearch=${q}`, (error, res, html) => {
                    if (!error && res.statusCode == 200) {
                        var $ = cheerio.load(html);
                        $('#review-body > div > ul > li:nth-child(1) > a').each((i, el) => {
                            var urlnyaa = $(el).attr('href');
                            var urlimage = $('#review-body > div > ul > li:nth-child(1) > a > img').attr('src');
                            fetchJson(`https://www.gsmarena.com/${urlnyaa}`, (e, res, html) => {
                                if (!e && res.statusCode == 200) {
                                    var $ = cheerio.load(html);

                                    $('#body > div > div.review-header > div > div.article-info-line.page-specs.light.border-bottom > h1').each((i, el) => {
                                        var judulitem = $(el).text();
                                        var displaytipe = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(1) > td.nfo').text();
                                        var displaySize = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(2) > td.nfo').text();
                                        var displayreso = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(3) > td.nfo').text();
                                        var chipset = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(2) > td.nfo').text();
                                        var merkos = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(1) > td.nfo').text();
                                        var merkcpu = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(3) > td.nfo').text();
                                        var internalspek = $('#specs-list > table:nth-child(7) > tbody > tr:nth-child(2) > td.nfo').text();
                                        var spekkamera = $('#specs-list > table:nth-child(8) > tbody > tr:nth-child(1) > td.nfo').text();
                                        var spekbatre = $('#specs-list > table:nth-child(13) > tbody > tr:nth-child(1) > td.nfo').text();
                                        var allresultspek = `「 *RESULT FOUND!*」

• Spek: ${judulitem}
• Display Tipe: ${displaytipe}
• Display Size: ${displaySize}
• Display Resolusi: ${displayreso}
• Chipset: ${chipset}
• OS: ${merkos}
• Cpu: ${merkcpu}
• Internal: ${internalspek}
• Kamera: ${spekkamera}
• Batterai: ${spekbatre}
`
                                        m.reply(mess.wait)
                                        ham.sendMessage(from,{ image: urlimage, caption: allresultspek}, {quoted:m})
                                    })
                                }
                            })
                        })

                    }
                })
            } catch (err) {
                console.log(color('[google]', 'red'), err)
                m.reply(mess.error)
            }
            break
case 'jadwalbioskop': {
if (isLimit < 1) return m.reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(mess.wait)
if (!text) return m.reply(`Example: ${prefix + command} jakarta`)
let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=${apiskey}`)
let capt = `Jadwal Bioskop From : ${text}\n\n`
for (let i of res.result){
capt += ` Title: ${i.title}\n`
capt += ` Thumbnail: ${i.thumb}\n`
capt += ` Url: ${i.url}\n\n──────────────────────\n`
}
ham.sendImage(m.chat, res.result[0].thumb, capt, m)
}
break
case 'nowplayingbioskop': {
let res = await fetchJson(`https://zenzapis.xyz/webzone/nowplayingbioskop?apikey=${apiskey}`)
let capt = `Now Playing Bioskop\n\n`
for (let i of res.result){
capt += ` Title: ${i.title}\n`
capt += ` Url: ${i.url}\n`
capt += ` Img Url: ${i.img}\n\n──────────────────────\n`
}
ham.sendImage(m.chat, res.result[0].img, capt, m)
}
break
case 'aminio': {
if (!text) return m.reply(`Example: ${prefix + command} free fire`)
let res = await fetchJson(`https://zenzapis.xyz/webzone/amino?query=${text}&apikey=${apiskey}`)
let capt = `Amino Search From : ${text}\n\n`
for (let i of res.result){
capt += ` Community: ${i.community}\n`
capt += ` Community Link: ${i.community_link}\n`
capt += ` Thumbnail: ${i.community_thumb}\n`
capt += ` Description: ${i.community_desc}\n`
capt += ` Member Count: ${i.member_count}\n\n──────────────────────\n`
}
ham.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
}
break
case 'wattpad': {
if (!text) return m.reply(`Example : ${prefix + command} love`)
let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=${apiskey}`)
let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
let capt = `Wattpad From query\n\n`
capt += ` Judul: ${judul}\n`
capt += ` Dibaca: ${dibaca}\n`
capt += ` Divote: ${divote}\n`
capt += ` Bab: ${bab}\n`
capt += ` Url: ${url}\n`
capt += ` Deskripsi: ${description}`
ham.sendImage(m.chat, thumb, capt, m)
}
break
case 'webtoons': {
if (!text) return m.reply(`Example : ${prefix + command} love`)
let res = await fetchJson(`https://zenzapis.xyz/webzone/webtoons?query=${text}&apikey=${apiskey}`)
let capt = `Webtoons Search From : ${text}\n\n`
for (let i of res.result) {
capt += ` Judul: ${i.judul}\n`
capt += ` Like: ${i.like}\n`
capt += ` Creator: ${i.creator}\n`
capt += ` Genre: ${i.genre}\n`
capt += ` Url: ${i.url}\n\n──────────────────────\n`
}
m.reply(capt)
}
break
case 'drakor': {
if (!text) return m.reply(`Example : ${prefix + command} love`)
let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=${apiskey}`)
let capt = `Drakor Search From : ${text}\n\n`
for (let i of res.result) {
capt += `⭔ Judul: ${i.judul}\n`
capt += `⭔ Years: ${i.years}\n`
capt += `⭔ Genre: ${i.genre}\n`
capt += `⭔ Url: ${i.url}\n`
capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
}
ham.sendImage(m.chat, res.result[0].thumbnail, capt, m)
}
break
case 'cry':anu = `http://api.lolhuman.xyz/api/random/cry?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kiss3':
anu = `http://api.lolhuman.xyz/api/random/kiss?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kiss2':
anu = `http://api.lolhuman.xyz/api/random2/kiss?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'cringe':
anu = `http://api.lolhuman.xyz/api/random/cringe?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'dance':
anu = `http://api.lolhuman.xyz/api/random/dance?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kill':
anu = `http://api.lolhuman.xyz/api/random/kill?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'happy':
anu = `http://api.lolhuman.xyz/api/random/happy?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'patrick':
anu = `http://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'bonk':
anu = `http://api.lolhuman.xyz/api/random/bonk?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'smug2':
anu = `http://api.lolhuman.xyz/api/random/smug?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'slap':
anu = `http://api.lolhuman.xyz/api/random/slap?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'wave':
anu = `http://api.lolhuman.xyz/api/random/wave?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'smile':
anu = `http://api.lolhuman.xyz/api/random/smile?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'bully':
anu = `http://api.lolhuman.xyz/api/random/bully?apikey=${lolkey}`
m.reply(mess.wait)
ham.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'randomquotes':
const getuk = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/randomquotes?apikey=${betakey}`)
.catch(async _ => await fetchJson(`https://docs-jojo.herokuapp.com/api/randomquotes`))
m.reply(`${getuk.result.quotes}
*${getuk.result.author}*`)
	break
case 'quotesmuslim':
get = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/quotesmuslim?apikey=${betakey}`)
m.reply(`${get.result.text_id}`)
	break
case 'quotesjawa':
get = await fetchJson(`https://betabotz-api.herokuapp.com/api/random/quotesjawa?apikey=${betakey}`)
m.reply(`${get.quotes}`)
	break
case 'quotes':		
					get_result = await fetchJson(`https://api.zacros.my.id/randomtext/quotes`)
		            get_result = get_result.result
                        txt = `${get_result.quotes}\n`
                        txt += `-${get_result.author}-\n`
                                m.reply(txt)
			        break
case 'cekapikey':
if (!isCreator) return m.reply(mess.owner)
apiKey = args[0]
                        get_result = await fetchJson(`https://api.xteam.xyz/cekey?APIKEY=${xteamkey}`)
                        get_result = get_result.response
                        txt = `User : ${get_result.name}\n`
                        txt += `Req : ${get_result.totalhit}\n`
                        txt += `Premium : ${get_result.premium}\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                        m.reply(txt)
                        break
	case 'ghstalk':
		if (!q) return m.reply(`example: ghstalk KilluaBot`)
		get_result = await fetchJson(`https://api.zacros.my.id/info/ghstalk?username=${q}`)
                        get_result = get_result.result
			            txt = `Name : ${get_result.name}\n`
                        txt += `Bio : ${get_result.bio}\n`
                        txt += `Company : ${get_result.company}\n`
                        txt += `Blog : ${get_result.blog}\n`
						txt += `Location : ${get_result.location}\n`
						txt += `Repo : ${get_result.repo}\n`
						txt += `Follower : ${get_result.follower}\n`
						txt += `Following : ${get_result.following}\n`
						txt += `Create : ${get_result.created_at}\n`
						txt += `Url : ${get_result.url}\n`
		ham.sendMessage(from, {image:{url:get_result.avatar}, caption:txt}, {quoted:m})
						break
	case 'neko':
		get_result = `https://rest-beni.herokuapp.com/api/randomimage/neko`
      ham.sendMessage(from, {image:{url:get_result}, caption:"Done!"}, {quoted:m})
      break
case 'waifu':
	case 'husbu': case 'loli': case 'milf': case 'cosplay': case 'darkjokes': case 'meme':
      get_result = `https://api.zacros.my.id/randomimg/${command}`
      ham.sendMessage(from, {image:{url:get_result}, caption:"Done!"}, {quoted:m})
      break
case 'brainly':
            if (!q) m.reply(`Kirim perintah: ${prefix}brainly *soal*\nExample: ${prefix}brainly apa itu dpr`)
            brainly(q, 5, "id").then(res => {
                let resultbrainly = `「 *BRAINLY-SEARCH* 」\n\n`
                for (let x = 0; x < res.data.length; x++) {
                    resultbrainly += `• *Soal:* ${res.data[x].pertanyaan}\n• *Jawaban:* ${res.data[x].jawaban[0].text.replace('Jawaban:', '').trim()}\n\n`
                }
                m.reply(resultbrainly.trim())
            })
            break
case 'creategc': //tq to ilham//
if (!isCreator) return m.reply(`hanya untuk owner awokawokawok`)
if (!q) return m.reply(`Contoh :\n#creategc namagroup`)
let cret = await ham.groupCreate(args.join(" "), [])
let response = await ham.groupInviteCode(cret.id)
teks = `  「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
case 'nulis': {
m.reply(`mau?
.nulishvs <text> atau .nulisbuku <text>`)
}
break
// apikey betabotz
case 'ssweb': {
if (!args[0]) return m.reply('mana linknya?')
let butt = [
{buttonId: `ssweb-pc ${args[0]}`, buttonText: {displayText: 'SSWEB PC'}, type: 1},
{buttonId: `ssweb-hp ${args[0]}`, buttonText: {displayText: 'SSWEB HP'}, type: 1}
]
ham.sendMessage(m.chat, { text : `Example: .ssweb-pc ${q}, 
.ssweb-hp ${q}`, buttons: butt, footer: `gimang` }, {quoted:m})
}
 break
case 'ssweb-hp':
case 'ssweb-pc':
if (!text) return m.reply('Kirim perintah *${command} https://github.com/KilluaBot*')
 ena = `https://betabotz-api.herokuapp.com/api/other/${command}?text=${text}&apikey=${betakey}`
ham.sendMessage(from, {image:{url:ena}, caption:"Done!"}, {quoted:m})
break

case '3dtext':
if (!text) return m.reply('Kirim perintah *3dtext tes*')
 ena = `https://docs-jojo.herokuapp.com/api/text3d?text=${text}`
ham.sendMessage(from, {image:{url:ena}, caption:"Done!"}, {quoted:m})
break
case 'nulishvs':
if (!text) return m.reply('Kirim perintah *nulishvs tes*')
 ena = `https://hadi-api.herokuapp.com/api/canvas/nulis2?text=${text}`
ham.sendMessage(from, {image:{url:ena}, caption:"Done!"}, {quoted:m})
break
case 'nulisbuku':
if (!text) return m.reply('Kirim perintah *nulisbuku tes*')
 crot = `https://hadi-api.herokuapp.com/api/canvas/nulis?text=${text}`
ham.sendMessage(from, {image:{url:crot}, caption:"Done!"}, {quoted:m})
break
case 'sfile':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sfile?q=${q}&apikey=IkyOgiwara`)
					teks = '=================\n'
					no = 0
					for (let v of anu.result) {
						no += 1
						teks += `HASIL KE - ${no.toString()}\n• Title: ${v.title}\n• Size: ${v.size}\n• Url: ${v.url}\n=================\n`
					}
					m.reply(teks)
					break
				case 'cuttly':
				if (!q) return m.reply('link?')
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyOgiwara`)
					ham.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: m})
					break
				case 'shorturl':
				if (!q) return m.reply('link?')
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyOgiwara`)
					ham.sendMessage(from, `${anu.result}`, text, {quoted: m})
					break
case 'semoji':
					var imgbb = require('imgbb-uploader')
					emoji = await body.slice(8).split("|")
					arrtype = ['apple', 'google', "samsung", "microsoft", "whatsapp", "twitter", "facebook", "joypixel", "openemoji", "emojidex", "messenger", "ig", "htc", "mozilla"]
					if (!arrtype.includes(emoji[1])) return reply(`Type yang kamu input tidak terdaftar dalam list\nList Type:\napple, google, samsung, microsoft, whatsapp, twitter, facebook, joypixel, openemoji, emojidex, messenger, ig, htc, mozilla`)
					emo = await getEmoji(`${emoji[0]}`, `${emoji[1]}`)
					data = await imageToBase64(JSON.stringify(emo).replace(/\"/gi, ''))
					fs.writeFileSync('emoji.jpeg', data, 'base64')
					result = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", 'emoji.jpeg')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					exec(`wget ${result.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						ham.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: m})
					})
					break
case 'bot':
 m.reply('ada apa min, manggil" ae, ketik menu kalau penasaran:v')
 break
case 'eval': {
  if (!isCreator) return m.reply(mess.owner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break
// akhir fitur anime
// Eval Ada Disini
default:
if (budy.includes(`Assalamualaikum`)) {
                  m.reply(`Waalaikumsalam`)
                  }
if (budy.includes(`assalamualaikum`)) {
                  m.reply(`Waalaikumsalam`)
                  }
		if (budy.includes(`thanks`)) {
                  m.reply(`Sama Sama Kak😁`)
                  }
		if (budy.includes(`makasih`)) {
                  m.reply(`Sama Sama Kak😁`)
                  }
                    if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }  
  if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
  if (budy.startsWith("$")) {
					if (!isCreator) return m.reply(mess.owner)
				console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) m.reply(`${stdout}`)
				})
			}
                  /**if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith("$ ")) {
					if (!isCreator) return m.reply(mess.owner)
				console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) m.reply(`${stdout}`)
				})
			}
			**/
// Anti Tag ( FenZo||77+ )
const listTag = ["79131970045@s.whatsapp.net","6281233649676@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( FenZo||77+ )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = 'https://uploader.caliph.my.id/file/Hxf936tvPc.webp'
ham.readMessages(m.chat, m.sender, [m.key.id])
ham.sendImageAsSticker(m.chat, `https://telegra.ph/file/ffd16a4e7b3d9c1f894f7.png`, m, {packname: packname, author: author})
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes("@6281233649676")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
ham.readMessages(m.chat, m.sender, [m.key.id])
ham.sendImageAsSticker(m.chat, `https://telegra.ph/file/ffd16a4e7b3d9c1f894f7.png`, m, {packname: packname, author: author})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
ham.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
ham.sendMessage("6281233649676@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})