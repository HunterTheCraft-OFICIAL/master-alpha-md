
const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

//=========MODULOS-ABAIXO========\\

const { Boom, axios, fs, cheerio, crypto, util, P, NodeCache, linkfy, request, ms, ffmpeg, fetch, qrterminal, libsignal, exec, spawn, execSync, moment, colors, time, hora, date }  = require('./consts-func.js');

//const puppeteer = require('puppeteer');


//=========FUNÇÕES-ABAIXO========\\

const dadosDir = './dados';
const masterQrDir = './dados/MASTER-QR';

if (!fs.existsSync(dadosDir)) {
  fs.mkdirSync(dadosDir);
}

if (!fs.existsSync(masterQrDir)) {
  fs.mkdirSync(masterQrDir);
}


//========Conexão-Via-QRcode========\\

async function connectToWhatsAppViaQR() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log('connection closed due to ', lastDisconnect?.error, ', reconnecting ', shouldReconnect);
      if (shouldReconnect) {
        connectToWhatsAppViaQR();
      }
    } else if (connection === 'open') {
      console.log('opened connection');
    }
  });

  sock.ev.on('creds.update', saveCreds);
}

//========Conexão-Via-Codigo========\\
//Não funcionando

//const { useMultiFileAuthState } = require('@whiskeysockets/baileys');

async function connectToWhatsAppViaCode() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false
  });

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log('connection closed due to ', lastDisconnect?.error, ', reconnecting ', shouldReconnect);
      if (shouldReconnect) {
        connectToWhatsAppViaCode();
      }
    } else if (connection === 'open') {
      console.log('opened connection');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  // Gerar o código de emparelhamento
  const phoneNumber = await getPhoneNumberFromUser();
  const code = await sock.generateCode(phoneNumber);
  console.log('Código de emparelhamento:', code);
}

async function getPhoneNumberFromUser() {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    readline.question('Digite o número de telefone:', (phoneNumber) => {
      readline.close();
      resolve(phoneNumber);
    });
  });
}

//===========Inicia o Bot===========\\
if (process.argv[2] === 'sim' || process.argv[2] === 'yes') {
  connectToWhatsAppViaCode();
} else {
  connectToWhatsAppViaQR();
}