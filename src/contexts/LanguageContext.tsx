import React, { createContext, useContext, useState } from 'react';

type Language = 'english' | 'nepali' | 'hindi';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  getCategoryName: (englishName: string) => string;
}

const translations = {
  english: {
    // Home page
    'home.title': 'Naming Picture',
    'home.subtitle': 'Learning App',
    'home.description': 'Discover and learn to identify amazing creatures, beautiful nature, and delicious fruits through interactive picture naming games!',
    'home.startLearning': 'Start Learning Adventure',
    'home.whyChoose': 'Why Choose Our Learning App?',
    'home.learnByCategories': 'Learn by Categories',
    'home.learnByCategoriesDesc': 'Explore 7 different categories from wild animals to beautiful flowers',
    'home.realPictures': 'Real Pictures',
    'home.realPicturesDesc': 'High-quality, real images to help you learn and remember better',
    'home.interactiveFun': 'Interactive Fun',
    'home.interactiveFunDesc': 'Engaging and educational experience for learners of all ages',
    'home.exploreCategories': 'Explore Our Categories',
    'home.shareExperience': 'Share the Learning Experience',
    'home.shareDesc': 'Help others discover this amazing learning app. Share it with your friends and family!',
    'home.developerCredit': 'Developed by:',
    
    // Categories
    'categories.title': 'Choose a Category',
    'categories.subtitle': 'Select a category to start learning and exploring!',
    'categories.backToHome': 'Back to Home',
    
    // Category descriptions
    'category.wildAnimals': 'Learn about majestic creatures',
    'category.domesticAnimals': 'Discover friendly pets',
    'category.birds': 'Explore colorful flying friends',
    'category.fruits': 'Identify delicious fruits',
    'category.insects': 'Meet tiny fascinating creatures',
    'category.flowers': 'Admire beautiful blooms',
    'category.seaAnimals': 'Dive into ocean wonders',
    
    // Category Items
    'categoryItems.backToCategories': 'Back to Categories',
    'categoryItems.notFound': 'Category not found',
    'categoryItems.toLearn': 'to learn and identify!',
    
    // Common
    'common.facebook': 'Facebook',
    'common.twitter': 'Twitter',
    'common.whatsapp': 'WhatsApp',
    'common.messenger': 'Messenger',
    
    // Category names
    'categoryName.wildAnimals': 'Wild Animals',
    'categoryName.domesticAnimals': 'Domestic Animals',
    'categoryName.birds': 'Birds',
    'categoryName.fruits': 'Fruits',
    'categoryName.insects': 'Insects',
    'categoryName.flowers': 'Flowers',
    'categoryName.seaAnimals': 'Sea Animals',
    'categoryName.gamesSports': 'Games and Sports',
  },
  hindi: {
    // Home page
    'home.title': 'चित्र नामकरण',
    'home.subtitle': 'सीखने का ऐप',
    'home.description': 'अद्भुत जीवों, सुंदर प्रकृति, और स्वादिष्ट फलों को इंटरैक्टिव चित्र नामकरण खेलों के माध्यम से पहचानना सीखें!',
    'home.startLearning': 'सीखने की यात्रा शुरू करें',
    'home.whyChoose': 'हमारे सीखने के ऐप को क्यों चुनें?',
    'home.learnByCategories': 'श्रेणियों के अनुसार सीखें',
    'home.learnByCategoriesDesc': 'जंगली जानवरों से लेकर सुंदर फूलों तक 7 अलग-अलग श्रेणियों का अन्वेषण करें',
    'home.realPictures': 'वास्तविक चित्र',
    'home.realPicturesDesc': 'उच्च गुणवत्ता की, वास्तविक छवियां जो आपको बेहतर सीखने और याद रखने में मदद करती हैं',
    'home.interactiveFun': 'इंटरैक्टिव मज़ा',
    'home.interactiveFunDesc': 'सभी उम्र के शिक्षार्थियों के लिए आकर्षक और शैक्षणिक अनुभव',
    'home.exploreCategories': 'हमारी श्रेणियों का अन्वेषण करें',
    'home.shareExperience': 'सीखने का अनुभव साझा करें',
    'home.shareDesc': 'दूसरों को इस अद्भुत सीखने के ऐप की खोज में मदद करें। इसे अपने दोस्तों और परिवार के साथ साझा करें!',
    'home.developerCredit': 'द्वारा विकसित:',
    
    // Categories
    'categories.title': 'एक श्रेणी चुनें',
    'categories.subtitle': 'सीखना और अन्वेषण शुरू करने के लिए एक श्रेणी का चयन करें!',
    'categories.backToHome': 'घर वापस जाएं',
    
    // Category descriptions
    'category.wildAnimals': 'राजसी जीवों के बारे में सीखें',
    'category.domesticAnimals': 'दोस्ताना पालतू जानवरों की खोज करें',
    'category.birds': 'रंगबिरंगे उड़ने वाले दोस्तों का अन्वेषण करें',
    'category.fruits': 'स्वादिष्ट फलों की पहचान करें',
    'category.insects': 'छोटे आकर्षक जीवों से मिलें',
    'category.flowers': 'सुंदर फूलों की प्रशंसा करें',
    'category.seaAnimals': 'समुद्री अजूबों में डुबकी लगाएं',
    
    // Category Items
    'categoryItems.backToCategories': 'श्रेणियों पर वापस जाएं',
    'categoryItems.notFound': 'श्रेणी नहीं मिली',
    'categoryItems.toLearn': 'सीखने और पहचानने के लिए!',
    
    // Common
    'common.facebook': 'फेसबुक',
    'common.twitter': 'ट्विटर',
    'common.whatsapp': 'व्हाट्सएप',
    'common.messenger': 'मैसेंजर',
    
    // Category names
    'categoryName.wildAnimals': 'जंगली जानवर',
    'categoryName.domesticAnimals': 'पालतू जानवर',
    'categoryName.birds': 'पक्षी',
    'categoryName.fruits': 'फल',
    'categoryName.insects': 'कीड़े',
    'categoryName.flowers': 'फूल',
    'categoryName.seaAnimals': 'समुद्री जानवर',
    'categoryName.gamesSports': 'खेल और क्रीड़ा',
  },
  nepali: {
    // Home page
    'home.title': 'तस्बिर नामकरण',
    'home.subtitle': 'सिकाइ एप',
    'home.description': 'अद्भुत जीवजन्तुहरू, सुन्दर प्रकृति, र स्वादिष्ट फलफूलहरूलाई अन्तरक्रियात्मक तस्बिर नामकरण खेलहरू मार्फत पहिचान गर्न सिक्नुहोस्!',
    'home.startLearning': 'सिकाइ यात्रा सुरु गर्नुहोस्',
    'home.whyChoose': 'हाम्रो सिकाइ एप किन छान्ने?',
    'home.learnByCategories': 'श्रेणी अनुसार सिक्नुहोस्',
    'home.learnByCategoriesDesc': 'जंगली जनावरदेखि सुन्दर फूलहरूसम्म ७ वटा फरक श्रेणीहरू अन्वेषण गर्नुहोस्',
    'home.realPictures': 'वास्तविक तस्बिरहरू',
    'home.realPicturesDesc': 'राम्रो गुणस्तरको, वास्तविक छविहरू जसले तपाईंलाई राम्रोसँग सिक्न र सम्झन मद्दत गर्छ',
    'home.interactiveFun': 'अन्तरक्रियात्मक मनोरञ्जन',
    'home.interactiveFunDesc': 'सबै उमेरका सिकारुहरूका लागि आकर्षक र शैक्षिक अनुभव',
    'home.exploreCategories': 'हाम्रा श्रेणीहरू अन्वेषण गर्नुहोस्',
    'home.shareExperience': 'सिकाइ अनुभव साझा गर्नुहोस्',
    'home.shareDesc': 'अरूलाई यो अद्भुत सिकाइ एप खोज्न मद्दत गर्नुहोस्। यसलाई आफ्ना साथीहरू र परिवारसँग साझा गर्नुहोस्!',
    'home.developerCredit': 'विकसित गरेको:',
    
    // Categories
    'categories.title': 'श्रेणी छान्नुहोस्',
    'categories.subtitle': 'सिक्न र अन्वेषण गर्न सुरु गर्न श्रेणी चयन गर्नुहोस्!',
    'categories.backToHome': 'घर फर्कनुहोस्',
    
    // Category descriptions
    'category.wildAnimals': 'राजसी जीवहरूको बारेमा सिक्नुहोस्',
    'category.domesticAnimals': 'मित्रैलो पाल्तु जनावरहरू पत्ता लगाउनुहोस्',
    'category.birds': 'रंगबिरंगी उड्ने साथीहरू अन्वेषण गर्नुहोस्',
    'category.fruits': 'स्वादिष्ट फलहरू पहिचान गर्नुहोस्',
    'category.insects': 'साना आकर्षक जीवहरूलाई भेट्नुहोस्',
    'category.flowers': 'सुन्दर फूलहरूको प्रशंसा गर्नुहोस्',
    'category.seaAnimals': 'समुद्री अचम्महरूमा डुब्नुहोस्',
    
    // Category Items
    'categoryItems.backToCategories': 'श्रेणीहरूमा फर्कनुहोस्',
    'categoryItems.notFound': 'श्रेणी फेला परेन',
    'categoryItems.toLearn': 'सिक्न र पहिचान गर्न!',
    
    // Common
    'common.facebook': 'फेसबुक',
    'common.twitter': 'ट्विटर',
    'common.whatsapp': 'व्हाट्सएप',
    'common.messenger': 'मेसेन्जर',
    
    // Category names
    'categoryName.wildAnimals': 'जंगली जनावरहरू',
    'categoryName.domesticAnimals': 'पाल्तु जनावरहरू',
    'categoryName.birds': 'पंक्षीहरू',
    'categoryName.fruits': 'फलफूलहरू',
    'categoryName.insects': 'कीराहरू',
    'categoryName.flowers': 'फूलहरू',
    'categoryName.seaAnimals': 'समुद्री जनावरहरू',
    'categoryName.gamesSports': 'खेलकुद',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.english] || key;
  };

  const getCategoryName = (englishName: string): string => {
    const keyMap: Record<string, string> = {
      'Wild Animals': 'categoryName.wildAnimals',
      'Domestic Animals': 'categoryName.domesticAnimals',
      'Birds': 'categoryName.birds',
      'Fruits': 'categoryName.fruits',
      'Insects': 'categoryName.insects',
      'Flowers': 'categoryName.flowers',
      'Sea Animals': 'categoryName.seaAnimals',
      'Games and Sports': 'categoryName.gamesSports',
    };
    
    const translationKey = keyMap[englishName];
    return translationKey ? t(translationKey) : englishName;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getCategoryName }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};