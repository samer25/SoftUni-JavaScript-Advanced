function constructionCrew(obj) {
    if (obj.dizziness === true) {
        let calc = obj.weight * 0.1 * obj.experience;
        obj.levelOfHydrated += calc;
        obj.dizziness = false;
    }
    return obj;
}

console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }))