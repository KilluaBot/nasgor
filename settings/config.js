const fs = require("fs")
const chalk = require("chalk")

// IMG
global.thum = "https://telegra.ph/file/7188012d573871aaf4fa0.jpg"
global.log0 = fs.readFileSync("./media/image/animej.jpg")
global.iklan1 = fs.readFileSync("./media/image/sonel.jpg")
global.oomaga = fs.readFileSync("./media/video/fake.mp4")
global.thumb = fs.readFileSync("./media/image/thumb.jpg")
global.thumb2 = fs.readFileSync("./media/image/thumb2.jpg")
global.iklan = "https://telegra.ph/file/3d55db3660abc1e8bcc34.jpg"
global.sewabot = fs.readFileSync("./media/image/sewa.jpg")
global.qris = fs.readFileSync("./media/image/qris.jpg")
global.err4r = "https://telegra.ph/file/7188012d573871aaf4fa0.jpg"
//Other
global.owner = ['6289675644627','6281233649676','6287819654911','62895611406599'] //edit owner
global.whatsapp = "0@s.whatsapp.net" //cuma buat tag
global.ownername = "this.ilham女" //nama owner
global.namebot = "Ilham - MD" //nama bot
global.lolkey = "dinn.turu" // https://api.lolhuman.xyz
global.betakey = "BetaBotz" // https://betabotz-api.herokuapp.com
global.xteamkey = "xzibit123" // https://api.xteam.xyz
global.lolhuman = "https://api.lolhuman.xyz"
global.xteam = "https://api.xteam.xyz"
global.beta = "https://betabotz-api.herokuapp.com"
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = []
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "© Ilham"
global.packname2 = "Ilham-MD"
global.author = "Ilham-MD"
global.sessionName = "session"
global.linkgrupss = "https://s.id/allbot"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: '*Success!*',
    admin: '*Fitur Khusus Admin Group!*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Silahkan Menunggu!*',
    linkm: 'Linknya Mana Kak?',
    ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}
global.limitawal = {
    premium: "Infinity",
    free: "Infinity",
    monayawal: "Infinity"
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: "Infinity"
}
//Thank Fax Bot
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})