/**
 - Creator Base Dika Ardnt
 - Created By Lexxy Official
**/

const fs = require('fs')
const chalk = require('chalk')

exports.donate = (prefix, I, pushname) => {
return `
—————「 *DONATE* 」—————

Hai *Kak ${pushname} 👋*
You can support me to keep this bot up to date by donating
Any amount of your donation will mean a lot 👍

Dana : 081233649676
Ovo : 081233649676
Pulsa : 081233649676
Gopay : 081233649676

Thanks!
`
}
exports.sewabot = (prefix, I) => {
return `
—————「 *BOT PRIVATE* 」—————
  If you have more luck,
can you donate to us?
Instead of forcing, so that the bot stays
better updates.

𝐕𝐢𝐚 :
Dana/Ovo/Pulsa

*For those who volunteer to donate to us,
we thank you very much 🐦*

*Contact person* :
wa.me/6281233649676`
}

var pagar = '#'
var monospace = '```'
var readmore = String.fromCharCode(8206).repeat(4001)
exports.help = (prefix, l) => {
	return `${monospace}
╭─「 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 」
│ ${pagar}gantiapikey <apikey>
│ ${pagar}cekapikey
│ ${pagar}react <emoji>
│ ${pagar}self
│ ${pagar}public
│ ${pagar}bcall <query>
│ ${pagar}bcgroup <query>
│ ${pagar}chat <query>
│ ${pagar}ban <add/del> <nomor>
│ ${pagar}setbio <text>
│ ${pagar}otag <text>
│ ${pagar}setexif packname|author
│ ${pagar}setthumb <linkURL>
│ ${pagar}cowner <add/del>
│ ${pagar}sewad add <waktu>
│ ${pagar}sewad dell
│ ${pagar}creategc <name>
│ ${pagar}getcase <fitur>
│ ${pagar}getsession
│ >
│ =>
│ $
╰───────❒

╭─「 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 」
│ ${pagar}afk (alasan) 
│ ${pagar}link
│ ${pagar}setppgc <image>
│ ${pagar}setname <text>
│ ${pagar}setdesc <text>
│ ${pagar}ephemeral <enable/disable>
│ ${pagar}hidetag  <text>
│ ${pagar}tagme
│ ${pagar}tagall <text>
│ ${pagar}promote <@tag>/<reply>
│ ${pagar}demote <@tag>/<reply>
│ ${pagar}vote <query>
│ ${pagar}devote
│ ${pagar}upvote
│ ${pagar}cekvote
│ ${pagar}hapusvote
│ ${pagar}autosticker <enable/disable>
│ ${pagar}antilink <on/off>
│ ${pagar}leveling <enable/disable>
│ ${pagar}welcome <on/off>
│ ${pagar}autorevoke <on/off>
│ ${pagar}add @tag/<reply>
│ ${pagar}kick @tag/<reply>
│ ${pagar}revoke
│ ${pagar}group <open/close>
│ ${pagar}editinfo <open/close>
╰───────❒

╭─「 𝐎𝐓𝐇𝐄𝐑𝐒 𝐌𝐄𝐍𝐔 」
│ ${pagar}sewabot
│ ${pagar}delete
│ ${pagar}iklan
│ ${pagar}iklan2
│ ${pagar}iklan3
│ ${pagar}menfes nomor|pesan
│ ${pagar}donate
│ ${pagar}owner
│ ${pagar}listpc
│ ${pagar}listgc
│ ${pagar}ping
│ ${pagar}runtime
│ ${pagar}sewa
│ ${pagar}afk
│ ${pagar}speed
│ ${pagar}cekupdate [UpdateBot]
│ ${pagar}getscmd [GetSticker]
│ ${pagar}delete <query>
│ ${pagar}infochat <query>
│ ${pagar}request <query>
│ ${pagar}report <query>
│ ${pagar}listonline
│ ${pagar}botgrup
│ ${pagar}autostickerpc <enable/disable>
╰───────❒

╭─「 𝐌𝐀𝐓𝐄𝐌𝐀𝐓𝐈𝐊𝐀 𝐌𝐄𝐍𝐔 」
│ ${pagar}luas-segitiga
│ ${pagar}kel-segitiga
│ ${pagar}luas-persegi
│ ${pagar}pythagoras
│ ${pagar}kel-persegi
│ ${pagar}kubik
│ ${pagar}perkalian
│ ${pagar}kuadrat
╰───────❒

╭─「 𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔 」
│ ${pagar}anime <query>
│ ${pagar}nekonime
│ ${pagar}waifu
│ ${pagar}husbu
│ ${pagar}milf
│ ${pagar}loli
│ ${pagar}cosplay
│ ${pagar}akira
│ ${pagar}toukachan
│ ${pagar}boruto
│ ${pagar}kurumi
│ ${pagar}naruto
│ ${pagar}miku
│ ${pagar}sasuke
│ ${pagar}rize
│ ${pagar}hinata
│ ${pagar}itori
│ ${pagar}kaneki
│ ${pagar}minato
│ ${pagar}anjing
╰───────❒

╭─「 𝐂𝐄𝐑𝐏𝐄𝐍 𝐌𝐄𝐍𝐔 」
│ ${pagar}cerpen-persahabatan
│ ${pagar}cerpen-islami
│ ${pagar}cerpen-Pengorbanan
│ ${pagar}cerpen-cintasegitiga
│ ${pagar}cerpen-galau
│ ${pagar}cerpen
│ ${pagar}cerpen-sejarah.
│ ${pagar}cerpen-sedih
│ ${pagar}cerpen-sastra
│ ${pagar}cerpen-romantis
│ ${pagar}cerpen-rohani
│ ${pagar}cerpen-rindu
│ ${pagar}cerpen-remaja
│ ${pagar}cerpen-ramadhan
│ ${pagar}cerpen-petualangan
│ ${pagar}cerpen-perpisahan
│ ${pagar}cerpen-perjuangan
│ ${pagar}cerpen-penyesalan
│ ${pagar}cerpen-pengalaman
│ ${pagar}cerpen-pendidikan
│ ${pagar}cerpen-penantian
│ ${pagar}cerpen-patahhati
│ ${pagar}cerpen-olahraga
│ ${pagar}cerpen-nasionalisme
│ ${pagar}cerpen-nasihat
│ ${pagar}cerpen-motivasi
│ ${pagar}cerpen-misteri
│ ${pagar}cerpen-mengharukan
│ ${pagar}cerpen-malaysia
│ ${pagar}cerpen-liburan
│ ${pagar}cerpen-kristen
│ ${pagar}cerpen-korea
│ ${pagar}cerpen-kisahnyata
│ ${pagar}cerpen-keluarga
│ ${pagar}cerpen-kehidupan
│ ${pagar}cerpen-jepang
│ ${pagar}cerpen-inspiratif
│ ${pagar}cerpen-gokil
│ ${pagar}cerpen-galau
│ ${pagar}cerpen-cintasejati
│ ${pagar}cerpen-cintasedih
│ ${pagar}cerpen-cintaromantis
│ ${pagar}cerpen-cintapertama
│ ${pagar}cerpen-cintaislami
│ ${pagar}cerpen-cinta
│ ${pagar}cerpen-budaya
│ ${pagar}cerpen-bahasasunda
│ ${pagar}cerpen-bahasajawa
│ ${pagar}cerpen-bahasainggris
│ ${pagar}cerpen-bahasadaerah
│ ${pagar}cerpen-anak
╰───────❒

╭─「 𝐀𝐒𝐔𝐏𝐀𝐍 𝐌𝐄𝐍𝐔 」
│ ${pagar}asupan
│ ${pagar}asupan-loli
│ ${pagar}cecan
│ ${pagar}cecan-jepan
│ ${pagar}cecan-korea
│ ${pagar}cecan-vietnam
│ ${pagar}cecan-thai
│ ${pagar}cecan-malaysia
│ ${pagar}cecan-indo
│ ${pagar}cecan-china
│ ${pagar}asupanukhty
│ ${pagar}asupansantuy
│ ${pagar}fml
│ ${pagar}euni
│ ${pagar}gheayubi
│ ${pagar}bocil
│ ${pagar}rikagusriani
│ ${pagar}hijaber
╰───────❒

╭─「 𝐇𝐀𝐏𝐏𝐘 𝐌𝐄𝐍𝐔 」
│ ${pagar}math <query>
│ ${pagar}truth
│ ${pagar}dare
│ ${pagar}tictactoe <query>
│ ${pagar}delttt <query>
│ ${pagar}family100
│ ${pagar}suitpvp <query>
│ ${pagar}cekmati
│ ${pagar}wangy
│ ${pagar}cekgay
│ ${pagar}lesbicek
│ ${pagar}cekcantik
│ ${pagar}cekganteng
│ ${pagar}sangecek
│ ${pagar}kapankah
│ ${pagar}apakah
│ ${pagar}bagaimanakah
│ ${pagar}bisakah
│ ${pagar}rate  ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╰───────❒

╭─「 𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓 𝐌𝐄𝐍𝐔 」
│ ${pagar}wiki
│ ${pagar}gempa
│ ${pagar}cuacadunia
│ ${pagar}brainly <soal>
│ ${pagar}covidindo
│ ${pagar}covid
│ ${pagar}cuaca <tempat>
│ ${pagar}jadwaltv <channel>
│ ${pagar}playstore <error>
│ ${pagar}gsmarena
│ ${pagar}jadwalbioskop
│ ${pagar}nowplayingbioskop
│ ${pagar}aminio
│ ${pagar}wattpad
│ ${pagar}webtoons
╰───────❒

╭─「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 」
│ ${pagar}igvideo <link>
│ ${pagar}igfoto <link>
│ ${pagar}tiktok <link>
│ ${pagar}tiktoknowm <link>
│ ${pagar}mediafire <link>
│ ${pagar}ytmp3 <link>
│ ${pagar}ytmp4 <link>
│ ${pagar}git <linkrepo>
│ ${pagar}twitter <link>
│ ${pagar}facebook <link>
│ ${pagar}joox <url>
╰───────❒

╭─「 𝐑𝐏𝐆 𝐌𝐄𝐍𝐔 」 
│ ${pagar}berburu
│ ${pagar}mancing
│ ${pagar}menambang
│ ${pagar}mining
│ ${pagar}heal
│ ${pagar}profile
│ ${pagar}inventory
│ ${pagar}leaderboard
│ ${pagar}buy
│ ${pagar}sell
│ ${pagar}bacok
│ ${pagar}darah
╰───────❒

╭─「 𝐈𝐒𝐋𝐀𝐌𝐈𝐂 𝐌𝐄𝐍𝐔 」
│ ${pagar}asmaulhusna
│ ${pagar}hadist
│ ${pagar}quran
│ ${pagar}iqra
│ ${pagar}tafsirsurah
│ ${pagar}kisahnabi <query>
│ ${pagar}hadist
╰───────❒

╭─「 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 」
│ ${pagar}gimage <query>
│ ${pagar}ytsearch <query>
│ ${pagar}searchgc <query>
│ ${pagar}kbbi <query>
│ ${pagar}play <query>
│ ${pagar}lirik <query>
│ ${pagar}ytstalk <query>
│ ${pagar}ghstalk <query>
│ ${pagar}igstalk <query>
│ ${pagar}happymod <query>
│ ${pagar}servermc
│ ${pagar}ghstalk <username>
│ ${pagar}google <query>
│ ${pagar}pinterest <query>
│ ${pagar}ringtone <judul>
│ ${pagar}drakor <judul>
╰───────❒

╭─「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔 」
│ ${pagar}sticker <image/video>
│ ${pagar}attp <text>
│ ${pagar}ttp <text>
│ ${pagar}tts id <text>
│ ${pagar}qrcode <text>
│ ${pagar}smeme |text
│ ${pagar}smeme2 text1|text2
│ ${pagar}stickerwm <reply>
│ ${pagar}emoji <query>
│ ${pagar}tomp3 <video>
│ ${pagar}tovn <video>
│ ${pagar}toaudio <video>
│ ${pagar}emojimix2 <😁>
│ ${pagar}emojimix <😅+😂>
│ ${pagar}togif <video>
│ ${pagar}tourl  <query>
│ ${pagar}tomp4 <sticker>
│ ${pagar}toimg <sticker>
╰───────❒

╭─「 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔 」
│ ${pagar}inspect <query>
│ ${pagar}getname <query>
│ ${pagar}getpic <query>
│ ${pagar}nulis <text>
│ ${pagar}tinyurl <link>
│ ${pagar}kalkulator <query>
│ ${pagar}quoted <query>
│ ${pagar}join <link>
│ ${pagar}fliptext <query>
│ ${pagar}tohuruf <query>
│ ${pagar}volume <query>
│ ${pagar}bass <query>
│ ${pagar}tempo <query>
│ ${pagar}translate <query>
╰───────❒

╭─「 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔 」
│ ${pagar}coffe
│ ${pagar}styletext <text>
│ ${pagar}readmore <teks1|teks2>
│ ${pagar}pantun
│ ${pagar}katabucin
│ ${pagar}katabijak
│ ${pagar}katailham
│ ${pagar}katasenja
│ ${pagar}katadilan
│ ${pagar}fiersa
│ ${pagar}motivasi
│ ${pagar}taugasih
│ ${pagar}nyindir
│ ${pagar}ngawur
│ ${pagar}bacot
│ ${pagar}wallpaper <query>
│ ${pagar}wikimedia <query>
│ ${pagar}darkjokes
│ ${pagar}quotesanime
│ ${pagar}couple
│ ${pagar}fakta-unik
│ ${pagar}randomquotes
│ ${pagar}quotesmuslim
│ ${pagar}quotesjawa
│ ${pagar}quotes
│ ${pagar}katacinta
│ ${pagar}twichquote
│ ${pagar}cerpen
│ ${pagar}meme
│ ${pagar}fotobts
│ ${pagar}neko
│ ${pagar}sagiri
│ ${pagar}shinobu
│ ${pagar}megumin
│ ${pagar}wallnime
│ ${pagar}shota
╰───────❒

╭─「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐑𝐀𝐍𝐃𝐎𝐌
│ ${pagar}cry
│ ${pagar}kiss
│ ${pagar}kiss2
│ ${pagar}dance
│ ${pagar}cringe
│ ${pagar}smug2
│ ${pagar}slap
│ ${pagar}patrick
│ ${pagar}wave
│ ${pagar}bully
│ ${pagar}happy
│ ${pagar}smile
│ ${pagar}kill
╰───────❒

╭─「 𝐀𝐔𝐃𝐈𝐎 𝐌𝐄𝐍𝐔 」
│ ${pagar}bass
│ ${pagar}blown
│ ${pagar}deep
│ ${pagar}earrape
│ ${pagar}fat
│ ${pagar}fast
│ ${pagar}nightcore
│ ${pagar}smooth
│ ${pagar}reverse
│ ${pagar}tupai
│ ${pagar}robot
│ ${pagar}slow
╰───────❒

╭─「 𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔 」
│ examples: #thunder <query>
│ ${pagar}8bit text|text
│ ${pagar}glitch3
│ ${pagar}glitch2
│ ${pagar}candy
│ ${pagar}3dchristmas
│ ${pagar}sparklechristmas
│ ${pagar}deepsea
│ ${pagar}scifi
│ ${pagar}waterpipe
│ ${pagar}spooky
│ ${pagar}circuit
│ ${pagar}discovery
│ ${pagar}fiction
│ ${pagar}demon
│ ${pagar}berry
│ ${pagar}honey
│ ${pagar}brokenglass
│ ${pagar}watercolor
│ ${pagar}snow
│ ${pagar}cloud
│ ${pagar}ice
│ ${pagar}fruitjuice
│ ${pagar}glitch
│ ${pagar}3dspace
│ ${pagar}3dbox
│ ${pagar}drapwater
│ ${pagar}lion2
│ ${pagar}papercut
│ ${pagar}transformer
│ ${pagar}neondevil
│ ${pagar}3dstone
│ ${pagar}3davengers
│ ${pagar}horror text|text
│ ${pagar}retro text|text
│ ${pagar}pornhub text|text
│ ${pagar}textmaker <option>
│ ${pagar}rainbow text
│ ${pagar}3dtext text
│ ${pagar}christmas
│ ${pagar}ancient text
│ ${pagar}toxic text
│ ${pagar}tolol text
│ ${pagar}lava text
│ ${pagar}neonlight text
│ ${pagar}fabric text
│ ${pagar}glue text
│ ${pagar}luxury text
│ ${pagar}underwater
│ ${pagar}harrypotter
│ ${pagar}steel
│ ${pagar}metallic
│ ${pagar}graffiti
│ ${pagar}pencil
│ ${pagar}magma
│ ${pagar}sand
│ ${pagar}bokeh
│ ${pagar}biscuit
│ ${pagar}wood
│ ${pagar}chocolate
│ ${pagar}strawberry
│ ${pagar}blood
│ ${pagar}toxic
│ ${pagar}lava
│ ${pagar}rock
│ ${pagar}bloodglas
│ ${pagar}darkgold
│ ${pagar}sky
│ ${pagar}joker
│ ${pagar}wicker
│ ${pagar}firework
│ ${pagar}1917
│ ${pagar}toy
│ ${pagar}hoorror
│ ${pagar}whitebear
│ ${pagar}hollographic
│ ${pagar}bear
│ ${pagar}wolf
│ ${pagar}natural
│ ${pagar}carbon
│ ${pagar}thunder
│ ${pagar}matrix
│ ${pagar}blackpink
│ ${pagar}neon
│ ${pagar}juice
│ ${pagar}greenneon
│ ${pagar}3dneon
│ ${pagar}batman
│ ${pagar}lion
│ ${pagar}multicolor
│ ${pagar}collwall
│ ${pagar}wonderful
│ ${pagar}cool
│ ${pagar}sketch
│ ${pagar}marvel
│ ${pagar}skeleton
│ ${pagar}foggy
│ ${pagar}writing
│ ${pagar}halloweenfire
│ ${pagar}halloween
│ ${pagar}watercolor
│ ${pagar}classic
╰───────❒

╭─「 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐌𝐄𝐍𝐔 」
│ ${pagar}setcmd <query>
│ ${pagar}listcmd
│ ${pagar}delcmd <query>
│ ${pagar}lockcmd <query>
│ ${pagar}addmsg <query>
│ ${pagar}listmsg
│ ${pagar}getmsg <query>
│ ${pagar}delmsg <query>
╰───────❒${monospace}

*Ilham-MD@^1.0.0*\n*Bot WhatsApp With Baileys Multi Device*`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})