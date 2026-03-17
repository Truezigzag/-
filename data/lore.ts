export type Character = {
  slug: string;
  name: string;
  title: string;
  appearance: string;
  personality: string;
  abilities: string[];
  lineage: string;
  profile?: Array<{ label: string; value: string }>;
};

export type ArchiveEntry = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  table?: Array<{ key: string; value: string }>;
};

export const characters: Character[] = [
  {
    slug: 'li-songrui',
    name: '李松瑞 · Li Songrui',
    title: '破罐医师 / 东方龙兽人',
    appearance: '藏青主鳞与古董白腹鳞并存，灰白毛发，1.2 米龙尾拖地。',
    personality: '嘴硬心软、强烈家庭观念、在高压后表现出显著创伤后成长。',
    abilities: ['望闻问切', '临床处方', '隔离区', '不灭之火·双生形态', '随身空间·美食仓库'],
    lineage: '融合上古神龙基因的人造生命个体，后脱离实验室体系。',
    profile: [
      { label: '实验室编号', value: '190071（颈后条形码）' },
      { label: '身份', value: '破罐咖啡馆大老板' },
      { label: '年龄', value: '20 → 21' },
      { label: '空间容量', value: '50 立方米（可调温）' }
    ]
  },
  {
    slug: 'lan-bu',
    name: '岚步 · Lan Bu',
    title: '邪神共生者 / 狼兽人',
    appearance: '灰色毛发、体格壮硕，行动时有明显压迫感与保护性。',
    personality: '表面憨厚、内核敏锐，对家人高度忠诚，具强共情能力。',
    abilities: ['危险派对', '危险感知', '气味印记', '狼群呼唤', '月夜狂暴', '邪神共生'],
    lineage: '“神狼”基因与少量神龙基因共存，并与上古邪神长期共生。',
    profile: [
      { label: '实验室编号', value: '159357（颈后条形码）' },
      { label: '身份', value: '破罐咖啡馆二老板' },
      { label: '嗅觉记忆', value: '1000+ 气味特征' },
      { label: '新增标签', value: '鞋类品鉴师（老北京布鞋优先）' }
    ]
  },
  {
    slug: 'yan-lu',
    name: '焰露 · Yan Lu',
    title: '龙裔子代 / 赤雨系',
    appearance: '半透明鳞甲如雨后玻璃，瞳底映红焰纹。',
    personality: '安静、依附性高，偏好围绕父辈行动。',
    abilities: ['烬雨逆流', '火种共鸣'],
    lineage: '六只小龙之一，继承赤雨古龙血脉分支。'
  },
  {
    slug: 'lin-qi',
    name: '凛祈 · Lin Qi',
    title: '龙裔子代 / 空腔霜系',
    appearance: '瞳孔为六角霜纹，呼吸可在空气中留下白雾轨迹。',
    personality: '寡言、警惕，受惊时会主动守在家门口。',
    abilities: ['霜空静止', '骨钟共鸣'],
    lineage: '六只小龙之一，源自空腔霜龙遗骨谱系。'
  },
  {
    slug: 'ye-shao',
    name: '夜梢 · Ye Shao',
    title: '龙裔子代 / 幽灯系',
    appearance: '肩胛长出灯丝状角刺，皮肤符号在黑暗中轻微流动。',
    personality: '机敏、爱恶作剧，夜间活跃度显著提高。',
    abilities: ['暗灯裂界', '影骨迁跃'],
    lineage: '六只小龙之一，继承幽灯古龙夜行特征。'
  }
];

