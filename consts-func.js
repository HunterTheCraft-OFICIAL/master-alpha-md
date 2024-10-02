const { 
'default': makeWASocket,
downloadContentFromMessage, 
fetchLatestBaileysVersion, 
useMultiFileAuthState, 
makeInMemoryStore, 
DisconnectReason,
WAGroupMetadata,
relayWAMessage,	
MediaPathMap, 
mentionedJid, 
processTime,	
MediaType, 
Browser, 
MessageType, 
Presence, 
Mimetype, 
Browsers, 
delay, 
MessageRetryMap
} = require('@whiskeysockets/baileys');

//_-_-_-__-_-_-_-_-_-MARCAÇÕES/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

// MÓDULOS ABAIXO.. 

const { Boom }  = require('@hapi/boom');

const axios = require('axios');

const fs = require('fs-extra');

const cheerio = require('cheerio');

const crypto = require('crypto');

const util = require('util');

const P = require('pino');

const NodeCache = require("node-cache");

const linkfy = require('linkifyjs');

const request = require('request');

const ms = require('ms');

const ffmpeg = require('fluent-ffmpeg');

const fetch = require('node-fetch');

const qrterminal = require('qrcode-terminal');

const libsignal = require('libsignal');

const { exec, spawn, execSync } = require('child_process');

const moment = require('moment-timezone');

const colors = require("colors");

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

// FUNÇÕES ABAIXO... 



module.exports = {
  
// MÓDULOS ABAIXO > 

Boom, axios, fs, cheerio, crypto, util, P, NodeCache, linkfy, request, ms, ffmpeg, fetch, qrterminal, libsignal, exec, spawn, execSync, moment, colors, time, hora, date

}
