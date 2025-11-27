const paragraphs = [
  `Wandering through a maze of scattered thoughts, the mind drifts between curiosity and calmness, collecting random pieces of ideas like colorful fragments of a forgotten puzzle. Sometimes a simple moment, such as a distant sound or a warm breeze, sparks an unexpected burst of imagination. Words float together, forming stories that feel both familiar and new. Within this creative swirl, inspiration appears quietly, inviting us to explore possibilities hidden behind ordinary moments. Every thought becomes a stepping stone toward something meaningful, reminding us that creativity often emerges from the most unpredictable places, shaped by chance and curiosity working together.`,

  `In a world filled with constant motion, tiny details often go unnoticed—yet they carry quiet beauty. The soft rhythm of footsteps, the gentle shift of sunlight, or the whisper of wind across an empty street can spark unexpected wonder. Random thoughts collide like drifting clouds, creating patterns that inspire fresh perspectives. A single idea grows into another, weaving reflections into a long chain of curiosity. These moments, though small, bring clarity to our wandering minds. They remind us that inspiration does not always come loudly; sometimes it arrives softly, wrapped in silence and shaped by simple observation.`,

  `Sometimes the mind creates stories out of thin air—small sparks that suddenly transform into vivid scenes. A random word can trigger an entire journey filled with characters, places, and emotions. Thoughts stretch across time, mixing memories with imagination, shaping ideas that feel strangely alive. This flow of creativity rarely follows rules; it simply exists, moving freely like water across smooth stones. Each moment becomes part of a bigger picture, urging us to explore new paths. Even the simplest inspiration can grow into something powerful, reminding us that imagination thrives when allowed to roam without limits or expectations.`,

  `The world is built from countless fragments—moments, ideas, and emotions blending into the stories we carry. Random thoughts drift into our minds like scattered leaves, forming patterns only we can understand. A single spark of curiosity can grow into a long journey of creativity, pushing us to think beyond what we know. These unexpected inspirations shape our thoughts, allowing us to see beauty in ordinary things. Every sound, movement, and glance adds another layer to our experiences. Through this flow of quiet creativity, we discover how even small ideas can create meaningful change and powerful reflections.`,

  `Patterns of thought often emerge from randomness. A stray idea drifts in like a soft breeze, nudging us toward new possibilities. Words gather, rearrange themselves, and form connections that feel both surprising and natural. Creativity thrives in such unpredictable spaces, where structure meets spontaneity. A simple image, sound, or memory becomes a seed for something bigger. As thoughts expand, they weave into a story filled with curiosity and meaning. This gentle process reminds us that inspiration rarely arrives through force—it grows slowly, shaped by observation, imagination, and the willingness to explore what lies just beyond the obvious.`,

  `Every moment carries the potential to spark creativity, even when it seems random or unimportant. A quiet sound, a passing word, or a drifting thought can become the foundation for a new idea. Our minds gather these fragments and blend them into something richer, like weaving threads into a tapestry. The beauty of creativity is that it doesn't need perfect conditions; sometimes the most unexpected moments give birth to the brightest inspiration. As we explore these small sparks, we discover new perspectives, deeper reflections, and a renewed sense of possibility, reminding us that imagination is always within reach.`,

  `Thoughts wander across the mind like birds moving through open skies, shifting directions without warning but always carrying a purpose. A single random idea can lead to another, eventually forming a long chain of imagination. These drifting images and words hold quiet power, shaping stories we never planned to create. Creativity flourishes in this space of unpredictability, where inspiration comes from everyday moments. A glance outside, a familiar sound, or even silence can guide the mind toward new discoveries. In these spontaneous connections, we find meaning, reflection, and the gentle spark of endless curiosity.`,

  `Within the flow of everyday life, small sparks of randomness quietly inspire creativity. A forgotten memory surfaces, a phrase repeats itself, or a color catches the eye, stirring thoughts that slowly grow into something bigger. These moments form long trails of imagination, connecting ideas in ways we do not always understand. Creativity blooms when we allow these thoughts to wander freely, without judging or limiting them. Through this gentle exploration, we discover new perspectives and hidden insights, reminding us that inspiration can arise from anywhere—especially from the simple, unpredictable rhythm of our own thoughts.`,

  `Random thoughts often drift into our minds, bringing unexpected clarity. A simple moment—like watching light move across a wall or hearing distant laughter—can spark long chains of ideas. These fragments blend into reflections, forming deeper stories shaped by curiosity. Creativity thrives here, in the space where imagination meets randomness. Each idea builds on another, creating meaning from scattered pieces. This natural process reminds us that inspiration is not forced; it grows through patience, observation, and openness to new perspectives. As thoughts shift and evolve, they guide us toward fresh insights and endless possibilities.`
];

const form = document.querySelector(".lorem-form");
const amount = document.querySelector(".textInput");
const result = document.querySelector(".result")

form.addEventListener("submit", function(e){
    e.preventDefault();
    const value = parseInt(amount.value)  // will convert in int
    const random = Math.floor(Math.random()*paragraphs.length)
    console.log( value);

    // empty
    // -1
    // >9
    if(isNaN(value) || value<= 0 || value>8){
        result.innerHTML = `<p class="result" >${paragraphs[random]}</p>`
    }
    else{
        let tempText = paragraphs.slice(0, value);
        tempText = tempText.map(function(item){
        return `<p class="result">${item}</p>`
        }).join("")
        result.innerHTML = tempText
        
    }
})