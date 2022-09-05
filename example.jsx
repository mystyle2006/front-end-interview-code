function 상품_관리_페이지() {
  async function 검수_모달_요청() {
    const 검수자_여부 = await 권한_체크();
    if (!검수자_여부) {
      편집자_팝업_열기();
      return;
    }

    검수자_팝업_열기();
  }

  return (
    <>
      <button onClick={검수_모달_요청}>
        검수 요청
      </button>
    </>
  );
}
