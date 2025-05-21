// 샘플 데이터

import './main.css';
import Filter from './components/Filter';
import CardList from './components/CardList';
import { useState } from 'react';

const DATA = [
    { id: 1, title: '기술 카드 1', description: '이것은 첫 번째 카드의 설명입니다.', category: '기술' },
    { id: 2, title: '디자인 카드 1', description: '이것은 두 번째 카드의 설명입니다.', category: '디자인' },
    { id: 3, title: '기술 카드 2', description: '이것은 세 번째 카드의 설명입니다.', category: '기술' },
    { id: 4, title: '마케팅 카드 1', description: '이것은 네 번째 카드의 설명입니다.', category: '마케팅' },
    { id: 5, title: '디자인 카드 2', description: '이것은 다섯 번째 카드의 설명입니다.', category: '디자인' },
    { id: 6, title: '기술 카드 3', description: '이것은 여섯 번째 카드의 설명입니다.', category: '기술' },
];
const CATEGORIES = ['전체', ...new Set(DATA.map((item) => item.category))];

export default function Home() {
    const [filterCategory, setFilterCategory] = useState('전체');

    const filteredData = filterCategory === '전체' ? DATA : DATA.filter((item) => item.category === filterCategory);

    return (
        <main className="container">
            <h1>카드 렌더링</h1>
            <Filter categories={CATEGORIES} currentFilter={filterCategory} onFilterChange={setFilterCategory} />
            <CardList data={filteredData} />
        </main>
    );
}
