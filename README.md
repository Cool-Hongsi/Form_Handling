# Form Handling

## 소개

MSW 라이브러리를 활용하여 Mock 데이터를 관리하고, 폼 핸들링과 테이블 렌더링을 구현한 리액트 프로젝트 입니다. 타입스크립트를 사용하여 데이터를 핸들링하고, 리덕스를 사용하여 상태 관리를 했습니다. 추가적인 라이브러리 사용을 줄이고, 순수 자바스크립트와 CSS (SCSS)로 구현할 수 있도록 노력했습니다.

## 웹사이트

[Form Handling](https://d20tgidcli6bnz.cloudfront.net)

## 구조

```
src
├── api
├── component (button / input / modal / select)
├── const (constant string)
├── layout
│     ├── form
│     ├── header
│     └── table
├── mock (mock data for testing)
├── model (order)
├── redux (order)
├── resource (asset / font)
├── store (store configuration)
└── util

[ 각각의 테스팅 코드는 디렉토리 `__test__` 폴더에 있습니다. ]
```

## 실행

1. git clone `https://github.com/Cool-Hongsi/Form_Handling.git`  
   (env 파일은 프로젝트에 크게 관여하지 않으므로 레포지토리에 추가하였습니다.)
2. Type `npm install` (필요한 Package 설치)
3. Type `npm run dev` (development 환경에서 실행)
4. Type `npm run test:ci` (testing code 실행)

## 모델 (Order)

```
export interface ILoadPlace {
  name: string;
  address: string;
  date: string;
}

export interface IOrder {
  name: string;
  phoneNumber: string;
  fromDate: string;
  toDate: string;
  item: string;
  itemDetail: string;
  supply: string;
  supplyDetail: string | null;
  address: string;
  loadPlace: ILoadPlace[];
  seqNo?: number;
}
```

## 반응형 기준

- sm (~ 576)
- md (577 ~ 992)
- lg (993 ~)

## State 관리

- React Hook (Local State)
- Redux (Global State)
- Saga (Middleware)

## UI

- Styled Component

## Testing

- Jest
- Testing-Library

## Bundling

- Webpack
- Babel
