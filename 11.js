/**
 * Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible 
query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings 
[dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries
 */



class Query {
    /**
     * 
     * @param {Array} set Array of strings for the query
     */
    constructor(set) {
        this.set = set;
        this.letterTree = {};
        this.parseSet(set);

        console.log(this.letterTree)
    }

    

    parseSet(set) {
        set.forEach(word => {
            this.storeWord(word, null);
        })
    }

    storeWord(word, parent) {
        for(let i = 0; i < word.length; i++) {
            if(!parent) {
                if(!this.letterTree[word[i]]) {
                    this.letterTree[word[i]] = this.storeWord(word.substr(1), word[i])
                }
            }
        }
    }

    search(s) {
        let result = [];

        this.set.forEach(item => {
            if(item.startsWith(s)) {
                result.push(item);
            }
        });

        return result;
    }
}

const query = new Query(['dog', 'deer', 'deal']);

console.log(query.search('de'));