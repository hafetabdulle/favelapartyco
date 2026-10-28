import type { Dictionary } from './en';

/** Simplified Chinese (zh-CN) — Mandarin written form. */
const zh: Dictionary = {
  nav: {
    home: '首页',
    tours: '行程',
    concierge: '管家服务',
    contact: '联系我们',
    whatsapp: '联系我们',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    language: '语言',
    home_aria: 'Rio Explore — 首页',
  },

  common: {
    bookNow: '立即预订',
    includes: '包含',
    optionalAddon: '可选加购',
    readMore: '展开全文',
    showLess: '收起',
    seeDetails: '查看详情',
    visitProfile: '查看主页',
    whatsappUs: '用 WhatsApp 联系我们',
    messageUs: '联系我们',
    orWhatsapp: '也可以用 WhatsApp 联系我们',
    quickQuestion: '有问题？用 WhatsApp 问我们',
    photoCount: '张照片',
    previousPhoto: '上一张照片',
    nextPhoto: '下一张照片',
    goToPhoto: '跳到第',
    bookingMessage: '你好！我想了解：',
  },

  home: {
    hero: {
      line1: '体验',
      line2: '真正的',
      line3: '里约热内卢',
      reviews: '评价',
      findUs: '找到我们',
      viewAllTours: '查看全部行程',
      concierge: '管家服务',
    },
    why: {
      eyebrow: '关于我们',
      title: '为什么选择',
      accent: '我们？',
      body1:
        '在 Rio Explore，我们不只是带你看里约热内卢，而是帮你真正地生活在这座城市里。每一段体验都是为了让你接触这里真实的文化、真实的社区，以及旅游指南永远不会提到的角落。',
      body2:
        '因为旅行应该让你记住遇见的人，而不只是打卡过的景点。',
      tagline: '像当地人一样旅行，而不是像游客。',
      photoAlt: 'Milla 和 Tom 在基督像前',
    },
    features: {
      locals: {
        title: '本地向导',
        description: '土生土长的里约人，带你听见故事、走进你一个人绝对找不到的地方。',
      },
      nightlife: {
        title: '真实的夜生活',
        description: '天台酒吧、Pedra do Sal 的桑巴，还有真正的法维拉派对——不是给游客看的版本。',
      },
      adventure: {
        title: '刺激的冒险',
        description: '滑翔翼飞越海岸线、日出徒步、瀑布，还有无门直升机。',
      },
      prices: {
        title: '价格实在',
        description: '价格公道透明，大部分体验都有团体优惠。',
      },
      safe: {
        title: '安全有人陪',
        description: '这些社区我们很熟。独自旅行的人从头到尾都有人照应。',
      },
      booking: {
        title: '几分钟就订好',
        description: '在 WhatsApp 上发一条消息就安排妥当。不用填表，不用等。',
      },
    },
    crew: {
      eyebrow: '我们的人',
      title: '认识我们的',
      accent: '团队',
      subtitle: '真正住在这里的本地人，是真心乐意带你逛这座城市。',
      roles: {
        founder: '创始人兼向导',
        localGuide: '本地向导',
        influencer: '博主兼向导',
        manager: '经理',
        favelaGuide: '法维拉向导',
      },
    },
    popular: {
      eyebrow: '预订最多',
      title: '热门',
      accent: '行程',
      subtitle: '大多数人都从这几个开始。',
      allExperiences: '全部 30 项体验',
      notes: {
        favela: '3 人及以上每人 R$190',
        party: '含交通与免费酒水',
        hangGliding: '含 GoPro 视频',
      },
      tags: {
        local: '在地体验',
        nightlife: '夜生活',
        adventure: '冒险',
      },
    },
    cta: {
      eyebrow: '出发吧',
      title: '准备好你的',
      accent: '里约',
      titleEnd: '之旅了吗？',
      subtitle: '一次单独的体验，或是一整周的完整安排——不管哪种，都从一条消息开始。',
      bookTour: '预订行程',
      concierge: '管家服务',
    },
  },

  reviews: {
    eyebrow: '旅客评价',
    title: '旅客',
    accent: '怎么说',
    verified: '条已验证评价',
    filterAll: '全部',
  },

  findUs: {
    eyebrow: '随处都能预订',
    title: '在这些平台',
    accent: '找到我们',
    subtitle:
      '你熟悉的平台上都有我们。点一下标志就能看评价，或者直接在上面预订。',
    alsoOn: '也在',
    blurbs: {
      airbnb: '查看我们的体验与评价',
      tripadvisor: '阅读旅客评价',
      getyourguide: '浏览并预订我们的行程',
    },
  },

  toursPage: {
    eyebrow: '30 项体验',
    title: '里约的每个角落，',
    accent: '等你探索',
    subtitle:
      '最棒的冒险、标志性的派对、难忘的体验——由一群真正生活在这座城市里的年轻人带你玩。',
    femaleOnly1: '所有体验都可以应要求安排为',
    femaleOnlyHighlight: '女性专属团',
    femaleOnly2: '，由女性向导全程陪同。',
    browseByCategory: '按分类浏览',
    experiencesCount: '项体验',
    priceList: {
      eyebrow: '一览',
      title: '快速',
      accent: '价目表',
      subtitle: '所有体验和价格都在这里。价格以巴西雷亚尔计。',
    },
    cta: {
      title: '难以抉择？',
      accent: '我们帮你安排',
      subtitle:
        '我们的管家服务负责你的整趟行程：行程规划、24 小时支持，所有体验都享优惠价。',
      button: '了解管家服务',
    },
  },

  categories: {
    nightlife:     { label: '夜生活',     tagline: '酒吧、桑巴、天台，还有真正的法维拉派对' },
    'rio-culture': { label: '里约与文化', tagline: '地标、市集、足球，和里约的日常' },
    adventure:     { label: '冒险与刺激', tagline: '从空中看里约，飞越整座城市' },
    outdoors:      { label: '户外与自然', tagline: '日出、徒步、海滩与大海' },
    local:         { label: '在地体验',   tagline: '走进罗西尼亚，和住在那里的人一起' },
  },

  badges: {
    'Most Popular': '最受欢迎',
    Premium: '尊享',
  },

  concierge: {
    hero: {
      title: '你的里约，',
      accent: '你的方式',
      subtitle:
        '我们的管家服务为你安排整趟行程：行程规划、24 小时支持，我们的体验还享优惠价。你只需要人到，然后好好玩。',
    },
    intro: {
      title: '我们的',
      accent: '管家服务',
      subtitle: '两种方案，取决于你希望我们帮你安排多少',
    },
    option1: {
      label: '方案一',
      title: '专属行程协助',
      price: '50 美元',
      per: '每天',
      cta: '开始',
      includes: [
        '帮你规划并安排行程',
        '整趟旅程 24 小时协助与支持',
        '活动与行程的推荐和协调',
        '以低于网站标价的优惠价参加我们的所有体验',
      ],
    },
    option2: {
      label: '方案二',
      title: '全包体验套餐',
      subtitle: '每天 100 美元——包含方案一的全部内容，再加上我们精选的体验',
      mostPopular: '最受欢迎',
      whatsIncluded: '包含内容',
      getQuote: '索取报价',
      totalPerDay: '总价 · 每天 100 美元',
      packages: {
        three: {
          name: '3 天套餐',
          description: '全包服务的全部内容，另加：',
          includes: ['日出徒步', '法维拉派对', 'Pedra do Sal 桑巴夜', '其他行程享优惠价'],
        },
        five: {
          name: '5 天套餐',
          description: '全包服务的全部内容，另加：',
          includes: [
            '日出徒步',
            '法维拉派对',
            '法维拉导览（不含无人机视频）',
            'Pedra do Sal 桑巴夜',
            'Botafogo 酒吧巡游',
            '其他行程享优惠价',
          ],
        },
      },
    },
    fixedPriceNote:
      '请注意：直升机飞行和滑翔翼为固定价格，这两项活动无法提供折扣。',
    included: {
      title: '一切',
      accent: '都安排好了',
      subtitle: '你只管人来，准备好去冒险',
      items: {
        itinerary:  { title: '行程规划',     description: '我们围绕你真正想做的事来安排每一天' },
        support:    { title: '24 小时支持',  description: '整趟旅程随时有人在电话另一头' },
        activities: { title: '活动协调',     description: '行程、餐厅和夜生活的推荐与预订' },
        discounts:  { title: '行程优惠价',   description: '我们的体验价格比网站上标的更优惠' },
        transport:  { title: '交通全包',     description: '接送我们来安排，你完全不用操心怎么去' },
        nightlife:  { title: '夜生活通道',   description: '派对、酒吧巡游和活动，带你的人都熟门熟路' },
        guides:     { title: '本地向导',     description: '土生土长的里约人全程陪同' },
        safety:     { title: '安全第一',     description: '你的安全和舒适是我们最优先的事' },
      },
    },
    form: {
      title: '索取你的',
      accent: '专属报价',
      subtitle: '告诉我们你理想中的里约是什么样',
      name: '你的姓名',
      namePlaceholder: '张伟',
      email: '电子邮箱',
      emailPlaceholder: 'name@example.com',
      whatsapp: 'WhatsApp 号码',
      whatsappPlaceholder: '+55 21 12345-6789',
      package: '想选哪个方案',
      packagePlaceholder: '请选择',
      packageCustom: '自定义天数',
      guests: '人数',
      dates: '希望的日期',
      datesPlaceholder: '例如：2027 年 1 月 15–22 日',
      interests: '兴趣与活动',
      interestsPlaceholder: '例如：极限运动、夜生活、文化、海滩',
      message: '补充信息',
      messagePlaceholder: '有什么特殊需求、饮食禁忌或问题吗？',
      submit: '通过 WhatsApp 发送',
      submitting: '发送中…',
      otherContact: '其他联系方式',
      disclaimer: '点击「通过 WhatsApp 发送」后，设备上会打开一条已写好的消息',
      messageIntro: '你好！我想了解管家服务套餐：',
      labels: {
        name: '姓名',
        email: '邮箱',
        whatsapp: 'WhatsApp',
        package: '方案',
        guests: '人数',
        dates: '希望的日期',
        interests: '兴趣',
        message: '留言',
      },
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: '可以调整活动内容吗？',
          answer:
            '当然可以。两种方案都完全灵活——告诉我们你喜欢什么（冒险、文化、夜生活、放松），我们就围绕它来安排行程。',
        },
        {
          question: '包含住宿吗？',
          answer:
            '不包含。管家服务涵盖规划、支持和体验本身。不过我们很乐意推荐住的地方，也可以帮你预订。',
        },
        {
          question: '安全吗？',
          answer:
            '安全是我们最优先的事。我们的本地向导对这些区域非常熟悉，会做好各种准备，让你的旅程既安全又难忘。',
        },
        {
          question: '可以延长行程吗？',
          answer:
            '可以。任何套餐都能延长，也能完全按你的天数定制——告诉我们你在里约待多久就行。',
        },
        {
          question: '有团体优惠吗？',
          answer:
            '有。人越多，每个人的价格越优惠。联系我们获取团体报价。',
        },
      ],
    },
    cta: {
      title: '还在考虑？',
      accent: '聊聊吧',
      subtitle:
        '没有任何压力——给我们发条消息，我们一起把这趟旅程安排好。',
      browseTours: '浏览全部行程',
    },
  },

  contact: {
    title: '一起规划你的',
    accent: '里约之旅',
    subtitle:
      '有问题？想订行程？用 WhatsApp 联系我们最快——通常几分钟内就会回复。',
    chatNow: '马上聊',
    cards: {
      whatsapp: { title: 'WhatsApp',  description: '回复最快，通常几分钟内，24 小时都在' },
      camilla:  { title: 'Camilla',   description: '直接联系 Camilla，你的本地主人' },
      instagram:{ title: 'Instagram', description: '看看我们每天都在玩什么' },
      email:    { title: '电子邮箱',   description: '适合较长的咨询和团体预订' },
    },
    form: {
      title: '给我们发条',
      accent: '消息',
      subtitle: '告诉我们你在找什么，我们会回复你',
      name: '你的姓名',
      namePlaceholder: '张伟',
      email: '电子邮箱',
      emailPlaceholder: 'name@example.com',
      subject: '主题',
      subjectPlaceholder: '想聊什么？',
      message: '留言',
      messagePlaceholder: '多说一点…',
      submit: '通过 WhatsApp 发送',
      submitting: '发送中…',
      intro: '来自联系表单的消息：',
    },
  },

  footer: {
    tagline: '地道的里约热内卢体验，由真正住在这里的人带你玩。',
    explore: '探索',
    popular: '热门',
    getInTouch: '联系方式',
    findUsOn: '在这些平台找到我们',
    weAccept: '支持支付方式',
    rights: '版权所有。',
    links: {
      allTours: '全部行程',
      concierge: '管家服务',
      contact: '联系我们',
      reviews: '评价',
    },
  },

  toucan: {
    aria: '一只小巨嘴鸟——点它一下',
    title: '你抓到巨嘴鸟了！',
    body1: '送你',
    discount: '95 折优惠',
    body2: '，任意体验都能用。预订时把这个码发给我们就行。',
    tapToCopy: '点击复制',
    copied: '已复制！',
    bookWith: '用 95 折预订',
    dismiss: '不再显示巨嘴鸟',
    whatsappMessage: '你好！我找到巨嘴鸟了 🦜 — 我想使用优惠码',
    close: '关闭',
  },

  tourContent: {
    'pubcrawl-favela-party': {
      title: '罗西尼亚：酒吧巡游与真正的法维拉派对',
      duration: '8 小时',
      description:
        '在本地酒吧喝酒、看天台夜景、听巴西放克，再去罗西尼亚参加一场真正的法维拉派对。认识新朋友，和当地人一起玩，看见大多数游客永远看不到的那一面里约。',
      includes: ['交通接送', '免费酒水', '天台酒吧', '本地向导'],
    },
    'botafogo-bar-crawl': {
      title: 'Botafogo 酒吧巡游',
      duration: '3 小时',
      description:
        '走进 Botafogo 最地道的几家酒吧——这是里约最有活力的街区之一。和一群有意思的人、一位本地向导一起，吃点好的、喝点好的、认识点有趣的人。',
      includes: ['多家酒吧巡游', '本地向导'],
    },
    'pedra-do-sal-samba': {
      title: 'Pedra do Sal 周一桑巴夜',
      duration: '6 小时',
      description:
        '周一晚上的 Pedra do Sal 是里约最大的桑巴派对。加入一群热闹的人，认识新朋友，跟着现场音乐和整条街的能量一起跳舞。',
      includes: ['本地向导', '前往 Pedra do Sal 的车辆接送', '团体体验'],
    },
    'ipanema-bar-crawl': {
      title: '伊帕内玛经典酒吧巡游',
      duration: '3 小时',
      description:
        '体验伊帕内玛和 Leblon 的夜晚，走进当地人最爱的酒吧，喝几杯，认识来自世界各地的旅人。和一群有趣的人、一位本地向导一起逛里约最具代表性的两个街区。',
      includes: ['本地向导', '多家酒吧巡游'],
    },
    'rocinha-rooftop-bbq': {
      title: '走进罗西尼亚：天台巴西烤肉之夜',
      duration: '5 小时',
      description:
        '在法维拉体验一个真实的夜晚，吃一顿地道的巴西烤肉，身边是新认识的本地和各国朋友。音乐、游戏、绝佳的天台夜景、跳舞，当然还有好吃的。',
      includes: ['本地向导', '巴西烤肉无限量', '素食选择', '啤酒乒乓'],
    },

    'christ-redeemer-ticket': {
      title: '基督像：门票与交通',
      duration: '3 小时',
      priceNote: '每人',
      description:
        '在里约热内卢亲眼看看世界奇迹。这座城市最具代表性的地标——基督像，门票、交通和专业本地向导全部安排好。了解它的历史，欣赏里约最壮观的全景。',
      includes: ['本地向导', '交通接送', '基督像门票'],
    },
    'christ-selaron-steps': {
      title: '基督像与塞勒隆阶梯',
      duration: '3 小时',
      priceNote: '每人',
      description:
        '一趟行程逛完里约最有名的两个地方，配专车和本地向导。先去基督像看壮阔的城市全景，再去色彩缤纷、闻名世界的塞勒隆阶梯。',
      includes: ['本地向导', '专车接送', '基督像门票'],
    },
    'rio-full-day': {
      title: '里约一日全览',
      duration: '6 小时',
      priceNote: '每人',
      description:
        '用一整天看遍里约的精华：从基督像、糖面包山，到塞勒隆阶梯和明日博物馆。专车接送加本地向导，舒舒服服地把这座城市最标志性的地方都看一遍。',
      includes: ['本地向导', '专车接送'],
    },
    'sunrise-nature-landmarks': {
      title: '在里约的自然地标看日出',
      duration: '5 小时',
      priceNote: '每人',
      description:
        '从 Dona Marta 看日出开始这一天，再前往基督像，以及 Parque Lage 和植物园的热带风景。标志性地标加上茂密的自然，全程有本地向导。',
      includes: ['本地向导', '专车接送'],
    },
    'feira-da-gloria': {
      title: '在 Feira da Glória 吃吃喝喝',
      duration: '2 小时',
      priceNote: '每人',
      description:
        '在里约最大的市集之一 Feira da Glória 尝尝地道的巴西小吃和传统饮品。和摊主聊聊天，尝尝卡里奥卡口味，感受市集的文化和热闹。',
      includes: ['本地向导', '美食试吃'],
    },
    'full-sunday-eat-drink-shop': {
      title: '完整的周日：吃、喝、逛',
      duration: '3.5 小时',
      priceNote: '每人',
      description:
        '过一个本地人的周日：色彩缤纷的塞勒隆阶梯、Feira da Glória 市集，还有著名的 Havaianas 概念店。跟着本地向导逛，还能定制一双属于自己的人字拖。',
      includes: ['本地向导', '专车接送'],
    },
    'football-maracana': {
      title: '马拉卡纳球场看球',
      duration: '约 5 小时',
      price: '视场次而定',
      description:
        '在传奇的马拉卡纳球场，和本地球迷还有其他旅人一起感受巴西足球的热情。正式球票、本地向导和专车接送都包含在内——你只要享受气氛，像卡里奥卡一样看球就好。',
      includes: ['正式球票', '本地向导', '专车接送'],
    },
    'vidigal-moto-tour': {
      title: 'Vidigal 摩托导览（含本地向导）',
      duration: '2 小时',
      description:
        '坐上摩托车，跟着信得过的本地向导穿过 Vidigal 的小巷、绝佳观景点和日常街景。感受法维拉最真实的能量！',
      includes: ['摩的接送', '本地向导', '观景点停留', '穿行小巷'],
    },

    'hang-gliding': {
      title: '滑翔翼',
      duration: '约 2 小时',
      priceNote: '每人',
      description:
        '乘滑翔翼飞越里约的山脉、海岸线和沙滩，这是一趟难忘的冒险。在空中欣赏壮丽的景色，还有随行的 GoPro 视频帮你记录下来。',
      includes: ['专业飞行员', 'GoPro 视频'],
      addons: [{ name: '360° 视频' }],
    },
    paragliding: {
      title: '滑翔伞',
      duration: '约 2 小时',
      priceNote: '每人',
      description:
        '乘滑翔伞飞越里约的山脉、海岸线和沙滩，这是一趟难忘的冒险。在空中欣赏壮丽的景色，还有随行的 GoPro 视频帮你记录下来。',
      includes: ['专业飞行员', 'GoPro 视频'],
      addons: [{ name: '360° 视频' }],
    },
    'helicopter-doors-off': {
      title: '无门直升机飞行',
      duration: '30 分钟飞行',
      priceNote: '1 人 · 2 人时每人 R$1,200 · 3 人时每人 R$1,100',
      description:
        '用最震撼的视角看里约——搭乘无门直升机飞越这座城市最具代表性的地标、山脉和海滩。在毫无遮挡的空中拍照录影，把基督像、糖面包山和整条海岸线都收进镜头。',
      includes: ['30 分钟无门直升机飞行'],
    },
    'helicopter-doors-on': {
      title: '直升机观光（有门）',
      duration: '20 分钟',
      priceNote: '总价，最多 3 人',
      description:
        '舒适又安全地从空中看里约！关着门欣赏基督像、糖面包山和海滩。价格为最多 3 人的总价。',
      includes: ['有门直升机', '专业飞行员', '最多 3 人', '基督像景观'],
    },

    'morro-dois-irmaos-sunrise': {
      title: '双兄弟山日出徒步',
      duration: '5 小时',
      priceNote: '每人 · 2 人及以上每人 R$150',
      description:
        '在双兄弟山顶迎接美得不像话的日出，从里约的上空开始这一天。先坐摩的穿过 Vidigal，再走一段轻松到中等强度的山路，最后用一顿本地早餐收尾。',
      includes: ['本地向导', '早餐', '所有门票费用'],
    },
    'pedra-bonita-picnic': {
      title: 'Pedra Bonita 山顶野餐',
      duration: '3 小时',
      description:
        '走一段轻松的山路到 Pedra Bonita 山顶，俯瞰里约的群山、大海和海岸线。在黄昏的金色光线里吃点心、吃新鲜水果，身边还有一群有意思的人。',
      includes: ['本地向导', '从 Leblon 出发的交通', '点心'],
    },
    'sunrise-waterfall': {
      title: '日出与瀑布探险',
      duration: '6 小时',
      description:
        '从 Vista Chinesa 看着太阳从里约升起开始这一天，然后走进雨林来一趟瀑布探险。吃一顿看得见全景的轻食早餐，穿过自然，最后在瀑布下泡个凉快。',
      includes: ['本地向导', '轻食早餐', '交通接送'],
    },
    'rio-ebike-tour': {
      title: '里约电动自行车之旅',
      duration: '3 小时',
      description:
        '骑电动自行车轻松逛里约，穿过科帕卡巴纳、Botafogo、Flamengo 和漂亮的海滨步道。看看标志性街区，停下来拍几张好照片，路上再来一颗清凉的椰子水。',
      includes: ['电动自行车', '本地向导', '椰子水', '照片与视频'],
    },
    'sunrise-paddleboarding': {
      title: '科帕卡巴纳日出桨板',
      duration: '2 小时',
      description:
        '在科帕卡巴纳海滩划向日出，看着天空一点点变色。这是一段安静、适合新手的体验，海岸景色很美，还有照片和视频帮你记住这个早晨。',
      includes: ['本地向导', '桨板装备', '安全教学', '照片与视频'],
    },
    'girls-only-ipanema': {
      title: '伊帕内玛女生专属海滩日',
      duration: '3.5 小时',
      description:
        '和一群女生在伊帕内玛海滩度过一个下午，有冷切拼盘、游戏、手作和轻松的氛围。在海边放松、认识新朋友，一起看里约最美的日落之一。',
      includes: ['本地女主人', '冷切拼盘与点心', '手作材料', '游戏与活动'],
    },
    'joatinga-hidden-beach': {
      title: 'Joatinga 隐秘海滩一日',
      duration: '3 小时',
      description:
        '避开人潮，去 Joatinga——里约最美的隐秘海滩之一，三面是峭壁和热带植被。游泳、发呆、玩 altinha，和当地人还有其他旅人一起过一个真实的海滩日。',
      includes: ['本地向导'],
    },
    'surf-lesson-arpoador': {
      title: 'Arpoador 海滩冲浪课',
      duration: '1 小时',
      description:
        '跟着本地教练抓住人生第一道浪，体验里约有名的冲浪文化。学基本动作，下海练习，在 Arpoador 上一堂轻松又适合新手的冲浪课。',
      includes: ['本地冲浪教练', '冲浪装备', '实操教学', '冲浪基础理论'],
    },
    'futevolei-class': {
      title: '足排球入门课',
      duration: '1 小时',
      description:
        '跟着本地教练学里约最受欢迎的沙滩运动之一。了解足排球的基本规则，在沙地上练技术，在里约的海滩上一堂轻松的新手课。',
      includes: ['本地足排球教练', '器材', '实操教学', '足排球基本技巧'],
    },
    'sugarloaf-hike': {
      title: '糖面包山徒步',
      duration: '30 分钟',
      priceNote: '包团 · 团体每人 R$150',
      description:
        '走一段 30 分钟的轻快山路，欣赏标志性的糖面包山和周围海滩的壮丽景色。适合当作一次短途冒险，也可以作为更长行程的一部分。',
      includes: ['专业向导', '风景步道', '全景视野', '水与点心'],
    },

    'rocinha-favela-tour': {
      title: '罗西尼亚法维拉完整导览',
      duration: '3 小时',
      priceNote: '每人 · 3 人及以上每人 R$190',
      description:
        '跟着本地向导从内部认识罗西尼亚：刺激的摩的上山、俯瞰里约的观景点，还有卡波耶拉、街头艺术、足球和社区的日常。和居民聊天，真正理解巴西最大法维拉的文化、历史和真实生活。',
      includes: ['本地向导'],
      addons: [{ name: '专业无人机视频' }],
    },
    'mini-rocinha-drone': {
      title: '罗西尼亚迷你导览与无人机视频',
      duration: '3 小时',
      priceNote: '每人',
      description:
        '跟着本地向导逛罗西尼亚，坐摩的穿过社区，用一个全新的视角记录这段体验。最后用无人机在法维拉上空拍下电影感的画面，带走一支属于你的专业视频。',
      includes: ['本地向导', '专业无人机视频'],
    },
    'cria-hairstyle-makeover': {
      title: '巴西「Cria」风格造型改造',
      duration: '3 小时',
      priceNote: '每人',
      description:
        '走进罗西尼亚的本地理发店，用一个巴西风格的发型和漂染换个样子。这不只是剪头发，而是一种很特别的方式，让你接触当地文化，用完全不同的角度认识法维拉。',
      includes: ['本地向导', '剪发', '漂染'],
    },
  },
};

export default zh;
