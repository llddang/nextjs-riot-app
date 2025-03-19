## 💬 프로젝트 소개

> 📅 개발 기간 : 2025. 03. 10 ~ 2025. 03. 17 (총 8일)
> <br><br>
> **League Of Legends의 간단한 정보 조회를 목적으로 하는 Next.js 기반 웹 애플리케이션입니다.**
> <br>
> <br> Riot Games API를 활용하여 매주 변경되는 리그 오브 레전드(LoL)의 로테이션 챔피언 목록을 조회할 수 있습니다.
> <br> PC와 모바일 환경 모두에 최적화된 반응형 디자인을 적용하였습니다.

<br>
<br>


## 📑 페이지 구성
| **1. 메인 화면**                                     |
| :------------------------------------------------------------------: | 
| <img src="https://github.com/user-attachments/assets/8f3eaf9c-b8b4-42e2-817a-9302a51d8bb1" alt="메인 화면" /> 
| **2. 챔피언 전체 목록 페이지**                               | 
| <img src="https://github.com/user-attachments/assets/6f772095-d2ba-448d-a38d-df9915dd6489" alt="챔피언 전체 목록 페이지" />   |
| **3. 챔피언 로테이션 목록 페이지**                               | 
| <img src="https://github.com/user-attachments/assets/6a40d923-8e8c-4fe0-9420-be5b0a0fcbba" alt="챔피언 로테이션 목록 페이지" />   |
| **4. 챔피언 상세 페이지**                               | 
| <img src="https://github.com/user-attachments/assets/0286ed0e-75a0-4892-94b1-d4d9d5495ff7" alt="챔피언 상세 페이지" />   |
| **5. 아이템 목록 페이지**                               | 
| <img src="https://github.com/user-attachments/assets/1e67533f-0b66-4f2c-a449-0118aa62229a" alt="아이템 목록 페이지" />   |

<br>
<br>

## ⚙ 프로젝트 기능 소개

- **Next.js 프레임워크**로 구성된 프로젝트입니다.
- Riot Games API를 활용하여 리그 오브 레전드의 게임 정보를 다양한 렌더링 방식(SSG, SSR, CSR, ISR)으로 구현합니다.
- **TanStack Query**를 사용하여 비동기 데이터 요청 및 캐싱 기능으로 서버 데이터를 효율적으로 관리합니다.
- **Tailwind CSS**를 사용하여 반응형 디자인을 적용하고, **App Router**을 이용해 페이지 간 네비게이션을 처리합니다.
- **Fetch API**를 활용하여 네이티브 브라우저 기능을 사용한 가벼운 네트워크 요청을 처리하고, 별도의 라이브러리 없이 간편하게 데이터 가져오기를 구현합니다.


<br>
<br>

## 🚀 프로젝트 회고

- ### [[트러블 슈팅] 배포하니까 에러가 바뀌었다?! (ENV를 잘 작성하자)](https://llddang-blog.tistory.com/84)
<br>
<br>

## 📁 프로젝트 구조
```
📦 nextjs-riot-app
├─ .github
├─ public
└─ src
   ├─ app
   │  ├─ api/rotation
   │  ├─ champions
   │  │  └─ [id]
   │  ├─ items
   │  ├─ rotation
   │  ├─ error.tsx
   │  ├─ globals.css
   │  ├─ layout.tsx
   │  ├─ loading.tsx
   │  ├─ not-found.tsx
   │  └─ page.tsx
   ├─ components
   │  ├─ features
   │  │  ├─ champion-card.tsx
   │  │  ├─ champion-detail-background.tsx
   │  │  ├─ champion-list.tsx
   │  │  └─ item-card.tsx
   │  └─ layouts
   │     └─ header
   ├─ config
   ├─ constants
   ├─ lib
   │  ├─ api
   │  ├─ hooks
   │  └─ utils
   └─ types
```

<br>
<br>

## 🧶 기술 스택
<div align="left">

### Development
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tanstackquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> 
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&amp;logo=Tailwind CSS&amp;logoColor=white">


</div>
