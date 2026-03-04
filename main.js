const LANGUAGE_STORAGE_KEY = "sohum_language";
const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "mr", "hi"];

const I18N_BY_KEY = {
  en: {
    phone: "+91 98765 43210",
    email: "info@sohamfp.in",
    location: "Pune, India",
    nav_home: "HOME",
    nav_insurance: "INSURANCE TRAINING",
    life_insurance: "Life Insurance Advisor Training",
    general_insurance: "General Insurance Training",
    health_motor: "Health & Motor Insurance Module",
    irdai_exam: "IRDAI Exam Preparation",
    career_guidance: "Insurance Career Guidance",
    commission_income: "Commission & Income Structure",
    business_setup: "How to Start Insurance Business",
    nav_share: "SHARE MARKET",
    fundamental: "Fundamental Analysis",
    technical: "Technical Analysis",
    derivatives: "Derivatives (F&O)",
    ipo: "IPO Corner",
    glossary: "Market Glossary",
    nav_about: "ABOUT",
    nav_gallery: "GALLERY",
    nav_contact: "CONTACT",
    book_demo: "Book Demo",
    demo_popup_title: "Reserve Your Spot",
    demo_name_placeholder: "Full Name",
    demo_mobile_placeholder: "Mobile Number",
    demo_email_placeholder: "Email Address",
    demo_course_select: "Select Course",
    demo_course_insurance: "Insurance Training",
    demo_course_share: "Share Market",
    demo_course_other: "Other",
    demo_submit: "Submit",
    demo_submitting: "Submitting...",
    demo_success_title: "Thank You",
    demo_success_message: "Your demo session request has been submitted successfully.",
    demo_close: "Close",
    footer_tagline_1: "Financial Planner Institute.",
    footer_tagline_2: "Protection. Growth. Excellence.",
    footer_insurance_heading: "INSURANCE",
    footer_life_insurance: "Life Insurance",
    footer_health_insurance: "Health Insurance",
    footer_motor_general: "Motor & General",
    footer_calculator: "Calculator",
    footer_market_heading: "SHARE MARKET",
    footer_fundamental: "Fundamental",
    footer_technical: "Technical",
    footer_derivatives: "Derivatives",
    footer_ipo: "IPO Corner",
    footer_common_heading: "COMMON PAGES",
    footer_about_us: "About Us",
    footer_courses: "Courses",
    footer_resources: "Resources",
    footer_contact: "Contact",
    float_call_title: "Call Now",
    float_whatsapp_title: "WhatsApp",
    index_page_title: "Soham Financial Planner Institute | Insurance & Share Market",
    about_page_title: "Soham Financial Planner Institute | Insurance & Share Market",
    share1_page_title: "Soham Financial Planner Institute | Insurance & Share Market",
    footer_copyright:
      "© 2025 Soham Financial Planner Institute. All rights reserved. Siloed structure for topical authority.",
  },
  mr: {
    phone: "+91 98765 43210",
    email: "info@sohamfp.in",
    location: "पुणे, भारत",
    nav_home: "मुख्यपृष्ठ",
    nav_insurance: "इन्शुरन्स ट्रेनिंग",
    life_insurance: "लाईफ इन्शुरन्स अॅडव्हायझर प्रशिक्षण",
    general_insurance: "जनरल इन्शुरन्स प्रशिक्षण",
    health_motor: "हेल्थ आणि मोटर इन्शुरन्स मॉड्यूल",
    irdai_exam: "IRDAI परीक्षा तयारी",
    career_guidance: "इन्शुरन्स करिअर मार्गदर्शन",
    commission_income: "कमिशन आणि उत्पन्न रचना",
    business_setup: "इन्शुरन्स व्यवसाय कसा सुरू करावा",
    nav_share: "शेअर मार्केट",
    fundamental: "फंडामेंटल अॅनालिसिस",
    technical: "टेक्निकल अॅनालिसिस",
    derivatives: "डेरिव्हेटिव्ह (F&O)",
    ipo: "IPO कॉर्नर",
    glossary: "मार्केट शब्दकोश",
    nav_about: "आमच्याबद्दल",
    nav_gallery: "गॅलरी",
    nav_contact: "संपर्क",
    book_demo: "डेमो बुक करा",
    demo_popup_title: "तुमची जागा राखीव करा",
    demo_name_placeholder: "पूर्ण नाव",
    demo_mobile_placeholder: "मोबाईल नंबर",
    demo_email_placeholder: "ईमेल पत्ता",
    demo_course_select: "कोर्स निवडा",
    demo_course_insurance: "इन्शुरन्स ट्रेनिंग",
    demo_course_share: "शेअर मार्केट",
    demo_course_other: "इतर",
    demo_submit: "सबमिट करा",
    demo_submitting: "सबमिट होत आहे...",
    demo_success_title: "धन्यवाद",
    demo_success_message: "तुमची डेमो सेशन विनंती यशस्वीरित्या सबमिट झाली आहे.",
    demo_close: "बंद करा",
    footer_tagline_1: "फायनान्शिअल प्लॅनर इन्स्टिट्यूट.",
    footer_tagline_2: "संरक्षण. वाढ. उत्कृष्टता.",
    footer_insurance_heading: "इन्शुरन्स",
    footer_life_insurance: "लाईफ इन्शुरन्स",
    footer_health_insurance: "हेल्थ इन्शुरन्स",
    footer_motor_general: "मोटर आणि जनरल",
    footer_calculator: "कॅल्क्युलेटर",
    footer_market_heading: "शेअर मार्केट",
    footer_fundamental: "फंडामेंटल",
    footer_technical: "टेक्निकल",
    footer_derivatives: "डेरिव्हेटिव्ह",
    footer_ipo: "IPO कॉर्नर",
    footer_common_heading: "सामान्य पाने",
    footer_about_us: "आमच्याबद्दल",
    footer_courses: "कोर्सेस",
    footer_resources: "संसाधने",
    footer_contact: "संपर्क",
    float_call_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    float_whatsapp_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    index_page_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    about_page_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    share1_page_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    footer_copyright:
      "© 2025 सोहम फायनान्शिअल प्लॅनर इन्स्टिट्यूट. सर्व हक्क राखीव. विषयानुसार संरचना.",
  },
  hi: {
    phone: "+91 98765 43210",
    email: "info@sohamfp.in",
    location: "पुणे, भारत",
    nav_home: "होम",
    nav_insurance: "इंश्योरेंस ट्रेनिंग",
    life_insurance: "लाइफ इंश्योरेंस एडवाइजर ट्रेनिंग",
    general_insurance: "जनरल इंश्योरेंस ट्रेनिंग",
    health_motor: "हेल्थ और मोटर इंश्योरेंस मॉड्यूल",
    irdai_exam: "IRDAI परीक्षा तैयारी",
    career_guidance: "इंश्योरेंस करियर मार्गदर्शन",
    commission_income: "कमीशन और आय संरचना",
    business_setup: "इंश्योरेंस बिजनेस कैसे शुरू करें",
    nav_share: "शेयर मार्केट",
    fundamental: "फंडामेंटल एनालिसिस",
    technical: "टेक्निकल एनालिसिस",
    derivatives: "डेरिवेटिव्स (F&O)",
    ipo: "IPO कॉर्नर",
    glossary: "मार्केट शब्दावली",
    nav_about: "हमारे बारे में",
    nav_gallery: "गैलरी",
    nav_contact: "संपर्क",
    book_demo: "डेमो बुक करें",
    demo_popup_title: "अपनी सीट रिजर्व करें",
    demo_name_placeholder: "पूरा नाम",
    demo_mobile_placeholder: "मोबाइल नंबर",
    demo_email_placeholder: "ईमेल पता",
    demo_course_select: "कोर्स चुनें",
    demo_course_insurance: "इंश्योरेंस ट्रेनिंग",
    demo_course_share: "शेयर मार्केट",
    demo_course_other: "अन्य",
    demo_submit: "सबमिट करें",
    demo_submitting: "सबमिट हो रहा है...",
    demo_success_title: "धन्यवाद",
    demo_success_message: "आपका डेमो सेशन अनुरोध सफलतापूर्वक सबमिट हो गया है।",
    demo_close: "बंद करें",
    footer_tagline_1: "फाइनेंशियल प्लानर इंस्टीट्यूट.",
    footer_tagline_2: "सुरक्षा. विकास. उत्कृष्टता.",
    footer_insurance_heading: "इंश्योरेंस",
    footer_life_insurance: "लाइफ इंश्योरेंस",
    footer_health_insurance: "हेल्थ इंश्योरेंस",
    footer_motor_general: "मोटर और जनरल",
    footer_calculator: "कैलकुलेटर",
    footer_market_heading: "शेयर मार्केट",
    footer_fundamental: "फंडामेंटल",
    footer_technical: "टेक्निकल",
    footer_derivatives: "डेरिवेटिव्स",
    footer_ipo: "IPO कॉर्नर",
    footer_common_heading: "कॉमन पेज",
    footer_about_us: "हमारे बारे में",
    footer_courses: "कोर्स",
    footer_resources: "रिसोर्सेज",
    footer_contact: "संपर्क",
    float_call_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    float_whatsapp_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    index_page_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    about_page_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    share1_page_title: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    footer_copyright:
      "© 2025 सोहम फाइनेंशियल प्लानर इंस्टीट्यूट. सर्वाधिकार सुरक्षित. विषय-आधारित संरचना.",
  },
};

const I18N_BY_TEXT = {
  mr: {
    "Master Insurance & Share Market with Soham":
      "सोहमसोबत इन्शुरन्स आणि शेअर मार्केटमध्ये प्रभुत्व मिळवा",
    Insurance: "इन्शुरन्स",
    "Share Market": "शेअर मार्केट",
    "Two distinct knowledge pillars": "दोन वेगवेगळे ज्ञान स्तंभ",
    Certification: "प्रमाणपत्र",
    "View courses": "कोर्सेस पहा",
    "Trusted financial institute since 2012":
      "2012 पासून विश्वासार्ह आर्थिक प्रशिक्षण संस्था",
    "Insurance Training Program": "इन्शुरन्स ट्रेनिंग प्रोग्राम",
    "Share Market Training Program": "शेअर मार्केट ट्रेनिंग प्रोग्राम",
    "Enroll Now": "आता प्रवेश घ्या",
    "Career Opportunities After Course": "कोर्सनंतर करिअर संधी",
    "Insurance Advisor": "इन्शुरन्स सल्लागार",
    "Financial Planner": "आर्थिक नियोजक",
    "Stock Trader": "स्टॉक ट्रेडर",
    "Technical Analyst": "तांत्रिक विश्लेषक",
    "Who Should Join?": "कोण सहभागी व्हावे?",
    Students: "विद्यार्थी",
    "Working Professionals": "कामकाजी व्यावसायिक",
    Housewives: "गृहिणी",
    "Business Owners": "व्यवसाय मालक",
    "Insurance Agents": "इन्शुरन्स एजंट",
    "Beginners & Traders": "नवशिके आणि ट्रेडर्स",
    "Our Training Methodology": "आमची प्रशिक्षण पद्धती",
    "Placement & Career Support": "प्लेसमेंट आणि करिअर सपोर्ट",
    "Career Guidance": "करिअर मार्गदर्शन",
    "Interview Preparation": "इंटरव्ह्यू तयारी",
    "Business Setup Support": "व्यवसाय सुरू करण्यासाठी मदत",
    "Live Market Practical Sessions": "लाईव्ह मार्केट प्रॅक्टिकल सेशन्स",
    "Join Live Session": "लाईव्ह सेशन जॉईन करा",
    "Industry Demand & Career Growth": "उद्योगातील मागणी आणि करिअर वाढ",
    "Income Freedom Vision": "आर्थिक स्वातंत्र्य दृष्टी",
    "Industry Expert Guest Sessions": "उद्योगतज्ज्ञ अतिथी सत्रे",
    "Guest Lectures": "अतिथी व्याख्याने",
    "Industry Exposure": "उद्योगाचा अनुभव",
    "Real-World Networking": "प्रत्यक्ष नेटवर्किंग",
  },
  hi: {
    "Master Insurance & Share Market with Soham":
      "सोहम के साथ इंश्योरेंस और शेयर मार्केट में महारत हासिल करें",
    Insurance: "इंश्योरेंस",
    "Share Market": "शेयर मार्केट",
    "Two distinct knowledge pillars": "दो अलग ज्ञान स्तंभ",
    Certification: "सर्टिफिकेशन",
    "View courses": "कोर्स देखें",
    "Trusted financial institute since 2012":
      "2012 से विश्वसनीय वित्तीय प्रशिक्षण संस्थान",
    "Insurance Training Program": "इंश्योरेंस ट्रेनिंग प्रोग्राम",
    "Share Market Training Program": "शेयर मार्केट ट्रेनिंग प्रोग्राम",
    "Enroll Now": "अभी जुड़ें",
    "Career Opportunities After Course": "कोर्स के बाद करियर अवसर",
    "Insurance Advisor": "इंश्योरेंस सलाहकार",
    "Financial Planner": "फाइनेंशियल प्लानर",
    "Stock Trader": "स्टॉक ट्रेडर",
    "Technical Analyst": "टेक्निकल एनालिस्ट",
    "Who Should Join?": "कौन जुड़ सकता है?",
    Students: "छात्र",
    "Working Professionals": "वर्किंग प्रोफेशनल्स",
    Housewives: "गृहिणियां",
    "Business Owners": "व्यवसाय मालिक",
    "Insurance Agents": "इंश्योरेंस एजेंट",
    "Beginners & Traders": "बिगिनर्स और ट्रेडर्स",
    "Our Training Methodology": "हमारी ट्रेनिंग पद्धति",
    "Placement & Career Support": "प्लेसमेंट और करियर सपोर्ट",
    "Career Guidance": "करियर मार्गदर्शन",
    "Interview Preparation": "इंटरव्यू तैयारी",
    "Business Setup Support": "बिजनेस सेटअप सपोर्ट",
    "Live Market Practical Sessions": "लाइव मार्केट प्रैक्टिकल सेशन",
    "Join Live Session": "लाइव सेशन जॉइन करें",
    "Industry Demand & Career Growth": "उद्योग मांग और करियर विकास",
    "Income Freedom Vision": "आय स्वतंत्रता दृष्टि",
    "Industry Expert Guest Sessions": "इंडस्ट्री एक्सपर्ट गेस्ट सेशन",
    "Guest Lectures": "गेस्ट लेक्चर",
    "Industry Exposure": "इंडस्ट्री एक्सपोजर",
    "Real-World Networking": "रियल-वर्ल्ड नेटवर्किंग",
  },
};

