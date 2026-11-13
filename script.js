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

// قاموس الترجمة (عربي / إنجليزي) مطابق لملف index.html الأخير
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "نطاق الخدمات",
        nav_ac: "أنواع المكيفات",
        nav_features: "مميزاتنا",
        nav_quality: "الجودة والسلامة",
        nav_contact: "تواصل معنا",
        val_1: "التزام",
        val_2: "احترافية",
        val_3: "جودة",
        val_1_desc: "دقة في المواعيد ووفاء بكافة التعاقدات الفنية.",
        val_2_desc: "فريق هندسي وفني متخصص بمعايير عالمية.",
        val_3_desc: "استخدام أفضل المواد والمعدات المعتمدة.",
        hero_title_1: "الحلول المتكاملة لتركيب وصيانة",
        hero_title_2: "أنظمة التكييف والتبريد",
        hero_desc: "نقدم خدمات هندسية وفنية عالية الكفاءة للمنشآت التجارية والسكنية وفق أعلى معايير الجودة والسلامة المهنية في المملكة العربية السعودية.",
        hero_btn_1: "اطلب خدمة أو عرض سعر",
        hero_btn_2: "استكشف خدماتنا",
        about_tag: "تعريف الشركة",
        about_title: "شريكك الموثوق في أنظمة التكييف والتبريد",
        about_p1: "تُعد شركة تريسلاين للخدمات التجارية (TRESLINE COMPANY) من الشركات المتخصصة في تقديم حلول التكييف والتبريد المتكاملة. نركز على تلبية احتياجات عملائنا من خلال تنفيذ أعمال التركيب، الصيانة الوقائية والتصحيحية، والتشغيل بأعلى درجات الدقة والموثوقية.",
        about_p2: "نعتمد في عملنا على كوادر فنية مؤهلة وأحدث المعدات المعتمدة لضمان استمرارية عمل الأنظمة بكفاءة عالية وتقليل الأعطال المفاجئة.",
        about_badge: "حلول تبريد متكاملة",
        srv_tag: "نطاق الأعمال والخدمات",
        srv_title: "خدماتنا المتخصصة في التكييف والتبريد",
        srv_desc: "نغطي كافة مراحل دورة حياة أنظمة التكييف بدءاً من التأسيس والتركيب وحتى الصيانة الدورية والتشغيل.",
        srv_1_title: "أعمال التركيب",
        srv_1_li1: "تركيب مكيفات السبليت (Split Unit)",
        srv_1_li2: "تركيب المكيفات الأرضية (Floor Standing Unit)",
        srv_1_li3: "تركيب مكيفات الكاسيت (Cassette Unit)",
        srv_1_li4: "تركيب مكيفات الشباك (Window Unit)",
        srv_2_title: "أعمال الصيانة",
        srv_2_li1: "الصيانة الوقائية الدورية",
        srv_2_li2: "الصيانة التصحيحية وإصلاح الأعطال",
        srv_2_li3: "فحص واختبار أنظمة التكييف",
        srv_2_li4: "تنظيف الوحدات الداخلية والخارجية",
        srv_2_li5: "شحن وإضافة غازات التبريد",
        srv_2_li6: "استبدال القطع التالفة وفحص دوائر الكهرباء والتحكم",
        srv_3_title: "أعمال التشغيل",
        srv_3_li1: "تشغيل ومتابعة أنظمة التكييف",
        srv_3_li2: "إعداد خطط الصيانة الدورية",
        srv_3_li3: "رفع كفاءة التشغيل وتقليل الأعطال",
        srv_3_li4: "إعداد التقارير الفنية الدورية",
        ac_tag: "تغطية شاملة",
        ac_title: "أنواع المكيفات التي نقوم بخدمتها",
        ac_desc: "خبرة فنية في التعامل مع مختلف الأنظمة والوحدات السكنية والتجارية.",
        ac_1_title: "مكيفات سبليت",
        ac_1_desc: "أعمال التركيب والصيانة والتشغيل وإصلاح الأعطال بكفاءة عالية.",
        ac_2_title: "مكيفات أرضية",
        ac_2_desc: "التركيب والصيانة الدورية والتشغيل للمساحات الواسعة والقاعات.",
        ac_3_title: "مكيفات كاسيت",
        ac_3_desc: "التركيب والصيانة والتنظيف والإصلاح للأسقف المستعارة والمكاتب.",
        ac_4_title: "مكيفات شباك",
        ac_4_desc: "التركيب والصيانة الوقائية والتصحيحية الشاملة.",
        feat_tag: "لماذا تريسلاين؟",
        feat_title: "مميزات الشركة",
        feat_desc: "نجمع بين الخبرة الفنية والالتزام التام لتقديم تجربة استثنائية لعملائنا.",
        feat_1: "فريق فني متخصص وذو خبرة",
        feat_2: "سرعة الاستجابة للطوارئ والأعطال",
        feat_3: "الالتزام بمعايير الجودة والسلامة",
        feat_4: "أسعار تنافسية",
        feat_5: "استخدام أحدث المعدات والأدوات الفنية",
        feat_6: "تقديم تقارير فنية دورية",
        feat_7: "الالتزام بالمواعيد وجودة التنفيذ",
        feat_8: "خدمة ما بعد التنفيذ",
        qual_title: "سياسة الجودة",
        qual_intro: "نسعى دائماً إلى تقديم خدمات عالية الجودة من خلال:",
        qual_li1: "تطبيق أفضل الممارسات الفنية.",
        qual_li2: "استخدام مواد ومعدات معتمدة.",
        qual_li3: "المتابعة المستمرة للأعمال المنفذة.",
        qual_li4: "تحقيق أعلى مستويات رضا العملاء.",
        hse_title: "الصحة والسلامة المهنية",
        hse_desc: "تلتزم الشركة بتطبيق أعلى معايير الصحة والسلامة المهنية أثناء تنفيذ جميع الأعمال، وذلك حفاظاً على سلامة العاملين والعملاء والممتلكات، مع الالتزام بالأنظمة والتعليمات المعتمدة.",
        hse_badge: "بيئة عمل آمنة ومطابقة للمواصفات القياسية",
        cnt_tag: "تواصل معنا",
        cnt_title: "نسعد بتواصلكم واستفساراتكم",
        cnt_desc: "فريقنا جاهز للرد على استفساراتكم وتقديم الاستشارات وعروض الأسعار.",
        cnt_info_title: "بيانات التواصل المباشر",
        cnt_phone: "رقم الجوال",
        cnt_email: "البريد الإلكتروني",
        cnt_address_label: "العنوان",
        cnt_address_full: "المملكة العربية السعودية<br>المنطقة الشرقية، الدمام<br>حي الزهور - محمد بن اميه<br>الرمز البريدي: 32423",
        cnt_wa: "تواصل عبر واتساب مباشرة",
        form_title: "أرسل رسالة أو طلب صيانة",
        form_name: "الاسم الكامل / اسم الجهة *",
        form_name_ph: "أدخل الاسم",
        form_phone: "رقم الجوال *",
        form_srv: "نوع الخدمة المطلوبة",
        opt_1: "أعمال تركيب مكيفات",
        opt_2: "صيانة دورية / إصلاح عطل",
        opt_3: "عقود تشغيل ومتابعة",
        opt_4: "طلب عرض سعر لمشروع",
        form_msg: "تفاصيل الطلب *",
        form_msg_ph: "اكتب تفاصيل استفسارك أو نوع المكيفات...",
        form_submit: "إرسال الطلب",
        ftr_about: "شركة متخصصة في تركيب وصيانة وتشغيل أنظمة التكييف والتبريد في المملكة العربية السعودية. التزام، احترافية، جودة.",
        ftr_links: "روابط سريعة",
        ftr_cnt: "معلومات الاتصال",
        ftr_address: "الدمام، المنطقة الشرقية، المملكة العربية السعودية (32423)",
        ftr_cr_title: "السجل التجاري",
        ftr_cr_val: "رقم السجل التجاري: 7051631112",
        ftr_rights: "جميع الحقوق محفوظة."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Scope of Services",
        nav_ac: "AC Systems",
        nav_features: "Why Us",
        nav_quality: "Quality & Safety",
        nav_contact: "Contact Us",
        val_1: "Commitment",
        val_2: "Professionalism",
        val_3: "Quality",
        val_1_desc: "Strict adherence to schedules and technical agreements.",
        val_2_desc: "Specialized engineering and technical team with global standards.",
        val_3_desc: "Using certified materials and state-of-the-art equipment.",
        hero_title_1: "Integrated Solutions for Installation & Maintenance of",
        hero_title_2: "HVAC & Refrigeration Systems",
        hero_desc: "We deliver high-efficiency engineering and technical services for commercial and residential facilities under the highest quality and occupational safety standards in Saudi Arabia.",
        hero_btn_1: "Request a Service or Quote",
        hero_btn_2: "Explore Our Services",
        about_tag: "Company Profile",
        about_title: "Your Trusted Partner in HVAC & Cooling Systems",
        about_p1: "TRESLINE COMPANY For Commercial Services is a specialized provider of integrated HVAC and refrigeration solutions. We focus on meeting client needs through precise installation, preventive and corrective maintenance, and reliable operation.",
        about_p2: "We rely on qualified technical personnel and certified modern equipment to ensure continuous, efficient system operation and minimize unexpected breakdowns.",
        about_badge: "Integrated Cooling Solutions",
        srv_tag: "Scope of Work & Services",
        srv_title: "Specialized HVAC & Refrigeration Services",
        srv_desc: "We cover the entire lifecycle of air conditioning systems from initial installation to periodic maintenance and operation.",
        srv_1_title: "Installation Works",
        srv_1_li1: "Split Unit AC Installation",
        srv_1_li2: "Floor Standing Unit Installation",
        srv_1_li3: "Cassette Unit Installation",
        srv_1_li4: "Window Unit Installation",
        srv_2_title: "Maintenance Works",
        srv_2_li1: "Periodic Preventive Maintenance",
        srv_2_li2: "Corrective Maintenance & Fault Repair",
        srv_2_li3: "HVAC System Inspection & Testing",
        srv_2_li4: "Indoor & Outdoor Units Cleaning",
        srv_2_li5: "Refrigerant Gas Charging & Refilling",
        srv_2_li6: "Replacing Damaged Parts & Inspecting Electrical/Control Circuits",
        srv_3_title: "Operation Works",
        srv_3_li1: "HVAC System Operation & Monitoring",
        srv_3_li2: "Preparing Periodic Maintenance Plans",
        srv_3_li3: "Enhancing Operational Efficiency & Reducing Faults",
        srv_3_li4: "Preparing Periodic Technical Reports",
        ac_tag: "Comprehensive Coverage",
        ac_title: "Types of AC Units We Service",
        ac_desc: "Technical expertise in handling various residential and commercial air conditioning units.",
        ac_1_title: "Split Units",
        ac_1_desc: "High-efficiency installation, maintenance, operation, and troubleshooting.",
        ac_2_title: "Floor Standing Units",
        ac_2_desc: "Installation, periodic maintenance, and operation for large halls and spaces.",
        ac_3_title: "Cassette Units",
        ac_3_desc: "Installation, maintenance, cleaning, and repair for suspended ceilings and offices.",
        ac_4_title: "Window Units",
        ac_4_desc: "Comprehensive installation, preventive, and corrective maintenance.",
        feat_tag: "Why Tresline?",
        feat_title: "Company Advantages",
        feat_desc: "Combining technical expertise with full commitment to deliver an exceptional client experience.",
        feat_1: "Specialized & Experienced Technical Team",
        feat_2: "Rapid Response to Emergencies & Faults",
        feat_3: "Compliance with Quality & Safety Standards",
        feat_4: "Competitive Pricing",
        feat_5: "Latest Technical Equipment & Tools",
        feat_6: "Periodic Technical Reporting",
        feat_7: "Punctuality & Execution Quality",
        feat_8: "After-Execution Support Service",
        qual_title: "Quality Policy",
        qual_intro: "We continuously strive to deliver high-quality services by:",
        qual_li1: "Applying best technical practices.",
        qual_li2: "Using certified materials and equipment.",
        qual_li3: "Continuous follow-up on executed works.",
        qual_li4: "Achieving the highest levels of customer satisfaction.",
        hse_title: "Occupational Health & Safety",
        hse_desc: "The company is committed to applying the highest standards of occupational health and safety during all operations to protect workers, clients, and property, in full compliance with approved regulations.",
        hse_badge: "Safe Work Environment Compliant with Standards",
        cnt_tag: "Contact Us",
        cnt_title: "We Welcome Your Inquiries",
        cnt_desc: "Our team is ready to answer your inquiries and provide consultations and quotations.",
        cnt_info_title: "Direct Contact Information",
        cnt_phone: "Mobile Number",
        cnt_email: "Email Address",
        cnt_address_label: "Address",
        cnt_address_full: "Kingdom of Saudi Arabia<br>Eastern Province, Dammam<br>Al Zohour Dist. - Mohammed Bin Umayyah<br>Postal Code: 32423",
        cnt_wa: "Chat Directly via WhatsApp",
        form_title: "Send a Message or Service Request",
        form_name: "Full Name / Company Name *",
        form_name_ph: "Enter your name",
        form_phone: "Mobile Number *",
        form_srv: "Required Service Type",
        opt_1: "AC Installation Works",
        opt_2: "Periodic Maintenance / Fault Repair",
        opt_3: "Operation & Monitoring Contracts",
        opt_4: "Request Project Quotation",
        form_msg: "Request Details *",
        form_msg_ph: "Write your inquiry details or AC unit types...",
        form_submit: "Submit Request",
        ftr_about: "Specialized in installation, maintenance, and operation of HVAC and refrigeration systems in Saudi Arabia. Commitment, Professionalism, Quality.",
        ftr_links: "Quick Links",
        ftr_cnt: "Contact Info",
        ftr_address: "Dammam, Eastern Province, Kingdom of Saudi Arabia (32423)",
        ftr_cr_title: "Commercial Registration",
        ftr_cr_val: "CR Number: 7051631112",
        ftr_rights: "All Rights Reserved."
    }
};

