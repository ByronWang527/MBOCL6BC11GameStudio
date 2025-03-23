// 游戏数据
const games = {
    'flying-cat': {
        name: 'Flying Cat',
        description: '一款有趣的飞行猫咪游戏',
        rules: '控制猫咪飞行，收集星星，避开障碍物。使用空格键或点击屏幕让猫咪飞行。',
        content: '<div class="game-simulation"><iframe src="https://sarah912999.github.io/Game1/" width="100%" height="100%" frameborder="0" allowfullscreen></iframe></div>',
        price: 0, // 免费
        isPremium: false
    },
    'people-travel': {
        name: 'People travel',
        description: '探索世界各地的旅行游戏',
        rules: '选择不同的目的地，完成旅行任务，收集纪念品。使用方向键移动，按E键与物品互动。',
        content: '<div class="game-simulation"><img src="images/people-travel.jpg" alt="People Travel Game" onerror="this.src=\'images/game-placeholder.svg\'"><p>People Travel 游戏模拟画面</p></div>',
        price: 0, // 免费
        isPremium: false
    },
    'ooooo': {
        name: 'OOOOO',
        description: '刺激的射击冒险游戏',
        rules: '游戏操作说明：\n- 方向键：移动\n- 空格键：射击\n- Z键：跳跃\n- G键：投掷手雷\n- B键：打开商城\n\n游戏目标：\n- 消灭恐龙\n- 收集分数\n- 在商城购买升级道具',
        content: '<iframe src="https://oliver-2015.github.io/ooooo/" style="width: 100%; height: 600px; border: none;" allowfullscreen></iframe>',
        price: 0, // 免费
        isPremium: false
    },
    'fly-airplane': {
        name: 'Fly 0.1 airplane',
        description: '刺激的飞机模拟游戏',
        rules: '驾驶飞机完成各种任务，避开障碍物，安全着陆。使用W、A、S、D控制飞机方向，空格键加速。',
        content: '<div class="game-simulation"><iframe src="https://byronwang527.github.io/Game1/" width="100%" height="100%" frameborder="0" allowfullscreen></iframe></div>'
    },
    '3d-parker': {
        name: '3D parker',
        description: '3D停车挑战游戏',
        rules: '在限定时间内将车辆停入指定位置，避免碰撞。使用方向键控制车辆，空格键刹车。',
        content: '<div class="game-simulation"><img src="images/3d-parker.jpg" alt="3D Parker Game" onerror="this.src=\'images/game-placeholder.svg\'"><p>3D Parker 游戏模拟画面</p></div>'
    },
    '3d-running': {
        name: '3D跑步',
        description: '3D跑步竞速游戏',
        rules: '在3D环境中奔跑，跳跃障碍物，收集加速道具。使用方向键控制角色，空格键跳跃。',
        content: '<div class="game-simulation"><img src="images/3d-running.jpg" alt="3D Running Game" onerror="this.src=\'images/game-placeholder.svg\'"><p>3D跑步 游戏模拟画面</p></div>'
    },
    'game6': {
        name: '一蹦三尺高（落地点吗？预判呗）',
        description: '有趣的方块跑酷',
        rules: '## 玩法说明：\n\n🎮 电脑操作方式：\n\n* ← → 方向键：左右移动\n* ↑ 方向键：跳跃\n* ↓ 方向键：蹲下\n\n📱 手机操作方式：\n\n* 触摸左侧区域：向左移动\n* 触摸中间区域：跳跃\n* 触摸右侧区域：向右移动\n\n🎯 游戏目标：\n\n* 到达每关右上角的绿色终点\n* 避开红色尖刺陷阱\n* 注意！有些平台会移动或消失\n\n💡 小贴士：\n\n* 蹲下可以降低重心，更容易控制\n* 移动平台需要把握好时机\n* 前两关是适应关卡，熟悉一下操作',
        content: '<iframe src="https://lindi761.github.io/Game6/" width="100%" height="500px" frameborder="0" allowfullscreen></iframe>'
    },
    'wanyun-game': {
        name: 'Crazy Box',
        description: '精彩的游戏体验',
        rules: '游戏规则：\n1. 使用手机触屏或电脑方向键控制上下左右移动\n2. 收集金币，每获得50个金币可以进行一次大跳\n3. 合理利用大跳功能来通过关卡',
        content: '<iframe src="https://lindi761.github.io/game7/" style="width: 100%; height: 600px; border: none;"></iframe>'
    },
    'game3': {
        name: '3D湖边跑酷',
        description: '湖边风景优美的3D跑酷游戏',
        rules: '游戏规则：\n1. 在湖边的美丽环境中奔跑\n2. 使用方向键左右移动，空格键跳跃\n3. 收集沿途的星星来增加分数\n4. 避开障碍物，尽可能跑得更远',
        content: '<iframe src="https://lindi761.github.io/game3/" style="width: 100%; height: 600px; border: none;"></iframe>'
    },
    'pacman': {
        name: '简易吃豆人游戏',
        description: '经典的吃豆人迷宫游戏',
        rules: '### 游戏说明:\n\n* 移动吃豆人收集迷宫中的所有豆子\n* 使用键盘方向键或屏幕按钮控制移动\n* 避开彩色幽灵，它们会减少你的生命\n* 吃到闪烁的大能量豆后，可以暂时吃掉幽灵获得额外分数\n* 收集所有豆子即可获胜！\n\n### 游戏技巧:\n\n* 当幽灵靠近时，寻找能量豆\n* 吃能量豆后，幽灵会变蓝并逃跑\n* 蓝色幽灵可以被吃掉获得额外分数\n* 提前规划路线，避免被幽灵困住',
        content: '<iframe src="https://lindi761.github.io/game-pac/" width="100%" height="500px" frameborder="0" allowfullscreen></iframe>',
        price: 15, // 设置价格为15元
        isPremium: true, // 标记为付费游戏
        trialContent: `
            <div class="trial-version">
                <div class="trial-game-preview">
                    <img src="images/game-placeholder.svg" alt="吃豆人游戏预览" onerror="this.src='images/game-placeholder.svg'">
                    <p>这是吃豆人游戏的预览版本。购买完整版体验更多关卡和功能！</p>
                </div>
                <div class="trial-payment-info">
                    <h3>立即购买完整版</h3>
                    <p>仅需 15元，畅玩无限关卡</p>
                    <div class="trial-payment-code">
                        <div style="background-color: #00c800; color: white; padding: 8px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h4 style="margin: 0; padding: 0; font-size: 1em;">微信扫码支付</h4>
                        </div>
                        <div style="background-color: white; padding: 10px; text-align: center;">
                            <img src="images/wechat-pay-code.png" 
                                alt="微信支付" title="扫码支付15元购买完整版" style="width: 150px; height: 150px; display: block; margin: 0 auto;">
                        </div>
                        <p>扫描二维码支付后，点击"开始游戏"按钮</p>
                    </div>
                </div>
            </div>
        `
    },
    'bird-game': {
        name: '小鸟霸占天空',
        description: '勇敢的小鸟飞行冒险',
        rules: '游戏规则：\n1. 点击屏幕或按空格键让小鸟飞翔\n2. 避开障碍物，穿越管道\n3. 尽可能飞得更远，获得更高分数',
        content: '<iframe src="https://szhai1977.github.io/game1/" style="width: 100%; height: 600px; border: none;"></iframe>'
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
const gamePrice = document.getElementById('game-price');
const purchaseBtn = document.getElementById('purchase-btn');

// 支付模态窗口元素
const paymentModal = document.getElementById('payment-modal');
const closeModalBtn = document.querySelector('.close-modal');
const paymentAmount = document.getElementById('payment-amount');
const confirmPaymentBtn = document.getElementById('confirm-payment-btn');

// 用户数据（这里简化处理，实际应用需要后端支持）
const userData = {
    purchasedGames: []  // 已购买的游戏ID
};

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
    purchaseBtn.addEventListener('click', openPaymentModal);

    // 支付模态窗口事件
    closeModalBtn.addEventListener('click', closePaymentModal);
    confirmPaymentBtn.addEventListener('click', confirmPayment);

    // 当用户点击模态窗口外部时关闭模态窗口
    window.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
            closePaymentModal();
        }
    });

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
        
        // 更新价格和购买按钮
        updatePaymentInfo();
        
        // 根据游戏状态显示正确的内容
        updateGameContent();
        
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

