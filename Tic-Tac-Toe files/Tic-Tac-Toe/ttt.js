let startButton = document.getElementById('startButton')
let playerTurn = ''
let virtualBoard = []
let inputPlr1 = document.getElementById('player1')
let inputPlr2 = document.getElementById('player2')
let specSpan = document.querySelectorAll('#tableRegion span')

let updateTitle = function(){
    if(playerTurn===inputPlr1.value){
        playerTurn = document.getElementById('player2').value
        document.getElementById('turnPlayer').innerText = playerTurn
    } else {
        playerTurn = inputPlr1.value
        document.getElementById('turnPlayer').innerText = playerTurn
    }
}

let disableRegion = function(reg){
    reg.style.cursor = 'default'
    reg.removeEventListener('click',gamemode)
}

let gamemode = function(event){
    
        event.preventDefault()
        let span = event.currentTarget
        let region = span.dataset.region
        let virtualBoardContent = region.split(".")
        let row = virtualBoardContent[0]
        let column = virtualBoardContent[1]
        let endGame = false
        let checking = function(event){
                    
            let span = event.currentTarget
            let region = span.dataset.region
            if(document.querySelector('span[data-region="0.0"]').innerText && document.querySelector('span[data-region="0.0"]').innerText===document.querySelector('span[data-region="0.1"]').innerText && document.querySelector('span[data-region="0.0"]').innerText===document.querySelector('span[data-region="0.2"]').innerText){
                document.querySelector('span[data-region="0.0"]').classList.add('win')
                document.querySelector('span[data-region="0.1"]').classList.add('win')
                document.querySelector('span[data-region="0.2"]').classList.add('win')
                
                endGame = true
            } else if(document.querySelector('span[data-region="1.0"]').innerText && document.querySelector('span[data-region="1.0"]').innerText===document.querySelector('span[data-region="1.1"]').innerText && document.querySelector('span[data-region="1.0"]').innerText===document.querySelector('span[data-region="1.2"]').innerText){
                document.querySelector('span[data-region="1.0"]').classList.add('win')
                document.querySelector('span[data-region="1.1"]').classList.add('win')
                document.querySelector('span[data-region="1.2"]').classList.add('win')
                
                endGame = true
            } else if (document.querySelector('span[data-region="2.0"]').innerText && document.querySelector('span[data-region="2.0"]').innerText===document.querySelector('span[data-region="2.1"]').innerText && document.querySelector('span[data-region="2.0"]').innerText===document.querySelector('span[data-region="2.2"]').innerText){
                document.querySelector('span[data-region="2.0"]').classList.add('win')
                document.querySelector('span[data-region="2.1"]').classList.add('win')
                document.querySelector('span[data-region="2.2"]').classList.add('win')
                
                endGame = true
            } else if (document.querySelector('span[data-region="0.0"]').innerText && document.querySelector('span[data-region="0.0"]').innerText===document.querySelector('span[data-region="1.0"]').innerText && document.querySelector('span[data-region="1.0"]').innerText===document.querySelector('span[data-region="2.0"]').innerText){
                document.querySelector('span[data-region="0.0"]').classList.add('win')
                document.querySelector('span[data-region="1.0"]').classList.add('win')
                document.querySelector('span[data-region="2.0"]').classList.add('win')
                
                endGame = true
            } else if (document.querySelector('span[data-region="0.1"]').innerText && document.querySelector('span[data-region="0.1"]').innerText===document.querySelector('span[data-region="1.1"]').innerText && document.querySelector('span[data-region="1.1"]').innerText===document.querySelector('span[data-region="2.1"]').innerText){
                document.querySelector('span[data-region="0.1"]').classList.add('win')
                document.querySelector('span[data-region="1.1"]').classList.add('win')
                document.querySelector('span[data-region="2.1"]').classList.add('win')
                
                endGame = true
            } else if (document.querySelector('span[data-region="0.2"]').innerText && document.querySelector('span[data-region="0.2"]').innerText===document.querySelector('span[data-region="1.2"]').innerText && document.querySelector('span[data-region="1.2"]').innerText===document.querySelector('span[data-region="2.2"]').innerText){
                document.querySelector('span[data-region="0.2"]').classList.add('win')
                document.querySelector('span[data-region="1.2"]').classList.add('win')
                document.querySelector('span[data-region="2.2"]').classList.add('win')
                
                endGame = true
            } else if (document.querySelector('span[data-region="0.0"]').innerText && document.querySelector('span[data-region="1.1"]').innerText===document.querySelector('span[data-region="0.0"]').innerText && document.querySelector('span[data-region="0.0"]').innerText===document.querySelector('span[data-region="2.2"]').innerText){
                document.querySelector('span[data-region="0.0"]').classList.add('win')
                document.querySelector('span[data-region="1.1"]').classList.add('win')
                document.querySelector('span[data-region="2.2"]').classList.add('win')
                
                endGame = true
            } else if (document.querySelector('span[data-region="0.2"]').innerText && document.querySelector('span[data-region="1.1"]').innerText===document.querySelector('span[data-region="0.2"]').innerText && document.querySelector('span[data-region="1.1"]').innerText===document.querySelector('span[data-region="2.0"]').innerText){
                document.querySelector('span[data-region="0.2"]').classList.add('win')
                document.querySelector('span[data-region="1.1"]').classList.add('win')
                document.querySelector('span[data-region="2.0"]').classList.add('win')
                
                endGame = true
            }
            return endGame
        }
    
        if(playerTurn===inputPlr1.value){
            console.clear()
            document.querySelector('span[data-region="' + region +'"]').innerText = "X"
            virtualBoard[row][column] = "X"
            console.table(virtualBoard)
            disableRegion(span)
            checking(event)
            console.log(endGame)
            if (endGame){
                document.getElementById('head2').innerHTML= playerTurn + ' venceu!'
            }
            else if(endGame!==true && virtualBoard.flat().includes('')){
            updateTitle()}else{
                
                document.querySelector('h2').innerHTML='Empate!'
            }

            
            
        } else{
            console.clear()
            document.querySelector('span[data-region="' + region +'"]').innerText = "O"
            virtualBoard[row][column] = "O"
            console.table(virtualBoard)
            disableRegion(span)
            checking(event)
            console.log(endGame)
            if (endGame){
                document.getElementById('head2').innerHTML= playerTurn + ' venceu!'
            }
            else if(endGame!==true && virtualBoard.flat().includes('')){
            updateTitle()}else{
                
                document.querySelector('h2').innerHTML='Empate!'
            }
        }
        
        
    }
    
let reboot = function(ev){
    console.clear()
    
    if(inputPlr1 && inputPlr2){
    virtualBoard = [["","",""],["","",""],["","",""]]
    document.querySelector('h2').innerHTML = 'O jogador da vez é: <span id="turnPlayer"></span>'
    document.getElementById('turnPlayer').innerText = inputPlr1.value
    playerTurn=inputPlr1.value
    specSpan.forEach(function (element){
        element.classList.remove('win')
        element.innerText=''
        element.addEventListener('click',gamemode)
    })
    }
    
    
}

startButton.addEventListener('click',reboot)