// دالة تطبيق اللغة وتحديث الاتجاه
let currentLang = localStorage.getItem('tresline_lang') || 'ar';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('tresline_lang', lang);

    // ضبط اتجاه الصفحة ولغتها
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تحديث نص الزر
    document.getElementById('langText').textContent = lang === 'ar' ? 'EN' : 'عربي';

    // تحديث جميع النصوص مع دعم فواصل الأسطر (<br>) في العنوان
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // تحديث النصوص التوضيحية داخل الحقول (Placeholders)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // عكس اتجاه الأسهم في قائمة سياسة الجودة
    document.querySelectorAll('.dir-arrow').forEach(icon => {
        icon.className = lang === 'ar' ? 'fas fa-angle-left dir-arrow' : 'fas fa-angle-right dir-arrow';
    });
}

// تفعيل زر التبديل عند النقر
document.getElementById('langToggle').addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLang);
});

// تطبيق اللغة المحفوظة عند فتح الصفحة
applyLanguage(currentLang);

// معالجة نموذج التواصل وإرسال الرسالة عبر واتساب
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const serviceSelect = document.getElementById('serviceType');
    const serviceType = serviceSelect.options[serviceSelect.selectedIndex].text;
    const message = document.getElementById('message').value.trim();

    const whatsappMessage = currentLang === 'ar'
        ? `مرحباً شركة تريسلاين،%0A*الاسم:* ${name}%0A*الجوال:* ${phone}%0A*نوع الخدمة:* ${serviceType}%0A*التفاصيل:* ${message}`
        : `Hello Tresline Company,%0A*Name:* ${name}%0A*Mobile:* ${phone}%0A*Service:* ${serviceType}%0A*Details:* ${message}`;

    formStatus.style.color = '#1E2656';
    formStatus.innerHTML = currentLang === 'ar'
        ? 'تم تجهيز طلبك بنجاح! جاري تحويلك إلى واتساب لإرسال الطلب مباشرة...'
        : 'Your request is ready! Redirecting you to WhatsApp to send directly...';

    setTimeout(() => {
        window.open(`https://wa.me/966568327534?text=${whatsappMessage}`, '_blank');
        contactForm.reset();
    }, 1000);
});