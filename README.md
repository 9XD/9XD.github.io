# 9XD.github.io

[9XD](9XD.github.io)(9X년생 개발자 모임)의 블로그 입니다.

## 차례

0. 들어가며
1. brew 설치하기
2. 루비 설치하기
3. 마크다운으로 포스트 작성하기
4. yaml 양식과 마크다운으로 포스트 작성하기
5. 서버를 구동하여 포스트 확인하기

### 0. 들어가며

- 본 방법은 macOS 에서 루비 2.3.1 버전으로 작성되었습니다.
- `gulp` 명령어를 사용하기 위해서는 nodejs, Python 2.x 버전이 필요합니다. 

### 1. brew 설치하기

[brew](http://brew.sh/)는 macOS용 패키지 관리자 입니다. [brew 웹사이트](http://brew.sh/)에 나와있는 최신 명령어를 붙여넣어 설치합니다 (잦은 패치로 인하여 명령어가 자주 바뀐다고 알려져 있습니다).

### 2. 루비 설치하기

[Jekyll](http://jekyllrb.com/)은 [루비](http://ruby-lang.org/)를 기반으로 작성되어 있기 때문에 사용하려면 루비를 설치해야 합니다. 터미널을 열고 다음과 같은 명령어를 이용하여 루비를 설치합니다:

```
$ brew install --update ruby
```

설치가 완료되면 다음과 같은 명령어를 이용하여 설치된 루비의 버전을 확인할 수 있습니다.

```
$ ruby -v
ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]
```

### 3. 프로젝트 복제하기 및 의존 패키지 설치하기

작업할 폴더에서 다음과 같은 명령어를 이용하여 프로젝트를 클론한 후, 그 폴더로 이동합니다:

```
~ $ git clone https://github.com/9XD/9XD.github.io.git
~ $ cd 9XD.github.io
~/9XD.github.io $
```

프로젝트 폴더 내에서 다음 `bundle` 명령어를 사용하여 의존 패키지들을 설치합니다.

```
$ bundle install
```

### 4. yaml 양식과 마크다운으로 포스트 작성하기

[마크다운](https://gist.github.com/ihoneymon/652be052a0727ad59601)으로 작성된 포스트는 `_posts` 에 저장합니다. 파일이름은 다음과 같은 형식으로 이루어져 있습니다:

```
YYYY-MM-DD-파일명.markdown
```

파일명은 상관없으나, 날짜의 경우 빌드 시 `/2016/10/20/post.html` 식으로 디렉토리 구조가 되기 때문에 형식에 맞추어주어야 합니다.

일반적인 마크다운 파일과 달리, 문서 최상단에 대시(`-`) 3개로 감싸지는 yaml을 작성해야 합니다. 다음 예시와 같이 문서의 yaml과 함께 마크다운으로 블로그 포스트 내용을 작성합니다:

```
---
layout: post
title: 예시 9XD 포스트
desc: "9xd example post description"
keywords: "jekyll,blog,first,test,9xd,meetup"
date: 2016-10-20
categories: [meetup]
tags: [blog]
--- 

예시 9XD 포스트 내용문입니다... 로렘 입썸 돌로르 싯 아멧...
```

### 5. 서버를 구동하여 포스트 확인하기

서버를 구동하여 작성한 포스트를 확인할 수 있습니다. 다음과 같은 명령어를 사용하여 실행합니다:

```shell
jekyll serve
```

만약 실시간으로 변경사항을 확인하고 싶으면 `--watch` 옵션을 사용합니다:

```shell
jekyll serve --watch
```

이제 즐겁게 포스팅을 하면 된다!