const EXTRA_TEXT_TRANSLATIONS = {
  mr: {
    "Our Gallery": "आमची गॅलरी",
    "About Sohum Financial Planner Institute":
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट बद्दल",
    "WORDS FROM DIRECTOR": "संचालकांचे विचार",
    Director: "संचालक",
    "Our Leadership Team": "आमची नेतृत्व टीम",
    "Founder & Chief Mentor": "संस्थापक आणि मुख्य मार्गदर्शक",
    "Technical Analysis Expert": "टेक्निकल अॅनालिसिस तज्ज्ञ",
    "Insurance Training Specialist": "इन्शुरन्स ट्रेनिंग तज्ज्ञ",
    "Our Mission & Vision": "आमचे मिशन आणि व्हिजन",
    "Our Mission": "आमचे मिशन",
    "Our Vision": "आमचे व्हिजन",
    "Practical Learning Approach": "प्रॅक्टिकल लर्निंग दृष्टिकोन",
    "Trusted Financial Education": "विश्वासार्ह आर्थिक शिक्षण",
    "Why Choose Sohum Financial Planner Institute":
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट का निवडावे",
    "Practical Market Exposure": "प्रॅक्टिकल मार्केट एक्स्पोजर",
    "Live Training": "लाईव्ह ट्रेनिंग",
    "Industry Experts": "उद्योग तज्ज्ञ",
    "Career-Focused Programs": "करिअर-केंद्रित प्रोग्राम्स",
    "Result Oriented": "रिझल्ट ओरिएंटेड",
    "Our Core Values": "आमची मुख्य मूल्ये",
    "Practical Learning": "प्रॅक्टिकल लर्निंग",
    "Risk Discipline": "रिस्क डिसिप्लिन",
    "Continuous Growth": "सतत प्रगती",
    "Real Experience": "प्रत्यक्ष अनुभव",
    "Capital Protection": "भांडवल संरक्षण",
    "Skill Development": "कौशल्य विकास",
    "Certifications & Achievements": "प्रमाणपत्रे आणि यश",
    "Registered Training Institute": "नोंदणीकृत प्रशिक्षण संस्था",
    "Training Excellence Recognition": "प्रशिक्षण उत्कृष्टता मान्यता",
    "Certified Course Programs": "प्रमाणित कोर्स प्रोग्राम्स",
    "Industry Recognition": "उद्योग मान्यता",
    "How We Train": "आम्ही प्रशिक्षण कसे देतो",
    "Learn the Fundamentals": "मूलतत्त्वे शिका",
    "Practical Market Training": "प्रॅक्टिकल मार्केट ट्रेनिंग",
    "Our Growth & Impact": "आमची वाढ आणि प्रभाव",
    "Students Successfully Trained": "यशस्वी प्रशिक्षित विद्यार्थी",
    "Experience in Financial Training": "आर्थिक प्रशिक्षणाचा अनुभव",
    "Student Satisfaction Rate": "विद्यार्थी समाधान दर",
    "Built for Future Financial Leaders":
      "भविष्यातील आर्थिक नेत्यांसाठी तयार",
    "PROGRAM DETAILS": "प्रोग्राम तपशील",
    "Professional Financial Education Focused on Discipline, Structure & Market Clarity":
      "शिस्त, रचना आणि मार्केट स्पष्टतेवर आधारित व्यावसायिक आर्थिक शिक्षण",
    "Program Overview": "प्रोग्राम ओव्हरव्ह्यू",
    "The Challenge": "आव्हान",
    "Who Should Attend": "कोण सहभागी व्हावे",
    "Curriculum Structure": "करिक्युलम रचना",
    "Learning Outcomes": "शिकण्याचे परिणाम",
    "Trainer Profile": "ट्रेनर प्रोफाइल",
    "Frequently Asked Questions": "वारंवार विचारले जाणारे प्रश्न",
    "MASTER THE": "मास्टर करा",
    TRADING: "ट्रेडिंग",
    "Free Demo Session": "फ्री डेमो सेशन",
    "Reserve Your Spot": "तुमची जागा राखीव करा",
    "Full Name": "पूर्ण नाव",
    "Mobile Number": "मोबाईल नंबर",
    "Email Address": "ईमेल पत्ता",
    Submit: "सबमिट करा",
    "Thank You": "धन्यवाद",
    Close: "बंद करा",
    "The principles that guide our training, mentorship, and financial education approach.":
      "आमच्या प्रशिक्षण, मार्गदर्शन आणि आर्थिक शिक्षण दृष्टिकोनाला दिशा देणारी तत्त्वे.",
    "We emphasize real-time market exposure, live trading practice, and structured financial training to ensure students gain actionable knowledge beyond theory.":
      "विद्यार्थ्यांना केवळ सिद्धांतापलीकडील उपयोगी ज्ञान मिळावे यासाठी आम्ही रिअल-टाइम मार्केट एक्स्पोजर, लाईव्ह ट्रेडिंग प्रॅक्टिस आणि संरचित आर्थिक प्रशिक्षणावर भर देतो.",
    "Financial success begins with disciplined risk management. We train our students to protect capital, manage emotions, and make informed decisions in dynamic markets.":
      "आर्थिक यशाची सुरुवात शिस्तबद्ध रिस्क मॅनेजमेंटपासून होते. आम्ही विद्यार्थ्यांना भांडवल सुरक्षित ठेवणे, भावना नियंत्रित करणे आणि बदलत्या मार्केटमध्ये योग्य निर्णय घेणे शिकवतो.",
    "We believe in constant improvement through advanced technical analysis, updated market strategies, and ongoing mentorship to build long-term professional success.":
      "दीर्घकालीन व्यावसायिक यशासाठी प्रगत टेक्निकल विश्लेषण, अद्ययावत मार्केट धोरणे आणि सतत मार्गदर्शनाद्वारे सातत्यपूर्ण प्रगतीवर आम्ही विश्वास ठेवतो.",
    "Recognized for excellence in financial education, insurance advisory training, and professional stock market mentoring.":
      "आर्थिक शिक्षण, इन्शुरन्स सल्लागार प्रशिक्षण आणि व्यावसायिक स्टॉक मार्केट मेंटरिंगमधील उत्कृष्टतेसाठी मान्यता प्राप्त.",
    "Officially registered entity committed to professional financial and insurance training services.":
      "व्यावसायिक आर्थिक व इन्शुरन्स प्रशिक्षण सेवांसाठी वचनबद्ध अधिकृत नोंदणीकृत संस्था.",
    "Recognized for delivering practical, career-focused share market and insurance advisory programs.":
      "प्रॅक्टिकल, करिअर-केंद्रित शेअर मार्केट आणि इन्शुरन्स सल्लागार प्रोग्राम्ससाठी गौरवलेले.",
    "Structured certification programs designed to build industry-ready financial professionals.":
      "उद्योगासाठी सज्ज आर्थिक व्यावसायिक घडवण्यासाठी तयार केलेले संरचित प्रमाणपत्र प्रोग्राम्स.",
    "Trusted by aspiring traders, agents, and financial planners across Pune & PCMC.":
      "पुणे आणि पीसीएमसीमधील इच्छुक ट्रेडर्स, एजंट्स आणि फायनान्शियल प्लॅनर्सचा विश्वास.",
    "A structured and practical learning approach designed to build confident financial professionals.":
      "आत्मविश्वासपूर्ण आर्थिक व्यावसायिक घडवण्यासाठी तयार केलेला संरचित व प्रॅक्टिकल शिक्षण दृष्टिकोन.",
    "Strong foundation in insurance advisory, stock market basics, and financial concepts to build clarity and confidence.":
      "स्पष्टता आणि आत्मविश्वासासाठी इन्शुरन्स सल्ला, स्टॉक मार्केटची मूलतत्त्वे आणि आर्थिक संकल्पनांचा मजबूत पाया.",
    "Real-time chart analysis, live trading sessions, and structured risk management guidance.":
      "रिअल-टाइम चार्ट विश्लेषण, लाईव्ह ट्रेडिंग सत्रे आणि संरचित रिस्क मॅनेजमेंट मार्गदर्शन.",
    "Focused training on disciplined execution, capital protection, and performance tracking for long-term success.":
      "दीर्घकालीन यशासाठी शिस्तबद्ध अंमलबजावणी, भांडवल संरक्षण आणि कार्यक्षमतेच्या ट्रॅकिंगवर केंद्रित प्रशिक्षण.",
    "Transforming careers through structured financial education and practical market training.":
      "संरचित आर्थिक शिक्षण आणि प्रॅक्टिकल मार्केट प्रशिक्षणाद्वारे करिअरमध्ये परिवर्तन.",
    "Sohum Financial Planner Institute equips students and professionals with structured, practical, and industry-driven training in insurance advisory and share market trading. Our learning model focuses on real-time exposure, disciplined execution, and long-term career growth.":
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट विद्यार्थ्यांना व व्यावसायिकांना इन्शुरन्स सल्ला आणि शेअर मार्केट ट्रेडिंगमध्ये संरचित, प्रॅक्टिकल आणि उद्योगाभिमुख प्रशिक्षण देते. आमचा शिकण्याचा मॉडेल रिअल-टाइम एक्स्पोजर, शिस्तबद्ध अंमलबजावणी आणि दीर्घकालीन करिअर वाढीवर केंद्रित आहे.",
    "Our Mission & Vision": "आमचे मिशन आणि व्हिजन",
    "Empowering Financial Careers with Knowledge, Discipline & Strategy":
      "ज्ञान, शिस्त आणि धोरणासह आर्थिक करिअर सक्षम करणे",
    "Verified": "पडताळलेले",
    "Awarded": "पुरस्कृत",
    "Certified": "प्रमाणित",
    "Trusted": "विश्वासार्ह",
    "Foundation": "पाया",
    "Live Practice": "लाईव्ह प्रॅक्टिस",
    "Execution": "अंमलबजावणी",
    "100% Practical Focus": "100% प्रॅक्टिकल फोकस",
    "Live Market Exposure": "लाईव्ह मार्केट एक्स्पोजर",
    "Pan-Pune & PCMC": "संपूर्ण पुणे आणि पीसीएमसी",
    "Trusted Training Institute": "विश्वासार्ह प्रशिक्षण संस्था",
    "Result-Oriented": "परिणामकेंद्रित",
    "Skill & Risk Management": "कौशल्य आणि रिस्क मॅनेजमेंट",
    "Master": "मास्टर करा",
    "with Soham": "सोहमसोबत",
    "India's premier institute for financial planning. Two specialised verticals — one standard of excellence.":
      "आर्थिक नियोजनासाठी भारतातील अग्रगण्य संस्था. दोन विशेष विभाग — उत्कृष्टतेचा एकच मानदंड.",
    "Your browser does not support the video tag.":
      "तुमचा ब्राउझर व्हिडिओ टॅगला समर्थन देत नाही.",
    "Two distinct knowledge pillars": "दोन वेगळे ज्ञान स्तंभ",
    "Explore our — insurance topics stay in insurance, market topics stay in market. Pure topical authority.":
      "आमचे कार्यक्रम पाहा — इन्शुरन्स विषय इन्शुरन्समध्येच आणि मार्केट विषय मार्केटमध्येच. स्पष्ट विषयाधारित अधिकार.",
    "Life & Health coverage": "लाईफ आणि हेल्थ कव्हरेज",
    "IRDA updates": "IRDA अपडेट्स",
    "Premium calculators": "प्रिमियम कॅल्क्युलेटर्स",
    "Risk management": "रिस्क मॅनेजमेंट",
    "Explore insurance": "इन्शुरन्स एक्सप्लोर करा",
    "Fundamental & Technical": "फंडामेंटल आणि टेक्निकल",
    "F&O strategies": "F&O स्ट्रॅटेजीज",
    "IPO analysis": "IPO विश्लेषण",
    "Live market tools": "लाईव्ह मार्केट टूल्स",
    "Explore market": "मार्केट एक्सप्लोर करा",
    "Certification": "प्रमाणपत्र",
    "NISM / IRDA prep": "NISM / IRDA तयारी",
    "Financial modeling": "फायनान्शियल मॉडेलिंग",
    "Placement assistance": "प्लेसमेंट सहाय्य",
    "View courses": "कोर्सेस पहा",
    "🔹 Certified programs 🔹": "🔹 प्रमाणित प्रोग्राम्स 🔹",
    "INSURANCE TRACK": "इन्शुरन्स ट्रॅक",
    "Certified Insurance Advisor": "प्रमाणित इन्शुरन्स सल्लागार",
    "Life, Health & General insurance – complete IRDA syllabus.":
      "लाईफ, हेल्थ आणि जनरल इन्शुरन्स – संपूर्ण IRDA अभ्यासक्रम.",
    "MARKET TRACK": "मार्केट ट्रॅक",
    "Equity Research Analyst": "इक्विटी रिसर्च अॅनालिस्ट",
    "Fundamental/technical analysis plus options trading.":
      "फंडामेंटल/टेक्निकल विश्लेषण + ऑप्शन्स ट्रेडिंग.",
    "INTEGRATED": "इंटिग्रेटेड",
    "Financial Planner Masterclass": "फायनान्शियल प्लॅनर मास्टरक्लास",
    "Combine both silos for holistic advisory.":
      "समग्र सल्ल्यासाठी दोन्ही विभाग एकत्र करा.",
    "Trusted financial institute since 2012":
      "2012 पासून विश्वासार्ह आर्थिक संस्था",
    "Soham Financial Planner Institute is the bridge between insurance protection and market growth. Our siloed approach ensures deep expertise.":
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट इन्शुरन्स संरक्षण आणि मार्केट वाढ यांना जोडणारा दुवा आहे. आमची विभागीय पद्धत सखोल तज्ज्ञता सुनिश्चित करते.",
    "IRDA recognised": "IRDA मान्यताप्राप्त",
    "SEBI empanelled": "SEBI पॅनेलमध्ये नोंदणीकृत",
    "\"We strictly separate insurance and market content to build real authority. That's the silo advantage.\"":
      "\"खरा अधिकार निर्माण करण्यासाठी आम्ही इन्शुरन्स आणि मार्केट सामग्री स्पष्टपणे वेगळी ठेवतो. हाच सिलोचा फायदा आहे.\"",
    "— Chandan Soham, Founder": "— चंदन सोहम, संस्थापक",
    "Insurance Training Program": "इन्शुरन्स ट्रेनिंग प्रोग्राम",
    "Build a successful career in Life & General Insurance with practical training, real-world strategies, and professional guidance. Our structured program helps you grow confidently in the insurance industry.":
      "प्रॅक्टिकल ट्रेनिंग, वास्तविक धोरणे आणि व्यावसायिक मार्गदर्शनासह लाईफ आणि जनरल इन्शुरन्समध्ये यशस्वी करिअर घडवा. आमचा संरचित कार्यक्रम तुम्हाला आत्मविश्वासाने प्रगती करायला मदत करतो.",
    "IRDAI Guidance": "IRDAI मार्गदर्शन",
    "Policy Selling Techniques": "पॉलिसी विक्री तंत्रे",
    "Client Handling Skills": "क्लायंट हँडलिंग कौशल्ये",
    "Income Growth Strategy": "उत्पन्न वाढ धोरण",
    "Share Market Training Program": "शेअर मार्केट ट्रेनिंग प्रोग्राम",
    "Master stock market trading with practical strategies, live sessions, and technical analysis training. Learn how to trade confidently with professional risk management techniques.":
      "प्रॅक्टिकल स्ट्रॅटेजीज, लाईव्ह सत्रे आणि टेक्निकल विश्लेषणासह स्टॉक मार्केट ट्रेडिंग शिका. व्यावसायिक रिस्क मॅनेजमेंटसह आत्मविश्वासाने ट्रेड कसा करावा ते जाणून घ्या.",
    "Enroll Now": "आता प्रवेश घ्या",
    "Live Market Analysis": "लाईव्ह मार्केट विश्लेषण",
    "Technical Chart Reading": "टेक्निकल चार्ट वाचन",
    "Trading Psychology": "ट्रेडिंग सायकॉलॉजी",
    "Practical Demo": "प्रॅक्टिकल डेमो",
    "Career Opportunities After Course": "कोर्सनंतर करिअर संधी",
    "Build a strong professional journey in insurance and stock market with multiple income and career growth opportunities.":
      "इन्शुरन्स आणि स्टॉक मार्केटमध्ये अनेक उत्पन्न व करिअर वाढ संधींसह मजबूत व्यावसायिक प्रवास उभारा.",
    "Sub-Broker": "सब-ब्रोकर",
    "Mutual Fund Distributor": "म्युच्युअल फंड वितरक",
    "Who Should Join?": "कोण सहभागी व्हावे?",
    "Step-by-step Structured Learning": "स्टेप-बाय-स्टेप संरचित शिक्षण",
    "Systematic modules from basic to advanced level concepts.":
      "मूलभूत ते प्रगत स्तरांपर्यंत क्रमबद्ध मॉड्युल्स.",
    "Practical Case Studies": "प्रॅक्टिकल केस स्टडीज",
    "Real-world financial & insurance examples for clarity.":
      "स्पष्टतेसाठी वास्तविक आर्थिक आणि इन्शुरन्स उदाहरणे.",
    "Real-time Market Training": "रिअल-टाइम मार्केट ट्रेनिंग",
    "Live stock market sessions with chart-based analysis.":
      "चार्ट-आधारित विश्लेषणासह लाईव्ह स्टॉक मार्केट सत्रे.",
    "Doubt Solving Sessions": "डाऊट सॉल्विंग सत्रे",
    "Interactive sessions to clear concepts and strategies.":
      "संकल्पना आणि धोरणे स्पष्ट करणारी इंटरऍक्टिव्ह सत्रे.",
    "Assignments & Practice": "असाइनमेंट्स आणि प्रॅक्टिस",
    "Hands-on exercises to build confidence and skills.":
      "आत्मविश्वास आणि कौशल्य वाढवण्यासाठी प्रत्यक्ष सराव.",
    "Placement & Career Support": "प्लेसमेंट आणि करिअर सपोर्ट",
    "We provide complete career assistance to help you succeed in insurance and stock market professions.":
      "इन्शुरन्स आणि स्टॉक मार्केट क्षेत्रात यशासाठी आम्ही संपूर्ण करिअर सहाय्य देतो.",
    "Client Acquisition Strategy": "क्लायंट अॅक्विझिशन स्ट्रॅटेजी",
    "Interview Preparation": "इंटरव्ह्यू तयारी",
    "Business Setup Support": "बिझनेस सेटअप सपोर्ट",
    "Live Market Practical Sessions": "लाईव्ह मार्केट प्रॅक्टिकल सेशन्स",
    "Experience real-time trading with professional guidance. Our live sessions help you understand market movements, trading psychology, and practical execution strategies.":
      "व्यावसायिक मार्गदर्शनासह रिअल-टाइम ट्रेडिंगचा अनुभव घ्या. आमची लाईव्ह सत्रे मार्केट मूव्हमेंट्स, ट्रेडिंग सायकॉलॉजी आणि प्रॅक्टिकल एक्झिक्युशन समजण्यास मदत करतात.",
    "Join Live Session": "लाईव्ह सत्रात सामील व्हा",
    "Real-time Stock Market Practice": "रिअल-टाइम स्टॉक मार्केट प्रॅक्टिस",
    "Live Chart Explanation": "लाईव्ह चार्ट स्पष्टीकरण",
    "Daily Trade Setup Discussion": "दैनिक ट्रेड सेटअप चर्चा",
    "Industry Demand & Career Growth": "उद्योग मागणी आणि करिअर वाढ",
    "The financial sector in India is expanding rapidly, creating massive opportunities in insurance and stock market careers.":
      "भारतातील आर्थिक क्षेत्र वेगाने वाढत आहे, ज्यामुळे इन्शुरन्स आणि स्टॉक मार्केट करिअरमध्ये मोठ्या संधी निर्माण होत आहेत.",
    "Growing Insurance Market in India": "भारतात वाढता इन्शुरन्स बाजार",
    "Rapid digital transformation and increased policy adoption are driving strong growth in the Indian insurance sector.":
      "वेगवान डिजिटल परिवर्तन आणि पॉलिसी स्वीकार वाढ यामुळे भारतीय इन्शुरन्स क्षेत्रात मजबूत वाढ होत आहे.",
    "Rising Retail Traders": "वाढते रिटेल ट्रेडर्स",
    "Millions of new retail investors are entering the stock market, increasing demand for professional trading education.":
      "लाखो नवीन रिटेल गुंतवणूकदार स्टॉक मार्केटमध्ये प्रवेश करत आहेत, त्यामुळे व्यावसायिक ट्रेडिंग शिक्षणाची मागणी वाढत आहे.",
    "Financial Awareness Growth": "आर्थिक जागरूकतेत वाढ",
    "Growing awareness about investments, wealth management, and insurance planning is expanding career opportunities.":
      "गुंतवणूक, वेल्थ मॅनेजमेंट आणि इन्शुरन्स प्लॅनिंगबद्दल वाढती जागरूकता करिअर संधी वाढवत आहे.",
    "Career Scope in Finance": "फायनान्समधील करिअर स्कोप",
    "Careers like Financial Planner, Insurance Advisor, Trader, and Mutual Fund Distributor offer strong income potential.":
      "फायनान्शियल प्लॅनर, इन्शुरन्स सल्लागार, ट्रेडर आणि म्युच्युअल फंड वितरक यांसारख्या करिअरमध्ये चांगली उत्पन्न क्षमता आहे.",
    "Income Freedom Vision": "आर्थिक स्वातंत्र्य दृष्टिकोन",
    "Your journey from financial stress to financial independence.":
      "आर्थिक तणावातून आर्थिक स्वातंत्र्याकडे तुमचा प्रवास.",
    "9–5 Job Stress": "9–5 नोकरीचा ताण",
    "Limited salary growth": "मर्यादित पगारवाढ",
    "Fixed working hours": "निश्चित कामाचे तास",
    "Job dependency": "नोकरीवर अवलंबित्व",
    "Financial pressure": "आर्थिक दबाव",
    "Create Multiple Income Streams": "अनेक उत्पन्न स्त्रोत तयार करा",
    "Through Insurance & Trading": "इन्शुरन्स आणि ट्रेडिंगद्वारे",
    "Build Freedom. Build Wealth. Build Your Future.":
      "स्वातंत्र्य घडा. संपत्ती घडा. तुमचे भविष्य घडा.",
    "Financial Professional Freedom": "आर्थिक व्यावसायिक स्वातंत्र्य",
    "Unlimited income potential": "अमर्याद उत्पन्न क्षमता",
    "Flexible working hours": "लवचिक कामाचे तास",
    "Multiple revenue streams": "अनेक महसूल स्रोत",
    "Financial independence": "आर्थिक स्वावलंबन",
    "Industry Expert Guest Sessions": "उद्योग तज्ज्ञ अतिथी सत्रे",
    "Learn directly from experienced industry professionals. Our expert guest sessions provide real-world insights, practical exposure, and powerful networking opportunities.":
      "अनुभवी उद्योग व्यावसायिकांकडून थेट शिका. आमची अतिथी सत्रे वास्तविक इनसाइट्स, प्रॅक्टिकल एक्स्पोजर आणि मजबूत नेटवर्किंग संधी देतात.",
  },
  hi: {
    "Our Gallery": "हमारी गैलरी",
    "About Sohum Financial Planner Institute":
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट के बारे में",
    "WORDS FROM DIRECTOR": "निदेशक के शब्द",
    Director: "निदेशक",
    "Our Leadership Team": "हमारी लीडरशिप टीम",
    "Founder & Chief Mentor": "संस्थापक और मुख्य मार्गदर्शक",
    "Technical Analysis Expert": "टेक्निकल एनालिसिस एक्सपर्ट",
    "Insurance Training Specialist": "इंश्योरेंस ट्रेनिंग विशेषज्ञ",
    "Our Mission & Vision": "हमारा मिशन और विजन",
    "Our Mission": "हमारा मिशन",
    "Our Vision": "हमारा विजन",
    "Practical Learning Approach": "प्रैक्टिकल लर्निंग अप्रोच",
    "Trusted Financial Education": "विश्वसनीय वित्तीय शिक्षा",
    "Why Choose Sohum Financial Planner Institute":
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट क्यों चुनें",
    "Practical Market Exposure": "प्रैक्टिकल मार्केट एक्सपोजर",
    "Live Training": "लाइव ट्रेनिंग",
    "Industry Experts": "इंडस्ट्री एक्सपर्ट्स",
    "Career-Focused Programs": "करियर-फोकस्ड प्रोग्राम्स",
    "Result Oriented": "रिजल्ट ओरिएंटेड",
    "Our Core Values": "हमारे मुख्य मूल्य",
    "Practical Learning": "प्रैक्टिकल लर्निंग",
    "Risk Discipline": "रिस्क डिसिप्लिन",
    "Continuous Growth": "निरंतर विकास",
    "Real Experience": "वास्तविक अनुभव",
    "Capital Protection": "कैपिटल प्रोटेक्शन",
    "Skill Development": "स्किल डेवलपमेंट",
    "Certifications & Achievements": "प्रमाणपत्र और उपलब्धियां",
    "Registered Training Institute": "पंजीकृत प्रशिक्षण संस्थान",
    "Training Excellence Recognition": "ट्रेनिंग एक्सीलेंस मान्यता",
    "Certified Course Programs": "प्रमाणित कोर्स प्रोग्राम्स",
    "Industry Recognition": "इंडस्ट्री मान्यता",
    "How We Train": "हम कैसे ट्रेन करते हैं",
    "Learn the Fundamentals": "मूल बातें सीखें",
    "Practical Market Training": "प्रैक्टिकल मार्केट ट्रेनिंग",
    "Our Growth & Impact": "हमारी वृद्धि और प्रभाव",
    "Students Successfully Trained": "सफलतापूर्वक प्रशिक्षित छात्र",
    "Experience in Financial Training": "वित्तीय प्रशिक्षण का अनुभव",
    "Student Satisfaction Rate": "छात्र संतुष्टि दर",
    "Built for Future Financial Leaders":
      "भविष्य के वित्तीय नेताओं के लिए तैयार",
    "PROGRAM DETAILS": "प्रोग्राम विवरण",
    "Professional Financial Education Focused on Discipline, Structure & Market Clarity":
      "अनुशासन, संरचना और मार्केट स्पष्टता पर केंद्रित पेशेवर वित्तीय शिक्षा",
    "Program Overview": "प्रोग्राम ओवरव्यू",
    "The Challenge": "चुनौती",
    "Who Should Attend": "किसे शामिल होना चाहिए",
    "Curriculum Structure": "करिकुलम संरचना",
    "Learning Outcomes": "लर्निंग आउटकम्स",
    "Trainer Profile": "ट्रेनर प्रोफाइल",
    "Frequently Asked Questions": "अक्सर पूछे जाने वाले प्रश्न",
    "MASTER THE": "मास्टर करें",
    TRADING: "ट्रेडिंग",
    "Free Demo Session": "फ्री डेमो सेशन",
    "Reserve Your Spot": "अपनी सीट रिजर्व करें",
    "Full Name": "पूरा नाम",
    "Mobile Number": "मोबाइल नंबर",
    "Email Address": "ईमेल पता",
    Submit: "सबमिट करें",
    "Thank You": "धन्यवाद",
    Close: "बंद करें",
    "The principles that guide our training, mentorship, and financial education approach.":
      "वे सिद्धांत जो हमारे प्रशिक्षण, मेंटरशिप और वित्तीय शिक्षा दृष्टिकोण का मार्गदर्शन करते हैं।",
    "We emphasize real-time market exposure, live trading practice, and structured financial training to ensure students gain actionable knowledge beyond theory.":
      "हम रियल-टाइम मार्केट एक्सपोजर, लाइव ट्रेडिंग प्रैक्टिस और संरचित वित्तीय प्रशिक्षण पर जोर देते हैं ताकि छात्रों को सिद्धांत से आगे उपयोगी ज्ञान मिले।",
    "Financial success begins with disciplined risk management. We train our students to protect capital, manage emotions, and make informed decisions in dynamic markets.":
      "वित्तीय सफलता अनुशासित रिस्क मैनेजमेंट से शुरू होती है। हम छात्रों को पूंजी की सुरक्षा, भावनाओं का प्रबंधन और बदलते मार्केट में सही निर्णय लेना सिखाते हैं।",
    "We believe in constant improvement through advanced technical analysis, updated market strategies, and ongoing mentorship to build long-term professional success.":
      "दीर्घकालिक पेशेवर सफलता के लिए हम उन्नत टेक्निकल एनालिसिस, अपडेटेड मार्केट स्ट्रैटेजीज और निरंतर मेंटरशिप के माध्यम से निरंतर सुधार में विश्वास रखते हैं।",
    "Recognized for excellence in financial education, insurance advisory training, and professional stock market mentoring.":
      "वित्तीय शिक्षा, इंश्योरेंस एडवाइजरी ट्रेनिंग और प्रोफेशनल स्टॉक मार्केट मेंटरिंग में उत्कृष्टता के लिए मान्यता प्राप्त।",
    "Officially registered entity committed to professional financial and insurance training services.":
      "प्रोफेशनल वित्तीय और इंश्योरेंस प्रशिक्षण सेवाओं के लिए प्रतिबद्ध आधिकारिक पंजीकृत संस्था।",
    "Recognized for delivering practical, career-focused share market and insurance advisory programs.":
      "प्रैक्टिकल और करियर-केंद्रित शेयर मार्केट व इंश्योरेंस एडवाइजरी प्रोग्राम देने के लिए मान्यता प्राप्त।",
    "Structured certification programs designed to build industry-ready financial professionals.":
      "इंडस्ट्री-रेडी वित्तीय प्रोफेशनल्स तैयार करने के लिए बनाए गए संरचित प्रमाणन प्रोग्राम।",
    "Trusted by aspiring traders, agents, and financial planners across Pune & PCMC.":
      "पुणे और पीसीएमसी में उभरते ट्रेडर्स, एजेंट्स और फाइनेंशियल प्लानर्स द्वारा विश्वसनीय।",
    "A structured and practical learning approach designed to build confident financial professionals.":
      "आत्मविश्वासी वित्तीय प्रोफेशनल्स तैयार करने के लिए बनाया गया संरचित और प्रैक्टिकल लर्निंग अप्रोच।",
    "Strong foundation in insurance advisory, stock market basics, and financial concepts to build clarity and confidence.":
      "स्पष्टता और आत्मविश्वास के लिए इंश्योरेंस एडवाइजरी, स्टॉक मार्केट बेसिक्स और वित्तीय कॉन्सेप्ट्स की मजबूत नींव।",
    "Real-time chart analysis, live trading sessions, and structured risk management guidance.":
      "रियल-टाइम चार्ट एनालिसिस, लाइव ट्रेडिंग सेशंस और संरचित रिस्क मैनेजमेंट मार्गदर्शन।",
    "Focused training on disciplined execution, capital protection, and performance tracking for long-term success.":
      "दीर्घकालिक सफलता के लिए अनुशासित एक्जीक्यूशन, पूंजी सुरक्षा और परफॉर्मेंस ट्रैकिंग पर केंद्रित प्रशिक्षण।",
    "Transforming careers through structured financial education and practical market training.":
      "संरचित वित्तीय शिक्षा और प्रैक्टिकल मार्केट ट्रेनिंग के माध्यम से करियर में परिवर्तन।",
    "Sohum Financial Planner Institute equips students and professionals with structured, practical, and industry-driven training in insurance advisory and share market trading. Our learning model focuses on real-time exposure, disciplined execution, and long-term career growth.":
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट छात्रों और प्रोफेशनल्स को इंश्योरेंस एडवाइजरी और शेयर मार्केट ट्रेडिंग में संरचित, प्रैक्टिकल और इंडस्ट्री-ड्रिवन ट्रेनिंग प्रदान करता है। हमारा लर्निंग मॉडल रियल-टाइम एक्सपोजर, अनुशासित एक्जीक्यूशन और दीर्घकालिक करियर ग्रोथ पर केंद्रित है।",
    "Our Mission & Vision": "हमारा मिशन और विजन",
    "Empowering Financial Careers with Knowledge, Discipline & Strategy":
      "ज्ञान, अनुशासन और रणनीति के साथ वित्तीय करियर को सशक्त बनाना",
    "Verified": "सत्यापित",
    "Awarded": "पुरस्कृत",
    "Certified": "प्रमाणित",
    "Trusted": "विश्वसनीय",
    "Foundation": "नींव",
    "Live Practice": "लाइव प्रैक्टिस",
    "Execution": "एक्जीक्यूशन",
    "100% Practical Focus": "100% प्रैक्टिकल फोकस",
    "Live Market Exposure": "लाइव मार्केट एक्सपोजर",
    "Pan-Pune & PCMC": "पूरा पुणे और PCMC",
    "Trusted Training Institute": "विश्वसनीय प्रशिक्षण संस्थान",
    "Result-Oriented": "परिणाम-केंद्रित",
    "Skill & Risk Management": "कौशल और रिस्क मैनेजमेंट",
    "Master": "मास्टर करें",
    "with Soham": "सोहम के साथ",
    "India's premier institute for financial planning. Two specialised verticals — one standard of excellence.":
      "फाइनेंशियल प्लानिंग के लिए भारत का अग्रणी संस्थान। दो विशेष वर्टिकल्स — उत्कृष्टता का एक मानक।",
    "Your browser does not support the video tag.":
      "आपका ब्राउज़र वीडियो टैग को सपोर्ट नहीं करता।",
    "Two distinct knowledge pillars": "दो अलग ज्ञान स्तंभ",
    "Explore our — insurance topics stay in insurance, market topics stay in market. Pure topical authority.":
      "हमारे प्रोग्राम्स देखें — इंश्योरेंस विषय इंश्योरेंस में और मार्केट विषय मार्केट में। शुद्ध विषयगत अधिकार।",
    "Life & Health coverage": "लाइफ और हेल्थ कवरेज",
    "IRDA updates": "IRDA अपडेट्स",
    "Premium calculators": "प्रीमियम कैलकुलेटर्स",
    "Risk management": "रिस्क मैनेजमेंट",
    "Explore insurance": "इंश्योरेंस एक्सप्लोर करें",
    "Fundamental & Technical": "फंडामेंटल और टेक्निकल",
    "F&O strategies": "F&O स्ट्रैटेजीज",
    "IPO analysis": "IPO विश्लेषण",
    "Live market tools": "लाइव मार्केट टूल्स",
    "Explore market": "मार्केट एक्सप्लोर करें",
    "Certification": "प्रमाणन",
    "NISM / IRDA prep": "NISM / IRDA तैयारी",
    "Financial modeling": "फाइनेंशियल मॉडलिंग",
    "Placement assistance": "प्लेसमेंट सहायता",
    "View courses": "कोर्स देखें",
    "🔹 Certified programs 🔹": "🔹 प्रमाणित प्रोग्राम्स 🔹",
    "INSURANCE TRACK": "इंश्योरेंस ट्रैक",
    "Certified Insurance Advisor": "प्रमाणित इंश्योरेंस एडवाइजर",
    "Life, Health & General insurance – complete IRDA syllabus.":
      "लाइफ, हेल्थ और जनरल इंश्योरेंस – पूरा IRDA सिलेबस।",
    "MARKET TRACK": "मार्केट ट्रैक",
    "Equity Research Analyst": "इक्विटी रिसर्च एनालिस्ट",
    "Fundamental/technical analysis plus options trading.":
      "फंडामेंटल/टेक्निकल एनालिसिस + ऑप्शंस ट्रेडिंग।",
    "INTEGRATED": "इंटीग्रेटेड",
    "Financial Planner Masterclass": "फाइनेंशियल प्लानर मास्टरक्लास",
    "Combine both silos for holistic advisory.":
      "समग्र सलाह के लिए दोनों वर्टिकल्स को जोड़ें।",
    "Trusted financial institute since 2012":
      "2012 से विश्वसनीय वित्तीय संस्थान",
    "Soham Financial Planner Institute is the bridge between insurance protection and market growth. Our siloed approach ensures deep expertise.":
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट इंश्योरेंस सुरक्षा और मार्केट ग्रोथ के बीच एक मजबूत पुल है। हमारा संरचित दृष्टिकोण गहरी विशेषज्ञता सुनिश्चित करता है।",
    "IRDA recognised": "IRDA मान्यता प्राप्त",
    "SEBI empanelled": "SEBI पैनल में सूचीबद्ध",
    "\"We strictly separate insurance and market content to build real authority. That's the silo advantage.\"":
      "\"हम वास्तविक अधिकार बनाने के लिए इंश्योरेंस और मार्केट कंटेंट को स्पष्ट रूप से अलग रखते हैं। यही सिलो का लाभ है।\"",
    "— Chandan Soham, Founder": "— चंदन सोहम, संस्थापक",
    "Insurance Training Program": "इंश्योरेंस ट्रेनिंग प्रोग्राम",
    "Build a successful career in Life & General Insurance with practical training, real-world strategies, and professional guidance. Our structured program helps you grow confidently in the insurance industry.":
      "प्रैक्टिकल ट्रेनिंग, रियल-वर्ल्ड स्ट्रैटेजीज और प्रोफेशनल गाइडेंस के साथ लाइफ और जनरल इंश्योरेंस में सफल करियर बनाएं। हमारा संरचित प्रोग्राम आपको आत्मविश्वास के साथ आगे बढ़ने में मदद करता है।",
    "IRDAI Guidance": "IRDAI मार्गदर्शन",
    "Policy Selling Techniques": "पॉलिसी सेलिंग तकनीकें",
    "Client Handling Skills": "क्लाइंट हैंडलिंग स्किल्स",
    "Income Growth Strategy": "आय वृद्धि रणनीति",
    "Share Market Training Program": "शेयर मार्केट ट्रेनिंग प्रोग्राम",
    "Master stock market trading with practical strategies, live sessions, and technical analysis training. Learn how to trade confidently with professional risk management techniques.":
      "प्रैक्टिकल स्ट्रैटेजीज, लाइव सेशंस और टेक्निकल एनालिसिस ट्रेनिंग के साथ स्टॉक मार्केट ट्रेडिंग सीखें। प्रोफेशनल रिस्क मैनेजमेंट के साथ आत्मविश्वास से ट्रेड करना सीखें।",
    "Enroll Now": "अभी एनरोल करें",
    "Live Market Analysis": "लाइव मार्केट एनालिसिस",
    "Technical Chart Reading": "टेक्निकल चार्ट रीडिंग",
    "Trading Psychology": "ट्रेडिंग साइकोलॉजी",
    "Practical Demo": "प्रैक्टिकल डेमो",
    "Career Opportunities After Course": "कोर्स के बाद करियर अवसर",
    "Build a strong professional journey in insurance and stock market with multiple income and career growth opportunities.":
      "इंश्योरेंस और स्टॉक मार्केट में आय और करियर ग्रोथ की कई संभावनाओं के साथ मजबूत पेशेवर यात्रा बनाएं।",
    "Sub-Broker": "सब-ब्रोकर",
    "Mutual Fund Distributor": "म्यूचुअल फंड डिस्ट्रीब्यूटर",
    "Who Should Join?": "कौन जुड़ सकता है?",
    "Step-by-step Structured Learning": "स्टेप-बाय-स्टेप संरचित लर्निंग",
    "Systematic modules from basic to advanced level concepts.":
      "बेसिक से एडवांस स्तर तक व्यवस्थित मॉड्यूल्स।",
    "Practical Case Studies": "प्रैक्टिकल केस स्टडीज",
    "Real-world financial & insurance examples for clarity.":
      "स्पष्टता के लिए रियल-वर्ल्ड फाइनेंशियल और इंश्योरेंस उदाहरण।",
    "Real-time Market Training": "रियल-टाइम मार्केट ट्रेनिंग",
    "Live stock market sessions with chart-based analysis.":
      "चार्ट-आधारित विश्लेषण के साथ लाइव स्टॉक मार्केट सेशंस।",
    "Doubt Solving Sessions": "डाउट सॉल्विंग सेशंस",
    "Interactive sessions to clear concepts and strategies.":
      "कॉन्सेप्ट्स और स्ट्रैटेजीज स्पष्ट करने के लिए इंटरैक्टिव सेशंस।",
    "Assignments & Practice": "असाइनमेंट्स और प्रैक्टिस",
    "Hands-on exercises to build confidence and skills.":
      "आत्मविश्वास और कौशल बढ़ाने के लिए हैंड्स-ऑन अभ्यास।",
    "Placement & Career Support": "प्लेसमेंट और करियर सपोर्ट",
    "We provide complete career assistance to help you succeed in insurance and stock market professions.":
      "इंश्योरेंस और स्टॉक मार्केट प्रोफेशन में सफलता के लिए हम पूर्ण करियर सहायता प्रदान करते हैं।",
    "Client Acquisition Strategy": "क्लाइंट एक्विजिशन स्ट्रैटेजी",
    "Interview Preparation": "इंटरव्यू तैयारी",
    "Business Setup Support": "बिजनेस सेटअप सपोर्ट",
    "Live Market Practical Sessions": "लाइव मार्केट प्रैक्टिकल सेशंस",
    "Experience real-time trading with professional guidance. Our live sessions help you understand market movements, trading psychology, and practical execution strategies.":
      "प्रोफेशनल मार्गदर्शन के साथ रियल-टाइम ट्रेडिंग का अनुभव करें। हमारे लाइव सेशंस मार्केट मूवमेंट, ट्रेडिंग साइकोलॉजी और प्रैक्टिकल एक्जीक्यूशन को समझने में मदद करते हैं।",
    "Join Live Session": "लाइव सेशन जॉइन करें",
    "Real-time Stock Market Practice": "रियल-टाइम स्टॉक मार्केट प्रैक्टिस",
    "Live Chart Explanation": "लाइव चार्ट एक्सप्लेनेशन",
    "Daily Trade Setup Discussion": "डेली ट्रेड सेटअप चर्चा",
    "Industry Demand & Career Growth": "इंडस्ट्री डिमांड और करियर ग्रोथ",
    "The financial sector in India is expanding rapidly, creating massive opportunities in insurance and stock market careers.":
      "भारत का वित्तीय क्षेत्र तेजी से बढ़ रहा है, जिससे इंश्योरेंस और स्टॉक मार्केट करियर में बड़े अवसर बन रहे हैं।",
    "Growing Insurance Market in India": "भारत में बढ़ता इंश्योरेंस बाजार",
    "Rapid digital transformation and increased policy adoption are driving strong growth in the Indian insurance sector.":
      "तेज डिजिटल परिवर्तन और बढ़ती पॉलिसी अपनाने की दर भारतीय इंश्योरेंस सेक्टर में मजबूत वृद्धि ला रही है।",
    "Rising Retail Traders": "बढ़ते रिटेल ट्रेडर्स",
    "Millions of new retail investors are entering the stock market, increasing demand for professional trading education.":
      "लाखों नए रिटेल निवेशक स्टॉक मार्केट में प्रवेश कर रहे हैं, जिससे प्रोफेशनल ट्रेडिंग शिक्षा की मांग बढ़ रही है।",
    "Financial Awareness Growth": "वित्तीय जागरूकता में वृद्धि",
    "Growing awareness about investments, wealth management, and insurance planning is expanding career opportunities.":
      "निवेश, वेल्थ मैनेजमेंट और इंश्योरेंस प्लानिंग के प्रति बढ़ती जागरूकता करियर अवसर बढ़ा रही है।",
    "Career Scope in Finance": "फाइनेंस में करियर स्कोप",
    "Careers like Financial Planner, Insurance Advisor, Trader, and Mutual Fund Distributor offer strong income potential.":
      "फाइनेंशियल प्लानर, इंश्योरेंस एडवाइजर, ट्रेडर और म्यूचुअल फंड डिस्ट्रीब्यूटर जैसे करियर अच्छे आय अवसर देते हैं।",
    "Income Freedom Vision": "आर्थिक स्वतंत्रता विजन",
    "Your journey from financial stress to financial independence.":
      "आर्थिक तनाव से आर्थिक स्वतंत्रता तक आपकी यात्रा।",
    "9–5 Job Stress": "9–5 नौकरी का तनाव",
    "Limited salary growth": "सीमित वेतन वृद्धि",
    "Fixed working hours": "निश्चित कार्य घंटे",
    "Job dependency": "नौकरी पर निर्भरता",
    "Financial pressure": "आर्थिक दबाव",
    "Create Multiple Income Streams": "एकाधिक आय स्रोत बनाएं",
    "Through Insurance & Trading": "इंश्योरेंस और ट्रेडिंग के माध्यम से",
    "Build Freedom. Build Wealth. Build Your Future.":
      "स्वतंत्रता बनाएं। संपत्ति बनाएं। अपना भविष्य बनाएं।",
    "Financial Professional Freedom": "वित्तीय प्रोफेशनल स्वतंत्रता",
    "Unlimited income potential": "असीमित आय क्षमता",
    "Flexible working hours": "लचीले कार्य घंटे",
    "Multiple revenue streams": "एकाधिक रेवेन्यू स्रोत",
    "Financial independence": "आर्थिक स्वतंत्रता",
    "Industry Expert Guest Sessions": "इंडस्ट्री एक्सपर्ट गेस्ट सेशंस",
    "Learn directly from experienced industry professionals. Our expert guest sessions provide real-world insights, practical exposure, and powerful networking opportunities.":
      "अनुभवी इंडस्ट्री प्रोफेशनल्स से सीधे सीखें। हमारे गेस्ट सेशंस रियल-वर्ल्ड इनसाइट्स, प्रैक्टिकल एक्सपोजर और मजबूत नेटवर्किंग अवसर प्रदान करते हैं।",
  },
};

