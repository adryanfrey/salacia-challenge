function processData(data) { 
    let formatedData = []
    
    // loop through all the scopes of the data object
    for (let scopes in data) {
        let categories = []

        // loop through all the categories in the scope object
        for (let category in data[scopes]) {
            let activities = data[scopes][category]
            let categoryObject = {name: category, activities, totalEmission: 0}

            // sums all the CO2e emissions from activities in current category
            activities.forEach((activity) => {
                let emission = activity[1]
                categoryObject.totalEmission += emission
            })

            categories.push(categoryObject)
        }

       let scopeObject = {name: scopes, categories, totalEmission: 0}
        
        // sums all the CO2e emissions from categories in current scope
        categories.forEach((category) => {
            scopeObject.totalEmission += category.totalEmission
        })

       formatedData.push(scopeObject)
    }

    return formatedData
}

export { processData }