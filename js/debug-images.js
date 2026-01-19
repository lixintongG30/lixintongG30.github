// 图片加载调试脚本
console.log('图片加载调试脚本已加载');

// 监听所有图片的加载事件
document.addEventListener('DOMContentLoaded', function() {
    const relicImages = document.querySelectorAll('.relic-image');
    
    console.log('找到 ' + relicImages.length + ' 个文物图片');
    
    relicImages.forEach((img, index) => {
        console.log('图片 ' + index + ' URL:', img.src);
        
        // 图片加载成功事件
        img.addEventListener('load', function() {
            console.log('图片加载成功:', this.src);
        });
        
        // 图片加载失败事件
        img.addEventListener('error', function() {
            console.error('图片加载失败:', this.src);
            // 尝试替换为备用图片
            this.src = 'https://via.placeholder.com/600x400?text=掐丝珐琅文物';
        });
        
        // 确保图片可见
        img.style.display = 'block';
        img.style.visibility = 'visible';
        img.style.opacity = '1';
    });
});