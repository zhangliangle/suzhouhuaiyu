
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
      { number: '10133', name: '蓝色铝合金管', model: 'DN133*5.8米 色号：RAL5015', unit: '根', standardPrice: '150', price: '42.00' },
      { number: '10148', name: '蓝色铝合金管', model: 'DN148*5.8米 色号：RAL5015', unit: '根', standardPrice: '301', price: '88.00' },
      { number: '10150', name: '蓝色铝合金管', model: 'DN150*5.8米 色号：RAL5015', unit: '根', standardPrice: '450', price: '126.00' },
      { number: '10200', name: '蓝色铝合金管', model: 'DN200*5.8米 色号：RAL5015', unit: '根', standardPrice: '728', price: '210.00' },
      { number: '1120', name: '灰色铝合金管', model: 'DN20*6米 色号：RAL7001', unit: '根', standardPrice: '935', price: '250.00' },
      { number: '1125', name: '灰色铝合金管', model: 'DN25*6米 色号：RAL7001', unit: '根', standardPrice: '109', price: '30.52' },
     
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
      { number: '1', name: '接头', model: 'HY-CON-20', unit: '个', standardPrice: '50', price: '42' },
      { number: '2', name: '接头', model: 'HY-CON-25', unit: '个', standardPrice: '60', price: '51' },
      { number: '3', name: '接头', model: 'HY-CON-32', unit: '个', standardPrice: '80', price: '68' },
      { number: '4', name: '接头', model: 'HY-CON-40', unit: '个', standardPrice: '100', price: '85' },
      { number: '5', name: '接头', model: 'HY-CON-50', unit: '个', standardPrice: '120', price: '102' },
      { number: '6', name: '接头', model: 'HY-CON-63', unit: '个', standardPrice: '150', price: '128' }
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
      { number: '1', name: '弯头', model: 'HY-ELB-20-90', unit: '个', standardPrice: '60', price: '51' },
      { number: '2', name: '弯头', model: 'HY-ELB-25-90', unit: '个', standardPrice: '70', price: '60' },
      { number: '3', name: '弯头', model: 'HY-ELB-32-90', unit: '个', standardPrice: '90', price: '77' },
      { number: '4', name: '弯头', model: 'HY-ELB-40-90', unit: '个', standardPrice: '110', price: '94' },
      { number: '5', name: '弯头', model: 'HY-ELB-50-90', unit: '个', standardPrice: '130', price: '111' },
      { number: '6', name: '弯头', model: 'HY-ELB-63-90', unit: '个', standardPrice: '160', price: '136' }
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
      { number: '1', name: '软管', model: 'HY-HOS-20', unit: '米', standardPrice: '120', price: '102' },
      { number: '2', name: '软管', model: 'HY-HOS-25', unit: '米', standardPrice: '140', price: '119' },
      { number: '3', name: '软管', model: 'HY-HOS-32', unit: '米', standardPrice: '180', price: '153' },
      { number: '4', name: '软管', model: 'HY-HOS-40', unit: '米', standardPrice: '220', price: '187' },
      { number: '5', name: '软管', model: 'HY-HOS-50', unit: '米', standardPrice: '260', price: '221' },
      { number: '6', name: '软管', model: 'HY-HOS-63', unit: '米', standardPrice: '320', price: '272' }
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
      { number: '22401', name: '等径快接（标配件）', model: 'DN40（铝合金,标配）', unit: '个', standardPrice: '100', price: '20' }
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

      { number: '21150801', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '211501001', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '211501251', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '2125201', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '2125201', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '2125201', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '2125201', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '2125201', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
      { number: '2125201', name: '异径直通（组合件）', model: 'DN25-20（铝合金）', unit: '个', standardPrice: '58', price: '11.6' },
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
      { number: '1', name: '等径三通', model: 'HY-ET-20', unit: '个', standardPrice: '90', price: '77' },
      { number: '2', name: '等径三通', model: 'HY-ET-25', unit: '个', standardPrice: '100', price: '85' },
      { number: '3', name: '等径三通', model: 'HY-ET-32', unit: '个', standardPrice: '120', price: '102' },
      { number: '4', name: '等径三通', model: 'HY-ET-40', unit: '个', standardPrice: '140', price: '119' },
      { number: '5', name: '等径三通', model: 'HY-ET-50', unit: '个', standardPrice: '170', price: '145' },
      { number: '6', name: '等径三通', model: 'HY-ET-63', unit: '个', standardPrice: '200', price: '170' }
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
      { number: '1', name: '取气', model: 'HY-AT-20', unit: '个', standardPrice: '60', price: '51' },
      { number: '2', name: '取气', model: 'HY-AT-25', unit: '个', standardPrice: '70', price: '60' },
      { number: '3', name: '取气', model: 'HY-AT-32', unit: '个', standardPrice: '90', price: '77' },
      { number: '4', name: '取气', model: 'HY-AT-40', unit: '个', standardPrice: '110', price: '94' },
      { number: '5', name: '取气', model: 'HY-AT-50', unit: '个', standardPrice: '130', price: '111' },
      { number: '6', name: '取气', model: 'HY-AT-63', unit: '个', standardPrice: '160', price: '136' }
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
      { number: '1', name: '管帽', model: 'HY-CP-20', unit: '个', standardPrice: '30', price: '26' },
      { number: '2', name: '管帽', model: 'HY-CP-25', unit: '个', standardPrice: '35', price: '30' },
      { number: '3', name: '管帽', model: 'HY-CP-32', unit: '个', standardPrice: '45', price: '38' },
      { number: '4', name: '法兰', model: 'HY-FL-20', unit: '个', standardPrice: '120', price: '102' },
      { number: '5', name: '法兰', model: 'HY-FL-25', unit: '个', standardPrice: '140', price: '119' },
      { number: '6', name: '法兰', model: 'HY-FL-32', unit: '个', standardPrice: '160', price: '136' }
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
      { number: '1', name: '球阀', model: 'HY-BV-20', unit: '个', standardPrice: '150', price: '128' },
      { number: '2', name: '球阀', model: 'HY-BV-25', unit: '个', standardPrice: '180', price: '153' },
      { number: '3', name: '球阀', model: 'HY-BV-32', unit: '个', standardPrice: '220', price: '187' },
      { number: '4', name: '球阀', model: 'HY-BV-40', unit: '个', standardPrice: '260', price: '221' },
      { number: '5', name: '球阀', model: 'HY-BV-50', unit: '个', standardPrice: '320', price: '272' },
      { number: '6', name: '球阀', model: 'HY-BV-63', unit: '个', standardPrice: '380', price: '323' }
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
      { number: '1', name: '蝶阀', model: 'HY-DV-20', unit: '个', standardPrice: '180', price: '153' },
      { number: '2', name: '蝶阀', model: 'HY-DV-25', unit: '个', standardPrice: '220', price: '187' },
      { number: '3', name: '蝶阀', model: 'HY-DV-32', unit: '个', standardPrice: '260', price: '221' },
      { number: '4', name: '蝶阀', model: 'HY-DV-40', unit: '个', standardPrice: '300', price: '255' },
      { number: '5', name: '蝶阀', model: 'HY-DV-50', unit: '个', standardPrice: '360', price: '306' },
      { number: '6', name: '蝶阀', model: 'HY-DV-63', unit: '个', standardPrice: '420', price: '357' }
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
      { number: '1', name: '法兰', model: 'HY-FL-20', unit: '个', standardPrice: '120', price: '102' },
      { number: '2', name: '法兰', model: 'HY-FL-25', unit: '个', standardPrice: '140', price: '119' },
      { number: '3', name: '法兰', model: 'HY-FL-32', unit: '个', standardPrice: '160', price: '136' },
      { number: '4', name: '法兰', model: 'HY-FL-40', unit: '个', standardPrice: '190', price: '162' },
      { number: '5', name: '法兰', model: 'HY-FL-50', unit: '个', standardPrice: '220', price: '187' },
      { number: '6', name: '法兰', model: 'HY-FL-63', unit: '个', standardPrice: '260', price: '221' }
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
      { number: '1', name: '支架', model: 'HY-BR-20', unit: '个', standardPrice: '80', price: '68' },
      { number: '2', name: '支架', model: 'HY-BR-25', unit: '个', standardPrice: '90', price: '77' },
      { number: '3', name: '支架', model: 'HY-BR-32', unit: '个', standardPrice: '100', price: '85' },
      { number: '4', name: '支架', model: 'HY-BR-40', unit: '个', standardPrice: '120', price: '102' },
      { number: '5', name: '支架', model: 'HY-BR-50', unit: '个', standardPrice: '140', price: '119' },
      { number: '6', name: '支架', model: 'HY-BR-63', unit: '个', standardPrice: '160', price: '136' }
    ],
    faq: [
      { question: '支架的使用寿命是多久？', answer: '在正常使用条件下，铝合金支架的使用寿命可达15年以上。' },
      { question: '支架的安装方式是怎样的？', answer: '我们的支架采用模块化设计，只需将支架固定在墙体或其他支撑面上，然后将管道放置在支架上即可，安装非常便捷。' },
      { question: '支架可以承受多大的重量？', answer: '我们的铝合金支架可承受管道及流体的重量，满足大多数工业应用场景的需求。' },
      { question: '支架有哪些规格可选？', answer: '我们提供20mm、25mm、32mm、40mm、50mm、63mm等多种规格的支架，满足不同管道直径的支撑需求。' }
    ]
  }
};
