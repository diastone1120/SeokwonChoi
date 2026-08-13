# Seokwon Choi — Portfolio Site

## 실행 방법 (Getting started)

```
npm install
npm run dev      # localhost:4321 에서 미리보기 (live preview)
npm run build    # dist/ 폴더에 정적 사이트 생성 (production build)
```

## 새 프로젝트 추가하기 (Adding a new project)

`src/content/projects/` 폴더에 `.mdx` 파일 하나를 추가하면, 자동으로 홈페이지 그리드와
`/work/[파일이름]` 페이지가 생성됩니다. 기존 파일의 frontmatter 형식(`sheet`, `title`,
`summary`, `tags`, `credit`)을 그대로 따라 쓰면 됩니다.

Add one `.mdx` file to `src/content/projects/` and it automatically appears in the
homepage grid and generates its own page at `/work/[filename]`. Follow the frontmatter
shape (`sheet`, `title`, `summary`, `tags`, `credit`) used in the existing files.

## 폴더 구조 (Structure)

```
src/
  content/projects/   ← 프로젝트 글 (MDX) — 계속 수정하게 될 유일한 부분
  content.config.ts   ← 콘텐츠 필드 정의 (스키마)
  layouts/            ← 공통 헤더/푸터
  pages/               ← 실제 라우팅 (index.astro = "/", work/[slug].astro = "/work/...")
  styles/global.css   ← 색상, 폰트, 전체 디자인 시스템
```

## 다음 단계 (Next steps)

1. GitHub 저장소를 만들고 이 폴더를 업로드합니다 (`git init` → `git add .` → `git commit` → `git push`).
2. [vercel.com](https://vercel.com)에서 GitHub 저장소를 연결하면 자동 배포됩니다. Framework Preset은 "Astro"를 자동 인식합니다.
3. (선택) 원하는 도메인을 Vercel에 연결합니다.

1. Create a GitHub repo and push this folder.
2. Connect the repo on [vercel.com](https://vercel.com) — it auto-detects the Astro
   framework preset and deploys.
3. (Optional) Connect a custom domain in Vercel's settings.
