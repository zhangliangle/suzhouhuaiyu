
import { productImages } from './image.js'
// 产品详情数据
export const products = {
  rigid: {
    name: '刚性铝管',
    subProducts: [
      { id: 'blue', name: '蓝色铝管', description: '蓝色阳极氧化处理的刚性铝管，具有优异的耐腐蚀性能', image: productImages.rigid.main },
      { id: 'gray', name: '灰色铝管', description: '灰色阳极氧化处理的刚性铝管，美观且耐腐蚀', image: productImages.rigid.other1 }
    ],
    description: '刚性铝管采用优质6063-T5铝合金材料制造，具有高强度、轻量化、耐腐蚀等特点。表面经过阳极氧化处理，进一步提高了其耐腐蚀性能和使用寿命。适用于工业自动化、压缩空气系统、真空系统等领域的流体输送。',
    features: [
      '高强度：采用6063-T5铝合金材料，抗拉强度高',
      '轻量化：重量仅为同规格钢管的1/3，安装便捷',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '光滑内壁：流体阻力小，减少能源消耗',
      '模块化设计：安装速度快，降低施工成本',
      '可回收：100%可回收利用，符合环保要求'
    ],
    specs: [
      { number: '1020', name: '蓝色铝合金管', model: 'DN20*5.8米 色号：RAL5015', unit: '根', standardPrice: '109', price: '30.52' },
      { number: '1025', name: '蓝色铝合金管', model: 'DN25*5.8米 色号：RAL5015', unit: '根', standardPrice: '150', price: '42.00' },
      { number: '1040', name: '蓝色铝合金管', model: 'DN40*5.8米 色号：RAL5015', unit: '根', standardPrice: '301', price: '88.00' },
      { number: '1050', name: '蓝色铝合金管', model: 'DN50*5.8米 色号：RAL5015', unit: '根', standardPrice: '450', price: '126.00' },
      { number: '1063', name: '蓝色铝合金管', model: 'DN63*5.8米 色号：RAL5015', unit: '根', standardPrice: '728', price: '210.00' },
      { number: '1080', name: '蓝色铝合金管', model: 'DN80*5.8米 色号：RAL5015', unit: '根', standardPrice: '935', price: '250.00' },

      { number: '10100', name: '蓝色铝合金管', model: 'DN100*5.8米 色号：RAL5015', unit: '根', standardPrice: '1205', price: '340.00' },
      { number: '10133', name: '蓝色铝合金管', model: 'DN133*5.8米 色号：RAL5015', unit: '根', standardPrice: '1638', price: '461.00' },
      { number: '10148', name: '蓝色铝合金管', model: 'DN148*5.8米 色号：RAL5015', unit: '根', standardPrice: '2350', price: '580.00' },
      { number: '10150', name: '蓝色铝合金管', model: 'DN150*5.8米 色号：RAL5015', unit: '根', standardPrice: '2350', price: '580.00' },
      { number: '10200', name: '蓝色铝合金管', model: 'DN200*5.8米 色号：RAL5015', unit: '根', standardPrice: '4280', price: '1068.00' },
      { number: '1120', name: '灰色铝合金管', model: 'DN20*6米 色号：RAL7001', unit: '根', standardPrice: '109', price: '30.52' },
      { number: '1125', name: '灰色铝合金管', model: 'DN25*6米 色号：RAL7001', unit: '根', standardPrice: '150', price: '42.00' },
     
      { number: '1140', name: '灰色铝合金管', model: 'DN40*6米 色号：RAL7001', unit: '根', standardPrice: '301', price: '88.00' },
      { number: '1150', name: '灰色铝合金管', model: 'DN50*6米 色号：RAL7001', unit: '根', standardPrice: '450', price: '126.00' },
      { number: '1163', name: '灰色铝合金管', model: 'DN63*6米 色号：RAL7001', unit: '根', standardPrice: '728', price: '210.00' },
      { number: '1180', name: '灰色铝合金管', model: 'DN80*6米 色号：RAL7001', unit: '根', standardPrice: '935', price: '250.00' }, 
       { number: '11100', name: '灰色铝合金管', model: 'DN100*6米 色号：RAL7001', unit: '根', standardPrice: '1205', price: '340.00' },
    ],
    faq: [
      { question: '铝合金管道的使用寿命是多久？', answer: '在正常使用条件下，铝合金管道的使用寿命可达20年以上，远超过传统的镀锌钢管。' },
      { question: '铝合金管道的安装方式有哪些？', answer: '我们的铝合金管道采用模块化设计，主要通过专用接头进行连接，无需焊接，安装速度快，可大大降低施工成本。' },
      { question: '铝合金管道可以承受多大的压力？', answer: '我们的工业级铝合金管道工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '铝合金管道需要定期维护吗？', answer: '铝合金管道几乎不需要定期维护，只需定期检查接头是否松动即可，大大降低了维护成本。' }
    ]
  },
  connectors: {
    name: '接头',
    subProducts: [
      { id: 'straight', name: '外螺纹接头', description: '用于连接两根相同直径的铝管', image: productImages.connectors.main },
      { id: 'reducer', name: '外螺纹接头(标配件）', description: '用于连接两根不同直径的铝管', image: productImages.connectors.other1 },
      { id: 'tee', name: '内螺纹接头', description: '用于连接三根铝管，形成分支', image: productImages.connectors.other2 },
      { id: 'quad', name: '气动接头', description: '用于连接四根铝管，形成分支', image: productImages.connectors.other3 },
      { id: 'extract', name: '气动接头', description: '用于提取铝管中的流体', image: productImages.connectors.other4 },
    ],
    description: '铝合金管道接头采用优质铝合金材料制造，具有高强度、耐腐蚀、密封性能好等特点。我们提供多种类型的接头，包括直通接头、变径接头、三通接头等，满足不同安装场景的需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '密封性能好：采用优质密封材料，确保连接紧密无泄漏',
      '安装便捷：模块化设计，无需焊接，安装速度快',
      '可重复使用：拆卸后可重新安装使用，减少浪费',
      '美观大方：与铝管颜色一致，整体美观度高'
    ],
    specs: [
      { number: '302015', name: '外螺纹接头', model: 'DN20-R1/2"（铝合金）', unit: '个', standardPrice: '48.00', price: '9.60' },
      { number: '3020', name: '外螺纹接头', model: 'DN20-R3/4"（铝合金）', unit: '个', standardPrice: '48.00', price: '9.60' },
      { number: '3025', name: '外螺纹接头', model: 'DN25-R1"（铝合金）', unit: '个', standardPrice: '65.00', price: '13.00' },
      { number: '302520', name: '外螺纹接头', model: 'DN25-R3/4"（铝合金）', unit: '个', standardPrice: '65.00', price: '13.00' },
      { number: '302515', name: '外螺纹接头', model: 'DN25-R1/2"（铝合金）', unit: '个', standardPrice: '	65.00', price: '13.00' },
      { number: '304025', name: '外螺纹接头', model: 'DN40-R1"（铝合金）', unit: '个', standardPrice: '86.00', price: '17.20' },
      { number: '3040', name: '外螺纹接头', model: 'DN40-R1-1/2"（铝合金）', unit: '个', standardPrice: '86.00', price: '17.20' },
      { number: '305025', name: '外螺纹接头', model: 'DN50-R1"（铝合金）', unit: '个', standardPrice: '108.00', price: '21.60' },
      { number: '305040', name: '外螺纹接头', model: 'DN50-R1-1/2"（铝合金）', unit: '个', standardPrice: '108.00', price: '21.60' },
      { number: '3050', name: '外螺纹接头', model: 'DN50-R2"（铝合金）', unit: '个', standardPrice: '108.00', price: '21.60' },
      { number: '3063', name: '外螺纹接头', model: 'DN63-R2-1/2"（铝合金）', unit: '个', standardPrice: '150.00', price: '30.00' },
      { number: '3080', name: '外螺纹接头', model: 'DN80-R3"（铝合金）', unit: '个', standardPrice: '218.00', price: '43.60' },

      { number: '3020151', name: '外螺纹接头(标配件）', model: 'DN20-R1/2"（铝合金，标配）', unit: '套', standardPrice: '89.00', price: '17.80' },
      { number: '30201', name: '外螺纹接头(标配件）', model: 'DN20-R3/4"（铝合金，标配）', unit: '套', standardPrice: '89.00', price: '17.80' },
      { number: '30251', name: '外螺纹接头(标配件）', model: 'DN25-R1"（铝合金，标配）', unit: '套', standardPrice: '116.50', price: '23.30' },
      { number: '3025201', name: '外螺纹接头(标配件）', model: 'DN25-R3/4"（铝合金，标配）', unit: '套', standardPrice: '116.50', price: '23.30' },
      { number: '3025151', name: '外螺纹接头(标配件）', model: 'DN25-R1/2"（铝合金，标配）', unit: '套', standardPrice: '116.50', price: '23.30' },
      { number: '3040251', name: '外螺纹接头(标配件）', model: 'DN40-R1"（铝合金，标配）', unit: '套', standardPrice: '180.00', price: '36.00' },
      { number: '30401', name: '外螺纹接头(标配件）', model: 'DN40-R1-1/2"（铝合金，标配）', unit: '套', standardPrice: '180.00', price: '36.00' },
      { number: '3150401', name: '外螺纹接头(标配件）', model: 'DN50-Rc1-1/2"（铝合金，标配）', unit: '套', standardPrice: '222.60', price: '44.52' },
      { number: '31501', name: '外螺纹接头(标配件）', model: 'DN50-Rc2"（铝合金，标配）', unit: '套', standardPrice: '222.60', price: '44.52' },

      { number: '651', name: '气动接头', model: 'R1/2单插（日式）', unit: '套', standardPrice: '24.00', price: '4.80' },
       { number: '652', name: '气动接头', model: 'R1/2双插（日式）', unit: '套', standardPrice: '86.00', price: '17.20' },
      { number: '653', name: '气动接头', model: 'R1/2三插（日式）', unit: '套', standardPrice: '	116.00', price: '23.20' },
      { number: '654', name: '气动接头', model: 'R1/2四插（日式）', unit: '套', standardPrice: '226.00', price: '45.20' },
      { number: '655', name: '气动接头', model: 'R1/2五插（日式）', unit: '套', standardPrice: '316.00', price: '63.20' },

       { number: '642015', name: '转换接头（不锈钢）', model: '转换接头（不锈钢）R3/4*R1/2', unit: '套', standardPrice: '9.50', price: '1.90' },
        { number: '642515', name: '转换接头（不锈钢）', model: '转换接头（不锈钢）R1*R1/2', unit: '套', standardPrice: '	16.00', price: '3.20' },
    ],
    faq: [
      { question: '接头的使用寿命是多久？', answer: '在正常使用条件下，铝合金接头的使用寿命可达15年以上。' },
      { question: '接头的安装方式是怎样的？', answer: '我们的接头采用快插式设计，只需将铝管插入接头并拧紧螺母即可，安装非常便捷。' },
      { question: '接头可以承受多大的压力？', answer: '我们的铝合金接头工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '接头需要定期维护吗？', answer: '接头几乎不需要定期维护，只需定期检查是否松动即可。' }
    ]
  },
  elbows: {
    name: '弯头',
    subProducts: [
       { id: '135', name: 'A型90°弯头', description: '用于管道135度转弯', image: productImages.elbows.other2 },
      { id: '45', name: 'A型90°弯头（标配件）', description: '用于管道90度转弯', image: productImages.elbows.other1 },
      { id: '90', name: '异径弯头（组合件）', description: '用于管道90度转弯', image:productImages.elbows.main},
     
      { id: '180', name: 'B型弯头（组合件）', description: '用于管道180度转弯', image: productImages.elbows.other3 },
    ],
    description: '铝合金管道弯头采用优质铝合金材料制造，具有高强度、耐腐蚀、流阻小等特点。我们提供多种角度的弯头，包括45度、90度、135度等，满足不同安装场景的需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '流阻小：内壁光滑，流体阻力小，减少能源消耗',
      '安装便捷：模块化设计，无需焊接，安装速度快',
      '角度精确：角度精度高，确保管道安装的准确性',
      '美观大方：与铝管颜色一致，整体美观度高'
    ],
    specs: [
      { number: '2325201', name: '异径弯头（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '98.00', price: '19.60' },
      { number: '23252011', name: '异径弯头（标配件）', model: 'DN25-20（铝合金，标配）', unit: '个', standardPrice: '108.50', price: '21.70' },
      { number: '23201', name: 'B型弯头（标配件）', model: 'DN20（铝合金，标配）', unit: '个', standardPrice: '82.00', price: '16.40' },
      { number: '23251', name: 'B型弯头（标配件）', model: 'DN25（铝合金，标配）', unit: '个', standardPrice: '103.00', price: '20.60' },
      { number: '23401', name: 'B型弯头（标配件）', model: 'DN40（铝合金，标配）', unit: '个', standardPrice: '184.00', price: '	36.80' },
      { number: '23501', name: 'B型弯头（标配件）', model: 'DN50（铝合金，标配）', unit: '个', standardPrice: '253.20', price: '50.64' },
      { number: '23203', name: 'A型90°弯头（标配件）', model: 'DN20（铝合金，标配，3件）', unit: '套', standardPrice: '106.00', price: '21.20' },
      { number: '23253', name: 'A型90°弯头（标配件）', model: 'DN25（铝合金，标配，3件）', unit: '套', standardPrice: '129.00', price: '25.80' },
      { number: '23403', name: 'A型90°弯头（标配件）', model: 'DN40（铝合金，标配，3件）', unit: '套', standardPrice: '228.00', price: '	45.60' },
      { number: '23503', name: 'A型90°弯头（标配件）', model: 'DN50（铝合金，标配，3件）', unit: '套', standardPrice: '287.20', price: '57.44' },

      { number: '2320', name: 'A型90°弯头', model: 'DN20（铝合金）', unit: '个', standardPrice: '24.00', price: '4.80' },
      { number: '2325', name: 'A型90°弯头', model: 'DN25（铝合金）', unit: '个', standardPrice: '26.00', price: '5.20' },

      { number: '2340', name: 'A型90°弯头', model: 'DN40（铝合金）', unit: '个', standardPrice: '40.00', price: '8.00' },
      { number: '2350', name: 'A型90°弯头', model: 'DN50（铝合金）', unit: '个', standardPrice: '58.00', price: '11.60' },
      { number: '2363', name: 'A型90°弯头', model: 'DN63（铝合金）', unit: '个', standardPrice: '110.00', price: '22.00' },
      { number: '2380', name: 'A型90°弯头', model: 'DN80（铝合金）', unit: '个', standardPrice: '132.00', price: '26.40' },
      { number: '23100', name: 'A型90°弯头', model: 'DN100（铝合金）', unit: '个', standardPrice: '205.00', price: '41.00' },
      { number: '23125', name: 'A型90°弯头', model: 'DN125（铝合金）', unit: '个', standardPrice: '410.00', price: '82.00' },
      { number: '23150', name: 'A型90°弯头', model: 'DN150（铝合金）', unit: '个', standardPrice: '458.00', price: '91.60' },
      { number: '23200', name: 'A型90°弯头', model: 'DN200（铝合金）', unit: '个', standardPrice: '742.00', price: '155.00' },
      { number: '23148', name: 'A型90°弯头', model: 'DN148A（铝合金）', unit: '个', standardPrice: '458.00', price: '91.60' },
    ],
    faq: [
      { question: '弯头的使用寿命是多久？', answer: '在正常使用条件下，铝合金弯头的使用寿命可达15年以上。' },
      { question: '弯头的安装方式是怎样的？', answer: '我们的弯头采用快插式设计，只需将铝管插入弯头并拧紧螺母即可，安装非常便捷。' },
      { question: '弯头可以承受多大的压力？', answer: '我们的铝合金弯头工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '弯头有哪些角度可选？', answer: '我们提供45度、90度、135度等多种角度的弯头，满足不同安装场景的需求。' }
    ]
  },
  hoses: {
    name: '软管',
    subProducts: [
      { id: 'flexible', name: '金属软管(不锈钢）', description: '用于需要弯曲和移动的场景', image: productImages.hoses.main },
      { id: 'highPressure', name: '金属软管(不锈钢）', description: '用于高压流体输送场景', image: productImages.hoses.other1 },
      { id: 'foodGrade', name: '金属软管(不锈钢）', description: '符合卫生标准，适用于食品制药行业', image: productImages.hoses.other2 }
    ],
    description: '铝合金软管采用优质铝合金材料制造，具有高强度、耐腐蚀、柔性好等特点。我们提供多种类型的软管，包括柔性软管、高压软管、食品级软管等，满足不同安装场景的需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '柔性好：可自由弯曲，适用于复杂的安装场景',
      '安装便捷：模块化设计，无需焊接，安装速度快',
      '流阻小：内壁光滑，流体阻力小，减少能源消耗',
      '使用寿命长：采用优质材料，使用寿命长'
    ],
    specs: [
      { number: '6240', name: '金属软管(不锈钢）	', model: '金属软管DN40*500MM内牙(含2只40-RC1-1/2）', unit: '套', standardPrice: '498.00', price: '99.60' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN40*1000MM内牙(含2只40-RC1-1/2）', unit: '套', standardPrice: '640.00', price: '128.00' },
      { number: '6250', name: '金属软管(不锈钢）', model: '金属软管DN50*500MM内牙(含2只DN50-ZG2）', unit: '套', standardPrice: '645.00', price: '129.00' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN50*1000MM内牙(含2只DN50-ZG2）', unit: '套', standardPrice: '780.00', price: '	156.00' },
      { number: '6263', name: '金属软管(不锈钢）', model: '金属软管DN63*1000MM内牙(含2只DN63-ZG2 1/2）', unit: '套', standardPrice: '1250.00	', price: '250.00' },

      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN80*500MM内牙(含2只DN80-ZG3）', unit: '套', standardPrice: '1550.00', price: '310.00' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN100*500MM法兰', unit: '根', standardPrice: '1768.00	', price: '353.60' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN40*500MM卡凸式', unit: '根', standardPrice: '600.00', price: '120.00' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN50*500MM卡凸式', unit: '根', standardPrice: '720.00', price: '	144.00' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN63*500MM卡凸式', unit: '根', standardPrice: '780.00', price: '	156.00' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN80*500MM卡凸式', unit: '根', standardPrice: '1105.00', price: '221.00' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN100*500MM卡凸式', unit: '根', standardPrice: '1280.00', price: '256.00' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN125*500MM卡凸式', unit: '根', standardPrice: '1878.00', price: '375.00' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN1148*500MM卡凸式', unit: '根', standardPrice: '2178.00', price: '435.60' },
      { number: '--', name: '金属软管(不锈钢）', model: '金属软管DN200*1000MM卡凸式', unit: '根', standardPrice: '2800.00', price: '560.00' },

      { number: '60631', name: '法兰（组合件）', model: '	DN63（含配件）', unit: '套', standardPrice: '419.70', price: '83.94' },
      { number: '60801', name: '法兰（组合件）', model: 'DN80（含配件）', unit: '套', standardPrice: '431.30', price: '86.26' },
      { number: '601001', name: '法兰（组合件）', model: 'DN100（含配件）', unit: '套', standardPrice: '536.50', price: '107.30' },
      { number: '601251', name: '法兰（组合件）', model: 'DN125（含配件）', unit: '套', standardPrice: '	698.80', price: '141.60' },
      { number: '601501', name: '法兰（组合件）', model: 'DN150（含配件）', unit: '套', standardPrice: '839.70', price: '179.60' },
      { number: '6020081', name: '法兰（组合件）', model: 'DN200（含配件8孔）', unit: '套', standardPrice: '1069.20', price: '217.20' },
      { number: '60200121', name: '法兰（组合件）', model: 'DN200（含配件12孔）', unit: '套', standardPrice: '1151.30', price: '232.50' },
      { number: '601481', name: '法兰（组合件）', model: 'DN148A（含配件）', unit: '套', standardPrice: '839.70	', price: '179.60' },
    ],
    faq: [
      { question: '软管的使用寿命是多久？', answer: '在正常使用条件下，铝合金软管的使用寿命可达10年以上。' },
      { question: '软管的安装方式是怎样的？', answer: '我们的软管两端配有接头，只需将接头与铝管连接即可，安装非常便捷。' },
      { question: '软管可以承受多大的压力？', answer: '我们的铝合金软管工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '软管有哪些长度可选？', answer: '我们提供1m、2m、3m等多种长度的软管，也可根据客户需求定制。' }
    ]
  },
  quickConnect: {
    name: '快接',
    subProducts: [
      { id: 'standard', name: '等径快接', description: '用于快速连接铝管的接头', image: productImages.quickConnect.main },
      { id: 'oneTouch', name: '等径快接（标配件）', description: '只需一键即可完成连接的快接接头', image: productImages.quickConnect.other1 },
      { id: 'fullLength', name: '异径直通（组合件）', description: '全长等径快接，适用于长距离连接', image: productImages.quickConnect.other2 },
    ],
    description: '快接接头采用优质铝合金材料制造，具有快速连接、密封性能好、使用寿命长等特点。只需简单操作即可完成管道连接，大大提高了安装效率。',
    features: [
      '快速连接：只需简单操作即可完成管道连接',
      '密封性能好：采用优质密封材料，确保连接紧密无泄漏',
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '安装便捷：无需工具，手动即可完成安装',
      '可重复使用：拆卸后可重新安装使用，减少浪费'
    ],
    specs: [
      { number: '2220', name: '等径快接', model: 'DN20（铝合金）', unit: '个', standardPrice: '36', price: '7.2' },
      { number: '2225', name: '等径快接', model: 'DN25（铝合金）', unit: '个', standardPrice: '46', price: '9.2' },
      { number: '2240', name: '等径快接', model: 'DN40（铝合金）', unit: '个', standardPrice: '88', price: '17.6' },
      { number: '2250', name: '等径快接', model: 'DN50（铝合金）', unit: '个', standardPrice: '108', price: '21.6' },
      { number: '2263', name: '等径快接', model: 'DN63（铝合金）', unit: '个', standardPrice: '196', price: '39.2' },
      { number: '2280', name: '等径快接', model: 'DN80（铝合金）', unit: '个', standardPrice: '232', price: '46.4' },
      { number: '22100', name: '等径快接', model: 'DN100（铝合金）', unit: '个', standardPrice: '285', price: '57' },
      { number: '22125', name: '等径快接', model: 'DN125（铝合金）', unit: '个', standardPrice: '338', price: '67.6' },
      { number: '22148', name: '等径快接', model: 'DN148A（铝合金）', unit: '个', standardPrice: '458', price: '91.6' },
      { number: '22150', name: '等径快接', model: 'DN150（铝合金）', unit: '个', standardPrice: '458', price: '91.6' },
      { number: '22200', name: '等径快接', model: 'DN200（铝合金）', unit: '个', standardPrice: '585', price: '117' },
      { number: '22201', name: '等径快接（标配件）', model: 'DN20（铝合金,标配）', unit: '个', standardPrice: '46', price: '9.2' },
      { number: '22251', name: '等径快接（标配件）', model: 'DN25（铝合金,标配）', unit: '个', standardPrice: '57', price: '11.4' },
      { number: '22401', name: '等径快接（标配件）', model: 'DN40（铝合金,标配）', unit: '个', standardPrice: '100', price: '20' },
       { number: '22501', name: '等径快接（标配件）', model: 'DN50（铝合金,标配）', unit: '个', standardPrice: '121.20', price: '24.24' }
    ],
    faq: [
      { question: '快接的使用寿命是多久？', answer: '在正常使用条件下，铝合金快接的使用寿命可达15年以上。' },
      { question: '快接的安装方式是怎样的？', answer: '我们的快接采用一键式设计，只需将铝管插入快接并听到"咔嗒"声即可完成安装。' },
      { question: '快接可以承受多大的压力？', answer: '我们的铝合金快接工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '快接有哪些规格可选？', answer: '我们提供20mm、25mm、32mm、40mm、50mm、63mm等多种规格的快接，满足不同管道直径的需求。' }
    ]
  },
  yjzt: {
    name: '异径直通',
    subProducts: [
      { id: '20-25', name: '异径直通', description: '用于连接20mm和25mm直径的铝管', image: productImages.yjzt.main },
      { id: '25-32', name: '异径直通（标配件）', description: '用于连接25mm和32mm直径的铝管', image: productImages.quickConnect.other1 }
    ],
    description: '异径直通采用优质铝合金材料制造，用于连接不同直径的铝管，具有高强度、耐腐蚀、密封性能好等特点。我们提供多种规格的异径直通，满足不同管道直径转换的需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '密封性能好：采用优质密封材料，确保连接紧密无泄漏',
      '安装便捷：模块化设计，无需焊接，安装速度快',
      '规格齐全：提供多种规格的异径直通，满足不同需求',
      '美观大方：与铝管颜色一致，整体美观度高'
    ],
    specs: [
      { number: '2125201', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '2140251', name: '异径直通（组合件）', model: 'DN40-20（铝合金）', unit: '个', standardPrice: '122', price: '24.4' },
      { number: '2150251', name: '异径直通（组合件）', model: 'DN50-20（铝合金）', unit: '个', standardPrice: '140', price: '28' },
      { number: '2150401', name: '异径直通（组合件）', model: 'DN50-40（铝合金）', unit: '个', standardPrice: '140', price: '28' },
      { number: '2163401', name: '异径直通（组合件）', model: 'DN63-40（铝合金）', unit: '个', standardPrice: '260', price: '52' },
      { number: '2163501', name: '异径直通（组合件）', model: 'DN63-40（铝合金）', unit: '个', standardPrice: '260', price: '52' },
      { number: '2180401', name: '异径直通（组合件）', model: 'DN63-50（铝合金）', unit: '个', standardPrice: '255', price: '51' },
      { number: '2180501', name: '异径直通（组合件）', model: 'DN80-40（铝合金）', unit: '个', standardPrice: '255', price: '51' },
      { number: '21100501', name: '异径直通（组合件）', model: 'DN80-50（铝合金）', unit: '个', standardPrice: '265', price: '53' },
      { number: '2180631', name: '异径直通（组合件）', model: 'DN100-50（铝合金）', unit: '个', standardPrice: '385', price: '77' },
      { number: '21100631', name: '异径直通（组合件）', model: 'DN80-63（铝合金）', unit: '个', standardPrice: '330', price: '66' },
      { number: '21100631', name: '异径直通（组合件）', model: 'DN100-63（铝合金）', unit: '个', standardPrice: '395', price: '79' },
      { number: '21125801', name: '异径直通（组合件）', model: 'DN100-80（铝合金）', unit: '个', standardPrice: '410', price: '82' },
      { number: '211251631', name: '异径直通（组合件）', model: 'DN125-63（铝合金）', unit: '个', standardPrice: '480', price: '96' },

      { number: '21125801', name: '异径直通（组合件）', model: 'DN125-80（铝合金）', unit: '个', standardPrice: '500.00', price: '100.00' },
      { number: '211251001', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '528.00', price: '105.60' },
      { number: '21150801', name: '异径直通（组合件）', model: 'DN150-80（铝合金）', unit: '个', standardPrice: '568.00', price: '113.60' },
      { number: '211501001', name: '异径直通（组合件）', model: 'DN150-100（铝合金）', unit: '个', standardPrice: '580.00', price: '116.00' },
      { number: '211501251', name: '异径直通（组合件）', model: 'DN150-125（铝合金）', unit: '个', standardPrice: '608.00', price: '121.60' },
      { number: '21148801', name: '异径直通（组合件）', model: 'DN148-80（铝合金）', unit: '个', standardPrice: '568.00', price: '113.60' },
      { number: '211481001', name: '异径直通（组合件）', model: 'DN148-100（铝合金）', unit: '个', standardPrice: '580.00	', price: '116.00' },
      { number: '211481251', name: '异径直通（组合件）', model: 'DN148-125（铝合金）', unit: '个', standardPrice: '	608.00', price: '121.60' },
      { number: '212001001', name: '异径直通（组合件）', model: 'DN200-100（铝合金）', unit: '个', standardPrice: '768.00', price: '153.60' },
      { number: '212001251', name: '异径直通（组合件）', model: 'DN200-125（铝合金）	', unit: '个', standardPrice: '788.00', price: '157.60' },
      { number: '212001481', name: '异径直通（组合件）', model: 'DN200-148（铝合金）', unit: '个', standardPrice: '808.00', price: '161.60' },
      { number: '212001501', name: '异径直通（组合件）', model: 'DN200-150（铝合金）', unit: '个', standardPrice: '808.00', price: '161.60' },

       { number: '21252011', name: '异径直通（标配件）', model: 'DN25-20（铝合金，标配）', unit: '个', standardPrice: '68.50', price: '13.70' },
       { number: '21402511', name: '异径直通（标配件）', model: 'DN40-25（铝合金，标配）', unit: '个', standardPrice: '133.50', price: '	26.70' },
       { number: '21502511', name: '异径直通（标配件）', model: 'DN50-25（铝合金，标配）', unit: '个', standardPrice: '152.10', price: '30.42' },
       { number: '21504011', name: '异径直通（标配件）', model: 'DN50-40（铝合金，标配）', unit: '个', standardPrice: '152.60', price: '30.52' },
       { number: '21634011', name: '异径直通（标配件）', model: 'DN63-40（铝合金，标配）', unit: '个', standardPrice: '266.00', price: '53.20' },
       { number: '21635011', name: '异径直通（标配件）', model: 'DN63-50（铝合金，标配）', unit: '个', standardPrice: '266.60', price: '53.32' },
       { number: '21804011', name: '异径直通（标配件）', model: 'DN80-40（铝合金，标配）', unit: '个', standardPrice: '261.00', price: '52.20' },
       { number: '21805011', name: '异径直通（标配件）', model: 'DN80-50（铝合金，标配）', unit: '个', standardPrice: '271.60', price: '54.32' },
       { number: '211005011', name: '异径直通（标配件）', model: 'DN100-50（铝合金，标配）', unit: '个', standardPrice: '391.60', price: '78.32' },
    ],
    faq: [
      { question: '异径直通的使用寿命是多久？', answer: '在正常使用条件下，铝合金异径直通的使用寿命可达15年以上。' },
      { question: '异径直通的安装方式是怎样的？', answer: '我们的异径直通采用快插式设计，只需将铝管插入接头并拧紧螺母即可，安装非常便捷。' },
      { question: '异径直通可以承受多大的压力？', answer: '我们的铝合金异径直通工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '异径直通有哪些规格可选？', answer: '我们提供20-25、25-32、32-40、40-50、50-63等多种规格的异径直通，满足不同管道直径转换的需求。' }
    ]
  },
  djst: {
    name: '等径三通',
    subProducts: [
      { id: '20', name: 'A型等径三通（标配件）', description: '用于20mm直径铝管的分支连接', image: productImages.djst.main },
      { id: '25', name: 'B型等径三通（组合件）', description: '用于25mm直径铝管的分支连接', image: productImages.djst.other1 },
      { id: '32', name: 'A型等径三通', description: '用于32mm直径铝管的分支连接', image: productImages.djst.other2 }
    ],
    description: '等径三通采用优质铝合金材料制造，用于管道分支连接，具有高强度、耐腐蚀、流阻小等特点。我们提供多种规格的等径三通，满足不同管道直径的分支需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '流阻小：内壁光滑，流体阻力小，减少能源消耗',
      '安装便捷：模块化设计，无需焊接，安装速度快',
      '规格齐全：提供多种规格的等径三通，满足不同需求',
      '美观大方：与铝管颜色一致，整体美观度高'
    ],
    specs: [
      { number: '25201', name: 'B型等径三通（标配件）', model: 'DN20（铝合金，标配）', unit: '个', standardPrice: '125.00', price: '25.00' },
      { number: '25251', name: 'B型等径三通（标配件）', model: 'DN25（铝合金，标配）', unit: '个', standardPrice: '156.50', price: '31.30' },
      { number: '25401', name: 'B型等径三通（标配件）', model: 'DN40（铝合金，标配）', unit: '个', standardPrice: '260.00', price: '52.00' },
      { number: '25501', name: 'B型等径三通（标配件）', model: 'DN50（铝合金，标配）', unit: '个', standardPrice: '379.80', price: '75.96' },
      { number: '25202', name: 'B型等径三通（组合件）', model: 'DN20（铝合金）', unit: '个', standardPrice: '110.00', price: '22.00' },
      { number: '25252', name: 'B型等径三通（组合件）', model: 'DN25（铝合金）', unit: '个', standardPrice: '140.00', price: '28.00' },
      { number: '25402', name: 'B型等径三通（组合件）', model: 'DN40（铝合金）', unit: '个', standardPrice: '242.00', price: '48.40' },
      { number: '25502', name: 'B型等径三通（组合件）', model: 'DN50（铝合金）', unit: '个', standardPrice: '360.00', price: '72.00' },
      { number: '25632', name: 'B型等径三通（组合件）', model: 'DN63（铝合金）', unit: '个', standardPrice: '582.00', price: '116.40' },

      { number: '25203', name: 'A型等径三通（标配件）', model: 'DN20（铝合金，标配，4件）', unit: '套', standardPrice: '147.00', price: '29.40' },
      { number: '25253', name: 'A型等径三通（标配件）', model: 'DN25（铝合金，标配，4件）', unit: '套', standardPrice: '180.50', price: '36.10' },
      { number: '25403', name: 'A型等径三通（标配件）', model: 'DN40（铝合金，标配，4件）', unit: '套', standardPrice: '322.00', price: '	64.40' },
      { number: '25503', name: 'A型等径三通（标配件）', model: 'DN50（铝合金，标配，4件）', unit: '套', standardPrice: '401.80', price: '80.36' },

      { number: '2520', name: 'A型等径三通', model: 'DN20（铝合金）', unit: '套', standardPrice: '24.00', price: '4.80' },
      { number: '2525', name: 'A型等径三通', model: 'DN25（铝合金）', unit: '套', standardPrice: '26.00', price: '5.20' },
      { number: '2540', name: 'A型等径三通', model: 'DN40（铝合金）', unit: '套', standardPrice: '40.00', price: '8.00' },
      { number: '2550', name: 'A型等径三通', model: 'DN50（铝合金）', unit: '套', standardPrice: '58.00', price: '11.60' },  
      { number: '2563', name: 'A型等径三通', model: 'DN63（铝合金）', unit: '套', standardPrice: '200.00', price: '40.00' },
      { number: '2580', name: 'A型等径三通', model: 'DN80（铝合金）', unit: '套', standardPrice: '238.00', price: '50.00' },
      { number: '25100', name: 'A型等径三通', model: 'DN100（铝合金）', unit: '套', standardPrice: '278.00', price: '60.00' },
      { number: '25125', name: 'A型等径三通', model: 'DN125（铝合金）', unit: '套', standardPrice: '498.00', price: '105.00' },
      { number: '25150', name: 'A型等径三通', model: 'DN150（铝合金）', unit: '套', standardPrice: '780.00', price: '166.00' },
      { number: '25200', name: 'A型等径三通', model: 'DN200（铝合金）', unit: '套', standardPrice: '1060.00', price: '248.00' },
      { number: '25148', name: 'A型等径三通', model: 'DN148A（铝合金）', unit: '套', standardPrice: '780.00', price: '166.00' },
      

    ],
    faq: [
      { question: '等径三通的使用寿命是多久？', answer: '在正常使用条件下，铝合金等径三通的使用寿命可达15年以上。' },
      { question: '等径三通的安装方式是怎样的？', answer: '我们的等径三通采用快插式设计，只需将铝管插入接头并拧紧螺母即可，安装非常便捷。' },
      { question: '等径三通可以承受多大的压力？', answer: '我们的铝合金等径三通工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '等径三通有哪些规格可选？', answer: '我们提供20mm、25mm、32mm、40mm、50mm、63mm等多种规格的等径三通，满足不同管道直径的分支需求。' }
    ]
  },
  extractqi: {
    name: '取气',
    subProducts: [
      { id: 'standard', name: '快接取气', description: '用于从主管道取气的配件', image:  productImages.extract.main  },
      { id: 'valve', name: '内螺纹取气', description: '带有阀门的取气配件，可控制气体流量', image: productImages.extract.other1 },
      { id: 'threeWay', name: '90°内螺纹取气', description: '用于32mm直径铝管的取气配件', image: productImages.extract.other2 },
      { id: 'threeWayValve', name: '快接取气', description: '带有阀门的三通取气配件，可控制气体流量', image: productImages.extract.other3 },
      { id: 'threeWayValve2', name: '快接取气（标配件）', description: '带有阀门的三通取气配件，可控制气体流量', image: productImages.extract.other4 },
      { id: 'threeWayValve3', name: '快接取气（标配件）', description: '带有阀门的三通取气配件，可控制气体流量', image: productImages.extract.other5 },
      { id: 'threeWayValve4', name: '快接取气（标配件）', description: '带有阀门的三通取气配件，可控制气体流量', image: productImages.extract.other6 },
      { id: 'threeWayValve5', name: '快接取气（标配件）', description: '带有阀门的三通取气配件，可控制气体流量', image: productImages.extract.other7 },
      { id: 'threeWayValve6', name: '90°快接取气', description: '带有阀门的三通取气配件，可控制气体流量', image: productImages.extract.other8 },
    ],
    description: '取气配件采用优质铝合金材料制造，用于从主管道取气，具有高强度、耐腐蚀、密封性能好等特点。我们提供标准取气和带阀取气两种类型，满足不同取气需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '密封性能好：采用优质密封材料，确保连接紧密无泄漏',
      '安装便捷：模块化设计，无需焊接，安装速度快',
      '类型齐全：提供标准取气和带阀取气两种类型',
      '美观大方：与铝管颜色一致，整体美观度高'
    ],
    specs: [
      { number: '282515', name: '内螺纹取气', model: 'DN25-Rc1/2"（铝合金）', unit: '个', standardPrice: '60', price: '12' },
      { number: '284015', name: '内螺纹取气', model: 'DN40-Rc1/2"（铝合金）', unit: '个', standardPrice: '68', price: '13.6' },
      { number: '285015', name: '内螺纹取气', model: 'DN50-Rc1/2"（铝合金）', unit: '个', standardPrice: '80', price: '16' },
      { number: '286315', name: '内螺纹取气', model: 'DN63-Rc1/2"（铝合金）', unit: '个', standardPrice: '88', price: '17.6' },
      { number: '288015', name: '内螺纹取气', model: 'DN80-Rc1/2"（铝合金）', unit: '个', standardPrice: '128', price: '25.6' },
      { number: '2810015', name: '内螺纹取气', model: 'DN100-Rc1/2"（铝合金）', unit: '个', standardPrice: '168', price: '33.6' },
      { number: '2810020', name: '内螺纹取气', model: 'DN100-Rc3/4"（铝合金）', unit: '个', standardPrice: '168', price: '33.6' },
      { number: '2812515', name: '内螺纹取气', model: 'DN125-Rc1/2"（铝合金）', unit: '个', standardPrice: '238', price: '47.6' },
      { number: '2812520', name: '内螺纹取气', model: 'DN125-Rc3/4"（铝合金）', unit: '个', standardPrice: '238', price: '47.6' },
      { number: '2815015', name: '内螺纹取气', model: 'DN150-Rc1/2"（铝合金）', unit: '个', standardPrice: '285', price: '57' },
      { number: '2815020', name: '内螺纹取气', model: 'DN150-Rc3/4"（铝合金）', unit: '个', standardPrice: '285', price: '57' },
      { number: '2814815', name: '内螺纹取气', model: 'DN148-Rc1/2"（铝合金）', unit: '个', standardPrice: '285', price: '57' },
      { number: '2814820', name: '内螺纹取气', model: 'DN148-Rc3/4"（铝合金）', unit: '个', standardPrice: '285', price: '57' },
      { number: '2820015', name: '内螺纹取气', model: 'DN200-Rc1/2"（铝合金）', unit: '个', standardPrice: '310', price: '62' },
      { number: '2820020', name: '内螺纹取气', model: 'DN200-Rc3/4"（铝合金）', unit: '个', standardPrice: '310', price: '62' },

      { name: "快接取气", number: "292520", model: "DN25-DN20（铝合金）", unit: "个", standardPrice: 48, price: 9.6 },
  { name: "快接取气", number: "294025", model: "DN40-DN25（铝合金）", unit: "个", standardPrice: 60, price: 12 },
  { name: "快接取气", number: "295025", model: "DN50-DN25（铝合金）", unit: "个", standardPrice: 72, price: 14.4 },
  { name: "快接取气", number: "296325", model: "DN63-DN25（铝合金）", unit: "个", standardPrice: 80, price: 16 },
  { name: "快接取气", number: "298025", model: "DN80-DN25（铝合金）", unit: "个", standardPrice: 120, price: 24 },
  { name: "快接取气", number: "298050", model: "DN80-DN50（铝合金）", unit: "个", standardPrice: 128, price: 25.6 },
  { name: "快接取气", number: "2910025", model: "DN100-DN25（铝合金）", unit: "个", standardPrice: 132, price: 26.4 },
  { name: "快接取气", number: "2910040", model: "DN100-DN40（铝合金）", unit: "个", standardPrice: 138, price: 27.6 },
  { name: "快接取气", number: "2910050", model: "DN100-DN50（铝合金）", unit: "个", standardPrice: 140, price: 28 },
  { name: "快接取气", number: "2912525", model: "DN125-DN25（铝合金）", unit: "个", standardPrice: 198, price: 39.6 },
  { name: "快接取气", number: "2912550", model: "DN125-DN50（铝合金）", unit: "个", standardPrice: 198, price: 39.6 },
  { name: "快接取气", number: "2915025", model: "DN150-DN25（铝合金）", unit: "个", standardPrice: 238, price: 47.6 },
  { name: "快接取气", number: "2915050", model: "DN150-DN50（铝合金）", unit: "个", standardPrice: 240, price: 48 },
  { name: "快接取气", number: "2920050", model: "DN200-DN50（铝合金）", unit: "个", standardPrice: 300, price: 60 },
  { name: "快接取气", number: "2914850", model: "DN148A-50（铝合金）", unit: "个", standardPrice: 240, price: 48 },
  { name: "快接取气", number: "2914825", model: "DN148A-25（铝合金）", unit: "个", standardPrice: 238, price: 47.6 },

  { name: "快接取气（标配件）", number: "292225201", model: "DN25-DN20（铝合金，标配快接DN20）", unit: "套", standardPrice: 89, price: 17.8 },
  { name: "快接取气（标配件）", number: "292240251", model: "DN40-DN25（铝合金，标配快接DN25）", unit: "套", standardPrice: 111.5, price: 22.3 },
  { name: "快接取气（标配件）", number: "292250251", model: "DN50-DN25（铝合金，标配快接DN25）", unit: "套", standardPrice: 123.5, price: 24.7 },
  { name: "快接取气（标配件）", number: "292263251", model: "DN63-DN25（铝合金，标配快接DN25）", unit: "套", standardPrice: 131.5, price: 26.3 },
  { name: "快接取气（标配件）", number: "292280251", model: "DN80-DN25（铝合金，标配快接DN25）", unit: "套", standardPrice: 171.5, price: 34.3 },
  { name: "快接取气（标配件）", number: "292280501", model: "DN80-DN50（铝合金，标配快接DN50）", unit: "套", standardPrice: 242.6, price: 48.52 },
  { name: "快接取气（标配件）", number: "2922100251", model: "DN100-DN25（铝合金，标配快接DN25）", unit: "套", standardPrice: 183.5, price: 36.7 },
  { name: "快接取气（标配件）", number: "2922100401", model: "DN100-DN40（铝合金，标配快接DN40）", unit: "套", standardPrice: 232, price: 46.4 },
  { name: "快接取气（标配件）", number: "2922100501", model: "DN100-DN50（铝合金，标配快接DN50）", unit: "套", standardPrice: 254.6, price: 50.92 },
  { name: "快接取气（标配件）", number: "2922125251", model: "DN125-DN25（铝合金，标配快接DN25）", unit: "套", standardPrice: 249.5, price: 49.9 },
  { name: "快接取气（标配件）", number: "2922125501", model: "DN125-DN50（铝合金，标配快接DN50）", unit: "套", standardPrice: 312.6, price: 62.52 },
  { name: "快接取气（标配件）", number: "2922150251", model: "DN150-DN25（铝合金，标配快接DN25）", unit: "套", standardPrice: 289.5, price: 57.9 },
  { name: "快接取气（标配件）", number: "2922150501", model: "DN150-DN50（铝合金，标配快接DN50）", unit: "套", standardPrice: 354.6, price: 70.92 },
  { name: "快接取气（标配件）", number: "2922200501", model: "DN200-DN50（铝合金，标配快接DN50）", unit: "套", standardPrice: 414.6, price: 82.92 },
  { name: "快接取气（标配件）", number: "2922148251", model: "DN148A-DN25（铝合金，标配快接DN25）", unit: "套", standardPrice: 289.5, price: 57.9 },
  { name: "快接取气（标配件）", number: "2922148501", model: "DN148A-DN50（铝合金，标配快接DN50）", unit: "套", standardPrice: 354.6, price: 70.92 },
  { name: "快接取气（标配件）", number: "292140201", model: "DN40-DN25（铝合金，标配异径DN25-20）", unit: "套", standardPrice: 123, price: 24.6 },
  { name: "快接取气（标配件）", number: "292150201", model: "DN50-DN25（铝合金，标配异径DN25-20）", unit: "套", standardPrice: 135, price: 27 },
  { name: "快接取气（标配件）", number: "292163201", model: "DN63-DN25（铝合金，标配异径DN25-20）", unit: "套", standardPrice: 143, price: 28.6 },
  { name: "快接取气（标配件）", number: "292180201", model: "DN80-DN25（铝合金，标配异径DN25-20）", unit: "套", standardPrice: 183, price: 36.6 },
  { name: "快接取气（标配件）", number: "2921100201", model: "DN100-DN25（铝合金，标配异径DN25-20）", unit: "套", standardPrice: 195, price: 39 },
  { name: "快接取气（标配件）", number: "2921125201", model: "DN125-DN25（铝合金,标配异径DN25-20）", unit: "套", standardPrice: 261, price: 52.2 },
  { name: "快接取气（标配件）", number: "2921150201", model: "DN150-DN25（铝合金,标配异径DN25-20）", unit: "套", standardPrice: 301, price: 60.2 },
  { name: "快接取气（标配件）", number: "2921148201", model: "DN148A-DN25（铝合金,标配异径DN25-20）", unit: "套", standardPrice: 301, price: 60.2 },
  { name: "快接取气（标配件）", number: "292340251", model: "DN40-DN25（铝合金，标配B型弯头DN25）", unit: "套", standardPrice: 157.5, price: 31.5 },
  { name: "快接取气（标配件）", number: "292350251", model: "DN50-DN25（铝合金，标配B型弯头DN25）", unit: "套", standardPrice: 169.5, price: 33.9 },
  { name: "快接取气（标配件）", number: "292363251", model: "DN63-DN25（铝合金，标配B型弯头DN25）", unit: "套", standardPrice: 177.5, price: 35.5 },
  { name: "快接取气（标配件）", number: "292380251", model: "DN80-DN25（铝合金，标配B型弯头DN25）", unit: "套", standardPrice: 217.5, price: 43.5 },
  { name: "快接取气（标配件）", number: "2923100251", model: "DN100-DN25（铝合金，标配B型弯头DN25）", unit: "套", standardPrice: 229.5, price: 45.9 },
  { name: "快接取气（标配件）", number: "2923125251", model: "DN125-DN25（铝合金，标配B型弯头DN25）", unit: "套", standardPrice: 295.5, price: 59.1 },
  { name: "快接取气（标配件）", number: "2923150251", model: "DN150-DN25（铝合金，标配B型弯头DN25）", unit: "套", standardPrice: 335.5, price: 67.1 },
  { name: "快接取气（标配件）", number: "2923148251", model: "DN148A-DN25（铝合金，标配B型弯头DN25）", unit: "套", standardPrice: 335.5, price: 67.1 },
  { name: "快接取气（标配件）", number: "292340201", model: "DN40-DN25（铝合金，标配异径弯头DN25-20）", unit: "套", standardPrice: 163, price: 32.6 },
  { name: "快接取气（标配件）", number: "292350201", model: "DN50-DN25（铝合金，标配异径弯头DN25-20）", unit: "套", standardPrice: 175, price: 35 },
  { name: "快接取气（标配件）", number: "292363201", model: "DN63-DN25（铝合金，标配异径弯头DN25-20）", unit: "套", standardPrice: 183, price: 36.6 },
  { name: "快接取气（标配件）", number: "292380201", model: "DN80-DN25（铝合金，标配异径弯头DN25-20）", unit: "套", standardPrice: 223, price: 44.6 },
  { name: "快接取气（标配件）", number: "2923100201", model: "DN100-DN25（铝合金，标配异径弯头DN25-20）", unit: "套", standardPrice: 235, price: 47 },
  { name: "快接取气（标配件）", number: "2923125201", model: "DN125-DN25（铝合金，标配异径弯头DN25-20）", unit: "套", standardPrice: 301, price: 60.2 },
  { name: "快接取气（标配件）", number: "2923150201", model: "DN150-DN25（铝合金，标配异径弯头DN25-20）", unit: "套", standardPrice: 341, price: 68.2 },
  { name: "快接取气（标配件）", number: "2923148201", model: "DN148A-DN25（铝合金，标配异径弯头DN25-20）", unit: "套", standardPrice: 341, price: 68.2 },
  { name: "90°内螺纹取气", number: "2892515", model: "DN25-Rc1/2\"（铝合金）", unit: "个", standardPrice: null, price: 15 },
  { name: "90°内螺纹取气", number: "2894015", model: "DN40-Rc1/2\"（铝合金）", unit: "个", standardPrice: null, price: 17.6 },
  { name: "90°内螺纹取气", number: "2895015", model: "DN50-Rc1/2\"（铝合金）", unit: "个", standardPrice: null, price: 20 },
  { name: "90°内螺纹取气", number: "2896315", model: "DN63-Rc1/2\"（铝合金）", unit: "个", standardPrice: null, price: 21.6 },
  { name: "90°内螺纹取气", number: "2898015", model: "DN80-Rc1/2\"（铝合金）", unit: "个", standardPrice: null, price: 29.6 },
  { name: "90°内螺纹取气", number: "28910015", model: "DN100-Rc1/2\"（铝合金）", unit: "个", standardPrice: null, price: 37.6 },
  { name: "90°快接取气", number: "2992520", model: "DN25-DN20（铝合金）", unit: "个", standardPrice: null, price: 11.8 },
  { name: "90°快接取气", number: "2994020", model: "DN40-DN20（铝合金）", unit: "个", standardPrice: 168, price: 15 },
  { name: "90°快接取气", number: "2994025", model: "DN40-DN25（铝合金）", unit: "个", standardPrice: 168, price: 14.6 },
  { name: "90°快接取气", number: "2995020", model: "DN50-DN20（铝合金）", unit: "个", standardPrice: 168, price: 17.4 },
  { name: "90°快接取气", number: "2995025", model: "DN50-DN25（铝合金）", unit: "个", standardPrice: 168, price: 17 },
  { name: "90°快接取气", number: "2996320", model: "DN63-DN20（铝合金）", unit: "个", standardPrice: null, price: 19 },
  { name: "90°快接取气", number: "2996325", model: "DN63-DN25（铝合金）", unit: "个", standardPrice: null, price: 18.6 },
  { name: "90°快接取气", number: "2998020", model: "DN80-DN20（铝合金）", unit: "个", standardPrice: null, price: 27.2 },
  { name: "90°快接取气", number: "2998025", model: "DN80-DN25（铝合金）", unit: "个", standardPrice: null, price: 26.6 },
  { name: "90°快接取气", number: "29910020", model: "DN100-DN20（铝合金）", unit: "个", standardPrice: null, price: 29.6 },
  { name: "90°快接取气", number: "29910025", model: "DN100-DN25（铝合金）", unit: "个", standardPrice: null, price: 29.2 },
  { name: "90°快接取气（组合件）", number: "29925201", model: "DN25-DN20（铝合金，标配2件）", unit: "套", standardPrice: null, price: 20 },
  { name: "90°快接取气（组合件）", number: "29940201", model: "DN40-DN20（铝合金，标配2件）", unit: "套", standardPrice: 168, price: 23.2 },
  { name: "90°快接取气（组合件）", number: "29940251", model: "DN40-DN25（铝合金，标配2件）", unit: "套", standardPrice: 168, price: 24.9 },
  { name: "90°快接取气（组合件）", number: "29950201", model: "DN50-DN20（铝合金，标配2件）", unit: "套", standardPrice: 168, price: 25.6 },
  { name: "90°快接取气（组合件）", number: "29950251", model: "DN50-DN25（铝合金，标配2件）", unit: "套", standardPrice: 168, price: 27.3 },
  { name: "90°快接取气（组合件）", number: "29963201", model: "DN63-DN20（铝合金，标配2件）", unit: "套", standardPrice: null, price: 27.2 },
  { name: "90°快接取气（组合件）", number: "29963251", model: "DN63-DN25（铝合金，标配2件）", unit: "套", standardPrice: null, price: 28.9 },
  { name: "90°快接取气（组合件）", number: "29980201", model: "DN80-DN20（铝合金，标配2件）", unit: "套", standardPrice: null, price: 35.4 },
  { name: "90°快接取气（组合件）", number: "29980251", model: "DN80-DN25（铝合金，标配2件）", unit: "套", standardPrice: null, price: 36.9 },
  { name: "90°快接取气（组合件）", number: "299100201", model: "DN100-DN20（铝合金，标配2件）", unit: "套", standardPrice: null, price: 37.8 },
  { name: "90°快接取气（组合件）", number: "299100251", model: "DN100-DN25（铝合金，标配2件）", unit: "套", standardPrice: null, price: 39.5 }



    ],
    faq: [
      { question: '取气的使用寿命是多久？', answer: '在正常使用条件下，铝合金取气的使用寿命可达15年以上。' },
      { question: '取气的安装方式是怎样的？', answer: '我们的取气采用快插式设计，只需将取气配件安装在主管道上并拧紧螺母即可，安装非常便捷。' },
      { question: '取气可以承受多大的压力？', answer: '我们的铝合金取气工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '取气有哪些类型可选？', answer: '我们提供标准取气和带阀取气两种类型，带阀取气可控制气体流量，满足不同取气需求。' }
    ]
  },
  other: {
    name: '其他配件',
    subProducts: [
      { id: 'cap', name: '管帽', description: '用于封闭管道末端的配件', image: productImages.other.main },
      { id: 'flange', name: '生料带', description: '用于管道与设备连接的配件', image: productImages.other.sld1 }
    ],
    description: '我们提供多种铝合金管道配件，包括管帽、法兰、堵头、变径接头等，满足管道系统的各种需求。所有配件均采用优质铝合金材料制造，具有高强度、耐腐蚀、密封性能好等特点。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '密封性能好：采用优质密封材料，确保连接紧密无泄漏',
      '安装便捷：模块化设计，无需焊接，安装速度快',
      '品种齐全：提供多种类型的配件，满足不同需求',
      '美观大方：与铝管颜色一致，整体美观度高'
    ],
    specs: [
       { name: "内膨胀", number: "8886", model: "8*6cm", unit: "个", standardPrice: 1.4, price: 0.28 },
  { name: "内膨胀", number: "88106", model: "10*6cm", unit: "个", standardPrice: 1.5, price: 0.3 },
  { name: "铁膨胀", number: "8786", model: "10*6cm", unit: "个", standardPrice: 2.8, price: 0.56 },
  { name: "铁膨胀", number: "87106", model: "10*8cm", unit: "个", standardPrice: 4.55, price: 0.91 },
  { name: "生料带", number: "9520", model: "20米/卷", unit: "个", standardPrice: 6.8, price: 1.36 },
  { name: "流向标签", number: "96300", model: "300MM*60mm", unit: "个", standardPrice: 12.8, price: 2.56 },
  { name: "流向标签", number: "96200", model: "200MM*40mm", unit: "个", standardPrice: 6.8, price: 1.36 },
  { name: "自动排水器", number: "972015", model: "AD-402", unit: "个", standardPrice: 165, price: 33 },
  { name: "压力表", number: "9810", model: "1.6AMP", unit: "个", standardPrice: 178, price: 35.6 },
  { name: "卡簧", number: "9020", model: "DN20", unit: "个", standardPrice: 5, price: 1 },
  { name: "卡簧", number: "9025", model: "DN25", unit: "个", standardPrice: 5.5, price: 1.1 },
  { name: "卡簧", number: "9040", model: "DN40", unit: "个", standardPrice: 6, price: 1.2 },
  { name: "卡簧", number: "9050", model: "DN50", unit: "个", standardPrice: 6.6, price: 1.32 },
  { name: "气管快速接口", number: "9108", model: "M8", unit: "个", standardPrice: 24, price: 4.80 },
  { name: "气管快速接口", number: "9110", model: "M10", unit: "个", standardPrice: 24, price: 4.80 },
  { name: "气管快速接口", number: "9112", model: "M12", unit: "个", standardPrice: 28, price: 5.60 },
  { name: "螺母", number: "9280", model: "M8", unit: "个", standardPrice: 1.5, price: 0.30 },
  { name: "三叉扳手", number: "93456", model: "4.5.6mm", unit: "个", standardPrice: 55, price: 11.00 },
  { name: "手动割刀", number: "93550", model: "5-50mm", unit: "把", standardPrice: 525, price: 105.00 },
  { name: "手动割刀", number: "93670", model: "6-70mm", unit: "把", standardPrice: 625, price: 125.00 },
  { name: "生料带", number: "9520", model: "20米/卷", unit: "个", standardPrice: 6.8, price: 1.36 },
  { name: "电动凸槽机", number: "96100", model: "凹凸两用", unit: "台", standardPrice: 16000, price: 3200.00 },
  { name: "手动凸槽机", number: "96200", model: "", unit: "台", standardPrice: 7500, price: 1500.00 },
  { name: "新型自动凸管机", number: "96300", model: "含DN20-50压头一只，DN63-DN200压头一只，DN20-DN25长度调整板一件，三角架", unit: "台", standardPrice: 18800, price: 3760.00 },
  { name: "自动排水器", number: "972015", model: "AD-402", unit: "个", standardPrice: 165, price: 33.00 },
  { name: "YN60轴向压力表", number: "9810", model: "外牙1/2，1.6AMP", unit: "个", standardPrice: 328, price: 65.60 },
  { name: "Y100BF耐震不锈钢压力表", number: "9820", model: "配缓冲管，1.6AMP", unit: "个", standardPrice: 658, price: 131.60 },
  { name: "分气包", number: "6625154", model: "", unit: "个", standardPrice: 888, price: 177.6 },
  { name: "管夹", number: "7020", model: "DN20", unit: "个", standardPrice: 7.5, price: 1 },
  { name: "管夹", number: "7025", model: "DN25", unit: "个", standardPrice: 8, price: 1.2 },
  { name: "管夹", number: "7040", model: "DN40", unit: "个", standardPrice: 14, price: 2.2 },
  { name: "管夹", number: "7050", model: "DN50", unit: "个", standardPrice: 15, price: 2.8 },
  { name: "管夹", number: "7063", model: "DN63", unit: "个", standardPrice: 21, price: 4.2 },
  { name: "管夹", number: "7080", model: "DN80", unit: "个", standardPrice: 33, price: 6.6 },
  { name: "管夹", number: "70100", model: "DN100", unit: "个", standardPrice: 40, price: 8 },
  { name: "管夹", number: "7140", model: "DN40（碳钢）含配件", unit: "套", standardPrice: 13.5, price: 2.7 },
  { name: "管夹", number: "7150", model: "DN50（碳钢）含配件", unit: "套", standardPrice: 15, price: 3 },
  { name: "管夹", number: "7163", model: "DN63（碳钢）含配件", unit: "套", standardPrice: 20, price: 4 },
  { name: "管夹", number: "7180", model: "DN80（碳钢）含配件", unit: "套", standardPrice: 24, price: 4.8 },
  { name: "管夹", number: "71100", model: "DN100（碳钢）含配件", unit: "套", standardPrice: 24, price: 4.8 },
  { name: "管夹", number: "71125", model: "DN125（碳钢）含配件", unit: "套", standardPrice: 28, price: 5.6 },
  { name: "管夹", number: "71150", model: "DN150（碳钢）含配件", unit: "套", standardPrice: 28, price: 5.6 },
  { name: "管夹", number: "71200", model: "DN1200（碳钢）含配件", unit: "套", standardPrice: 38, price: 7.6 },
  { name: "老虎牙", number: "7325", model: "开口2.5", unit: "个", standardPrice: 12.5, price: 2.5 },
  { name: "阀门底座", number: "74201", model: "阀门DN20（含配件）", unit: "套", standardPrice: 7.5, price: 1.5 },
  { name: "阀门底座", number: "74251", model: "阀门DN25（含配件）", unit: "套", standardPrice: 8, price: 1.6 },
   { name: "堵头", number: "3220", model: "DN20", unit: "个", standardPrice: 32, price: 6.4 },
  { name: "堵头", number: "3225", model: "DN25", unit: "个", standardPrice: 40, price: 8 },
  { name: "堵头", number: "3240", model: "DN40", unit: "个", standardPrice: 60, price: 12 },
  { name: "堵头", number: "3250", model: "DN50", unit: "个", standardPrice: 85, price: 17 },
  { name: "堵头", number: "3263", model: "DN63", unit: "个", standardPrice: 140, price: 28 },
  { name: "堵头", number: "3280", model: "DN80", unit: "个", standardPrice: 210, price: 42 },
  { name: "堵头", number: "32100", model: "DN100", unit: "个", standardPrice: 300, price: 60 },
  { name: "堵头", number: "32150", model: "DN150", unit: "个", standardPrice: 400, price: 80 },
  { name: "堵头", number: "32148", model: "DN148A", unit: "个", standardPrice: 400, price: 80 }


    ],
    faq: [
      { question: '其他配件的使用寿命是多久？', answer: '在正常使用条件下，铝合金配件的使用寿命可达15年以上。' },
      { question: '其他配件的安装方式是怎样的？', answer: '我们的配件采用快插式设计，只需将配件与铝管连接并拧紧螺母即可，安装非常便捷。' },
      { question: '其他配件可以承受多大的压力？', answer: '我们的铝合金配件工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '其他配件有哪些类型可选？', answer: '我们提供管帽、法兰、堵头、变径接头等多种类型的配件，满足管道系统的各种需求。' }
    ]
  },
  qfa: {
    name: '球阀',
    subProducts: [
      { id: 'standard', name: '内螺纹球阀', description: '用于控制管道流体通断的阀门', image: productImages.ballValve.main },
      { id: 'other1', name: '内螺纹球阀（组合件）', description: '用于控制管道流体通断的阀门', image: productImages.ballValve.other1 },
      { id: 'other2', name: '快接球阀', description: '适用于高压流体控制的阀门', image: productImages.ballValve.other2 },
      { id: 'other3', name: '快接球阀（标配件）', description: '用于控制管道流体通断的阀门', image: productImages.ballValve.other3 }
    ],
    description: '铝合金球阀采用优质铝合金材料制造，用于控制管道流体的通断，具有高强度、耐腐蚀、密封性能好等特点。我们提供多种规格的球阀，满足不同管道直径的控制需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '密封性能好：采用优质密封材料，确保连接紧密无泄漏',
      '操作便捷：旋转90度即可完成开关操作',
      '流阻小：全开时流体阻力小，减少能源消耗',
      '使用寿命长：采用优质材料，使用寿命长'
    ],
    specs: [
      { name: "内外双螺纹球阀", number: "501515", model: "R1/2-R1/2", unit: "个", standardPrice: 35.5, price: 7.1 },
  { name: "快接球阀", number: "5120", model: "DN20", unit: "个", standardPrice: 82, price: 14 },
  { name: "快接球阀", number: "5125", model: "DN25", unit: "个", standardPrice: 115, price: 20 },
  { name: "快接球阀", number: "5140", model: "DN40", unit: "个", standardPrice: 238, price: 50 },
  { name: "快接球阀", number: "5150", model: "DN50", unit: "个", standardPrice: 400, price: 80 },
  { name: "快接球阀", number: "5163", model: "DN63", unit: "个", standardPrice: 580, price: 126 },
  { name: "快接球阀（标配件）", number: "51201", model: "DN20（标配）", unit: "套", standardPrice: 164, price: 30.4 },
  { name: "快接球阀（标配件）", number: "51251", model: "DN25（标配）", unit: "套", standardPrice: 218, price: 31.75 },
  { name: "快接球阀（标配件）", number: "51401", model: "DN40（标配）", unit: "套", standardPrice: 426, price: 87.6 },
  { name: "快接球阀（标配件）", number: "51501", model: "DN50（标配）", unit: "套", standardPrice: 629.2, price: 129.84 },
  { name: "内螺纹球阀", number: "522015", model: "DN20-Rc1/2\"", unit: "个", standardPrice: 80, price: 14 },
  { name: "内螺纹球阀", number: "5220", model: "DN20-Rc3/4\"", unit: "个", standardPrice: 80, price: 14 },
  { name: "内螺纹球阀", number: "5225", model: "DN25-Rc1\"", unit: "个", standardPrice: 112, price: 20 },
  { name: "内螺纹球阀", number: "522515", model: "DN25-Rc1/2\"", unit: "个", standardPrice: 112, price: 20 },
  { name: "内螺纹球阀", number: "5240", model: "DN40-Rc1-1/2\"", unit: "个", standardPrice: 238, price: 47.6 },
  { name: "内螺纹球阀", number: "5250", model: "DN50-Rc2\"", unit: "个", standardPrice: 398, price: 79.6 },
  { name: "内螺纹球阀", number: "5263", model: "DN63-Rc2-1/2\"", unit: "个", standardPrice: 558, price: 120 },
  { name: "内螺纹球阀（组合件）", number: "5220151", model: "DN20-Rc1/2\"（标配）", unit: "套", standardPrice: 121, price: 22.2 },
  { name: "内螺纹球阀（组合件）", number: "52201", model: "DN20-Rc3/4\"(标配）", unit: "套", standardPrice: 121, price: 22.2 },
  { name: "内螺纹球阀（组合件）", number: "52251", model: "DN25-Rc1\"（标配）", unit: "套", standardPrice: 163.5, price: 30.3 },
  { name: "内螺纹球阀（组合件）", number: "5225151", model: "DN25-Rc1/2\"（标配）", unit: "套", standardPrice: 163.5, price: 30.3 },
  { name: "内螺纹球阀（组合件）", number: "52401", model: "DN40-Rc1-1/2\"（标配）", unit: "套", standardPrice: 332, price: 66.4 },
  { name: "内螺纹球阀（组合件）", number: "52501", model: "DN50-Rc2\"（标配）", unit: "套", standardPrice: 512.6, price: 102.52 }

    ],
    faq: [
      { question: '球阀的使用寿命是多久？', answer: '在正常使用条件下，铝合金球阀的使用寿命可达15年以上。' },
      { question: '球阀的安装方式是怎样的？', answer: '我们的球阀采用快插式设计，只需将球阀与铝管连接并拧紧螺母即可，安装非常便捷。' },
      { question: '球阀可以承受多大的压力？', answer: '我们的铝合金球阀工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '球阀有哪些规格可选？', answer: '我们提供20mm、25mm、32mm、40mm、50mm、63mm等多种规格的球阀，满足不同管道直径的控制需求。' }
    ]
  },
  dfa: {
    name: '蝶阀',
    subProducts: [
      { id: 'standard', name: '涡轮蝶阀', description: '用于控制管道流体流量的阀门', image: productImages.diskValve.main },
      { id: 'other1', name: '碟阀螺丝配件包', description: '用于控制管道流体流量的阀门', image: productImages.diskValve.other1 },
     
    ],
    description: '铝合金蝶阀采用优质铝合金材料制造，用于控制管道流体的流量，具有高强度、耐腐蚀、调节性能好等特点。我们提供多种规格的蝶阀，满足不同管道直径的流量控制需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '调节性能好：可精确调节流体流量',
      '操作便捷：旋转手柄即可完成流量调节',
      '流阻小：流体阻力小，减少能源消耗',
      '使用寿命长：采用优质材料，使用寿命长'
    ],
    specs: [
     { name: "涡轮蝶阀", number: "5380", model: "DN80", unit: "个", standardPrice: 780, price: 156 },
  { name: "涡轮蝶阀", number: "53100", model: "DN100", unit: "个", standardPrice: 1080, price: 216 },
  { name: "涡轮蝶阀", number: "53125", model: "DN125", unit: "个", standardPrice: 1280, price: 256 },
  { name: "涡轮蝶阀", number: "53150", model: "DN150", unit: "个", standardPrice: 1620, price: 324 },
  { name: "涡轮蝶阀", number: "53148", model: "DN148", unit: "个", standardPrice: 1620, price: 324 },
  { name: "涡轮蝶阀", number: "53200", model: "DN200", unit: "个", standardPrice: 2600, price: 520 },
  { name: "涡轮蝶阀(组合件）", number: "53801", model: "DN80(含配件）", unit: "套", standardPrice: 1548, price: 309.6 },
  { name: "涡轮蝶阀(组合件）", number: "531001", model: "DN100(含配件）", unit: "套", standardPrice: 2058, price: 411.6 },
  { name: "涡轮蝶阀(组合件）", number: "531251", model: "DN125(含配件）", unit: "套", standardPrice: 2582.4, price: 516.48 },
  { name: "涡轮蝶阀(组合件）", number: "531501", model: "DN150(含配件）", unit: "套", standardPrice: 3150.4, price: 630.08 },
  { name: "涡轮蝶阀(组合件）", number: "531481", model: "DN148(含配件）", unit: "套", standardPrice: 3150.4, price: 630.08 },
  { name: "涡轮蝶阀(组合件）", number: "532001", model: "DN200(含配件）", unit: "套", standardPrice: 4570.4, price: 914.08 },
  { name: "碟阀螺丝配件包", number: "8080", model: "DN80(16*100螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 128, price: 25.6 },
  { name: "碟阀螺丝配件包", number: "80100", model: "DN100(16*110螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 137.6, price: 27.52 },
  { name: "碟阀螺丝配件包", number: "80125", model: "DN125(16*110螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 142.4, price: 28.48 },
  { name: "碟阀螺丝配件包", number: "80150", model: "DN150(20*125螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 230.4, price: 46.08 },
  { name: "碟阀螺丝配件包", number: "80200", model: "DN200(20*125螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 230.4, price: 46.08 }


    ],
    faq: [
      { question: '蝶阀的使用寿命是多久？', answer: '在正常使用条件下，铝合金蝶阀的使用寿命可达15年以上。' },
      { question: '蝶阀的安装方式是怎样的？', answer: '我们的蝶阀采用快插式设计，只需将蝶阀与铝管连接并拧紧螺母即可，安装非常便捷。' },
      { question: '蝶阀可以承受多大的压力？', answer: '我们的铝合金蝶阀工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '蝶阀有哪些规格可选？', answer: '我们提供20mm、25mm、32mm、40mm、50mm、63mm等多种规格的蝶阀，满足不同管道直径的流量控制需求。' }
    ]
  },
  faLan: {
    name: '法兰',
    subProducts: [
      { id: 'standard', name: '法兰', description: '用于管道与设备连接的配件', image: productImages.flange.main },
      { id: 'blind', name: '法兰垫片', description: '用于封闭管道末端的法兰', image: productImages.flange.other1 },
      { id: 'other2', name: '法兰螺丝配件包', description: '用于管道与设备连接的配件', image: productImages.flange.other2 }
    ],
    description: '铝合金法兰采用优质铝合金材料制造，用于管道与设备的连接，具有高强度、耐腐蚀、密封性能好等特点。我们提供多种规格的法兰，满足不同管道直径的连接需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '密封性能好：采用优质密封材料，确保连接紧密无泄漏',
      '安装便捷：模块化设计，无需焊接，安装速度快',
      '规格齐全：提供多种规格的法兰，满足不同需求',
      '美观大方：与铝管颜色一致，整体美观度高'
    ],
    specs: [
     { name: "法兰", number: "6063", model: "DN63", unit: "个", standardPrice: 310, price: 62 },
  { name: "法兰", number: "6080", model: "DN80", unit: "个", standardPrice: 320, price: 64 },
  { name: "法兰", number: "60100", model: "DN100", unit: "个", standardPrice: 420, price: 84 },
  { name: "法兰", number: "60125", model: "DN125", unit: "个", standardPrice: 580, price: 118 },
  { name: "法兰", number: "60150", model: "DN150", unit: "个", standardPrice: 650, price: 142 },
  { name: "法兰", number: "602008", model: "DN200", unit: "个", standardPrice: 870, price: 178 },
  { name: "法兰", number: "6020012", model: "DN200", unit: "个", standardPrice: 870, price: 178 },
  { name: "法兰", number: "60148", model: "DN148A", unit: "个", standardPrice: 650, price: 142 },
  { name: "法兰（组合件）", number: "60631", model: "DN63（含配件）", unit: "套", standardPrice: 419.7, price: 83.94 },
  { name: "法兰（组合件）", number: "60801", model: "DN80（含配件）", unit: "套", standardPrice: 431.3, price: 86.26 },
  { name: "法兰（组合件）", number: "601001", model: "DN100（含配件）", unit: "套", standardPrice: 536.5, price: 107.3 },
  { name: "法兰（组合件）", number: "601251", model: "DN125（含配件）", unit: "套", standardPrice: 698.8, price: 141.6 },
  { name: "法兰（组合件）", number: "601501", model: "DN150（含配件）", unit: "套", standardPrice: 839.7, price: 179.6 },
  { name: "法兰（组合件）", number: "6020081", model: "DN200（含配件8孔）", unit: "套", standardPrice: 1069.2, price: 217.2 },
  { name: "法兰（组合件）", number: "60200121", model: "DN200（含配件12孔）", unit: "套", standardPrice: 1151.3, price: 232.5 },
  { name: "法兰（组合件）", number: "601481", model: "DN148A（含配件）", unit: "套", standardPrice: 839.7, price: 179.6 },
  { name: "法兰垫片", number: "8663", model: "DN63", unit: "片", standardPrice: 15.9, price: 3.18 },
  { name: "法兰垫片", number: "8680", model: "DN80", unit: "片", standardPrice: 17.5, price: 3.5 },
  { name: "法兰垫片", number: "86100", model: "DN100", unit: "片", standardPrice: 19.5, price: 3.9 },
  { name: "法兰垫片", number: "86125", model: "DN125", unit: "片", standardPrice: 21.8, price: 4.36 },
  { name: "法兰垫片", number: "86148", model: "DN148A", unit: "片", standardPrice: 25.5, price: 5.1 },
  { name: "法兰垫片", number: "86150", model: "DN150", unit: "片", standardPrice: 25.5, price: 5.1 },
  { name: "法兰垫片", number: "86200", model: "DN200", unit: "片", standardPrice: 35, price: 7 },
  { name: "法兰螺丝配件包", number: "8163", model: "DN63(M16*60螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 93.8, price: 18.76 },
  { name: "法兰螺丝配件包", number: "8180", model: "DN80(M16*60螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 93.8, price: 18.76 },
  { name: "法兰螺丝配件包", number: "81100", model: "DN100(16*70螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 97, price: 19.4 },
  { name: "法兰螺丝配件包", number: "81125", model: "DN125(16*70螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 97, price: 19.4 },
  { name: "法兰螺丝配件包", number: "81150", model: "DN150(20*75螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 164.2, price: 32.84 },
  { name: "法兰螺丝配件包", number: "81200", model: "DN200(20*75螺杆，螺帽，平垫，弹垫*8套）", unit: "包", standardPrice: 164.2, price: 32.84 }

    ],
    faq: [
      { question: '法兰的使用寿命是多久？', answer: '在正常使用条件下，铝合金法兰的使用寿命可达15年以上。' },
      { question: '法兰的安装方式是怎样的？', answer: '我们的法兰采用快插式设计，只需将法兰与铝管连接并拧紧螺母即可，安装非常便捷。' },
      { question: '法兰可以承受多大的压力？', answer: '我们的铝合金法兰工作压力可达1.6MPa，满足大多数工业应用场景的需求。' },
      { question: '法兰有哪些规格可选？', answer: '我们提供20mm、25mm、32mm、40mm、50mm、63mm等多种规格的法兰，满足不同管道直径的连接需求。' }
    ]
  },
  zhijia: {
    name: '支架',
    subProducts: [
      { id: 'standard', name: 'T型支架', description: '用于支撑管道的配件', image:productImages.bracket.main },
      { id: 'adjustable', name: '钢结构T型支架', description: '高度可调节的管道支架', image: productImages.bracket.other1  }
    ],
    description: '铝合金支架采用优质铝合金材料制造，用于支撑管道，具有高强度、耐腐蚀、安装便捷等特点。我们提供多种规格的支架，满足不同管道直径的支撑需求。',
    features: [
      '高强度：采用优质铝合金材料，抗拉强度高',
      '耐腐蚀：表面阳极氧化处理，抗腐蚀性能优异',
      '安装便捷：模块化设计，安装速度快',
      '调节灵活：部分支架高度可调节，适应不同安装场景',
      '规格齐全：提供多种规格的支架，满足不同需求',
      '美观大方：与铝管颜色一致，整体美观度高'
    ],
    specs: [
      { name: "T型支架", number: "7515", model: "15CM", unit: "根", standardPrice: 45, price: 9 },
  { name: "T型支架", number: "7530", model: "30CM", unit: "根", standardPrice: 52, price: 10.4 },
  { name: "T型支架", number: "7550", model: "50CM", unit: "根", standardPrice: 70, price: 14 },
  { name: "钢结构T型支架", number: "75301", model: "30CM", unit: "根", standardPrice: 80, price: 16 },
  { name: "钢结构T型支架", number: "75501", model: "50CM", unit: "根", standardPrice: 97.5, price: 19.5 },
  { name: "伸缩支架", number: "761224", model: "1.2M-2.4M", unit: "根", standardPrice: 338, price: 67.6 },
  { name: "重型支架", number: "7615181", model: "2.9m镀锌（含配件)", unit: "套", standardPrice: 414, price: 82.8 }

    ],
    faq: [
      { question: '支架的使用寿命是多久？', answer: '在正常使用条件下，铝合金支架的使用寿命可达15年以上。' },
      { question: '支架的安装方式是怎样的？', answer: '我们的支架采用模块化设计，只需将支架固定在墙体或其他支撑面上，然后将管道放置在支架上即可，安装非常便捷。' },
      { question: '支架可以承受多大的重量？', answer: '我们的铝合金支架可承受管道及流体的重量，满足大多数工业应用场景的需求。' },
      { question: '支架有哪些规格可选？', answer: '我们提供20mm、25mm、32mm、40mm、50mm、63mm等多种规格的支架，满足不同管道直径的支撑需求。' }
    ]
  }
};
