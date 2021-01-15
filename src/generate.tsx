import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { scancodes } from './scancodes';

const leftKeyboard = `
                1   2   3   4
         Tab      Q   W   E   R   T
         CapsLock   A   S   D   F   G
          LeftShift   Z   X   C   V
`;
const leftNotes = `
       F4    G4    A4    B4
    Bb3  [C4]   D4    E4    F#4   G#4
       F3    G3    A3    B3    C#4   D#4
          C3    D3    E3    F#3   G#3
`;

const rightKeyboard = `
F5  F6  F7
  7   8   9   0   -
Y   U   I   O   P   [
  H   J   K   L   ;   '
    N   M   ,   .   /
`;
const rightNotes = `
Bb5   C6    D6
   F5    G5    A5    B5    C#6
Bb4   C5    D5    E5    F#5   G#5
   F4    G4    A4    B4    C#5   D#5
     [C4]   D4    E4    F#4   G#4
`;

const allKeys = `${ leftKeyboard } ${ rightKeyboard }`.split(/[ \n]+/).filter(v => v);
const allNotes = `${ leftNotes } ${ rightNotes }`.split(/[ \n]+/).filter(v => v);
const mappings = allKeys.map((key, index) => ({
    key,
    note: allNotes[index].replace(/[\[\]]/g, '')
}));

function main() {
    emit(true);
    emit(false);
}

function noteNameToMidiValue(noteName: string) {
    const [, noteLetter, noteSharpFlat, octaveNumber] = noteName.match(/^(.)([#b])?(\d+)?$/);
    // these numbers are for octave 5, so "C" below is the value for C5.  Other octaves are plus/minus a multiple of 12
    const octaveOffset = 5;
    return {
        c: 60,
        'c#': 61,
        'db': 61,
        d: 62,
        'd#': 63,
        'eb': 63,
        e: 64,
        f: 65,
        'f#': 66,
        'gb': 66,
        g: 67,
        'g#': 68,
        'ab': 68,
        a: 69,
        'a#': 70,
        'bb': 70,
        b: 71
    }[`${ noteLetter.toLowerCase() }${noteSharpFlat ?? ''}`] + (parseInt(octaveNumber || `${octaveOffset}`) - octaveOffset) * 12;
}

function keyToScanCode(key: string) {
    const code = scancodes.find(v => v.baseCase.toLowerCase().replace(/ /g, '') === key.toLowerCase());
    if(!code) throw new Error(`no known scancode for ${key}`);
    return code.set1.make[0];
}

function keyToKeycode(key: string) {
    const special = {
        tab: 9,
        capslock: 20,
        lshift: 16,
        f5: 116,
        f6: 117,
        f7: 118,
        ',': 188,
        '.': 190,
        '/': 191,
        ';': 186,
        '\'': 222,
        '[': 219,
        '-': 189,
    }[key.toLowerCase()];
    if(special) return special;
    if(key.match(/^[a-zA-Z0-9]$/)) return key.toUpperCase().charCodeAt(0);
    throw new Error('unmatched key');
}

function emit(raw: boolean) {
    const output = `<?xml version="1.0" encoding="UTF-8"?>
        ${
            raw ?
            `<!DOCTYPE rawkeyboardmap>
            <rawkeymap version="1.0">
            ` :
            `<!DOCTYPE keyboardmap>
            <keyboardmap version="1.0">
            `
        }
        ${ mappings.map(({ key, note }) => {
            return raw ?
                `<mapping keycode="${ keyToScanCode(key) }" note="${ noteNameToMidiValue(note) }" />` :
                `<mapping key="${ key }" note="${ noteNameToMidiValue(note) }" />`;
            
        }).join('\n')
        }
        ${ raw ? '</rawkeymap>' : '</keyboardmap>' }
    `.trim();

    writeFileSync(resolve(__dirname, '..', raw ? 'concertina-raw.xml' : 'concertina.xml'), output);
}

main();