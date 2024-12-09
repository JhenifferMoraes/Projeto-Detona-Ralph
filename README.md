<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=a02713&height=150&section=header"/>

# Projeto Jogo do Detona Ralph com Javascript 
Neste incrível projeto disponibilizado pela Dio para os participantes do Bootcamp Ri Happy - Front-end do Zero, a principal ideia era aprendermos mais sobre HTML, CSS e JavaScript na prática e fixarmos ainda mais diversos conceitos vistos durante o curso principalmente se tratando do JS. Também era opcional que cada aluno acrescentasse em seu projeto o seu "próprio toque". Sendo assim, fiz algumas melhorias que vi necessidade durante o desenvolvimento, tanto em questões estéticas quanto de funcionamento.

###  <img width=5% src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI9MvBQOlRz6C15np_kc5MW6Kp0Ijk_7H92dW9JnjfO8WUwd7DVVc9mSPhRy4-kmuVlDMezD8yaL6X5q1pHYw1vd7ZM6XHjKhccDoZSnsPhCSwwwstS8KGB1DlKSfyelSQnoTzYE2JjhY/s1600/1.gif"/> Música na página  
Um dos toques de experiência acrescentados foi uma melodia ao entrar na página. Durante o processo, verifiquei que era necessário algo que fizesse com que os áudios funcionassem perfeitamente em todos os navegadores e automaticamente ao iniciar a página. Porém, em alguns navegadores, existem ferramentas que bloqueiam os áudios e, sendo assim, desenvolvi esta estrutura abaixo:
```
No HTML
  <!-- 🔴 Elemento de áudio com o ID "background-music" -->
    <audio id="background-music" autoplay loop>
        <source id="background-music" src="./src/audios/HoliznaCC0 - Adventure Begins Loop.wav" type="audio/mav">
        <source id="background-music" src="./src/audios/HoliznaCC0 - Adventure Begins Loop.ogg" type="audio/ogg">
        <source id="background-music" src="./src/audios/HoliznaCC0 - Adventure Begins Loop.mp3" type="audio/mp3">
        Seu navegador não suporta o elemento audio.
    </audio>
<!-- 🔴 botão para caso a musica não entre da mesma forma" -->
  <button onclick="document.getElementById('background-music').play()">Reproduzir Música</button> 

```
```
No JS
window.onload = function() {
    let music = document.getElementById('background-music');
    
    // 🔴 Tenta tocar a música
    music.play().then(() => {
        // 🔴 Depois de começar a tocar, desmuta o áudio
        music.muted = false;
    }).catch((error) => {
        console.log('Erro ao tentar tocar a música: ', error);
    });
};
```

###  <img width=5% src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI9MvBQOlRz6C15np_kc5MW6Kp0Ijk_7H92dW9JnjfO8WUwd7DVVc9mSPhRy4-kmuVlDMezD8yaL6X5q1pHYw1vd7ZM6XHjKhccDoZSnsPhCSwwwstS8KGB1DlKSfyelSQnoTzYE2JjhY/s1600/1.gif"/>Atualização automática da página
Foi adicionada uma atualização automática após o usuário vencer o jogo. O código implementado foi o seguinte:
```
function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if(state.values.curretTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over! A sua pontuação foi: " + state.values.result + " pontos. Seu Game irá recarregar automaticamente");
        location.reload(); // 🔴 Recarrega a página automaticamente
    }
}
```
### <img width=5% src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI9MvBQOlRz6C15np_kc5MW6Kp0Ijk_7H92dW9JnjfO8WUwd7DVVc9mSPhRy4-kmuVlDMezD8yaL6X5q1pHYw1vd7ZM6XHjKhccDoZSnsPhCSwwwstS8KGB1DlKSfyelSQnoTzYE2JjhY/s1600/1.gif"/> Mudanças no CSS
Na parte visual, decidi criar um "efeito de vidro" nas caixas do jogo, aumentar o tamanho e realizar alguns ajustes de centralização. Além disso, substituí minha imagem por um GIF, tornando a experiência mais divertida:
``` 
.square{
    height: 180px;
    width: 180px;
    background: rgba(255, 255, 255, 0.2); /* Fundo semi-transparente */
    backdrop-filter: blur(10px); /* Efeito de vidro fosco */
    -webkit-backdrop-filter: blur(10px); /* Compatibilidade com navegadores WebKit */
    border-radius: 10px; /* Bordas arredondadas para suavizar */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Sombra para destaque */
    border: 2px solid rgba(255, 255, 255, 0.3); /* Borda semi-transparente */
}

.enemy{
    background-image: url("../images/ralph.gif");
    background-size: cover;
    background-position: center; /* Centraliza a imagem */
    filter: blur(1px); /* Aplica o efeito de desfoque */
    -webkit-filter: blur(1px); /* Compatibilidade com navegadores WebKit */
} 
```

### 📋O que foi necessário para realizar este projeto

O projeto consistiu em configurar e executar um ambiente de desenvolvimento utilizando ferramentas essenciais. Primeiramente, foi necessário instalar o Git para o controle de versões e o Node.js para rodar a aplicação.

Uma IDE (Ambiente de Desenvolvimento Integrado) foi configurada para facilitar a codificação, e, neste caso, optei pelo Visual Studio Code (VSCode). O projeto foi executado via a extensão do VSCode chamada Live Server. Após o desenvolvimento, o código foi versionado e compartilhado em um repositório no GitHub, garantindo o backup e o gerenciamento das versões do projeto.

Abaixo, deixarei alguns links para downloads oficiais de tudo o que foi utilizado para Windows.

```
 Visual Studio Code - https://code.visualstudio.com/
```
```
 GitBash - https://git-scm.com/downloads/win
```
```
 Node.js - https://nodejs.org/pt
```
```
 ID da extensão Live Server - ritwickdey.LiveServer
```
### 🪄Link do Projeto
Clique [aqui](https://jheniffermoraes.github.io/projeto-detona-ralph/) e acesse o projeto!

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=a02713&height=100&section=footer"/>
