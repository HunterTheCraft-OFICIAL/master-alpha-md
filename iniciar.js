
//========MÓDULOS-BEILEYS========\\
//======@whiskeysockets/baileys=====\\

const { makeWASocket, downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap, generateForwardMessageContent, generateMessageContent, generateWAMessage, getBinaryNodeChild, getContentType, getDownloadedMediaMessage, getMessageTag, getMimetype, getRandomId, getTag, isBinaryNode, isGroup, isJsonNode, isMediaMessage, isMimetype, isTag, loadMessage, parseJid, parseMimetype, prepareWAMessageMedia, proto, Baileys, useSingleFileAuthState } = require('./consts-func.js');

//=========MÓDULOS-ABAIXO========\\

const { Boom, axios, fs, cheerio, crypto, util, P, NodeCache, linkfy, request, ms, ffmpeg, fetch, qrterminal, libsignal, exec, spawn, execSync, moment, colors, time, hora, date } = require('./consts-func.js');


//=========FUNÇÕES-ABAIXO========\\
//========Conexão-Via-QRcode========\\
//===========Inicia o Bot===========\\

function gerarCodigoConexao() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const tamanho = 8;
  const formato = 'XXXX-XXXX';

  let codigo = '';
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    const caractere = caracteres[indice];
    codigo += caractere;
  }

  // Adicionar o hífen no meio do código
  codigo = codigo.substring(0, 4) + '-' + codigo.substring(4);

  return codigo;
}

console.log(gerarCodigoConexao());

const baileys = require('@adiwajshing/baileys');

// Inicialize a biblioteca Baileys
const client = new baileys();

// Receba o token de autenticação
client.on('auth', (token) => {
  console.log('Token de autenticação:', token);
  // Armazene o token em uma variável
  const authToken = token;
});

