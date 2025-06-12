import Boards from './components/Boards';
import Controller from './components/Controller';

// 기존 Boards 컴포넌트에서 Data를 MockData를 Props를 받고 이용하는 형태로 구성되어 있습니다.
// 이를 Recoil을 이용하여 상태관리를 하도록 변경합니다.
// Recoil을 사용하려면 RecoilRoot를 최상위 컴포넌트에 감싸야 합니다.
// src/recoil/atoms.js 파일을 새로 생성하고, atom을 정의합니다.

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full h-[80px] bg-slate-800 flex flex-col items-center justify-center text-stone-100">
        <p className="text-lg font-semibold">Kanban Board Project</p>
        <p>Chapter 1. Recoil</p>
      </header>
      <main className="flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-4 p-4 w-full">
          <Boards type={'todo'} />
          <Boards type={'inprogress'} />
          <Boards type={'done'} />
        </div>
        <Controller />
      </main>
      <footer className="w-full h-[60px] bg-slate-800 flex items-center text-stone-100 justify-center">
        <p>&copy; OZ-CodingSchool</p>
      </footer>
    </div>
  );
}

export default App;
