## Cameras

### [Perspective Camera](https://threejs.org/docs/index.html?q=camera#api/en/cameras/PerspectiveCamera)

- 원근감을 가지는 카메라

### [Orthographic Camera](https://threejs.org/docs/?q=camera#api/en/cameras/OrthographicCamera)

- 원근감이 없는 카메라

## Controls

### [OrbitControls(obj:cameraObj, domEl:HTMLDomElement)](https://threejs.org/docs/#examples/en/controls/OrbitControls)

- domEl에 이벤트를 등록하여 이벤트에 따라 obj를 움직임
  <br/>
  마우스 좌클릭 : rotation<br/>
  마우스 우클릭 : position<br/>
  마우스 휠 : zoom
  <br/>

- Damping
  <br/>
  Controls 의 속성
  <br/>
  가속과 마찰 공식을 통해 부드러운 애니메이션 동작을 도움
  <br/>
  매 프레임마다 update() 필요
