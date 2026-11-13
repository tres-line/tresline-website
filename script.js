// تحديث السنة تلقائياً في الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// تفعيل قائمة الجوال (Hamburger Menu)
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// إغلاق القائمة عند النقر على أي رابط في الجوال
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// معالجة نموذج التواصل وإرسال الرسالة عبر واتساب أو البريد
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const serviceType = document.getElementById('serviceType').value;
    const message = document.getElementById('message').value.trim();

    // تجهيز نص الرسالة للواتساب كخيار تفاعلي سريع
    const whatsappMessage = `مرحباً شركة تريسلاين،%0A` +
        `*الاسم:* ${name}%0A` +
        `*الجوال:* ${phone}%0A` +
        `*نوع الخدمة:* ${serviceType}%0A` +
        `*التفاصيل:* ${message}`;

    formStatus.style.color = '#1E2656';
    formStatus.innerHTML = 'تم تجهيز طلبك بنجاح! جاري تحويلك إلى واتساب لإرسال الطلب مباشرة...';

    setTimeout(() => {
        window.open(`https://wa.me/966568327534?text=${whatsappMessage}`, '_blank');
        contactForm.reset();
    }, 1000);
});