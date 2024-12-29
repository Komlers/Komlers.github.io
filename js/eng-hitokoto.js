// Hitokoto

async function fetchHitokoto() {
    try {
        const response = await fetch('https://api.quotable.io/quotes/random');
        const data = await response.json();
        
        const hitokoto = document.querySelector('#hitokoto_text');
        hitokoto.innerText = data.content;
        
    } catch (error) {
        console.error(error);
    }
}

fetchHitokoto();