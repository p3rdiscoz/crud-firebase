function saveOnClick(){
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var age = document.getElementById('age');
    var salary = document.getElementById('salary');
    var gender;
    if (document.getElementById('gender1').checked) {
        gender = document.getElementById('gender1');
      }else if(document.getElementById('gender2').checked){
        gender = document.getElementById('gender2');
      }
   
    insertData(firstname.value, lastname.value, age.value, salary.value, gender.value);
}

function showData(){
    var firebaseRef = firebase.database().ref("Employee");
    firebaseRef.once('value').then(function(dataSnapshot){
        //console.log(dataSnapshot.val());
        dataSnapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            //console.log(childData);

        });
    });
}

function insertData(firstname, lastname, age, salary, gender){
    var firebaseRef = firebase.database().ref("Employee");
    firebaseRef.push({
        firstname: firstname,
        lastname: lastname,
        age: age,
        salary: salary,
        gender: gender
    });
    console.log("Insert Success");
    showData();
}