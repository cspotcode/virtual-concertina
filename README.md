# Playing a virtual concertina on your PC

Inspired by far too much Sea of Thieves during COVID, and also TikTok sea shanties.

## How to

Download and install [Virtual MIDI Piano Keyboard](https://vmpk.sourceforge.io/) (VMPK)  This software lets you play your computer keyboard like an instrument.

Download the raw keyboard layout [`concertina-raw.xml`](https://raw.githubusercontent.com/cspotcode/virtual-concertina/main/concertina-raw.xml) from this Github repository.

Configure VMPK to use the raw keyboard layout and set it to "raw" mode.

![](docs/vmpk-click-preferences.png)

![](docs/vmpk-preferences.png)

Pick an instrument in VMPK.  "Accordion" or "Reed Organ" sound concertina-ish.

Press keyboard keys and notes should play.  A simple major scale starting with middle C is:

> N M , H J K L U

## Caveats / limitations

* Windows only.  The keyboard layouts would have to be re-generated for other operating systems.
* Doesn't simulate moving the bellows, or whatever it's called when you pull/push an accordion.
* Most consumer computer keyboards will "lock" when too many keys are pressed at once, meaning certain chords may be impossible.  More expensive mechanical or gaming keyboards don't have this problem.

## Concertina layout

There seem to be many different types of Concertina.  Below is the layout used here, I believe it's called a "duet concertina."  The left hand has basically the same layout as the right, but transposed down with some overlap.  (Images of duet concertinas here: https://www.concertina.info/tina.faq/conc-typ.htm)

### Left hand (bass)

C3 is left shift, F3 is capslock, Bb3 is Tab, F4 is 1.

```text
       F4    G4    A4    B4
    Bb3  [C4]   D4    E4    F#4   G#4
       F3    G3    A3    B3    C#4   D#4
          C3    D3    E3    F#3   G#3
```

### Right hand (treble, melody)

C4 is N, F4 is H, Bb4 is U, F5 is 7, and Bb5 is F5

```text
    Bb5   C6    D6
       F5    G5    A5    B5    C#6
    Bb4   C5    D5    E5    F#5   G#5
       F4    G4    A4    B4    C#5   D#5
         [C4]   D4    E4    F#4   G#4
```

## Resources

Based on these resources, because I do not know much about music or musical instruments:

* https://www.youtube.com/watch?v=Qqmvrv2h2Fs
* https://www.youtube.com/watch?v=1LTRErsh2kU
* https://www.buttonbox.com/images/elise-notechart.png

See also:

* https://github.com/mechanical-snail/vmpk_layouts_contrib
* http://www.vetra.com/scancodes.html

## Misc

C4 = middle C

B->C and E->F are half-steps (no sharp/flat between them)
