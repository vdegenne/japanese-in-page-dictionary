import _kanjis from '../data/kanjis.json'
import { Kanji } from './types'
import {isFullChinese} from "asian-regexps";
import { speakJapanese } from './speech';

export function jisho (word) {
  // window.open(`https://jisho.org/search/${encodeURIComponent(word)}%20%23kanji`, '_blank')
  window.open(`https://jisho.org/search/${encodeURIComponent(word)}`, '_blank')
}
export function mdbg (word) {
  window.open(`https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb=${encodeURIComponent(word)}`, '_blank')
}

export function tatoeba (word) {
  window.open(`https://tatoeba.org/en/sentences/search?from=jpn&query=${encodeURIComponent(word)}&to=`, '_blank')
}
export function goo (word) {
  window.open(`https://dictionary.goo.ne.jp/word/${encodeURIComponent(word)}/`, '_blank')
}

export async function naver (word) {
  if (word.length === 1 && isFullChinese(word)) {
    // fetch naver hanzi link
    const response = await fetch(`https://assiets.vdegenne.com/chinese/naver/${word}`)
    window.open(`https://hanja.dict.naver.com/${await response.text()}/learning`, '_blank')
    return
  }
  window.open(`https://ja.dict.naver.com/#/search?range=example&query=${encodeURIComponent(word)}`, '_blank')
}

export function googleImageSearch (word) {
  window.open(`http://www.google.com/search?q=${encodeURIComponent(word)}&tbm=isch`, '_blank')
}



/**
 * AUDIO
 **********/
const audioMap: {[word: string]: Blob|Promise<Response>} = {}

export async function playJapanese (word, volume = 1) {
  let audio: HTMLAudioElement
  if (word in audioMap) {
    if (audioMap[word] instanceof Promise) {
      // wait for the blob
      const response = await audioMap[word]
      await new Promise((resolve, reject) => { setTimeout(resolve, 100) })
    }

    audio = createAudioElementFromBlob(audioMap[word] as Blob)
  }
  else {
    const responsePromise = fetch(`https://assiets.vdegenne.com/data/japanese/audio/${encodeURIComponent(word)}`)
    audioMap[word] = responsePromise
    const response = await responsePromise
    const blob = audioMap[word] = await response.blob()
    audio = createAudioElementFromBlob(blob)
  }

  return new Promise((resolve, reject) => {
    audio.volume = volume
    audio.onerror = () => reject()
    audio.onended = () => {
      resolve(audio)
    }
    audio.play()
  })
}

export function createAudioElementFromBlob (blob: Blob) {
  return new Audio(URL.createObjectURL(blob))
}


export async function playJapaneseAudio (word: string) {
  try {
    if (word.length > 6) { throw new Error; }
    await playJapanese(word)
  } catch (e) {
    await speakJapanese(word)
  }
}

export function getKanjiData (character: string) {
  return (_kanjis as Kanji[]).find(k => k[1] === character)
}
