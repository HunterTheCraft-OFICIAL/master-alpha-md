

//========MÓDULOS-BEILEYS========\\
//======@whiskeysockets/baileys======\\
const {
  makeWASocket,
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
  MessageRetryMap,
  generateForwardMessageContent,
  generateMessageContent,
  generateWAMessage,
  getBinaryNodeChild,
  getContentType,
  getDownloadedMediaMessage,
  getMessageTag,
  getMimetype,
  getRandomId,
  getTag,
  isBinaryNode,
  isGroup,
  isJsonNode,
  isMediaMessage,
  isMimetype,
  isTag,
  loadMessage,
  parseJid,
  parseMimetype,
  prepareWAMessageMedia,
  proto,
  Baileys,
  useSingleFileAuthState
} = require('@whiskeysockets/baileys');


//const { Baileys, useSingleFileAuthState } = require('@adiwajshing/baileys');
//=========MÓDULOS-ABAIXO========\\

const Boom = require('@hapi/boom');
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

//============FUNÇÕES============\\



//======EXPORTAÇÃO-MÓDULOS======\\

module.exports = {
//========MÓDULOS-BEILEYS========\\
//======@whiskeysockets/baileys======\\

makeWASocket, downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap, generateForwardMessageContent, generateMessageContent, generateWAMessage, getBinaryNodeChild, getContentType, getDownloadedMediaMessage, getMessageTag, getMimetype, getRandomId, getTag, isBinaryNode, isGroup, isJsonNode, isMediaMessage, isMimetype, isTag, loadMessage, parseJid, parseMimetype, prepareWAMessageMedia, proto, Baileys, useSingleFileAuthState, 

//=========MÓDULOS-ABAIXO========\\
 Boom, axios, fs, cheerio, crypto, util, P, NodeCache, linkfy, request, ms, ffmpeg, fetch, qrterminal, libsignal, exec, spawn, execSync, moment, colors, time, hora, date 
 
//============FUNÇÕES============\\

}