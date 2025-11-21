export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* 서버사이드 렌더링 처리 , 이미지 최적화 기능 존재(필요에 따라 이미지 사이즈 조정 또는 뷰포트에 들어올때만 이미지 렌더링), cls 방지  */}
        메인 페이지
      </main>
    </div>
  );
}