// 更新支付信息显示
function updatePaymentInfo() {
    if (!currentGame) return;
    
    if (currentGame.isPremium) {
        // 检查是否已购买
        if (userData.purchasedGames.includes(currentGame.name)) {
            gamePrice.textContent = "已购买";
            purchaseBtn.classList.add('hidden');
        } else {
            gamePrice.textContent = `价格: ¥${currentGame.price}`;
            purchaseBtn.textContent = "购买完整版";
            purchaseBtn.classList.remove('hidden');
        }
    } else {
        gamePrice.textContent = "免费游戏";
        purchaseBtn.classList.add('hidden');
    }
}

// 更新游戏内容显示
function updateGameContent() {
    if (!currentGame) return;
    
    let gameContentHTML = '';
    
    if (currentGame.isPremium && !userData.purchasedGames.includes(currentGame.name)) {
        // 显示试玩版
        gameContentHTML = currentGame.trialContent || currentGame.content;
    } else {
        // 显示完整版
        gameContentHTML = currentGame.content;
    }
    
    // 在所有游戏中添加收款码水印（仅显示文本和一个小按钮）
    gameContentHTML = `
        <div class="game-container">
            ${gameContentHTML}
            <div class="donation-code-watermark">
                <p>打赏作者</p>
                <div class="qr-code-wrapper">
                    <img src="images/wechat-pay-code.png" alt="微信打赏" style="width: 50px; height: 50px;">
                </div>
            </div>
        </div>
    `;
    
    gameContent.innerHTML = gameContentHTML;
    
    // 为水印添加点击事件，点击时显示支付模态窗口
    const watermark = document.querySelector('.donation-code-watermark');
    if (watermark) {
        watermark.style.cursor = 'pointer';
        watermark.addEventListener('click', openPaymentModal);
    }
}

