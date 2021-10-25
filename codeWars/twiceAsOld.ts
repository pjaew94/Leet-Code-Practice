// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/python


function twiceAsOld(dadYearsOld, sonYearsOld) {
    let count = 0;

    if(dadYearsOld/2 === sonYearsOld) return count;
    if(dadYearsOld/2 < sonYearsOld) {
        while(dadYearsOld) {
            count ++
            sonYearsOld --
            dadYearsOld --
            if(dadYearsOld/2 === sonYearsOld) return count
        }
    }

    if(dadYearsOld/2 > sonYearsOld) {
        while(dadYearsOld) {
            count ++
            sonYearsOld ++
            dadYearsOld ++
            if(dadYearsOld/2 === sonYearsOld) return count
        }
    }
  }