const LANGUAGE_LABELS = {
  en: { en: "English", mr: "Marathi", hi: "Hindi" },
  mr: { en: "इंग्रजी", mr: "मराठी", hi: "हिंदी" },
  hi: { en: "अंग्रेज़ी", mr: "मराठी", hi: "हिंदी" },
};

const PAGE_I18N = {
  en: {
    insurance_page_title:
      "Soham Financial Planner Institute | Insurance & Share Market",
    ins_hero_heading_a: "Our Professional",
    ins_hero_heading_b: "Courses",
    ins_hero_subtitle:
      "Practical, career-focused programs in Insurance Advisory, Share Market Trading, and Technical Analysis.",
    ins_explore_heading: "Explore Our Programs",
    ins_course1_title: "Share Market Training",
    ins_course1_desc:
      "Learn stock market fundamentals, technical analysis, live trading strategies, and professional risk management.",
    ins_course1_li_1: "✔ Live Market Sessions",
    ins_course1_li_2: "✔ Candlestick & Chart Analysis",
    ins_course1_li_3: "✔ Intraday & Swing Strategies",
    ins_learn_more: "Learn More",
    ins_course2_title: "Insurance Training",
    ins_course2_desc:
      "Become a professional insurance advisor with structured sales techniques, product knowledge, and compliance guidance.",
    ins_course2_li_1: "✔ IRDA Exam Preparation",
    ins_course2_li_2: "✔ Client Handling Skills",
    ins_course2_li_3: "✔ Policy & Product Training",
    ins_why_heading: "Why Choose Our Courses?",
    ins_why_subtitle:
      "Professional training designed to build confident financial experts.",
    ins_why_card1_title: "100% Practical Training",
    ins_why_card1_desc:
      "Hands-on learning with real-time market exposure and live trading sessions.",
    ins_why_card2_title: "Expert Mentorship",
    ins_why_card2_desc:
      "Structured guidance from experienced professionals in insurance and trading.",
    ins_why_card3_title: "Career-Oriented Approach",
    ins_why_card3_desc:
      "Focused on long-term financial success and disciplined execution skills.",
    ins_cta_heading: "Start Your Financial Career Today",
    ins_cta_desc:
      "Join Sohum Financial Planner Institute and gain practical expertise in Share Market Trading and Insurance Advisory.",
    ins_cta_enroll: "Enroll Now",
    ins_cta_call: "Call Now",
    ins_float_call_title: "Call Now",
    ins_float_whatsapp_title: "WhatsApp",
    ins_hero_bg_alt: "Courses Background",
    ins_course1_img_alt: "Share Market Course",
    ins_course2_img_alt: "Insurance Advisor Training",
    share_page_title:
      "Soham Financial Planner Institute | Insurance & Share Market",
    share_hero_h1_a: "Our Professional",
    share_hero_h1_b: "Courses",
    share_hero_desc:
      "Practical, career-focused programs in Insurance Advisory, Share Market Trading, and Technical Analysis.",
    share_explore_heading: "Explore Our Programs",
    share_course1_title: "Share Market Trading Course",
    share_course1_desc:
      "Learn stock market fundamentals, technical analysis, live trading strategies, and professional risk management.",
    share_course1_li_1: "✔ Live Market Sessions",
    share_course1_li_2: "✔ Candlestick & Chart Analysis",
    share_course1_li_3: "✔ Intraday & Swing Strategies",
    share_course2_title: "Insurance Advisor Course",
    share_course2_desc:
      "Become a professional insurance advisor with structured sales techniques, product knowledge, and compliance guidance.",
    share_course2_li_1: "✔ IRDA Exam Preparation",
    share_course2_li_2: "✔ Client Handling Skills",
    share_course2_li_3: "✔ Policy & Product Training",
    share_learn_more: "Learn More",
    share_why_heading: "Why Choose Our Courses?",
    share_why_desc:
      "Professional training designed to build confident financial experts.",
    share_why_card1_title: "100% Practical Training",
    share_why_card1_desc:
      "Hands-on learning with real-time market exposure and live trading sessions.",
    share_why_card2_title: "Expert Mentorship",
    share_why_card2_desc:
      "Structured guidance from experienced professionals in insurance and trading.",
    share_why_card3_title: "Career-Oriented Approach",
    share_why_card3_desc:
      "Focused on long-term financial success and disciplined execution skills.",
    share_cta_heading: "Start Your Financial Career Today",
    share_cta_desc:
      "Join Sohum Financial Planner Institute and gain practical expertise in Share Market Trading and Insurance Advisory.",
    share_cta_enroll: "Enroll Now",
    share_cta_call: "Call Now",
    share_float_call_title: "Call Now",
    share_float_whatsapp_title: "WhatsApp",
    share_hero_bg_alt: "Courses Background",
    share_course1_alt: "Share Market Course",
    share_course2_alt: "Insurance Advisor Training",
    contact_page_title:
      "Soham Financial Planner Institute | Insurance & Share Market",
    contact_hero_h1_a: "Let's Talk",
    contact_hero_h1_b: "Financial Growth",
    contact_hero_desc:
      "Whether you're looking to start your journey in Share Market Trading or become a certified Insurance Advisor, our experts are ready to guide you.",
    contact_stat_1: "✔ 100% Practical Training",
    contact_stat_2: "✔ 1000+ Students Trained",
    contact_stat_3: "✔ Pune & PCMC",
    contact_left_heading: "Get in Touch",
    contact_left_desc:
      "Start your journey in Insurance Advisory & Share Market Trading. Reach out to us for course details, demo sessions, and career guidance.",
    contact_location_label: "Location",
    contact_location_value: "Pune & PCMC, Maharashtra",
    contact_phone_label: "Phone",
    contact_email_label: "Email",
    contact_form_heading: "Send Us a Message",
    contact_ph_name: "Your Name",
    contact_ph_email: "Your Email",
    contact_ph_phone: "Phone Number",
    contact_select_default: "Select Course",
    contact_select_share: "Share Market",
    contact_select_ins: "Insurance Training",
    contact_select_other: "Other",
    contact_ph_message: "Your Message",
    contact_submit: "Submit Inquiry",
    contact_float_call_title: "Call Now",
    contact_float_whatsapp_title: "WhatsApp",
    gallery_page_title:
      "Soham Financial Planner Institute | Insurance & Share Market",
    gallery_hero_h1: "Our Gallery",
    gallery_hero_p:
      "Explore our expert lectures, classroom sessions, trading workshops and student activities.",
    gallery_cat_1: "Expert Guest Lectures",
    gallery_cat_2: "Classroom Training Sessions",
    gallery_cat_3: "Share Market Practical Training",
    gallery_cat_4: "Workshops & Events",
    gallery_cat_5: "Certificate Distribution",
    gallery_ov_1: "Guest Lecture Session",
    gallery_ov_2: "Industry Expert Talk",
    gallery_ov_3: "Expert Lecture Video",
    gallery_ov_4: "Classroom Teaching",
    gallery_ov_5: "Student Discussion",
    gallery_ov_6: "Interactive Session",
    gallery_ov_7: "Training Video",
    gallery_ov_8: "Trading Practice",
    gallery_ov_9: "Market Analysis",
    gallery_ov_10: "Live Trading Demo",
    gallery_ov_11: "Finance Workshop",
    gallery_ov_12: "Group Discussion",
    gallery_ov_13: "Training Event",
    gallery_ov_14: "Certificate Ceremony",
    gallery_ov_15: "Student Achievement",
    gallery_ov_16: "Success Moments",
    gallery_img_1_alt: "Guest Lecture",
    gallery_img_2_alt: "Industry Talk",
    gallery_img_3_alt: "Classroom Teaching",
    gallery_img_4_alt: "Student Discussion",
    gallery_img_5_alt: "Interactive Session",
    gallery_img_6_alt: "Trading Practice",
    gallery_img_7_alt: "Market Analysis",
    gallery_img_8_alt: "Finance Workshop",
    gallery_img_9_alt: "Group Discussion",
    gallery_img_10_alt: "Training Event",
    gallery_img_11_alt: "Certificate Ceremony",
    gallery_img_12_alt: "Student Achievement",
    gallery_float_call_title: "Call Now",
    gallery_float_whatsapp_title: "WhatsApp",
  },
  mr: {
    insurance_page_title:
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट | इन्शुरन्स आणि शेअर मार्केट",
    ins_hero_heading_a: "आमचे व्यावसायिक",
    ins_hero_heading_b: "कोर्सेस",
    ins_hero_subtitle:
      "इन्शुरन्स अॅडव्हायजरी, शेअर मार्केट ट्रेडिंग आणि टेक्निकल अॅनालिसिसमध्ये करिअर-केंद्रित प्रॅक्टिकल प्रोग्राम्स.",
    ins_explore_heading: "आमचे प्रोग्राम्स जाणून घ्या",
    ins_course1_title: "शेअर मार्केट ट्रेनिंग",
    ins_course1_desc:
      "स्टॉक मार्केटची मूलतत्त्वे, टेक्निकल अॅनालिसिस, लाईव्ह ट्रेडिंग स्ट्रॅटेजीज आणि प्रोफेशनल रिस्क मॅनेजमेंट शिका.",
    ins_course1_li_1: "✔ लाईव्ह मार्केट सत्रे",
    ins_course1_li_2: "✔ कँडलस्टिक आणि चार्ट विश्लेषण",
    ins_course1_li_3: "✔ इंट्राडे आणि स्विंग स्ट्रॅटेजीज",
    ins_learn_more: "अधिक जाणून घ्या",
    ins_course2_title: "इन्शुरन्स ट्रेनिंग",
    ins_course2_desc:
      "स्ट्रक्चर्ड सेल्स तंत्र, प्रॉडक्ट नॉलेज आणि कॉम्प्लायन्स मार्गदर्शनासह प्रोफेशनल इन्शुरन्स अॅडव्हायझर बना.",
    ins_course2_li_1: "✔ IRDA परीक्षा तयारी",
    ins_course2_li_2: "✔ क्लायंट हँडलिंग कौशल्ये",
    ins_course2_li_3: "✔ पॉलिसी आणि प्रॉडक्ट ट्रेनिंग",
    ins_why_heading: "आमचे कोर्सेस का निवडावेत?",
    ins_why_subtitle:
      "आत्मविश्वासपूर्ण आर्थिक तज्ज्ञ तयार करण्यासाठी डिझाइन केलेले व्यावसायिक प्रशिक्षण.",
    ins_why_card1_title: "100% प्रॅक्टिकल ट्रेनिंग",
    ins_why_card1_desc:
      "रिअल-टाइम मार्केट एक्स्पोजर आणि लाईव्ह ट्रेडिंग सत्रांसह प्रत्यक्ष शिक्षण.",
    ins_why_card2_title: "तज्ज्ञ मार्गदर्शन",
    ins_why_card2_desc:
      "इन्शुरन्स आणि ट्रेडिंगमधील अनुभवी व्यावसायिकांकडून संरचित मार्गदर्शन.",
    ins_why_card3_title: "करिअर-केंद्रित दृष्टिकोन",
    ins_why_card3_desc:
      "दीर्घकालीन आर्थिक यश आणि शिस्तबद्ध अंमलबजावणी कौशल्यांवर लक्ष.",
    ins_cta_heading: "आजच तुमचे वित्तीय करिअर सुरू करा",
    ins_cta_desc:
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूटमध्ये सामील व्हा आणि शेअर मार्केट ट्रेडिंग व इन्शुरन्स अॅडव्हायजरीमध्ये प्रॅक्टिकल कौशल्य मिळवा.",
    ins_cta_enroll: "आता प्रवेश घ्या",
    ins_cta_call: "आता कॉल करा",
    ins_float_call_title: "आता कॉल करा",
    ins_float_whatsapp_title: "व्हॉट्सअॅप",
    ins_hero_bg_alt: "कोर्स पार्श्वभूमी",
    ins_course1_img_alt: "शेअर मार्केट कोर्स",
    ins_course2_img_alt: "इन्शुरन्स सल्लागार प्रशिक्षण",
    share_page_title:
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट | इन्शुरन्स आणि शेअर मार्केट",
    share_hero_h1_a: "आमचे व्यावसायिक",
    share_hero_h1_b: "कोर्सेस",
    share_hero_desc:
      "इन्शुरन्स अॅडव्हायजरी, शेअर मार्केट ट्रेडिंग आणि टेक्निकल अॅनालिसिसमध्ये करिअर-केंद्रित प्रॅक्टिकल प्रोग्राम्स.",
    share_explore_heading: "आमचे प्रोग्राम्स जाणून घ्या",
    share_course1_title: "शेअर मार्केट ट्रेडिंग कोर्स",
    share_course1_desc:
      "स्टॉक मार्केटची मूलतत्त्वे, टेक्निकल अॅनालिसिस, लाईव्ह ट्रेडिंग स्ट्रॅटेजीज आणि प्रोफेशनल रिस्क मॅनेजमेंट शिका.",
    share_course1_li_1: "✔ लाईव्ह मार्केट सत्रे",
    share_course1_li_2: "✔ कँडलस्टिक आणि चार्ट विश्लेषण",
    share_course1_li_3: "✔ इंट्राडे आणि स्विंग स्ट्रॅटेजीज",
    share_course2_title: "इन्शुरन्स सल्लागार कोर्स",
    share_course2_desc:
      "स्ट्रक्चर्ड सेल्स तंत्र, प्रॉडक्ट नॉलेज आणि कॉम्प्लायन्स मार्गदर्शनासह प्रोफेशनल इन्शुरन्स सल्लागार बना.",
    share_course2_li_1: "✔ IRDA परीक्षा तयारी",
    share_course2_li_2: "✔ क्लायंट हँडलिंग कौशल्ये",
    share_course2_li_3: "✔ पॉलिसी आणि प्रॉडक्ट ट्रेनिंग",
    share_learn_more: "अधिक जाणून घ्या",
    share_why_heading: "आमचे कोर्सेस का निवडावेत?",
    share_why_desc:
      "आत्मविश्वासपूर्ण आर्थिक तज्ज्ञ तयार करण्यासाठी डिझाइन केलेले व्यावसायिक प्रशिक्षण.",
    share_why_card1_title: "100% प्रॅक्टिकल ट्रेनिंग",
    share_why_card1_desc:
      "रिअल-टाइम मार्केट एक्स्पोजर आणि लाईव्ह ट्रेडिंग सत्रांसह प्रत्यक्ष शिक्षण.",
    share_why_card2_title: "तज्ज्ञ मार्गदर्शन",
    share_why_card2_desc:
      "इन्शुरन्स आणि ट्रेडिंगमधील अनुभवी व्यावसायिकांकडून संरचित मार्गदर्शन.",
    share_why_card3_title: "करिअर-केंद्रित दृष्टिकोन",
    share_why_card3_desc:
      "दीर्घकालीन आर्थिक यश आणि शिस्तबद्ध अंमलबजावणी कौशल्यांवर लक्ष.",
    share_cta_heading: "आजच तुमचे वित्तीय करिअर सुरू करा",
    share_cta_desc:
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूटमध्ये सामील व्हा आणि शेअर मार्केट ट्रेडिंग व इन्शुरन्स अॅडव्हायजरीमध्ये प्रॅक्टिकल कौशल्य मिळवा.",
    share_cta_enroll: "आता प्रवेश घ्या",
    share_cta_call: "आता कॉल करा",
    share_float_call_title: "आता कॉल करा",
    share_float_whatsapp_title: "व्हॉट्सअॅप",
    share_hero_bg_alt: "कोर्स पार्श्वभूमी",
    share_course1_alt: "शेअर मार्केट कोर्स",
    share_course2_alt: "इन्शुरन्स सल्लागार प्रशिक्षण",
    contact_page_title:
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट | इन्शुरन्स आणि शेअर मार्केट",
    contact_hero_h1_a: "चला बोलूया",
    contact_hero_h1_b: "आर्थिक वाढ",
    contact_hero_desc:
      "तुम्ही शेअर मार्केट ट्रेडिंगमध्ये करिअर सुरू करत असाल किंवा प्रमाणित इन्शुरन्स सल्लागार बनू इच्छित असाल, आमचे तज्ज्ञ मार्गदर्शनासाठी तयार आहेत.",
    contact_stat_1: "✔ 100% प्रॅक्टिकल ट्रेनिंग",
    contact_stat_2: "✔ 1000+ प्रशिक्षित विद्यार्थी",
    contact_stat_3: "✔ पुणे आणि पीसीएमसी",
    contact_left_heading: "आमच्याशी संपर्क साधा",
    contact_left_desc:
      "इन्शुरन्स अॅडव्हायजरी आणि शेअर मार्केट ट्रेडिंगमध्ये तुमचा प्रवास सुरू करा. कोर्स तपशील, डेमो सत्रे आणि करिअर मार्गदर्शनासाठी संपर्क करा.",
    contact_location_label: "लोकेशन",
    contact_location_value: "पुणे आणि पीसीएमसी, महाराष्ट्र",
    contact_phone_label: "फोन",
    contact_email_label: "ईमेल",
    contact_form_heading: "आम्हाला संदेश पाठवा",
    contact_ph_name: "तुमचे नाव",
    contact_ph_email: "तुमचा ईमेल",
    contact_ph_phone: "फोन नंबर",
    contact_select_default: "कोर्स निवडा",
    contact_select_share: "शेअर मार्केट",
    contact_select_ins: "इन्शुरन्स ट्रेनिंग",
    contact_select_other: "इतर",
    contact_ph_message: "तुमचा संदेश",
    contact_submit: "चौकशी सबमिट करा",
    contact_float_call_title: "आता कॉल करा",
    contact_float_whatsapp_title: "व्हॉट्सअॅप",
    gallery_page_title:
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट | इन्शुरन्स आणि शेअर मार्केट",
    gallery_hero_h1: "आमची गॅलरी",
    gallery_hero_p:
      "आमची तज्ज्ञ व्याख्याने, वर्ग सत्रे, ट्रेडिंग कार्यशाळा आणि विद्यार्थी उपक्रम पाहा.",
    gallery_cat_1: "तज्ज्ञ अतिथी व्याख्याने",
    gallery_cat_2: "वर्ग प्रशिक्षण सत्रे",
    gallery_cat_3: "शेअर मार्केट प्रॅक्टिकल ट्रेनिंग",
    gallery_cat_4: "वर्कशॉप्स आणि कार्यक्रम",
    gallery_cat_5: "प्रमाणपत्र वितरण",
    gallery_ov_1: "अतिथी व्याख्यान सत्र",
    gallery_ov_2: "उद्योग तज्ज्ञ चर्चा",
    gallery_ov_3: "तज्ज्ञ व्याख्यान व्हिडिओ",
    gallery_ov_4: "वर्गातील अध्यापन",
    gallery_ov_5: "विद्यार्थी चर्चा",
    gallery_ov_6: "इंटरऍक्टिव्ह सत्र",
    gallery_ov_7: "प्रशिक्षण व्हिडिओ",
    gallery_ov_8: "ट्रेडिंग प्रॅक्टिस",
    gallery_ov_9: "मार्केट विश्लेषण",
    gallery_ov_10: "लाईव्ह ट्रेडिंग डेमो",
    gallery_ov_11: "फायनान्स वर्कशॉप",
    gallery_ov_12: "गट चर्चा",
    gallery_ov_13: "प्रशिक्षण कार्यक्रम",
    gallery_ov_14: "प्रमाणपत्र समारंभ",
    gallery_ov_15: "विद्यार्थी उपलब्धी",
    gallery_ov_16: "यशाचे क्षण",
    gallery_img_1_alt: "अतिथी व्याख्यान",
    gallery_img_2_alt: "उद्योग चर्चा",
    gallery_img_3_alt: "वर्गातील अध्यापन",
    gallery_img_4_alt: "विद्यार्थी चर्चा",
    gallery_img_5_alt: "इंटरऍक्टिव्ह सत्र",
    gallery_img_6_alt: "ट्रेडिंग प्रॅक्टिस",
    gallery_img_7_alt: "मार्केट विश्लेषण",
    gallery_img_8_alt: "फायनान्स वर्कशॉप",
    gallery_img_9_alt: "गट चर्चा",
    gallery_img_10_alt: "प्रशिक्षण कार्यक्रम",
    gallery_img_11_alt: "प्रमाणपत्र समारंभ",
    gallery_img_12_alt: "विद्यार्थी उपलब्धी",
    gallery_float_call_title: "आता कॉल करा",
    gallery_float_whatsapp_title: "व्हॉट्सअॅप",
  },
  hi: {
    insurance_page_title:
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट | इंश्योरेंस और शेयर मार्केट",
    ins_hero_heading_a: "हमारे प्रोफेशनल",
    ins_hero_heading_b: "कोर्स",
    ins_hero_subtitle:
      "इंश्योरेंस एडवाइजरी, शेयर मार्केट ट्रेडिंग और टेक्निकल एनालिसिस में करियर-केंद्रित प्रैक्टिकल प्रोग्राम्स.",
    ins_explore_heading: "हमारे प्रोग्राम्स देखें",
    ins_course1_title: "शेयर मार्केट ट्रेनिंग",
    ins_course1_desc:
      "स्टॉक मार्केट फंडामेंटल्स, टेक्निकल एनालिसिस, लाइव ट्रेडिंग स्ट्रैटेजीज और प्रोफेशनल रिस्क मैनेजमेंट सीखें.",
    ins_course1_li_1: "✔ लाइव मार्केट सेशंस",
    ins_course1_li_2: "✔ कैंडलस्टिक और चार्ट एनालिसिस",
    ins_course1_li_3: "✔ इंट्राडे और स्विंग स्ट्रैटेजीज",
    ins_learn_more: "और जानें",
    ins_course2_title: "इंश्योरेंस ट्रेनिंग",
    ins_course2_desc:
      "स्ट्रक्चर्ड सेल्स तकनीकों, प्रोडक्ट नॉलेज और कंप्लायंस गाइडेंस के साथ प्रोफेशनल इंश्योरेंस एडवाइजर बनें.",
    ins_course2_li_1: "✔ IRDA परीक्षा तैयारी",
    ins_course2_li_2: "✔ क्लाइंट हैंडलिंग स्किल्स",
    ins_course2_li_3: "✔ पॉलिसी और प्रोडक्ट ट्रेनिंग",
    ins_why_heading: "हमारे कोर्स क्यों चुनें?",
    ins_why_subtitle:
      "आत्मविश्वासी वित्तीय विशेषज्ञ बनाने के लिए डिज़ाइन किया गया प्रोफेशनल प्रशिक्षण.",
    ins_why_card1_title: "100% प्रैक्टिकल ट्रेनिंग",
    ins_why_card1_desc:
      "रियल-टाइम मार्केट एक्सपोजर और लाइव ट्रेडिंग सेशंस के साथ हैंड्स-ऑन लर्निंग.",
    ins_why_card2_title: "एक्सपर्ट मेंटरशिप",
    ins_why_card2_desc:
      "इंश्योरेंस और ट्रेडिंग के अनुभवी प्रोफेशनल्स से संरचित मार्गदर्शन.",
    ins_why_card3_title: "करियर-ओरिएंटेड अप्रोच",
    ins_why_card3_desc:
      "लंबी अवधि की वित्तीय सफलता और अनुशासित कार्यान्वयन कौशल पर फोकस.",
    ins_cta_heading: "आज ही अपना वित्तीय करियर शुरू करें",
    ins_cta_desc:
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट से जुड़ें और शेयर मार्केट ट्रेडिंग व इंश्योरेंस एडवाइजरी में प्रैक्टिकल विशेषज्ञता प्राप्त करें.",
    ins_cta_enroll: "अभी एनरोल करें",
    ins_cta_call: "अभी कॉल करें",
    ins_float_call_title: "अभी कॉल करें",
    ins_float_whatsapp_title: "व्हाट्सऐप",
    ins_hero_bg_alt: "कोर्स बैकग्राउंड",
    ins_course1_img_alt: "शेयर मार्केट कोर्स",
    ins_course2_img_alt: "इंश्योरेंस एडवाइजर ट्रेनिंग",
    share_page_title:
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट | इंश्योरेंस और शेयर मार्केट",
    share_hero_h1_a: "हमारे प्रोफेशनल",
    share_hero_h1_b: "कोर्स",
    share_hero_desc:
      "इंश्योरेंस एडवाइजरी, शेयर मार्केट ट्रेडिंग और टेक्निकल एनालिसिस में करियर-केंद्रित प्रैक्टिकल प्रोग्राम्स.",
    share_explore_heading: "हमारे प्रोग्राम्स देखें",
    share_course1_title: "शेयर मार्केट ट्रेडिंग कोर्स",
    share_course1_desc:
      "स्टॉक मार्केट फंडामेंटल्स, टेक्निकल एनालिसिस, लाइव ट्रेडिंग स्ट्रैटेजीज और प्रोफेशनल रिस्क मैनेजमेंट सीखें.",
    share_course1_li_1: "✔ लाइव मार्केट सेशंस",
    share_course1_li_2: "✔ कैंडलस्टिक और चार्ट एनालिसिस",
    share_course1_li_3: "✔ इंट्राडे और स्विंग स्ट्रैटेजीज",
    share_course2_title: "इंश्योरेंस एडवाइजर कोर्स",
    share_course2_desc:
      "स्ट्रक्चर्ड सेल्स तकनीकों, प्रोडक्ट नॉलेज और कंप्लायंस गाइडेंस के साथ प्रोफेशनल इंश्योरेंस एडवाइजर बनें.",
    share_course2_li_1: "✔ IRDA परीक्षा तैयारी",
    share_course2_li_2: "✔ क्लाइंट हैंडलिंग स्किल्स",
    share_course2_li_3: "✔ पॉलिसी और प्रोडक्ट ट्रेनिंग",
    share_learn_more: "और जानें",
    share_why_heading: "हमारे कोर्स क्यों चुनें?",
    share_why_desc:
      "आत्मविश्वासी वित्तीय विशेषज्ञ बनाने के लिए डिज़ाइन किया गया प्रोफेशनल प्रशिक्षण.",
    share_why_card1_title: "100% प्रैक्टिकल ट्रेनिंग",
    share_why_card1_desc:
      "रियल-टाइम मार्केट एक्सपोजर और लाइव ट्रेडिंग सेशंस के साथ हैंड्स-ऑन लर्निंग.",
    share_why_card2_title: "एक्सपर्ट मेंटरशिप",
    share_why_card2_desc:
      "इंश्योरेंस और ट्रेडिंग के अनुभवी प्रोफेशनल्स से संरचित मार्गदर्शन.",
    share_why_card3_title: "करियर-ओरिएंटेड अप्रोच",
    share_why_card3_desc:
      "लंबी अवधि की वित्तीय सफलता और अनुशासित कार्यान्वयन कौशल पर फोकस.",
    share_cta_heading: "आज ही अपना वित्तीय करियर शुरू करें",
    share_cta_desc:
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट से जुड़ें और शेयर मार्केट ट्रेडिंग व इंश्योरेंस एडवाइजरी में प्रैक्टिकल विशेषज्ञता प्राप्त करें.",
    share_cta_enroll: "अभी एनरोल करें",
    share_cta_call: "अभी कॉल करें",
    share_float_call_title: "अभी कॉल करें",
    share_float_whatsapp_title: "व्हाट्सऐप",
    share_hero_bg_alt: "कोर्स बैकग्राउंड",
    share_course1_alt: "शेयर मार्केट कोर्स",
    share_course2_alt: "इंश्योरेंस एडवाइजर ट्रेनिंग",
    contact_page_title:
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट | इंश्योरेंस और शेयर मार्केट",
    contact_hero_h1_a: "चलिए बात करें",
    contact_hero_h1_b: "वित्तीय विकास",
    contact_hero_desc:
      "चाहे आप शेयर मार्केट ट्रेडिंग में अपनी यात्रा शुरू करना चाहते हों या एक प्रमाणित इंश्योरेंस एडवाइजर बनना चाहते हों, हमारे विशेषज्ञ आपका मार्गदर्शन करने के लिए तैयार हैं.",
    contact_stat_1: "✔ 100% प्रैक्टिकल ट्रेनिंग",
    contact_stat_2: "✔ 1000+ प्रशिक्षित छात्र",
    contact_stat_3: "✔ पुणे और PCMC",
    contact_left_heading: "संपर्क करें",
    contact_left_desc:
      "इंश्योरेंस एडवाइजरी और शेयर मार्केट ट्रेडिंग में अपनी यात्रा शुरू करें। कोर्स विवरण, डेमो सेशन और करियर मार्गदर्शन के लिए हमसे संपर्क करें.",
    contact_location_label: "स्थान",
    contact_location_value: "पुणे और PCMC, महाराष्ट्र",
    contact_phone_label: "फोन",
    contact_email_label: "ईमेल",
    contact_form_heading: "हमें संदेश भेजें",
    contact_ph_name: "आपका नाम",
    contact_ph_email: "आपका ईमेल",
    contact_ph_phone: "फोन नंबर",
    contact_select_default: "कोर्स चुनें",
    contact_select_share: "शेयर मार्केट",
    contact_select_ins: "इंश्योरेंस ट्रेनिंग",
    contact_select_other: "अन्य",
    contact_ph_message: "आपका संदेश",
    contact_submit: "पूछताछ सबमिट करें",
    contact_float_call_title: "अभी कॉल करें",
    contact_float_whatsapp_title: "व्हाट्सऐप",
    gallery_page_title:
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट | इंश्योरेंस और शेयर मार्केट",
    gallery_hero_h1: "हमारी गैलरी",
    gallery_hero_p:
      "हमारे एक्सपर्ट लेक्चर, क्लासरूम सेशन, ट्रेडिंग वर्कशॉप और स्टूडेंट गतिविधियां देखें.",
    gallery_cat_1: "एक्सपर्ट गेस्ट लेक्चर",
    gallery_cat_2: "क्लासरूम ट्रेनिंग सेशन",
    gallery_cat_3: "शेयर मार्केट प्रैक्टिकल ट्रेनिंग",
    gallery_cat_4: "वर्कशॉप और इवेंट्स",
    gallery_cat_5: "सर्टिफिकेट वितरण",
    gallery_ov_1: "गेस्ट लेक्चर सेशन",
    gallery_ov_2: "इंडस्ट्री एक्सपर्ट टॉक",
    gallery_ov_3: "एक्सपर्ट लेक्चर वीडियो",
    gallery_ov_4: "क्लासरूम टीचिंग",
    gallery_ov_5: "स्टूडेंट डिस्कशन",
    gallery_ov_6: "इंटरैक्टिव सेशन",
    gallery_ov_7: "ट्रेनिंग वीडियो",
    gallery_ov_8: "ट्रेडिंग प्रैक्टिस",
    gallery_ov_9: "मार्केट एनालिसिस",
    gallery_ov_10: "लाइव ट्रेडिंग डेमो",
    gallery_ov_11: "फाइनेंस वर्कशॉप",
    gallery_ov_12: "ग्रुप डिस्कशन",
    gallery_ov_13: "ट्रेनिंग इवेंट",
    gallery_ov_14: "सर्टिफिकेट समारोह",
    gallery_ov_15: "स्टूडेंट अचीवमेंट",
    gallery_ov_16: "सक्सेस मोमेंट्स",
    gallery_img_1_alt: "गेस्ट लेक्चर",
    gallery_img_2_alt: "इंडस्ट्री टॉक",
    gallery_img_3_alt: "क्लासरूम टीचिंग",
    gallery_img_4_alt: "स्टूडेंट डिस्कशन",
    gallery_img_5_alt: "इंटरैक्टिव सेशन",
    gallery_img_6_alt: "ट्रेडिंग प्रैक्टिस",
    gallery_img_7_alt: "मार्केट एनालिसिस",
    gallery_img_8_alt: "फाइनेंस वर्कशॉप",
    gallery_img_9_alt: "ग्रुप डिस्कशन",
    gallery_img_10_alt: "ट्रेनिंग इवेंट",
    gallery_img_11_alt: "सर्टिफिकेट समारोह",
    gallery_img_12_alt: "स्टूडेंट अचीवमेंट",
    gallery_float_call_title: "अभी कॉल करें",
    gallery_float_whatsapp_title: "व्हाट्सऐप",
  },
};

