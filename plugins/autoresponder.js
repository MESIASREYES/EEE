import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen8, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'ꪹ͜𓂃͡𝑺𝒂𝒌𝒖𝒓𝒂𝑩𝒐𝒕𝑳𝒊𝒕𝒆-𝑴𝑫𓏲੭', body: '𝖡𝗒: reyes - 𝖶𝖺𝗈𝗌', sourceUrl: `https://github.com/MESIASREYES/SakuraBotLite-MD`, thumbnail: imagen6}}})}

return !0 }
export default handler
