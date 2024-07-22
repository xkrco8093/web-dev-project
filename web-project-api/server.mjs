import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

// 모듈
import { products } from './products.mjs';
import { productDetails } from './prod-detail.mjs';

// CORS 미들웨어 사용
app.use(cors());

// API 엔드포인트: 공연 정보 반환
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// 공연 상세 정보 반환
app.get('/api/productDetails/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = productDetails.find(p => p.id === productId);
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
