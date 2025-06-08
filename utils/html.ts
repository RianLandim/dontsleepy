export const html = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detector Facial com face-api.js</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Detector Facial</h1>
        <button id="start-camera" class="btn">Ativar Câmera</button>
        <div class="video-container">
            <video id="video" width="720" height="560" autoplay muted></video>
            <canvas id="canvas" width="720" height="560"></canvas>
        </div>
    </div>

    <!-- Carregando as bibliotecas -->
    <script src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"></script>
<script src="drowsiness-detector.js"></script>
    <script src="script.js"></script>
</body>
</html>
`