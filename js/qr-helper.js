// 收款码助手脚本
document.addEventListener('DOMContentLoaded', function() {
    // 收款码图片URL
    const qrCodeUrl = 'images/wechat-pay-code.png';
    
    // 尝试预加载收款码图片
    const preloadImg = new Image();
    preloadImg.src = qrCodeUrl;
    
    // 检查模态窗口中的收款码
    const modalQrCode = document.querySelector('.modal-content img');
    if (modalQrCode) {
        modalQrCode.onerror = function() {
            console.error('模态窗口收款码加载失败，尝试使用备用方法');
            // 创建替代内容
            const fallbackContent = document.createElement('div');
            fallbackContent.innerHTML = `
                <div style="width: 200px; height: 200px; border: 1px solid #eee; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 10px; background-color: #f9f9f9;">
                    <p style="margin: 0 0 10px 0; font-weight: bold; color: #e74c3c;">收款码加载失败</p>
                    <p style="margin: 0; font-size: 0.9em;">请尝试刷新页面，或联系网站管理员</p>
                </div>
            `;
            modalQrCode.parentNode.replaceChild(fallbackContent, modalQrCode);
        };
    }
    
    // 监听游戏内水印的创建
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const watermarks = document.querySelectorAll('.donation-code-watermark img');
                watermarks.forEach(function(img) {
                    // 确保水印图片已设置正确的URL
                    if (img.src !== qrCodeUrl) {
                        img.src = qrCodeUrl;
                    }
                    
                    // 处理加载错误
                    img.onerror = function() {
                        console.error('水印收款码加载失败，尝试使用备用方法');
                        const fallbackText = document.createElement('div');
                        fallbackText.innerHTML = '扫码打赏';
                        fallbackText.style.padding = '5px';
                        fallbackText.style.backgroundColor = '#f9f9f9';
                        fallbackText.style.border = '1px solid #eee';
                        fallbackText.style.borderRadius = '4px';
                        fallbackText.style.fontSize = '10px';
                        fallbackText.style.textAlign = 'center';
                        img.parentNode.replaceChild(fallbackText, img);
                    };
                });
            }
        });
    });
    
    // 开始观察DOM变化
    observer.observe(document.body, { childList: true, subtree: true });
    
    console.log('收款码助手已加载');
}); 