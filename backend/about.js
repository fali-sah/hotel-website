
const allAbout = document.getElementById('allAbout');

db.collection("room").get().then((querySnapshot) => {
    let html ='';
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        
        // console.log(${doc.id} => ${doc.data()});

        var fulldesc = doc.data().description;
        
        html+=`<div class="row"> 
        <div class="col-md-6 img-cols">
            <div class="img-col">
                <img class="img-fluid" src="${doc.data().image}">
            </div>
        </div>
        <div class="col-md-6 content-cols">
            <div class="content-col">
                <h3>${doc.data().name}</h3>
                <p> ${fulldesc}</p>
    
            </div>
        </div>
    </div>
    
    <hr>
`
allAbout.innerHTML=html;
    });
});