const INDEX_FORCE_I18N = {
  en: {
    idx_insurance_program_desc:
      "Build a successful career in Life & General Insurance with practical training, real-world strategies, and professional guidance. Our structured program helps you grow confidently in the insurance industry.",
    idx_share_program_desc:
      "Master stock market trading with practical strategies, live sessions, and technical analysis training. Learn how to trade confidently with professional risk management techniques.",
    idx_career_header_desc:
      "Build a strong professional journey in insurance and stock market with multiple income and career growth opportunities.",
    idx_support_header_desc:
      "We provide complete career assistance to help you succeed in insurance and stock market professions.",
    idx_live_market_desc:
      "Experience real-time trading with professional guidance. Our live sessions help you understand market movements, trading psychology, and practical execution strategies.",
    idx_industry_header_desc:
      "The financial sector in India is expanding rapidly, creating massive opportunities in insurance and stock market careers.",
    idx_industry_card1_desc:
      "Rapid digital transformation and increased policy adoption are driving strong growth in the Indian insurance sector.",
    idx_industry_card2_desc:
      "Millions of new retail investors are entering the stock market, increasing demand for professional trading education.",
    idx_industry_card3_desc:
      "Growing awareness about investments, wealth management, and insurance planning is expanding career opportunities.",
    idx_industry_card4_desc:
      "Careers like Financial Planner, Insurance Advisor, Trader, and Mutual Fund Distributor offer strong income potential.",
    idx_expert_desc:
      "Learn directly from experienced industry professionals. Our expert guest sessions provide real-world insights, practical exposure, and powerful networking opportunities.",
  },
  mr: {
    idx_insurance_program_desc:
      "लाईफ आणि जनरल इन्शुरन्समध्ये प्रॅक्टिकल ट्रेनिंग, वास्तविक धोरणे आणि व्यावसायिक मार्गदर्शनासह यशस्वी करिअर घडवा. आमचा संरचित कार्यक्रम तुम्हाला आत्मविश्वासाने प्रगती करायला मदत करतो.",
    idx_share_program_desc:
      "प्रॅक्टिकल स्ट्रॅटेजीज, लाईव्ह सत्रे आणि टेक्निकल विश्लेषणासह स्टॉक मार्केट ट्रेडिंग शिका. व्यावसायिक रिस्क मॅनेजमेंटसह आत्मविश्वासाने ट्रेड कसा करावा ते जाणून घ्या.",
    idx_career_header_desc:
      "इन्शुरन्स आणि स्टॉक मार्केटमध्ये अनेक उत्पन्न व करिअर वाढीच्या संधींसह मजबूत व्यावसायिक प्रवास घडवा.",
    idx_support_header_desc:
      "इन्शुरन्स आणि स्टॉक मार्केट व्यवसायात यश मिळवण्यासाठी आम्ही संपूर्ण करिअर सहाय्य देतो.",
    idx_live_market_desc:
      "व्यावसायिक मार्गदर्शनासह रिअल-टाइम ट्रेडिंगचा अनुभव घ्या. आमची लाईव्ह सत्रे मार्केट मूव्हमेंट्स, ट्रेडिंग सायकॉलॉजी आणि प्रॅक्टिकल एक्झिक्युशन समजण्यास मदत करतात.",
    idx_industry_header_desc:
      "भारतातील आर्थिक क्षेत्र वेगाने विस्तारत आहे, ज्यामुळे इन्शुरन्स आणि स्टॉक मार्केट करिअरमध्ये मोठ्या संधी निर्माण होत आहेत.",
    idx_industry_card1_desc:
      "वेगवान डिजिटल परिवर्तन आणि वाढती पॉलिसी स्वीकार यामुळे भारतीय इन्शुरन्स क्षेत्रात मजबूत वाढ होत आहे.",
    idx_industry_card2_desc:
      "लाखो नवीन रिटेल गुंतवणूकदार स्टॉक मार्केटमध्ये प्रवेश करत आहेत, त्यामुळे व्यावसायिक ट्रेडिंग शिक्षणाची मागणी वाढत आहे.",
    idx_industry_card3_desc:
      "गुंतवणूक, वेल्थ मॅनेजमेंट आणि इन्शुरन्स प्लॅनिंगबद्दल वाढती जागरूकता करिअरच्या संधी वाढवत आहे.",
    idx_industry_card4_desc:
      "फायनान्शियल प्लॅनर, इन्शुरन्स सल्लागार, ट्रेडर आणि म्युच्युअल फंड वितरक यांसारखी करिअर उत्तम उत्पन्न क्षमता देतात.",
    idx_expert_desc:
      "अनुभवी उद्योग व्यावसायिकांकडून थेट शिका. आमची अतिथी सत्रे वास्तवदर्शी इनसाइट्स, प्रॅक्टिकल एक्स्पोजर आणि मजबूत नेटवर्किंग संधी देतात.",
  },
  hi: {
    idx_insurance_program_desc:
      "लाइफ और जनरल इंश्योरेंस में प्रैक्टिकल ट्रेनिंग, रियल-वर्ल्ड स्ट्रैटेजीज और प्रोफेशनल मार्गदर्शन के साथ सफल करियर बनाएं। हमारा संरचित प्रोग्राम आपको आत्मविश्वास के साथ आगे बढ़ने में मदद करता है।",
    idx_share_program_desc:
      "प्रैक्टिकल स्ट्रैटेजीज, लाइव सेशंस और टेक्निकल एनालिसिस ट्रेनिंग के साथ स्टॉक मार्केट ट्रेडिंग सीखें। प्रोफेशनल रिस्क मैनेजमेंट के साथ आत्मविश्वास से ट्रेड करना सीखें।",
    idx_career_header_desc:
      "इंश्योरेंस और स्टॉक मार्केट में आय और करियर ग्रोथ की कई संभावनाओं के साथ मजबूत प्रोफेशनल यात्रा बनाएं।",
    idx_support_header_desc:
      "इंश्योरेंस और स्टॉक मार्केट प्रोफेशन में सफलता के लिए हम संपूर्ण करियर सहायता प्रदान करते हैं।",
    idx_live_market_desc:
      "प्रोफेशनल मार्गदर्शन के साथ रियल-टाइम ट्रेडिंग का अनुभव करें। हमारे लाइव सेशंस मार्केट मूवमेंट, ट्रेडिंग साइकोलॉजी और प्रैक्टिकल एक्जीक्यूशन को समझने में मदद करते हैं।",
    idx_industry_header_desc:
      "भारत का वित्तीय क्षेत्र तेजी से बढ़ रहा है, जिससे इंश्योरेंस और स्टॉक मार्केट करियर में बड़े अवसर बन रहे हैं।",
    idx_industry_card1_desc:
      "तेज डिजिटल परिवर्तन और बढ़ती पॉलिसी अपनाने की दर भारतीय इंश्योरेंस सेक्टर में मजबूत वृद्धि ला रही है।",
    idx_industry_card2_desc:
      "लाखों नए रिटेल निवेशक स्टॉक मार्केट में प्रवेश कर रहे हैं, जिससे प्रोफेशनल ट्रेडिंग शिक्षा की मांग बढ़ रही है।",
    idx_industry_card3_desc:
      "निवेश, वेल्थ मैनेजमेंट और इंश्योरेंस प्लानिंग के प्रति बढ़ती जागरूकता करियर अवसरों का विस्तार कर रही है।",
    idx_industry_card4_desc:
      "फाइनेंशियल प्लानर, इंश्योरेंस एडवाइजर, ट्रेडर और म्यूचुअल फंड डिस्ट्रीब्यूटर जैसे करियर मजबूत आय क्षमता प्रदान करते हैं।",
    idx_expert_desc:
      "अनुभवी इंडस्ट्री प्रोफेशनल्स से सीधे सीखें। हमारे गेस्ट सेशंस रियल-वर्ल्ड इनसाइट्स, प्रैक्टिकल एक्सपोजर और मजबूत नेटवर्किंग अवसर प्रदान करते हैं।",
  },
};

