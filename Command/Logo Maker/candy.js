const maker = require('mumaker')

module.exports = {
    name: "candy",
    alias: ["candy"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}candy Miku*`);
        maker.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by Moch Danu Hidayat` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}