module.exports = {
    apps: [
        {
            name: "name",
            script: "node_modules/next/dist/bin/next",
            args: "start",
            autorestart: true, // 자동 재실행 여부
            // watch: true, // 재시작, 파일이 바뀌는 경우 모니터링
            instances: 2, // 인스턴스를 띄우는 갯수
            exec_mode: "cluster", // 2개 이상의 클러스터를 실행하기 위해 지정
            wait_ready: true, // 앱이 실행이 완료 되었는지 커맨드가 대기하다 실행 완료 신호를 받으면 커맨드 대기가 풀림
            listen_timeout: 50000, // 앱 실행신호까지 기다릴 최대시간 ms단위 50초
            kill_timeout: 5000, //새로운 프로세스 실행이 완료된 후 예전 프로세스를 교체하기까지 기다릴 시간  5초
            max_memory_restart: "1G", // 클러스터의 메모리 사이즈가 지정값을 넘어가면 재시작
            // 개발환경 설정
            env: {
                NODE_ENV: "development",
                PORT: "80"
            },
            // 운영환경 설정 실행시 --env production 옵션으로 지정할 수 있다.
            env_production: {
                NODE_ENV: "production",
                PORT: "80"
            },
        },
    ],
};