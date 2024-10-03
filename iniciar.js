
//========MÓDULOS-BEILEYS========\\
//======@whiskeysockets/baileys=====\\

const { makeWASocket, downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap, generateForwardMessageContent, generateMessageContent, generateWAMessage, getBinaryNodeChild, getContentType, getDownloadedMediaMessage, getMessageTag, getMimetype, getRandomId, getTag, isBinaryNode, isGroup, isJsonNode, isMediaMessage, isMimetype, isTag, loadMessage, parseJid, parseMimetype, prepareWAMessageMedia, proto, Baileys, useSingleFileAuthState } = require('./consts-func.js');

//=========MÓDULOS-ABAIXO========\\

const {  Boom, axios, fs, cheerio, crypto, util, P, NodeCache, linkfy, request, ms, ffmpeg, fetch, qrterminal, libsignal, exec, spawn, execSync, moment, colors, time, hora, date } = require('./consts-func.js');


//=========FUNÇÕES-ABAIXO========\\

// Import the Baileys library
//const { Baileys, useSingleFileAuthState } = require('@adiwajshing/baileys');

// Create a new instance of Baileys
const baik = new Baileys();

// Method 1: QR Code Scanning
async function startWithQRCode() {
  // Create a QR code and display it on the WhatsApp Web interface
  const qrCode = await baik.generateQRCode();
  console.log(`Scan the QR code: ${qrCode}`);

  // Wait for the user to scan the QR code and authenticate
  await baik.waitForAuthentication();

  // Once authenticated, start the WhatsApp client
  await baik.start();
  console.log('WhatsApp client started!');
}

// Method 2: Authentication Token
async function startWithAuthToken() {
  // Request an authentication token from the WhatsApp Web interface
  const authToken = await baik.getAuthToken();
  console.log(`Enter the authentication token: ${authToken}`);

  // Wait for the user to enter the authentication token
  const token = await readline.question('Enter the authentication token: ');
  baik.useAuthState(useSingleFileAuthState(token));

  // Start the WhatsApp client using the authentication token
  await baik.start();
  console.log('WhatsApp client started!');
}

// Main function to start the WhatsApp client
async function iniciar() {
  console.log('Select a method to start the WhatsApp client:');
  console.log('1. QR Code Scanning');
  console.log('2. Authentication Token');

  const choice = await readline.question('Enter your choice (1/2): ');

  if (choice === '1') {
    await startWithQRCode();
  } else if (choice === '2') {
    await startWithAuthToken();
  } else {
    console.log('Invalid choice. Exiting...');
    process.exit(1);
  }
}

iniciar();

//========Conexão-Via-QRcode========\\



//===========Inicia o Bot===========\\
