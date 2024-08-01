## transform-object

### Animation

- tick
  window.requestAnimationFrame(callback: FrameRequestCallback)
  캔버스 랜더링 최적화 인터벌 메소드

  랜더링 애니메이션 타임 관리1
  Date.now()를 통한 timestamp 계산

  랜더링 애니메이션 타임 관리2
  THREE.Clock() 사용

  ### [THREE.Clock](https://threejs.org/docs/index.html?q=clock#api/en/core/Clock)

- getDelta()
  <br/>
  이전에 호출된 getDelta 메소드와의 경과 시간(초)
  ex) 매 프레임마다 호출하는 경우 0.00xxx 초

- getElapseTime()
  <br/>
  Clock이 호출된 이후의 경과 시간(초)
  ex) 매 프레임마다 호출하는 경우 값이 계속 증가

### [GSAP (GreenSock Animation Platform)](https://gsap.com/docs/v3/GSAP/)

- 오브젝트 애니메이션 라이브러리