// 处理游戏购买
function purchaseGame() {
    if (!currentGame || !currentGame.isPremium) return;
    
    // 打开支付模态窗口
    openPaymentModal();
}

// 打开支付模态窗口
function openPaymentModal() {
    if (!currentGame) return;
    
    // 更新支付金额
    paymentAmount.textContent = `¥${currentGame.price}`;
    
    // 显示模态窗口
    paymentModal.style.display = 'block';
    
    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
}

// 关闭支付模态窗口
function closePaymentModal() {
    paymentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 确认支付
function confirmPayment() {
    if (!currentGame) return;
    
    // 模拟支付确认流程
    alert("支付验证中...");
    
    // 假设支付成功
    setTimeout(() => {
        alert("支付成功！感谢您的购买。");
        
        // 将游戏添加到已购买列表
        userData.purchasedGames.push(currentGame.name);
        
        // 更新界面
        updatePaymentInfo();
        updateGameContent();
        
        // 关闭模态窗口
        closePaymentModal();
    }, 1000);
}

// 开始游戏
function startGame() {
    if (!currentGame) return;
    
    // 如果游戏是付费的且用户尚未购买，显示支付窗口
    if (currentGame.isPremium && !userData.purchasedGames.includes(currentGame.name)) {
        openPaymentModal();
        return; // 阻止游戏启动
    }
    
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