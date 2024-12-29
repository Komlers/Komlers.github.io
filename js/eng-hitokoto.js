// Hitokoto

// 获取文本元素，假设页面加载后不会改变
const hitokotoElement = document.querySelector('#hitokoto_text');

async function fetchHitokoto() {
    try {
        const response = await fetch('https://api.quotable.io/quotes/random');
        if (!response.ok) {
            throw new Error('网络响应不正常');
        }
        const data = await response.json();
        
        // 更新文本内容
        hitokotoElement.innerText = data.content;
    } catch (error) {
        console.error('获取一言时出错:', error);
        // 可选：将错误信息显示给用户
        hitokotoElement.innerText = '无法获取一言，稍后重试。';
    }
}

// 立即调用函数获取一言
fetchHitokoto();
