function templeData() {
    const templeJSON = '/json/temple.json';
    fetch(templeJSON)
        .then((response) => response.json())
        .then((templeObject) => {
            temples = templeObject.templesList;
            
            getTempleData(0, "loganClosures");
          
            function getTempleData(i, templeName){
                let templeClosure = "";
                for (c = 0; c < templeList[i].schedule.templeClosures.length; c++){
                    templeClosures += "<li>" + templeList[i].schedule.templeClosures[c] + "</li>";
                }

                document.querySelector("." + templeName + "-closure").innerHTML = templeClosure;
            }
        });
};

templeData();