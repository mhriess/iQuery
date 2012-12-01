// The almighty iQuery!
var iQuery = ( function() {
    

    String.prototype.capitalize = function(){
        sentence = this.split(" ");
        for (var i = 0; i < sentence.length; i++){
            sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substr(1);         
        }
        return sentence;
    };
    
    String.prototype.delete_partial = function(to_delete){
        regex = new RegExp (to_delete, "g");
        deleted = this.replace(regex, "");
        return deleted;
    };
    
    String.prototype.insert_into = function(index, insertion){
        words = this.split("");
        words.splice(index, 0, insertion);
        return words.join('');
    };
    
    String.prototype.center = function(length){
        result = Array(length).join(" ") + this + Array(length).join(" ");
        return result;
    };
    
    Array.prototype.each_with_index = function(callback){
        for(var i = 0; i < this.length; i++){
            var index = i;
            var item = this[i];
            callback(item, this);
        }
    };
    
    Array.prototype.find = function(callback){
        for(var i = 0; i < this.length; i++){
            callback(this[i]);
        }
    };
    
    Array.prototype.group_by = function(callback){
        hash = {};
        for (var i = 0; i < this.length; i++) {
            if (hash[callback(this[i])]) {
                hash[callback(this[i])].push(this[i]);
            } else {
                hash[callback(this[i])] = [];
                hash[callback(this[i])].push(this[i]);
            }
        }
        return hash;
    };

    Array.prototype.grep = function(pattern){
      var regex = new RegExp(pattern);
      var matches = [];
      for(var i = 0; i < this.length; i++){
        if (this[i].match(regex)) { matches.push(this[i]); }
      }
      return matches;
    };

    Array.prototype.inject = function(callback){
        var accumulator = this[0];
        for (i = 1; i < this.length; i++){
            accumulator = callback(accumulator, this[i]);
        }
        return accumulator;
    };

    Array.prototype.include = function(object){
        for (var i = 0; i < this.length; i++){
            if (this[i] === object) {return true;}
        } 
    return false;
    };

    Array.prototype.permutation = function(n){  
        if (n === 1) {
            var baseArr = [];
            for (var y = 0; y < this.length; y++){
                baseArr.push([this[y]]);
            }
            return baseArr;
        } else {
            var perm = []; 
            for (var i = 0; i < this.length; i++){ 
                var copyArray = this.slice(0);
                copyArray.splice(i, 1);

                var subArray = this.permutation(copyArray, n - 1);
                for (var x = 0; x < subArray.length; x++){
                    var subCopyArray = subArray[x].slice(0);

                    subCopyArray.splice(0, 0, this[i]);
                    perm.push(subCopyArray);
                }
            } 
            return perm;
         }
         
    };

    Array.prototype.reject = function(callback){
        var result = [];
        for (var i = 0; i < this.length; i++){
            if (callback(this[i]) === false) {
                result.push(this[i]);
            }
        }
        return result;
    };

  

}());