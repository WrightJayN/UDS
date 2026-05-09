class ValidateInput {

    static isNotEmpty(input) {return !(input == "")}
    static isInHashMap(input, hashmap) {return hashmap.has(input)}; 

    static validateSource(source, hashmap){
        let sourceUpperCase = String(source).trim().toUpperCase();

        if (this.isNotEmpty(sourceUpperCase) == true && this.isInHashMap(sourceUpperCase, hashmap) == true){
            return sourceUpperCase;
        }else if (this.isNotEmpty(sourceUpperCase) == true && this.isInHashMap(sourceUpperCase, hashmap) == false){
            throw new Error(`Couldn't find: ${sourceUpperCase}`);
        }else if (this.isNotEmpty(sourceUpperCase) == false){
            return "FIRST GATE";
        }
    }

    static validateDestination(destination, hashmap){
        let destinationUpperCase = String(destination).trim().toUpperCase();

        if(this.isNotEmpty(destinationUpperCase) == true && this.isInHashMap(destinationUpperCase, hashmap) == true){
            return destinationUpperCase;
        }else if (this.isNotEmpty(destinationUpperCase) == true && this.isInHashMap(destinationUpperCase, hashmap) == false){
            throw new Error(`Couldn't find: ${destinationUpperCase}`);
        }else if (this.isNotEmpty(destinationUpperCase) == false){
            throw new Error(`Destination can't be empty`);
        }
    }

    static validateInputs(source, destination, hashmap){
        let validatedSource = this.validateSource(source, hashmap);
        let validatedDestination = this.validateDestination(destination, hashmap);
        
        return [validatedSource,validatedDestination];
    }

}

export { ValidateInput };