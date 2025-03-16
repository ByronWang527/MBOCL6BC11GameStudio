// 游戏数据
const games = {
    'flying-cat': {
        name: 'Flying Cat',
        description: '一款有趣的飞行猫咪游戏',
        rules: '控制猫咪飞行，收集星星，避开障碍物。使用空格键或点击屏幕让猫咪飞行。',
        content: '<div class="game-simulation"><img src="images/flying-cat.jpg" alt="Flying Cat Game" onerror="this.src=\'images/game-placeholder.svg\'"><p>Flying Cat 游戏模拟画面</p></div>'
    },
    'people-travel': {
        name: 'People travel',
        description: '探索世界各地的旅行游戏',
        rules: '选择不同的目的地，完成旅行任务，收集纪念品。使用方向键移动，按E键与物品互动。',
        content: '<div class="game-simulation"><img src="images/people-travel.jpg" alt="People Travel Game" onerror="this.src=\'images/game-placeholder.svg\'"><p>People Travel 游戏模拟画面</p></div>'
    },
    'fly-airplane': {
        name: 'Fly 0.1 airplane',
        description: '刺激的飞机模拟游戏',
        rules: '驾驶飞机完成各种任务，避开障碍物，安全着陆。使用W、A、S、D控制飞机方向，空格键加速。',
        content: '<div class="game-simulation"><img src="images/fly-airplane.jpg" alt="Fly Airplane Game" onerror="this.src=\'images/game-placeholder.svg\'"><p>Fly 0.1 Airplane 游戏模拟画面</p></div>'
    },
    '3d-parker': {
        name: '3D parker',
        description: '3D停车挑战游戏',
        rules: '在限定时间内将车辆停入指定位置，避免碰撞。使用方向键控制车辆，空格键刹车。',
        content: '<div class="game-simulation"><img src="images/3d-parker.jpg" alt="3D Parker Game" onerror="this.src=\'images/game-placeholder.svg\'"><p>3D Parker 游戏模拟画面</p></div>'
    },
    'game6': {
        name: '一蹦三尺高（落地点吗？预判呗）',
        description: '有趣的方块跑酷',
        rules: '## 玩法说明：\n\n🎮 电脑操作方式：\n\n* ← → 方向键：左右移动\n* ↑ 方向键：跳跃\n* ↓ 方向键：蹲下\n\n📱 手机操作方式：\n\n* 触摸左侧区域：向左移动\n* 触摸中间区域：跳跃\n* 触摸右侧区域：向右移动\n\n🎯 游戏目标：\n\n* 到达每关右上角的绿色终点\n* 避开红色尖刺陷阱\n* 注意！有些平台会移动或消失\n\n💡 小贴士：\n\n* 蹲下可以降低重心，更容易控制\n* 移动平台需要把握好时机\n* 前两关是适应关卡，熟悉一下操作',
        content: '<iframe src="https://lindi761.github.io/Game6/" width="100%" height="500px" frameborder="0" allowfullscreen></iframe>'
    }
};

// 当前选中的游戏
let currentGame = null;
let isGameRunning = false;

// DOM元素
const gameItems = document.querySelectorAll('.game-item');
const gameContent = document.getElementById('game-content');
const gameRules = document.getElementById('game-rules');
const currentGameName = document.getElementById('current-game-name');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const restartBtn = document.getElementById('restart-btn');
const escBtn = document.getElementById('esc-btn');
const settingsBtn = document.getElementById('settings-btn');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// 初始化
function init() {
    // 添加游戏项点击事件
    gameItems.forEach(item => {
        item.addEventListener('click', () => {
            selectGame(item.dataset.game);
        });
    });

    // 添加按钮事件
    startBtn.addEventListener('click', startGame);
    stopBtn.addEventListener('click', stopGame);
    restartBtn.addEventListener('click', restartGame);
    escBtn.addEventListener('click', escapeGame);
    settingsBtn.addEventListener('click', openSettings);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // 禁用游戏控制按钮
    updateButtonStates();
}

// 选择游戏
function selectGame(gameId) {
    // 移除之前选中的游戏高亮
    gameItems.forEach(item => item.classList.remove('active'));
    
    // 高亮当前选中的游戏
    const selectedItem = document.querySelector(`.game-item[data-game="${gameId}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
    
    // 更新当前游戏
    currentGame = games[gameId];
    
    // 更新游戏内容和规则
    if (currentGame) {
        currentGameName.textContent = currentGame.name;
        gameContent.innerHTML = currentGame.content;
        
        // 处理游戏规则的格式化显示
        let formattedRules = currentGame.rules;
        
        // 处理Markdown标题
        formattedRules = formattedRules.replace(/^## (.*?)$/gm, '<h4>$1</h4>');
        
        // 处理列表项
        formattedRules = formattedRules.replace(/^\* (.*?)$/gm, '<li>$1</li>');
        formattedRules = formattedRules.replace(/<li>(.*?)<\/li>/g, function(match) {
            return '<ul>' + match + '</ul>';
        }).replace(/<\/ul><ul>/g, '');
        
        // 处理换行
        formattedRules = formattedRules.replace(/\n\n/g, '<br><br>');
        formattedRules = formattedRules.replace(/\n/g, '<br>');
        
        gameRules.innerHTML = formattedRules;
    }
    
    // 停止当前游戏（如果正在运行）
    if (isGameRunning) {
        stopGame();
    }
    
    // 更新按钮状态
    updateButtonStates();
}

// 开始游戏
function startGame() {
    if (!currentGame) return;
    
    isGameRunning = true;
    gameContent.classList.add('game-running');
    
    // 这里可以添加游戏启动的逻辑
    console.log(`Starting game: ${currentGame.name}`);
    
    // 更新按钮状态
    updateButtonStates();
}

// 停止游戏
function stopGame() {
    if (!currentGame || !isGameRunning) return;
    
    isGameRunning = false;
    gameContent.classList.remove('game-running');
    
    // 这里可以添加游戏停止的逻辑
    console.log(`Stopping game: ${currentGame.name}`);
    
    // 更新按钮状态
    updateButtonStates();
}

// 重新开始游戏
function restartGame() {
    if (!currentGame) return;
    
    stopGame();
    startGame();
    
    // 这里可以添加游戏重启的逻辑
    console.log(`Restarting game: ${currentGame.name}`);
}

// 退出游戏
function escapeGame() {
    if (!currentGame) return;
    
    stopGame();
    
    // 这里可以添加退出游戏的逻辑
    console.log(`Escaping from game: ${currentGame.name}`);
}

// 打开设置
function openSettings() {
    if (!currentGame) return;
    
    // 这里可以添加打开设置的逻辑
    alert(`${currentGame.name} 设置`);
    console.log(`Opening settings for: ${currentGame.name}`);
}

// 切换全屏
function toggleFullscreen() {
    if (!gameContent) return;
    
    if (!document.fullscreenElement) {
        gameContent.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// 更新按钮状态
function updateButtonStates() {
    const hasGame = currentGame !== null;
    
    startBtn.disabled = !hasGame || isGameRunning;
    stopBtn.disabled = !hasGame || !isGameRunning;
    restartBtn.disabled = !hasGame;
    escBtn.disabled = !hasGame;
    settingsBtn.disabled = !hasGame;
    fullscreenBtn.disabled = !hasGame;
    
    // 视觉上禁用按钮
    [startBtn, stopBtn, restartBtn, escBtn, settingsBtn, fullscreenBtn].forEach(btn => {
        if (btn.disabled) {
            btn.classList.add('disabled');
        } else {
            btn.classList.remove('disabled');
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init); 