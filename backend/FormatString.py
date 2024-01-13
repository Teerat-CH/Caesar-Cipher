import math
from CapitalizeNamedEntity import CapitalizeNamedEntity

specialCharacters = [".", "," , ":", ";", "!", "?"]
sentenceEnding = [".", "?", "!"]

class Probability(dict):
    def __init__(self, filename):
        self.totalFrequency = 0

        for line in open(filename):
            (word, frequency) = line[:-1].split('\t')
            self[word] = int(frequency)
            self.totalFrequency += self[word]

    def getTotalFrequency(self):
        return self.totalFrequency
    
    def getIndividualFrequency(self, key):
        return self[key]


    def __call__(self, key):
        if key in self:
            return float(self.getIndividualFrequency(key)) / self.getTotalFrequency()
        else:
            return 1.0 / (self.getTotalFrequency() * 10**(len(key)-2))
        
wordProbability = Probability('one-grams.txt')

#---------------------------------------------------------#

def sequenceProbability(sequence):

    totalSequenceProbability = 0

    for word in sequence:
        totalSequenceProbability += math.log10(wordProbability(word))

    return totalSequenceProbability

def splitPossibleCombinations(code, maxLength = 20):

    combination = []

    for i in range(max(len(code), maxLength)):
        combination.append((code[:i+1], code[i+1:]))

    return combination

def memorized(function):
    cache = {}

    def memorizedFunction(*args):
        if args not in cache:
            cache[args] = function(*args)
        return cache[args]

    memorizedFunction.cache = cache
    return memorizedFunction

def flattenOneLayer(list):
    finalList = []

    for sublist in list:
        for element in sublist:
            finalList.append(element)
    
    return finalList

#---------------------------------------------------------#

@memorized
def segmentWithOneGram(String):
    if not String: return []

    String = String.lower()

    allSegmentations = []


    for (first,rest) in splitPossibleCombinations(String):
        allSegmentations.append([first] + segmentWithOneGram(rest))
        
    return max(allSegmentations, key = sequenceProbability)

def segmentBySpecialCharacter(String, listOfSpecialCharacter):

    if String == '':
        return []
    
    i = 0
    while i < len(String) and String[i] not in listOfSpecialCharacter:
        i += 1
    head = String[:i+1]
    tail = String[i+1:]

    return [head] + segmentBySpecialCharacter(tail, listOfSpecialCharacter)

def separateTextByNumber(string):
    if string == '':
        return []
    
    for i in range(len(string)):
        if string[i].isnumeric():
            numberCount = 1
            while string[i+numberCount].isnumeric():
                numberCount += 1
            return [string[:i]] + [string[i:i+numberCount]] + separateTextByNumber(string[i+numberCount:])
    
    return [string]

def segmentByNumber(list):
    resultList = []
    for element in list:
        resultList.append(separateTextByNumber(element))
    
    resultList = flattenOneLayer(resultList)

    if '' in resultList:
        resultList.remove('')
        
    return resultList

@memorized
def segment(String):
    result = []

    StringSegmentBySpecialCharacter = segmentBySpecialCharacter(String, specialCharacters)
    StringSegmentByNumber = segmentByNumber(StringSegmentBySpecialCharacter)

    for element in StringSegmentByNumber:
        result.append(segmentWithOneGram(element))

    result = flattenOneLayer(result)

    return result

#---------------------------------------------------------#

def FormatString(String):

    # Add Spaces

    seperateWordsList = segment(String)

    textWithSpace = ""

    textWithSpace += seperateWordsList[0]

    for i in range(len(seperateWordsList)-1):
        if seperateWordsList[i+1] in specialCharacters:
            textWithSpace += seperateWordsList[i+1]
        else:
            textWithSpace += (" " + seperateWordsList[i+1])

    seperateSentencesList = segmentBySpecialCharacter(textWithSpace, sentenceEnding)

    # Capitalized the biginning of every sentences

    capitalizedSentences = ""

    sentenceCount = 1
    for sentence in seperateSentencesList:
        if sentenceCount > 1:
            sentence = sentence[1:]
        capitalizedSentences += (sentence.capitalize() + " ")
        sentenceCount += 1

    # Capitalized every letter i

    capitalizedSentences = capitalizedSentences.replace(" i ", " I ")
    capitalizedSentences = CapitalizeNamedEntity(capitalizedSentences)

    return capitalizedSentences