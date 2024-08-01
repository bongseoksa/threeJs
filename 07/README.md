## Fullscreen and resizing

### Fullscreen

- 캔버스 사이즈를 브라우저 viewport 사이즈로 설정
  <br>
  window.innerWidth, window.innerHeight
- 브라우저 스타일 포맷 및 초기화

### Resize

- window resize 이벤트 사용
- 리사이즈 설정 순서
  1. viewport 사이즈 확인
  2. [camera 비율 설정](https://threejs.org/docs/index.html?q=camera#api/en/cameras/PerspectiveCamera.updateProjectionMatrix)
  3. renderer 사이즈 설정

### PixelRatio

- 소프트웨어상 1px에 적용되는 GPU 픽셀 matrix
  <br>
  ex) pixelratio: 3인 경우, 브라우저 상 1px에 실제로는 GPU에서 3x3 만큼의 그래픽을 랜더링함. 즉, 1px에 9번의 색상을 칠함
