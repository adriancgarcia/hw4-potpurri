console.log("Mad Libs!")

const words = {
    number: '',
    adj: '',
    pluralNoun: '', 
    adverb: '',
    anotherAdj: ''
}

const startMadLib = () => {
    words.number = prompt ('what is your favorite number?');
    words.adj = prompt ('One word that best describes you?');
    words.pluralNoun = prompt ('What do you collect?');
    words.adverb = prompt ('Enter an adverb');
    words.anotherAdj = prompt ('What is one word your friends would use to describe you?')
    console.log(words)
}

startMadLib()



// Create the Tech Startup MadLib Story!
// Now that we've accepted the user's input and saved it to the object, we can use those values to create a MadLib!

// Use the following story and concatenate or interpolate the values from the object into it.

words.techStartup = alert (`Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adj} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdj} fame.`)
