export interface Verse {
  id: string;
  type: 'doha' | 'chaupai';
  hindiText: string[];
  englishText: string[];
  number?: number;
  imageUrl?: string;
}

const demoImageUrl = "/ram-darbar.jpg";;

export const chalisa: Verse[] = [
  {
    id: "doha-1",
    type: "doha",
    hindiText: [
      "श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि ।",
      "बरनउँ रघुबर बिमल जसु, जो दायकु फल चारि ॥",
      "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार ।",
      "बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार ॥"
    ],
    englishText: [
      "Shree Guru Charan Saroj Raj, Nij Man Mukuru Sudhari.",
      "Barnau Raghubar Bimal Jasu, Jo Dayaku Phal Chari.",
      "Budhi Heen Tanu Janike, Sumirau Pavan Kumar.",
      "Bal Budhi Vidya Dehu Mohi, Harahu Kalesh Bikaar."
    ],
    imageUrl: demoImageUrl // Depicting a scene of Guru Vandana and seeking blessing
  },
  {
    id: "chaupai-1",
    type: "chaupai",
    number: 1,
    hindiText: [
      "जय हनुमान ज्ञान गुण सागर।",
      "जय कपीस तिहुं लोक उजागर॥"
    ],
    englishText: [
      "Jai Hanuman gyan gun sagar.",
      "Jai Kapis tihun lok ujagar."
    ],
    imageUrl: "/chaupai-1.jpg" // Depicting a glowing Hanuman, a sea of knowledge
  },
  {
    id: "chaupai-2",
    type: "chaupai",
    number: 2,
    hindiText: [
      "रामदूत अतुलित बल धामा।",
      "अंजनि-पुत्र पवनसुत नामा॥"
    ],
    englishText: [
      "Ram doot atulit bal dhama.",
      "Anjani-putra Pavan sut nama."
    ],
    imageUrl: "/chaupai-2.jpg" // Depicting Hanuman as Ram's messenger, carrying a mountain
  },
  {
    id: "chaupai-3",
    type: "chaupai",
    number: 3,
    hindiText: [
      "महाबीर बिक्रम बजरंगी।",
      "कुमति निवार सुमति के संगी॥"
    ],
    englishText: [
      "Mahavir Vikram Bajrangi.",
      "Kumati nivar sumati Ke sangi."
    ],
    imageUrl: demoImageUrl // Depicting a fierce and mighty Hanuman in a battle scene
  },
  {
    id: "chaupai-4",
    type: "chaupai",
    number: 4,
    hindiText: [
      "कंचन बरन बिराज सुबेसा।",
      "कानन कुंडल कुंचित केसा॥"
    ],
    englishText: [
      "Kanchan varan viraj subesa.",
      "Kanan Kundal Kunchit Kesa."
    ],
    imageUrl: "/chaupai-4.jpg" // Depicting Hanuman in a rich, golden divine form
  },
  {
    id: "chaupai-5",
    type: "chaupai",
    number: 5,
    hindiText: [
      "हाथ बज्र और ध्वजा बिराजै।",
      "काँधे मूँज जनेऊ साजै॥"
    ],
    englishText: [
      "Hath Vajra Aur Dhvaja Viraje.",
      "Kandhe moonj janehu sajai."
    ],
    imageUrl: "/chaupai-5.jpg" // Depicting a scene with specific symbols: a golden flag and sacred thread
  },
  {
    id: "chaupai-6",
    type: "chaupai",
    number: 6,
    hindiText: [
      "संकर सुवन केसरीनंदन।",
      "तेज प्रताप महा जग बंदन॥"
    ],
    englishText: [
      "Sankar suvan kesri Nandan.",
      "Tej prataap maha jag vandan."
    ],
    imageUrl: "/chaupai-6.jpg" // Depicting a serene and powerful scene, radiating divine energy
  },
  {
    id: "chaupai-7",
    type: "chaupai",
    number: 7,
    hindiText: [
      "विद्यावान गुणी अति चातुर।",
      "राम काज करिबे को आतुर॥"
    ],
    englishText: [
      "Vidyavaan guni ati chatur.",
      "Ram kaj karibe ko aatur."
    ],
    imageUrl: demoImageUrl // Depicting a quick-witted Hanuman, always ready to serve Lord Ram
  },
  {
    id: "chaupai-8",
    type: "chaupai",
    number: 8,
    hindiText: [
      "प्रभु चरित्र सुनिबे को रसिया।",
      "राम लखन सीता मन बसिया॥"
    ],
    englishText: [
      "Prabhu charitra sunibe ko rasiya.",
      "Ram Lakhan Sita man Basiya."
    ],
    imageUrl: "/chaupai-8.jpg" // Depicting Hanuman with Lord Ram, Lakshman, and Sita deeply in his heart
  },
  {
    id: "chaupai-9",
    type: "chaupai",
    number: 9,
    hindiText: [
      "सूक्ष्म रूप धरि सियहिं दिखावा।",
      "बिकट रूप धरि लंक जरावा॥"
    ],
    englishText: [
      "Sukshma roop dhari Siyahi dikhava.",
      "Vikat roop dhari lanka jalava."
    ],
    imageUrl: "/chaupai-9.jpg" // Depicting Hanuman in a tiny form, then transforming into a massive, fierce form to burn Lanka
  },
  {
    id: "chaupai-10",
    type: "chaupai",
    number: 10,
    hindiText: [
      "भीम रूप धरि असुर सँहारे।",
      "रामचंद्र के काज सँवारे॥"
    ],
    englishText: [
      "Bhima roop dhari asur sanhare.",
      "Ramachandra ke kaj sanvare."
    ],
    imageUrl: "/chaupai-10.jpg" // Depicting Hanuman's gigantic form in battle, protecting all
  },
  {
    id: "chaupai-11",
    type: "chaupai",
    number: 11,
    hindiText: [
      "लाय संजीवन लखन जियाये।",
      "श्रीरघुबीर हरषि उर लाये॥"
    ],
    englishText: [
      "Laye Sanjivan Lakhan Jiyaye.",
      "Shri Raghuvir Harashi ur laye."
    ],
    imageUrl: "/chaupai-11.jpg" // Depicting Hanuman carrying the mountain, then Lord Ram embracing him
  },
  {
    id: "chaupai-12",
    type: "chaupai",
    number: 12,
    hindiText: [
      "रघुपति कीन्ही बहुत बड़ाई।",
      "तुम मम प्रिय भरतहि सम भाई॥"
    ],
    englishText: [
      "Raghupati Kinhi bahut badai.",
      "Tum mam priye Bharat-hi sam bhai."
    ],
    imageUrl: "/chaupai-12.jpg" // Depicting Lord Ram and Hanuman, comparing him to his own beloved brother
  },
  {
    id: "chaupai-13",
    type: "chaupai",
    number: 13,
    hindiText: [
      "सहस बदन तुम्हरो जस गावैं।",
      "अस कहि श्रीपति कंठ लगावैं॥"
    ],
    englishText: [
      "Sahas badan tumharo yash gaavain.",
      "As kahi Shripati kanth lagave."
    ],
    imageUrl: "/chaupai-13.jpg" // Depicting the multiple divine forms of Hanuman and a close embrace with Lord Ram
  },
  {
    id: "chaupai-14",
    type: "chaupai",
    number: 14,
    hindiText: [
      "सनकादिक ब्रह्मादि मुनीसा।",
      "नारद सारद सहित अहीसा॥"
    ],
    englishText: [
      "Sankadik Brahmadi Muneesa.",
      "Narad Sarad sahit Aheesa."
    ],
    imageUrl: "/chaupai-14.jpg" // Depicting various cosmic deities and sages in a divine gathering
  },
  {
    id: "chaupai-15",
    type: "chaupai",
    number: 15,
    hindiText: [
      "जम कुबेर दिगपाल जहाँ ते।",
      "कबि कोबिद कहि सके कहाँ ते॥"
    ],
    englishText: [
      "Yam Kuber Digpal Jahan te.",
      "Kavi kovid kahi sake kahan te."
    ],
    imageUrl: demoImageUrl // Depicting the vast expanse of the cosmos and the limits of description
  },
  {
    id: "chaupai-16",
    type: "chaupai",
    number: 16,
    hindiText: [
      "तुम उपकार सुग्रीवहिं कीन्हा।",
      "राम मिलाय राज पद दीन्हा॥"
    ],
    englishText: [
      "Tum upkar Sugreevahin keenha.",
      "Ram milaye rajpad deenha."
    ],
    imageUrl: "/chaupai-16.jpg" // Depicting Hanuman alongside Sugriva, helping him gain Ram's support
  },
  {
    id: "chaupai-17",
    type: "chaupai",
    number: 17,
    hindiText: [
      "तुम्हरो मंत्र विभीषण माना।",
      "लंकेश्वर भए सब जग जाना॥"
    ],
    englishText: [
      "Tumharo mantra Vibheeshan mana.",
      "Lankeshwar bhaye sab jag jana."
    ],
    imageUrl: "/chaupai-17.jpg" // Depicting Hanuman and Vibhishana, advising him to join Ram's side
  },
  {
    id: "chaupai-18",
    type: "chaupai",
    number: 18,
    hindiText: [
      "जुग सहस्र योजन पर भानू।",
      "लील्यो ताहि मधुर फल जानू॥"
    ],
    englishText: [
      "Yug sahastra yojan par Bhanu.",
      "Leelyo tahi madhur phal janu."
    ],
    imageUrl: "/chaupai-18.jpg" // Depicting a youthful Hanuman attempting to swallow the rising sun, with a glowing solar disk
  },
  {
    id: "chaupai-19",
    type: "chaupai",
    number: 19,
    hindiText: [
      "प्रभु मुद्रिका मेलि मुख माहीं।",
      "जलधि लाँघि गये अचरज नाहीं॥"
    ],
    englishText: [
      "Prabhu mudrika meli mukh maahin.",
      "Jaladhi laanghi gaye achraj naahin."
    ],
    imageUrl: "/chaupai-19.jpg" // Depicting Hanuman with Ram's ring in his mouth, soaring above a vast ocean with a radiant sun
  },
  {
    id: "chaupai-20",
    type: "chaupai",
    number: 20,
    hindiText: [
      "दुर्गम काज जगत के जेते।",
      "सुगम अनुग्रह तुम्हरे तेते॥"
    ],
    englishText: [
      "Durgaam kaj jagat ke jete.",
      "Sugam anugraha tumhre tete."
    ],
    imageUrl: "/chaupai-20.jpg" // Depicting Hanuman effortlessly performing any difficult task, with a serene and confident aura
  },
  {
    id: "chaupai-21",
    type: "chaupai",
    number: 21,
    hindiText: [
      "राम दुआरे तुम रखवारे।",
      "होत न आज्ञा बिनु पैसारे॥"
    ],
    englishText: [
      "Ram duwaare tum rakhvare.",
      "Hot na agya binu paisare."
    ],
    imageUrl: "/chaupai-21.jpeg" // Depicting Hanuman guarding the divine gateway with a focused gaze and divine aura
  },
  {
    id: "chaupai-22",
    type: "chaupai",
    number: 22,
    hindiText: [
      "सब सुख लहै तुम्हारी सरना।",
      "तुम रक्षक काहू को डरना॥"
    ],
    englishText: [
      "Sab sukh lahai tumhari sarna.",
      "Tum rakshak kahu ko darna."
    ],
    imageUrl: demoImageUrl // Depicting a peaceful Hanuman offering shelter to all seekers, with divine energy surrounding him
  },
  {
    id: "chaupai-23",
    type: "chaupai",
    number: 23,
    hindiText: [
      "आपन तेज सम्हारो आपै।",
      "तीनों लोक हाँक तें काँपै॥"
    ],
    englishText: [
      "Aapan tej samharo aapai.",
      "Teenhon lok hank te kanpai."
    ],
    imageUrl: "/chaupai-23.jpg" // Depicting Hanuman in a powerful form, radiating intense golden energy, with ancient symbols in the background
  },
  {
    id: "chaupai-24",
    type: "chaupai",
    number: 24,
    hindiText: [
      "भूत पिसाच निकट नहिं आवै।",
      "महाबीर जब नाम सुनावै॥"
    ],
    englishText: [
      "Bhoot pisaach Nikat nahin aavai.",
      "Mahavir jab naam sunavai."
    ],
    imageUrl: "/chaupai-24.jpg" // Depicting a scene where evil forces are repelled by Hanuman's name and presence
  },
  {
    id: "chaupai-25",
    type: "chaupai",
    number: 25,
    hindiText: [
      "नासै रोग हरै सब पीरा।",
      "जपत निरंतर हनुमत बीरा॥"
    ],
    englishText: [
      "Nase rog harai sab peera.",
      "Japat nirantar Hanumant beera."
    ],
    imageUrl: demoImageUrl // Depicting a scene of healing and relief from pain through devotion to Hanuman
  },
  {
    id: "chaupai-26",
    type: "chaupai",
    number: 26,
    hindiText: [
      "संकट तें हनुमान छुड़ावै।",
      "मन क्रम वचन ध्यान जो लावै॥"
    ],
    englishText: [
      "Sankat te Hanuman chhudavai.",
      "Man Kram Vachan dhyan jo lavai."
    ],
    imageUrl: demoImageUrl // Depicting Hanuman guiding a focused devotee away from danger and obstacles
  },
  {
    id: "chaupai-27",
    type: "chaupai",
    number: 27,
    hindiText: [
      "सब पर राम तपस्वी राजा।",
      "तिन के काज सकल तुम साजा॥"
    ],
    englishText: [
      "Sab par Ram tapasvee raja.",
      "Tin ke kaj sakal Tum saja."
    ],
    imageUrl: "/chaupai-27.png" // Depicting Hanuman in a scene alongside Lord Ram, symbolizing service to the supreme king
  },
  {
    id: "chaupai-28",
    type: "chaupai",
    number: 28,
    hindiText: [
      "और मनोरथ जो कोई लावै।",
      "सोइ अमित जीवन फल पावै॥"
    ],
    englishText: [
      "Aur manorath jo koi lavai.",
      "Sohi amit jeevan phal pavai."
    ],
    imageUrl: demoImageUrl // Depicting a devotee receiving boundless blessings and fulfillment from Hanuman
  },
  {
    id: "chaupai-29",
    type: "chaupai",
    number: 29,
    hindiText: [
      "चारों जुग परताप तुम्हारा।",
      "है परसिद्ध जगत उजियारा॥"
    ],
    englishText: [
      "Charon Yug partap tumhara.",
      "Hai persidh jagat ujiyara."
    ],
    imageUrl: "/chaupai-29.jpg" // Depicting a glowing Hanuman, known across all eras and regions, with a radiant solar disk and focused aura
  },
  {
    id: "chaupai-30",
    type: "chaupai",
    number: 30,
    hindiText: [
      "साधु संत के तुम रखवारे।",
      "असुर निकंदन राम दुलारे॥"
    ],
    englishText: [
      "Sadhu Sant ke tum Rakhware.",
      "Asur nikandan Ram dulhare."
    ],
    imageUrl: demoImageUrl // Depicting Hanuman guarding a peaceful, divine gathering of sages and saints, with focused aura and warm light
  },
  {
    id: "chaupai-31",
    type: "chaupai",
    number: 31,
    hindiText: [
      "अष्ट सिद्धि नौ निधि के दाता।",
      "अस वर दीन जानकी माता॥"
    ],
    englishText: [
      "Ashta siddhi nav nidhi ke daata.",
      "As var deen Janki mata."
    ],
    imageUrl: "/chaupai-31.jpg" // Depicting Hanuman kneeling, with Janaki Maa blessing him and offering rare divine symbols
  },
  {
    id: "chaupai-32",
    type: "chaupai",
    number: 32,
    hindiText: [
      "राम रसायन तुम्हरे पासा।",
      "सदा रहो रघुपति के दासा॥"
    ],
    englishText: [
      "Ram rasayan tumhare pasa.",
      "Sada raho Raghupati ke dasa."
    ],
    imageUrl: demoImageUrl // Depicting Hanuman as a humble servant to Lord Ram, Lakshman, and Sita, with a peaceful aura
  },
  {
    id: "chaupai-33",
    type: "chaupai",
    number: 33,
    hindiText: [
      "तुम्हरे भजन राम को पावै।",
      "जनम जनम के दुख बिसरावै॥"
    ],
    englishText: [
      "Tumhare bhajan Ram ko pavai.",
      "Janam janam ke dukh bisravai."
    ],
    imageUrl: "/chaupai-33.jpg" // Depicting a focused devotee immersed in prayer, with a serene light surrounding him and divine symbols in the background
  },
  {
    id: "chaupai-34",
    type: "chaupai",
    number: 34,
    hindiText: [
      "अंत काल रघुबर पुर जाई।",
      "जहाँ जन्म हरि-भक्त कहाई॥"
    ],
    englishText: [
      "Anth kaal Raghuvir pur jayee.",
      "Jahan janam Hari-Bakht Kahayee."
    ],
    imageUrl: demoImageUrl // Depicting a divine, transcendent scene with a powerful, glowing Hanuman leading devotees to a divine city
  },
  {
    id: "chaupai-35",
    type: "chaupai",
    number: 35,
    hindiText: [
      "और देवता चित्त न धरई।",
      "हनुमत सेइ सर्व सुख करई॥"
    ],
    englishText: [
      "Aur Devta Chitt na dharayi.",
      "Hanumath se hi sarve sukh karayi."
    ],
    imageUrl: "/chaupai-35.jpg" // Depicting a devoted figure with hands folded in focused prayer, with a radiant light surrounding him
  },
  {
    id: "chaupai-36",
    type: "chaupai",
    number: 36,
    hindiText: [
      "संकट कटै मिटै सब पीरा।",
      "जो सुमिरै हनुमत बलबीरा॥"
    ],
    englishText: [
      "Sankat kate mite sab peera.",
      "Jo sumirai Hanumat Balbeera."
    ],
    imageUrl: demoImageUrl // Depicting a powerful scene where barriers are breaking and evil forces are repelled, with divine energy surrounding a focused figure
  },
  {
    id: "chaupai-37",
    type: "chaupai",
    number: 37,
    hindiText: [
      "जय जय जय हनुमान गोसाईं।",
      "कृपा करहु गुरुदेव की नाईं॥"
    ],
    englishText: [
      "Jai Jai Jai Hanuman Gosahin.",
      "Kripa Karahu Gurudev ki nyahin."
    ],
    imageUrl: demoImageUrl // Depicting a peaceful Hanuman with a warm halo, blessing a focused devotee with hands folded
  },
  {
    id: "chaupai-38",
    type: "chaupai",
    number: 38,
    hindiText: [
      "जो सत बार पाठ कर कोई।",
      "छूटहि बंदि महा सुख होई॥"
    ],
    englishText: [
      "Jo sat bar path kare koi.",
      "Chhutahi bandi maha sukh hoi."
    ],
    imageUrl: demoImageUrl // Depicting a scene where a focused devotee is released from shackles and embraced by light, with ancient symbols in the background
  },
  {
    id: "chaupai-39",
    type: "chaupai",
    number: 39,
    hindiText: [
      "जो यह पढ़ै हनुमान चालीसा।",
      "होय सिद्धि साखी गौरीसा॥"
    ],
    englishText: [
      "Jo yah padhe Hanuman Chalisa.",
      "Hoye siddhi sakhi Gaureesa."
    ],
    imageUrl: demoImageUrl // Depicting a focused figure reading from a sacred text with a peaceful, golden light surrounding him and divine energyWater
  },
  {
    id: "chaupai-40",
    type: "chaupai",
    number: 40,
    hindiText: [
      "तुलसीदास सदा हरि चेरा।",
      "कीजै नाथ हृदय महँ डेरा॥"
    ],
    englishText: [
      "Tulsidas sada hari chera.",
      "Keejai Nath Hriday mein dera."
    ],
    imageUrl: "/chaupai-40.jpg" // Depicting a focused poet writing with a serene and warm aura, with divine figures in the background
  },
  {
    id: "doha-2",
    type: "doha",
    hindiText: [
      "पवनतनय संकट हरन, मंगल मूरति रूप।",
      "राम लखन सीता सहित, हृदय बसहु सुर भूप॥"
    ],
    englishText: [
      "Pavantanaye Sankat Haran, Mangal Moorti Roop.",
      "Ram Lakhan Sita Sahit, Hrdaye Basahu Sur Bhoop."
    ],
    imageUrl: "/doha-2.jpg" // Depicting a focused figure with hands folded in concentrated prayer, with a golden light surrounding him and divine symbols in the background
  }
];