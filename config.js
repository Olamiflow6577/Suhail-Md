const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168542597";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_57_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDgyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgODcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA1MixcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMnRhOW9YbW4rUnhYckxMUEM5dTBMQXdhczE1NEdRVVJwWG9mNnl1UlAzND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY4NTQyNTk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQjQxQkQ1RDZBRThGRkNFNTlFRDkwNUUzOUZFQjc2QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1MDE4NTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR1JLNTVsRDJTQi0wRzNrbHRGZ0M3d1wiLFxuICBcInBob25lSWRcIjogXCI5YWFmZDAxNi00ODgxLTQ1NzgtODYzNi1kNzU1MjVhNDkwYWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgNDMsXG4gICAgICAxNSxcbiAgICAgIDIxLFxuICAgICAgMTE4LFxuICAgICAgOTcsXG4gICAgICAyMTQsXG4gICAgICA0MixcbiAgICAgIDE3LFxuICAgICAgMTk5LFxuICAgICAgMTMsXG4gICAgICAyMjksXG4gICAgICA1MyxcbiAgICAgIDkyLFxuICAgICAgMTg0LFxuICAgICAgODMsXG4gICAgICA1MSxcbiAgICAgIDI0OCxcbiAgICAgIDE0NCxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDIxMSxcbiAgICAgIDE0OCxcbiAgICAgIDIyOCxcbiAgICAgIDI0MCxcbiAgICAgIDIyNixcbiAgICAgIDAsXG4gICAgICAxODUsXG4gICAgICAxOTUsXG4gICAgICAyMDYsXG4gICAgICAyOCxcbiAgICAgIDU5LFxuICAgICAgNDQsXG4gICAgICA3NSxcbiAgICAgIDEyMCxcbiAgICAgIDIyNyxcbiAgICAgIDE0NyxcbiAgICAgIDEyNSxcbiAgICAgIDI0NixcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHSlkxMVpCV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2ODU0MjU5NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ0ODc1MzQ2OTA0NjU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZjNoM1VRbEpId3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJSVjBjbE8zS3FyLzR3V1pQMkk3RUc3WGpoeE5sZ1FteXQyMFVCS0lOM2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMC93eU9oSk9LR1NJSzhuL0k1MVZMdDcyS2FGcnRCM2c1WVVHcDlwNloxeStXQ0VIZk9mQkVKNUZsdFA4QTJ2b21ya05YSnR1RDhjeGVSS3ZxVU1GRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiazVIY2NBWDNuVGJXREhSTVUrNlk2L3ZOaFBHWG1qYXplV0psMWNDdnRqV0xyNHhBdDAyekhWSG84c0ZmSzFkQVRrYStvTytqLytkZ3UyVG5rVkRTQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODU0MjU5NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTAxODQ5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
