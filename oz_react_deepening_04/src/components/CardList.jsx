import Card from './Card';

export default function CardList({ data: listData }) {
    console.log(listData);
    //1. listData를 받아와서 카드 리스트를 렌더링 해야 합니다.
    //2. listData의 각 요소를 Card 컴포넌트에 props로 넘겨주어야 합니다.
    //3. Card 컴포넌트에는 item을 넘겨주어야 합니다.
    //4. item은 listData 요소입니다 console.log로 찍히는 listData의 정보를 확인해보세요.
    //5. Card 컴포넌트를 map을 이용해 여러번 렌더링할 때, Card에 key를 설정해야합니다.
    return (
        <div className="card-grid">
            <Card />
        </div>
    );
}
