
var cnt =1;
var arr=['','','','','','','','','']        
var human = document.getElementById('trun_x').style
var automatic = document.getElementById('trun_o').style

// document.getElementById('trun').innerText = 'X trun'
human.backgroundColor = "#334a89"
human.color = "white"

function get_data(n){
    if(!winner()){    
        document.getElementById('b'+n).value='X';
        document.getElementById('b'+n).disabled = true;
        arr[n]='X';
        console.log(arr);
        winner()
            
        if(!winner() && cnt!=9){    
            human.backgroundColor = "rgb(122, 151, 233)"
            human.color = "darkslategray"
            automatic.backgroundColor = "#334a89"
            automatic.color = "white"
        }

        if(!winner() && cnt==9){
            document.getElementById('winner').innerText = "Match Draw";
        }

        if(!winner() && cnt != 9){
            setTimeout(() => {
                auto()
            }, 1000);
        }
        
        cnt++;

        
    }
}
        
function auto() {
    if(cnt<10){
        while(true){
            a=Math.floor(Math.random()*9)
            if(arr[a] == ''){
                
                document.getElementById('b'+a).value='O';
                document.getElementById('b'+a).disabled = true;
                arr[a]='O';
                winner()


                if(!winner()){
                    automatic.backgroundColor = "rgb(122, 151, 233)"
                    automatic.color = "darkslategray"
                    human.backgroundColor = "#334a89"
                    human.color = "white"
                }

                cnt++;
                console.log(arr);
                break;
            }
        }
    }
}
        
function reset(){   
    for(var i = 0; i <= 8; i++){
        document.getElementById('b'+i).value=''
        document.getElementById('winner').innerText = " ";
        document.getElementById('b'+i).disabled = false;
        arr[i]='';
        automatic.backgroundColor = "rgb(122, 151, 233)"
        automatic.color = "darkslategray"
        human.backgroundColor = "#334a89"
        human.color = "white"
    }
    cnt=1;
}

function winner(){
    var b1 = document.getElementById('b0').value ;
    var b2 = document.getElementById('b1').value ;
    var b3 = document.getElementById('b2').value ;
    var b4 = document.getElementById('b3').value ;
    var b5 = document.getElementById('b4').value ;
    var b6 = document.getElementById('b5').value ;
    var b7 = document.getElementById('b6').value ;
    var b8 = document.getElementById('b7').value ;
    var b9 = document.getElementById('b8').value ;

    if (b1 == 'X' && b2 == 'X' && b3 == 'X' ||
        b1 == 'X' && b4 == 'X' && b7 == 'X' ||  
        b7 == 'X' && b8 == 'X' && b9 == 'X' || 
        b3 == 'X' && b6 == 'X' && b9 == 'X' || 
        b2 == 'X' && b5 == 'X' && b8 == 'X' || 
        b4 == 'X' && b5 == 'X' && b6 == 'X' || 
        b1 == 'X' && b5 == 'X' && b9 == 'X' || 
        b3 == 'X' && b5 == 'X' && b7 == 'X' )
        {
            document.getElementById('winner').innerText = "X is Winner";
            return true;
        }   
        
    if (b1 == 'O' && b2 == 'O' && b3 == 'O' ||
        b1 == 'O' && b4 == 'O' && b7 == 'O' ||
        b7 == 'O' && b8 == 'O' && b9 == 'O' ||
        b3 == 'O' && b6 == 'O' && b9 == 'O' ||
        b2 == 'O' && b5 == 'O' && b8 == 'O' ||  
        b4 == 'O' && b5 == 'O' && b6 == 'O' ||
        b1 == 'O' && b5 == 'O' && b9 == 'O' ||
        b3 == 'O' && b5 == 'O' && b7 == 'O' )
        {   
            document.getElementById('winner').innerText = "O is Winner";
            return true;
        }
}


    