const ABOUT_FORCE_I18N = {
  en: {
    about_hero_heading_prefix: "About",
    about_hero_heading_name: "Sohum Financial Planner Institute",
    about_hero_desc_1:
      "Sohum Financial Planner Institute is a leading insurance and share market training institute in Pune & PCMC. We provide professional insurance advisor training, stock market courses, and advanced technical analysis programs.",
    about_hero_desc_2:
      "Our practical and career-focused training approach helps students and financial professionals build strong market knowledge with real-time trading exposure.",
    about_point_1: "✔ Live Market Practical Sessions",
    about_point_2: "✔ Expert Mentorship & Guidance",
    about_point_3: "✔ Career-Focused Certification Programs",
    about_director_heading: "WORDS FROM DIRECTOR",
    about_director_desc_1:
      "At Sohum Financial Planner Institute, our mission is to empower individuals with practical financial knowledge and real-world market skills. Structured learning and disciplined execution are the keys to success in today's financial environment.",
    about_director_desc_2:
      "We provide professional insurance advisor training, share market education, and advanced technical analysis programs focused on live market exposure and risk management.",
    about_director_label: "Director",
    about_team_heading: "Our Leadership Team",
    about_team_subtitle:
      "Expert mentors guiding your journey in Insurance & Share Market Training",
    about_role_1: "Founder & Chief Mentor",
    about_role_2: "Technical Analysis Expert",
    about_role_3: "Insurance Training Specialist",
  },
  mr: {
    about_hero_heading_prefix: "बद्दल",
    about_hero_heading_name: "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट",
    about_hero_desc_1:
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूट ही पुणे आणि पीसीएमसीमधील अग्रगण्य इन्शुरन्स व शेअर मार्केट ट्रेनिंग संस्था आहे. आम्ही व्यावसायिक इन्शुरन्स सल्लागार प्रशिक्षण, स्टॉक मार्केट कोर्सेस आणि प्रगत टेक्निकल अॅनालिसिस प्रोग्राम्स देतो.",
    about_hero_desc_2:
      "आमचा प्रॅक्टिकल आणि करिअर-केंद्रित प्रशिक्षण दृष्टिकोन विद्यार्थी व आर्थिक व्यावसायिकांना रिअल-टाइम ट्रेडिंग एक्स्पोजरसह मजबूत मार्केट ज्ञान देतो.",
    about_point_1: "✔ लाईव्ह मार्केट प्रॅक्टिकल सत्रे",
    about_point_2: "✔ तज्ज्ञ मार्गदर्शन",
    about_point_3: "✔ करिअर-केंद्रित प्रमाणपत्र प्रोग्राम्स",
    about_director_heading: "संचालकांचे शब्द",
    about_director_desc_1:
      "सोहम फायनान्शियल प्लॅनर इन्स्टिट्यूटमध्ये आमचे ध्येय व्यक्तींना प्रॅक्टिकल आर्थिक ज्ञान आणि वास्तविक मार्केट कौशल्यांनी सक्षम करणे आहे. संरचित शिक्षण आणि शिस्तबद्ध अंमलबजावणी ही आजच्या आर्थिक वातावरणातील यशाची गुरुकिल्ली आहे.",
    about_director_desc_2:
      "आम्ही व्यावसायिक इन्शुरन्स सल्लागार प्रशिक्षण, शेअर मार्केट शिक्षण आणि लाईव्ह मार्केट एक्स्पोजर व रिस्क मॅनेजमेंटवर आधारित प्रगत टेक्निकल अॅनालिसिस प्रोग्राम्स देतो.",
    about_director_label: "संचालक",
    about_team_heading: "आमची नेतृत्व टीम",
    about_team_subtitle:
      "इन्शुरन्स आणि शेअर मार्केट ट्रेनिंगमधील तुमच्या प्रवासाला दिशा देणारे तज्ज्ञ मार्गदर्शक",
    about_role_1: "संस्थापक आणि मुख्य मार्गदर्शक",
    about_role_2: "टेक्निकल अॅनालिसिस तज्ज्ञ",
    about_role_3: "इन्शुरन्स ट्रेनिंग विशेषज्ञ",
  },
  hi: {
    about_hero_heading_prefix: "के बारे में",
    about_hero_heading_name: "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट",
    about_hero_desc_1:
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट पुणे और पीसीएमसी का एक अग्रणी इंश्योरेंस और शेयर मार्केट ट्रेनिंग संस्थान है। हम प्रोफेशनल इंश्योरेंस एडवाइजर ट्रेनिंग, स्टॉक मार्केट कोर्स और एडवांस टेक्निकल एनालिसिस प्रोग्राम प्रदान करते हैं।",
    about_hero_desc_2:
      "हमारा प्रैक्टिकल और करियर-केंद्रित प्रशिक्षण दृष्टिकोण छात्रों और वित्तीय प्रोफेशनल्स को रियल-टाइम ट्रेडिंग एक्सपोजर के साथ मजबूत मार्केट ज्ञान देता है।",
    about_point_1: "✔ लाइव मार्केट प्रैक्टिकल सेशंस",
    about_point_2: "✔ एक्सपर्ट मेंटरशिप और गाइडेंस",
    about_point_3: "✔ करियर-फोकस्ड सर्टिफिकेशन प्रोग्राम्स",
    about_director_heading: "निदेशक के शब्द",
    about_director_desc_1:
      "सोहम फाइनेंशियल प्लानर इंस्टीट्यूट में हमारा मिशन लोगों को प्रैक्टिकल वित्तीय ज्ञान और वास्तविक मार्केट कौशल से सशक्त बनाना है। संरचित सीख और अनुशासित कार्यान्वयन आज के वित्तीय वातावरण में सफलता की कुंजी है।",
    about_director_desc_2:
      "हम प्रोफेशनल इंश्योरेंस एडवाइजर ट्रेनिंग, शेयर मार्केट शिक्षा और लाइव मार्केट एक्सपोजर व रिस्क मैनेजमेंट पर केंद्रित एडवांस टेक्निकल एनालिसिस प्रोग्राम प्रदान करते हैं।",
    about_director_label: "निदेशक",
    about_team_heading: "हमारी लीडरशिप टीम",
    about_team_subtitle:
      "इंश्योरेंस और शेयर मार्केट ट्रेनिंग में आपकी यात्रा का मार्गदर्शन करने वाले विशेषज्ञ मेंटर्स",
    about_role_1: "संस्थापक और मुख्य मेंटर",
    about_role_2: "टेक्निकल एनालिसिस एक्सपर्ट",
    about_role_3: "इंश्योरेंस ट्रेनिंग विशेषज्ञ",
  },
};

