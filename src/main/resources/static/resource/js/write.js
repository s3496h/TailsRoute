/*등록한파일 미리보기*/
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');

    fileInput.addEventListener('change', (event) => {
        // 기존 미리보기 이미지 삭제
        preview.innerHTML = '';

        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (function (file) {
                return function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    preview.appendChild(img);
                };
            })(file);

            reader.readAsDataURL(file);
        }
    });
