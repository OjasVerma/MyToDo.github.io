function myfun(){
    localStorage.clear()
    console.clear()
    let a = document.getElementById('title').value;
    let b = document.getElementById('desc').value;
    let c = document.getElementById('list').value;
    if (b.length == 0){
        alert('Please enter a valid task !')
    }
    else{
        if (c == 1){
            localStorage.setItem('task#1',b)
            document.getElementById('t1').innerHTML = localStorage.getItem('task#1');
            myObj = {
                'title':a,
                'desc': b
            }
            alert(JSON.stringify(myObj))
        }
        else if (c ==2){
            localStorage.setItem('task#2',b)
            document.getElementById('t2').innerHTML = localStorage.getItem('task#2');;
            myObj = {
                'title':a,
                'desc': b
            }
        }
        else if (c ==3){
            localStorage.setItem('task#3',b)
            document.getElementById('t3').innerHTML = localStorage.getItem('task#3');;
            myObj = {
                'title':a,
                'desc': b
            }
        }
        else if (c ==4){
            localStorage.setItem('task#4',b)
            document.getElementById('t4').innerHTML = localStorage.getItem('task#4');;
            myObj = {
                'title':a,
                'desc': b
            }
        }
        else if (c ==5){
            localStorage.setItem('task#5',b)
            document.getElementById('t5').innerHTML = localStorage.getItem('task#5');;
            myObj = {
                'title':a,
                'desc': b
            }
        }
    }
    alert('Your Tasks are Up to Date !')
    
    
}
function del1(){
    document.getElementById('t1').innerHTML = '';
}
function del2(){
    document.getElementById('t2').innerHTML = '';
}
function del3(){
    document.getElementById('t3').innerHTML = '';
}
function del4(){
    document.getElementById('t4').innerHTML = '';
}
function del5(){
    document.getElementById('t5').innerHTML = '';
}