const SHARE1_FORCE_I18N = {
  en: {
    share1_hero_title: "PROGRAM DETAILS",
    share1_hero_subtext:
      "Master in Market Structure & Build Professional Trading Frameworks with Structured, Practical Training",
    share1_breadcrumb_home: "Home",
    share1_breadcrumb_active: "PROGRAM DETAILS",
    share1_trainer_alt: "Trainer",
    share1_intro_title:
      "Professional Financial Education Focused on Discipline, Structure & Market Clarity",
    share1_intro_desc_1:
      "At Sohum Financial Planners Institute, we are committed to delivering structured and ethically positioned financial education. Our programs are designed to develop analytical capability, disciplined execution, and professional trading frameworks not speculation or shortcuts.",
    share1_intro_desc_2:
      "The Trading Strategy Program is a comprehensive two-month structured training program, guided by experienced trainer Ravindra Sukare Sir, designed to build real trading competence through systematic learning.",
    share1_overview_card_title: "Program Overview",
    share1_overview_total_duration_label: "Total Duration",
    share1_overview_total_duration_value: "2 Months Structured Training",
    share1_overview_classroom_label: "Classroom Training",
    share1_overview_classroom_value: "5 Hours Intensive Sessions",
    share1_overview_sessions_label: "Total Sessions",
    share1_overview_sessions_value: "3 Core Structured Sessions",
    share1_overview_support_label: "Post-Training Support",
    share1_overview_support_value: "1 Month Review & Consultation",
    share1_training_ensures_title: "This Training Ensures",
    share1_training_ensures_1: "Concept clarity",
    share1_training_ensures_2: "Practical application",
    share1_training_ensures_3: "Structured review",
    share1_training_ensures_4: "Ongoing refinement of trading understanding",
    share1_training_note:
      "The additional one-month review consultation helps participants strengthen implementation discipline and address practical doubts after core learning.",
    share1_overview_section_title: "Program Overview",
    share1_challenge_title: "The Challenge",
    share1_challenge_1: "Lack of structured knowledge",
    share1_challenge_2: "Emotional and impulsive decisions",
    share1_challenge_3: "Poor capital management",
    share1_challenge_4: "Dependency on tips or external opinions",
    share1_challenge_5: "Inconsistent performance",
    share1_solution_1: "Systematic market structure education",
    share1_solution_2: "Professional price behaviour interpretation",
    share1_solution_3: "Derivatives foundation",
    share1_solution_4: "Risk-controlled execution frameworks",
    share1_solution_5: "Trading psychology development",
    share1_highlight_note:
      "The goal is to transition from random execution to structured trading methodology.",
    share1_overview_image_alt: "Trading Session",
    share1_social_title: "We're In The Social",
    share1_pamphlet_alt: "Business Growth Workshop Pamphlet",
    share1_attend_image_alt: "Financial Training Session",
    share1_attend_title: "Who Should Attend",
    share1_attend_1: "Beginners seeking a structured foundation",
    share1_attend_2: "Intermediate traders lacking consistency",
    share1_attend_3: "Traders struggling with discipline",
    share1_attend_4: "Individuals wanting professional trading frameworks",
    share1_attend_5: "Learners serious about systematic skill-building",
    share1_curriculum_title: "Curriculum Structure",
    share1_module1_title: "Module 1 - Foundation & Market Structure",
    share1_module1_1: "Market participants & price drivers",
    share1_module1_2: "Trend identification",
    share1_module1_3: "Structural break concepts",
    share1_module1_4: "Support & resistance logic",
    share1_module1_note: "A strong base for all future analysis.",
    share1_module2_title: "Module 2 - Price Action & Professional Frameworks",
    share1_module2_1: "Advanced price action concepts",
    share1_module2_2: "Entry & exit structuring",
    share1_module2_3: "Rule-based trade planning",
    share1_module2_4: "Professional execution models",
    share1_module2_note: "Learn how to convert analysis into disciplined action.",
    share1_module3_title: "Module 3 - Futures, Options & Elliott Wave Concepts",
    share1_module3_1: "Futures market structure",
    share1_module3_2: "Options fundamentals",
    share1_module3_3: "Risk exposure understanding",
    share1_module3_4: "Wave principle applications",
    share1_module3_note: "Build broader market comprehension.",
    share1_module4_title:
      "Module 4 - Risk Management, Money Management & Trading Psychology",
    share1_module4_1: "Risk-reward frameworks",
    share1_module4_2: "Position sizing systems",
    share1_module4_3: "Capital preservation logic",
    share1_module4_4: "Emotional discipline training",
    share1_module4_note: "Focus on sustainability and long-term development.",
    share1_outcomes_title: "Learning Outcomes",
    share1_outcomes_subtext: "Participants will develop:",
    share1_outcomes_1_title: "Clear Understanding of Market Structure",
    share1_outcomes_1_desc:
      "Understand how trends form, reverse, and consolidate.",
    share1_outcomes_2_title: "Price Behaviour Reading Skills",
    share1_outcomes_2_desc:
      "Learn to interpret price action logically and confidently.",
    share1_outcomes_3_title: "Futures & Options Foundation",
    share1_outcomes_3_desc:
      "Build conceptual clarity on derivatives markets and risk exposure.",
    share1_outcomes_4_title: "Elliott Wave Concepts",
    share1_outcomes_4_desc:
      "Understand wave principles within a structured analytical framework.",
    share1_outcomes_5_title: "Risk & Money Management Systems",
    share1_outcomes_5_desc:
      "Apply capital protection rules and position sizing models.",
    share1_outcomes_6_title: "Trading Discipline & Psychology",
    share1_outcomes_6_desc:
      "Develop emotional control and rule-based execution habits.",
    share1_outcomes_footer_note: "This program builds skills - not income promises.",
    share1_trainer_profile_alt: "Trainer Profile",
    share1_trainer_title: "Trainer Profile",
    share1_trainer_name: "Ravindra Sukare Sir",
    share1_trainer_desc_1:
      "The program is conducted under the guidance of Ravindra Sukare Sir, who emphasizes structured methodology, disciplined execution, and risk-conscious trading education.",
    share1_trainer_desc_2:
      "His approach focuses on clarity, practicality, and systematic development rather than speculation.",
    share1_faq_title: "Frequently Asked Questions",
    share1_faq_q1: "What is the duration of the program?",
    share1_faq_a1:
      "The program is conducted over a structured two-month training period including post-training review support.",
    share1_faq_q2: "Is this program suitable for beginners?",
    share1_faq_a2:
      "Yes. The course starts with foundational market structure concepts and gradually builds professional trading frameworks.",
    share1_faq_q3: "Will this program cover Futures & Options?",
    share1_faq_a3:
      "Yes. The curriculum includes derivatives foundation along with risk-controlled execution models.",
    share1_faq_q4: "Is post-training support provided?",
    share1_faq_a4:
      "Yes. Participants receive review consultation and guidance after core training sessions.",
    share1_banner_top: "MASTER THE",
    share1_banner_title_1: "SHARE MARKET",
    share1_banner_title_2: "TRADING",
    share1_banner_subtitle:
      "Professional Stock Market & Technical Analysis Training",
    share1_banner_li1: "Live Market Practical Training",
    share1_banner_li2: "Intraday & Swing Trading Strategies",
    share1_banner_li3: "Technical & Chart Pattern Analysis",
    share1_banner_call: "Call Now:",
    share1_banner_img_alt: "Share Market Training",
    share1_sticky_demo: "Free Demo Session",
  },
  mr: {
    share1_hero_title: "प्रोग्राम तपशील",
    share1_hero_subtext:
      "मार्केट स्ट्रक्चरमध्ये प्रभुत्व मिळवा आणि संरचित, प्रॅक्टिकल प्रशिक्षणासह व्यावसायिक ट्रेडिंग फ्रेमवर्क तयार करा",
    share1_breadcrumb_home: "मुख्यपृष्ठ",
    share1_breadcrumb_active: "प्रोग्राम तपशील",
    share1_trainer_alt: "प्रशिक्षक",
    share1_intro_title:
      "शिस्त, रचना आणि मार्केट स्पष्टतेवर आधारित व्यावसायिक आर्थिक शिक्षण",
    share1_intro_desc_1:
      "सोहम फायनान्शियल प्लॅनर्स इन्स्टिट्यूटमध्ये आम्ही संरचित आणि नैतिक आर्थिक शिक्षण देण्यास कटिबद्ध आहोत. आमचे प्रोग्राम विश्लेषण क्षमता, शिस्तबद्ध अंमलबजावणी आणि व्यावसायिक ट्रेडिंग फ्रेमवर्क विकसित करतात.",
    share1_intro_desc_2:
      "ट्रेडिंग स्ट्रॅटेजी प्रोग्राम हा दोन महिन्यांचा संरचित अभ्यासक्रम आहे, जो रविंद्र सुकरे सर यांच्या मार्गदर्शनाखाली पद्धतशीर शिकण्याद्वारे प्रत्यक्ष ट्रेडिंग कौशल्य विकसित करतो.",
    share1_overview_card_title: "प्रोग्राम ओव्हरव्ह्यू",
    share1_overview_total_duration_label: "एकूण कालावधी",
    share1_overview_total_duration_value: "२ महिन्यांचे संरचित प्रशिक्षण",
    share1_overview_classroom_label: "क्लासरूम प्रशिक्षण",
    share1_overview_classroom_value: "५ तासांची सघन सत्रे",
    share1_overview_sessions_label: "एकूण सत्रे",
    share1_overview_sessions_value: "३ मुख्य संरचित सत्रे",
    share1_overview_support_label: "प्रशिक्षणानंतरचे समर्थन",
    share1_overview_support_value: "१ महिन्याचे पुनरावलोकन आणि सल्लामसलत",
    share1_training_ensures_title: "हे प्रशिक्षण सुनिश्चित करते",
    share1_training_ensures_1: "संकल्पनांची स्पष्टता",
    share1_training_ensures_2: "प्रॅक्टिकल अनुप्रयोग",
    share1_training_ensures_3: "संरचित पुनरावलोकन",
    share1_training_ensures_4: "ट्रेडिंग समज सतत परिष्कृत करणे",
    share1_training_note:
      "अतिरिक्त एका महिन्याचे पुनरावलोकन सत्र सहभागींना शिस्तबद्ध अंमलबजावणी मजबूत करण्यास मदत करते.",
    share1_overview_section_title: "प्रोग्राम ओव्हरव्ह्यू",
    share1_challenge_title: "आव्हान",
    share1_challenge_1: "संरचित ज्ञानाचा अभाव",
    share1_challenge_2: "भावनिक आणि उतावळे निर्णय",
    share1_challenge_3: "कमकुवत भांडवल व्यवस्थापन",
    share1_challenge_4: "टिप्स किंवा बाह्य मतांवर अवलंबित्व",
    share1_challenge_5: "असातत्यपूर्ण कामगिरी",
    share1_solution_1: "पद्धतशीर मार्केट स्ट्रक्चर शिक्षण",
    share1_solution_2: "व्यावसायिक किंमत वर्तन समज",
    share1_solution_3: "डेरिव्हेटिव्ह्जची पायाभूत माहिती",
    share1_solution_4: "रिस्क-कंट्रोल्ड अंमलबजावणी फ्रेमवर्क",
    share1_solution_5: "ट्रेडिंग सायकोलॉजी विकास",
    share1_highlight_note:
      "उद्दिष्ट म्हणजे अनियमित ट्रेडिंगवरून संरचित पद्धतीकडे वाटचाल करणे.",
    share1_overview_image_alt: "ट्रेडिंग सत्र",
    share1_social_title: "सोशलवर आमची उपस्थिती",
    share1_pamphlet_alt: "वर्कशॉप पत्रक",
    share1_attend_image_alt: "आर्थिक प्रशिक्षण सत्र",
    share1_attend_title: "कोण सहभागी व्हावे",
    share1_attend_1: "संरचित पाया शोधणारे नवशिके",
    share1_attend_2: "सातत्य नसलेले मध्यमस्तरीय ट्रेडर्स",
    share1_attend_3: "शिस्तीशी संघर्ष करणारे ट्रेडर्स",
    share1_attend_4: "व्यावसायिक ट्रेडिंग फ्रेमवर्क इच्छिणारे",
    share1_attend_5: "पद्धतशीर कौशल्य विकासावर लक्ष देणारे",
    share1_curriculum_title: "करिक्युलम रचना",
    share1_module1_title: "मॉड्यूल १ - पाया आणि मार्केट स्ट्रक्चर",
    share1_module1_1: "मार्केट सहभागी आणि किंमत चालक",
    share1_module1_2: "ट्रेंड ओळख",
    share1_module1_3: "स्ट्रक्चरल ब्रेक संकल्पना",
    share1_module1_4: "सपोर्ट आणि रेझिस्टन्स लॉजिक",
    share1_module1_note: "पुढील सर्व विश्लेषणासाठी मजबूत पाया.",
    share1_module2_title: "मॉड्यूल २ - प्राइस अॅक्शन आणि व्यावसायिक फ्रेमवर्क",
    share1_module2_1: "प्रगत प्राइस अॅक्शन संकल्पना",
    share1_module2_2: "एंट्री आणि एग्झिट रचना",
    share1_module2_3: "नियमाधारित ट्रेड नियोजन",
    share1_module2_4: "व्यावसायिक अंमलबजावणी मॉडेल्स",
    share1_module2_note: "विश्लेषणाला शिस्तबद्ध कृतीत रूपांतर करायला शिका.",
    share1_module3_title: "मॉड्यूल ३ - फ्युचर्स, ऑप्शन्स आणि इलियट वेव्ह संकल्पना",
    share1_module3_1: "फ्युचर्स मार्केट स्ट्रक्चर",
    share1_module3_2: "ऑप्शन्स मूलतत्त्वे",
    share1_module3_3: "रिस्क एक्सपोजर समज",
    share1_module3_4: "वेव्ह प्रिन्सिपल अनुप्रयोग",
    share1_module3_note: "मार्केटची व्यापक समज विकसित करा.",
    share1_module4_title:
      "मॉड्यूल ४ - रिस्क मॅनेजमेंट, मनी मॅनेजमेंट आणि ट्रेडिंग सायकोलॉजी",
    share1_module4_1: "रिस्क-रिवार्ड फ्रेमवर्क",
    share1_module4_2: "पोझिशन साइजिंग सिस्टम्स",
    share1_module4_3: "भांडवल संरक्षण लॉजिक",
    share1_module4_4: "भावनिक शिस्त प्रशिक्षण",
    share1_module4_note: "टिकाऊ आणि दीर्घकालीन विकासावर लक्ष.",
    share1_outcomes_title: "शिकण्याचे परिणाम",
    share1_outcomes_subtext: "सहभागींमध्ये विकसित होईल:",
    share1_outcomes_1_title: "मार्केट स्ट्रक्चरची स्पष्ट समज",
    share1_outcomes_1_desc: "ट्रेंड कसे तयार होतात आणि बदलतात हे समजेल.",
    share1_outcomes_2_title: "किंमत वर्तन वाचन कौशल्य",
    share1_outcomes_2_desc: "प्राइस अॅक्शनचे तर्कशुद्ध विश्लेषण करणे शिकाल.",
    share1_outcomes_3_title: "फ्युचर्स आणि ऑप्शन्सचा पाया",
    share1_outcomes_3_desc: "डेरिव्हेटिव्ह्ज आणि रिस्क एक्सपोजरची संकल्पना स्पष्ट होईल.",
    share1_outcomes_4_title: "इलियट वेव्ह संकल्पना",
    share1_outcomes_4_desc: "वेव्ह तत्त्वे संरचित विश्लेषणात वापरता येतील.",
    share1_outcomes_5_title: "रिस्क आणि मनी मॅनेजमेंट सिस्टम्स",
    share1_outcomes_5_desc: "भांडवल संरक्षण व पोझिशन साइजिंग नियम लागू करता येतील.",
    share1_outcomes_6_title: "ट्रेडिंग शिस्त आणि सायकोलॉजी",
    share1_outcomes_6_desc: "भावनिक नियंत्रण आणि नियमाधारित अंमलबजावणी विकसित होईल.",
    share1_outcomes_footer_note: "हा प्रोग्राम कौशल्य विकसित करतो, उत्पन्नाची हमी नाही.",
    share1_trainer_profile_alt: "प्रशिक्षक प्रोफाइल",
    share1_trainer_title: "ट्रेनर प्रोफाइल",
    share1_trainer_name: "रविंद्र सुकरे सर",
    share1_trainer_desc_1:
      "हा प्रोग्राम रविंद्र सुकरे सर यांच्या मार्गदर्शनाखाली घेतला जातो, ज्यात शिस्तबद्ध आणि संरचित ट्रेडिंगवर भर असतो.",
    share1_trainer_desc_2:
      "त्यांचा दृष्टिकोन स्पष्टता, प्रॅक्टिकलिटी आणि पद्धतशीर विकासावर आधारित आहे.",
    share1_faq_title: "वारंवार विचारले जाणारे प्रश्न",
    share1_faq_q1: "प्रोग्रामचा कालावधी किती आहे?",
    share1_faq_a1:
      "हा प्रोग्राम दोन महिन्यांच्या संरचित प्रशिक्षणासह आणि नंतरच्या पुनरावलोकन समर्थनासह घेतला जातो.",
    share1_faq_q2: "हा प्रोग्राम नवशिक्यांसाठी योग्य आहे का?",
    share1_faq_a2:
      "होय. कोर्सची सुरुवात मूलभूत संकल्पनांपासून होते आणि पुढे व्यावसायिक फ्रेमवर्कपर्यंत जाते.",
    share1_faq_q3: "या प्रोग्राममध्ये फ्युचर्स आणि ऑप्शन्स समाविष्ट आहेत का?",
    share1_faq_a3:
      "होय. करिक्युलममध्ये डेरिव्हेटिव्ह्जचा पाया आणि रिस्क-कंट्रोल्ड अंमलबजावणी समाविष्ट आहे.",
    share1_faq_q4: "प्रशिक्षणानंतर मार्गदर्शन मिळते का?",
    share1_faq_a4:
      "होय. कोअर प्रशिक्षणानंतर पुनरावलोकन सल्लामसलत आणि मार्गदर्शन दिले जाते.",
    share1_banner_top: "मास्टर करा",
    share1_banner_title_1: "शेअर मार्केट",
    share1_banner_title_2: "ट्रेडिंग",
    share1_banner_subtitle: "व्यावसायिक स्टॉक मार्केट आणि टेक्निकल अॅनालिसिस प्रशिक्षण",
    share1_banner_li1: "लाइव्ह मार्केट प्रॅक्टिकल प्रशिक्षण",
    share1_banner_li2: "इंट्राडे आणि स्विंग ट्रेडिंग स्ट्रॅटेजीज",
    share1_banner_li3: "टेक्निकल आणि चार्ट पॅटर्न विश्लेषण",
    share1_banner_call: "आता कॉल करा:",
    share1_banner_img_alt: "शेअर मार्केट प्रशिक्षण",
    share1_sticky_demo: "फ्री डेमो सेशन",
  },
  hi: {
    share1_hero_title: "प्रोग्राम विवरण",
    share1_hero_subtext:
      "मार्केट स्ट्रक्चर में महारत हासिल करें और संरचित, प्रैक्टिकल ट्रेनिंग के साथ प्रोफेशनल ट्रेडिंग फ्रेमवर्क बनाएं",
    share1_breadcrumb_home: "होम",
    share1_breadcrumb_active: "प्रोग्राम विवरण",
    share1_trainer_alt: "ट्रेनर",
    share1_intro_title:
      "अनुशासन, संरचना और मार्केट स्पष्टता पर आधारित प्रोफेशनल वित्तीय शिक्षा",
    share1_intro_desc_1:
      "सोहम फाइनेंशियल प्लानर्स इंस्टीट्यूट में हम संरचित और नैतिक वित्तीय शिक्षा देने के लिए प्रतिबद्ध हैं। हमारे प्रोग्राम विश्लेषण क्षमता, अनुशासित निष्पादन और प्रोफेशनल ट्रेडिंग फ्रेमवर्क विकसित करते हैं।",
    share1_intro_desc_2:
      "ट्रेडिंग स्ट्रैटेजी प्रोग्राम दो महीने का संरचित प्रशिक्षण है, जो रविंद्र सुकरे सर के मार्गदर्शन में वास्तविक ट्रेडिंग कौशल विकसित करता है।",
    share1_overview_card_title: "प्रोग्राम ओवरव्यू",
    share1_overview_total_duration_label: "कुल अवधि",
    share1_overview_total_duration_value: "2 महीने का संरचित प्रशिक्षण",
    share1_overview_classroom_label: "क्लासरूम ट्रेनिंग",
    share1_overview_classroom_value: "5 घंटे के इंटेंसिव सेशन",
    share1_overview_sessions_label: "कुल सेशन",
    share1_overview_sessions_value: "3 मुख्य संरचित सेशन",
    share1_overview_support_label: "पोस्ट-ट्रेनिंग सपोर्ट",
    share1_overview_support_value: "1 महीने का रिव्यू और कंसल्टेशन",
    share1_training_ensures_title: "यह ट्रेनिंग सुनिश्चित करती है",
    share1_training_ensures_1: "कांसेप्ट क्लैरिटी",
    share1_training_ensures_2: "प्रैक्टिकल एप्लिकेशन",
    share1_training_ensures_3: "संरचित समीक्षा",
    share1_training_ensures_4: "ट्रेडिंग समझ का निरंतर सुधार",
    share1_training_note:
      "अतिरिक्त एक महीने का रिव्यू कंसल्टेशन प्रतिभागियों को अनुशासन मजबूत करने में मदद करता है।",
    share1_overview_section_title: "प्रोग्राम ओवरव्यू",
    share1_challenge_title: "चुनौती",
    share1_challenge_1: "संरचित ज्ञान की कमी",
    share1_challenge_2: "भावनात्मक और आवेगी निर्णय",
    share1_challenge_3: "कमजोर कैपिटल मैनेजमेंट",
    share1_challenge_4: "टिप्स या बाहरी राय पर निर्भरता",
    share1_challenge_5: "असंगत प्रदर्शन",
    share1_solution_1: "सिस्टेमैटिक मार्केट स्ट्रक्चर शिक्षा",
    share1_solution_2: "प्रोफेशनल प्राइस बिहेवियर इंटरप्रिटेशन",
    share1_solution_3: "डेरिवेटिव्स फाउंडेशन",
    share1_solution_4: "रिस्क-कंट्रोल्ड एक्जीक्यूशन फ्रेमवर्क",
    share1_solution_5: "ट्रेडिंग साइकोलॉजी विकास",
    share1_highlight_note:
      "लक्ष्य अनियमित ट्रेडिंग से संरचित ट्रेडिंग पद्धति की ओर बढ़ना है।",
    share1_overview_image_alt: "ट्रेडिंग सेशन",
    share1_social_title: "हम सोशल पर हैं",
    share1_pamphlet_alt: "वर्कशॉप पेम्फलेट",
    share1_attend_image_alt: "वित्तीय ट्रेनिंग सेशन",
    share1_attend_title: "कौन शामिल हो",
    share1_attend_1: "संरचित नींव चाहने वाले बिगिनर्स",
    share1_attend_2: "कंसिस्टेंसी की कमी वाले इंटरमीडिएट ट्रेडर्स",
    share1_attend_3: "अनुशासन में संघर्ष करने वाले ट्रेडर्स",
    share1_attend_4: "प्रोफेशनल ट्रेडिंग फ्रेमवर्क चाहने वाले लोग",
    share1_attend_5: "सिस्टेमैटिक स्किल-बिल्डिंग के प्रति गंभीर शिक्षार्थी",
    share1_curriculum_title: "करिकुलम संरचना",
    share1_module1_title: "मॉड्यूल 1 - फाउंडेशन और मार्केट स्ट्रक्चर",
    share1_module1_1: "मार्केट प्रतिभागी और प्राइस ड्राइवर्स",
    share1_module1_2: "ट्रेंड पहचान",
    share1_module1_3: "स्ट्रक्चरल ब्रेक कांसेप्ट्स",
    share1_module1_4: "सपोर्ट और रेजिस्टेंस लॉजिक",
    share1_module1_note: "आगे के विश्लेषण के लिए मजबूत आधार।",
    share1_module2_title: "मॉड्यूल 2 - प्राइस एक्शन और प्रोफेशनल फ्रेमवर्क",
    share1_module2_1: "एडवांस प्राइस एक्शन कांसेप्ट्स",
    share1_module2_2: "एंट्री और एग्जिट स्ट्रक्चरिंग",
    share1_module2_3: "रूल-बेस्ड ट्रेड प्लानिंग",
    share1_module2_4: "प्रोफेशनल एक्जीक्यूशन मॉडल्स",
    share1_module2_note: "विश्लेषण को अनुशासित एक्शन में बदलना सीखें।",
    share1_module3_title: "मॉड्यूल 3 - फ्यूचर्स, ऑप्शंस और एलियट वेव कांसेप्ट्स",
    share1_module3_1: "फ्यूचर्स मार्केट स्ट्रक्चर",
    share1_module3_2: "ऑप्शंस फंडामेंटल्स",
    share1_module3_3: "रिस्क एक्सपोजर समझ",
    share1_module3_4: "वेव प्रिंसिपल एप्लिकेशन",
    share1_module3_note: "मार्केट की व्यापक समझ विकसित करें।",
    share1_module4_title:
      "मॉड्यूल 4 - रिस्क मैनेजमेंट, मनी मैनेजमेंट और ट्रेडिंग साइकोलॉजी",
    share1_module4_1: "रिस्क-रिवार्ड फ्रेमवर्क",
    share1_module4_2: "पोजीशन साइजिंग सिस्टम्स",
    share1_module4_3: "कैपिटल प्रिजर्वेशन लॉजिक",
    share1_module4_4: "इमोशनल डिसिप्लिन ट्रेनिंग",
    share1_module4_note: "सस्टेनेबिलिटी और लॉन्ग-टर्म डेवलपमेंट पर फोकस।",
    share1_outcomes_title: "लर्निंग आउटकम्स",
    share1_outcomes_subtext: "प्रतिभागियों में विकसित होगा:",
    share1_outcomes_1_title: "मार्केट स्ट्रक्चर की स्पष्ट समझ",
    share1_outcomes_1_desc: "ट्रेंड कैसे बनते, बदलते और स्थिर होते हैं समझें।",
    share1_outcomes_2_title: "प्राइस बिहेवियर रीडिंग स्किल्स",
    share1_outcomes_2_desc: "प्राइस एक्शन को तर्कसंगत रूप से पढ़ना सीखें।",
    share1_outcomes_3_title: "फ्यूचर्स और ऑप्शंस फाउंडेशन",
    share1_outcomes_3_desc: "डेरिवेटिव्स और रिस्क एक्सपोजर पर स्पष्ट समझ बनाएं।",
    share1_outcomes_4_title: "एलियट वेव कांसेप्ट्स",
    share1_outcomes_4_desc: "संरचित विश्लेषण में वेव सिद्धांतों का उपयोग सीखें।",
    share1_outcomes_5_title: "रिस्क और मनी मैनेजमेंट सिस्टम्स",
    share1_outcomes_5_desc: "कैपिटल सुरक्षा और पोजीशन साइजिंग नियम लागू करें।",
    share1_outcomes_6_title: "ट्रेडिंग डिसिप्लिन और साइकोलॉजी",
    share1_outcomes_6_desc: "इमोशनल कंट्रोल और रूल-बेस्ड एक्जीक्यूशन विकसित करें।",
    share1_outcomes_footer_note: "यह प्रोग्राम कौशल बनाता है, आय का वादा नहीं करता।",
    share1_trainer_profile_alt: "ट्रेनर प्रोफाइल",
    share1_trainer_title: "ट्रेनर प्रोफाइल",
    share1_trainer_name: "रविंद्र सुकरे सर",
    share1_trainer_desc_1:
      "यह प्रोग्राम रविंद्र सुकरे सर के मार्गदर्शन में संचालित होता है, जो संरचित और अनुशासित ट्रेडिंग शिक्षा पर जोर देते हैं।",
    share1_trainer_desc_2:
      "उनका दृष्टिकोण स्पष्टता, प्रैक्टिकलिटी और सिस्टेमैटिक डेवलपमेंट पर केंद्रित है।",
    share1_faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    share1_faq_q1: "प्रोग्राम की अवधि क्या है?",
    share1_faq_a1:
      "यह प्रोग्राम दो महीने की संरचित ट्रेनिंग और पोस्ट-ट्रेनिंग रिव्यू सपोर्ट के साथ संचालित होता है।",
    share1_faq_q2: "क्या यह प्रोग्राम बिगिनर्स के लिए उपयुक्त है?",
    share1_faq_a2:
      "हाँ। कोर्स फाउंडेशन से शुरू होता है और धीरे-धीरे प्रोफेशनल ट्रेडिंग फ्रेमवर्क तक ले जाता है।",
    share1_faq_q3: "क्या इस प्रोग्राम में फ्यूचर्स और ऑप्शंस शामिल हैं?",
    share1_faq_a3:
      "हाँ। करिकुलम में डेरिवेटिव्स फाउंडेशन और रिस्क-कंट्रोल्ड एक्जीक्यूशन शामिल है।",
    share1_faq_q4: "क्या पोस्ट-ट्रेनिंग सपोर्ट मिलता है?",
    share1_faq_a4:
      "हाँ। कोर ट्रेनिंग के बाद रिव्यू कंसल्टेशन और मार्गदर्शन दिया जाता है।",
    share1_banner_top: "मास्टर करें",
    share1_banner_title_1: "शेयर मार्केट",
    share1_banner_title_2: "ट्रेडिंग",
    share1_banner_subtitle: "प्रोफेशनल स्टॉक मार्केट और टेक्निकल एनालिसिस ट्रेनिंग",
    share1_banner_li1: "लाइव मार्केट प्रैक्टिकल ट्रेनिंग",
    share1_banner_li2: "इंट्राडे और स्विंग ट्रेडिंग स्ट्रैटेजीज",
    share1_banner_li3: "टेक्निकल और चार्ट पैटर्न एनालिसिस",
    share1_banner_call: "अभी कॉल करें:",
    share1_banner_img_alt: "शेयर मार्केट ट्रेनिंग",
    share1_sticky_demo: "फ्री डेमो सेशन",
  },
};

