const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        let painting = false;
        let color = '#000000';
        let brushSize = 5;

        function startPosition(event) {
            painting = true;
            draw(event);
        }

        function endPosition() {
            painting = false;
            context.beginPath();
        }

        function draw(event) {
            if (!painting) return;
            context.lineWidth = brushSize;
            context.lineCap = 'round';
            context.strokeStyle = color;

            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            context.lineTo(x, y);
            context.stroke();
            context.beginPath();
            context.moveTo(x, y);
        }

        function changeColor(event) {
            color = event.target.value;
        }

        function changeBrushSize(event) {
            brushSize = event.target.value;
        }

        function clearCanvas() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

        function saveCanvas() {
            const image = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = image;
            link.download = 'canvas.png';
            link.click();
        }

        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', endPosition);
        canvas.addEventListener('mousemove', draw);

        const colorInput = document.getElementById('color');
        colorInput.addEventListener('change', changeColor);

        const brushSizeInput = document.getElementById('brush-size');
        brushSizeInput.addEventListener('input', changeBrushSize);

        const clearButton = document.getElementById('clear-button');
        clearButton.addEventListener('click', clearCanvas);

        const saveButton = document.getElementById('save-button');
        saveButton.addEventListener('click', saveCanvas);