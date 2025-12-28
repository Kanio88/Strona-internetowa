
import { TranslationStrings } from './types';

export const translations: Record<'en' | 'pl', TranslationStrings> = {
  en: {
    nav: {
      home: "Home",
      services: "Care Services",
      about: "About Us",
      testimonials: "Testimonials",
      faq: "FAQ",
      blog: "Advice & Guidance",
      contact: "Contact",
      consultation: "Free Consultation"
    },
    hero: {
      title: "Compassionate Home Care You Can Trust",
      subtitle: "Personalised home care for adults and families across Sandwell, Dudley, and the West Midlands — delivered with dignity, respect, and continuity.",
      ctaPrimary: "Request a Free Care Consultation",
      ctaSecondary: "Call Us Today"
    },
    founder: {
      title: "A Personal Approach to Home Care",
      name: "Founder & Director",
      message: "I established Everyday Care Plus as an experienced healthcare professional to ensure families in our community receive care that is respectful, dignified, and truly person-centred. We are a hands-on, director-led service. When you contact us, you speak to someone who genuinely understands care — not a call centre. Our commitment is to listening, local accountability, and the continuity of care your loved ones deserve.",
      signature: "Learn More About Our Approach"
    },
    trust: {
      dbs: "DBS Checked Carers",
      cqc: "CQC-Aligned Standards",
      gdpr: "GDPR Compliant",
      training: "Local, Director-Led Service"
    },
    trustCompliance: {
      title: "Why Families Choose Us",
      items: {
        dbs: {
          title: "DBS Checked Carers",
          description: "All carers are DBS checked and carefully vetted for suitability."
        },
        cqc: {
          title: "CQC-Aligned Standards",
          description: "Our care is delivered in line with CQC fundamental standards."
        },
        gdpr: {
          title: "GDPR Compliant",
          description: "Your personal information is handled securely and confidentially."
        },
        safeguarding: {
          title: "Safeguarding Focused",
          description: "Clear safeguarding procedures to protect vulnerable adults."
        },
        directorLed: {
          title: "Local, Director-Led Service",
          description: "Hands-on leadership ensures accountability and consistent care."
        }
      },
      footerLine: "We take safety, dignity, and trust seriously — because your loved one deserves nothing less."
    },
    testimonials: {
      title: "What Families Say About Us",
      items: [
        {
          text: "Greg provided exceptional care for my dad during a very difficult time. His compassion, professionalism, and attention to detail gave our family real peace of mind.",
          author: "Luk R.",
          context: "Son of Client"
        },
        {
          text: "The support was reliable, respectful, and genuinely person-centred. It made a huge difference knowing someone we trusted was there every day.",
          author: "Sarah M.",
          context: "Daughter of Client"
        },
        {
          text: "What stood out most was the consistency and communication. We always felt informed and supported.",
          author: "James T.",
          context: "Family Member"
        }
      ],
      trustNote: "Testimonials shared with permission from clients and families."
    },
    areasCovered: {
      title: "Areas We Cover",
      intro: "We provide home care services across the West Midlands, supporting individuals and families in the following areas:",
      locations: ["Sandwell", "Dudley", "Tipton", "West Bromwich", "Stourbridge", "Wolverhampton"],
      supportingLine: "If you’re unsure whether we cover your area, please contact us — we’re always happy to advise.",
      bottomLine: "Providing trusted home care across Sandwell and Dudley, including Tipton, West Bromwich, Stourbridge, and Wolverhampton."
    },
    consultationForm: {
      title: "Request a Free Care Consultation",
      intro: "Choosing care can feel overwhelming. We’re here to listen and help, with no obligation.",
      fields: {
        name: "Full name",
        phone: "Phone number",
        phoneHelper: "We need your phone number to contact you.",
        email: "Email address (optional)",
        postcode: "Area or postcode",
        careType: "Type of care needed",
        message: "Message (optional)",
        consent: "I consent to being contacted regarding my care enquiry."
      },
      validationErrors: {
        name: "Please enter your full name.",
        phone: "Please enter a phone number so we can contact you.",
        email: "Please enter a valid email address.",
        postcode: "Please enter an area or postcode.",
        consent: "Please provide consent so we can contact you.",
        generic: "Something went wrong. Please try again or call us."
      },
      careOptions: [
        "Hourly home care",
        "Live-in care",
        "Dementia care",
        "Autism support",
        "Respite care",
        "Medication support",
        "Personal care",
        "Companionship",
        "End-of-life care",
        "Not sure / need advice"
      ],
      submit: "Request a Free Consultation",
      reassurance: "Your data is treated confidentially and used only for contact purposes.",
      successTitle: "Thank you for getting in touch.",
      successMessage: "We’ve received your enquiry and a local care manager will contact you as soon as possible.",
      speakDirectly: "Prefer to speak to someone? Call us directly — we’re here to help.",
      callNow: "Call 07563 011 244"
    },
    aboutPage: {
      intro: {
        title: "Care Built Around People, Not Processes",
        text: "Everyday Care Plus was created to provide home care that truly listens to individuals and families. We believe that everyone deserves to be supported with dignity, respecting their independence and personal choice in the comfort of their own home."
      },
      founder: {
        title: "Rooted in Real-World Experience",
        text: "Founded by an experienced healthcare professional who has spent years working closely with individuals and families during their most vulnerable moments. Our service was born out of a desire to bridge the gap between clinical requirements and the human need for relationship-led care. As a hands-on, director-led provider, we ensure that accountability and compassion start at the very top."
      },
      values: {
        title: "Our Values",
        items: [
          { title: "Dignity and Respect", description: "Treating every individual with the highest level of respect and preserving their self-esteem.", icon: "💎" },
          { title: "Person-Centred Care", description: "Tailoring support to fit the unique preferences, history, and goals of each person.", icon: "👤" },
          { title: "Trust and Transparency", description: "Open communication and honest feedback in everything we do.", icon: "🤝" },
          { title: "Consistency and Continuity", description: "Providing familiar faces and reliable support schedules for peace of mind.", icon: "🔄" },
          { title: "Compassion in Practice", description: "Delivering care with genuine warmth and emotional understanding.", icon: "❤️" }
        ]
      },
      howWeWork: {
        title: "How We Work",
        text: "We keep our process clear and simple. It starts with a free home consultation and assessment, where we listen to your needs and preferences. From there, we build a bespoke care plan that is regularly reviewed. We maintain constant communication with families and work alongside NHS professionals to ensure clinical standards are met alongside personal well-being."
      },
      qualitySafety: {
        title: "Why Families Choose Us",
        items: [
          { title: "DBS Checked", description: "Every member of our team is fully vetted and background checked." },
          { title: "Continuous Training", description: "Ongoing education and regular supervision for all carers." },
          { title: "Safeguarding", description: "Rigorous procedures in place to protect vulnerable adults at all times." },
          { title: "Data Security", description: "GDPR compliant handling of all sensitive personal information." }
        ]
      },
      local: {
        title: "Proudly Local",
        text: "We are deeply committed to our community. By focusing on Sandwell, Dudley, and the surrounding areas, we ensure our managers are always close by to provide accountability and support when it's needed most."
      },
      closing: "Choosing care is a personal decision. We’re here to listen, guide, and support you every step of the way."
    },
    servicesPage: {
      title: "Professional Home Care Services",
      intro: "Comprehensive care solutions delivered with compassion and professionalism across Sandwell, Dudley, and the West Midlands.",
      whoItIsForLabel: "Who it’s for",
      howWeProvideLabel: "How we provide care",
      whatsIncludedLabel: "What’s Included",
      practicalExamplesLabel: "Practical Examples",
      discussButton: "Get Free Consultation",
      callNowButton: "Call Now",
      closingTitle: "Ready to Start Your Care Journey?",
      closingText: "If you’re unsure which type of care is right, we’re here to listen and help you understand the best options.",
      closingSub: "Care advice with no obligation.",
      items: [
        {
          id: "personal",
          icon: "🛁",
          title: "Personal Care",
          description: "Respectful assistance with washing, dressing, mobility, and personal hygiene.",
          whoItIsFor: "Adults who need support with everyday activities but want to stay in their own home.",
          howWeProvide: "Care is tailored to individual routines and preferences, delivered by consistent carers who take time to understand personal needs.",
          reassurance: "A little help can make a big difference to staying independent.",
          learnMore: "Learn more",
          whatsIncluded: ["Assistance with bathing and showering", "Dressing and grooming support", "Incontinence care", "Oral hygiene", "Skin care and morning/evening routines"],
          practicalExamples: ["Assisting a client in Dudley with their morning dressing routine to start their day with confidence.", "Supporting a Sandwell resident with safe mobility around their home."]
        },
        {
          id: "medication",
          icon: "💊",
          title: "Medication Management",
          description: "Support with medication prompts, administration, and monitoring, delivered safely and responsibly.",
          whoItIsFor: "Anyone who finds it difficult to manage complex medication schedules.",
          howWeProvide: "Our carers are trained in safe administration and record-keeping, coordinating closely with GPs and pharmacies.",
          reassurance: "Peace of mind knowing your health needs are managed safely.",
          learnMore: "Learn more",
          whatsIncluded: ["Medication prompts and reminders", "Supervised administration", "Repeat prescription management", "Liaising with GPs and pharmacies", "Monitoring side effects"],
          practicalExamples: ["Ensuring a Tipton resident takes their heart medication at the correct time daily.", "Managing complex multi-dose blister packs for a client in West Bromwich."]
        },
        {
          id: "companionship",
          icon: "🤝",
          title: "Companionship Care",
          description: "Meaningful social support to reduce loneliness and promote emotional wellbeing.",
          whoItIsFor: "Individuals who may feel isolated or simply enjoy social interaction and shared activities.",
          howWeProvide: "We match carers based on interests and personality to foster genuine connection and friendship.",
          reassurance: "Connection and friendship are at the heart of our support.",
          learnMore: "Learn more",
          whatsIncluded: ["Social outings and coffee trips", "Shared hobbies and interests", "Accompaniment to appointments", "Light housework together", "Friendly conversation and emotional support"],
          practicalExamples: ["Accompanying a client to a local community centre in Stourbridge.", "Spending time discussing news and hobbies with a resident in Dudley."]
        },
        {
          id: "dementia",
          icon: "🧠",
          title: "Dementia Care",
          description: "Thoughtful, structured support for individuals living with dementia, focused on familiarity and reassurance.",
          whoItIsFor: "People at any stage of dementia who benefit from routine, patience, and understanding.",
          howWeProvide: "Carers are trained to support cognitive needs while maintaining dignity, comfort, and emotional wellbeing.",
          reassurance: "Expert support focused on quality of life and familiarity.",
          learnMore: "Learn more",
          whatsIncluded: ["Memory support and cognitive stimulation", "Management of challenging behaviours", "Nutritional support", "Assistance with confusion or anxiety", "Maintaining safe home environments"],
          practicalExamples: ["Using reminiscence therapy with a client in Sandwell to improve mood.", "Creating a safe, familiar evening routine for a resident in Wolverhampton."]
        },
        {
          id: "autism",
          icon: "🌈",
          title: "Autism & Neurodiversity Support",
          description: "Individualised care for adults with autism, delivered with understanding, patience, and consistency.",
          whoItIsFor: "Adults in the neurodiverse community who require structured, sensory-aware support.",
          howWeProvide: "We focus on building strong, trusting relationships and maintaining predictable routines.",
          reassurance: "Individualised support built on understanding and consistency.",
          learnMore: "Learn more",
          whatsIncluded: ["Sensory-aware communication", "Support with social interactions", "Life skills and independence building", "Maintaining structured routines", "Assistance with community integration"],
          practicalExamples: ["Supporting a young adult in Dudley to attend social groups safely.", "Helping a resident in Tipton develop independent cooking skills."]
        },
        {
          id: "respite",
          icon: "☕",
          title: "Respite Care",
          description: "Short-term care that allows family carers to rest, knowing their loved one is in safe and capable hands.",
          whoItIsFor: "Family members who need a temporary break from their caring responsibilities.",
          howWeProvide: "We step in seamlessly to maintain established routines and provide high-quality support.",
          reassurance: "Rest assured while we look after your loved ones with expert care.",
          learnMore: "Learn more",
          whatsIncluded: ["Emergency short-term cover", "Planned holiday cover", "Temporary post-hospital support", "Daytime or overnight respite", "Continuation of existing care plans"],
          practicalExamples: ["Providing a weekend of care in West Bromwich so a primary carer can attend a family event.", "Two weeks of live-in respite care for a client in Stourbridge."]
        },
        {
          id: "postop",
          icon: "🩹",
          title: "Post-Operative Care",
          description: "Recovery support and assistance after surgery to help you regain your independence.",
          whoItIsFor: "People returning home after a hospital stay who need temporary help during recovery.",
          howWeProvide: "We coordinate with medical discharge teams to ensure a safe transition home.",
          reassurance: "Focused support to help you recover comfortably at home.",
          learnMore: "Learn more",
          whatsIncluded: ["Wound care monitoring", "Physiotherapy exercise support", "Light housework and meal prep", "Transport to follow-up visits", "Support with mobility aids"],
          practicalExamples: ["Supporting a Dudley resident with mobility exercises after hip surgery.", "Helping with meals and household tasks during the first 6 weeks of recovery in Sandwell."]
        },
        {
          id: "livein",
          icon: "🛏️",
          title: "Overnight & Live-In Care",
          description: "A dedicated carer living in the home to provide round-the-clock support and waking night presence.",
          whoItIsFor: "Individuals requiring constant supervision or who feel unsafe being alone at night.",
          howWeProvide: "Care is planned with extreme detail to ensure privacy and constant availability of support.",
          reassurance: "Constant care and presence for total peace of mind.",
          learnMore: "Learn more",
          whatsIncluded: ["24/7 in-home support", "Waking night assistance", "Sleeping night presence", "Full-time domestic support", "Continuous companionship"],
          practicalExamples: ["Providing a waking night service in Tipton for a client who prone to wandering.", "Full-time live-in support for a resident in Wolverhampton."]
        },
        {
          id: "palliative",
          icon: "🕊️",
          title: "End-of-Life Care",
          description: "Compassionate care focused on comfort, dignity, and support for both individuals and their families.",
          whoItIsFor: "Individuals in the final stages of life who wish to remain in their own home.",
          howWeProvide: "We work closely with hospice teams and district nurses to provide dignified palliative care.",
          reassurance: "Dignified and compassionate care during the most sensitive times.",
          learnMore: "Learn more",
          whatsIncluded: ["Pain management support", "Emotional and spiritual support", "Family support and liaison", "Personal care with extreme sensitivity", "Coordination with palliative teams"],
          practicalExamples: ["Working with the local hospice team to support a client in Sandwell.", "Providing 24-hour dignified care for a resident in Dudley."]
        }
      ]
    },
    faqPage: {
      title: "Frequently Asked Questions",
      intro: "Choosing home care often comes with many questions. Below you’ll find answers to some of the most common things families ask us. If you need more information, we’re always happy to talk.",
      sections: [
        {
          title: "Getting Started",
          items: [
            { q: "How quickly can care start?", a: "Care can often begin shortly after an initial consultation and assessment. We always aim to respond promptly and work around individual needs." },
            { q: "Is there a minimum number of care hours?", a: "We offer flexible care arrangements. The number of hours depends on individual needs and will be discussed during the consultation." },
            { q: "Do you offer a free consultation?", a: "Yes. We offer a free, no-obligation consultation to understand your situation and discuss suitable care options." }
          ]
        },
        {
          title: "Types of Care",
          items: [
            { q: "What types of care do you provide?", a: "We provide a range of services including hourly care, live-in care, dementia care, autism support, respite care, medication support, personal care, companionship, and end-of-life care." },
            { q: "Can care plans change over time?", a: "Yes. Care plans are reviewed regularly and adjusted as needs change." }
          ]
        },
        {
          title: "Carers and Safety",
          items: [
            { q: "Are your carers DBS checked?", a: "Yes. All carers are DBS checked and carefully vetted before providing care." },
            { q: "Will the same carer visit each time?", a: "Wherever possible, we aim to provide continuity so clients can build trusted relationships." },
            { q: "How do you ensure quality and safety?", a: "We follow safeguarding procedures, provide supervision, and deliver care aligned with CQC standards." }
          ]
        },
        {
          title: "Working with Professionals",
          items: [
            { q: "Do you work with NHS and other professionals?", a: "Yes. We work alongside NHS teams and other professionals to support coordinated care." }
          ]
        },
        {
          title: "Practical Information",
          items: [
            { q: "Which areas do you cover?", a: "We provide care across Sandwell, Dudley, Tipton, West Bromwich, Stourbridge, and Wolverhampton." }
          ]
        }
      ],
      closing: "If you have a question that isn’t answered here, please contact us — we’re always happy to help."
    },
    blogPage: {
      title: "Advice & Guidance",
      intro: "Clear, practical guidance to help families understand care options and make informed decisions.",
      categories: ["Home Care Guidance", "Dementia Care", "Autism Support", "Respite Care", "Medication Management"],
      allCategories: "All Articles",
      readMore: "Read article",
      readTimeLabel: "read",
      articleCtaText: "If you would like to talk about care options for your situation, we’re here to help.",
      articleCtaButton: "Request a Free Consultation",
      posts: [
        {
          slug: "know-when-home-care-needed",
          title: "How to Know When a Loved One Needs Home Care Support",
          excerpt: "Deciding when to start care is a journey. We explore the subtle signs that extra support might be beneficial.",
          category: "Home Care Guidance",
          readTime: "5 min",
          date: "Oct 12, 2023",
          intro: "Deciding to explore home care for a loved one is rarely a single, sudden event. More often, it’s a gradual realization that things are becoming more difficult. It's natural to feel uncertain or even guilty about this shift, but needing support isn’t a loss of independence — in many cases, it’s the very thing that helps someone stay independent for longer.",
          content: [
            {
              heading: "Subtle signs that support may be needed",
              body: "Sometimes the indicators are clear, but often they are quiet changes in routine or environment. You might notice:",
              bullets: [
                "Missed medications or confusion about dosages",
                "Changes in personal hygiene or wearing the same clothes multiple days",
                "Reduced mobility or a recent fall that has caused a loss of confidence",
                "Weight loss or a kitchen that is lacking fresh food",
                "Withdrawal from social activities or signs of loneliness",
                "Unexplained bruising or minor accidents around the house"
              ]
            }
          ]
        }
      ]
    },
    services: {
      title: "Our Care Services",
      subtitle: "We provide flexible, person-centred home care tailored to individual needs, delivered with dignity, respect, and continuity.",
      viewAll: "View All Care Services",
      notSure: "Not sure what type of care is right? We’re here to help.",
      items: {
        hourly: { title: "Hourly Home Care", description: "Support with daily routines, personal care, and practical tasks — helping people remain safe and independent at home.", learnMore: "Learn more" },
        liveIn: { title: "Overnight & Live-In Care", description: "A dedicated carer living in the home to provide continuous support, reassurance, and companionship.", learnMore: "Learn more" },
        dementia: { title: "Dementia Care", description: "Thoughtful, structured support for individuals living with dementia, focused on familiarity, dignity, and continuity.", learnMore: "Learn more" },
        autism: { title: "Autism Support", description: "Individualised care for adults with autism, delivered with understanding, patience, and consistency.", learnMore: "Learn more" },
        respite: { title: "Respite Care", description: "Short-term care that allows family carers to rest, knowing their loved one is in safe and capable hands.", learnMore: "Learn more" },
        medication: { title: "Medication Management", description: "Support with medication prompts, administration, and monitoring, delivered safely and responsibly.", learnMore: "Learn more" },
        personal: { title: "Personal Care", description: "Respectful assistance with washing, dressing, mobility, and personal hygiene.", learnMore: "Learn more" },
        companionship: { title: "Companionship", description: "Meaningful social support to reduce loneliness and promote emotional wellbeing.", learnMore: "Learn more" },
        palliative: { title: "End-of-Life & Palliative Care", description: "Compassionate care focused on comfort, dignity, and support for both individuals and their families.", learnMore: "Learn more" }
      }
    },
    faq: {
      title: "Common Questions",
      q1: "How quickly can care start?",
      a1: "In most cases, we can conduct an initial assessment within 24-48 hours and begin care shortly after.",
      q2: "How are carers selected?",
      a2: "We match carers based on skills, experience, and personality. All staff undergo rigorous vetting and continuous training.",
      q3: "Do you work with the NHS?",
      a3: "Yes, we work alongside NHS professionals and social services to ensure continuity of clinical care plans.",
      q4: "What areas do you cover?",
      a4: "We provide care across Sandwell, Dudley, and the wider West Midlands area."
    },
    footer: {
      address: "Everyday Care Plus, DY4 8UU, Tipton, UK",
      phone: "07563 011 244",
      email: "greg@every-day-care.com",
      rights: "© 2024 Everyday Care Plus. All rights reserved.",
      areas: "Areas Covered: Sandwell, Dudley, Walsall, Wolverhampton, and West Bromwich.",
      privacy: "Privacy Policy",
      complaints: "Complaints Procedure",
      safeguarding: "Safeguarding",
      terms: "Terms & Conditions"
    }
  },
  pl: {
    nav: {
      home: "Strona główna",
      services: "Usługi opiekuńcze",
      about: "O nas",
      testimonials: "Opinie rodzin",
      faq: "Częste pytania",
      blog: "Porady i wskazówki",
      contact: "Kontakt",
      consultation: "Bezpłatna konsultacja"
    },
    hero: {
      title: "Opieka domowa, której możesz zaufać",
      subtitle: "Indywidualna opieka domowa dla dorosłych i rodzin na terenie Sandwell, Dudley i West Midlands — świadczona z poszanowaniem godności, bezpieczeństwa i potrzeb drugiego człowieka.",
      ctaPrimary: "Poproś o bezpłatną konsultację",
      ctaSecondary: "Zadzwoń i porozmawiaj z nami"
    },
    founder: {
      title: "Osobiste podejście do opieki",
      name: "Dyrektor",
      message: "Everyday Care Plus powstało z przekonania, że dobra opieka zaczyna się od uważnego słuchania. Za usługą stoi doświadczony pracownik ochrony zdrowia, który na co dzień rozumie wyzwania, z jakimi mierzą się osoby wymagające wsparcia oraz ich bliscy. Nie jesteśmy call-center ani korporacją. Gdy się Państwo z nami kontaktują, rozmawiają Państwo z kimś, kto naprawdę rozumie opiekę.",
      signature: "Dowiedz się więcej o naszym podejściu"
    },
    trust: {
      dbs: "Opiekunowie z aktualnym DBS",
      cqc: "Opieka zgodna ze standardami CQC",
      gdpr: "Ochrona danych (GDPR)",
      training: "Lokalna, zarządzana osobiście usługa"
    },
    trustCompliance: {
      title: "Dlaczego rodziny wybierają Everyday Care Plus",
      items: {
        dbs: {
          title: "Opiekunowie z DBS",
          description: "Wszyscy nasi opiekunowie posiadają aktualne zaświadczenie o niekaralności (DBS)."
        },
        cqc: {
          title: "Standardy CQC",
          description: "Nasze wsparcie jest realizowane zgodnie z wymogami jakości brytyjskiego CQC."
        },
        gdpr: {
          title: "Poufność i bezpieczeństwo",
          description: "Państwa dane są przetwarzane w sposób bezpieczny, z zachowaniem pełnej prywatności."
        },
        safeguarding: {
          title: "Bezpieczeństwo podopiecznych",
          description: "Stosujemy ścisłe procedury ochrony osób wymagających wsparcia."
        },
        directorLed: {
          title: "Usługa lokalna",
          description: "Jesteśmy lokalnym zespołem, zarządzanym bezpośrednio przez dyrektora."
        }
      },
      footerLine: "Opieka domowa oparta na zaufaniu, szacunku i zrozumieniu."
    },
    testimonials: {
      title: "Opinie rodzin",
      items: [
        {
          text: "Opieka była pełna empatii i spokoju. Czuliśmy, że nasz bliski jest w dobrych rękach.",
          author: "Córka podopiecznego",
          context: ""
        },
        {
          text: "Najważniejsze było zaufanie i ciągłość. To naprawdę robi różnicę.",
          author: "Syn podopiecznego",
          context: ""
        },
        {
          text: "Dobra komunikacja i poczucie bezpieczeństwa od pierwszego kontaktu.",
          author: "Członek rodziny",
          context: ""
        }
      ],
      trustNote: "Opinie udostępnione za zgodą klientów i ich rodzin."
    },
    areasCovered: {
      title: "Obszary, które obsługujemy",
      intro: "Świadczymy opiekę domową na terenie:",
      locations: ["Sandwell", "Dudley", "Tipton", "West Bromwich", "Stourbridge", "Wolverhampton"],
      supportingLine: "Jeśli nie mają Państwo pewności, czy obejmujemy Państwa okolicę — prosimy o kontakt.",
      bottomLine: "Zaufana opieka domowa w regionie Sandwell i Dudley."
    },
    consultationForm: {
      title: "Poproś o bezpłatną konsultację",
      intro: "Wypełnienie formularza nie zobowiązuje do podjęcia współpracy. Jesteśmy tutaj, aby wysłuchać i pomóc.",
      fields: {
        name: "Imię i nazwisko",
        phone: "Numer telefonu",
        phoneHelper: "Numer telefonu jest potrzebny, abyśmy mogli się z Państwem skontaktować.",
        email: "Adres e-mail (opcjonalnie)",
        postcode: "Miejscowość lub kod pocztowy",
        careType: "Jaki rodzaj opieki jest potrzebny?",
        message: "Dodatkowe informacje (opcjonalnie)",
        consent: "Wyrażam zgodę na kontakt w sprawie zapytania dotyczącego opieki."
      },
      validationErrors: {
        name: "Prosimy wpisać imię i nazwisko.",
        phone: "Prosimy wpisać numer telefonu, abyśmy mogli się z Państwem skontaktować.",
        email: "Prosimy wpisać poprawny adres e-mail.",
        postcode: "Prosimy wpisać miejscowość lub kod pocztowy.",
        consent: "Prosimy wyrazić zgodę, abyśmy mogli się z Państwem skontaktować.",
        generic: "Wystąpił problem z wysłaniem formularza. Prosimy spróbować ponownie lub skontaktować się z nami telefonicznie."
      },
      careOptions: [
        "Opieka godzinowa",
        "Opieka całodobowa (live-in)",
        "Opieka nad osobą z demencją",
        "Wsparcie dla osoby w spektrum autyzmu",
        "Opieka wytchnieniowa",
        "Wsparcie przy lekach",
        "Opieka osobista",
        "Towarzystwo",
        "Opieka paliatywna / u kresu życia",
        "Nie jestem pewien / proszę o poradę"
      ],
      submit: "Poproś o bezpłatną konsultację",
      reassurance: "Twoje dane są traktowane poufnie i wykorzystywane wyłącznie w celu kontaktu.",
      successTitle: "Dziękujemy za wiadomość.",
      successMessage: "Skontaktujemy się z Państwem tak szybko, jak to możliwe.",
      speakDirectly: "Preferują Państwo kontakt telefoniczny? Prosimy zadzwonić — chętnie porozmawiamy.",
      callNow: "Zadzwoń: 07563 011 244"
    },
    aboutPage: {
      intro: {
        title: "Opieka budowana wokół człowieka, nie procedur",
        text: "Everyday Care Plus powstało, aby zapewnić wsparcie domowe, które naprawdę słucha potrzeb podopiecznych i ich bliskich. Wierzymy, że każdy zasługuje na godne życie we własnym domu."
      },
      founder: {
        title: "Osobiste podejście do opieki",
        text: "Za naszą usługą stoi doświadczenie oparte na codziennej pracy z osobami wymagającymi wsparcia. Rozumiemy wyzwania, przed którymi stają rodziny, i staramy się, aby nasze wsparcie było realną odpowiedzią na ludzkie potrzeby, a nie tylko wypełnieniem grafiku."
      },
      values: {
        title: "Nasze wartości",
        items: [
          { title: "Opieka skoncentrowana na osobie", description: "Nie skupiamy się na procedurach, lecz na konkretnym człowieku i jego historii.", icon: "👤" },
          { title: "Stałość opiekunów", description: "Budowanie trwałych relacji i zaufania dzięki ciągłości personelu.", icon: "🤝" },
          { title: "Bezpośrednie zaangażowanie", description: "Osoba zarządzająca bierze pełną odpowiedzialność za jakość świadczonej opieki.", icon: "📍" },
          { title: "Jasna komunikacja", description: "Pozostajemy w stałym kontakcie z rodziną podopiecznego.", icon: "🔄" },
          { title: "Zgodność ze standardami", description: "Praca w pełnym porozumieniu z wymogami CQC.", icon: "✅" }
        ]
      },
      howWeWork: {
        title: "Jak pracujemy",
        text: "Zapewniamy elastyczną opiekę domową, dopasowaną do indywidualnych potrzeb każdej osoby. Zawsze zaczynamy od rozmowy i dokładnego poznania Państwa sytuacji."
      },
      qualitySafety: {
        title: "Dlaczego rodziny wybierają Everyday Care Plus",
        items: [
          { title: "Skoncentrowani na osobie", description: "Opieka dostosowana do stylu życia, a nie odwrotnie." },
          { title: "Wiarygodność", description: "Opiekunowie z pełną weryfikacją DBS i szkoleniami." },
          { title: "Przejrzystość", description: "Uczciwa informacja i stały kontakt z biurem." },
          { title: "Lokalność", description: "Jesteśmy tu na miejscu, w sercu Sandwell i Dudley." }
        ]
      },
      local: {
        title: "Świadczymy opiekę lokalnie",
        text: "Jesteśmy dumni z bycia częścią lokalnej społeczności w West Midlands. Nasza bliskość pozwala nam reagować szybko i skutecznie."
      },
      closing: "Jesteśmy tutaj, aby Państwa wysłuchać, odpowiedzieć na pytania i spokojnie doradzić."
    },
    servicesPage: {
      title: "Profesjonalne Usługi Opieki Domowej",
      intro: "Kompleksowe rozwiązania opiekuńcze świadczone z empatią i profesjonalizmem w Sandwell, Dudley i regionie West Midlands.",
      whoItIsForLabel: "Dla kogo",
      howWeProvideLabel: "Nasze podejście",
      whatsIncludedLabel: "Zakres wsparcia",
      practicalExamplesLabel: "Przykłady z życia",
      discussButton: "Bezpłatna Konsultacja",
      callNowButton: "Zadzwoń",
      closingTitle: "Gotowi, aby rozpocząć wsparcie?",
      closingText: "Jeśli nie mają Państwo pewności, który rodzaj opieki będzie odpowiedni, chętnie wysłuchamy i doradzimy.",
      closingSub: "Konsultacja bez żadnych zobowiązań.",
      items: [
        {
          id: "personal",
          icon: "🛁",
          title: "Opieka osobista",
          description: "Pełna szacunku pomoc w codziennej higienie, ubieraniu się i mobilności.",
          whoItIsFor: "Osoby dorosłe potrzebujące wsparcia w codziennych czynnościach, pragnące pozostać we własnym domu.",
          howWeProvide: "Opieka dopasowana do rutyny i preferencji, świadczona przez stałych opiekunów.",
          reassurance: "Mała pomoc może wiele zdziałać dla Twojej samodzielności.",
          learnMore: "Dowiedz się więcej",
          whatsIncluded: ["Pomoc w kąpieli i prysznicu", "Wsparcie przy ubieraniu i pielęgnacji", "Higiena intymna", "Opieka poranna i wieczorna", "Wsparcie przy mobilności"],
          practicalExamples: ["Pomoc podopiecznemu z Dudley w porannej toalecie, aby z pewnością siebie zaczął dzień.", "Wsparcie mieszkańca Sandwell w bezpiecznym poruszaniu się po domu."]
        },
        {
          id: "medication",
          icon: "💊",
          title: "Zarządzanie lekami",
          description: "Pomoc w przyjmowaniu leków, przypomnienia i monitorowanie stanu zdrowia.",
          whoItIsFor: "Każdy, kto ma trudności z zarządzaniem złożonym harmonogramem leków.",
          howWeProvide: "Przeszkoleni opiekunowie dbają o bezpieczne podawanie leków i dokumentację.",
          reassurance: "Spokój ducha wiedząc, że Twoje zdrowie jest w dobrych rękach.",
          learnMore: "Dowiedz się więcej",
          whatsIncluded: ["Przypomnienia o lekach", "Nadzorowane podawanie leków", "Zarządzanie receptami", "Kontakt z lekarzem i apteką", "Monitorowanie skutków ubocznych"],
          practicalExamples: ["Dbanie o to, by mieszkaniec Tipton przyjmował leki na serce o właściwej porze.", "Zarządzanie kasetkami z lekami dla klienta z West Bromwich."]
        },
        {
          id: "companionship",
          icon: "🤝",
          title: "Towarzystwo i aktywizacja",
          description: "Wsparcie społeczne mające na celu redukcję samotności i poprawę samopoczucia.",
          whoItIsFor: "Osoby czujące się samotnie, które cenią interakcję społeczną i wspólne aktywności.",
          howWeProvide: "Dobieramy opiekunów na podstawie zainteresowań i charakteru, by budować prawdziwe więzi.",
          reassurance: "Relacje i przyjaźń są fundamentem naszego wsparcia.",
          learnMore: "Dowiedz się więcej",
          whatsIncluded: ["Wspólne wyjścia i spacery", "Rozwijanie pasji i zainteresowań", "Towarzyszenie podczas wizyt lekarskich", "Wspólne lekkie prace domowe", "Rozmowa i wsparcie emocjonalne"],
          practicalExamples: ["Wspólne wyjście do lokalnego centrum kultury w Stourbridge.", "Rozmowy o hobby i aktualnych wydarzeniach z mieszkańcem Dudley."]
        },
        {
          id: "dementia",
          icon: "🧠",
          title: "Opieka w demencji",
          description: "Uporządkowane wsparcie skoncentrowane na poczuciu bezpieczeństwa i rutynie.",
          whoItIsFor: "Osoby na każdym etapie demencji, ceniące cierpliwość i stały rytm dnia.",
          howWeProvide: "Opiekunowie przeszkoleni w pracy z potrzebami poznawczymi przy zachowaniu godności podopiecznego.",
          reassurance: "Specjalistyczne wsparcie oparte na jakości życia i spokoju.",
          learnMore: "Dowiedz się więcej",
          whatsIncluded: ["Stymulacja poznawcza i ćwiczenia pamięci", "Zarządzanie trudnymi zachowaniami", "Wsparcie żywieniowe", "Pomoc przy stanach lękowych", "Zapewnienie bezpiecznego otoczenia"],
          practicalExamples: ["Zastosowanie terapii wspomnieniowej u klienta z Sandwell.", "Stworzenie bezpiecznej rutyny wieczornej dla mieszkańca Wolverhampton."]
        },
        {
          id: "autism",
          icon: "🌈",
          title: "Wsparcie w spektrum autyzmu",
          description: "Indywidualna opieka dla dorosłych osób neuroróżnorodnych, oparta na zrozumieniu i cierpliwości.",
          whoItIsFor: "Osoby dorosłe potrzebujące strukturalnego i przewidywalnego wsparcia.",
          howWeProvide: "Budujemy trwałe relacje oparte na zaufaniu i poszanowaniu rutyn.",
          reassurance: "Indywidualne podejście zbudowane na zrozumieniu potrzeb.",
          learnMore: "Dowiedz się więcej",
          whatsIncluded: ["Komunikacja uwzględniająca potrzeby sensoryczne", "Wsparcie w interakcjach społecznych", "Budowanie samodzielności", "Utrzymywanie stałej struktury dnia", "Pomoc w integracji ze społecznością"],
          practicalExamples: ["Wspieranie młodej osoby dorosłej w Dudley w bezpiecznym uczestnictwie w grupach społecznych.", "Pomoc mieszkańcowi Tipton w nauce samodzielnego gotowania."]
        },
        {
          id: "respite",
          icon: "☕",
          title: "Opieka wytchnieniowa",
          description: "Czasowe wsparcie pozwalające opiekunom rodzinnym na odpoczynek i regenerację.",
          whoItIsFor: "Członkowie rodzin, którzy potrzebują przerwy od codziennych obowiązków opiekuńczych.",
          howWeProvide: "Przejmujemy opiekę płynnie, zachowując dotychczasowe zwyczaje podopiecznego.",
          reassurance: "Odpocznij wiedząc, że Twój bliski jest pod fachową opieką.",
          learnMore: "Dowiedz się więcej",
          whatsIncluded: ["Nagłe zastępstwa krótkoterminowe", "Planowane zastępstwa urlopowe", "Wsparcie po wyjściu ze szpitala", "Opieka dzienna lub nocna", "Kontynuacja istniejących planów opieki"],
          practicalExamples: ["Weekendowa opieka w West Bromwich, by główny opiekun mógł uczestniczyć w uroczystości rodzinnej.", "Dwutygodniowa opieka całodobowa dla klienta w Stourbridge."]
        },
        {
          id: "postop",
          icon: "🩹",
          title: "Opieka pooperacyjna",
          description: "Pomoc w rekonwalescencji po zabiegach chirurgicznych, by bezpiecznie wrócić do formy.",
          whoItIsFor: "Osoby wracające do domu po pobycie w szpitalu, potrzebujące czasowej pomocy.",
          howWeProvide: "Współpracujemy z zespołami medycznymi, by zapewnić bezpieczny powrót do sprawności.",
          reassurance: "Skoncentrowane wsparcie, byś mógł zdrowieć w komforcie własnego domu.",
          learnMore: "Dowiedz się więcej",
          whatsIncluded: ["Monitorowanie gojenia ran", "Pomoc w ćwiczeniach fizjoterapeutycznych", "Lekkie prace domowe i przygotowanie posiłków", "Transport na wizyty kontrolne", "Pomoc w korzystaniu ze sprzętu rehabilitacyjnego"],
          practicalExamples: ["Wsparcie mieszkańca Dudley w ćwiczeniach po operacji biodra.", "Pomoc w posiłkach i pracach domowych przez 6 tygodni po zabiegu w Sandwell."]
        },
        {
          id: "livein",
          icon: "🛏️",
          title: "Opieka całodobowa i nocna",
          description: "Obecność opiekuna w domu przez całą dobę lub czuwająca pomoc w nocy.",
          whoItIsFor: "Osoby wymagające stałego nadzoru lub czujące się niepewnie w nocy.",
          howWeProvide: "Opieka zaplanowana w najmniejszych szczegółach dla zachowania prywatności i stałej dostępności.",
          reassurance: "Stała obecność dla całkowitego spokoju ducha.",
          learnMore: "Dowiedz się więcej",
          whatsIncluded: ["Wsparcie 24/7 w domu", "Czuwająca opieka nocna", "Obecność nocna (sleeping night)", "Pełne wsparcie domowe", "Stałe towarzystwo"],
          practicalExamples: ["Nocne czuwanie w Tipton dla klienta mającego tendencje do błądzenia.", "Całodobowe wsparcie dla mieszkańca Wolverhampton."]
        },
        {
          id: "palliative",
          icon: "🕊️",
          title: "Opieka paliatywna",
          description: "Pełna empatii opieka u kresu życia, nastawiona na komfort, godność i wsparcie rodziny.",
          whoItIsFor: "Osoby w ostatnim stadium życia, które pragną pozostać w domu.",
          howWeProvide: "Współpracujemy z pielęgniarkami środowiskowymi i zespołami hospicyjnymi.",
          reassurance: "Godność i współczucie w najbardziej wrażliwym czasie.",
          learnMore: "Learn more",
          whatsIncluded: ["Wsparcie w zarządzaniu bólem", "Pomoc emocjonalna i duchowa", "Wsparcie dla rodziny podopiecznego", "Higiena osobista z najwyższą wrażliwością", "Koordynacja z zespołami hospicyjnymi"],
          practicalExamples: ["Współpraca z lokalnym hospicjum w opiece nad klientem w Sandwell.", "Całodobowa, pełna szacunku opieka dla mieszkańca Dudley."]
        }
      ]
    },
    faqPage: {
      title: "Często zadawane pytania",
      intro: "Wybór opieki domowej wiąże się z wieloma pytaniami. Poniżej znajdą Państwo odpowiedzi na najczęściej zadawane pytania przez rodziny. Chętnie porozmawiamy, jeśli potrzebują Państwo więcej informacji.",
      sections: [
        {
          title: "Pierwsze kroki",
          items: [
            { q: "Jak szybko może rozpocząć się opieka?", a: "Po rozmowie i wstępnej ocenie potrzeb staramy się rozpocząć opiekę tak szybko, jak to możliwe." },
            { q: "Czy obowiązuje minimalna liczba godzin opieki?", a: "Oferujemy elastyczne formy opieki. Liczba godzin zależy od indywidualnych potrzeb i jest ustalana podczas konsultacji." },
            { q: "Czy oferujecie bezpłatną konsultację?", a: "Tak. Oferujemy bezpłatną konsultację bez zobowiązań, aby poznać Państwa sytuację i omówić możliwe formy opieki." }
          ]
        },
        {
          title: "Rodzaje opieki",
          items: [
            { q: "Jakie rodzaje opieki oferujecie?", a: "Oferujemy m.in. opiekę godzinową, opiekę całodobową, opiekę nad osobami z demencją, wsparcie dla osób w spektrum autyzmu, opiekę wytchnieniową, wsparcie przy lekach, opiekę osobistą, towarzystwo oraz opiekę paliatywną." },
            { q: "Czy plan opieki może się zmieniać?", a: "Tak. Plany opieki są regularnie omawiane i dostosowywane do zmieniających się potrzeb." }
          ]
        },
        {
          title: "Opiekunowie i bezpieczeństwo",
          items: [
            { q: "Czy opiekunowie posiadają aktualne sprawdzenie DBS?", a: "Tak. Wszyscy opiekunowie posiadają aktualne sprawdzenie DBS i są starannie weryfikowani przed rozpoczęciem pracy." },
            { q: "Czy ten sam opiekun będzie przychodził regularnie?", a: "Tam, gdzie to możliwe, zapewniamy ciągłość opieki, aby możliwe było zbudowanie relacji opartej na zaufaniu." },
            { q: "Jak zapewniacie jakość i bezpieczeństwo?", a: "Pracujemy zgodnie z procedurami ochrony dorosłych, zapewniamy nadzór oraz realizujemy opiekę zgodnie ze standardami CQC." }
          ]
        },
        {
          title: "Współpraca z rodziną i NHS",
          items: [
            { q: "Czy współpracujecie z NHS oraz innymi specjalistami?", a: "Tak. Współpracujemy z zespołami NHS oraz innymi specjalistami, aby zapewnić skoordynowaną i bezpieczną opiekę." }
          ]
        },
        {
          title: "Informacje praktyczne",
          items: [
            { q: "Jakie obszary obsługujecie?", a: "Świadczymy opiekę domową na terenie Sandwell, Dudley, Tipton, West Bromwich, Stourbridge oraz Wolverhampton." }
          ]
        }
      ],
      closing: "Jeśli mają Państwo pytanie, na które nie ma tutaj odpowiedzi, zapraszamy do kontaktu — chętnie pomożemy."
    },
    blogPage: {
      title: "Porady i wskazówki",
      intro: "Dzielimy się wiedzą, aby pomóc rodzinom odnaleźć się w temacie opieki domowej.",
      categories: ["Wskazówki dla rodzin", "Opieka w demencji", "Autism Support", "Opieka wytchnieniowa", "Zarządzanie lekami"],
      allCategories: "Wszystkie artykuły",
      readMore: "Przeczytaj artykuł",
      readTimeLabel: "czytania",
      articleCtaText: "Chcieliby Państwo porozmawiać o konkretnej sytuacji? Jesteśmy do Państwa dyspozycji.",
      articleCtaButton: "Poproś o bezpłatną konsultację",
      posts: [
        {
          slug: "kiedy-zaczac-opieke",
          title: "Kiedy bliska osoba potrzebuje wsparcia w domu?",
          excerpt: "Decyzja o opiece to proces. Sprawdzamy, jakie sygnały mogą świadczyć o tym, że warto pomyśleć o dodatkowej pomocy.",
          category: "Wskazówki dla rodzin",
          readTime: "5 min",
          date: "12 paź 2023",
          intro: "Rozważenie opieki domowej dla bliskiej osoby to często trudny moment pełen pytań. Ważne jest, aby wiedzieć, że wsparcie nie oznacza utraty niezależności, a wręcz może pomóc ją zachować na dłużej.",
          content: [
            {
              heading: "Subtle znaki",
              body: "Mogą Państwo zauważyć trudności z codziennymi czynnościami, zapominanie o lekach czy mniejszą dbałość o posiłki.",
              bullets: [
                "Problemy z utrzymaniem czystości w domu",
                "Zmiany w sposobie poruszania się",
                "Samotność i wycofanie z kontaktów"
              ]
            }
          ]
        }
      ]
    },
    services: {
      title: "Nasze usługi opiekuńcze",
      subtitle: "Zapewniamy elastyczną opiekę domową, dopasowaną do indywidualnych potrzeb każdej osoby.",
      viewAll: "Zobacz wszystkie usługi opieki",
      notSure: "Nie wiedzą Państwo, który rodzaj wsparcia będzie odpowiedni? Pomożemy doradzić.",
      items: {
        hourly: { title: "Opieka godzinowa", description: "Wsparcie w codziennych czynnościach, higienie, posiłkach i organizacji dnia.", learnMore: "Dowiedz się więcej" },
        liveIn: { title: "Opieka całodobowa (live-in)", description: "Stała obecność opiekuna w domu, zapewniająca bezpieczeństwo i spokój.", learnMore: "Dowiedz be więcej" },
        dementia: { title: "Opieka nad osobami z demencją", description: "Cierpliwa, uporządkowana opieka oparta na rutynie i poczuciu bezpieczeństwa.", learnMore: "Dowiedz się więcej" },
        autism: { title: "Wsparcie dla osób w spektrum autyzmu", description: "Indywidualne podejście, przewidywalność i szacunek dla potrzeb sensorycznych.", learnMore: "Dowiedz się więcej" },
        respite: { title: "Opieka wytchnieniowa", description: "Czasowe wsparcie, które pozwala rodzinom odpocząć i zadbać o siebie.", learnMore: "Dowiedz się więcej" },
        medication: { title: "Wsparcie przy lekach", description: "Pomoc w przyjmowaniu leków zgodnie z zaleceniami lekarza.", learnMore: "Dowiedz się więcej" },
        personal: { title: "Opieka osobista", description: "Dyskretna i pełna szacunku pomoc w codziennej higienie i mobilności.", learnMore: "Dowiedz się więcej" },
        companionship: { title: "Towarzystwo", description: "Obecność, rozmowa i wsparcie emocjonalne dla osób czujących się samotnie.", learnMore: "Dowiedz się więcej" },
        palliative: { title: "Opieka paliatywna i u kresu życia", description: "Spokojna, empatyczna opieka nastawiona na komfort i godność.", learnMore: "Dowiedz się więcej" }
      }
    },
    faq: {
      title: "Częste pytania",
      q1: "Jak szybko może rozpocząć się opieka?",
      a1: "Po rozmowie i wstępnej ocenie potrzeb staramy się rozpocząć opiekę tak szybko, jak to możliwe.",
      q2: "W jakich obszarach działacie?",
      a2: "Działamy na terenie Sandwell, Dudley, Walsall i okolicznych miejscowości West Midlands.",
      q3: "Czy współpracujecie z NHS?",
      a3: "Tak, wspieramy pacjentów i współpracujemy z profesjonalistami medycznymi dla zachowania ciągłości opieki.",
      q4: "Czy opiekunowie są sprawdzeni?",
      a4: "Tak, wszyscy nasi pracownicy posiadają aktualne sprawdzenie DBS i przechodzą regularne szkolenia."
    },
    footer: {
      address: "Everyday Care Plus, DY4 8UU, Tipton, UK",
      phone: "07563 011 244",
      email: "greg@every-day-care.com",
      rights: "© 2024 Everyday Care Plus. Wszelkie prawa zastrzeżone.",
      areas: "Obszary: Sandwell, Dudley, Tipton, West Bromwich, Stourbridge i Wolverhampton.",
      privacy: "Polityka prywatności",
      complaints: "Procedura skarg",
      safeguarding: "Ochrona dorosłych (Safeguarding)",
      terms: "Warunki korzystania"
    }
  }
};
