function templeData() {
    const templeJSON = 'json/temple.json';
    fetch(templeJSON)
        .then((response) => response.json())
        .then((templeObject) => {
            templeList = templeObject.templesList;
            // console.log(templeList);
            
            getTempleData(0, "logan-utah");
            getTempleData(1, "laie-hawaii");
            getTempleData(2, "barranquilla-colombia");
            getTempleData(3, "albuquerque-new-mexico");

            
            function getTempleData(i, templeName){

                const addressArr = templeList[i].address.split(", ");
                let address = "";
                for (a = 0; a < addressArr.length; a++){
                    address += "<p>"+ addressArr[a] +"</p>";
                }

                let phoneLink = '<a href="tel:'+ templeList[i].phone +'">'+ templeList[i].phone + '</a>';

                let service = "<p>" + templeList[i].service.rental + "</p><p>" + templeList[i].service.cafeteria + "</p><p>" + templeList[i].service.housing + "</p><p>" + templeList[i].service.discCenter + "</p>";
                
                const ordinancesObject= templeList[i].schedule.ordinance;

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
                for (c = 0; c < templeList[i].schedule.templeClosures.length; c++){
                    templeClosure += "<li>" + templeList[i].schedule.templeClosures[c] + "</li>";
                }

                const announced = '<p><strong>Announced:</strong> ' + templeList[i].history.announced +'<p>';
                const dedicated = '<p><strong>Dedicated:</strong> ' + templeList[i].history.dedicated + '</p>';
                const groundBreaking = '<p><strong>Ground Breaking:</strong> ' + templeList[i].history.groundbreaking + '</p>';

                if(templeList[i].history.rededicated !== undefined){
                    let rededicated ="";
                    const rededicatedArrLength = templeList[i].history.rededicated.length;
                    for(r = 0; r < rededicatedArrLength; r++){
                        rededicated += '<p><strong>Rededicated:</strong> ' + templeList[i].history.rededicated[r] + '</p>';
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