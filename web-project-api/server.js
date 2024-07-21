const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 미들웨어 사용
app.use(cors());

// 상품 데이터
const products = [
    { id: 1,
      name: '코난 그레이 내한공연',
      //description: 'Description for product 1',
      interpark: "https://tickets.interpark.com/goods/24006288",
      yes24: "",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24006288_p.gif",
      tags: "#서울 #내한 #콘서트 #팝 "},
      
    { id: 2,
      name: '<미스트롯3> 전국투어 콘서트 - 광주',
      //description: 'Description for product 2',
      interpark: "https://tickets.interpark.com/goods/24003268",
      yes24: "",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24003268_p.gif",
      tags: "#광주 #콘서트 #트로트 "},

    { id: 3,
      name: '2024 서울파크뮤직페스티벌',
      //description: 'Description for product 3',
      interpark: "https://tickets.interpark.com/goods/24001672",
      yes24: "",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24001672_p.gif",
      tags: "#서울 #페스티벌 #밴드 #락 "},

    { id: 4,
      name: '2024 인천 펜타포트 락 페스티벌',
      //description: 'Description for product 4',
      interpark: "https://tickets.interpark.com/goods/24005722",
      yes24: "http://ticket.yes24.com/Perf/49633",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24005722_p.gif",
      tags: "#인천 #페스티벌 #밴드 #락 "},

    { id: 5,
      name: '옥탑 재즈 III',
      //description: 'Description for product 5',
      interpark: "https://tickets.interpark.com/goods/24003645",
      yes24: "",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24003645_p.gif",
      tags: "#인천 #콘서트 #재즈 "},

    { id: 6,
      name: '먼데이프로젝트 시즌7 ［윤딴딴 부산 단독 콘서트 ‘순간의 노래’］ - 부산',
      //description: 'Description for product 6',
      interpark: "https://tickets.interpark.com/goods/24006666",
      yes24: "",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24006666_p.gif",
      tags: "#부산 #콘서트 #발라드 "},

    { id: 7,
      name: 'World DJ Festival 2024',
      //description: 'Description for product 7',
      interpark: "https://tickets.interpark.com/goods/23017356",
      yes24: "",
      image: "https://ticketimage.interpark.com/Play/image/large/23/23017356_p.gif",
      tags: "#서울 #페스티벌 #락 #EDM "},

    { id: 8,
      name: '올리비아 로드리고 첫 내한공연',
      //description: 'Description for product 8',
      interpark: "https://tickets.interpark.com/goods/24006714",
      yes24: "",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24006714_p.gif",
      tags: "#서울 #내한 #콘서트 #팝 "},

    { id: 9,
      name: '2024 박정현 소극장 콘서트 [이음]',
      //description: 'Description for product 8',
      interpark: "https://tickets.interpark.com/goods/24006782",
      yes24: "",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24006782_p.gif",
      tags: "#서울 #콘서트 #발라드 "},

    { id: 10,
      name: '2024 월간뮤지크 <소란>',
      //description: 'Description for product 8',
      interpark: "https://tickets.interpark.com/goods/24007135",
      yes24: "",
      image: "https://ticketimage.interpark.com/TicketImage/main/common/mobile/noimage_vtc.jpg",
      tags: "#서울 #콘서트 #밴드 "},
];

const prodcutDetails = [
  { id: 1,
    description: '장소: KBS 아레나, 공연일시: 2024.09.06 ~ 2024.09.07, 관람연령: 만12세 이상 관람 가능, 가격(원): 99,000 ~' },
  { id: 2,
    description: '장소: 김대중컨벤션센터 다목적홀, 공연일시: 2024.07.13 ~ 2024.07.14, 관람연령: 8세 이상 관람 가능, 가격(원): 110,000 ~' },
  { id: 3,
    description: '장소: 올림픽공원 88잔디마당,88호수수변무대, 공연일시: 2024.06.29 ~ 2024.06.30, 관람연령: 만12세 이상 관람 가능, 가격(원): 109,000' },
  { id: 4,
    description: '장소: 송도달빛축제공원, 공연일시: 2024.08.02 ~ 2024.08.04, 관람연령: 전체관람가, 가격(원): 108,000 ~' },
  { id: 5,
    description: '장소: 아트센터인천 다목적홀, 공연일시: 2024.10.04, 관람연령: 8세 이상 관람 가능, 가격(원): 25,000' },
  { id: 6,
    description: '장소: KT&G 상상마당 부산 라이브홀, 공연일시: 2024.06.03, 관람연령: 전체관람가, 가격(원): 77,000' },
  { id: 7,
    description: '장소: 서울랜드, 공연일시: 2024.06.15 ~ 2024.06.16, 관람연령: 만19세 이상 관람 가능, 가격(원): 129,000 ~' },
  { id: 8,
    description: '장소: 잠실 실내체육관, 공연일시: 2024.09.20 ~ 2024.09.21, 관람연령: 만12세 이상 관람 가능, 가격(원): 99,000 ~' },
  { id: 9,
    description: '장소: 백암아트홀, 공연일시: 2024.07.11 ~ 2024.07.14, 관람연령: 8세 이상 관람 가능, 가격(원): 132,000' },
  { id: 10,
    description: '장소: 양천문화회관 대극장, 공연일시: 2024.06.29, 관람연령: 초등학생 이상 관람 가능, 가격(원): 10,000 ~' },
];

// API 엔드포인트: 특정 상품의 상세 정보를 반환
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.get('/api/productDetails/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = prodcutDetails.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({message: 'Product not found'});
}
});
// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
