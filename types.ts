
export type Language = 'en' | 'pl';

export type Page = 'home' | 'services' | 'about' | 'faq' | 'blog' | 'article';

export interface ServiceItem {
  title: string;
  description: string;
  learnMore: string;
}

export interface DetailedServiceItem extends ServiceItem {
  id: string;
  whoItIsFor: string;
  howWeProvide: string;
  reassurance: string;
  icon: string;
  whatsIncluded?: string[];
  practicalExamples?: string[];
  img?: string;
}

export interface TrustIndicator {
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  context: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSection {
  title: string;
  items: FAQItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  intro: string;
  content: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
}

export interface TranslationStrings {
  nav: {
    home: string;
    services: string;
    about: string;
    testimonials: string;
    faq: string;
    blog: string;
    contact: string;
    consultation: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  founder: {
    title: string;
    name: string;
    message: string;
    signature: string;
  };
  trust: {
    dbs: string;
    cqc: string;
    gdpr: string;
    training: string;
  };
  trustCompliance: {
    title: string;
    items: {
      dbs: TrustIndicator;
      cqc: TrustIndicator;
      gdpr: TrustIndicator;
      safeguarding: TrustIndicator;
      directorLed: TrustIndicator;
    };
    footerLine: string;
  };
  testimonials: {
    title: string;
    items: Testimonial[];
    trustNote: string;
  };
  areasCovered: {
    title: string;
    intro: string;
    locations: string[];
    supportingLine: string;
    bottomLine: string;
  };
  consultationForm: {
    title: string;
    intro: string;
    fields: {
      name: string;
      phone: string;
      phoneHelper: string;
      email: string;
      postcode: string;
      careType: string;
      message: string;
      consent: string;
    };
    validationErrors: {
      name: string;
      phone: string;
      email: string;
      postcode: string;
      consent: string;
      generic: string;
    };
    careOptions: string[];
    submit: string;
    reassurance: string;
    successTitle: string;
    successMessage: string;
    speakDirectly: string;
    callNow: string;
  };
  aboutPage: {
    intro: {
      title: string;
      text: string;
    };
    founder: {
      title: string;
      text: string;
    };
    values: {
      title: string;
      items: ValueItem[];
    };
    howWeWork: {
      title: string;
      text: string;
    };
    qualitySafety: {
      title: string;
      items: TrustIndicator[];
    };
    local: {
      title: string;
      text: string;
    };
    closing: string;
  };
  servicesPage: {
    title: string;
    intro: string;
    whoItIsForLabel: string;
    howWeProvideLabel: string;
    whatsIncludedLabel: string;
    practicalExamplesLabel: string;
    discussButton: string;
    callNowButton: string;
    closingTitle: string;
    closingText: string;
    closingSub: string;
    items: DetailedServiceItem[];
  };
  faqPage: {
    title: string;
    intro: string;
    sections: FAQSection[];
    closing: string;
  };
  blogPage: {
    title: string;
    intro: string;
    categories: string[];
    allCategories: string;
    readMore: string;
    readTimeLabel: string;
    articleCtaText: string;
    articleCtaButton: string;
    posts: BlogPost[];
  };
  services: {
    title: string;
    subtitle: string;
    viewAll: string;
    notSure: string;
    items: {
      hourly: ServiceItem;
      liveIn: ServiceItem;
      dementia: ServiceItem;
      autism: ServiceItem;
      respite: ServiceItem;
      medication: ServiceItem;
      personal: ServiceItem;
      companionship: ServiceItem;
      palliative: ServiceItem;
    };
  };
  faq: {
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  footer: {
    address: string;
    phone: string;
    email: string;
    rights: string;
    areas: string;
    privacy: string;
    complaints: string;
    safeguarding: string;
    terms: string;
  };
}
