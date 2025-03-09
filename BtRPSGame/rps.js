var round = 0
var winscore = 0
var losescore = 0
var alwaysscore = 0
let loglist = document.getElementById("log-list-page")
var messagelog = "<h1 style='text-align: center;margin-top: 20%;'>Not Found</h1>"

// 0 ค้อน   1 กรรไกร    2 กระดาษ

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

function openModal(){
    document.getElementById("modal").style.display = "flex";
}

function addRound(){
    round += 1
    // if(round==1){
    //     messagelog = ""
    //     loglist.innerHTML = messagelog
    // }
}

function setplay(bot,game){
    if(game==0){
        document.getElementById("me").src = "/picture/rock.png";
    }else if(game==1){
        document.getElementById("me").src = "/picture/scissors.png";
    }else{
        document.getElementById("me").src = "/picture/paper.png";
    }
    if(bot==0){
        document.getElementById("bot").src = "/picture/rock.png";
    }else if(bot==1){
        document.getElementById("bot").src = "/picture/scissors.png";
    }else{
        document.getElementById("bot").src = "/picture/paper.png";
    }
}


function addloglist(me,bot){

    //win rock Scissors
    if(me=="0"&&bot==1){
        loglist.innerHTML += "<div class='log-list'><p>R"+round+"</p><img src='/picture/rock.png' class='log-img'><p>Win</p><img src='/picture/Scissors.png' class='log-img'></div>"    
    }
    //win Scissors paper
    else if(me=="1"&&bot==2){
        loglist.innerHTML += "<div class='log-list' ><p>R"+round+"</p><img src='/picture/Scissors.png' class='log-img'><p>Win</p><img src='/picture/paper.png' class='log-img'></div>" 
    }
    //win paper rock
    else if(me=="2"&&bot==0){
        loglist.innerHTML += "<div class='log-list'><p>R"+round+"</p><img src='/picture/paper.png' class='log-img'><p>Win</p><img src='/picture/rock.png' class='log-img'></div>" 
    }
    //draw 
    else if(bot==me){
        if(me==0){
            loglist.innerHTML += "<div class='log-list' ><p>R"+round+"</p><img src='/picture/rock.png' class='log-img'><p>Draw</p><img src='/picture/rock.png' class='log-img'></div>" 
        }else if(me==1){
            loglist.innerHTML += "<div class='log-list' ><p>R"+round+"</p><img src='/picture/Scissors.png' class='log-img'><p>Draw</p><img src='/picture/Scissors.png' class='log-img'></div>" 
        }else{
            loglist.innerHTML += "<div class='log-list'><p>R"+round+"</p><img src='/picture/paper.png' class='log-img'><p>Draw</p><img src='/picture/paper.png' class='log-img'></div>" 
        }
    }
    //lose rock paper
    else if(me=="0"&&bot==2){
        loglist.innerHTML += "<div class='log-list' ><p>R"+round+"</p><img src='/picture/rock.png' class='log-img'><p>Lose</p><img src='/picture/paper.png' class='log-img'></div>"
    }
    //lose Scissors rock
    else if(me=="1"&&bot==0){
        loglist.innerHTML += "<div class='log-list' ><p>R"+round+"</p><img src='/picture/Scissors.png' class='log-img'><p>Lose</p><img src='/picture/rock.png' class='log-img'></div>"
    }
    //lose paper Scissors
    else{
        loglist.innerHTML += "<div class='log-list' ><p>R"+round+"</p><img src='/picture/paper.png' class='log-img'><p>Lose</p><img src='/picture/Scissors.png' class='log-img'></div>"
    }
}


function playGame(game){
    let bot = Math.floor(Math.random()*3)
    if(game=="0"&&bot==1){
        winscore += 1
        document.getElementById("result").innerHTML = "<p class='result-p' style='color: yellow;'>Win</p>"
    }else if(game=="1"&&bot==2){
        winscore += 1
        document.getElementById("result").innerHTML = "<p class='result-p' style='color: yellow;'>Win</p>"
    }else if(game=="2"&&bot==0){
        winscore += 1
        document.getElementById("result").innerHTML = "<p class='result-p' style='color: yellow;'>Win</p>"
    }else if(game==bot){
        alwaysscore += 1
        document.getElementById("result").innerHTML = "<p class='result-p' style='color: rgb(107, 107, 219);'>Draw</p>"
    }else{
        losescore += 1
        document.getElementById("result").innerHTML = "<p class='result-p' style='color:rgb(255, 9, 9);'>Lose</p>"
    } 
    setplay(bot,game)
    addRound()
   
document.getElementById("score").innerHTML = "Round : "+round+" Win : "+winscore+" Lose : "+losescore+" Draw : "+alwaysscore
addloglist(game,bot)
}

document.getElementById("score").innerHTML = "Round : "+round+" Win : "+winscore+" Lose : "+losescore+" Draw : "+alwaysscore
document.getElementById("result").innerHTML = "<p class='result-p' >?</p>"
loglist.innerHTML = messagelog




