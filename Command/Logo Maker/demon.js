const maker = require('mumaker')

module.exports = {
    name: "demon",
    alias: ["evil"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}demon Miku*`);
        maker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by Moch Danu Hidayat` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}
