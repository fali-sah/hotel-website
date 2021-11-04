// Reading all the documents of collection room
const allrooms = document.getElementById('allrooms');
db.collection("room").get().then((querySnapshot) => {
    let html = '';
    // querySnapshot is an array
    querySnapshot.forEach((doc) => {
        // console.log( + "=>   " + doc.id);
        // console.log(doc.data());
        var fulldesc = doc.data().description;
        var shortdesc = fulldesc.substring(0, 50);
        html += ` <div class="col-md-12">
        <div class="row">
            <div class="col-md-3">
                <div class="room-img">
                    <div class="box12">
                        <img src="${doc.data().image}">
                        <div class="box-content">
                            <h3 class="title">${doc.data().name}</h3>
                            <ul class="icon">
                                <li><a href="#" data-toggle="modal" data-target="#modal-id"><i class="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="room-des">
                    <h3><a href="#" data-toggle="modal" data-target="#modal-id">Standard Single</a></h3>
                    <p>${shortdesc}</p>
                    <ul class="room-size">
                        <li><i class="fa fa-arrow-right"></i>Size: ${doc.data().size}</li>
                        <li><i class="fa fa-arrow-right"></i>Beds: ${doc.data().size} </li>
                    </ul>
                    <ul class="room-icon">
                        <li class="icon-1"></li>
                        <li class="icon-2"></li>
                        <li class="icon-3"></li>
                        <li class="icon-4"></li>
                        <li class="icon-5"></li>
                        <li class="icon-6"></li>
                        <li class="icon-7"></li>
                        <li class="icon-8"></li>
                        <li class="icon-9"></li>
                        <li class="icon-10"></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="room-rate">
                    <h3>From</h3>
                    <h1>${doc.data().price}</h1>
                    <a href="#">Book Now</a>
                </div>
            </div>
        </div>
        <hr>
    </div>
    `
    allrooms.innerHTML = html;
    });
});
