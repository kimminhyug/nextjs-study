# 예약 파일

- page.tsx(각 경로의 페이지 담당)
- layout.tsx(각 경로의 레이아웃 담당 - 생략 시 상위 경로에 존재하는 예약 파일 사용)
- loading.tsx(각 경로의 로딩 담당 - 생략 시 상위 경로에 존재하는 예약 파일 사용)

# 라우팅 구조

- 각 디렉토리(중첩 가능)를 기준으로 페이지를 인식하며 아래와 같이 설계되어 있음

```
app(루트 디렉토리)
├─ app/layout.tsx          # app의 레이아웃, url: `/`
├─ app/page.tsx            # app의 뷰, url: `/`
├─ app/dashboard/layout.tsx # dashboard의 레이아웃, url: `/dashboard`
├─ app/dashboard/page.tsx  # dashboard 뷰, url: `/dashboard`
├─ app/statistics/page.tsx # statistics 뷰, app의 레이아웃 url: `/statistics`
```

---

# 서버 렌더링

## Static Params

- 빌드 시점에 동적 라우팅에 필요한 params를 생성 가능
- 해당 디렉토리의 `page.tsx`에 작성
- 정적 페이지 생성 과정으로, posts를 조회해 array 형태로 넘어온 결과만큼 HTML을 미리 생성
- 장점: 빠른 로딩 속도, 데이터 안전성, 성능 절감
- 단점: 데이터가 많으면 빌드 시간이 늘어남

```ts
export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts").then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

## 1. 정적 렌더링(Static Rendering)

- 해당 케이스는 빌드 시점에 미리 정적 html을 생성하는 과정으로, html은 cdn에 캐싱되어 바로 제공 할 수 있는 상태입니다.
- 기대효과: 자주 사용되는 페이지의 경우 빠르게 화면을 제공.
- 데이터가 많을 경우 사용하면 빌드가 오래걸리지 않나 해서 찾아본 결과, 페이징 구조를 적용한 ISR (Incremental Static Regeneration) 라는 것을 찾음
- 정적 렌더링은 빌드 이후 데이터가 고정 되므로, ISR을 이용하여 유통기한을 설정, 특정 주기마다 페이지가 다시 생성되도록 작업 할 수 있다 함
- 따라서 페이징 구조를 적용하고(generateStaticParams를 통해 사전 페이지 개수 설정), 일정 시간마다 리 렌더링 하도록 처리하면, 빌드 시간을 최적화 할 수 있다 함

## 2. 동적 렌더링(Dynamic Rendering)

- 사용자 요청 시점에 서버에서 html을 생성하는 방식
- 사용자 정의 대시보드같이 실시간 페이지에서 사용할 듯
- 동적 렌더링 방식은 `generateStaticParams`가 있고 없고 차이가 크다고함(page.tsx, layout.tsx등 사전에 빌드 하고 안하고 차이로 캐싱여부도 결정됨)
- 상세 설정 정보같은데서는 `generateStaticParams`가 유용할 것으로 보임

## 3. prefetch

- Next.js에서는 사용자 뷰포트 <Link/> 와 연결된 경로를 자동으로 미리 가져와, 사전에 렌더링을 하여 더 빠른 페이지 이동을 제공한다함
- 단 정적 경로, 동적 경로에 따라 동작 방식이 다름
- 정적 경로: url과 데이터 모두 사전에 알 수 있기 때문에 완전한 html을 prefetch 할 수 있음
- 동적 경로: `/user/[username]` 같이 특정 정보를 동적으로 받아야 하는 경우 prefetch가 생략되거나 부분적으로 수행 한다함
  - 특히 위와 같이 사용자가 클릭해야 경로가 생성되어 데이터 조회가 가능 한 경우는, loading.tsx(예약 파일)를 이용하여 사용자에게 화면이 진행 되고 있는 느낌을 제공 한다 함

## 4. Streaming

- 서버가 전체 경로를 렌더링 할 떄까직 기다리지 않고, 동적 경로의 일부를 클라이언트에 준비되는 되로 즉시 전송 할 수 있다함
- 예전에 이미지를 스트리밍으로 처리했을때 그려지는대로 이미지가 화면에 출력되던 현상이랑 비슷한듯
- 보통 레이아웃(스켈레톤 ui 썻던것), 로딩바 등을 화면에 표시하고 상세 내용은 준비되는 대로 출력하는 방식
- `React Suspense` + `서버 컴포넌트` 조합이면 스트리밍으로 알아서 처리 된다 함

---

# Layout 구조

- `layout.tsx`는 각 디렉토리의 뷰 영역에 해당됨
  - 단, 현재 디렉토리에 layout이 없는 경우 **상위 디렉토리의 layout**을 가져옴
- 공용 UI(shared between multiple pages)
- 렌더링이 다시 발생되지 않음 (`do not rerender`)

### 동적 경로 지정

- 대괄호를 이용하여 동적 경로 지정 가능

```ts
// 예시
app / dashboard / [category] / page.tsx; // /dashboard/traffic  → { category: 'traffic' }
app / dashboard / [category] / page.tsx; // /dashboard/resource → { category: 'resource' }
```

- 배열 형태 동적 경로 (최소 1개 값 필요)

```ts
app / dashboard / [...category] / page.tsx; // /dashboard/traffic/bps → { category: ['cpu', 'bps] }
```

- 옵셔널(dynamic optional) 형태

```ts
app / dashboard / [[...category]] / page.tsx; // /dashboard           → undefined
app / dashboard / [[...category]] / page.tsx; // /dashboard/traffic/bps    → { category: ['traffic', 'bps] }
```

- 유연한 페이지는 **옵셔널 형태**, 값이 반드시 필요한 경우 **필수 형태**로 처리

---

# notFound()

- import

```ts
import { notFound } from "next/navigation";
```

- 동적 경로에서 파라미터 값이 상수로 고정되어야 하는 경우, `notFound()` 호출 → 404 처리

---

# 기타

## `<Image />`

- 서버사이드 렌더링 처리
- 이미지 최적화 기능 존재
  - 필요에 따라 이미지 사이즈 조정
  - 뷰포트에 들어올 때만 렌더링
- CLS(Cumulative Layout Shift) 방지

## `/public` 디렉토리

- 루트 경로 기준 구성, URL: `/`

# 구현 페이지

- 간단한 대시보드를 구현중
  - SSR + CSR을 혼합한 구조로 생각중이고 간단한 지표와 레이아웃은 SSR로 처리하며, API 호출 차트 렌더링 등은 CSR로 처리 예정
  - 사용자에게 위젯등 레이아웃과, 간단한 지표들을 빠르게 화면에 제공 할 수 있고, 그외 api 호출, 차트 렌더링은 클라이언트에서 진행

<img width="100%" height="399" alt="Image" src="https://github.com/user-attachments/assets/d1a422c1-781d-4b8b-a2b5-e6ea3a9f0b4e" />
