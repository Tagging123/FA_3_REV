var getSignin = localStorage.getItem('Signed')

if (getSignin == 0){
    // hide log out button
    // show sign in & up button
    // show dialog box

    // $(document).ready(function(){
    //     $('.header .top .inout').css({'display':'none'})
    //     $('.header .hidding .hidding_inner ul .inout').css({'display':'none'})
    // })

    document.getElementById('account_pc').style.display = 'none'
    document.getElementById('account_mobile').style.display = 'none'
    document.getElementById('inout_button_pc').style.display = 'flex';
    document.getElementById('inout_button_mobile').style.display = 'block';
    document.querySelector('.ui-dialog').style.display = 'block',!important;

}

else if (getSignin == 1){
    // show log out button
    // hide sign in & up button
    // hide dialog box

    let get_account_name= localStorage.getItem('User Name')

    document.getElementById('account_pc').title = get_account_name
    document.getElementById('account_mobile').title = get_account_name
    document.getElementById('account_pc').style.display = 'flex'
    document.getElementById('account_mobile').style.display = 'flex'
    document.getElementById('inout_button_pc').style.display = 'none';
    document.getElementById('inout_button_mobile').style.display = 'none';

    let get_local_username = localStorage.getItem('User Name')

    document.getElementById('nick_pc').innerHTML = get_local_username.slice(0,1)
    document.getElementById('nick_mobile').innerHTML = get_local_username.slice(0,1)
}

function signup(){
    let take_signup_username = document.getElementById('signup_username').value;
    let take_signup_password = document.getElementById('signup_password').value;

    let set_local_username = localStorage.setItem('User Name', take_signup_username);
    let set_local_password = localStorage.setItem('Password', take_signup_password);

    alert("You successfully createed an account :)")
}

    
function signin(){

    let get_local_username = localStorage.getItem('User Name');
    let get_local_password = localStorage.getItem('Password')

    let sign_name = document.getElementById('signin_username').value;
    let sign_pass = document.getElementById('signin_password').value;

    if (get_local_username == undefined){
        alert('You don\'t have any account yet')
    }
    else if (sign_name == get_local_username && sign_pass == get_local_password){
        localStorage.setItem('Signed', 1)
        window.open('index.html')
    }
    else if (sign_name != get_local_username && sign_pass != get_local_password){
        alert("Sorry, your Username and Password is wrong :(")
    }
    else if (sign_name != get_local_username){
        alert("Sorry, your Username is wrong :(")
    }
    else{
        alert("Sorry, your password is wrong :(")
    }
}

function logout(){
    localStorage.setItem('Signed', 0)
    localStorage.clear()
    window.open('index.html','_self')
}