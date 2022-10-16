/**
 - Base Dika Ardnt
 - Recoded By Ilham
**/

process.on('uncaughtException', console.error) //Safe Log Error
require("./settings/config.js")
const { default: hamConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, msgRetryCounterMap, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const Utils_1 = require('@adiwajshing/baileys/lib/Utils')
const fs = require('fs')
const chalk = require('chalk')
const figlet = require("figlet")
const FileType = require('file-type')
const lolcatjs = require('lolcatjs')
const path = require('path')
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const CFonts = require('cfonts');
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./baileys/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./baileys/myfunc')
const {
    color
} = require('./baileys/color')
//require("http").createServer((_, res) => res.end("Hallo World!")).listen(8080)
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function startH() {
console.clear()
	  console.log(chalk.hex('#FF8800').bold(figlet.textSync('Ilham - MD', { 
          font: 'Standard', 
          horizontalLayout: 'default', 
          vertivalLayout: 'default', 
          width: 80, 
          whitespaceBreak: false
        })));
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const ham = hamConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        //browser: ['𝐈𝐋𝐇𝐀𝐌 - 𝐌𝐃','Desktop','1.0.0'],
		browser: Utils_1.Browsers.macOS('Safari'),
		syncFullHistory: true,
        auth: state
		//version: [2, 2232, 8]
		// To see the latest version : https://web.whatsapp.com/check-update?version=1&platform=web
    })
    
store.bind(ham.ev)

ham.public = true

    ham.serializeM = (m) => smsg(ham, m, store)

    ham.ev.on('connection.update', async (update) => {  
	    const { connection, lastDisconnect } = update
        if (update.connection === 'close') {
        if(new Boom(update.lastDisconnect?.error)?.output.statusCode === DisconnectReason.badSession) { 
          console.log(`Bad Session File, Please Delete Session and Scan Again`); 
          ham.logout(); 
        } else if(new Boom(update.lastDisconnect?.error)?.output.statusCode === DisconnectReason.connectionClosed) { 
          console.log("Connection closed, reconnecting...."); 
          startH(); 
        } else if(new Boom(update.lastDisconnect?.error)?.output.statusCode === DisconnectReason.connectionLost) { 
          console.log("Connection Lost from Server, reconnecting..."); 
          startH(); 
        } else if(new Boom(update.lastDisconnect?.error)?.output.statusCode === DisconnectReason.connectionReplaced) { 
          console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); 
          ham.logout(); 
        } else if(new Boom(update.lastDisconnect?.error)?.output.statusCode === DisconnectReason.loggedOut) { 
          console.log(`Device Logged Out, Please Scan Again And Run.`); 
          ham.logout(); 
        } else if(new Boom(update.lastDisconnect?.error)?.output.statusCode === DisconnectReason.restartRequired) { 
          console.log("Restart Required, Restarting..."); 
          startH(); 
        } else if(new Boom(update.lastDisconnect?.error)?.output.statusCode === DisconnectReason.timedOut) { 
          console.log("Connection TimedOut, Reconnecting..."); 
          startH(); 
        } else ham.end(`Unknown DisconnectReason: ${new Boom(update.lastDisconnect?.error)?.output.statusCode}|${update.connection}`)
      }
    console.log('Connected...', update)
})

    ham.ev.on('creds.update', saveState)
		
		// Anti Call
    ham.ev.on('call', async (fatihh) => {
    let botNumber = await ham.decodeJid(ham.user.id)
    for (let tihh of fatihh) {
    if (tihh.isGroup == false) {
    if (tihh.status == "offer") {
    let pa7rick = await ham.sendTextWithMentions(tihh.from, `*${ham.user.name}* tidak bisa menerima panggilan ${tihh.isVideo ? `video` : `suara`}. Maaf @${tihh.from.split('@')[0]} kamu akan diblockir. Jika tidak sengaja silahkan hubungi Owner untuk dibuka !`)
    ham.sendContact(tihh.from, global.owner, pa7rick)
    await sleep(8000)
    await ham.updateBlockStatus(tihh.from, "block")
    }
    }
    }
    })


