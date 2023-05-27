module.exports = {
    name: "hi",
    alias: ["hello","alive","info"],
    desc: "Say hello to bot.",
    react: "🧣",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
        await Miku.sendMessage(m.from,{image:{url:botImage1},caption:`\nKonichiwa *${pushName}* senpai, Saya adalah *Miku-bot*. Tulis *${prefix}help* untuk mendapatkan daftar perintah lengkap.\n\n_🧩 Server Uptime:_ *${uptime()}*\n_🎀 Status:_ *Operational*\n`},{quoted:m})
    }
}