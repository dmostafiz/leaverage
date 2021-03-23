exports.slugify = (string) => {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

exports.getText = (html) => {
    var divContainer= document.createElement("div");
    divContainer.innerHTML = html;
    const text = divContainer.textContent || divContainer.innerText || "";
    return text.trim()
}

exports.getFocusKeywords = (text) => {

    function ngrams(a, n) {
        return a.map(function(_, i) {
            return a.slice(i, i + n);
        }).slice(0, 1 - n);
    }

    function count(a) {
        return a.reduce(function(c, x) {
            c[x] = (c[x] || 0) + 1;
            return c;
        }, {});
    }

    function mostCommon(c) {
      
        const obj = Object.keys(c).map(function(x) {
          
            return [x, c[x]]

        }).filter(function(a) {

            return a[1] > 1

        }).sort(function(a, b) {

            return b[1] - a[1]

        });

        // console.log('test: ', obj)

        return obj
    }

    const words = text.split(/\W+/g)
    const wordArr = mostCommon(count(ngrams(words, 3)))

    
    let finalWordArray = []
    wordArr.map(w => {
        const newWord = w[0].replace(/,/g, ' ')  
        
        finalWordArray.push(newWord)
    })
    // console.log('Counter Array: ', finalWordArray)
    
    return finalWordArray
}




    // function ngrams(a, n) {
    //     return a.map(function(_, i) {
    //         return a.slice(i, i + n);
    //     }).slice(0, 1 - n);
    // }

    // function count(a) {
    //     return a.reduce(function(c, x) {
    //         c[x] = (c[x] || 0) + 1;
    //         return c;
    //     }, {});
    // }

    // function mostCommon(c) {
      
      
      
    //     const obj = Object.keys(c).map(function(x) {
          
    //         return [x, c[x]]
    //     }).filter(function(a) {
    //         return a[1] > 1
    //     }).sort(function(a, b) {
    //       return b[1] - a[1]
    //     });

    //     console.log('test: ', obj)

    //     return obj
    // }

    // const words = text.split(/\W+/g)
    // return mostCommon(count(ngrams(words, 3)))