export const archiveEntries: ArchiveEntry[] = [
  {
    id: '00-abstract',
    title: '00_摘要与方法',
    summary: '报告以实验室档案、深访、两年行为观察与能力实测构建角色认知模型。',
    bullets: [
      '核心结论：能力系统与创伤经历呈深度耦合关系。',
      '团体价值观“破罐精神”是关系稳定的关键纽带。',
      '研究限制：特殊存在难标准化测试，小龙能力仍在发育。'
    ],
    table: [
      { key: '研究对象', value: '破罐咖啡馆核心成员及关联角色' },
      { key: '主要方法', value: '档案调取 / 深访 / 行为观察 / 能力实测' },
      { key: '周期', value: '连续 2 年' }
    ]
  },
  {
    id: '01-li-space',
    title: '01_李松瑞·随身空间增补',
    summary: '随身空间由规则怪谈后觉醒，现稳定在 50m³，并被使用为“美食仓库”。',
    bullets: [
      '空间温控范围 -20℃ ~ 100℃，意念瞬时存取。',
      '内容长期以食品为主，并形成“炸鸡山/可乐河”等空间奇观。',
      '战斗用途偏功能性补给，兼具干扰与羞辱效果。'
    ],
    table: [
      { key: '初始容量', value: '10m³' },
      { key: '当前容量', value: '50m³' },
      { key: '扩容机制', value: '高频投喂与周期清空再填满' }
    ]
  },
  {
    id: '02-lan-shoes',
    title: '02_岚步·鞋类偏好修正',
    summary: '偏好由军靴单一指向，演化为多鞋类，当前稳定偏好“老北京布鞋”。',
    bullets: [
      '棉布吸附与长期穿着产生的层次气味被其标记为高价值样本。',
      '偏好变化引发咖啡馆衍生服务：鞋类品鉴与回收分区升级。',
      '家庭成员对其偏好由排斥转向理解，强化团体包容性。'
    ],
    table: [
      { key: '嗅觉记忆容量', value: '约 1000 类' },
      { key: '当前收藏规模', value: '30 双（轮换）' },
      { key: '品鉴服务', value: '50 元/次（含讲解）' }
    ]
  },
  {
    id: '03-conclusion',
    title: '03_结论与展望',
    summary: '两位核心成员的能力使用均体现“性格主导能力表达”的规律。',
    bullets: [
      '李松瑞将高潜能空间优先用于个人与家庭幸福保障。',
      '岚步的感官专长从战斗外溢到服务系统，形成新经济活动。',
      '后续关注：空间极限扩容、嗅觉能力商业化边界。'
    ]
  }
];

export const skillTree = [
  { id: 'root', name: '创伤后成长核', tier: 0, x: 50, y: 8 },
  { id: 'diag', name: '望闻问切', tier: 1, x: 24, y: 30 },
  { id: 'space', name: '随身空间', tier: 1, x: 50, y: 30 },
  { id: 'scent', name: '气味印记', tier: 1, x: 76, y: 30 },
  { id: 'field', name: '隔离区', tier: 2, x: 32, y: 58 },
  { id: 'symbiosis', name: '邪神共生', tier: 2, x: 68, y: 58 },
  { id: 'quartet', name: '烬契四重奏·终曲', tier: 3, x: 50, y: 84 }
];

export const skillEdges = [
  ['root', 'diag'],
  ['root', 'space'],
  ['root', 'scent'],
  ['diag', 'field'],
  ['space', 'field'],
  ['space', 'symbiosis'],
  ['scent', 'symbiosis'],
  ['field', 'quartet'],
  ['symbiosis', 'quartet']
] as const;

export const items = [
  { name: '白瓷茶杯', tag: '家居', behavior: '注入热水后会浮现昨日对话字幕，语音却来自明天。' },
  { name: '旧雨伞', tag: '随身', behavior: '晴天撑开有雨声，雨天撑开整条街瞬时静风。' },
  { name: '地铁票根', tag: '交通', behavior: '贴在门上可短暂开启不存在的站台，乘客皆是旧梦。' },
  { name: '备用军靴', tag: '仓储', behavior: '放入随身空间后会在深夜自行移动到门边并沾上潮气。' },
  { name: '咖啡馆账本', tag: '经营', behavior: '每逢凌晨会自动新增一页尚未发生的开销记录。' }
];
