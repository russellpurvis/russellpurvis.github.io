function getEvents(templeName){
    fetch('https://russellpurvis.github.io/final/scripts/temples.json')
        .then(result => result.json())
        .then(
            (result) => {
                result.temples.forEach(
                    temple => {
                        if (temple.name.toLowerCase() === templeName.toLowerCase()) {
                            temple.events.forEach(
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
