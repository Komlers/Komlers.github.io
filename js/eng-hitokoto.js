// Hitokoto

async function fetchHitokoto() {
    try {
        const response = await fetch('https://api.quotable.io/quotes/random');
        const data = await response.json();
        
        const content = document.querySelector('#hitokoto_text');
        content.href = `https://hitokoto.cn/${data._id}`;
        content.innerText = data.content;
        
    } catch (error) {
        console.error(error);
    }
}

fetchHitokoto();