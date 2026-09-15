/**
 * ALICE ESL Phonics P3 - 大魚吃小魚英文冒險題庫 (data.js)
 * 課本學習範圍：Page 04 - 12
 * 主題：Beginning Sounds & Long Vowels (Silent E / Two Vowels)
 */

window.BOOK_ID = "P3";
const FISH_QUESTIONS = [
  {
    "id": "fish-qa-1",
    "type": "QA",
    "source": "ALICE ESL Phonics P3 Page 04 - 12",
    "questionEn": "Can you play the flute?",
    "questionZh": "你會吹長笛嗎？",
    "speechText": "Can you play the flute?",
    "options": [
      "Yes, I can.",
      "No, I can't.",
      "Yes, I lake."
    ],
    "correct": "Yes, I can.",
    "audioFallback": "P3_flashcards_audios/P3_flute.mp3",
    "theme": "Beginning Sounds & Long Vowels (Silent E / Two Vowels)"
  },
  {
    "id": "fish-qa-2",
    "type": "QA",
    "source": "ALICE ESL Phonics P3 Page 04 - 12",
    "questionEn": "Can the boat float?",
    "questionZh": "這艘船會漂浮嗎？",
    "speechText": "Can the boat float?",
    "options": [
      "Yes, it can.",
      "No, it can't.",
      "No, it dive."
    ],
    "correct": "Yes, it can.",
    "audioFallback": "P3_flashcards_audios/P3_boat.mp3",
    "theme": "Beginning Sounds & Long Vowels (Silent E / Two Vowels)"
  },
  {
    "id": "fish-qa-3",
    "type": "QA",
    "source": "ALICE ESL Phonics P3 Page 04 - 12",
    "questionEn": "Which word begins with Ll?",
    "questionZh": "哪一個單字是 Ll 開頭？",
    "speechText": "Which word begins with Ll?",
    "options": [
      "leaf",
      "nose",
      "yard"
    ],
    "correct": "leaf",
    "audioFallback": "P3_flashcards_audios/P3_leaf.mp3",
    "theme": "Beginning Sounds & Long Vowels (Silent E / Two Vowels)"
  },
  {
    "id": "fish-qa-4",
    "type": "QA",
    "source": "ALICE ESL Phonics P3 Page 04 - 12",
    "questionEn": "Which word begins with Yy?",
    "questionZh": "哪一個單字是 Yy 開頭？",
    "speechText": "Which word begins with Yy?",
    "options": [
      "yellow",
      "yard",
      "night"
    ],
    "correct": "yellow",
    "audioFallback": "P3_flashcards_audios/P3_yellow.mp3",
    "theme": "Beginning Sounds & Long Vowels (Silent E / Two Vowels)"
  },
  {
    "id": "fish-qa-5",
    "type": "QA",
    "source": "ALICE ESL Phonics P3 Page 04 - 12",
    "questionEn": "Which word has long vowel a?",
    "questionZh": "哪一個單字有長母音 a？",
    "speechText": "Which word has long vowel a?",
    "options": [
      "cake",
      "feet",
      "cube"
    ],
    "correct": "cake",
    "audioFallback": "P3_flashcards_audios/P3_cake.mp3",
    "theme": "Beginning Sounds & Long Vowels (Silent E / Two Vowels)"
  },
  {
    "id": "fish-qa-6",
    "type": "QA",
    "source": "ALICE ESL Phonics P3 Page 04 - 12",
    "questionEn": "Which word has long vowel i?",
    "questionZh": "哪一個單字有長母音 i？",
    "speechText": "Which word has long vowel i?",
    "options": [
      "bike",
      "boat",
      "green"
    ],
    "correct": "bike",
    "audioFallback": "P3_flashcards_audios/P3_bike.mp3",
    "theme": "Beginning Sounds & Long Vowels (Silent E / Two Vowels)"
  }
];

if (typeof window !== "undefined") {
  window.FISH_QUESTIONS = FISH_QUESTIONS;
  window.P3_FISH_QUESTIONS = FISH_QUESTIONS;
  window.P1_FISH_QUESTIONS = FISH_QUESTIONS;
  window[`${window.BOOK_ID}_FISH_QUESTIONS`] = FISH_QUESTIONS;
}
