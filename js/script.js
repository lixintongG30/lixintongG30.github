// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const internalNavLinks = document.querySelectorAll('.internal-nav a');
    const sections = document.querySelectorAll('#intro-overview, #intro-history, #intro-value, #process, #relics, #craftsmen');
    
    // 选项卡切换功能
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 获取目标选项卡ID
            const targetTab = this.getAttribute('data-tab');
            
            // 移除所有选项卡按钮的active类
            tabBtns.forEach(btn => btn.classList.remove('active'));
            
            // 移除所有选项卡内容的active类
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // 为当前点击的按钮和对应内容添加active类
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // 内部导览平滑滚动
    internalNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 滚动监听，高亮当前导航项
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        internalNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
    
    // 图片查看模态框功能
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('image-caption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const relicImages = document.querySelectorAll('.relic-image');
    
    // 为所有文物图片添加点击事件
    relicImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            
            // 获取图片所在的文物卡片标题
            const relicCard = this.closest('.relic');
            const relicTitle = relicCard.querySelector('h4').textContent;
            caption.textContent = relicTitle;
        });
    });
    
    // 关闭按钮点击事件
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});