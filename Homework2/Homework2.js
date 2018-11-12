var Module = (function(a) {
    return { 
    nul: function(a) {
        alert(a);
        return a === null;
    }, 
    und: function(a) {
        alert(a);
        return a === undefined;
    },
    NaN: function(a) {
        alert(a);
        return Number.isNaN(a);
    },
    rand: function(first,last) { 
        return Math.floor(Math.random()*(last-first+1))+first; 
    },
    emptyObject: function(objectNull) {
        if(Object.keys(objectNull).length===0) {
            return "empty";
        }
        else {
            return "full";
        }
    },
    comparisonDeepObject: function(obj1, obj2) {
        if (obj1 instanceof Number || obj1 instanceof String || obj1 instanceof Boolean || obj1 instanceof Date) {
            obj1 = obj1.valueOf();
        }
        if (obj2 instanceof Number || obj2 instanceof String || obj2 instanceof Boolean || obj2 instanceof Date) {
            obj2 = obj2.valueOf();
        }
        if (obj1 === obj2) {
            return true;
        }
        if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") {
            return false;
        }
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (var prop in obj2) {
            if (!(prop in obj1) || !comparisonDeepObjectlPerfect(obj1[prop], obj2[prop])) {
                return false;
            }
        }
        return true;
    }
} 
})();