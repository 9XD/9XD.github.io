# 9XD.github.io
9XD(9X 개발자 모임)의 블로그 입니다.

## 로컬에서 서버 구동하기
- 본 방법은 OSX 기준으로 합니다.
- brew가 설치되어 있다고 가정합니다.
- 환경은 루비 2.3.1에서 테스트하였습니다. 
- 쓰고 나서 찾아보니 nodejs와 python2 버전 이상도 설치되어 있어야 한다고 합니다. 언제 쓰는 건지는 모르겠지만 설치해주세요.

### 루비를 설치하자
jekyll은 기본적으로 루비 기반이어서 루비를 설치해야 합니다.
터미널을 열고 

`brew install --update ruby`

명령어를 이용해 루비를 설치합니다.

### 프로젝트를 클론과 gem을 이용하여 패키지 설치
루비가 설치 완료 되면, 작업할 폴더에서

`git clone https://github.com/9XD/9XD.github.io.git`

을 이용해 프로젝트를 클론합니다.

클론 이후에는 프로젝트 폴더로 이동한 후 

`bundle install`

명령어를 사용하여 의존 패키지를 설치합니다.

### 마크다운을 작성하자
마크다운 폴더는 _posts에 위치한다. 파일이름은

`YYYY-MM-DD-파일이름.markdown`

과 같은 형식으로 이루어진다. 파일이름 부분은 상관 없지만 날짜 같은 경우는 형식에 꼭 맞춰주자! (날짜는 빌드 이후 디렉토리 구조가 된다.)
마크다운 작성법은 다루지 않을 것이지만, 다른 마크다운과 달리 주의할 점이 있다. 문서 최상단에 대시(-) 3개로 감싸지는 yaml을 작성해줘야 한다. 글보다는 다음 예시를 보면 이해 가능하다.
```
---
layout: post
title: 9XD 포스트 테스트입니다.
desc: "9xd testetstestestestsetestest"
keywords: "jekyll,blog,first,test,9xd,meetup"
date: 2016-06-14
categories: [meetup]
tags: [blog]
--- 
```
이런 느낌으로 상단에 적어준 뒤 아래에 내용을 적는다.

### 자 이제 진짜 서버를 구동해보자
자 마크다운 작성까지 끝냈다면 이제 진짜 서버를 구동해서 확인할 차례다.

```shell
gulp
```
`gulp`를 띄워 less컴파일, minify, uglify, image compress를 하고 서버를 실행시킨다.
html이나 less 파일을 고치면 gulp가 watch하고 있다가 자동으로 리프레시를 해 준다(`Browsersync`)

혹 빌드만 하고 싶다면 --watch 라는 옵션을 사용해 서버를 실행한 상태에서 변경사항을 바로바로 확인하면 된다.

```shell
jekyll serve --watch
```

이제 즐겁게 포스팅을 하면 된다!
