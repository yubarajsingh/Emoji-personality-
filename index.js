// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

const myEmojis = ['🇳🇵',"🥳","👨‍💻", "🎬","🥳 ","🎥 ", "🎆", "🌃", "🕛", '⚽',"📖 "," 🎊","🐕","🎶"]

function renderEmoji(){
    const emojiContainer = document.getElementById("emoji-container")
    
    emojiContainer.innerHTML = ""
    
for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}}
renderEmoji()
const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if(emojiInput!==""){
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        }
        renderEmoji()
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
   
        myEmojis.pop()
      
        
        renderEmoji()
})


const unshift=document.getElementById('unshift-btn')
unshift.addEventListener('click',function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        
    }
    renderEmoji()
})

const shift=document.getElementById('shift-btn')
shift.addEventListener('click',function(){
   
    console.log('clicked')
        myEmojis.shift()
        
        
    
    renderEmoji()
})