import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

export const words = amount => {
  return lorem.generateWords(amount)
}

export const sentences = amount => {
  return lorem.generateSentences(amount)
}

export const paragraphs = amount => {
  return lorem.generateParagraphs(amount)
}
