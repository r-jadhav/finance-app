import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
//import {getLocales} from 'react-native-localize';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: {
        'Change_Language':'Change Language',
        'Enter_Your_Mobile_Number':"Enter Your Mobile Number",
        'Get_OTP':"Get OTP",
        'Enter_OTP_sent_to':"Enter OTP sent to",
        'Number_error':"Please enter valid phone number",
        'Resend_OTP':"Resend OTP",
        'Edit_Number':"Edit Number",
        'Submit':"Submit",
        'Quick_Loan':"Quick Loan",
        'onboard':"Simple & reliable finance. Leave your Personal Loan hassles to us. Your journey to a wealthy Financial Life is a few steps away.",
        'Get_Started':"Get Started",
        "Enter_4_Digit_OTP":"Enter 4 Digit OTP",
        "Menu":`Menu`,
        "Rate_Our_App":"Rate Our App",
        "Share_Our_App":"Share Our App",
        "About_Us":"About Us",
        "Privacy_Policy":"Privacy Policy",
        "Terms_Condition":"Terms & Condition",
        "Log_out":"Log out",
        "Welcome_to_the":"Welcome to the",
        "Finedict":"Finedict",
        "Flexible_Amount":"Flexible Amount",
        "Quick_Disbursal":"Quick Disbursal",
        "Quick_Apply":"Quick Apply",
        "Convenient_Process":"Convenient Process",
        "Our_Connected_Banks":"Our Connected Banks",
        "about":"FinEdict financial services pvt. ltd. is on a divine journey to help people in a new way to reach their financial goals. We provide a process that is not only simple but also transparent.",
        "FeedBack":"FeedBack",
        "Contact":"Contact",
        "Require_Loan_Amount":"Require Loan Amount",
        "Address":"Address",
        "Monthly_Salary":"Monthly Salary",
        "Name":"Name",
        "Email":"Email",
        "Contact_Number":"Contact Number",
        "Message":"Message",
        "Email_is_required":"Email is required",
        "Address_is_required":"Address is required",
        "Message_is_required":"Message is required",
        "Full_name_is_required":"Full name is required",
        "Phone_number_is_required":"Phone number is required",
        "Salary_is_required":"Salary is required",
        "Address_is_required":"Address is required",
        "thanks":"Thank you for contacting us. we will reach out soon.",
        "error":"Could not process your request now. Try again later."
      },
    },
    hi: {
      translation: {
        'Change_Language':'भाषा बदले',
        'Enter_Your_Mobile_Number':"अपना मोबाइल नंबर दर्ज करें",
        'Get_OTP':"OTP प्राप्त करें",
        'Enter_OTP_sent_to':"भेजा गया  OTP दर्ज करें",
        'Number_error':"कृपया एक वैध नंबर डालें",
        'Resend_OTP':"OTP पुन: भेजें",
        'Edit_Number':"संख्या बदलें ",
        'Submit':"जमा करें",
        'Quick_Loan':"त्वरित ऋण",
        'onboard':"सरल और विश्वसनीय वित्त। अपने पर्सनल लोन की परेशानी हम पर छोड़ दें। एक समृद्ध वित्तीय जीवन की आपकी यात्रा कुछ ही कदम दूर है",
        'Get_Started':"शुरू करें ",
        "Enter_4_Digit_OTP":"4 अंकों का OTP दर्ज करें",
        "Menu":`मेन्यू`,
        "Rate_Our_App":"हमारे  App को रेट करें",
        "Share_Our_App":"हमारे App को साझा करें",
        "About_Us":"हमारे बारे में",
        "Privacy_Policy":"गोपनीयता नीति",
        "Terms_Condition":"नियम व शर्तें",
        "Log_out":"लॉग आउट",
        "Welcome_to_the":"आपका स्वागत है",
        "Finedict":"फिनेडिक्ट",
        "Flexible_Amount":"राशि",
        "Quick_Disbursal":"त्वरित संवितरण",
        "Quick_Apply":"शीघ्र आवेदन करें",
        "Convenient_Process":"सुविधाजनक प्रक्रिया",
        "Our_Connected_Banks":"हमसे जुड़े बैंक",
        "about":"फिनेडिक्ट फाइनेंशियल सर्विसेज प्रा. लिमिटेड लोगों को उनके वित्तीय लक्ष्यों तक पहुंचने एवं एक नए तरीके से मदद करने के दिव्य यात्रा पर है ।\
        हम एक ऐसी प्रक्रिया प्रदान करते हैं जो न केवल सरल है बल्कि पारदर्शी भी है।",
        "FeedBack":"प्रतिक्रिया",
        "Contact":"संपर्क करना",
        "Require_Loan_Amount":"आवश्यक ऋण राशि",
        "Address":"पता",
        "Monthly_Salary":"मासिक वेतन",
        "Name":"नाम",
        "Email":"ईमेल",
        "Contact_Number":"संपर्क संख्या",
        "Message":"संदेश",
        "Email_is_required":"ईमेल आवश्यक है",
        "Address_is_required":"पता आवश्यक है",
        "Message_is_required":"संदेश आवश्यक है",
        "Full_name_is_required":"पूरा नाम आवश्यक है",
        "Phone_number_is_required":"फ़ोन नंबर आवश्यक है",
        "Salary_is_required":"वेतन आवश्यक है",
        "Address_is_required":"पता आवश्यक है",
        "thanks":"हमसे संपर्क करने के लिए धन्यवाद। हम जल्द ही आप तक पहुचेंगे।",
        "error":"अभी आपका अनुरोध संसाधित नहीं किया जा सका । बाद में पुन: प्रयास करे ।"
      },
    }
  },
});
export default i18n;