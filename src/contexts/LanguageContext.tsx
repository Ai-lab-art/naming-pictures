import React, { createContext, useContext, useState } from 'react';

type Language = 'english' | 'nepali';

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