let activeLanguage = getSavedLanguage();

function getSavedLanguage() {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE;
}

function setActiveLanguage(language) {
  activeLanguage = SUPPORTED_LANGUAGES.includes(language)
    ? language
    : DEFAULT_LANGUAGE;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);
  applyTranslations(document);
  syncLanguageSwitcherValue();
}

function applyKeyTranslations(root = document) {
  const languageMap = {
    ...(I18N_BY_KEY.en || {}),
    ...(I18N_BY_KEY[activeLanguage] || {}),
    ...(PAGE_I18N[activeLanguage] || {}),
    ...(INDEX_FORCE_I18N[activeLanguage] || {}),
    ...(ABOUT_FORCE_I18N[activeLanguage] || {}),
    ...(SHARE1_FORCE_I18N[activeLanguage] || {}),
  };
  root.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.dataset.key;
    if (!key) return;
    if (key in languageMap) {
      element.textContent = languageMap[key];
      return;
    }

    // Fallback for newly keyed content not yet present in key-map.
    const fallbackTextMap = EXTRA_TEXT_TRANSLATIONS[activeLanguage] || {};
    const currentText = (element.textContent || "").trim();
    if (fallbackTextMap[currentText]) {
      element.textContent = fallbackTextMap[currentText];
    }
  });

  root.querySelectorAll("[data-key-title]").forEach((element) => {
    const key = element.dataset.keyTitle;
    if (!key || !(key in languageMap)) return;
    element.setAttribute("title", languageMap[key]);
  });

  root.querySelectorAll("[data-key-alt]").forEach((element) => {
    const key = element.dataset.keyAlt;
    if (!key || !(key in languageMap)) return;
    element.setAttribute("alt", languageMap[key]);
  });

  root.querySelectorAll("[data-key-placeholder]").forEach((element) => {
    const key = element.dataset.keyPlaceholder;
    if (!key || !(key in languageMap)) return;
    element.setAttribute("placeholder", languageMap[key]);
  });

  const titleNode = document.querySelector("title[data-key]");
  if (titleNode) {
    const titleKey = titleNode.dataset.key;
    if (titleKey && languageMap[titleKey]) {
      document.title = languageMap[titleKey];
    }
  }
}

