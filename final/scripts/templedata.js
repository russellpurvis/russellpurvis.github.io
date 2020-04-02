function templeData() {
    const templeJSON = 'scripts/temple.json';
    fetch(templeJSON)
        .then((response) => response.json())
        .then((templeObject) => {
            temples = templeObject.templesList;
            // console.log(temples);
            
            getTempleData(0, "barranquilla-colombia");
            getTempleData(1, "laie-hawaii");
            getTempleData(2, "logan-utah");
            getTempleData(3, "rome-italy");

            
            function getTempleData(i, templeName){

                const addressArr = temples[i].address.split(", ");
                let address = "";
                for (a = 0; a < addressArr.length; a++){
                    address += "<p>"+ addressArr[a] +"</p>";
                }

                let phoneLink = '<a href="tel:'+ temples[i].phone +'">'+ temples[i].phone + '</a>';

                let service = "<p>" + temples[i].service.rental + "</p><p>" + temples[i].service.cafeteria + "</p><p>" + temples[i].service.housing + "</p><p>" + temples[i].service.discCenter + "</p>";
                
                const ordinancesObject= temples[i].schedule.ordinance;

                function defineOrdinance (ordinanceArr){
                    let ordinanceObj = "";
                    for (b = 0; b < ordinanceArr.length; b++){
                        ordinanceObj += "<li>" + ordinanceArr[b] + "</li>";
                    }
                    return ordinanceObj;
                };

                const baptism = defineOrdinance(ordinancesObject.baptism);

                const endownment = defineOrdinance(ordinancesObject.endownment);

                const sealing = defineOrdinance(ordinancesObject.sealing);

                let templeClosure = "";
                for (c = 0; c < temples[i].schedule.templeClosures.length; c++){
                    templeClosure += "<li>" + temples[i].schedule.templeClosures[c] + "</li>";
                }

                const announced = '<p><strong>Announced:</strong> ' + temples[i].history.announced +'<p>';
                const dedicated = '<p><strong>Dedicated:</strong> ' + temples[i].history.dedicated + '</p>';
                const groundBreaking = '<p><strong>Ground Breaking:</strong> ' + temples[i].history.groundbreaking + '</p>';

                if(temples[i].history.rededicated !== undefined){
                    let rededicated ="";
                    const rededicatedArrLength = temples[i].history.rededicated.length;
                    for(r = 0; r < rededicatedArrLength; r++){
                        rededicated += '<p><strong>Rededicated:</strong> ' + temples[i].history.rededicated[r] + '</p>';
                    }
                    const history = announced + groundBreaking + dedicated + rededicated;
                    document.querySelector("." + templeName + "-history").innerHTML = history;

                } else {
                    const history = announced + groundBreaking + dedicated;
                    document.querySelector("." + templeName + "-history").innerHTML = history;

                }                
                
                document.querySelector("." + templeName + "-address").innerHTML = address;
                document.querySelector("." + templeName + "-phone").innerHTML = phoneLink;
                document.querySelector("." + templeName + "-service").innerHTML = service;
                document.querySelector("." + templeName + "-baptism").innerHTML = baptism;
                document.querySelector("." + templeName + "-endownment").innerHTML = endownment;
                document.querySelector("." + templeName + "-sealing").innerHTML = sealing;
                document.querySelector("." + templeName + "-closure").innerHTML = templeClosure;
            }
                
        });
};

templeData();