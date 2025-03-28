# 游戏收款码功能使用指南

## 功能说明

此游戏平台已集成了个人收款码支付功能，当玩家尝试启动付费游戏时，系统会显示您的微信收款码，让玩家通过扫码完成支付。

## 设置您的收款码

1. 将您的微信收款码图片重命名为 `wechat-pay-code.png`
2. 将此图片放置在网站的 `images/` 目录下
3. 替换掉原有的占位图片

## 游戏付费设置

在 `js/main.js` 文件中，每个游戏都有以下付费相关设置：

```javascript
'游戏ID': {
    // ...其他游戏信息...
    price: 15, // 设置游戏价格（人民币元）
    isPremium: true, // true表示付费游戏，false表示免费游戏
    trialContent: '<div class="trial-version">...</div>' // 付费前展示的预览内容
}
```

您可以通过修改这些属性来：
- 设置或调整游戏价格
- 将游戏设置为免费或付费
- 自定义付费前的预览内容

## 工作流程

1. 用户点击游戏列表中的游戏
2. 用户点击"Start"按钮启动游戏
3. 如果游戏是付费的且用户尚未购买，系统显示支付二维码
4. 用户使用微信扫描二维码完成支付
5. 用户点击"我已完成支付"按钮
6. 系统记录用户已购买该游戏
7. 用户获得游戏完整访问权限

## 注意事项

- 目前此支付系统是前端模拟，没有实际的后端验证
- 用户的购买记录仅存储在当前浏览会话中，刷新页面后会重置
- 在实际使用中，建议连接到后端服务进行真实的支付验证
- 收款码图片应保持在300KB以下，以确保快速加载 