function applyTextTranslations(root = document) {
  const translationMap = {
    ...(I18N_BY_TEXT[activeLanguage] || {}),
    ...(EXTRA_TEXT_TRANSLATIONS[activeLanguage] || {}),
  };
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.closest("[data-key]")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    if (!Object.prototype.hasOwnProperty.call(node, "__i18nOriginalText")) {
      Object.defineProperty(node, "__i18nOriginalText", {
        value: node.nodeValue,
        writable: true,
      });
    }

    const original = node.__i18nOriginalText;
    if (activeLanguage === "en") {
      node.nodeValue = original;
      return;
    }

    const trimmed = original.trim();
    const translated = translationMap[trimmed];
    node.nodeValue = translated ? original.replace(trimmed, translated) : original;
  });
}

function updateLanguageOptionLabels(root = document) {
  const labels = LANGUAGE_LABELS[activeLanguage] || LANGUAGE_LABELS.en;
  root.querySelectorAll("#languageSwitcher").forEach((switcher) => {
    const enOption = switcher.querySelector('option[value="en"]');
    const mrOption = switcher.querySelector('option[value="mr"]');
    const hiOption = switcher.querySelector('option[value="hi"]');
    if (enOption) enOption.textContent = labels.en;
    if (mrOption) mrOption.textContent = labels.mr;
    if (hiOption) hiOption.textContent = labels.hi;
  });
}

function syncLanguageSwitcherValue() {
  document.querySelectorAll("#languageSwitcher").forEach((switcher) => {
    switcher.value = activeLanguage;
  });
}

function initLanguageSwitcher(root = document) {
  root.querySelectorAll("#languageSwitcher").forEach((switcher) => {
    if (switcher.dataset.boundLanguageEvent === "1") return;
    switcher.dataset.boundLanguageEvent = "1";
    switcher.value = activeLanguage;
    switcher.addEventListener("change", (event) => {
      setActiveLanguage(event.target.value);
    });
  });
  updateLanguageOptionLabels(root);
}

function applyTranslations(root = document) {
  document.documentElement.lang = activeLanguage;
  applyKeyTranslations(root);
  applyTextTranslations(root);
  updateLanguageOptionLabels(root);
}

function openPopup() {
  const popup = document.getElementById("popupForm");
  if (popup) {
    popup.style.display = "flex";
  }
}

function closePopup() {
  const popup = document.getElementById("popupForm");
  if (popup) {
    popup.style.display = "none";
  }
}

function openThankYouPopup() {
  const popup = document.getElementById("thankYouPopup");
  if (popup) {
    popup.style.display = "flex";
  }
}

function closeThankYouPopup() {
  const popup = document.getElementById("thankYouPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

function initBookDemoPopup() {
  if (document.body.dataset.bookDemoPopupBound === "1") return;
  document.body.dataset.bookDemoPopupBound = "1";

  document.addEventListener("click", (event) => {
    const demoTrigger = event.target.closest('.cta-button[data-key="book_demo"]');
    if (demoTrigger) {
      event.preventDefault();
      openPopup();
      return;
    }

    const closeAction = event.target.closest("[data-popup-close]");
    if (closeAction) {
      const type = closeAction.getAttribute("data-popup-close");
      if (type === "form") closePopup();
      if (type === "thankyou") closeThankYouPopup();
      return;
    }

    if (event.target.id === "popupForm") {
      closePopup();
      return;
    }

    if (event.target.id === "thankYouPopup") {
      closeThankYouPopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopup();
      closeThankYouPopup();
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target.closest("#demoSessionForm");
    if (!form) return;
    event.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText =
        (I18N_BY_KEY[activeLanguage] && I18N_BY_KEY[activeLanguage].demo_submitting) ||
        I18N_BY_KEY.en.demo_submitting;
    }

    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        form.reset();
        closePopup();
        openThankYouPopup();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText =
            (I18N_BY_KEY[activeLanguage] && I18N_BY_KEY[activeLanguage].demo_submit) ||
            I18N_BY_KEY.en.demo_submit;
        }
      });
  });
}

function initFaq() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");
    if (!question) return;

    const syncIcon = () => {
      if (!icon) return;
      const isActive = item.classList.contains("active");
      icon.textContent = isActive ? "-" : "+";
      question.setAttribute("aria-expanded", String(isActive));
    };

    syncIcon();

    question.addEventListener("click", () => {
      item.classList.toggle("active");
      syncIcon();
    });
  });
}

async function loadComponent(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) return false;

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.status}`);
    }

    target.innerHTML = await response.text();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function initMobileNav() {
  const nav = document.querySelector(".main-nav");
  if (!nav) return;

  const menuToggle = nav.querySelector(".menu-toggle");
  const navLinks = nav.querySelector(".nav-links");
  if (!menuToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    nav.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".dropdown > a").forEach((dropdownTrigger) => {
    dropdownTrigger.addEventListener("click", (event) => {
      if (window.innerWidth > 800) return;
      event.preventDefault();

      const dropdown = dropdownTrigger.closest(".dropdown");
      if (!dropdown) return;

      const isOpen = dropdown.classList.toggle("open");
      nav.querySelectorAll(".dropdown").forEach((item) => {
        if (item !== dropdown) {
          item.classList.remove("open");
        }
      });

      if (!isOpen) {
        dropdown.classList.remove("open");
      }
    });
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      const isDropdownTrigger =
        link.parentElement &&
        link.parentElement.classList.contains("dropdown") &&
        link.nextElementSibling &&
        link.nextElementSibling.classList.contains("dropdown-content");

      if (window.innerWidth <= 800 && !isDropdownTrigger) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      closeMenu();
    }
  });
}

function initDemoForm() {
  const form = document.getElementById("demoSessionForm");
  if (!form) return;

  form.addEventListener("submit", function () {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFaq();
  initDemoForm();
  initBookDemoPopup();
  initLanguageSwitcher();
  applyTranslations(document);

  loadComponent("header", "components/navbar.html").then((loaded) => {
    if (loaded) {
      initMobileNav();
      initLanguageSwitcher(document);
      applyTranslations(document);
    }
  });

  loadComponent("footer", "components/footer.html").then((loaded) => {
    if (loaded) {
      applyTranslations(document);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  initBookDemoPopup();
});

/* =========================
GALLERY FILTER
========================= */

const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const activeBtn = document.querySelector(".filter-btn.active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }

    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    items.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

/* =========================
IMAGE LIGHTBOX
========================= */

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

images.forEach((img) => {
  img.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

if (closeLightbox) {
  closeLightbox.onclick = () => {
    if (lightbox) {
      lightbox.style.display = "none";
    }
  };
}
