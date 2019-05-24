let cars = {
    label: 'Autos',
    subs: [
        {
            label: 'SUVs',
            subs: []
        },
        {
            label: 'Trucks',
            subs: [
                {
                    label: '2 Wheel Drive',
                    subs: []
                },
                {
                    label: '4 Wheel Drive',
                    subs: [
                        {
                            label: 'Ford',
                            subs: []
                        },
                        {
                            label: 'Chevrolet',
                            subs: []
                        }
                    ]
                }
            ]
        },
        {
            label: 'Sedan',
            subs: []
        }
    ]
}

var findObjectByLabel = function (obj, label) {
    if (obj.label === label) { return obj; }
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            var foundLabel = findObjectByLabel(obj[i], label);
            if (foundLabel) { return foundLabel; }
        }
    }
    return null;
};

findObjectByLabel(cars, "Chevrolet");