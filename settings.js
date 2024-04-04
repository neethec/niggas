const chalk = require("chalk")
const fs = require("fs")


//
global.domain = 'narakaizen.online'
global.apikey = 'ptla_mPnGPknLClnC5TPcGIKG0O9e60wJInG0FXruoRsv4Bd'
global.capikey = 'ptlc_B9Jod73kSTQZGbqwc2yheWw7VGoLgL37gQYFJrASTrr'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6287834993722'] //ur owner number
global.ownernomer = "6281329411749" //ur owner number2
global.ownername = "NathanXD" //ur owner name
global.ytname = "-" //ur yt chanel name
global.socialm = "nathan_xd39" //ur github or insta name
global.location = "Baki Sukoharjo, Indonesia " //ur location

//new
global.botname = "NathanDXD"
global.ownernumber = '6287834993722'
global.ownername = '6287834993722'
global.ownerNumber = ["6287834993722@s.whatsapp.net"]
global.ownerweb = "narakaizen.online"
global.websitex = "https://narakaizen.online"
global.wagc = "-"
global.themeemoji = '🚩'
global.wm = "NathanXD"
global.wmbot = "NathanDXD"
global.botscript = '-' //script link
global.packname = "NathanXD"
global.author = "Punya Nathan"
global.creator = "6287834993722@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0
global.running = "Termux. (im need money for buy vps pls)"
//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Success',
    admin: 'Admin Only!',
    botAdmin: 'Bot Must Admin!',
    premime: 'Premium Only',
    owner: 'Owner Only',
    group: 'Group Only!',
    private: 'Private Chat Only!',
    bot: 'Bot Only!',
    wait: 'Waiting Be Processed..',
    linkm: 'Where Is The Link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'NSFW Deactivated',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})