// script.js
window.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('container');

    // transcription.txt 파일이 현재 폴더에 있다고 가정
    fetch('transcription.txt')
        .then(response => response.text())
        .then(text => {
            const transcripts = text.split('\n'); // 전사를 배열로 변환

            for (let i = 0; i <= 49; i++) {
                const section = document.createElement('div');
                section.className = 'section';

                const alignImg = document.createElement('img');
                alignImg.src = `data/${i}_align.png`;  // data 폴더 내의 이미지
                section.appendChild(alignImg);

                const specImg = document.createElement('img');
                specImg.src = `data/${i}_spec.png`;  // data 폴더 내의 이미지
                section.appendChild(specImg);

                const audio = document.createElement('audio');
                audio.controls = true;
                audio.src = `data/${i}.wav`;  // data 폴더 내의 오디오 파일
                section.appendChild(audio);

                const transcript = document.createElement('p');
                transcript.textContent = transcripts[i];
                section.appendChild(transcript);

                container.appendChild(section);
            }
        });
});
