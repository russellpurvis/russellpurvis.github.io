function getEvents(cityName){
    fetch('russellpurvis.github.io/final/scripts/towns.json')
        .then(result => result.json())
        .then(
            (result) => {
                result.towns.forEach(
                    town => {
                        if (town.name.toLowerCase() === cityName.toLowerCase()) {
                            town.events.forEach(
                                event => {
                                    let li = document.createElement('li');
                                    li.textContent = event;
    
                                    document.querySelector('#events').appendChild(li);
                                }
                            )
                        }
                    }
    
                )
            }
        );
    }
