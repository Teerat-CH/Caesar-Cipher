def CaesarCipher(input: str, step: int, reverse: bool, removeSpace: bool) -> str:

    letters_az = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    letters_AZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    input_letter_list = []
    code = []

    if removeSpace:
        input = input.replace(" ", "")

    for letter in input:
        input_letter_list.append(letter)

    for letter in input_letter_list:
        if letter in letters_az:
            for i in range(len(letters_az)):
                if letter == letters_az[i]:
                    if i + step <= len(letters_az) - 1:
                        new_letter = letters_az[i+step]
                        code.append(new_letter)
                    if i + step > len(letters_az) - 1:
                        difference = (i + step) - len(letters_az)
                        new_letter = letters_az[difference]
                        code.append(new_letter)
        elif letter in letters_AZ:
            for i in range(len(letters_AZ)):
                if letter == letters_AZ[i]:
                    if i + step <= len(letters_AZ) - 1:
                        new_letter = letters_AZ[i+step]
                        code.append(new_letter)
                    if i + step > len(letters_AZ) - 1:
                        difference = (i + step) - len(letters_AZ)
                        new_letter = letters_AZ[difference]
                        code.append(new_letter)
        else:
            new_letter = letter
            code.append(new_letter)

    if reverse:
        re_code = []

        for i in range(len(code)):
            re_code_i = code[-(i+1)]
            re_code.append(re_code_i)
        
        result = ''.join(re_code)
    else:
        result = ''.join(code)

    return result