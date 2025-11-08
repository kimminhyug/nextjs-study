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

# Layout 구조

- `layout.tsx`는 각 디렉토리의 뷰 영역에 해당됨  
  - 단, 현재 디렉토리에 layout이 없는 경우 **상위 디렉토리의 layout**을 가져옴
- 공용 UI(shared between multiple pages)  
- 렌더링이 다시 발생되지 않음 (`do not rerender`)  

### 동적 경로 지정

- 대괄호를 이용하여 동적 경로 지정 가능
```ts
// 예시
app/dashboard/[chart]/page.tsx // /dashboard/cpu  → { chart: 'cpu' }
app/dashboard/[chart]/page.tsx // /dashboard/memory → { chart: 'memory' }
```

- 배열 형태 동적 경로 (최소 1개 값 필요)
```ts
app/dashboard/[...chart]/page.tsx // /dashboard/cpu/1 → { chart: ['cpu', 1] }
```

- 옵셔널(dynamic optional) 형태
```ts
app/dashboard/[[...chart]]/page.tsx // /dashboard           → undefined
app/dashboard/[[...chart]]/page.tsx // /dashboard/cpu/1    → { chart: ['cpu', 1] }
```

- 유연한 페이지는 **옵셔널 형태**, 값이 반드시 필요한 경우 **필수 형태**로 처리

---

# Static Params

- 빌드 시점에 동적 라우팅에 필요한 params를 생성 가능  
- 해당 디렉토리의 `page.tsx`에 작성
- 정적 페이지 생성 과정으로, posts를 조회해 array 형태로 넘어온 결과만큼 HTML을 미리 생성
- 장점: 빠른 로딩 속도, 데이터 안전성, 성능 절감  
- 단점: 데이터가 많으면 빌드 시간이 늘어남 (많은 경우 사전 렌더링 비권장)

```ts
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());

  return posts.map(post => ({
    slug: post.slug,
  }));
}
```

---

# notFound()

- import
```ts
import { notFound } from 'next/navigation';
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
