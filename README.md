# Playing a virtual concertina on your PC

## How to

Download and install [Virtual MIDI Piano Keyboard](https://vmpk.sourceforge.io/) (VMPK)

Download and install the keyboard layout `concertina.xml` from this Github repository.

Configure VMPK to use the keyboard layout.

## Resources

Based on these resources, because I do not know much about music or musical instruments:

* https://www.youtube.com/watch?v=1LTRErsh2kU
* https://www.buttonbox.com/images/elise-notechart.png

See also:

* https://github.com/mechanical-snail/vmpk_layouts_contrib
* http://www.vetra.com/scancodes.html

## Caveats / limitations

* Doesn't simulate moving the bellows, or whatever that's called.
* Most consumer computer keyboards will "lock" when too many keys are pressed at once, meaning certain chords may be impossible.  More expensive mechanical or gaming keyboards don't have this problem.

## Concertina layout

### Left hand (bass)

C4 = middle C

B->C and E->F are half-steps (no sharp/flat between them)

```text
       F4    G4    A4    B4
    Bb3  [C4]   D4    E4    F#4   G#4
       F3    G3    A3    B3    C#4   D#4
          C3    D3    E3    F#3   G#3
```

### Right hand (treble, melody)

```text
    Bb5   C6    D6
       F5    G5    A5    B5    C#6
    Bb4   C5    D5    E5    F#5   G#5
       F4    G4    A4    B4    C#5   D#5
         [C4]   D4    E4    F#4   G#4
```
