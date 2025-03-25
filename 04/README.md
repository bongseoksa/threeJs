## transform-object

### position

- 오브젝트 좌표 데이터
- x, y, z를 가지는 Vector 값

설정 방법1
obj.position.x
obj.position.y
obj.position.z

설정 방법2
obj.position.set(x, y, z)

### 회전

rotation

- 오브젝트의 회전 데이터 (world 좌표계가 아님)

rotation.reorder()

- 회전 순서 정의 메소드
- rotaion의 경우 로컬좌표계 기준으로 동작하므로 회전 순서에 따라 보이는 상태가 다름
- rotation 설정 순서에 관계없이 정해진 순서대로 회전시키는 기능

설정 방법1
obj.rotation.x = Math.PI

설정 방법2
obj.rotation.set(x, y, z)