ham.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!ham.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(ham, mek, store)
require("./hamz.js")(ham, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
ham.getName = (jid, withoutContact  = false) => {
        id = ham.decodeJid(jid)
        withoutContact = ham.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = ham.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === ham.decodeJid(ham.user.id) ?
            ham.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
//GRUP UPDATE
ham.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await ham.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/3983c55ac7f3ebea225d3.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       ham.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       ham.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       ham.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       ham.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
       } else {
       ham.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi ${pea[0].subject}`, `Group Settings Change Message`, wm_fatih, [])
     }
    })

ham.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        if (!wlcm.includes(anu.id)) return
        try {
            let metadata = await ham.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await ham.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await ham.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
let nama = await ham.getName(num)
memb = metadata.participants.length
pushname = m.pushName || "No Name"
kon = await getBuffer(`https://betabotz-api.herokuapp.com/api/creator/welcome2?nama=${encodeURIComponent(nama)}&namagc=${encodeURIComponent(metadata.subject)}&pp=${encodeURIComponent(ppuser)}&member=${encodeURIComponent(memb)}&bg=https://telegra.ph/file/90a931648de597820bc08.jpg&apikey=BetaBotz`)
tol = await getBuffer(`https://betabotz-api.herokuapp.com/api/creator/goodbye2?nama=${encodeURIComponent(nama)}&namagc=${encodeURIComponent(metadata.subject)}&pp=${encodeURIComponent(ppuser)}&member=${encodeURIComponent(memb)}&bg=https://telegra.ph/file/90a931648de597820bc08.jpg&apikey=BetaBotz`)

    if (anu.action == 'add') {
    tekswell = `Hai Kak @${num.split("@")[0]} 👋\nSelamat Datang Di Grup ${metadata.subject}\n\n`
    let btnwel = [{buttonId: 'welc', buttonText: {displayText: 'Welcome Kak 👋'}, type: 1},]
    ham.sendMessage(anu.id, { image: kon, contextInfo: { mentionedJid: [num] }, caption: tekswell, footer: `Simple Bot Whatsapp By Ilham`, buttons: btnwel})
    } else if (anu.action == 'remove') {
    teksbye = `Sayonaraa @${num.split("@")[0]} 👋\nKeluar Dari Grup ${metadata.subject}\n\n`
    let btnbye = [{buttonId: 'lunga', buttonText: {displayText: 'Goodbye Kak 👋'}, type: 1},]
    ham.sendMessage(anu.id, { image: tol, contextInfo: { mentionedJid: [num] }, caption: teksbye, footer: `Simple Bot Whatsapp By Ilham`, buttons: btnbye})
    } else if (anu.action == 'demote') {
	demot = `Awokwokwokwok, @${num.split("@")[0]} diturunin admin`
	let btndmot = [{buttonId: 'awokawok', buttonText: {displayText: 'Awokwok 👋'}, type: 1},]
    ham.sendMessage(anu.id, { image: ppgroup, contextInfo: { mentionedJid: [num] }, caption: demot, footer: `Simple Bot Whatsapp By Ilham`, buttons: btndmot})
    } else if (anu.action == 'promote') {
	promot = `Bjir, @${num.split("@")[0]} sok sepuh lu:v`
	let btnpmot = [{buttonId: 'gege', buttonText: {displayText: 'Kengren 👋'}, type: 1},]
    ham.sendMessage(anu.id, { image: ppgroup, contextInfo: { mentionedJid: [num] }, caption: promot, footer: `Simple Bot Whatsapp By Ilham`, buttons: btnpmot})
    }
    }
	} catch (err) {
    console.log(err)
    }
    })
    
// Setting
    ham.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    ham.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = ham.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    
    
    ham.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await ham.getName(i + '@s.whatsapp.net'), //kalau mau muncul all number owner, nomor dibawah ganti i
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ham.getName(79131970045 + '@s.whatsapp.net')}\nFN:${await ham.getName(79131970045 + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:tendosweat@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://github.com/KilluaBot\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	ham.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    ham.setStatus = (status) => {
        ham.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	    
    // Add Other
      
      /** Resize Image
      *
      * @param {Buffer} Buffer (Only Image)
      * @param {Numeric} Width
      * @param {Numeric} Height
      */
      ham.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }
      // Siapa yang cita-citanya pakai resize buat keliatan thumbnailnya
      

      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     ham.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return ham.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return ham.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return ham.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return ham.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return ham.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      ham.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await ham.reSize(lok, 300, 150)
      ham.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    ham.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
    ham.sendMessage(jid, { image: img, caption: text, footer: footer, templateButtons: but, ...options })
    }
	
	ham.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
    let ahh = await ham.reSize(thumb, 300, 150)
    let a = [1,2]
    let b = a[Math.floor(Math.random() * a.length)]
    ham.sendMessage(jid, { video: gif, gifPlayback: true, gifAttribution: b, caption: text, footer: footer, jpegThumbnail: ahh, templateButtons: but, ...options })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    ham.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        ham.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ham.sendText = (jid, text, quoted = '', options) => ham.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ham.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ham.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
      ham.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        ham.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        ham.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        ham.sendMessage(jid, templateMessage)
        }
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ham.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ham.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    ham.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ham.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ham.sendTextWithMentions = async (jid, text, quoted, options = {}) => ham.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ham.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await ham.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ham.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await ham.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	ham.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await ham.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./baileys/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await ham.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    ham.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    ham.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    ham.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await ham.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    ham.cMod = (jid, copy, text = '', sender = ham.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === ham.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    ham.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.?\/.?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    ham.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await ham.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./baileys/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await ham.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    ham.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    return ham
}

startH()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})