  /**
   * 100 部完全不重复的经典英文电影 & 100 个互不相同的核心单词数据库 (100 Unique Films & 100 Unique Words)
   */
  const MOVIE_VOCAB_DB = [
    {
      id: 1,
      movie: "肖申克的救赎 (The Shawshank Redemption)",
      speaker: "安迪 (Andy)",
      listener: "瑞德 (Red)",
      scene: "安迪在信中告诫狱友瑞德在逆境中对自由怀抱希望",
      en: "Remember, Red, hope is a good thing, maybe the best of things. A man must remain _____ no matter how long the darkness endures.",
      word: "resilient",
      options: ["resilient", "reluctant", "reckless", "rigid"],
      phonetic: "/rɪˈzɪliənt/",
      pos: "adj.",
      meaning: "有韧性的；能迅速恢复的，适应力强的",
      trans: "记住，瑞德，希望是件美好的事，也许是世上最美好的东西。无论黑暗持续多久，人都必须保持顽强的韧性。"
    },
    {
      id: 2,
      movie: "星际穿越 (Interstellar)",
      speaker: "布兰德教授 (Brand)",
      listener: "库珀 (Cooper)",
      scene: "在飞船上探讨人类对爱与未知的感知能力",
      en: "Love is the one thing we're capable of perceiving that can _____ the boundaries of time and space.",
      word: "transcend",
      options: ["transcend", "transform", "transmit", "terminate"],
      phonetic: "/trænˈsend/",
      pos: "v.",
      meaning: "超越，胜过，超出...的界限",
      trans: "爱是我们唯一能感知的、能够超越时间和空间界限的事物。"
    },
    {
      id: 3,
      movie: "教父 (The Godfather)",
      speaker: "老教父维托 (Don Corleone)",
      listener: "麦克 (Michael)",
      scene: "教父在花园里向继承人传授立身处世的准则",
      en: "Never let anyone outside the family know what you are thinking. A _____ decision must never be hurried by emotion.",
      word: "deliberate",
      options: ["deliberate", "desperate", "delicate", "defiant"],
      phonetic: "/dɪˈlɪbərət/",
      pos: "adj.",
      meaning: "深思熟虑的，从容不迫的；蓄意的",
      trans: "永远别让家族外的人知道你在想什么。深思熟虑的决定绝不能被情绪所催促。"
    },
    {
      id: 4,
      movie: "盗梦空间 (Inception)",
      speaker: "柯布 (Cobb)",
      listener: "阿丽雅德妮 (Ariadne)",
      scene: "柯布解释念头如同病毒一般顽强扎根在潜意识里",
      en: "An idea is like a virus: resilient, highly _____, and the smallest seed can grow to define or destroy you.",
      word: "contagious",
      options: ["contagious", "continuous", "conscious", "conspicuous"],
      phonetic: "/kənˈteɪdʒəs/",
      pos: "adj.",
      meaning: "有感染力的，传染性的",
      trans: "一个念头就像病毒：坚韧、极具感染力，最小的种子也能茁壮成长，塑造你或毁灭你。"
    },
    {
      id: 5,
      movie: "黑暗骑士 (The Dark Knight)",
      speaker: "阿尔弗雷德 (Alfred)",
      listener: "布鲁斯·韦恩 (Bruce Wayne)",
      scene: "老管家分析小丑不可捉摸、非理性的混乱本性",
      en: "Some men aren't looking for anything logical. Their desire to spread _____ cannot be bought, bullied, or reasoned with.",
      word: "chaos",
      options: ["chaos", "charity", "chorus", "chasm"],
      phonetic: "/ˈkeɪɒs/",
      pos: "n.",
      meaning: "混乱，紊乱，混沌",
      trans: "有些人并不遵循任何常理。他们散播混乱的渴望既买不通，也无法被威胁或讲道理。"
    },
    {
      id: 6,
      movie: "阿甘正传 (Forrest Gump)",
      speaker: "阿甘妈妈 (Mrs. Gump)",
      listener: "阿甘 (Forrest)",
      scene: "病榻前向儿子解释生命的未知性与注定",
      en: "Life was like a box of chocolates, Forrest. It is fundamentally _____ and you never know what you're gonna get.",
      word: "unpredictable",
      options: ["unpredictable", "unprecedented", "unbearable", "undeniable"],
      phonetic: "/ˌʌnprɪˈdɪktəbl/",
      pos: "adj.",
      meaning: "不可预测的，捉摸不透的",
      trans: "生活就像一盒巧克力，阿甘。它从根本上是不可预测的，你永远不知道下一颗会得到什么。"
    },
    {
      id: 7,
      movie: "死亡诗社 (Dead Poets Society)",
      speaker: "基廷老师 (John Keating)",
      listener: "学生们 (Students)",
      scene: "展示校友老照片，告诫少年们要及时行乐、活出不凡",
      en: "Carpe diem. Seize the day, boys. Make your lives _____ before youth turns into dust.",
      word: "extraordinary",
      options: ["extraordinary", "extravagant", "exhaustive", "exceptional"],
      phonetic: "/ɪkˈstrɔːdnri/",
      pos: "adj.",
      meaning: "非凡的，特别的，离奇的",
      trans: "及时行乐吧，孩子们。在青春化为尘土之前，让你们的生命变得非同凡响。"
    },
    {
      id: 8,
      movie: "心灵捕手 (Good Will Hunting)",
      speaker: "西恩教授 (Sean Maguire)",
      listener: "威尔 (Will)",
      scene: "湖边长椅上西恩指出威尔由于恐惧而紧闭心扉的弱点",
      en: "You can't experience true intimacy until you are willing to make yourself _____ to another human being.",
      word: "vulnerable",
      options: ["vulnerable", "valuable", "vigorous", "versatile"],
      phonetic: "/ˈvʌlnərəbl/",
      pos: "adj.",
      meaning: "易受伤害的，脆弱的；敞开心扉的",
      trans: "除非你愿意向另一个人展现自己的脆弱与无防备，否则你无法体验真正的亲密。"
    },
    {
      id: 9,
      movie: "泰坦尼克号 (Titanic)",
      speaker: "杰克 (Jack)",
      listener: "露丝 (Rose)",
      scene: "在头等舱晚宴后，杰克教露丝把握当下生命的恩赐",
      en: "I figure life's a gift and I don't intend on wasting it. We should _____ each dawn as it comes.",
      word: "cherish",
      options: ["cherish", "chastise", "channel", "charter"],
      phonetic: "/ˈtʃerɪʃ/",
      pos: "v.",
      meaning: "珍爱，珍惜，怀念",
      trans: "我觉得生命是一份恩赐，我绝不打算浪费它。当每个黎明来临时，我们都应当倍加珍惜。"
    },
    {
      id: 10,
      movie: "楚门的世界 (The Truman Show)",
      speaker: "克里斯托弗 (Christof)",
      listener: "楚门 (Truman)",
      scene: "导演在天空穹顶向试图踏入现实世界的楚门喊话",
      en: "There's no more truth out there than in the world I built for you. The real world is full of _____ and deceit.",
      word: "hypocrisy",
      options: ["hypocrisy", "harmony", "hierarchy", "humility"],
      phonetic: "/hɪˈpɒkrəsi/",
      pos: "n.",
      meaning: "伪善，虚伪",
      trans: "外面的真实世界并不比我为你建造的世界更真实。真实世界里充斥着虚伪与欺诈。"
    },
    {
      id: 11,
      movie: "闻香识女人 (Scent of a Woman)",
      speaker: "弗兰克中校 (Frank Slade)",
      listener: "查理 (Charlie)",
      scene: "在全校听证会上为维护查理的品格发表演说",
      en: "There is nothing like the sight of an amputated spirit; there is no _____ for integrity once it is traded away.",
      word: "substitute",
      options: ["substitute", "substance", "substrate", "subsidize"],
      phonetic: "/ˈsʌbstɪtjuːt/",
      pos: "n.",
      meaning: "替代物，代用品",
      trans: "没有什么比灵魂被截肢更可怕的了；正直一旦被出卖，就再没有任何替代品可以弥补。"
    },
    {
      id: 12,
      movie: "美丽心灵 (A Beautiful Mind)",
      speaker: "约翰·纳什 (John Nash)",
      listener: "艾丽西亚 (Alicia)",
      scene: "在诺贝尔奖颁奖礼上将一生荣誉归功于妻子的深情",
      en: "It is only in the mysterious equations of love that any logical reasons can be found. You are the reason I can _____ my delusions.",
      word: "confront",
      options: ["confront", "confine", "conform", "confuse"],
      phonetic: "/kənˈfrʌnt/",
      pos: "v.",
      meaning: "正视，对抗，直面",
      trans: "只有在神秘的爱的方程式里，才能找到真正的逻辑理由。你是我能够直面自己幻觉的唯一理由。"
    },
    {
      id: 13,
      movie: "辛德勒的名单 (Schindler's List)",
      speaker: "奥斯卡·辛德勒 (Oskar Schindler)",
      listener: "阿蒙·高斯 (Amon Goeth)",
      scene: "辛德勒试图改变纳粹军官对于真正权力的认知",
      en: "Power is when we have every justification to kill, and we don't. That is true _____ and strength.",
      word: "clemency",
      options: ["clemency", "clumsiness", "complacency", "coincidence"],
      phonetic: "/ˈklemənsi/",
      pos: "n.",
      meaning: "仁慈，宽容，宽大处理",
      trans: "权力不是你能随意杀戮，而是你有充分的理由杀戮，却选择了赦免。那才是真正的仁慈与力量。"
    },
    {
      id: 14,
      movie: "低俗小说 (Pulp Fiction)",
      speaker: "朱尔斯 (Jules)",
      listener: "林戈 (Ringo)",
      scene: "在餐馆对峙时，朱尔斯反思自己洗心革面的内心转变",
      en: "The truth is you're the weak. And I'm the tyranny of evil men. But I'm trying real hard to be _____ instead.",
      word: "righteous",
      options: ["righteous", "rigid", "ruthless", "relentless"],
      phonetic: "/ˈraɪtʃəs/",
      pos: "adj.",
      meaning: "正直的，公正的，道德崇高的",
      trans: "事实是你很软弱，而我是邪恶之人的暴行。但我正在拼尽全力，试着做一个正直的人。"
    },
    {
      id: 15,
      movie: "卡萨布兰卡 (Casablanca)",
      speaker: "里克 (Rick Blaine)",
      listener: "伊尔莎 (Ilsa Lund)",
      scene: "机场告别之际，里克劝伊尔莎追随丈夫投身反法西斯事业",
      en: "It doesn't take much to see that the problems of three little people don't amount to a hill of beans in this _____ world.",
      word: "tumultuous",
      options: ["tumultuous", "tedious", "tangible", "timid"],
      phonetic: "/tjuːˈmʌltʃuəs/",
      pos: "adj.",
      meaning: "动荡的，混乱喧嚣的",
      trans: "不难看出，在这个动荡的大世界里，我们三个小人物的恩怨情仇根本微不足道。"
    },
    {
      id: 16,
      movie: "乱世佳人 (Gone with the Wind)",
      speaker: "瑞德·巴特勒 (Rhett Butler)",
      listener: "斯嘉丽 (Scarlett O'Hara)",
      scene: "南方内战烽火中，瑞德揭示战争背后冷酷残酷的本质",
      en: "Take a good look at this war, Scarlett. Real wealth is created in the ruins when civilizations _____ and crumble.",
      word: "deteriorate",
      options: ["deteriorate", "demonstrate", "differentiate", "depreciate"],
      phonetic: "/dɪˈtɪəriəreɪt/",
      pos: "v.",
      meaning: "恶化，变坏，蜕变",
      trans: "好好看看这场战争吧，斯嘉丽。当文明恶化并分崩离析时，真正的财富便在废墟中被创造出来。"
    },
    {
      id: 17,
      movie: "当幸福来敲门 (The Pursuit of Happyness)",
      speaker: "克里斯·加德纳 (Chris Gardner)",
      listener: "儿子克里斯托弗 (Christopher)",
      scene: "在天台球场鼓励儿子守护自己的梦想",
      en: "Don't ever let somebody tell you you can't do something. People will try to _____ your ambition when they can't do it themselves.",
      word: "diminish",
      options: ["diminish", "distinguish", "dismantle", "disclose"],
      phonetic: "/dɪˈmɪnɪʃ/",
      pos: "v.",
      meaning: "贬低，缩小，削弱",
      trans: "永远别让别人对你说你成不了才。当别人自己做不到时，他们就会试图贬低你的抱负。"
    },
    {
      id: 18,
      movie: "搏击俱乐部 (Fight Club)",
      speaker: "泰勒·德顿 (Tyler Durden)",
      listener: "叙述者 (Narrator)",
      scene: "泰勒用化学烧伤的手背逼迫叙事者直面存在的虚无",
      en: "It's only after we've lost everything that we're free to do anything. You must discard the _____ of security.",
      word: "illusion",
      options: ["illusion", "illustration", "illumination", "interval"],
      phonetic: "/ɪˈluːʒn/",
      pos: "n.",
      meaning: "幻觉，错觉，虚妄的幻想",
      trans: "唯有失去了一切，我们才能自由地去做任何事。你必须抛弃所谓安全感的虚妄错觉。"
    },
    {
      id: 19,
      movie: "禁闭岛 (Shutter Island)",
      speaker: "泰迪·丹尼尔斯 (Teddy Daniels)",
      listener: "查克 (Chuck)",
      scene: "灯塔悬念揭晓后，主人公选择保留心智尊严的诀别",
      en: "Which would be worse: to live as a monster, or to die as a good man whose conscience remains _____?",
      word: "authentic",
      options: ["authentic", "artificial", "arbitrary", "audacious"],
      phonetic: "/ɔːˈθentɪk/",
      pos: "adj.",
      meaning: "真实的，真正的，未经伪装的",
      trans: "哪样更糟糕呢：是像怪物一样活着，还是作为一个良知尚存的真正的善人死去？"
    },
    {
      id: 20,
      movie: "致命魔术 (The Prestige)",
      speaker: "卡特尔 (Cutter)",
      listener: "观众 (Audience)",
      scene: "老技师道破魔术三部曲中化腐朽为神奇的核心奥秘",
      en: "Making something disappear isn't enough; you have to bring it back. That's why every magic trick demands a third act: the _____.",
      word: "prestige",
      options: ["prestige", "posture", "privilege", "penalty"],
      phonetic: "/preˈstiːʒ/",
      pos: "n.",
      meaning: "威望，声誉；（魔术的）化腐朽为神奇的化身",
      trans: "仅仅让东西消失是不够的，你必须让它重现。所以每个魔术都需要第三幕：声望与奇迹。"
    },
    {
      id: 21,
      movie: "沉默的羔羊 (The Silence of the Lambs)",
      speaker: "汉尼拔·莱克特 (Dr. Hannibal Lecter)",
      listener: "克拉丽丝 (Clarice Starling)",
      scene: "隔着厚厚防弹玻璃洞察探员内心的创伤",
      en: "We begin by coveting what we see every day. Do you not feel a need to _____ your deeper motives, Clarice?",
      word: "scrutinize",
      options: ["scrutinize", "simulate", "stimulate", "subordinate"],
      phonetic: "/ˈskruːtənaɪz/",
      pos: "v.",
      meaning: "仔细审视，详尽审查",
      trans: "我们对事物的觊觎往往始于日日所见之物。克拉丽丝，难道你没有感到审视自己深层动机的必要吗？"
    },
    {
      id: 22,
      movie: "七宗罪 (Se7en)",
      speaker: "老刑警沙摩塞 (Somerset)",
      listener: "米尔斯 (Mills)",
      scene: "在雨夜小酒馆中讨论世风日下与冷漠的人心",
      en: "Apathy is the solution. It's so much easier to be _____ to human suffering than to struggle against it.",
      word: "indifferent",
      options: ["indifferent", "indispensable", "ingenious", "indignant"],
      phonetic: "/ɪnˈdɪfrənt/",
      pos: "adj.",
      meaning: "冷漠的，不关心的，漠不关心的",
      trans: "冷漠成了解决之道。对世间苦难保持漠不关心，远比去抗争要轻松得多。"
    },
    {
      id: 23,
      movie: "绿皮书 (Green Book)",
      speaker: "唐·雪莉博士 (Dr. Don Shirley)",
      listener: "托尼·利普 (Tony Lip)",
      scene: "雨夜中雪莉博士爆发内心无处安放的孤独与尊严",
      en: "You never win with violence, Tony. You only win when you maintain your _____ against prejudice.",
      word: "dignity",
      options: ["dignity", "density", "disaster", "destiny"],
      phonetic: "/ˈdɪɡnəti/",
      pos: "n.",
      meaning: "尊严，自尊，高贵",
      trans: "用暴力你永远赢不了，托尼。唯有在偏见面前坚守你的尊严，你才能赢得真正的胜利。"
    },
    {
      id: 24,
      movie: "拯救大兵瑞恩 (Saving Private Ryan)",
      speaker: "米勒上尉 (Captain Miller)",
      listener: "士兵们 (Squad)",
      scene: "在教堂残垣断壁间表露对故乡生活的眷恋与职责的冲突",
      en: "Every man I kill makes me feel farther away from home. I hope the mission will prove _____ enough in the end.",
      word: "legitimate",
      options: ["legitimate", "lethal", "literary", "lucrative"],
      phonetic: "/lɪˈdʒɪtɪmət/",
      pos: "adj.",
      meaning: "合理的，正当的，合法的",
      trans: "我杀掉的每一个人，都让我感觉离家更遥远。我只希望这项拯救任务最终能被证明是正当而崇高的。"
    },
    {
      id: 25,
      movie: "勇敢的心 (Braveheart)",
      speaker: "威廉·华莱士 (William Wallace)",
      listener: "苏格兰义勇军 (Scottish Army)",
      scene: "在斯特灵战场上向怯战的同胞发表慷慨激昂的演说",
      en: "They may take our lives, but they will never _____ our will to live as free souls!",
      word: "quench",
      options: ["quench", "qualify", "quote", "quarrel"],
      phonetic: "/kwentʃ/",
      pos: "v.",
      meaning: "熄灭，压制，平息",
      trans: "他们也许能夺走我们的生命，但他们绝不可能熄灭我们作为自由灵魂活着的坚定意志！"
    },
    {
      id: 26,
      movie: "角斗士 (Gladiator)",
      speaker: "马克西姆斯 (Maximus)",
      listener: "康茂德皇帝 (Commodus)",
      scene: "在罗马斗兽场上摘下面具宣告复仇誓言",
      en: "I am a father to a murdered son, a husband to a murdered wife. And I will have my _____ in this life or the next.",
      word: "vengeance",
      options: ["vengeance", "variance", "vigor", "verdict"],
      phonetic: "/ˈvendʒəns/",
      pos: "n.",
      meaning: "复仇，报仇，报复",
      trans: "我是被杀之子的父亲，被戮之妻的丈夫。无论今生还是来世，我誓将血债血偿！"
    },
    {
      id: 27,
      movie: "指环王：双塔奇兵 (The Lord of the Rings: The Two Towers)",
      speaker: "山姆 (Samwise Gamgee)",
      listener: "弗罗多 (Frodo)",
      scene: "废墟残阳下安慰心力交瘁的魔戒持有者",
      en: "There's some good in this world, Mr. Frodo, and it's worth fighting to _____ it from total decay.",
      word: "preserve",
      options: ["preserve", "perceive", "prosecute", "presume"],
      phonetic: "/prɪˈzɜːv/",
      pos: "v.",
      meaning: "保护，维护，保存",
      trans: "弗罗多先生，这世上总还有美好的事物，值得我们为守护它免于彻底衰亡而战斗到底。"
    },
    {
      id: 28,
      movie: "黑客帝国 (The Matrix)",
      speaker: "墨菲斯 (Morpheus)",
      listener: "尼奥 (Neo)",
      scene: "在纯白构造体里向尼奥揭开母体代码的本质",
      en: "What is real? How do you define real? If you're talking about what you can feel, then real is simply electrical signals _____ by your brain.",
      word: "perceived",
      options: ["perceived", "persuaded", "perpetuated", "penetrated"],
      phonetic: "/pəˈsiːvd/",
      pos: "v.",
      meaning: "感知，察觉，理解",
      trans: "什么是真实？你怎么定义真实？如果你是指你能感受到的东西，那真实不过是大脑感知到的电信号而已。"
    },
    {
      id: 29,
      movie: "银翼杀手2049 (Blade Runner 2049)",
      speaker: "乔伊 (Joi)",
      listener: "K (Officer K)",
      scene: "虚拟伴侣安慰复制人K寻找自我灵魂的意义",
      en: "I always told you you're special. You have an authentic soul that cannot be _____ by simple code.",
      word: "replicated",
      options: ["replicated", "restrained", "reconciled", "renovated"],
      phonetic: "/ˈreplɪkeɪtɪd/",
      pos: "v.",
      meaning: "复制，重复，翻版",
      trans: "我总对你说你很特别。你拥有一个纯真赤诚的灵魂，绝非简单的代码所能轻易复制。"
    },
    {
      id: 30,
      movie: "降临 (Arrival)",
      speaker: "露易丝·班克斯 (Louise Banks)",
      listener: "伊恩 (Ian Donnelly)",
      scene: "领悟外星非线性语言后，即使预知悲剧也选择拥抱人生",
      en: "Despite knowing the journey and where it leads, I embrace it and welcome every _____ moment.",
      word: "spontaneous",
      options: ["spontaneous", "simultaneous", "suspicious", "superficial"],
      phonetic: "/spɒnˈteɪniəs/",
      pos: "adj.",
      meaning: "自发的，自然的，不由自主的",
      trans: "尽管早已预知整场旅程及其终点，我仍全心拥抱它，并欣然迎接每一个自然涌现的瞬间。"
    },
    {
      id: 31,
      movie: "爆裂鼓手 (Whiplash)",
      speaker: "弗莱彻魔鬼导师 (Fletcher)",
      listener: "安德鲁 (Andrew)",
      scene: "在爵士酒吧为自己的极端残暴教学法则辩护",
      en: "There are no two words in the English language more harmful than 'good job'. Mediocrity will only _____ your potential.",
      word: "suffocate",
      options: ["suffocate", "supplement", "surpass", "subside"],
      phonetic: "/ˈsʌfəkeɪt/",
      pos: "v.",
      meaning: "使窒息，扼杀，压制",
      trans: "英语里没有任何两个词比'做得不错'更有害了。平庸只会扼杀你的全部潜能。"
    },
    {
      id: 32,
      movie: "爱乐之城 (La La Land)",
      speaker: "米娅 (Mia)",
      listener: "塞巴斯蒂安 (Sebastian)",
      scene: "关于爵士乐酒吧与现实生计冲突时的争论",
      en: "People love what other people are passionate about. You should never _____ your dream just to satisfy comfort.",
      word: "compromise",
      options: ["compromise", "comprehend", "compensate", "complement"],
      phonetic: "/ˈkɒmprəmaɪz/",
      pos: "v.",
      meaning: "妥协，折中，危害",
      trans: "人们总是会被他人的满腔热情所打动。你绝不应该仅仅为了安逸而向自己的梦想妥协。"
    },
    {
      id: 33,
      movie: "穿普拉达的女王 (The Devil Wears Prada)",
      speaker: "米兰达 (Miranda Priestly)",
      listener: "安迪 (Andy Sachs)",
      scene: "用著名的'天蓝色毛衣'敲打自命不凡的小助理",
      en: "You think this has nothing to do with you, but that color was selected for you by the people in this room from a pile of _____ choices.",
      word: "tedious",
      options: ["tedious", "tangible", "tentative", "terrific"],
      phonetic: "/ˈtiːdiəs/",
      pos: "adj.",
      meaning: "乏味的，单调繁琐的，冗长的",
      trans: "你以为这与你毫无瓜葛，但这颜色正是这间屋子里的人从无数繁冗单调的方案中替你挑选出来的。"
    },
    {
      id: 34,
      movie: "实习生 (The Intern)",
      speaker: "本·惠特克 (Ben Whittaker)",
      listener: "朱尔斯 (Jules)",
      scene: "老绅士安抚因家庭与事业重压而崩溃的女CEO",
      en: "You should feel proud of what you've built. Don't let someone else's insecurity _____ your self-worth.",
      word: "undermine",
      options: ["undermine", "undergo", "undertake", "underline"],
      phonetic: "/ˌʌndəˈmaɪn/",
      pos: "v.",
      meaning: "暗中破坏，逐渐削弱，侵蚀",
      trans: "你应该为你亲手建立的一切感到骄傲。千万别让别人的不安全感逐渐削弱你的自我价值。"
    },
    {
      id: 35,
      movie: "社交网络 (The Social Network)",
      speaker: "马克·扎克伯格 (Mark Zuckerberg)",
      listener: "温克勒沃斯兄弟 (Winklevoss)",
      scene: "在听证会上直白回击对方指控其窃取构想",
      en: "If you guys were the inventors of Facebook, you'd have invented Facebook. An idea without execution is merely _____.",
      word: "speculative",
      options: ["speculative", "spectacular", "spontaneous", "suspicious"],
      phonetic: "/ˈspekjələtɪv/",
      pos: "adj.",
      meaning: "投机的，推测的，空想的",
      trans: "如果你们真是脸书的发明人，你们早就把它做出来了。没有执行力的想法不过是镜花水月的空想罢了。"
    },
    {
      id: 36,
      movie: "华尔街之狼 (The Wolf of Wall Street)",
      speaker: "乔丹·贝尔福特 (Jordan Belfort)",
      listener: "销售员们 (Sales Team)",
      scene: "在公司大会上向狂热的股票经纪人传授进攻性推销策略",
      en: "There is no nobility in poverty. I want you to attack your goals with an almost _____ persistence.",
      word: "relentless",
      options: ["relentless", "reluctant", "reckless", "reputable"],
      phonetic: "/rɪˈlentləs/",
      pos: "adj.",
      meaning: "坚持不懈的，不依不饶的，残忍无情的",
      trans: "贫穷绝无任何高贵可言。我要你们以一种近乎冷酷执着的毅力去向目标发起进攻。"
    },
    {
      id: 37,
      movie: "荒野猎人 (The Revenant)",
      speaker: "休·格拉斯 (Hugh Glass)",
      listener: "约翰·菲茨杰拉德 (Fitzgerald)",
      scene: "在冰天雪地中战胜叛徒时，领悟复仇的终极所属",
      en: "Revenge is in the hands of the Creator, not in our own _____ judgment.",
      word: "fallible",
      options: ["fallible", "feasible", "flexible", "fragile"],
      phonetic: "/ˈfæləbl/",
      pos: "adj.",
      meaning: "易犯错误的，不可靠的",
      trans: "复仇掌握在造物主的手中，而不是由我们自身脆弱且易犯错误的审判来决定。"
    },
    {
      id: 38,
      movie: "鸟人 (Birdman)",
      speaker: "萨姆 (Sam)",
      listener: "雷根 (Riggan Thomson)",
      scene: "后台休息室女儿痛斥老父亲执着于过气名声的虚荣",
      en: "You are doing this because you're scared to death that you don't matter. Your vanity is simply _____.",
      word: "pathetic",
      options: ["pathetic", "patriotic", "passive", "paradoxical"],
      phonetic: "/pəˈθetɪk/",
      pos: "adj.",
      meaning: "可怜的，令人哀怜的，差劲可悲的",
      trans: "你做这一切只是因为你害怕得要死——害怕自己无足轻重。你的虚荣简直可悲透顶。"
    },
    {
      id: 39,
      movie: "海边的曼彻斯特 (Manchester by the Sea)",
      speaker: "李·钱德勒 (Lee Chandler)",
      listener: "帕特里克 (Patrick)",
      scene: "无法走出家庭火灾悲剧的叔叔向侄子坦承内心的彻底崩溃",
      en: "I can't beat it. Some sorrow is so deep that it permanently _____ one's capacity for joy.",
      word: "impairs",
      options: ["impairs", "implores", "imparts", "imposes"],
      phonetic: "/ɪmˈpeəz/",
      pos: "v.",
      meaning: "损害，削弱，损伤",
      trans: "我撑不下去了。有些悲伤太过沉重，以至于它永久性地损毁了一个人感受快乐的能力。"
    },
    {
      id: 40,
      movie: "模仿游戏 (The Imitation Game)",
      speaker: "图灵 (Alan Turing)",
      listener: "琼·克拉克 (Joan Clarke)",
      scene: "图灵为坚持制造破解恩尼格玛电码的巨型机器而倾诉",
      en: "Sometimes it is the people no one imagines anything of who do the things that no one can _____.",
      word: "anticipate",
      options: ["anticipate", "articulate", "accumulate", "advocate"],
      phonetic: "/ænˈtɪsɪpeɪt/",
      pos: "v.",
      meaning: "预料，预期，先发制人",
      trans: "有时候，正是那些不被任何人寄予厚望的人，才能创造出无人能够预料的惊世奇迹。"
    },
    {
      id: 41,
      movie: "万物理论 (The Theory of Everything)",
      speaker: "斯蒂芬·霍金 (Stephen Hawking)",
      listener: "演讲听众 (Audience)",
      scene: "在世界物理论坛上即使身体残障也发表鼓舞全人类的宣言",
      en: "However bad life may seem, there is always something you can do and succeed at. While there's life, there is _____.",
      word: "prospect",
      options: ["prospect", "protocol", "prejudice", "priority"],
      phonetic: "/ˈprɒspekt/",
      pos: "n.",
      meaning: "前景，希望，前途",
      trans: "无论生命看起来多么艰难，总有些事是你能做到并取得成功的。生命不息，希望的前景便永不磨灭。"
    },
    {
      id: 42,
      movie: "海上钢琴师 (The Legend of 1900)",
      speaker: "1900 (Nineteen Hundred)",
      listener: "麦克斯 (Max Tooney)",
      scene: "在即将被炸毁的轮船舷梯前解释为何不敢踏入陆地",
      en: "That city had everything except an end. The infinite keyboard of the land was an _____ world that frightened me.",
      word: "overwhelming",
      options: ["overwhelming", "outstanding", "obscure", "orthodox"],
      phonetic: "/ˌəʊvəˈwelmɪŋ/",
      pos: "adj.",
      meaning: "令人难以承受的，势不可挡的，压倒性的",
      trans: "那座城市拥有一切，唯独没有尽头。陆地上那副无边无际的浩瀚键盘，是一个压得我透不过气来的惊惧世界。"
    },
    {
      id: 43,
      movie: "控方证人 (Witness for the Prosecution)",
      speaker: "韦菲爵士 (Sir Wilfrid)",
      listener: "克里斯汀 (Christine Helm)",
      scene: "老辩护律师在法庭休庭期间盘问关键证人的证词漏洞",
      en: "The truth has a peculiar way of leaking out when someone tries to manufacture a false _____.",
      word: "testimony",
      options: ["testimony", "temperament", "threshold", "trajectory"],
      phonetic: "/ˈtestɪməni/",
      pos: "n.",
      meaning: "证词，证明，见证",
      trans: "当有人企图编造虚假证词时，真理往往会以一种极其奇特微妙的方式露出马脚。"
    },
    {
      id: 44,
      movie: "奇迹男孩 (Wonder)",
      speaker: "图什曼校长 (Mr. Tushman)",
      listener: "毕业典礼师生 (Graduates)",
      scene: "给天生面部畸形的奥吉颁发象征仁慈品格的勋章",
      en: "When given the choice between being right and being kind, choose kind. Compassion is the greatest human _____.",
      word: "virtue",
      options: ["virtue", "verdict", "vicinity", "velocity"],
      phonetic: "/ˈvɜːtʃuː/",
      pos: "n.",
      meaning: "美德，德行，优点",
      trans: "当面临在正确与善良之间抉择时，请选择善良。同理心是人类最伟大的美德。"
    },
    {
      id: 45,
      movie: "罗马假日 (Roman Holiday)",
      speaker: "安妮公主 (Princess Ann)",
      listener: "乔·布莱德利 (Joe Bradley)",
      scene: "记者招待会上公主被问及最钟爱的城市时含蓄告别",
      en: "Rome, by all means, Rome. I will _____ the memory of my visit here in every way as long as I live.",
      word: "treasure",
      options: ["treasure", "tolerate", "transmit", "tackle"],
      phonetic: "/ˈtreʒə(r)/",
      pos: "v.",
      meaning: "珍视，珍藏，铭记",
      trans: "罗马，毫无疑问是罗马。只要我活着，我就会在生命的每一个角落永远珍藏这段回忆。"
    },
    {
      id: 46,
      movie: "狮子王 (The Lion King)",
      speaker: "拉飞奇 (Rafiki)",
      listener: "辛巴 (Simba)",
      scene: "用木杖敲打辛巴的头，教育他面对过去的苦难",
      en: "The past can hurt. But the way I see it, you can either run from it, or learn to _____ its lessons.",
      word: "embrace",
      options: ["embrace", "embarrass", "eliminate", "embark"],
      phonetic: "/ɪmˈbreɪs/",
      pos: "v.",
      meaning: "拥抱，欣然接受，包容",
      trans: "过去或许很痛苦。但在我看来，你既可以选择逃避它，也可以学会坦然拥抱它的教训。"
    },
    {
      id: 47,
      movie: "少年派的奇幻漂流 (Life of Pi)",
      speaker: "派 (Pi Patel)",
      listener: "作家 (Writer)",
      scene: "回忆起与孟加拉虎理查德·帕克在沙滩头也不回的别离",
      en: "I suppose in the end, the whole of life becomes an act of letting go, but what hurts most is not taking a moment to say _____.",
      word: "farewell",
      options: ["farewell", "fertility", "fraction", "formula"],
      phonetic: "/ˌfeəˈwel/",
      pos: "n.",
      meaning: "告别，辞别，再见",
      trans: "我想人生到头来就是不断地放下，但最让人心痛的，往往是没能好好地道一声别。"
    },
    {
      id: 48,
      movie: "寻梦环游记 (Coco)",
      speaker: "埃克托 (Héctor)",
      listener: "米格 (Miguel)",
      scene: "在亡灵世界解释真正的死亡是被世间彻底遗忘",
      en: "The real death is when there's no one left in the living world who remembers you. Memory is what keeps our spirits _____.",
      word: "perpetual",
      options: ["perpetual", "punctual", "precarious", "plausible"],
      phonetic: "/pəˈpetʃuəl/",
      pos: "adj.",
      meaning: "永恒的，永久的，不间断的",
      trans: "真正的死亡，是活人的世界里再无一人记得你。唯有记忆，才能让我们灵魂的存在延续至永恒。"
    },
    {
      id: 49,
      movie: "奥本海默 (Oppenheimer)",
      speaker: "奥本海默 (J. Robert Oppenheimer)",
      listener: "爱因斯坦 (Albert Einstein)",
      scene: "普林斯顿池塘边，奥本海默坦言核军备竞赛不可逆的悲剧",
      en: "When I came to you with those calculations, we thought we might start a chain reaction that would _____ the entire world. I believe we did.",
      word: "devastate",
      options: ["devastate", "deviate", "deteriorate", "designate"],
      phonetic: "/ˈdevəsteɪt/",
      pos: "v.",
      meaning: "摧毁，毁灭，使荒芜",
      trans: "当年我拿着那些算式来找你时，我们担心可能会引发毁灭整个世界的连锁反应。我想，我们确实做到了。"
    },
    {
      id: 50,
      movie: "敦刻尔克 (Dunkirk)",
      speaker: "道森先生 (Mr. Dawson)",
      listener: "获救军官 (Shivering Soldier)",
      scene: "平民小船毅然调转船头驶向战火纷飞的法国海滩",
      en: "Men my age dictate this war. Why should we be _____ to risk our lives to bring our children home?",
      word: "reluctant",
      options: ["reluctant", "reckless", "resilient", "redundant"],
      phonetic: "/rɪˈlʌktənt/",
      pos: "adj.",
      meaning: "不情愿的，勉强的，犹豫的",
      trans: "像我这把年纪的人发动了这场战争。为了接我们的孩子们回家，我们又何必吝惜冒生命的危险呢？"
    },
    {
      id: 51,
      movie: "大独裁者 (The Great Dictator)",
      speaker: "犹太理发师 (The Barber)",
      listener: "全世界人民 (The World)",
      scene: "借独裁者之名发表反对暴政、呼唤人性的震撼演讲",
      en: "We think too much and feel too little. More than machinery we need humanity; more than cleverness we need _____ and gentleness.",
      word: "kindness",
      options: ["kindness", "kinship", "keenness", "knowledge"],
      phonetic: "/ˈkaɪndnəs/",
      pos: "n.",
      meaning: "仁慈，友善，温和",
      trans: "我们思虑过多而感知过少。比起机器我们更需要人性；比起聪明才智，我们更需要仁慈与温良。"
    },
    {
      id: 52,
      movie: "傲慢与偏见 (Pride and Prejudice)",
      speaker: "达西先生 (Mr. Darcy)",
      listener: "伊丽莎白 (Elizabeth Bennet)",
      scene: "晨雾弥漫的荒野上第二次也是最真诚的深情告白",
      en: "My affections and wishes are unchanged. But one word from you will _____ me to silence on this subject forever.",
      word: "compel",
      options: ["compel", "comply", "compose", "conceal"],
      phonetic: "/kəmˈpel/",
      pos: "v.",
      meaning: "强迫，迫使，使不得不",
      trans: "我的爱慕与愿望一如既往。但只要你一句话，便足以迫使我在此事上永远保持缄默。"
    },
    {
      id: 53,
      movie: "理智与情感 (Sense and Sensibility)",
      speaker: "埃莉诺 (Elinor Dashwood)",
      listener: "玛丽安 (Marianne)",
      scene: "姐姐向任性的妹妹坦露克制内敛的情感深处承载的巨大痛苦",
      en: "I have suffered, but I have not _____ my sorrow in noisy display. Reason must tame wild grief.",
      word: "manifested",
      options: ["manifested", "manipulated", "maintained", "magnified"],
      phonetic: "/ˈmænɪfestɪd/",
      pos: "v.",
      meaning: "显现，显露，证明",
      trans: "我同样承受着苦楚，但我未曾将我的悲伤在喧闹中宣泄显露。理智必须驯服狂野的哀恸。"
    },
    {
      id: 54,
      movie: "简·爱 (Jane Eyre)",
      speaker: "简·爱 (Jane Eyre)",
      listener: "罗切斯特先生 (Mr. Rochester)",
      scene: "在刺梨树下抗议不平等的身份等级，追求灵魂的平视",
      en: "Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? Our spirits stand _____ before God!",
      word: "equal",
      options: ["equal", "equivalent", "equipped", "equitable"],
      phonetic: "/ˈiːkwəl/",
      pos: "adj.",
      meaning: "平等的，相等的",
      trans: "你以为我贫穷、卑微、不美又矮小，就没有灵魂、没有心吗？在上帝面前，我们的灵魂平等相对！"
    },
    {
      id: 55,
      movie: "歌剧魅影 (The Phantom of the Opera)",
      speaker: "魅影 (The Phantom)",
      listener: "克里斯汀 (Christine Daaé)",
      scene: "地宫深处诱导女伶沉迷于幽冥的音乐魔力",
      en: "Nighttime sharpens, heightens each sensation. Let your darker fantasies _____ the cold light of day.",
      word: "dispel",
      options: ["dispel", "disperse", "displace", "dispose"],
      phonetic: "/dɪˈspel/",
      pos: "v.",
      meaning: "驱散，消除，消散",
      trans: "黑夜让每一种感官变得敏锐而炽烈。让你幽暗深邃的幻想去驱散白昼清冷的微光吧。"
    },
    {
      id: 56,
      movie: "悲惨世界 (Les Misérables)",
      speaker: "冉阿让 (Jean Valjean)",
      listener: "沙威 (Javert)",
      scene: "在巷战废墟中放走视自己为死敌的警长沙威",
      en: "You are doing your duty as you see it. I bear you no grudge; I am merely a man who seeks _____.",
      word: "atonement",
      options: ["atonement", "assessment", "astonishment", "amendment"],
      phonetic: "/əˈtəʊnmənt/",
      pos: "n.",
      meaning: "赎罪，弥补，补偿",
      trans: "你只是在尽你所认为的职责。我对你毫无怨恨；我不过是一个祈求救赎与弥补罪愆的人。"
    },
    {
      id: 57,
      movie: "赛末点 (Match Point)",
      speaker: "克里斯 (Chris Wilton)",
      listener: "旁白 (Narrator)",
      scene: "影片开场用网球触网的瞬间隐喻人生的不可控偶然性",
      en: "The man who said 'I'd rather be lucky than good' saw deeply into life. People are afraid to face how great a part is dependent on _____.",
      word: "coincidence",
      options: ["coincidence", "consequence", "commitment", "collaboration"],
      phonetic: "/kəʊˈɪnsɪdəns/",
      pos: "n.",
      meaning: "巧合，巧事，同时发生",
      trans: "那个说'我宁愿走运也不要优秀'的人看透了生活。人们总是害怕承认人生有多大一部分纯粹依赖巧合。"
    },
    {
      id: 58,
      movie: "午夜巴黎 (Midnight in Paris)",
      speaker: "海明威 (Ernest Hemingway)",
      listener: "吉尔 (Gil Pender)",
      scene: "在巴黎小酒馆里与后辈作家纵论写作与面对死亡的勇气",
      en: "No subject is terrible if the story is true and the prose is clean. Courage is grace under _____.",
      word: "pressure",
      options: ["pressure", "prestige", "posture", "patience"],
      phonetic: "/ˈpreʃə(r)/",
      pos: "n.",
      meaning: "压力，紧迫",
      trans: "只要故事真实、文字利落，就没有任何题材是可怕的。真正的勇气，是在重压之下依然保持优雅。"
    },
    {
      id: 59,
      movie: "少年时代 (Boyhood)",
      speaker: "母亲奥利维亚 (Olivia)",
      listener: "梅森 (Mason)",
      scene: "目送儿子打包行李步入大学，感叹光阴如白驹过隙",
      en: "I just thought there would be more. Life moves in a strange, _____ rhythm until suddenly you're at the end of an era.",
      word: "subtle",
      options: ["subtle", "stubborn", "subsequent", "subconscious"],
      phonetic: "/ˈsʌtl/",
      pos: "adj.",
      meaning: "微妙的，不易察觉的，敏锐的",
      trans: "我只是以为人生还会有更多事情。生活总是以一种奇特而微妙的节奏流淌，直到某个时代悄然落幕。"
    },
    {
      id: 60,
      movie: "小妇人 (Little Women)",
      speaker: "乔·马奇 (Jo March)",
      listener: "马奇太太 (Marmee)",
      scene: "乔在阁楼上为女性的独立与孤独痛哭倾诉",
      en: "Women have minds and souls as well as hearts; ambition as well as beauty. I'm so sick of people saying that love is all a woman is _____ for.",
      word: "destined",
      options: ["destined", "delighted", "depressed", "deviated"],
      phonetic: "/ˈdestɪnd/",
      pos: "adj.",
      meaning: "注定的，命中注定的",
      trans: "女性不仅有心，更有头脑与灵魂；不仅有美貌，更有雄心抱负。我受够了所有人都说爱情是女人唯一的命运归宿。"
    },
    {
      id: 61,
      movie: "瞬息全宇宙 (Everything Everywhere All at Once)",
      speaker: "威蒙德 (Waymond Wang)",
      listener: "伊芙琳 (Evelyn)",
      scene: "在多重宇宙的废墟中解释自己一贯柔和处世的生存哲学",
      en: "When I choose to see the good side of things, I'm not being naive. It is strategic and necessary. Please, show _____ especially when we don't know what's going on.",
      word: "compassion",
      options: ["compassion", "concession", "compulsion", "contempt"],
      phonetic: "/kəmˈpæʃn/",
      pos: "n.",
      meaning: "同情，怜悯，慈悲心",
      trans: "当我选择看到事物好的一面时，我不是天真。这是一种策略，也是生存之道。尤其当我们迷茫未知时，请展现你的慈悲与善意。"
    },
    {
      id: 62,
      movie: "蝴蝶效应 (The Butterfly Effect)",
      speaker: "埃文 (Evan Treborn)",
      listener: "凯丽 (Kayleigh)",
      scene: "试图用修改日记逆转时间却发现每次干预都引发悲剧",
      en: "Every alteration to the past carries an _____ cost to someone we cherish.",
      word: "unforeseen",
      options: ["unforeseen", "unanimous", "understated", "universal"],
      phonetic: "/ˌʌnfɔːˈsiːn/",
      pos: "adj.",
      meaning: "无法预见的，出乎意料的",
      trans: "对过去的每一次擅自篡改，都会让我们所珍视的某个人付出无法预料的惨痛代价。"
    },
    {
      id: 63,
      movie: "黑天鹅 (Black Swan)",
      speaker: "托马斯导师 (Thomas Leroy)",
      listener: "妮娜 (Nina Sayers)",
      scene: "在排练厅要求芭蕾舞者释放原始野性冲破僵化束缚",
      en: "Perfection is not just about control. It is also about letting go. Transcending your limits requires an _____ impulse.",
      word: "untamed",
      options: ["untamed", "unanimous", "underlying", "unwarranted"],
      phonetic: "/ˌʌnˈteɪmd/",
      pos: "adj.",
      meaning: "未被驯服的，狂野桀骜的，原始奔放的",
      trans: "完美绝不仅仅意味着精确的控制，更在于适时的放手。超越你自身的极限需要一种狂野不羁的本能冲动。"
    },
    {
      id: 64,
      movie: "荒野生存 (Into the Wild)",
      speaker: "克里斯托弗 (Christopher McCandless)",
      listener: "日记 (Diary)",
      scene: "在废弃巴士中临终前写下对人与世间连接的彻悟",
      en: "Happiness is only real when shared. Complete isolation will only _____ the soul from true warmth.",
      word: "alienate",
      options: ["alienate", "alleviate", "allocate", "alternate"],
      phonetic: "/ˈeɪliəneɪt/",
      pos: "v.",
      meaning: "使疏远，离间，孤立",
      trans: "唯有分享，幸福才是真实的。彻底的自我隔绝只会让灵魂与真正的温暖渐行渐远。"
    },
    {
      id: 65,
      movie: "英国病人 (The English Patient)",
      speaker: "凯瑟琳 (Katharine Clifton)",
      listener: "艾马殊伯爵 (Almásy)",
      scene: "在洞穴垂危之际写下对无国界纯粹爱恋的向往",
      en: "We die rich with lovers and tribes, tastes we have swallowed, bodies we have entered. We are the true countries, not the _____ boundaries drawn on maps.",
      word: "artificial",
      options: ["artificial", "authentic", "ambiguous", "arbitrary"],
      phonetic: "/ˌɑːtɪˈfɪʃl/",
      pos: "adj.",
      meaning: "人造的，人为的，虚假的",
      trans: "我们死于丰盛的爱人与部落、我们吞咽过的滋味。我们才是真正的国度，而不是地图上划出的人为边界。"
    },
    {
      id: 66,
      movie: "冷山 (Cold Mountain)",
      speaker: "英曼 (Inman)",
      listener: "艾达 (Ada Monroe)",
      scene: "在风雪木屋重逢时诉说穿越战火只为奔向彼此的执念",
      en: "What we have lost will never return. But what remains in my heart is an _____ desire to be near you.",
      word: "indispensable",
      options: ["indispensable", "indifferent", "incompatible", "inaccessible"],
      phonetic: "/ˌɪndɪˈspensəbl/",
      pos: "adj.",
      meaning: "不可或缺的，必不可少的",
      trans: "我们失去的永远回不来了。但在我心底挥之不去的，是一份渴望守候在你身旁的、无可替代的执念。"
    },
    {
      id: 67,
      movie: "朗读者 (The Reader)",
      speaker: "米夏 (Michael Berg)",
      listener: "汉娜 (Hanna Schmitz)",
      scene: "多年后在监狱相见谈及历史的审判与个人的罪责",
      en: "Guilt is not erased by ignorance. One must bear the weight of what one has _____ in history.",
      word: "perpetrated",
      options: ["perpetrated", "persecuted", "persevered", "penetrated"],
      phonetic: "/ˈpɜːpɪtreɪtɪd/",
      pos: "v.",
      meaning: "犯下（罪行），做（错事）",
      trans: "无知并不能抹去罪愆。一个人必须去承担自己在历史浪潮中所犯下罪恶的千钧之重。"
    },
    {
      id: 68,
      movie: "忠犬八公的故事 (Hachi: A Dog's Tale)",
      speaker: "肯教授 (Ken Fujiyoshi)",
      listener: "八公 (Hachiko)",
      scene: "在车站摸着年老守望的秋田犬，赞叹忠诚的高贵",
      en: "You teach us the meaning of unconditional devotion. Such loyalty is rarely _____ in human hearts.",
      word: "encountered",
      options: ["encountered", "entertained", "enforced", "enlarged"],
      phonetic: "/ɪnˈkaʊntəd/",
      pos: "v.",
      meaning: "遇到，遭遇，碰到",
      trans: "你教会了我们何为无条件的奉献。这种纯粹的忠诚，在人类的心灵世界中已难得一见。"
    },
    {
      id: 69,
      movie: "杀死一只知更鸟 (To Kill a Mockingbird)",
      speaker: "阿蒂克斯·芬奇 (Atticus Finch)",
      listener: "斯库特 (Scout)",
      scene: "正义律师教导女儿做人必须守住不受世俗裹挟的良心底线",
      en: "The one thing that doesn't abide by majority rule is a person's _____. It is the compass of the soul.",
      word: "conscience",
      options: ["conscience", "consequence", "coincidence", "competence"],
      phonetic: "/ˈkɒnʃəns/",
      pos: "n.",
      meaning: "良心，良知，道德准绳",
      trans: "唯一不能遵从多数人暴政的，就是一个人的良知。它是灵魂深处唯一的指南针。"
    },
    {
      id: 70,
      movie: "盗火线 (Heat)",
      speaker: "尼尔·麦考利 (Neil McCauley)",
      listener: "文森特·汉纳 (Vincent Hanna)",
      scene: "在咖啡馆里神偷与警探巅峰对视时吐露职业准则",
      en: "Don't let yourself get attached to anything you are not willing to walk out on in 30 seconds flat if you feel the heat. Maintain ruthless _____.",
      word: "discipline",
      options: ["discipline", "dimension", "distraction", "discretion"],
      phonetic: "/ˈdɪsəplɪn/",
      pos: "n.",
      meaning: "纪律，自律，克制，惩戒",
      trans: "一旦察觉到风声，绝不要让自己迷恋任何你不能在30秒内彻底抽身而退的事物。保持残酷的冷酷自律。"
    },
    {
      id: 71,
      movie: "飞屋环游记 (Up)",
      speaker: "艾丽的留言 (Ellie's Note)",
      listener: "卡尔老爷爷 (Carl Fredricksen)",
      scene: "翻到冒险日记最后一页，发现妻子留给自己的释怀箴言",
      en: "Thanks for the _____ — now go have a new one! Love, Ellie.",
      word: "adventure",
      options: ["adventure", "advantage", "adversity", "advocate"],
      phonetic: "/ədˈventʃə(r)/",
      pos: "n.",
      meaning: "冒险，惊险历程，奇遇",
      trans: "谢谢你陪伴我经历的这场盛大冒险——现在，去开启属于你的全新奇遇吧！爱你的，艾丽。"
    },
    {
      id: 72,
      movie: "大鱼 (Big Fish)",
      speaker: "威尔 (Will Bloom)",
      listener: "父亲爱德华 (Edward Bloom)",
      scene: "在病床前为父亲编织最后一个关于河中化鱼的浪漫童话",
      en: "A man tells his stories so many times that he becomes the stories. In that way, he achieves a kind of _____ immortality.",
      word: "metaphorical",
      options: ["metaphorical", "monotonous", "melancholy", "meticulous"],
      phonetic: "/ˌmetəˈfɒrɪkl/",
      pos: "adj.",
      meaning: "隐喻的，象征性的",
      trans: "一个人如果讲述他的故事太多遍，他自己就会化为那些故事。以那种方式，他获得了一种隐喻式的永生。"
    },
    {
      id: 73,
      movie: "怦然心动 (Flipped)",
      speaker: "切特外公 (Grandpa Chet)",
      listener: "布莱斯 (Bryce Loski)",
      scene: "在院子里擦玻璃时教外孙如何识别人性的光彩与平庸",
      en: "Some of us get dipped in flat, some in satin, some in gloss. But every once in a while, you find someone who's _____ and nothing else compares.",
      word: "iridescent",
      options: ["iridescent", "indifferent", "ironic", "irritating"],
      phonetic: "/ˌɪrɪˈdesnt/",
      pos: "adj.",
      meaning: "彩虹般灿烂的，光彩夺目的",
      trans: "有人住高楼，有人在深沟，有人光芒万丈，有人一身锈。但偶尔你会遇到一个如彩虹般绚丽夺目的人，见此一人，万物皆不及。"
    },
    {
      id: 74,
      movie: "隐藏人物 (Hidden Figures)",
      speaker: "凯瑟琳·约翰逊 (Katherine Johnson)",
      listener: "哈里森主管 (Al Harrison)",
      scene: "在NASA水星计划指挥室指出种族隔离设施的不公",
      en: "There's no bathroom for my color in this building. I have to run half a mile just to _____ myself and still calculate your trajectories.",
      word: "relieve",
      options: ["relieve", "retrieve", "reinforce", "reproach"],
      phonetic: "/rɪˈliːv/",
      pos: "v.",
      meaning: "减轻，解脱；方便，上洗手间",
      trans: "这栋楼里没有为我有色人种准备的洗手间。我得跑半英里才能解决生理需求，同时还得为你们精确计算火箭轨道。"
    },
    {
      id: 75,
      movie: "雄狮 (Lion)",
      speaker: "萨鲁 (Saru)",
      listener: "养母苏 (Sue Brierley)",
      scene: "成年后倾诉寻根亲生母亲不仅为记忆更是为告解平安",
      en: "I'm not looking for another mother. I just need to let her know that my life did not _____ into nothingness.",
      word: "vanish",
      options: ["vanish", "vibrate", "ventilate", "validate"],
      phonetic: "/ˈvænɪʃ/",
      pos: "v.",
      meaning: "消逝，突然不见，绝迹",
      trans: "我不是想找另一个母亲。我只是必须让她知道，我这条命没有在无声无息中凭空蒸发消亡。"
    },
    {
      id: 76,
      movie: "房间 (Room)",
      speaker: "玛 (Ma / Joy)",
      listener: "杰克 (Jack)",
      scene: "逃出禁锢多年的逼仄小棚后向幼子解释广阔世界",
      en: "The world outside is big and sometimes frightening, but it is real and full of _____ possibilities.",
      word: "infinite",
      options: ["infinite", "infectious", "inferior", "influential"],
      phonetic: "/ˈɪnfɪnət/",
      pos: "adj.",
      meaning: "无限的，无穷无尽的",
      trans: "外面的世界很大，有时也很可怕，但它是真实的，并且蕴藏着无穷无尽的生机与可能。"
    },
    {
      id: 77,
      movie: "终结者2：审判日 (Terminator 2: Judgment Day)",
      speaker: "莎拉·康纳 (Sarah Connor)",
      listener: "独白 (Monologue)",
      scene: "在夜间公路上注视着未知的未来，坚信命运掌握在人类自己手中",
      en: "The future's not set. There's no fate but what we make for ourselves through resolute _____.",
      word: "perseverance",
      options: ["perseverance", "perplexity", "prosecution", "permeability"],
      phonetic: "/ˌpɜːsɪˈvɪərəns/",
      pos: "n.",
      meaning: "毅力，坚持不懈，百折不挠",
      trans: "未来并非命中注定。除了我们凭借坚定坚韧的毅力亲手所创造的一切，世上别无所谓宿命。"
    },
    {
      id: 78,
      movie: "侏罗纪公园 (Jurassic Park)",
      speaker: "马尔科姆博士 (Ian Malcolm)",
      listener: "哈蒙德创办人 (John Hammond)",
      scene: "在吉普车上警告狂妄科学家生命总会突破人为禁锢",
      en: "Life cannot be contained. Life breaks free. Life expands to new territories and crashes through barriers, painfully, maybe even dangerously, but life finds a way to _____.",
      word: "flourish",
      options: ["flourish", "falter", "fracture", "furnish"],
      phonetic: "/ˈflʌrɪʃ/",
      pos: "v.",
      meaning: "繁荣，茁壮成长，蓬勃发展",
      trans: "生命绝不可能被轻易圈禁。生命会突破桎梏、开辟疆域、撞碎藩篱，或许痛苦甚至凶险，但生命总会找到蓬勃繁衍的出路。"
    },
    {
      id: 79,
      movie: "叫我第一名 (Front of the Class)",
      speaker: "布拉德·科恩 (Brad Cohen)",
      listener: "招聘委员会 (Interview Committee)",
      scene: "妥瑞氏症患者在教师面试中解释自己的怪叫与坚持",
      en: "My condition taught me the most valuable lesson of all: never let an obstacle _____ you from pursuing your passion.",
      word: "hinder",
      options: ["hinder", "hover", "hazard", "harness"],
      phonetic: "/ˈhɪndə(r)/",
      pos: "v.",
      meaning: "阻碍，妨碍，阻止",
      trans: "我的病症教会了我最宝贵的一课：永远不要让任何阻碍妨碍你追寻内心的挚爱与执念。"
    },
    {
      id: 80,
      movie: "摩登时代 (Modern Times)",
      speaker: "查理·卓别林 (A Tramp)",
      listener: "孤女 (A Gamin)",
      scene: "在路边破草屋前面对生活艰辛依然保持乐观笑容",
      en: "Buck up! Never say die. We'll get along! Smile, and don't let hardship _____ your good spirit.",
      word: "erode",
      options: ["erode", "evoke", "evolve", "exert"],
      phonetic: "/ɪˈrəʊd/",
      pos: "v.",
      meaning: "侵蚀，腐蚀，逐渐削弱",
      trans: "振作起来！永远别说丧气话。我们会挺过去的！微笑着，别让生活的艰难险阻侵蚀你的精气神。"
    },
    {
      id: 81,
      movie: "铁娘子 (The Iron Lady)",
      speaker: "撒切尔夫人 (Margaret Thatcher)",
      listener: "内阁成员 (Cabinet)",
      scene: "强调治国主见，倡导关注思想与原则而非随波逐流",
      en: "Watch your thoughts, for they become words. Watch your words, for they become actions. Character is the indelible _____ you leave behind.",
      word: "legacy",
      options: ["legacy", "liability", "lethargy", "liberty"],
      phonetic: "/ˈleɡəsi/",
      pos: "n.",
      meaning: "遗产，留存后世的伟业/影响",
      trans: "注意你的思想，它会化为言语；注意你的言语，它会化为行动。品格就是你留给这个世界不可磨灭的传世遗产。"
    },
    {
      id: 82,
      movie: "1917 (1917)",
      speaker: "麦肯齐上校 (Colonel Mackenzie)",
      listener: "斯科菲尔德准下士 (Lance Corporal Schofield)",
      scene: "在堑壕指挥所接下停火命令，指出战争残酷的反复无常",
      en: "I hoped today would be a good day. Hope is a _____ thing. Next week the command will find another reason to charge.",
      word: "hazardous",
      options: ["hazardous", "harmonious", "hesitant", "hospitable"],
      phonetic: "/ˈhæzədəs/",
      pos: "adj.",
      meaning: "危险的，冒险的，充满隐患的",
      trans: "我曾指望今天会是好日子。希望是件危险的东西。到了下周，指挥部又会找另一个理由让我们发起冲锋。"
    },
    {
      id: 83,
      movie: "伯德小姐 (Lady Bird)",
      speaker: "修女老师 (Sister Sarah Joan)",
      listener: "伯德小姐 (Christine 'Lady Bird')",
      scene: "修女赞扬她的大学申请文书流露对家乡萨克拉门托深沉的爱",
      en: "Don't you think maybe they are the same thing: love and _____? You pay so much attention to this town.",
      word: "attention",
      options: ["attention", "attraction", "affection", "assertion"],
      phonetic: "/əˈtenʃn/",
      pos: "n.",
      meaning: "关注，专注，注意力",
      trans: "难道你不觉得这两者可能其实是一回事吗：爱与关注？因为你对这座小镇倾注了那么多的关注。"
    },
    {
      id: 84,
      movie: "绿野仙踪 (The Wizard of Oz)",
      speaker: "奥兹巫师 (The Wizard)",
      listener: "铁皮人 (Tin Man)",
      scene: "在翡翠城将丝绸心脏赠予以为自己没有感情的铁皮人",
      en: "A heart is not judged by how much you love, but by how much you are _____ by others.",
      word: "adored",
      options: ["adored", "abhorred", "adapted", "adopted"],
      phonetic: "/əˈdɔːd/",
      pos: "adj.",
      meaning: "深受爱戴的，受人爱戴的",
      trans: "衡量一颗心是否真诚，不在于你付出了多少爱，而在于你被他人回馈了多少由衷的爱戴。"
    },
    {
      id: 85,
      movie: "雨中曲 (Singin' in the Rain)",
      speaker: "唐·洛克伍德 (Don Lockwood)",
      listener: "独白 (Dance in the Rain)",
      scene: "在街灯雨幕中撑伞欢快起舞，庆祝爱情降临的释怀",
      en: "Come on with the rain, I've a smile on my face! No downpour can dampen my _____ joy.",
      word: "ecstatic",
      options: ["ecstatic", "erratic", "eccentric", "explicit"],
      phonetic: "/ɪkˈstætɪk/",
      pos: "adj.",
      meaning: "狂喜的，欣喜若狂的",
      trans: "让暴风雨来得更猛烈些吧，我脸上洋溢着微笑！任何倾盆大雨都无法浇灭我心底狂喜炽烈的心跳。"
    },
    {
      id: 86,
      movie: "疯狂动物城 (Zootopia)",
      speaker: "朱迪·霍普斯 (Judy Hopps)",
      listener: "警官毕业典礼听众 (Graduates)",
      scene: "在讲台上向多元包容的动物城发表演讲，号召打破固有偏见",
      en: "Real life is messy. We all have limitations, but we must strive to look past stereotypes and _____ unity.",
      word: "foster",
      options: ["foster", "filter", "flourish", "fracture"],
      phonetic: "/ˈfɒstə(r)/",
      pos: "v.",
      meaning: "培养，促进，抚育",
      trans: "现实生活复杂而凌乱。我们每个人都有局限，但我们必须努力超越刻板印象，共同促进彼此的包容与团结。"
    },
    {
      id: 87,
      movie: "飞越疯人院 (One Flew Over the Cuckoo's Nest)",
      speaker: "麦克墨菲 (Randle McMurphy)",
      listener: "病友们 (Patients)",
      scene: "费尽力气尝试抱起重若千钧的大理石洗手台失败后的怒吼",
      en: "But I tried, didn't I? Goddammit, at least I tried! That takes more _____ than sitting in silence.",
      word: "courage",
      options: ["courage", "cohesion", "contempt", "courtesy"],
      phonetic: "/ˈkʌrɪdʒ/",
      pos: "n.",
      meaning: "勇气，胆量",
      trans: "可我至少尝试过了，不是吗？该死的，至少我拼尽全力去试过了！这总比你们坐在那里默默忍受需要多得多的勇气。"
    },
    {
      id: 88,
      movie: "绿里奇迹 (The Green Mile)",
      speaker: "约翰·科菲 (John Coffey)",
      listener: "保罗·埃奇科姆 (Paul Edgecomb)",
      scene: "死刑犯临终前哭诉自己拥有感知世间一切苦难折磨的心灵重负",
      en: "I'm tired, boss. Mostly, I'm tired of people being _____ to each other every single day.",
      word: "hostile",
      options: ["hostile", "humble", "hospitable", "hesitant"],
      phonetic: "/ˈhɒstaɪl/",
      pos: "adj.",
      meaning: "敌对的，充满敌意的，怀有恶意的",
      trans: "我好累啊，长官。最主要的是，我受够了人们日复一日地彼此充满恶意与仇恨相向。"
    },
    {
      id: 89,
      movie: "这个杀手不太冷 (Léon: The Professional)",
      speaker: "玛蒂尔达 (Mathilda)",
      listener: "里昂 (Léon)",
      scene: "小女孩靠在门边询问冷血杀手关于成长的真相",
      en: "Is life always this hard, or is it just when you're a kid? It takes immense endurance to _____ this loneliness.",
      word: "sustain",
      options: ["sustain", "suspend", "suppress", "surrender"],
      phonetic: "/səˈsteɪn/",
      pos: "v.",
      meaning: "维持，经受，支撑",
      trans: "人生总是这么苦，还是只有当小孩子时才这样？要支撑承受这种无边无际的孤独，需要极大的韧劲。"
    },
    {
      id: 90,
      movie: "卡特教练 (Coach Carter)",
      speaker: "克鲁兹队员 (Timo Cruz)",
      listener: "卡特教练 (Ken Carter)",
      scene: "在图书馆里向拯救了他们人生的教练朗诵箴言",
      en: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond _____.",
      word: "measure",
      options: ["measure", "mercy", "mediocrity", "motive"],
      phonetic: "/ˈmeʒə(r)/",
      pos: "n.",
      meaning: "尺度，分寸；beyond measure 意为无法衡量、不可限量",
      trans: "我们内心深处最深的恐惧，并不是我们无能为力；我们最深的恐惧，是我们拥有无法衡量的强大力量。"
    },
    {
      id: 91,
      movie: "源代码 (Source Code)",
      speaker: "柯尔特上尉 (Colter Stevens)",
      listener: "古德温军官 (Goodwin)",
      scene: "在列车时间循环即将终结前选择重塑平行现实的希望",
      en: "If you could change the future, what would you do? We possess the capacity to _____ our shared destiny.",
      word: "modify",
      options: ["modify", "mortify", "magnify", "multiply"],
      phonetic: "/ˈmɒdɪfaɪ/",
      pos: "v.",
      meaning: "修改，变更，修饰",
      trans: "如果你能改变未来，你会怎么做？我们完全拥有去修正并重塑共同命运的力量。"
    },
    {
      id: 92,
      movie: "荒岛余生 (Cast Away)",
      speaker: "查克·诺兰德 (Chuck Noland)",
      listener: "老友斯坦 (Stan)",
      scene: "重返现代文明后回忆在无人荒岛靠坚守活下来的意义",
      en: "I know what I have to do now. I've got to keep breathing, because tomorrow the sun will rise. Who knows what the tide could _____ in?",
      word: "deliver",
      options: ["deliver", "deprive", "deflect", "demolish"],
      phonetic: "/dɪˈlɪvə(r)/",
      pos: "v.",
      meaning: "递送，带来，实现，解救",
      trans: "我现在清楚自己该做什么了。我必须保持呼吸，因为明天太阳照常升起。谁知道潮水会为你带来怎样的生机呢？"
    },
    {
      id: 93,
      movie: "十二怒汉 (12 Angry Men)",
      speaker: "8号陪审员戴维斯 (Juror 8)",
      listener: "陪审团成员 (Jurors)",
      scene: "在闷热的法庭休会室坚持不可草率定罪，捍卫无罪推定原则",
      en: "It's not easy to raise my hand and send a boy off to die without talking about it first. We cannot be _____ when a human life is at stake.",
      word: "negligent",
      options: ["negligent", "notorious", "neutral", "nominal"],
      phonetic: "/ˈneɡlɪdʒənt/",
      pos: "adj.",
      meaning: "疏忽的，大意的，渎职的",
      trans: "在没有事先深入讨论的情况下举手送一个孩子赴死并不容易。当人命关天时，我们绝不能马虎疏忽。"
    },
    {
      id: 94,
      movie: "诺丁山 (Notting Hill)",
      speaker: "安娜·斯科特 (Anna Scott)",
      listener: "威廉·萨克 (William Thacker)",
      scene: "在狭小书店里巨星抛下光环向普通店主倾吐心声",
      en: "The fame thing isn't really real, you know. I'm also just a girl, standing in front of a boy, asking him to _____ her feelings.",
      word: "reciprocate",
      options: ["reciprocate", "rehabilitate", "renounce", "reproach"],
      phonetic: "/rɪˈsɪprəkeɪt/",
      pos: "v.",
      meaning: "回应，回报（感情），报答",
      trans: "名声这东西并不真实，你知道的。其实我也只是一个女孩，站在心爱的男孩面前，恳请他能够回应自己的这份真情。"
    },
    {
      id: 95,
      movie: "毕业生 (The Graduate)",
      speaker: "本杰明 (Benjamin Braddock)",
      listener: "父亲的朋友们 (Guests)",
      scene: "在泳池边面对长辈们的世俗前途规划感到茫然与疏离",
      en: "I just want to be... comfortable. I feel a growing _____ with the neat path everyone laid out for me.",
      word: "disillusion",
      options: ["disillusion", "disposition", "disclaimer", "dissension"],
      phonetic: "/ˌdɪsɪˈluːʒn/",
      pos: "n./v.",
      meaning: "幻灭，醒悟，清醒的失望",
      trans: "我只是想感到坦然自若。对于所有人为我预先铺设好的规矩坦途，我感到一种愈发强烈的幻灭与困惑。"
    },
    {
      id: 96,
      movie: "地心引力 (Gravity)",
      speaker: "莱恩·斯通博士 (Dr. Ryan Stone)",
      listener: "独白 (Descent into Earth)",
      scene: "在再入大气层的穿梭机残骸中下定决心重返大地活下去",
      en: "I'm either gonna make it down there in one piece and have one hell of a story to tell, or I'm gonna burn up in the next ten minutes. Either way, no _____.",
      word: "regrets",
      options: ["regrets", "relapses", "remedies", "repeals"],
      phonetic: "/rɪˈɡrets/",
      pos: "n.",
      meaning: "遗憾，懊悔",
      trans: "我要么完好无损地降落回大地，拥有一个惊心动魄的故事可讲；要么在接下来的十分钟里化为灰烬。无论哪种结局，此生无悔。"
    },
    {
      id: 97,
      movie: "现代启示录 (Apocalypse Now)",
      speaker: "科茨上校 (Colonel Kurtz)",
      listener: "威尔拉德上尉 (Willard)",
      scene: "在幽暗神庙深处审视人性深渊与战争疯狂的终极本质",
      en: "Horror has a face, and you must make a friend of horror. Terror and moral panic are your allies to _____ weakness.",
      word: "vanquish",
      options: ["vanquish", "varnish", "venerate", "vacillate"],
      phonetic: "/ˈvæŋkwɪʃ/",
      pos: "v.",
      meaning: "征服，击溃，完全克服",
      trans: "恐惧是有面孔的，你必须和恐惧结为同盟。唯有恐怖与道德上的决绝，才是你彻底征服自身软弱的盟友。"
    },
    {
      id: 98,
      movie: "疯狂的麦克斯4：狂暴之路 (Mad Max: Fury Road)",
      speaker: "弗瑞奥萨指挥官 (Imperator Furiosa)",
      listener: "麦克斯 (Max Rockatansky)",
      scene: "在风沙荒原中解释为什么不惜一切代价带领逃亡",
      en: "Out here, survival is not enough. We must fight for _____, or we remain prisoners of our past.",
      word: "redemption",
      options: ["redemption", "relaxation", "recession", "repudiation"],
      phonetic: "/rɪˈdempʃn/",
      pos: "n.",
      meaning: "救赎，赎罪，超脱",
      trans: "在这片荒原之上，光是生存远远不够。我们必须为了救赎而战，否则我们终将永远沦为过去的囚徒。"
    },
    {
      id: 99,
      movie: "极速车王 (Ford v Ferrari)",
      speaker: "卡罗尔·谢尔比 (Carroll Shelby)",
      listener: "亨利·福特二世 (Henry Ford II)",
      scene: "在跑道边阐述赛车手在七千转极限速度下的物我两忘境界",
      en: "There's a point at 7,000 RPM where everything fades. The machine becomes weightless, and you cross an invisible _____.",
      word: "boundary",
      options: ["boundary", "bureaucracy", "backlash", "beverage"],
      phonetic: "/ˈbaʊndri/",
      pos: "n.",
      meaning: "界限，边界，极限",
      trans: "当转速达到7000转时，周围的一切都会悄然隐退。赛车变得毫无重量，而你正跨越一道无形的极限边界。"
    },
    {
      id: 100,
      movie: "2001太空漫游 (2001: A Space Odyssey)",
      speaker: "大卫·鲍曼 (David Bowman)",
      listener: "地面指令部 (Mission Control)",
      scene: "穿越浩瀚星门跃迁进入宇宙终极智慧领域的永恒惊叹",
      en: "My God, it's full of stars! We have arrived at the cosmic _____ of human comprehension.",
      word: "threshold",
      options: ["threshold", "tyranny", "trajectory", "tribute"],
      phonetic: "/ˈθreʃhəʊld/",
      pos: "n.",
      meaning: "门槛，极限，开端，转折点",
      trans: "我的上帝啊，这里全都是浩瀚的群星！我们已经抵达了人类认知宇宙的终极门槛。"
    }
  ];

  // 核心状态管理
  const state = {
    currentIndex: 0,
    currentQuestion: null,
    answeredIds: new Set(),   // 已作答题目的 id，用于去重计数
    selectedAnswers: {},      // 作答时每题的用户选择（id → 用户选的词）
    hasAnswered: false,
    selectedOption: null,
    clearedLevels: new Set(),
    notebook: new Map(),
  };

  let modalActiveItem = null;
  let modalMode = 'answer'; // 'answer' (答题反馈) | 'review' (关卡卡片查阅)

  const STORAGE_KEY_PROGRESS = 'cinevox_vocab_progress_v3';
  const STORAGE_KEY_NOTEBOOK = 'cinevox_vocab_notebook_v3';

  // Fisher-Yates 真正随机洗牌算法
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // 答对题数 = answeredIds ∩ clearedLevels（始终派生，永不单独存储）
  function getCorrectCount() {
    let c = 0;
    state.answeredIds.forEach(id => { if (state.clearedLevels.has(id)) c++; });
    return c;
  }

  function loadPersistedData() {
    try {
      const savedProgress = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (typeof parsed.currentIndex === 'number' && parsed.currentIndex >= 0 && parsed.currentIndex < MOVIE_VOCAB_DB.length) {
          state.currentIndex = parsed.currentIndex;
        }
        const hadCleared = Array.isArray(parsed.cleared) && parsed.cleared.length > 0;
        if (Array.isArray(parsed.answeredIds)) {
          state.answeredIds = new Set(parsed.answeredIds);
        } else if (hadCleared) {
          // 旧版本迁移：有 cleared 但没有 answeredIds，提示用户数据已规范化
          const alreadyNotified = localStorage.getItem(STORAGE_KEY_PROGRESS + '_migrated');
          if (!alreadyNotified) {
            state._needMigrationToast = true;
          }
        }
        if (parsed.selectedAnswers && typeof parsed.selectedAnswers === 'object') {
          state.selectedAnswers = parsed.selectedAnswers;
        }
        if (Array.isArray(parsed.cleared)) {
          state.clearedLevels = new Set(parsed.cleared);
        }
      }
      const savedNotebook = localStorage.getItem(STORAGE_KEY_NOTEBOOK);
      if (savedNotebook) {
        const list = JSON.parse(savedNotebook);
        state.notebook = new Map(list);
      }
    } catch(e) {
      console.warn("Storage load error:", e);
    }
    updateNotebookBadge();
  }

  function savePersistedData() {
    try {
      const progressPayload = {
        currentIndex: state.currentIndex,
        answeredIds: Array.from(state.answeredIds),
        selectedAnswers: state.selectedAnswers,
        cleared: Array.from(state.clearedLevels)
      };
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progressPayload));
      localStorage.setItem(STORAGE_KEY_NOTEBOOK, JSON.stringify(Array.from(state.notebook.entries())));
    } catch(e) {
      console.warn("Storage save error:", e);
    }
    updateNotebookBadge();
  }

  function updateNotebookBadge() {
    const badge = document.getElementById('notebookCountBadge');
    const totalTag = document.getElementById('notebookTotalTag');
    const size = state.notebook.size;
    if (size > 0) {
      badge.textContent = `(${size})`;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
    if (totalTag) totalTag.textContent = `(${size} 词)`;
  }

  const elMovieTitle = document.getElementById('movieTitle');
  const elSceneTag = document.getElementById('sceneTag');
  const elSpeaker = document.getElementById('speakerName');
  const elListener = document.getElementById('listenerName');
  const elQuoteEnglish = document.getElementById('quoteEnglish');
  const elQuoteChinese = document.getElementById('quoteChinese');
  const elOptionsContainer = document.getElementById('optionsContainer');
  const elProgressBar = document.getElementById('progressBar');
  const elCurrentLevelLabel = document.getElementById('currentLevelLabel');
  const elAccuracyStats = document.getElementById('accuracyStats');

  // 单词卡弹窗元素
  const elVocabModal = document.getElementById('vocabModal');
  const elModalResultBadge = document.getElementById('modalResultBadge');
  const elModalWord = document.getElementById('modalWord');
  const elModalPhonetic = document.getElementById('modalPhonetic');
  const elModalPos = document.getElementById('modalPos');
  const elModalMeaning = document.getElementById('modalMeaning');
  const elModalFullQuote = document.getElementById('modalFullQuote');
  const elModalQuoteTrans = document.getElementById('modalQuoteTrans');
  const elToggleBookmarkBtn = document.getElementById('toggleBookmarkBtn');
  const elBookmarkText = document.getElementById('bookmarkText');

  // 通关弹窗元素
  const elCompletionModal = document.getElementById('completionModal');
  const elCompAccuracy = document.getElementById('compAccuracy');
  const elCompCorrectCount = document.getElementById('compCorrectCount');
  const elCompNotebookCount = document.getElementById('compNotebookCount');
  const elCompEncouragement = document.getElementById('compEncouragementText');

  function renderQuestion(index) {
    state.currentIndex = index;
    state.hasAnswered = false;
    state.selectedOption = null;
    const q = MOVIE_VOCAB_DB[index];
    state.currentQuestion = q;

    // 每次切换关卡立即持久化保存当前所在关卡进度
    savePersistedData();

    elCurrentLevelLabel.textContent = q.id;
    const pct = ((index + 1) / MOVIE_VOCAB_DB.length) * 100;
    elProgressBar.style.width = `${pct}%`;

    const answeredN = state.answeredIds.size;
    if (answeredN > 0) {
      const acc = Math.round((getCorrectCount() / answeredN) * 100);
      elAccuracyStats.innerHTML = `正确率: <span class="text-brand-accent font-semibold">${acc}%</span> (${getCorrectCount()}/${answeredN})`;
    } else {
      elAccuracyStats.innerHTML = `正确率: <span class="text-brand-accent font-semibold">100%</span>`;
    }

    elMovieTitle.textContent = q.movie;
    elMovieTitle.title = q.movie;
    elSceneTag.textContent = q.scene;
    elSceneTag.title = q.scene;
    elSpeaker.textContent = q.speaker;
    elListener.textContent = q.listener;

    const blankHtml = `<span id="blankSlot" class="inline-block mx-1 px-2.5 py-0.5 border-b-2 border-brand-accent bg-brand-800 text-brand-accent font-bold tracking-wider">[ ______ ]</span>`;
    const formattedEn = q.en.replace(/_{3,}/g, blankHtml);
    elQuoteEnglish.innerHTML = formattedEn;
    elQuoteChinese.textContent = q.trans;

    const actionBar = document.getElementById('answeredActionBar');
    if (actionBar) actionBar.classList.add('hidden');

    // 每次渲染题目或从头开始，都强制通过洗牌算法彻底随机化4个选项的排列顺序
    const shuffledOptions = shuffleArray(q.options);
    elOptionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    shuffledOptions.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = `option-btn btn-cinema p-3 text-left font-medium text-slate-200 hover:text-white flex items-center justify-between`;
      btn.dataset.word = opt;
      btn.dataset.index = idx;

      btn.innerHTML = `
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 bg-brand-950/80 border border-white/20 flex items-center justify-center font-mono text-xs text-brand-accent font-bold">
            ${letters[idx]}
          </span>
          <span class="text-base tracking-wide">${opt}</span>
        </div>
      `;

      btn.addEventListener('click', () => handleSelectOption(opt, btn));
      elOptionsContainer.appendChild(btn);
    });

    // 恢复已答题目状态（页面刷新/退出重进后）
    if (state.answeredIds.has(q.id)) {
      state.hasAnswered = true;
      state.selectedOption = state.selectedAnswers[q.id] || null;
      const wasCorrect = state.clearedLevels.has(q.id);

      const blankSlot = document.getElementById('blankSlot');
      if (blankSlot) {
        blankSlot.textContent = `[ ${q.word} ]`;
        blankSlot.style.borderColor = wasCorrect ? '#63A633' : '#A6263E';
        blankSlot.style.color = wasCorrect ? '#63A633' : '#A6263E';
      }

      elOptionsContainer.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        if (wasCorrect) {
          // 用户答对：只标正确项为绿
          if (btn.dataset.word === q.word) btn.classList.add('state-correct');
        } else {
          // 用户答错：只标他当时选的那项为红，不额外把正确项也标绿
          if (btn.dataset.word === state.selectedAnswers[q.id]) btn.classList.add('state-wrong');
        }
      });

      const actionBar = document.getElementById('answeredActionBar');
      const statusText = document.getElementById('answeredStatusText');
      const mainNextBtn = document.getElementById('mainNextBtn');
      if (actionBar) actionBar.classList.remove('hidden');
      if (statusText) {
        statusText.innerHTML = wasCorrect
          ? `[回答正确] 单词 <strong class="text-brand-accent">${q.word}</strong> 已掌握`
          : `[回答错误] 正确答案为 <strong class="text-brand-accent">${q.word}</strong>`;
      }
      if (mainNextBtn) {
        mainNextBtn.textContent = (state.currentIndex === MOVIE_VOCAB_DB.length - 1) ? '查看闯关总结果' : '下一个名场面';
      }
    }
  }

  function handleSelectOption(selectedWord, targetBtn) {
    const q = state.currentQuestion;
    // 防止同一题被重复计数（例如刷新页面后重新答已答过的题）
    if (state.answeredIds.has(q.id)) return;
    if (state.hasAnswered) return;

    state.hasAnswered = true;
    state.selectedOption = selectedWord;
    state.answeredIds.add(q.id);
    state.selectedAnswers[q.id] = selectedWord;
    const isCorrect = (selectedWord.toLowerCase() === q.word.toLowerCase());

    const blankSlot = document.getElementById('blankSlot');
    if (blankSlot) {
      blankSlot.textContent = `[ ${q.word} ]`;
      blankSlot.style.borderColor = isCorrect ? '#63A633' : '#A6263E';
      blankSlot.style.color = isCorrect ? '#63A633' : '#A6263E';
    }

    // 只高亮用户的选择：对了就那项绿，错了就那项红，不额外把正确答案也标出来
    if (isCorrect) {
      targetBtn.classList.add('state-correct');
    } else {
      targetBtn.classList.add('state-wrong');
    }
    const allBtns = elOptionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);

    if (isCorrect) {
      state.clearedLevels.add(q.id);
    } else {
      addToNotebook(q);
    }

    savePersistedData();

    // 更新正确率指示
    const answeredN = state.answeredIds.size;
    const acc = answeredN > 0 ? Math.round((getCorrectCount() / answeredN) * 100) : 100;
    elAccuracyStats.innerHTML = `正确率: <span class="text-brand-accent font-semibold">${acc}%</span> (${getCorrectCount()}/${answeredN})`;

    const actionBar = document.getElementById('answeredActionBar');
    const statusText = document.getElementById('answeredStatusText');
    const mainNextBtn = document.getElementById('mainNextBtn');

    if (actionBar) {
      actionBar.classList.remove('hidden');
      if (isCorrect) {
        statusText.innerHTML = `[回答正确] 单词 <strong class="text-brand-accent">${q.word}</strong> 已掌握`;
      } else {
        statusText.innerHTML = `[回答错误] 正确答案为 <strong class="text-brand-accent">${q.word}</strong>（已入生词本）`;
      }

      if (state.currentIndex === MOVIE_VOCAB_DB.length - 1) {
        if (mainNextBtn) mainNextBtn.textContent = '查看闯关总结果';
      } else {
        if (mainNextBtn) mainNextBtn.textContent = '下一个名场面';
      }
    }

    setTimeout(() => {
      openVocabModal(isCorrect);
    }, 400);
  }

  function openVocabModal(isCorrect) {
    modalMode = 'answer';
    const q = state.currentQuestion;
    modalActiveItem = q;
    
    if (isCorrect) {
      elModalResultBadge.className = 'text-xs font-bold text-brand-correct tracking-wide';
      elModalResultBadge.textContent = '[回答正确] 单词已掌握';
    } else {
      elModalResultBadge.className = 'text-xs font-bold text-brand-wrong tracking-wide';
      elModalResultBadge.textContent = `[回答错误] 正确答案是: ${q.word}`;
    }

    elModalWord.textContent = q.word;
    elModalPhonetic.textContent = q.phonetic;
    elModalPos.textContent = q.pos;
    elModalMeaning.textContent = q.meaning;

    const highlightedEn = q.en.replace(/_{3,}/g, `<strong class="text-brand-accent underline px-1">${q.word}</strong>`);
    elModalFullQuote.innerHTML = `“${highlightedEn}”`;
    elModalQuoteTrans.textContent = `释义: “${q.trans}”`;

    const nextBtn = document.getElementById('nextQuestionBtn');
    if (state.currentIndex === MOVIE_VOCAB_DB.length - 1) {
      if (nextBtn) nextBtn.textContent = '查看闯关总结果';
    } else {
      if (nextBtn) nextBtn.textContent = '下一个名场面';
    }

    updateBookmarkButtonState(q.word);

    elVocabModal.classList.remove('opacity-0', 'pointer-events-none');
  }

  // 关卡地图中查阅指定关卡的单词卡（不打断主游戏答题进程）
  function openVocabModalForReview(q) {
    modalMode = 'review';
    modalActiveItem = q;

    elModalResultBadge.className = 'text-xs font-bold text-brand-accent tracking-wide';
    elModalResultBadge.textContent = `[第 ${q.id} 关电影单词卡] ${q.movie}`;

    elModalWord.textContent = q.word;
    elModalPhonetic.textContent = q.phonetic;
    elModalPos.textContent = q.pos;
    elModalMeaning.textContent = q.meaning;

    const highlightedEn = q.en.replace(/_{3,}/g, `<strong class="text-brand-accent underline px-1">${q.word}</strong>`);
    elModalFullQuote.innerHTML = `“${highlightedEn}”`;
    elModalQuoteTrans.textContent = `释义: “${q.trans}”`;

    const nextBtn = document.getElementById('nextQuestionBtn');
    if (nextBtn) nextBtn.textContent = '[返回关卡导航]';

    updateBookmarkButtonState(q.word);

    elVocabModal.classList.remove('opacity-0', 'pointer-events-none');
  }

  function closeVocabModal() {
    elVocabModal.classList.add('opacity-0', 'pointer-events-none');
  }

  function handleModalActionBtnClick() {
    if (modalMode === 'review') {
      closeVocabModal();
      renderLevelsGrid();
      elLevelMapModal.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      nextQuestion();
    }
  }

  function nextQuestion() {
    closeVocabModal();
    if (state.currentIndex + 1 < MOVIE_VOCAB_DB.length) {
      renderQuestion(state.currentIndex + 1);
    } else {
      // 100 关全部作答完毕，展示通关成果结算面板
      openCompletionModal();
    }
  }

  function openCompletionModal() {
    const total = state.answeredIds.size || MOVIE_VOCAB_DB.length;
    const correct = getCorrectCount();
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 100;

    elCompAccuracy.textContent = `${accuracy}%`;
    elCompCorrectCount.textContent = `${correct} / ${total}`;
    elCompNotebookCount.textContent = `${state.notebook.size} 词`;

    elCompEncouragement.textContent = "百折不挠的挑战者！完整跨越了100部电影的考验。";
    elCompletionModal.classList.remove('opacity-0', 'pointer-events-none');
  }

  function closeCompletionModal() {
    elCompletionModal.classList.add('opacity-0', 'pointer-events-none');
  }

  function addToNotebook(item) {
    state.notebook.set(item.word, item);
    savePersistedData();
  }

  function removeFromNotebook(word) {
    state.notebook.delete(word);
    savePersistedData();
    renderNotebookList();
  }

  function updateBookmarkButtonState(word) {
    const isSaved = state.notebook.has(word);
    if (isSaved) {
      elBookmarkText.textContent = '[已在生词本]';
      elToggleBookmarkBtn.classList.add('text-brand-accent', 'border-brand-accent');
    } else {
      elBookmarkText.textContent = '[加入生词本]';
      elToggleBookmarkBtn.classList.remove('text-brand-accent', 'border-brand-accent');
    }
  }

  const elLevelMapModal = document.getElementById('levelMapModal');
  const elLevelsGrid = document.getElementById('levelsGrid');

  function renderLevelsGrid() {
    elLevelsGrid.innerHTML = '';
    MOVIE_VOCAB_DB.forEach((q, idx) => {
      const btn = document.createElement('button');
      const isCurrent = (idx === state.currentIndex);
      const isCleared = state.clearedLevels.has(q.id);

      let baseClasses = 'h-10 font-mono text-xs font-semibold flex flex-col items-center justify-center border transition-colors ';
      if (isCurrent) {
        baseClasses += 'bg-brand-accent text-brand-950 border-brand-accent font-bold';
      } else if (isCleared) {
        baseClasses += 'bg-brand-correct/20 text-brand-correct border-brand-correct/50 hover:bg-brand-correct/30';
      } else {
        baseClasses += 'bg-brand-800 text-slate-300 border-white/10 hover:bg-brand-700';
      }

      btn.className = baseClasses;
      btn.innerHTML = `
        <span>${q.id}</span>
        <span class="text-[9px] font-normal opacity-80 truncate max-w-[40px]">${q.word.slice(0, 4)}</span>
      `;

      // 点击关卡数字卡片直接弹出该关的单词卡供查看，不重置或切换当前题目的答题进度
      btn.addEventListener('click', () => {
        elLevelMapModal.classList.add('opacity-0', 'pointer-events-none');
        openVocabModalForReview(q);
      });
      elLevelsGrid.appendChild(btn);
    });
  }

  const elNotebookModal = document.getElementById('notebookModal');
  const elNotebookList = document.getElementById('notebookList');

  function renderNotebookList() {
    elNotebookList.innerHTML = '';
    if (state.notebook.size === 0) {
      elNotebookList.innerHTML = `
        <div class="py-10 text-center text-slate-400 text-xs">
          生词本无记录。答错的题目或收藏的单词会记录在这里。
        </div>
      `;
      return;
    }

    state.notebook.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'p-2.5 bg-brand-900 border border-white/10 flex items-center justify-between gap-2';
      row.innerHTML = `
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-brand-accent font-bold text-sm">${item.word}</span>
            <span class="text-xs font-mono text-slate-300">${item.phonetic}</span>
            <span class="text-[10px] px-1 bg-brand-700 text-slate-200 font-mono">${item.pos}</span>
          </div>
          <p class="text-xs text-slate-300 truncate mt-0.5">${item.meaning}</p>
          <p class="text-[11px] text-slate-400 truncate mt-0.5">[来源] ${item.movie}</p>
        </div>
        <div class="flex items-center gap-1">
          <button class="remove-btn px-2 py-1 bg-brand-800 hover:bg-brand-wrong/30 border border-white/20 text-slate-400 hover:text-brand-wrong text-xs">
            [移除]
          </button>
        </div>
      `;

      row.querySelector('.remove-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        removeFromNotebook(item.word);
      });
      elNotebookList.appendChild(row);
    });
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none');
    }, 2500);
  }

  function exportNotebookToClipboard() {
    if (state.notebook.size === 0) {
      showToast('生词本暂无内容可导出');
      return;
    }
    let text = '=== 电影单词闯关 • 生词本 ===\n\n';
    state.notebook.forEach((item) => {
      text += `• ${item.word} ${item.phonetic} [${item.pos}] ${item.meaning}\n`;
      text += `  出处: ${item.movie}\n`;
      text += `  台词: ${item.en.replace(/_{3,}/g, item.word)}\n`;
      text += `  译文: ${item.trans}\n\n`;
    });

    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('生词本已复制到剪贴板');
    } catch(err) {
      showToast('复制失败，请手动选取');
    }
    document.body.removeChild(textArea);
  }

  function setupEventListeners() {
    document.getElementById('nextQuestionBtn').addEventListener('click', handleModalActionBtnClick);
    document.getElementById('closeModalBtn').addEventListener('click', closeVocabModal);

    elVocabModal.addEventListener('click', (e) => {
      if (e.target === elVocabModal) closeVocabModal();
    });

    const mainNextBtn = document.getElementById('mainNextBtn');
    if (mainNextBtn) mainNextBtn.addEventListener('click', nextQuestion);

    const reopenModalBtn = document.getElementById('reopenModalBtn');
    if (reopenModalBtn) {
      reopenModalBtn.addEventListener('click', () => {
        if (state.currentQuestion && state.hasAnswered) {
          const isCorrect = (state.selectedOption && state.selectedOption.toLowerCase() === state.currentQuestion.word.toLowerCase());
          openVocabModal(isCorrect);
        }
      });
    }

    elToggleBookmarkBtn.addEventListener('click', () => {
      const q = modalActiveItem || state.currentQuestion;
      if (!q) return;
      if (state.notebook.has(q.word)) {
        state.notebook.delete(q.word);
        showToast(`已将 "${q.word}" 移出生词本`);
      } else {
        state.notebook.set(q.word, q);
        showToast(`"${q.word}" 已加入生词本`);
      }
      savePersistedData();
      updateBookmarkButtonState(q.word);
    });

    // 关卡全览按钮
    const levelMapBtn = document.getElementById('levelMapBtn');
    const closeLevelMapBtn = document.getElementById('closeLevelMapBtn');
    levelMapBtn.addEventListener('click', () => {
      renderLevelsGrid();
      elLevelMapModal.classList.remove('opacity-0', 'pointer-events-none');
    });
    closeLevelMapBtn.addEventListener('click', () => {
      elLevelMapModal.classList.add('opacity-0', 'pointer-events-none');
    });

    // 生词本按钮
    const notebookBtn = document.getElementById('notebookBtn');
    const closeNotebookBtn = document.getElementById('closeNotebookBtn');
    notebookBtn.addEventListener('click', () => {
      renderNotebookList();
      elNotebookModal.classList.remove('opacity-0', 'pointer-events-none');
    });
    closeNotebookBtn.addEventListener('click', () => {
      elNotebookModal.classList.add('opacity-0', 'pointer-events-none');
    });

    document.getElementById('exportNotebookBtn').addEventListener('click', exportNotebookToClipboard);
    document.getElementById('clearNotebookBtn').addEventListener('click', () => {
      state.notebook.clear();
      savePersistedData();
      renderNotebookList();
      showToast('生词本已清空');
    });

    // 通关结果弹窗相关按钮
    document.getElementById('closeCompletionModalBtn').addEventListener('click', closeCompletionModal);
    document.getElementById('compOpenNotebookBtn').addEventListener('click', () => {
      closeCompletionModal();
      renderNotebookList();
      elNotebookModal.classList.remove('opacity-0', 'pointer-events-none');
    });
    document.getElementById('compOpenLevelMapBtn').addEventListener('click', () => {
      closeCompletionModal();
      renderLevelsGrid();
      elLevelMapModal.classList.remove('opacity-0', 'pointer-events-none');
    });
    document.getElementById('compRestartBtn').addEventListener('click', () => {
      closeCompletionModal();
      restartModal.classList.remove('opacity-0', 'pointer-events-none');
    });

    // 从头开始挑战弹窗逻辑
    const restartPromptBtn = document.getElementById('restartPromptBtn');
    const restartModal = document.getElementById('restartModal');
    const closeRestartModalBtn = document.getElementById('closeRestartModalBtn');
    const cancelRestartBtn = document.getElementById('cancelRestartBtn');
    const confirmResetBtn = document.getElementById('confirmResetBtn');

    restartPromptBtn.addEventListener('click', () => {
      restartModal.classList.remove('opacity-0', 'pointer-events-none');
    });

    const hideRestartModal = () => {
      restartModal.classList.add('opacity-0', 'pointer-events-none');
    };

    closeRestartModalBtn.addEventListener('click', hideRestartModal);
    if (cancelRestartBtn) cancelRestartBtn.addEventListener('click', hideRestartModal);

    restartModal.addEventListener('click', (e) => {
      if (e.target === restartModal) hideRestartModal();
    });

    // 确认从头开始：彻底清空进度，从第1关开始，并随机刷新题目选项
    confirmResetBtn.addEventListener('click', () => {
      hideRestartModal();
      state.currentIndex = 0;
      state.clearedLevels.clear();
      state.answeredIds.clear();
      state.selectedAnswers = {};
      state.notebook.clear();
      savePersistedData();
      renderQuestion(0);
      showToast('已彻底清空进度，从第1题重新挑战');
    });

    // 点击弹窗背景关闭
    elCompletionModal.addEventListener('click', (e) => {
      if (e.target === elCompletionModal) closeCompletionModal();
    });
    elLevelMapModal.addEventListener('click', (e) => {
      if (e.target === elLevelMapModal) elLevelMapModal.classList.add('opacity-0', 'pointer-events-none');
    });
    elNotebookModal.addEventListener('click', (e) => {
      if (e.target === elNotebookModal) elNotebookModal.classList.add('opacity-0', 'pointer-events-none');
    });
  }

  // 页面加载启动
  window.addEventListener('DOMContentLoaded', () => {
    loadPersistedData();
    setupEventListeners();
    // 显示上次停留的关卡并确保选项随机化排布
    renderQuestion(state.currentIndex);

    if (state._needMigrationToast) {
      localStorage.setItem(STORAGE_KEY_PROGRESS + '_migrated', '1');
      setTimeout(() => showToast('已自动升级：之前答题次数被重复计数，现在每题只算一次'), 500);
    }
  });
