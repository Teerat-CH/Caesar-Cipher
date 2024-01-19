import spacy

NER = spacy.load("en_core_web_md")

def CapitalizeNamedEntity(string):
  nerString = NER(string)
  for entity in nerString.ents:
    string = string.replace(str(entity), str(entity).capitalize())
  return string