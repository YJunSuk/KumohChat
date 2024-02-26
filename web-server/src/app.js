const express = require('express');
const axios = require('axios');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());

app.set('trust proxy', true); // 프록시 서버일 때 클라이언트 ip 주소 얻기위한 코드

app.get('/answers', (req, res) => {
    const { content } = req.query;
    const url = 'https://jsonplaceholder.typicode.com/todos/2'; // TODO: 챗봇 서버 URL로 변경하기
    const config = { params: { content: content } };
    const requestTime = new Date();

    res.status(200).send("데이터 메세지");

    // [요청 시간] [클라이언트 IP] [질문 내용] [HTTP 메소드] [요청 URL] [응답 코드] [처리 시간]
    /*
    const now = new Date();
    const fileName = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}.txt`;
    axios.get(url, config)
        .then(response => {
            const processTime = new Date() - requestTime;
            const decoded = '질문 내용'; // TODO: 디코딩된 질문 내용으로 수정하기(인코딩 방식 결정 필요)
            const logData = `${requestTime.toLocaleTimeString('it-IT')}  ${req.ip}  ${decoded}  ${req.method}  ${req.url}  200  ${processTime}ms\n`;

            fs.appendFile(`../logs/access/${fileName}`, logData, (err) => {
                if (err) {
                    res.sendStatus(500);
                }
            });
            
            // res.status(200).json(response.data)
            res.status(200).send("데이터");
        })
        .catch(e => {
            fs.appendFile(`../logs/error/${fileName}`, `${now.toLocaleString()}  ${e}\n`, (err) => {
                if (err) {
                    console.log(err);
                }
            });

            res.sendStatus(500);
        })
        */
})

app.use((req, res, next) => { // 제공하지 않는 URL 일 시
    res.sendStatus(404);
})

app.listen(3030, '0.0.0.0', () => {
    console.log("서버 실행..");
});