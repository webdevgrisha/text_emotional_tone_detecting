interface EmotionsConfing {
    [key: string]: {
        text: string;
        color: string;
    }
}

const emotionsConfing: EmotionsConfing = {
    "Positive emotions": {
        text: `I’m so excited about my new job! It feels like a dream come true."
"Today has been amazing! I’m grateful for all the wonderful people in my life."
"I just got promoted, and I feel on top of the world!"
"The weather is beautiful, and I feel so lucky to be alive."
"Thank you for being such a great friend. You always know how to cheer me up."
`,
        color: 'rgb(50, 205, 50)'
    },

    "Negative emotions": {
        text: `"I feel like nothing ever goes right for me. Everything is falling apart."
"I’m so disappointed in myself. I thought I could do better."
"Today has been one of the worst days of my life."
"I’m really angry about the way I was treated. It’s completely unfair."
"Why does everything have to be so difficult? I feel exhausted."`,
        color: "rgb(178, 34, 34)"
    },
    "Neutral emotions": {
        text: `"I went to the grocery store today and bought some vegetables."
"I’m planning to work on my project this afternoon."
"It was an ordinary day, nothing special happened."
"I have a meeting scheduled for 2 p.m. tomorrow."
"The movie was okay, but it didn’t leave much of an impression."`,
        color: "rgb(169, 169, 169)",
    },
    "Surprise": {
        text: `"I can’t believe it! I never expected this to happen."
"Wow, this is such a pleasant surprise!"
"I was so shocked when I heard the news!"
"What an incredible discovery! I’m speechless."
"I had no idea this was coming. I’m completely stunned."`,
        color: 'rgb(255, 223, 0)'
    },
    "Fear": {
        text: `"I’m really scared about what might happen next."
"The idea of speaking in front of a crowd makes me extremely nervous."
"I can’t stop worrying about the future. It’s so uncertain."
"I feel terrified every time I think about that situation."
"I hope everything turns out okay. I’m so anxious right now."`,
        color: "rgb(75, 0, 130)"
    },
    "Sadness": {
        text: `"I feel so empty and lonely. Nothing seems to matter anymore."
"It’s hard to stay positive when things are falling apart."
"I miss the way things used to be. I feel so sad."
"Sometimes, it feels like I’m carrying the weight of the world on my shoulders."
"I don’t know if I’ll ever feel happy again."`,
        color: "rgb(70, 130, 180)"
    }
}


export default emotionsConfing;