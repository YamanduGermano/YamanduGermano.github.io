document.addEventListener('DOMContentLoaded', function() {
    modoRua = this.querySelector("#modoRua")
    iconeMR = this.querySelector('#modo')
    overlayModoRua = this.querySelector('#overlayModoRua')
    overlay = this.querySelector('#overlay')
    textoMR = this.querySelector('#texto_MR')

    mRStatus = localStorage.getItem('modoRuaStatus')
    if(mRStatus==null){
        localStorage.setItem('modoRuaStatus',false)
    }



    if (mRStatus){
        modoRua.querySelector('img').src = '../assets/Modo RuaAtivo.svg'

    }

    modoRua.addEventListener('click', function(e) {

        // Mudar variável de controle do Modo Rua
        mRStatus = !mRStatus
        
        localStorage.setItem('modoRuaStatus',mRStatus)
        // Mudar imagem do icone do Modo Rua
        
        if (mRStatus){
            modoRua.querySelector('img').src = '../assets/Modo RuaAtivo.svg';
            iconeMR.src = '../assets/iconeInativo.svg';
            textoMR.innerHTML = "Modo Rua desativado"
            overlayModoRua.classList.add('active');
            overlay.classList.add('active');
            setTimeout(() => {
                overlayModoRua.classList.remove('active');
                overlay.classList.remove('active');
            }, 1000);
            
    
        } else {
            modoRua.querySelector('img').src = '../assets/modo-Rua-Inativo.svg'
            iconeMR.src = '../assets/iconeAtivo.svg'
            textoMR.innerHTML = "Modo rua Ativado"
            overlayModoRua.classList.add('active');
            overlay.classList.add('active');
            setTimeout(() => {
                overlayModoRua.classList.remove('active');
                overlay.classList.remove('active');
            }, 1000);
            
            

        }
        e.stopPropagation()
        
        console.log('a')
    })

    drawer = this.querySelector('#drawer')
    drawer.addEventListener('click',function(){
        drawer.classList.toggle('active')
    })


    if (modoRua){
        iconeMR.src = '../assets/iconeAtivo.svg'
    } else{
        iconeMR.src = '../assets/iconeInativo.svg';
    }

    mapa = this.querySelector('#mapa')
    features = this.querySelector('#mapaFeatures')
    
    pins = JSON.parse(localStorage.getItem('pins'))
    function loadPins() {
        Object.values(pins).forEach(pinData => {
            var pin = document.createElement('img');
            pin.src = pinData.src;
            pin.classList.add('pin');
            pin.style.left = pinData.left;
            pin.style.top = pinData.top;
            features.appendChild(pin);
        });
    }

    loadPins();

    input = this.querySelector('input')
    navRotas = this.querySelector('#navRotas')
    input.addEventListener('focus', (e)=>{
        if (!('active' in navRotas.classList)){
            navRotas.classList.add('active')
        }
    })

    x = this.querySelector('#fecharRotas')
    x.addEventListener('click',()=>{
        navRotas.classList.remove('active')
    })
})